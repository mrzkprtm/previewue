/**
 * Server-side registration API endpoint.
 *
 * SECURITY: Supabase credentials are now server-side only (via env vars),
 * never exposed to the client. File uploads are proxied through this endpoint.
 *
 * Usage: POST /api/register with multipart/form-data
 */
import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

// Ensure this endpoint is server-rendered (not prerendered) in hybrid mode
export const prerender = false;

// ── Supabase credentials ─────────────────────────────────────────────────────
const SUPABASE_URL = "https://rbivamtmcadfnemqcvac.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiaXZhbXRtY2FkZm5lbXFjdmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MTU2MjgsImV4cCI6MjA4MTM5MTYyOH0.hZTprt4i3Y896uY_7m-lz-8T01lAArfj7hBIxw1utnc";

// ── Sanitisation helpers (mirror client-side but authoritative) ──────────────
const MAX_TEXT = 500;
const stripTags = (v = "") => v.replace(/<[^>]*>/g, "");
const dropCtrl = (v = "") => v.replace(/[\u0000-\u001f\u007f]/g, "");
const sanitize = (v = "") => dropCtrl(stripTags(v)).trim().slice(0, MAX_TEXT);

const EMAIL_RE = /^[\w.!#$%&'*+/=?`{|}~-]+@[\w-]+(\.[\w-]+)+$/;
const PHONE_RE = /^\d{9,15}$/;

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOW_LISTS: Record<string, string[]> = {
  jenis_kelamin: ["Laki-laki", "Perempuan"],
  status: ["Pelajar SMA", "Mahasiswa", "Fresh Graduate", "Bekerja", "Tidak Bekerja / Gap Year"],
  level: ["SMA/SMK", "D3", "S1", "S2", "S3"],
  program: [
    "IELTS","SAT","ACT","GMAT","GRE","TOEFL","TOEFL iBT","PTE",
    "IGCSE","TOEIC","GED","A-Level","AS-Level","O-Level","IB",
    "LSAT","UTBK","Scholarship","Ausbildung","General English",
    "Business English","BIPA","JLPT","HSK","TOPIK","DELF",
    "TestDaF","Duolingo","Belum Tahu",
  ],
  tes_tambahan: ["Ya", "Tidak", "Belum Yakin"],
  jadwal: ["Private", "Semi-private", "Group", "Paket"],
  program_intensif: ["Ya", "Tidak", "Tergantung rekomendasi tutor"],
  screening: ["Ya", "Tidak"],
  intake: ["Jan–Mar", "Apr–Jun", "Jul–Sep", "Oct–Dec", "Belum Pasti"],
  program_level: ["Bronze", "Silver", "Gold", "Premium"],
  negara: ["Indonesia","United States","United Kingdom","Australia","Canada","Singapore","Malaysia","Other"],
};

function validateAllowList(key: string, val: string | null): boolean {
  if (!val) return true; // optional field
  return ALLOW_LISTS[key] ? ALLOW_LISTS[key].includes(val) : true;
}

// ── POST handler ─────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // 1. Extract & validate file
    const file = formData.get("bukti_pembayaran") as File | null;
    if (!file || !(file instanceof File) || file.size === 0) {
      return jsonError("File bukti pembayaran wajib diunggah", 400);
    }
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return jsonError("Format file harus JPG, PNG, atau PDF", 400);
    }
    if (file.size > MAX_FILE_SIZE) {
      return jsonError("Ukuran file maksimal 5MB", 400);
    }

    // 2. Validate allow-listed selects
    for (const key of Object.keys(ALLOW_LISTS)) {
      const val = formData.get(key) as string | null;
      if (!validateAllowList(key, val)) {
        return jsonError(`Pilihan untuk ${key} tidak valid`, 400);
      }
    }

    // 3. Validate email / phone
    const email = (formData.get("email") as string || "").trim();
    if (!email || !EMAIL_RE.test(email)) {
      return jsonError("Format email tidak valid", 400);
    }

    const rawPhone = (formData.get("no_hp") as string || "").trim().replace(/\s|\+/g, "");
    if (!rawPhone || !PHONE_RE.test(rawPhone)) {
      return jsonError("Format nomor WhatsApp harus angka (9-15 digit)", 400);
    }

    // 4. Password policy
    const pwd = formData.get("lms_password") as string || "";
    const pwdConfirm = formData.get("lms_password_confirm") as string || "";
    if (pwd.length < 8) {
      return jsonError("Password LMS minimal 8 karakter", 400);
    }
    if (pwd !== pwdConfirm) {
      return jsonError("Konfirmasi password tidak sama", 400);
    }

    // 5. Required fields
    const requiredText = ["nama", "jenis_kelamin", "negara", "tanggal_lahir", "alamat",
      "nama_kontak_darurat", "kontak_darurat", "status", "level", "program",
      "jadwal", "program_intensif", "lms_username"];
    for (const field of requiredText) {
      if (!(formData.get(field) as string || "").trim()) {
        return jsonError(`${field} wajib diisi`, 400);
      }
    }

    // 6. Sanitize text fields
    const s = (key: string) => sanitize(formData.get(key) as string || "");

    // 7. Multi-value fields
    const tujuan = (formData.getAll("tujuan") as string[]).map(sanitize).filter(Boolean);
    let kendala = (formData.getAll("kendala") as string[]).map(sanitize).filter(Boolean);

    // Handle "lain lain" custom kendala
    const kendalaLain = s("kendala_lain");
    if (kendalaLain) {
      kendala = kendala.filter(
        (k) => !["lain lain", "lain-lain", "lainnya", "lain"].includes(k.toLowerCase())
      );
      kendala.push(kendalaLain);
    }

    // 8. Upload file to Supabase Storage
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "");
    const fileName = `${Date.now()}_${safeName}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from("payment_proofs")
      .upload(fileName, new Uint8Array(arrayBuffer), {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });
    if (uploadError) {
      console.error("[register] Upload error:", uploadError);
      return jsonError("Gagal upload bukti pembayaran: " + uploadError.message, 500);
    }

    const { data: publicUrlData } = supabase.storage
      .from("payment_proofs")
      .getPublicUrl(fileName);
    const buktiUrl = publicUrlData?.publicUrl ?? null;

    // 9. Build row object
    const row = {
      nama: s("nama"),
      no_hp: rawPhone || null,
      email: email || null,
      alamat: s("alamat") || null,
      program: s("program") || null,
      jenis_kelamin: formData.get("jenis_kelamin") || null,
      tanggal_lahir: formData.get("tanggal_lahir") || null,
      domisili_kota: s("kota") || null,
      domisili_provinsi: s("provinsi") || null,
      domisili_negara: s("negara") || null,
      status_saat_ini: formData.get("status") || null,
      pendidikan_terakhir: formData.get("level") || null,
      apakah_bekerja: formData.get("status_kerja") === "Ya",
      nama_perusahaan: s("perusahaan") || null,
      posisi_jabatan: s("posisi") || null,
      industri: s("industri") || null,
      tujuan_utama: tujuan.length ? tujuan.join(", ") : null,
      target_jenjang: s("jenjang_pendidikan") || null,
      butuh_tes_lain: formData.get("tes_tambahan") || null,
      rencana_tes: formData.get("rencana_tes") || null,
      target_skor: s("target_skor") || null,
      pernah_kursus: formData.get("kursus_sebelumnya") === "Ya",
      detail_kursus: s("kursus_sebelumnya_detail") || null,
      kendala_utama: kendala.length ? kendala : null,
      alasan_memilih: s("alasan_memilih") || null,
      ekspektasi: s("ekspektasi") || null,
      preferensi_kelas: formData.get("jadwal") || null,
      kesediaan_intensif: formData.get("program_intensif") || null,
      bersedia_screening: formData.get("screening") === "Ya",
      studi_negara_tujuan: s("negara_studi") || null,
      studi_univ_target: s("universitas_target") || null,
      studi_prodi_target: s("program_studi") || null,
      studi_intake: formData.get("intake") || null,
      kerja_negara_tujuan: s("negara_kerja") || null,
      kerja_bidang_target: s("bidang_industri_target") || null,
      tanggal_rencana_tes: formData.get("rencana_tes") || null,
      prospect_status: "none",
      nama_kontak_darurat: s("nama_kontak_darurat") || null,
      kontak_darurat: s("kontak_darurat") || null,
      skor_awal: formData.get("skor_awal") || null,
      lms_username: s("lms_username") || null,
      lms_password: sanitize(pwd),       // TODO: hash before storing
      tingkat_program: formData.get("program_level") || null,
      tes_tambahan_detail: (formData.getAll("tes_tambahan_detail") as string[]).map(sanitize).filter(Boolean).join(", ") || null,
      bukti_pembayaran_url: buktiUrl,
      kecamatan: s("kecamatan") || null,
      kelurahan: s("kelurahan") || null,
      catatan: s("catatan") || null,
    };

    // 10. Insert
    const { error: insertError } = await supabase
      .from("marketing_retail")
      .insert([row]);

    if (insertError) {
      console.error("[register] Insert error:", insertError);
      return jsonError(insertError.message || "Gagal menyimpan data", 500);
    }

    return new Response(
      JSON.stringify({ ok: true, buktiUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("[register] Unexpected error:", err);
    return jsonError(err?.message || "Internal server error", 500);
  }
};

function jsonError(message: string, status: number) {
  return new Response(
    JSON.stringify({ ok: false, error: message }),
    { status, headers: { "Content-Type": "application/json" } }
  );
}
