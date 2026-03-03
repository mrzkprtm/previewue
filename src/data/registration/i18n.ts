/**
 * i18n dictionary for the Registration Form.
 * Extracted from the monolithic pendaftaran.astro to keep the page lean.
 */

export type Lang = "id" | "en";

export interface LangToast {
  fieldRequired: string;
  passwordMismatch: string;
  passwordTooShort: string;
  fileRequired: string;
  validationMissing: string;
  genericError: string;
}

export interface LangFields {
  labels: Record<string, string>;
  placeholders: Record<string, string>;
  helps: Record<string, string>;
  options: Record<string, string[]>;
}

export interface LangEntry {
  formTitle: string;
  otherOption: string;
  sectionTitles: string[];
  progress: string[];
  btnPrev: string;
  btnNext: string;
  btnSubmit: string;
  alamatHint: string;
  fileHint: string;
  chooseFile: string;
  dropzoneText: string;
  dropzoneOr: string;
  fileView: string;
  fileRemove: string;
  dropzoneError: string;
  successSubmission: string;
  viewPaymentPDF: string;
  downloadPayment: string;
  toast: LangToast;
  passwordShow: string;
  passwordHide: string;
  passwordHelpWeak: string;
  passwordHelpMedium: string;
  passwordHelpStrong: string;
  fields: LangFields;
  review: {
    issuesTitle: string;
    readyTitle: string;
    readyMsg: string;
    fixLabel: string;
    confirmLabel: string;
    required: string;
  };
}

export type LangDict = Record<Lang, LangEntry>;

export const langDict: LangDict = {
  id: {
    formTitle: "Formulir Pendaftaran",
    otherOption: "Lainnya (Masukkan sendiri)",
    sectionTitles: [
      "Informasi Dasar",
      "Informasi Pekerjaan",
      "Tujuan Program",
      "Informasi Studi/Pekerjaan Lanjutan",
      "Preferensi & Ekspektasi",
      "Pembayaran & Akses LMS",
    ],
    progress: ["Dasar", "Pekerjaan", "Tujuan", "Studi/Kerja", "Preferensi", "Pembayaran"],
    btnPrev: "← Sebelumnya",
    btnNext: "Lanjut →",
    btnSubmit: "Kirim Pendaftaran",
    alamatHint: "Untuk negara selain Indonesia, tulis alamat lengkap di sini.",
    fileHint: "Format: JPG, PNG, atau PDF. Maksimal 5MB",
    chooseFile: "Pilih File",
    dropzoneText: "Drag & drop di sini",
    dropzoneOr: "atau",
    fileView: "Lihat",
    fileRemove: "Hapus",
    dropzoneError: "File bukti pembayaran wajib diunggah",
    successSubmission: "Berhasil! Data Anda telah dikirim. Tim kami akan menghubungi Anda segera.",
    viewPaymentPDF: "Lihat Bukti Pembayaran (PDF)",
    downloadPayment: "Download Bukti Pembayaran",
    toast: {
      fieldRequired: "{field} wajib diisi",
      passwordMismatch: "Konfirmasi password tidak sama",
      passwordTooShort: "Password LMS minimal 8 karakter",
      fileRequired: "Anda harus mengupload bukti pembayaran",
      validationMissing: "⚠ Harap isi semua field yang wajib diisi",
      genericError: "Error: {msg}",
    },
    passwordShow: "Show",
    passwordHide: "Hide",
    passwordHelpWeak: "Lemah — gunakan minimal 8 karakter dengan kombinasi huruf dan angka.",
    passwordHelpMedium: "Sedang — tambahkan simbol atau huruf kapital.",
    passwordHelpStrong: "Kuat — baik!",
    review: {
      issuesTitle: "Data Tidak Sesuai",
      readyTitle: "Data Siap Dikirim",
      readyMsg:
        'Semua data wajib sudah terisi dengan benar. Klik <strong>Kirim Sekarang</strong> untuk mengirim pendaftaran.',
      fixLabel: "Perbaiki Data",
      confirmLabel: "Kirim Sekarang",
      required: "Field ini wajib diisi.",
    },
    fields: {
      labels: {
        "label-nama": "Nama Lengkap *",
        "label-email": "Email Aktif *",
        "label-nohp": "No. WhatsApp *",
        "label-jk": "Jenis Kelamin *",
        "label-negara": "Negara *",
        "label-provinsi": "Provinsi *",
        "label-kabupaten": "Kabupaten/Kota *",
        "label-kecamatan": "Kecamatan *",
        "label-kelurahan": "Kelurahan/Desa *",
        "label-tgllahir": "Tanggal Lahir *",
        "label-alamat": "Alamat Lengkap *",
        "label-kontakdarurat": "Nama Kontak Darurat *",
        "label-nokontakdarurat": "No. Kontak Darurat *",
        "label-status": "Status Saat Ini *",
        "label-pendidikan": "Pendidikan Terakhir *",
        "label-status_kerja": "Saat Ini Bekerja? *",
        "label-kerja_ya": "Ya",
        "label-kerja_tidak": "Tidak",
        "label-perusahaan": "Nama Perusahaan/Institusi",
        "label-posisi": "Posisi/Jabatan",
        "label-industri": "Industri",
        "label-tujuan_utama": "Tujuan Utama Mengambil Kursus *",
        "label-tujuan1": "Pendidikan (Studi Luar/Dalam Negeri)",
        "label-tujuan2": "Pekerjaan / Karier",
        "label-tujuan3": "Migrasi",
        "label-tujuan4": "Pengembangan Diri",
        "label-jenjang": "Jenjang Pendidikan yang Ditargetkan",
        "label-program": "Program Tes yang Ingin Dipersiapkan *",
        "label-tes_tambahan": "Butuh Tes Lain Selain Tes Utama?",
        "label-rencana_tes": "Kapan Rencana Mengambil Tes Resmi?",
        "label-negara_studi": "Negara Tujuan Studi",
        "label-universitas": "Universitas Target (jika sudah ada)",
        "label-program_studi": "Program Studi Target",
        "label-intake": "Perkiraan Intake",
        "label-negara_kerja": "Negara Tujuan Bekerja",
        "label-bidang_industri_target": "Bidang/Industri Target",
        "label-jadwal": "Preferensi Kelas *",
        "label-program_level": "Tingkat Program *",
        "label-program_intensif": "Bersedia Program Intensif? *",
        "label-target_skor": "Target Skor yang Ingin Dicapai",
        "label-skor_awal": "Skor Awal (jika ada)",
        "label-kendala": "Kendala Utama Anda Saat Ini",
        "label-kendala1": "Speaking",
        "label-kendala2": "Writing",
        "label-kendala3": "Reading",
        "label-kendala4": "Listening",
        "label-kendala5": "Grammar",
        "label-kendala6": "Konsistensi Belajar",
        "label-kendala9": "Lain lain",
        "label-bukti_pembayaran": "Upload Bukti Pembayaran *",
        "label-alasan_memilih": "Alasan Memilih Ultimate Education",
        "label-ekspektasi": "Ekspektasi Anda Setelah Mengikuti Program Ini",
        "label-advisor": "Bersedia Dihubungi Tim Academic Advisor?",
        "label-advisor_ya": "Ya",
        "label-advisor_tidak": "Tidak",
        "label-kursus_sebelumnya": "Pernah Kursus Persiapan Sebelumnya?",
        "label-kursus_ya": "Ya",
        "label-kursus_tidak": "Tidak",
        "label-kursus_detail": "Tes Apa & Skor Terakhir (jika ada)",
        "label-catatan": "Catatan Tambahan",
        "label-lms_username": "Username untuk LMS *",
        "label-lms_password": "Password untuk LMS *",
        "label-lms_password_confirm": "Konfirmasi Password LMS *",
      },
      placeholders: {
        "input-nohp": "628xxxxxxxxxx",
        "input-tgllahir": "dd/mm/yyyy",
        alamat_textarea: "Jln... No..., RT/RW, dll",
        kendala_lain_input: "Jelaskan kendala (opsional)",
        negara_studi_other: "Masukkan negara lain...",
        universitas_target_other: "Masukkan universitas...",
        lms_username: "Masukkan username yang diinginkan",
        lms_password: "Minimal 8 karakter",
        lms_password_confirm: "Ulangi password",
        "input-program_studi": "Contoh: Computer Science, Business",
        "input-negara_kerja": "Contoh: Singapore, Australia",
        "input-bidang_industri_target": "Contoh: IT, Finance, Education",
        "input-alasan_memilih": "Contoh: Terjangkau, Lokasi, Benefit",
        "input-ekspektasi": "Tulis harapan Anda...",
        "input-kursus_sebelumnya_detail": "Contoh: IELTS 6.5",
        "input-catatan": "Informasi lain yang ingin Anda sampaikan...",
      },
      helps: {
        alamat_help: "Untuk negara selain Indonesia, tulis alamat lengkap di sini.",
        lms_username_help: "Username akan digunakan untuk akses LMS",
        lms_password_confirm_help:
          "Pastikan password konfirmasi sama dengan password di sebelah kiri.",
      },
      options: {
        negara_studi_select: ["-- Pilih Negara --"],
        universitas_select: ["-- Pilih Universitas --"],
        program_level_select: ["-- Pilih Tingkat --"],
        program_level_pending: ["-- Pilih Kelas Terlebih Dahulu --"],
        jenis_kelamin: ["-- Pilih --", "Laki-laki", "Perempuan"],
        negara_select: [
          "Indonesia",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "Singapore",
          "Malaysia",
          "Other",
        ],
        provinsi_select: ["-- Pilih Provinsi --"],
        kota_select: ["-- Pilih Kabupaten/Kota --"],
        kecamatan_select: ["-- Pilih Kecamatan --"],
        kelurahan_select: ["-- Pilih Kelurahan/Desa --"],
        status: [
          "-- Pilih --",
          "Pelajar SMA",
          "Mahasiswa",
          "Fresh Graduate",
          "Bekerja",
          "Tidak Bekerja / Gap Year",
        ],
        level: ["-- Pilih --", "SMA/SMK", "D3", "S1", "S2", "S3"],
        industri_select: [
          "-- Pilih --",
          "Pendidikan",
          "Teknologi",
          "Keuangan",
          "Manufaktur",
          "Healthcare",
          "Government",
          "Lainnya",
        ],
        jenjang_select: ["-- Pilih --", "S1", "S2", "S3"],
        program_select: [
          "-- Pilih --",
          "IELTS", "SAT", "ACT", "GMAT", "GRE", "TOEFL", "TOEFL iBT", "PTE",
          "IGCSE", "TOEIC", "GED", "A-Level", "AS-Level", "O-Level", "IB",
          "LSAT", "UTBK", "Scholarship", "Ausbildung", "General English",
          "Business English", "BIPA", "JLPT", "HSK", "TOPIK", "DELF",
          "TestDaF", "Duolingo", "Belum Tahu / Butuh Konsultasi",
        ],
        tes_tambahan_select: ["-- Pilih --", "Ya", "Tidak", "Belum Yakin"],
        intake_select: [
          "-- Pilih --",
          "Januari - Maret",
          "April - Juni",
          "Juli - September",
          "Oktober - Desember",
          "Belum Pasti",
        ],
        jadwal_select: ["-- Pilih --", "Private", "Semi-private", "Group", "Paket"],
        program_intensif_select: [
          "-- Pilih --",
          "Ya",
          "Tidak",
          "Tergantung Rekomendasi Tutor",
        ],
      },
    },
  },
  en: {
    formTitle: "Registration Form",
    otherOption: "Other (Enter manually)",
    sectionTitles: [
      "Basic Information",
      "Employment Information",
      "Program Purpose",
      "Further Study/Work Information",
      "Class Preferences & Expectations",
      "Payment & LMS Access",
    ],
    progress: ["Basic", "Employment", "Purpose", "Study/Work", "Preferences", "Payment"],
    btnPrev: "← Previous",
    btnNext: "Next →",
    btnSubmit: "Submit Registration",
    alamatHint: "For countries other than Indonesia, write the full address here.",
    fileHint: "Format: JPG, PNG, or PDF. Max 5MB",
    chooseFile: "Choose File",
    dropzoneText: "Drag & drop here",
    dropzoneOr: "or",
    fileView: "View",
    fileRemove: "Remove",
    dropzoneError: "Payment proof file is required",
    successSubmission:
      "Success! Your data has been submitted. Our team will contact you shortly.",
    viewPaymentPDF: "View Payment Proof (PDF)",
    downloadPayment: "Download Payment Proof",
    toast: {
      fieldRequired: "{field} is required",
      passwordMismatch: "Password confirmation does not match",
      passwordTooShort: "LMS password must be at least 8 characters",
      fileRequired: "You must upload the payment proof",
      validationMissing: "⚠ Please fill all required fields",
      genericError: "Error: {msg}",
    },
    passwordShow: "Show",
    passwordHide: "Hide",
    passwordHelpWeak: "Weak — use at least 8 characters with a mix of letters and numbers.",
    passwordHelpMedium: "Medium — add symbols or capital letters.",
    passwordHelpStrong: "Strong — good!",
    review: {
      issuesTitle: "Data Issues Found",
      readyTitle: "Ready to Submit",
      readyMsg:
        'All required data looks good. Click <strong>Submit Now</strong> to send your registration.',
      fixLabel: "Fix Data",
      confirmLabel: "Submit Now",
      required: "This field is required.",
    },
    fields: {
      labels: {
        "label-nama": "Full Name *",
        "label-email": "Active Email *",
        "label-nohp": "WhatsApp Number *",
        "label-jk": "Gender *",
        "label-negara": "Country *",
        "label-provinsi": "Province *",
        "label-kabupaten": "City/District *",
        "label-kecamatan": "Subdistrict *",
        "label-kelurahan": "Village/Suburb *",
        "label-tgllahir": "Date of Birth *",
        "label-alamat": "Full Address *",
        "label-kontakdarurat": "Emergency Contact Name *",
        "label-nokontakdarurat": "Emergency Contact Number *",
        "label-status": "Current Status *",
        "label-pendidikan": "Last Education *",
        "label-status_kerja": "Currently Working? *",
        "label-kerja_ya": "Yes",
        "label-kerja_tidak": "No",
        "label-perusahaan": "Company/Institution Name",
        "label-posisi": "Position/Title",
        "label-industri": "Industry",
        "label-tujuan_utama": "Main Purpose for Taking the Course *",
        "label-tujuan1": "Education (Study Abroad/Domestic)",
        "label-tujuan2": "Employment / Career",
        "label-tujuan3": "Migration",
        "label-tujuan4": "Personal Development",
        "label-jenjang": "Target Education Level",
        "label-program": "Test / Program to Prepare For *",
        "label-rencana_tes": "When do you plan to take the official test?",
        "label-target_skor": "Target score you want to achieve",
        "label-skor_awal": "Initial score (if any)",
        "label-tes_tambahan": "Need Additional Tests Besides Main Test?",
        "label-negara_studi": "Target Study Country",
        "label-universitas": "Target University (if any)",
        "label-program_studi": "Target Study Program",
        "label-intake": "Estimated Intake",
        "label-negara_kerja": "Target Work Country",
        "label-bidang_industri_target": "Target Field/Industry",
        "label-kendala": "Main Current Difficulties",
        "label-kendala1": "Speaking",
        "label-kendala2": "Writing",
        "label-kendala3": "Reading",
        "label-kendala4": "Listening",
        "label-kendala5": "Grammar",
        "label-kendala6": "Study Consistency",
        "label-kendala9": "Other",
        "label-jadwal": "Class Preference *",
        "label-alasan_memilih": "Reason for Choosing Ultimate Education",
        "label-ekspektasi": "Your Expectations After the Program",
        "label-advisor":
          "Would you like to be contacted by our Academic Advisor?",
        "label-advisor_ya": "Yes",
        "label-advisor_tidak": "No",
        "label-kursus_sebelumnya": "Have you taken preparatory courses before?",
        "label-kursus_ya": "Yes",
        "label-kursus_tidak": "No",
        "label-kursus_detail": "Which test & last score (if any)",
        "label-catatan": "Additional Notes",
        "label-program_level": "Program Level *",
        "label-program_intensif": "Willing for Intensive Program? *",
        "label-bukti_pembayaran": "Upload Payment Proof *",
        "label-lms_username": "LMS Username *",
        "label-lms_password": "LMS Password *",
        "label-lms_password_confirm": "LMS Password Confirmation *",
      },
      placeholders: {
        "input-nohp": "628xxxxxxxxxx",
        "input-tgllahir": "dd/mm/yyyy",
        alamat_textarea: "Street... No..., RT/RW, etc.",
        kendala_lain_input: "Describe difficulty (optional)",
        negara_studi_other: "Enter another country...",
        universitas_target_other: "Enter university...",
        lms_username: "Enter desired username",
        lms_password: "At least 8 characters",
        lms_password_confirm: "Repeat password",
        "input-program_studi": "E.g., Computer Science, Business",
        "input-negara_kerja": "Eg: Singapore, Australia",
        "input-bidang_industri_target": "Eg: IT, Finance, Education",
        "input-alasan_memilih": "Eg: Affordable, Location, Benefits",
        "input-ekspektasi": "Write your expectations...",
        "input-kursus_sebelumnya_detail": "Eg: IELTS 6.5",
        "input-catatan": "Any additional info you want to share...",
      },
      helps: {
        alamat_help:
          "For countries other than Indonesia, write the full address here.",
        lms_username_help: "Username will be used to access the LMS",
        lms_password_confirm_help:
          "Ensure the confirmation password matches the password to the left.",
      },
      options: {
        negara_studi_select: ["-- Select Country --"],
        universitas_select: ["-- Select University --"],
        program_level_select: ["-- Select Level --"],
        program_level_pending: ["-- Select Class First --"],
        jenis_kelamin: ["-- Select --", "Male", "Female"],
        negara_select: [
          "Indonesia",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "Singapore",
          "Malaysia",
          "Other",
        ],
        provinsi_select: ["-- Select Province --"],
        kota_select: ["-- Select City/District --"],
        kecamatan_select: ["-- Select Subdistrict --"],
        kelurahan_select: ["-- Select Village/Suburb --"],
        status: [
          "-- Select --",
          "High School Student",
          "University Student",
          "Fresh Graduate",
          "Employed",
          "Unemployed / Gap Year",
        ],
        level: ["-- Select --", "High School", "Diploma", "Bachelor", "Master", "Doctorate"],
        industri_select: [
          "-- Select --",
          "Education",
          "Technology",
          "Finance",
          "Manufacturing",
          "Healthcare",
          "Government",
          "Other",
        ],
        jenjang_select: ["-- Select --", "Bachelor", "Master", "Doctorate"],
        program_select: [
          "-- Select --",
          "IELTS", "SAT", "ACT", "GMAT", "GRE", "TOEFL", "TOEFL iBT", "PTE",
          "IGCSE", "TOEIC", "GED", "A-Level", "AS-Level", "O-Level", "IB",
          "LSAT", "UTBK", "Scholarship", "Ausbildung", "General English",
          "Business English", "BIPA", "JLPT", "HSK", "TOPIK", "DELF",
          "TestDaF", "Duolingo", "Not sure / Need consultation",
        ],
        tes_tambahan_select: ["-- Select --", "Yes", "No", "Not sure"],
        intake_select: [
          "-- Select --",
          "Jan - Mar",
          "Apr - Jun",
          "Jul - Sep",
          "Oct - Dec",
          "Not sure",
        ],
        jadwal_select: ["-- Select --", "Private", "Semi-private", "Group", "Package"],
        program_intensif_select: [
          "-- Select --",
          "Yes",
          "No",
          "Depends on tutor recommendation",
        ],
      },
    },
  },
};
