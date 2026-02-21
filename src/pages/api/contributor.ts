export const prerender = false;

import type { APIRoute } from "astro";

// Sanitize: strip HTML tags and limit length
function sanitize(value: unknown, maxLen = 255): string {
    if (typeof value !== "string") return "";
    return value
        .replace(/[<>]/g, "")
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
        .trim()
        .slice(0, maxLen);
}

// Only allow digits and dashes in phone/account numbers
function sanitizeNumeric(value: unknown, maxLen = 30): string {
    if (typeof value !== "string") return "";
    return value.replace(/[^0-9\-\s]/g, "").trim().slice(0, maxLen);
}

// Referral code: only allow letters, digits, and dots
function sanitizeReferralCode(value: unknown): string {
    if (typeof value !== "string") return "";
    return value.replace(/[^a-zA-ZÀ-ÿ0-9\.]/g, "").trim().slice(0, 30);
}

export const POST: APIRoute = async ({ request }) => {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return new Response(JSON.stringify({ error: "Invalid content type" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    // --- Sanitize & validate ---
    const nama_depan = sanitize(body.nama_depan, 100);
    const nama_belakang = sanitize(body.nama_belakang, 100);
    const nama = sanitize(body.nama || `${nama_depan} ${nama_belakang}`.trim(), 200);
    const pekerjaan = sanitize(body.pekerjaan);
    const no_hp = sanitizeNumeric(body.no_hp, 20);
    const alumni = body.alumni;
    const nomor_rekening = sanitizeNumeric(body.nomor_rekening, 30);
    const bank = sanitize(body.bank, 50);
    const referral_code = sanitizeReferralCode(body.referral_code);
    const terms_accepted = body.terms_accepted === true;

    if (!nama_depan || !pekerjaan || !no_hp || !alumni || !nomor_rekening || !bank) {
        return new Response(JSON.stringify({ error: "Semua field wajib diisi." }), {
            status: 422,
            headers: { "Content-Type": "application/json" },
        });
    }

    if (!terms_accepted) {
        return new Response(
            JSON.stringify({ error: "Anda harus menyetujui ketentuan perjanjian sebelum mendaftar." }),
            { status: 422, headers: { "Content-Type": "application/json" } }
        );
    }

    if (!["ya", "tidak"].includes(String(alumni))) {
        return new Response(JSON.stringify({ error: "Value alumni tidak valid." }), {
            status: 422,
            headers: { "Content-Type": "application/json" },
        });
    }

    const SUPABASE_URL = import.meta.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return new Response(JSON.stringify({ error: "Server configuration error." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    // --- Duplicate check: match by no_hp AND nomor_rekening ---
    const checkUrl = new URL(`${SUPABASE_URL}/rest/v1/contributors`);
    checkUrl.searchParams.set("no_hp", `eq.${no_hp}`);
    checkUrl.searchParams.set("nomor_rekening", `eq.${nomor_rekening}`);
    checkUrl.searchParams.set("select", "id,referral_code,nama");
    checkUrl.searchParams.set("limit", "1");

    const checkRes = await fetch(checkUrl.toString(), {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Accept: "application/json",
        },
    });

    if (checkRes.ok) {
        const existing: { id: string; referral_code: string | null; nama: string }[] = await checkRes.json();
        if (existing.length > 0) {
            return new Response(
                JSON.stringify({
                    error: "duplicate",
                    referral_code: existing[0].referral_code ?? null,
                    nama: existing[0].nama ?? "",
                }),
                { status: 409, headers: { "Content-Type": "application/json" } }
            );
        }
    }


    const insertPayload = {
        nama,
        nama_depan,
        nama_belakang: nama_belakang || null,
        pekerjaan,
        no_hp,
        is_alumni: alumni === "ya",
        nomor_rekening,
        bank,
        referral_code: referral_code || null,
        terms_accepted: true,
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/contributors`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal",
        },
        body: JSON.stringify(insertPayload),
    });

    if (!res.ok) {
        let detail = "";
        try {
            const err = await res.json();
            detail = err?.message || err?.error || "";
        } catch { }
        return new Response(
            JSON.stringify({ error: `Gagal menyimpan data: ${detail}` }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(JSON.stringify({ success: true }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
};
