// Multi-language dictionary
const langDict = {
    id: {
        formTitle: 'Formulir Pendaftaran',
        otherOption: 'Lainnya (Masukkan sendiri)',
        sectionTitles: [
            'Informasi Dasar',
            'Informasi Pekerjaan',
            'Tujuan Program',
            'Informasi Studi/Pekerjaan Lanjutan',
            'Preferensi & Ekspektasi',
            'Pembayaran & Akses LMS'
        ],
        progress: ['Dasar', 'Pekerjaan', 'Tujuan', 'Studi/Kerja', 'Preferensi', 'Pembayaran'],
        btnPrev: '← Sebelumnya',
        btnNext: 'Lanjut →',
        btnSubmit: 'Kirim Pendaftaran',
        alamatHint: 'Untuk negara selain Indonesia, tulis alamat lengkap di sini.',
        fileHint: 'Format: JPG, PNG, atau PDF. Maksimal 5MB',
        chooseFile: 'Pilih File',
        dropzoneText: 'Drag & drop di sini',
        dropzoneOr: 'atau',
        fileView: 'Lihat',
        fileRemove: 'Hapus',
        dropzoneError: 'File bukti pembayaran wajib diunggah',
        successSubmission: 'Berhasil! Data Anda telah dikirim. Tim kami akan menghubungi Anda segera.',
        viewPaymentPDF: 'Lihat Bukti Pembayaran (PDF)',
        downloadPayment: 'Download Bukti Pembayaran',
        toast: {
            fieldRequired: '{field} wajib diisi',
            passwordMismatch: 'Konfirmasi password tidak sama',
            passwordTooShort: 'Password LMS minimal 8 karakter',
            fileRequired: 'Anda harus mengupload bukti pembayaran',
            validationMissing: '⚠ Harap isi semua field yang wajib diisi',
            genericError: 'Error: {msg}'
        },
        passwordShow: 'Show',
        passwordHide: 'Hide',
        passwordHelpWeak: 'Lemah — gunakan minimal 8 karakter dengan kombinasi huruf dan angka.',
        passwordHelpMedium: 'Sedang — tambahkan simbol atau huruf kapital.',
        passwordHelpStrong: 'Kuat — baik!',
        fields: {
            labels: {
                'label-nama': 'Nama Lengkap *',
                'label-email': 'Email Aktif *',
                'label-nohp': 'No. WhatsApp *',
                'label-jk': 'Jenis Kelamin *',
                'label-negara': 'Negara *',
                'label-provinsi': 'Provinsi *',
                'label-kabupaten': 'Kabupaten/Kota *',
                'label-kecamatan': 'Kecamatan *',
                'label-kelurahan': 'Kelurahan/Desa *',
                'label-tgllahir': 'Tanggal Lahir *',
                'label-alamat': 'Alamat Lengkap *',
                'label-kontakdarurat': 'Nama Kontak Darurat *',
                'label-nokontakdarurat': 'No. Kontak Darurat *',
                'label-status': 'Status Saat Ini *',
                'label-pendidikan': 'Pendidikan Terakhir *',
                'label-status_kerja': 'Saat Ini Bekerja? *',
                'label-kerja_ya': 'Ya',
                'label-kerja_tidak': 'Tidak',
                'label-perusahaan': 'Nama Perusahaan/Institusi',
                'label-posisi': 'Posisi/Jabatan',
                'label-industri': 'Industri',
                'label-tujuan_utama': 'Tujuan Utama Mengambil Kursus *',
                'label-tujuan1': 'Pendidikan (Studi Luar/Dalam Negeri)',
                'label-tujuan2': 'Pekerjaan / Karier',
                'label-tujuan3': 'Migrasi',
                'label-tujuan4': 'Pengembangan Diri',
                'label-jenjang': 'Jenjang Pendidikan yang Ditargetkan',
                'label-program': 'Program Tes yang Ingin Dipersiapkan *',
                'label-tes_tambahan': 'Butuh Tes Lain Selain Tes Utama?',
                'label-rencana_tes': 'Kapan Rencana Mengambil Tes Resmi?',
                'label-negara_studi': 'Negara Tujuan Studi',
                'label-universitas': 'Universitas Target (jika sudah ada)',
                'label-program_studi': 'Program Studi Target',
                'label-intake': 'Perkiraan Intake',
                'label-negara_kerja': 'Negara Tujuan Bekerja',
                'label-bidang_industri_target': 'Bidang/Industri Target',
                'label-jadwal': 'Preferensi Kelas *',
                'label-program_level': 'Tingkat Program *',
                'label-program_intensif': 'Bersedia Program Intensif? *',
                'label-target_skor': 'Target Skor yang Ingin Dicapai',
                'label-skor_awal': 'Skor Awal (jika ada)',
                'label-rencana_tes': 'Kapan Rencana Mengambil Tes Resmi?',
                'label-kendala': 'Kendala Utama Anda Saat Ini',
                'label-kendala1': 'Speaking',
                'label-kendala2': 'Writing',
                'label-kendala3': 'Reading',
                'label-kendala4': 'Listening',
                'label-kendala5': 'Grammar',
                'label-kendala6': 'Konsistensi Belajar',
                'label-kendala9': 'Lain lain',
                'label-bukti_pembayaran': 'Upload Bukti Pembayaran *',
                'label-alasan_memilih': 'Alasan Memilih Ultimate Education',
                'label-ekspektasi': 'Ekspektasi Anda Setelah Mengikuti Program Ini',
                'label-advisor': 'Bersedia Dihubungi Tim Academic Advisor?',
                'label-advisor_ya': 'Ya',
                'label-advisor_tidak': 'Tidak',
                'label-kursus_sebelumnya': 'Pernah Kursus Persiapan Sebelumnya?',
                'label-kursus_ya': 'Ya',
                'label-kursus_tidak': 'Tidak',
                'label-kursus_detail': 'Tes Apa & Skor Terakhir (jika ada)',
                'label-catatan': 'Catatan Tambahan',
                'label-lms_username': 'Username untuk LMS *',
                'label-lms_password': 'Password untuk LMS *',
                'label-lms_password_confirm': 'Konfirmasi Password LMS *'
            },
            placeholders: {
                'input-nohp': '628xxxxxxxxxx',
                'input-tgllahir': 'dd/mm/yyyy',
                'alamat_textarea': 'Jln... No..., RT/RW, dll',
                'kendala_lain_input': 'Jelaskan kendala (opsional)',
                'negara_studi_other': 'Masukkan negara lain...',
                'universitas_target_other': 'Masukkan universitas...',
                'lms_username': 'Masukkan username yang diinginkan',
                'lms_password': 'Minimal 8 karakter',
                'lms_password_confirm': 'Ulangi password',
                'input-program_studi': 'Contoh: Computer Science, Business',
                'input-negara_kerja': 'Contoh: Singapore, Australia',
                'input-bidang_industri_target': 'Contoh: IT, Finance, Education',
                'input-alasan_memilih': 'Contoh: Terjangkau, Lokasi, Benefit',
                'input-ekspektasi': 'Tulis harapan Anda...',
                'input-kursus_sebelumnya_detail': 'Contoh: IELTS 6.5',
                'input-catatan': 'Informasi lain yang ingin Anda sampaikan...'
            },
            helps: {
                'alamat_help': 'Untuk negara selain Indonesia, tulis alamat lengkap di sini.',
                'lms_username_help': 'Username akan digunakan untuk akses LMS',
                'lms_password_confirm_help': 'Pastikan password konfirmasi sama dengan password di sebelah kiri.'
            },
            options: {
                'negara_studi_select': ['-- Pilih Negara --'],
                'universitas_select': ['-- Pilih Universitas --'],
                'program_level_select': ['-- Pilih Tingkat --'],
                'program_level_pending': ['-- Pilih Kelas Terlebih Dahulu --'],
                'jenis_kelamin': ['-- Pilih --', 'Laki-laki', 'Perempuan'],
                'negara_select': ['Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada', 'Singapore', 'Malaysia', 'Other'],
                'provinsi_select': ['-- Pilih Provinsi --'],
                'kota_select': ['-- Pilih Kabupaten/Kota --'],
                'kecamatan_select': ['-- Pilih Kecamatan --'],
                'kelurahan_select': ['-- Pilih Kelurahan/Desa --'],
                'status': ['-- Pilih --', 'Pelajar SMA', 'Mahasiswa', 'Fresh Graduate', 'Bekerja', 'Tidak Bekerja / Gap Year'],
                'level': ['-- Pilih --', 'SMA/SMK', 'D3', 'S1', 'S2', 'S3'],
                'industri_select': ['-- Pilih --', 'Pendidikan', 'Teknologi', 'Keuangan', 'Manufaktur', 'Healthcare', 'Government', 'Lainnya'],
                'jenjang_select': ['-- Pilih --', 'S1', 'S2', 'S3'],
                'program_select': [
                    '-- Pilih --', 'IELTS', 'SAT', 'GMAT', 'GRE', 'TOEFL', 'TOEFL iBT', 'PTE', 'IGCSE', 'TOEIC', 'GED', 'A-Level', 'AS-Level', 'O-Level', 'IB', 'LSAT', 'UTBK', 'Scholarship', 'Ausbildung', 'General English', 'Business English', 'BIPA', 'JLPT', 'HSK', 'TOPIK', 'DELF', 'TestDaF', 'Duolingo', 'Belum Tahu / Butuh Konsultasi'
                ],
                'tes_tambahan_select': ['-- Pilih --', 'Ya', 'Tidak', 'Belum Yakin'],
                'intake_select': ['-- Pilih --', 'Januari - Maret', 'April - Juni', 'Juli - September', 'Oktober - Desember', 'Belum Pasti'],
                'jadwal_select': ['-- Pilih --', 'Private', 'Semi-private', 'Group', 'Paket'],
                'program_intensif_select': ['-- Pilih --', 'Ya', 'Tidak', 'Tergantung Rekomendasi Tutor']
            }
        }
    },
    en: {
        formTitle: 'Registration Form',
        otherOption: 'Other (Enter manually)',
        sectionTitles: [
            'Basic Information',
            'Employment Information',
            'Program Purpose',
            'Further Study/Work Information',
            'Class Preferences & Expectations',
            'Payment & LMS Access'
        ],
        progress: ['Basic', 'Employment', 'Purpose', 'Study/Work', 'Preferences', 'Payment'],
        btnPrev: '← Previous',
        btnNext: 'Next →',
        btnSubmit: 'Submit Registration',
        alamatHint: 'For countries other than Indonesia, write the full address here.',
        fileHint: 'Format: JPG, PNG, or PDF. Max 5MB',
        chooseFile: 'Choose File',
        dropzoneText: 'Drag & drop here',
        dropzoneOr: 'or',
        fileView: 'View',
        fileRemove: 'Remove',
        dropzoneError: 'Payment proof file is required',
        successSubmission: 'Success! Your data has been submitted. Our team will contact you shortly.',
        viewPaymentPDF: 'View Payment Proof (PDF)',
        downloadPayment: 'Download Payment Proof',
        toast: {
            fieldRequired: '{field} is required',
            passwordMismatch: 'Password confirmation does not match',
            passwordTooShort: 'LMS password must be at least 8 characters',
            fileRequired: 'You must upload the payment proof',
            validationMissing: '⚠ Please fill all required fields',
            genericError: 'Error: {msg}'
        },
        passwordShow: 'Show',
        passwordHide: 'Hide',
        passwordHelpWeak: 'Weak — use at least 8 characters with a mix of letters and numbers.',
        passwordHelpMedium: 'Medium — add symbols or capital letters.',
        passwordHelpStrong: 'Strong — good!',
        fields: {
            labels: {
                'label-nama': 'Full Name *',
                'label-email': 'Active Email *',
                'label-nohp': 'WhatsApp Number *',
                'label-jk': 'Gender *',
                'label-negara': 'Country *',
                'label-provinsi': 'Province *',
                'label-kabupaten': 'City/District *',
                'label-kecamatan': 'Subdistrict *',
                'label-kelurahan': 'Village/Suburb *',
                'label-tgllahir': 'Date of Birth *',
                'label-alamat': 'Full Address *',
                'label-kontakdarurat': 'Emergency Contact Name *',
                'label-nokontakdarurat': 'Emergency Contact Number *',
                'label-status': 'Current Status *',
                'label-pendidikan': 'Last Education *',
                'label-status_kerja': 'Currently Working? *',
                'label-kerja_ya': 'Yes',
                'label-kerja_tidak': 'No',
                'label-perusahaan': 'Company/Institution Name',
                'label-posisi': 'Position/Title',
                'label-industri': 'Industry',
                'label-tujuan_utama': 'Main Purpose for Taking the Course *',
                'label-tujuan1': 'Education (Study Abroad/Domestic)',
                'label-tujuan2': 'Employment / Career',
                'label-tujuan3': 'Migration',
                'label-tujuan4': 'Personal Development',
                'label-jenjang': 'Target Education Level',
                'label-program': 'Test / Program to Prepare For *',
                'label-rencana_tes': 'When do you plan to take the official test?',
                'label-target_skor': 'Target score you want to achieve',
                'label-skor_awal': 'Initial score (if any)',
                'label-tes_tambahan': 'Need Additional Tests Besides Main Test?',
                'label-negara_studi': 'Target Study Country',
                'label-universitas': 'Target University (if any)',
                'label-program_studi': 'Target Study Program',
                'label-intake': 'Estimated Intake',
                'label-negara_kerja': 'Target Work Country',
                'label-bidang_industri_target': 'Target Field/Industry',
                'label-kendala': 'Main Current Difficulties',
                'label-kendala1': 'Speaking',
                'label-kendala2': 'Writing',
                'label-kendala3': 'Reading',
                'label-kendala4': 'Listening',
                'label-kendala5': 'Grammar',
                'label-kendala6': 'Study Consistency',
                'label-kendala9': 'Other',
                'label-jadwal': 'Class Preference *',
                'label-alasan_memilih': 'Reason for Choosing Ultimate Education',
                'label-ekspektasi': 'Your Expectations After the Program',
                'label-advisor': 'Would you like to be contacted by our Academic Advisor?',
                'label-advisor_ya': 'Yes',
                'label-advisor_tidak': 'No',
                'label-kursus_sebelumnya': 'Have you taken preparatory courses before?',
                'label-kursus_ya': 'Yes',
                'label-kursus_tidak': 'No',
                'label-kursus_detail': 'Which test & last score (if any)',
                'label-catatan': 'Additional Notes',
                'label-program_level': 'Program Level *',
                'label-program_intensif': 'Willing for Intensive Program? *',
                'label-bukti_pembayaran': 'Upload Payment Proof *',
                'label-lms_username': 'LMS Username *',
                'label-lms_password': 'LMS Password *',
                'label-lms_password_confirm': 'LMS Password Confirmation *'
            },
            placeholders: {
                'input-nohp': '628xxxxxxxxxx',
                'input-tgllahir': 'dd/mm/yyyy',
                'alamat_textarea': 'Street... No..., RT/RW, etc.',
                'kendala_lain_input': 'Describe difficulty (optional)',
                'negara_studi_other': 'Enter another country...',
                'universitas_target_other': 'Enter university...',
                'lms_username': 'Enter desired username',
                'lms_password': 'At least 8 characters',
                'lms_password_confirm': 'Repeat password',
                'input-program_studi': 'E.g., Computer Science, Business',
                'input-negara_kerja': 'Eg: Singapore, Australia',
                'input-bidang_industri_target': 'Eg: IT, Finance, Education',
                'input-alasan_memilih': 'Eg: Affordable, Location, Benefits',
                'input-ekspektasi': 'Write your expectations...',
                'input-kursus_sebelumnya_detail': 'Eg: IELTS 6.5',
                'input-catatan': 'Any additional info you want to share...'
            },
            helps: {
                'alamat_help': 'For countries other than Indonesia, write the full address here.',
                'lms_username_help': 'Username will be used to access the LMS',
                'lms_password_confirm_help': 'Ensure the confirmation password matches the password to the left.'
            },
            options: {
                'negara_studi_select': ['-- Select Country --'],
                'universitas_select': ['-- Select University --'],
                'program_level_select': ['-- Select Level --'],
                'program_level_pending': ['-- Select Class First --'],
                'jenis_kelamin': ['-- Select --', 'Male', 'Female'],
                'negara_select': ['Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada', 'Singapore', 'Malaysia', 'Other'],
                'provinsi_select': ['-- Select Province --'],
                'kota_select': ['-- Select City/District --'],
                'kecamatan_select': ['-- Select Subdistrict --'],
                'kelurahan_select': ['-- Select Village/Suburb --'],
                'status': ['-- Select --', 'High School Student', 'University Student', 'Fresh Graduate', 'Employed', 'Unemployed / Gap Year'],
                'level': ['-- Select --', 'High School', 'Diploma', 'Bachelor', 'Master', 'Doctorate'],
                'industri_select': ['-- Select --', 'Education', 'Technology', 'Finance', 'Manufacturing', 'Healthcare', 'Government', 'Other'],
                'jenjang_select': ['-- Select --', 'Bachelor', 'Master', 'Doctorate'],
                'program_select': [
                    '-- Select --', 'IELTS', 'SAT', 'GMAT', 'GRE', 'TOEFL', 'TOEFL iBT', 'PTE', 'IGCSE', 'TOEIC', 'GED', 'A-Level', 'AS-Level', 'O-Level', 'IB', 'LSAT', 'UTBK', 'Scholarship', 'Ausbildung', 'General English', 'Business English', 'BIPA', 'JLPT', 'HSK', 'TOPIK', 'DELF', 'TestDaF', 'Duolingo', 'Not sure / Need consultation'
                ],
                'tes_tambahan_select': ['-- Select --', 'Yes', 'No', 'Not sure'],
                'intake_select': ['-- Select --', 'Jan - Mar', 'Apr - Jun', 'Jul - Sep', 'Oct - Dec', 'Not sure'],
                'jadwal_select': ['-- Select --', 'Private', 'Semi-private', 'Group', 'Package'],
                'program_intensif_select': ['-- Select --', 'Yes', 'No', 'Depends on tutor recommendation'],
            }
        }
    }
};
// Supabase configuration (client-side). Replace with your project values.
const SUPABASE_URL = 'https://rbivamtmcadfnemqcvac.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiaXZhbXRtY2FkZm5lbXFjdmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MTU2MjgsImV4cCI6MjA4MTM5MTYyOH0.hZTprt4i3Y896uY_7m-lz-8T01lAArfj7hBIxw1utnc';
let currentLang = 'id';
function setLanguage(lang) {
    currentLang = lang;
    // Title
    document.getElementById('form-title').textContent = langDict[lang].formTitle;
    // Section titles
    document.querySelectorAll('.section-title').forEach((el, i) => {
        el.textContent = langDict[lang].sectionTitles[i] || el.textContent;
    });
    // Progress bar
    document.querySelectorAll('.progress-label').forEach((el, i) => {
        el.textContent = langDict[lang].progress[i] || el.textContent;
    });
    // Buttons
    document.getElementById('btnPrev').textContent = langDict[lang].btnPrev;
    document.getElementById('btnNext').textContent = langDict[lang].btnNext;
    document.getElementById('btnSubmit').textContent = langDict[lang].btnSubmit;
    // Alamat hint
    const alamatHint = document.querySelector('textarea#alamat_textarea + small');
    if (alamatHint) alamatHint.textContent = langDict[lang].alamatHint;
    // Dropzone hint
    const dropzoneHint = document.querySelector('.dropzone-hint');
    if (dropzoneHint) dropzoneHint.textContent = langDict[lang].fileHint;
    // Dropzone choose file
    const chooseFileBtn = document.getElementById('chooseFileBtn');
    if (chooseFileBtn) chooseFileBtn.textContent = langDict[lang].chooseFile;
    // Dropzone drag text
    const dropzoneInner = document.getElementById('dropzone_inner');
    if (dropzoneInner) {
        const s = dropzoneInner.querySelector('p strong');
        if (s) s.textContent = langDict[lang].dropzoneText;
        const orEl = document.getElementById('dropzone_or');
        if (orEl) orEl.textContent = (langDict[lang].dropzoneOr || 'atau');
    }
    // Password help
    const passwordHelp = document.getElementById('password_help');
    if (passwordHelp) {
        passwordHelp.textContent = langDict[lang].passwordHelpWeak;
    }
    // Preview / Remove buttons (if a file is already present)
    const previewBtn = document.getElementById('preview_bukti_btn');
    const removeBtn = document.getElementById('remove_bukti_btn');
    if (previewBtn) previewBtn.textContent = (langDict[lang].fileView) || previewBtn.textContent;
    if (removeBtn) removeBtn.textContent = (langDict[lang].fileRemove) || removeBtn.textContent;
    // === FORM FIELD LABELS, PLACEHOLDERS, OPTIONS ===
    const fieldMap = langDict[lang].fields;
    if (!fieldMap) return;
    // Labels (preserve required span)
    Object.entries(fieldMap.labels).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) {
            const html = (text || '').replace('*', ' <span class="required">*</span>');
            el.innerHTML = html;
        }
    });
    // Placeholders
    Object.entries(fieldMap.placeholders).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = text;
    });
    // Help texts
    Object.entries(fieldMap.helps).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });
    // Select options
    Object.entries(fieldMap.options).forEach(([selectId, opts]) => {
        const select = document.getElementById(selectId);
        if (select) {
            Array.from(select.options).forEach((opt, i) => {
                if (opts[i]) opt.textContent = opts[i];
            });
        }
    });
    // Re-seed dynamic study country/university lists so placeholders/other label update
    try {
        if (typeof seedStudyCountrySelect === 'function') seedStudyCountrySelect();
        const cur = (typeof negaraStudiSelect !== 'undefined') ? (negaraStudiSelect && negaraStudiSelect.value) : null;
        if (cur && typeof negaraStudiSelect !== 'undefined') {
            // trigger change to refresh university list labels
            negaraStudiSelect.dispatchEvent(new Event('change'));
        }
    } catch (e) {
        // ignore
    }
}
// Bind language switch (flag toggle)
const langSwitchEl = document.getElementById('lang-switch');
if (langSwitchEl) {
    // checked = English, unchecked = Indonesian
    langSwitchEl.addEventListener('change', (e) => {
        setLanguage(e.target.checked ? 'en' : 'id');
        // animate flags handled by CSS; no inner HTML swap needed
        const label = document.querySelector('label[for="lang-switch"]');
        if (label) {
            // toggle aria-label for screen readers
            label.setAttribute('aria-label', e.target.checked ? 'English' : 'Bahasa Indonesia');
        }
    });
    // init default language (Indonesia)
    langSwitchEl.checked = false;
}
// Init default
setLanguage('id');
// ...existing code...
let currentSection = 1;
const totalSections = 6;
const form = document.getElementById('studentForm');
const messageEl = document.getElementById('message');
const loadingEl = document.getElementById('loading');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const btnSubmit = document.getElementById('btnSubmit');
const MAX_TEXT_LENGTH = 500;
// Basic sanitizers to mitigate XSS/SQLi payload attempts on the client side
const stripTags = (value = '') => value.replace(/<[^>]*>/g, '');
const dropControlChars = (value = '') => value.replace(/[\u0000-\u001f\u007f]/g, '');
const sanitizeText = (value = '') => dropControlChars(stripTags(value)).trim().slice(0, MAX_TEXT_LENGTH);
const allowLists = {
    jenis_kelamin: ['Laki-laki', 'Perempuan'],
    status: ['Pelajar SMA', 'Mahasiswa', 'Fresh Graduate', 'Bekerja', 'Tidak Bekerja / Gap Year'],
    level: ['SMA/SMK', 'D3', 'S1', 'S2', 'S3'],
    program: ['IELTS', 'SAT', 'GMAT', 'GRE', 'TOEFL', 'TOEFL iBT', 'PTE', 'IGCSE', 'TOEIC', 'GED', 'A-Level', 'AS-Level', 'O-Level', 'IB', 'LSAT', 'UTBK', 'Scholarship', 'Ausbildung', 'General English', 'Business English', 'BIPA', 'JLPT', 'HSK', 'TOPIK', 'DELF', 'TestDaF', 'Duolingo', 'Belum Tahu'],
    tes_tambahan: ['Ya', 'Tidak', 'Belum Yakin'],
    jadwal: ['Private', 'Semi-private', 'Group', 'Paket'],
    program_intensif: ['Ya', 'Tidak', 'Tergantung rekomendasi tutor'],
    screening: ['Ya', 'Tidak'],
    intake: ['Jan–Mar', 'Apr–Jun', 'Jul–Sep', 'Oct–Dec', 'Belum Pasti'],
    program_level: ['Bronze', 'Silver', 'Gold', 'Premium'],
    negara: ['Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada', 'Singapore', 'Malaysia', 'Other']
};
const validateFile = (file) => {
    if (!file) return { ok: false, reason: 'File bukti pembayaran wajib diunggah' };
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
        return { ok: false, reason: 'Format file harus JPG, PNG, atau PDF' };
    }
    if (file.size > 5 * 1024 * 1024) {
        return { ok: false, reason: 'Ukuran file maksimal 5MB' };
    }
    return { ok: true };
};
const sanitizeMultiValue = (values = []) => values.map(v => sanitizeText(v)).filter(Boolean);
function validateAndSanitize(formData) {
    // Validate allowlisted select fields
    for (const key of Object.keys(allowLists)) {
        if (formData.has(key)) {
            const val = formData.get(key);
            if (val && !allowLists[key].includes(val)) {
                return { error: `Pilihan untuk ${key} tidak valid` };
            }
        }
    }
    // Email & telepon format checks
    const email = formData.get('email');
    const phone = formData.get('no_hp');
    const emailRegex = /^[\w.!#$%&'*+/=?`{|}~-]+@[\w-]+(\.[\w-]+)+$/;
    const phoneRegex = /^\d{9,15}$/;
    if (email && !emailRegex.test(email.trim())) {
        return { error: 'Format email tidak valid' };
    }
    if (phone && !phoneRegex.test(phone.trim().replace(/\s|\+/g, ''))) {
        return { error: 'Format nomor WhatsApp harus angka (9-15 digit)' };
    }
    // Password length basic policy
    const pwd = formData.get('lms_password') || '';
    if (pwd.length < 8) {
        const t = (langDict && langDict[currentLang] && langDict[currentLang].toast) ? langDict[currentLang].toast : null;
        return { error: (t && t.passwordTooShort) ? t.passwordTooShort : 'Password LMS minimal 8 karakter' };
    }
    // File check
    const fileCheck = validateFile(formData.get('bukti_pembayaran'));
    if (!fileCheck.ok) {
        return { error: fileCheck.reason };
    }
    // Sanitize text-ish fields
    const textFields = [
        'nama', 'kota', 'provinsi', 'negara', 'alamat', 'perusahaan', 'posisi', 'industri',
        'jenjang_pendidikan', 'rencana_tes', 'target_skor', 'kursus_sebelumnya_detail',
        'alasan_memilih', 'ekspektasi', 'program_studi', 'universitas_target', 'negara_studi',
        'negara_kerja', 'bidang_industri_target', 'catatan', 'lms_username', 'lms_password',
        'lms_password_confirm', 'nama_kontak_darurat', 'kontak_darurat', 'bidang_industri_target',
        'kecamatan', 'kelurahan'
    ];
    const sanitized = {};
    textFields.forEach(field => {
        if (formData.has(field)) {
            sanitized[field] = sanitizeText(formData.get(field));
        }
    });
    // Preserve allowlist select values
    Object.keys(allowLists).forEach(key => {
        if (formData.has(key)) {
            sanitized[key] = formData.get(key) || null;
        }
    });
    sanitized.no_hp = phone ? phone.trim().replace(/\\s|\\+/g, '') : null;
    sanitized.email = email ? email.trim() : null;
    sanitized.tes_tambahan_detail = sanitizeMultiValue(formData.getAll('tes_tambahan_detail')).join(', ') || null;
    sanitized.tujuan = sanitizeMultiValue(formData.getAll('tujuan'));
    sanitized.kendala = sanitizeMultiValue(formData.getAll('kendala'));
    // Jika user input custom "lainnya", pastikan tidak rangkap di array kendala
    try {
        const kendalaLainEl = document.getElementById('kendala_lain_input');
        const kendalaLainText = kendalaLainEl && kendalaLainEl.value ? sanitizeText(kendalaLainEl.value) : null;
        if (kendalaLainText) {
            // Hapus semua value yang sama dengan input manual (case-insensitive)
            sanitized.kendala = sanitized.kendala.filter(k => (k || '').toLowerCase() !== kendalaLainText.toLowerCase());
            // Hapus juga placeholder 'lain lain', 'lain-lain', 'lainnya', 'lain'
            sanitized.kendala = sanitized.kendala.filter(k => { const kk = (k || '').toLowerCase(); return kk !== 'lain lain' && kk !== 'lain-lain' && kk !== 'lainnya' && kk !== 'lain'; });
            sanitized.kendala.push(kendalaLainText);
        }
    } catch (e) {
        // ignore DOM errors
    }
    sanitized.tanggal_lahir = formData.get('tanggal_lahir') || null;
    sanitized.tanggal_rencana_tes = formData.get('rencana_tes') || null;
    sanitized.skor_awal = formData.get('skor_awal') || null;
    sanitized.intake = formData.get('intake') || null;
    sanitized.status_kerja = formData.get('status_kerja') || null;
    sanitized.kursus_sebelumnya = formData.get('kursus_sebelumnya') || null;
    sanitized.program_level = formData.get('program_level') || null;
    sanitized.jadwal = formData.get('jadwal') || null;
    sanitized.program = formData.get('program') || null;
    sanitized.status = formData.get('status') || null;
    sanitized.level = formData.get('level') || null;
    sanitized.kota = formData.get('kota') || null;
    sanitized.provinsi = formData.get('provinsi') || null;
    sanitized.kecamatan = formData.get('kecamatan') || null;
    sanitized.kelurahan = formData.get('kelurahan') || null;
    // If selects store ids as values, use the visible text for human-readable names
    try {
        sanitized.provinsi = (provinsiSelect && provinsiSelect.selectedOptions[0] && provinsiSelect.selectedOptions[0].textContent) || sanitized.provinsi;
        sanitized.kota = (kotaSelect && kotaSelect.selectedOptions[0] && kotaSelect.selectedOptions[0].textContent) || sanitized.kota;
        sanitized.kecamatan = (kecamatanSelect && kecamatanSelect.selectedOptions[0] && kecamatanSelect.selectedOptions[0].textContent) || sanitized.kecamatan;
        sanitized.kelurahan = (kelurahanSelect && kelurahanSelect.selectedOptions[0] && kelurahanSelect.selectedOptions[0].textContent) || sanitized.kelurahan;
    } catch (e) {
        // ignore if DOM access fails in rare test contexts
    }
    return { data: sanitized };
}
// Toast helper
function showToast(message, type = 'error', timeout = 4500) {
    try {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`.trim();
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        const msg = document.createElement('div');
        msg.className = 'msg';
        msg.textContent = message;
        const close = document.createElement('button');
        close.className = 'close';
        close.type = 'button';
        close.setAttribute('aria-label', 'Tutup');
        close.innerHTML = '×';
        close.addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 180);
        });
        toast.appendChild(msg);
        toast.appendChild(close);
        container.appendChild(toast);
        // show
        requestAnimationFrame(() => toast.classList.add('show'));
        // auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 200);
        }, timeout);
    } catch (e) {
        console.error('Toast error', e);
    }
}
// Wilayah Indonesia data loader
const regionCache = {
    provinces: [],
    regencies: {},
    districts: {},
    villages: {}
};
const negaraSelect = document.getElementById('negara_select');
const provinsiSelect = document.getElementById('provinsi_select');
const kotaSelect = document.getElementById('kota_select');
const kecamatanSelect = document.getElementById('kecamatan_select');
const kelurahanSelect = document.getElementById('kelurahan_select');
const alamatTextarea = document.getElementById('alamat_textarea');

const isIndonesia = () => negaraSelect.value === 'Indonesia';

async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Gagal memuat data wilayah');
    return res.json();
}
const PROVINCE_FALLBACK = [
    { id: '11', name: 'Aceh' },
    { id: '12', name: 'Sumatera Utara' },
    { id: '13', name: 'Sumatera Barat' },
    { id: '14', name: 'Riau' },
    { id: '15', name: 'Jambi' },
    { id: '16', name: 'Sumatera Selatan' },
    { id: '17', name: 'Bengkulu' },
    { id: '18', name: 'Lampung' },
    { id: '19', name: 'Kepulauan Bangka Belitung' },
    { id: '21', name: 'Kepulauan Riau' },
    { id: '31', name: 'DKI Jakarta' },
    { id: '32', name: 'Jawa Barat' },
    { id: '33', name: 'Jawa Tengah' },
    { id: '34', name: 'DI Yogyakarta' },
    { id: '35', name: 'Jawa Timur' },
    { id: '36', name: 'Banten' },
    { id: '51', name: 'Bali' },
    { id: '52', name: 'Nusa Tenggara Barat' },
    { id: '53', name: 'Nusa Tenggara Timur' },
    { id: '61', name: 'Kalimantan Barat' },
    { id: '62', name: 'Kalimantan Tengah' },
    { id: '63', name: 'Kalimantan Selatan' },
    { id: '64', name: 'Kalimantan Timur' },
    { id: '65', name: 'Kalimantan Utara' },
    { id: '71', name: 'Sulawesi Utara' },
    { id: '72', name: 'Sulawesi Tengah' },
    { id: '73', name: 'Sulawesi Selatan' },
    { id: '74', name: 'Sulawesi Tenggara' },
    { id: '75', name: 'Gorontalo' },
    { id: '76', name: 'Sulawesi Barat' },
    { id: '81', name: 'Maluku' },
    { id: '82', name: 'Maluku Utara' },
    { id: '91', name: 'Papua' },
    { id: '92', name: 'Papua Barat' },
    { id: '93', name: 'Papua Selatan' },
    { id: '94', name: 'Papua Tengah' },
    { id: '95', name: 'Papua Pegunungan' }
];
async function loadProvinces() {
    if (regionCache.provinces.length) return regionCache.provinces;
    try {
        const data = await fetchJSON('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
        regionCache.provinces = data;
        return data;
    } catch (err) {
        console.warn('Gagal fetch provinsi dari API, gunakan fallback lokal:', err);
        regionCache.provinces = PROVINCE_FALLBACK;
        return PROVINCE_FALLBACK;
    }
}
async function loadRegencies(provinceId) {
    if (regionCache.regencies[provinceId]) return regionCache.regencies[provinceId];
    const data = await fetchJSON(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
    regionCache.regencies[provinceId] = data;
    return data;
}
async function loadDistricts(regencyId) {
    if (regionCache.districts[regencyId]) return regionCache.districts[regencyId];
    const data = await fetchJSON(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`);
    regionCache.districts[regencyId] = data;
    return data;
}
async function loadVillages(districtId) {
    if (regionCache.villages[districtId]) return regionCache.villages[districtId];
    const data = await fetchJSON(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`);
    regionCache.villages[districtId] = data;
    return data;
}
function setSelectOptions(selectEl, items, placeholder) {
    selectEl.innerHTML = `<option value="">${placeholder}</option>`;
    if (!items || !items.length) return;
    items.forEach(item => {
        // create elements instead of appending to innerHTML to avoid parsing inconsistencies
        const opt = document.createElement('option');
        // Prefer stable id as the option value so handlers can use option.value directly
        opt.value = item.id || item.value || item.code || item.kode || item.name;
        opt.textContent = item.name || item.label || opt.value;
        opt.dataset.name = item.name || opt.textContent;
        opt.dataset.id = item.id || opt.value;
        selectEl.appendChild(opt);
    });
}
function resetBelow(level) {
    if (level === 'provinsi' || !level) {
        setSelectOptions(kotaSelect, [], (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kota_select && langDict[currentLang].fields.options.kota_select[0]) || '-- Pilih Kabupaten/Kota --');
        setSelectOptions(kecamatanSelect, [], (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kecamatan_select && langDict[currentLang].fields.options.kecamatan_select[0]) || '-- Pilih Kecamatan --');
        setSelectOptions(kelurahanSelect, [], (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kelurahan_select && langDict[currentLang].fields.options.kelurahan_select[0]) || '-- Pilih Kelurahan/Desa --');
    }
    if (level === 'kota') {
        setSelectOptions(kecamatanSelect, [], (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kecamatan_select && langDict[currentLang].fields.options.kecamatan_select[0]) || '-- Pilih Kecamatan --');
        setSelectOptions(kelurahanSelect, [], (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kelurahan_select && langDict[currentLang].fields.options.kelurahan_select[0]) || '-- Pilih Kelurahan/Desa --');
    }
    if (level === 'kecamatan') {
        setSelectOptions(kelurahanSelect, [], (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kelurahan_select && langDict[currentLang].fields.options.kelurahan_select[0]) || '-- Pilih Kelurahan/Desa --');
    }
}
function seedProvinces() {
    // Isi fallback dulu supaya user langsung lihat daftar
    setSelectOptions(provinsiSelect, PROVINCE_FALLBACK, (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.provinsi_select && langDict[currentLang].fields.options.provinsi_select[0]) || '-- Pilih Provinsi --');
    // Coba refresh dari API; jika gagal, fallback sudah ada
    loadProvinces()
        .then(data => {
            if (Array.isArray(data) && data.length) {
                setSelectOptions(provinsiSelect, data, (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.provinsi_select && langDict[currentLang].fields.options.provinsi_select[0]) || '-- Pilih Provinsi --');
            }
        })
        .catch(err => {
            console.warn('Gagal memuat provinsi dari API, gunakan fallback:', err);
            setSelectOptions(provinsiSelect, PROVINCE_FALLBACK, (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.provinsi_select && langDict[currentLang].fields.options.provinsi_select[0]) || '-- Pilih Provinsi --');
        });
}
function toggleIndonesiaFields() {
    const show = isIndonesia();
    [provinsiSelect, kotaSelect, kecamatanSelect, kelurahanSelect].forEach(el => {
        el.closest('.form-group').classList.toggle('hidden-field', !show);
        el.required = show;
        if (!show) el.value = '';
    });
    if (show) {
        seedProvinces();
    } else {
        resetBelow();
    }
}

negaraSelect.addEventListener('change', () => {
    toggleIndonesiaFields();
});
provinsiSelect.addEventListener('change', async (e) => {
    const option = e.target.selectedOptions[0];
    resetBelow('provinsi');
    const provinceId = option?.dataset?.id || option?.value;
    if (!provinceId) return;
    try {
        const regencies = await loadRegencies(provinceId);
        setSelectOptions(kotaSelect, regencies, (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kota_select && langDict[currentLang].fields.options.kota_select[0]) || '-- Pilih Kabupaten/Kota --');
    } catch (err) {
        messageEl.classList.add('error');
        messageEl.style.display = 'block';
        messageEl.textContent = 'Gagal memuat kabupaten/kota: ' + err.message;
    }
});
kotaSelect.addEventListener('change', async (e) => {
    const option = e.target.selectedOptions[0];
    resetBelow('kota');
    const regencyId = option?.dataset?.id || option?.value;
    if (!regencyId) return;
    try {
        const districts = await loadDistricts(regencyId);
        setSelectOptions(kecamatanSelect, districts, (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kecamatan_select && langDict[currentLang].fields.options.kecamatan_select[0]) || '-- Pilih Kecamatan --');
    } catch (err) {
        messageEl.classList.add('error');
        messageEl.style.display = 'block';
        messageEl.textContent = 'Gagal memuat kecamatan: ' + err.message;
    }
});
kecamatanSelect.addEventListener('change', async (e) => {
    const option = e.target.selectedOptions[0];
    resetBelow('kecamatan');
    const districtId = option?.dataset?.id || option?.value;
    if (!districtId) return;
    try {
        const villages = await loadVillages(districtId);
        setSelectOptions(kelurahanSelect, villages, (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.kelurahan_select && langDict[currentLang].fields.options.kelurahan_select[0]) || '-- Pilih Kelurahan/Desa --');
    } catch (err) {
        messageEl.classList.add('error');
        messageEl.style.display = 'block';
        messageEl.textContent = 'Gagal memuat kelurahan: ' + err.message;
    }
});

// Toggle field pekerjaan
document.querySelectorAll('input[name="status_kerja"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const fieldPerusahaan = document.getElementById('field_perusahaan');
        const fieldPosisi = document.getElementById('field_posisi');

        if (e.target.value === 'Ya') {
            fieldPerusahaan.classList.remove('hidden-field');
            fieldPosisi.classList.remove('hidden-field');
        } else {
            fieldPerusahaan.classList.add('hidden-field');
            fieldPosisi.classList.add('hidden-field');
        }
    });
});
// Toggle field kursus sebelumnya
document.querySelectorAll('input[name="kursus_sebelumnya"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const fieldKursusBefore = document.getElementById('field_kursus_sebelumnya');

        if (e.target.value === 'Ya') {
            fieldKursusBefore.classList.remove('hidden-field');
        } else {
            fieldKursusBefore.classList.add('hidden-field');
        }
    });
});
// Toggle field tes tambahan
document.querySelector('select[name="tes_tambahan"]').addEventListener('change', (e) => {
    const fieldTesTambahan = document.getElementById('field_tes_tambahan');

    if (e.target.value === 'Ya') {
        fieldTesTambahan.classList.remove('hidden-field');
    } else {
        fieldTesTambahan.classList.add('hidden-field');
    }
});

// Optional 'Lain lain' kendala handler: show input when checkbox checked
(function () {
    const kendala9Checkbox = document.getElementById('kendala9');
    const kendalaLainInput = document.getElementById('kendala_lain_input');
    if (kendala9Checkbox && kendalaLainInput) {
        // initialize hidden and disabled state
        kendalaLainInput.classList.add('hidden-field');
        kendalaLainInput.disabled = true;
        kendala9Checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                kendalaLainInput.classList.remove('hidden-field');
                kendalaLainInput.disabled = false;
                kendalaLainInput.focus();
            } else {
                kendalaLainInput.classList.add('hidden-field');
                kendalaLainInput.disabled = true;
                kendalaLainInput.value = '';
            }
        });
    }
})();
// Toggle field program level
document.getElementById('jadwal_select').addEventListener('change', (e) => {
    const fieldProgramLevel = document.getElementById('field_program_level');
    const programLevelSelect = document.getElementById('program_level_select');

    if (e.target.value === 'Group' || e.target.value === 'Private' || e.target.value === 'Paket' || e.target.value === 'Semi-private') {
        fieldProgramLevel.classList.remove('hidden-field');
        programLevelSelect.innerHTML = `<option value="">${(langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.program_level_select && langDict[currentLang].fields.options.program_level_select[0]) || '-- Pilih Tingkat --'}</option>`;

        if (e.target.value === 'Group') {
            programLevelSelect.innerHTML += '<option value="Bronze">Bronze</option>';
            programLevelSelect.innerHTML += '<option value="Silver">Silver</option>';
        } else if (e.target.value === 'Private') {
            programLevelSelect.innerHTML += '<option value="Silver">Silver</option>';
            programLevelSelect.innerHTML += '<option value="Gold">Gold</option>';
            programLevelSelect.innerHTML += '<option value="Premium">Premium</option>';
        } else if (e.target.value === 'Paket') {
            programLevelSelect.innerHTML += '<option value="Bronze">Bronze</option>';
            programLevelSelect.innerHTML += '<option value="Silver">Silver</option>';
            programLevelSelect.innerHTML += '<option value="Gold">Gold</option>';
        } else if (e.target.value === 'Semi-private') {
            programLevelSelect.innerHTML += '<option value="Bronze">Bronze</option>';
            programLevelSelect.innerHTML += '<option value="Silver">Silver</option>';
        }
    } else {
        fieldProgramLevel.classList.add('hidden-field');
        programLevelSelect.innerHTML = `<option value="">${(langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.program_level_pending && langDict[currentLang].fields.options.program_level_pending[0]) || '-- Pilih Kelas Terlebih Dahulu --'}</option>`;
    }
});

// Study destination helpers: negara & universitas (top-10 per negara + "Lainnya")
const negaraStudiSelect = document.getElementById('negara_studi_select');
const negaraStudiOther = document.getElementById('negara_studi_other');
const negaraStudiInput = document.getElementById('negara_studi_input');
const universitasSelect = document.getElementById('universitas_select');
const universitasOther = document.getElementById('universitas_target_other');
const universitasInput = document.getElementById('universitas_target_input');

const TOP_UNIVERSITIES = {
    'United States': ['Harvard University', 'Stanford University', 'Massachusetts Institute of Technology (MIT)', 'California Institute of Technology (Caltech)', 'Princeton University', 'Yale University', 'Columbia University', 'University of Chicago', 'University of Pennsylvania', 'Johns Hopkins University'],
    'United Kingdom': ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'University College London (UCL)', 'London School of Economics and Political Science (LSE)', 'University of Edinburgh', 'University of Manchester', 'King\'s College London', 'University of Bristol', 'University of Warwick'],
    'Australia': ['Australian National University', 'University of Melbourne', 'University of Sydney', 'University of New South Wales', 'University of Queensland', 'Monash University', 'University of Western Australia', 'University of Adelaide', 'University of Technology Sydney', 'Macquarie University'],
    'Canada': ['University of Toronto', 'McGill University', 'University of British Columbia', 'University of Alberta', 'McMaster University', 'Universit\u00e9 de Montr\u00e9al', 'University of Waterloo', 'Western University', 'University of Ottawa', 'Queen\'s University'],
    'Germany': ['Ludwig-Maximilians-Universit\u00e4t M\u00fcnchen', 'Technische Universit\u00e4t M\u00fcnchen', 'Heidelberg University', 'Humboldt-Universit\u00e4t zu Berlin', 'Freie Universit\u00e4t Berlin', 'RWTH Aachen University', 'University of T\u00fcbingen', 'Karlsruhe Institute of Technology', 'Technical University of Berlin', 'Goethe University Frankfurt'],
    'Netherlands': ['Delft University of Technology', 'University of Amsterdam', 'Utrecht University', 'Eindhoven University of Technology', 'Wageningen University & Research', 'Leiden University', 'Erasmus University Rotterdam', 'Vrije Universiteit Amsterdam', 'Maastricht University', 'Radboud University'],
    'France': ['Universit\u00e9 Paris-Saclay', 'Sorbonne University', '\u00c9cole Polytechnique', 'Universit\u00e9 PSL', 'University of Paris', 'Universit\u00e9 Grenoble Alpes', 'Universit\u00e9 de Lyon', '\u00c9cole Normale Sup\u00e9rieure', 'Universit\u00e9 de Bordeaux', 'Universit\u00e9 de Strasbourg'],
    'New Zealand': ['University of Auckland', 'University of Otago', 'University of Canterbury', 'Victoria University of Wellington', 'Massey University', 'Auckland University of Technology', 'Lincoln University', 'University of Waikato', 'Southern Institute of Technology', 'Open Polytechnic of New Zealand'],
    'Singapore': ['National University of Singapore (NUS)', 'Nanyang Technological University (NTU)', 'Singapore Management University (SMU)', 'Singapore University of Technology and Design (SUTD)', 'Singapore Institute of Technology (SIT)', 'LASALLE College of the Arts', 'Nanyang Academy of Fine Arts (NAFA)', 'INSEAD (Asia Campus)', 'S P Jain School of Global Management', 'ESSEC Asia-Pacific'],
    'Japan': ['University of Tokyo', 'Kyoto University', 'Osaka University', 'Tohoku University', 'Nagoya University', 'Hokkaido University', 'Kyushu University', 'University of Tsukuba', 'Waseda University', 'Keio University']
};

function setSimpleOptions(selectEl, items, placeholder) {
    selectEl.innerHTML = `<option value="">${placeholder}</option>`;
    if (!items || !items.length) return;
    items.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        selectEl.appendChild(opt);
    });
    const otherOpt = document.createElement('option');
    otherOpt.value = 'other';
    otherOpt.textContent = (langDict && langDict[currentLang] && langDict[currentLang].otherOption) || 'Lainnya (Masukkan sendiri)';
    selectEl.appendChild(otherOpt);
}

function seedStudyCountrySelect() {
    const countries = Object.keys(TOP_UNIVERSITIES);
    const placeholder = (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.negara_studi_select && langDict[currentLang].fields.options.negara_studi_select[0]) || '-- Pilih Negara --';
    setSimpleOptions(negaraStudiSelect, countries, placeholder);
}

negaraStudiSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    negaraStudiOther.classList.toggle('hidden-field', val !== 'other' && val !== '');
    if (val === 'other') {
        const uniPlaceholder = (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.universitas_select && langDict[currentLang].fields.options.universitas_select[0]) || '-- Pilih Universitas --';
        universitasSelect.innerHTML = `<option value="">${uniPlaceholder}</option><option value="other">${(langDict && langDict[currentLang] && langDict[currentLang].otherOption) || 'Lainnya (Masukkan sendiri)'}</option>`;
        universitasOther.classList.remove('hidden-field');
        universitasInput.value = '';
        negaraStudiInput.value = '';
        negaraStudiOther.focus();
    } else if (!val) {
        const uniPlaceholder = (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.universitas_select && langDict[currentLang].fields.options.universitas_select[0]) || '-- Pilih Universitas --';
        universitasSelect.innerHTML = `<option value="">${uniPlaceholder}</option>`;
        universitasOther.classList.add('hidden-field');
        universitasInput.value = '';
        negaraStudiInput.value = '';
    } else {
        negaraStudiOther.classList.add('hidden-field');
        negaraStudiInput.value = val;
        const tops = TOP_UNIVERSITIES[val] || [];
        const uniPlaceholder = (langDict && langDict[currentLang] && langDict[currentLang].fields && langDict[currentLang].fields.options && langDict[currentLang].fields.options.universitas_select && langDict[currentLang].fields.options.universitas_select[0]) || '-- Pilih Universitas --';
        setSimpleOptions(universitasSelect, tops, uniPlaceholder);
        universitasOther.classList.add('hidden-field');
        universitasInput.value = '';
    }
});

negaraStudiOther.addEventListener('input', (e) => {
    negaraStudiInput.value = e.target.value.trim();
});

universitasSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'other') {
        universitasOther.classList.remove('hidden-field');
        universitasInput.value = '';
        universitasOther.focus();
    } else if (!val) {
        universitasOther.classList.add('hidden-field');
        universitasInput.value = '';
    } else {
        universitasOther.classList.add('hidden-field');
        universitasInput.value = val;
    }
});

universitasOther.addEventListener('input', (e) => {
    universitasInput.value = e.target.value.trim();
});

// Initialize study selects
seedStudyCountrySelect();
negaraStudiOther.classList.add('hidden-field');
universitasOther.classList.add('hidden-field');
negaraStudiInput.value = '';
universitasInput.value = '';

// Navigation functions
function showSection(sectionNum) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector(`.form-section[data-section="${sectionNum}"]`).classList.add('active');
    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 < sectionNum) {
            step.classList.add('completed');
        } else if (index + 1 === sectionNum) {
            step.classList.add('active');
        }
    });
    // Update buttons
    btnPrev.style.display = sectionNum === 1 ? 'none' : 'block';
    btnNext.style.display = sectionNum === totalSections ? 'none' : 'block';
    btnSubmit.style.display = sectionNum === totalSections ? 'block' : 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateCurrentSection()) {
        if (currentSection < totalSections) {
            currentSection++;
            showSection(currentSection);
        }
    }
});
btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSection > 1) {
        currentSection--;
        showSection(currentSection);
    }
});
function validateCurrentSection() {
    const currentSectionEl = document.querySelector(`.form-section[data-section="${currentSection}"]`);
    const requiredFields = currentSectionEl.querySelectorAll('[required]:not([type="checkbox"]):not([type="radio"])');
    const requiredGroups = new Set(Array.from(currentSectionEl.querySelectorAll('[required][type="radio"], [required][type="checkbox"]')).map(f => f.name));

    let isValid = true;

    // Special validation for section 6 (password confirmation)
    if (currentSection === 6) {
        const passwordField = currentSectionEl.querySelector('input[name="lms_password"]');
        const confirmPasswordField = currentSectionEl.querySelector('input[name="lms_password_confirm"]');
        if (passwordField.value !== confirmPasswordField.value) {
            confirmPasswordField.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            confirmPasswordField.style.borderColor = '';
        }
    }

    // Validate text/email/tel/date/select/textarea
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });

    // Validate radio/checkbox groups
    requiredGroups.forEach(groupName => {
        const group = currentSectionEl.querySelectorAll(`[name="${groupName}"]`);
        const isChecked = Array.from(group).some(f => f.checked);
        if (!isChecked) {
            group.forEach(f => f.style.accentColor = '#e74c3c');
            isValid = false;
        } else {
            group.forEach(f => f.style.accentColor = '#145DA0');
        }
    });

    if (!isValid) {
        // Use translations for toast messages
        const t = (langDict && langDict[currentLang] && langDict[currentLang].toast) ? langDict[currentLang].toast : {};
        let toastMsg = t.validationMissing || '⚠ Harap isi semua field yang wajib diisi';
        // Password mismatch
        if (currentSection === 6) {
            const passwordField = currentSectionEl.querySelector('input[name="lms_password"]');
            const confirmPasswordField = currentSectionEl.querySelector('input[name="lms_password_confirm"]');
            if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
                toastMsg = t.passwordMismatch || 'Konfirmasi password tidak sama';
            }
        }
        // First empty input/textarea/select
        if (toastMsg === (t.validationMissing || '⚠ Harap isi semua field yang wajib diisi')) {
            const emptyField = Array.from(requiredFields).find(f => !f.value.trim());
            if (emptyField) {
                let labelEl = null;
                if (emptyField.id) labelEl = currentSectionEl.querySelector(`label[for="${emptyField.id}"]`);
                if (!labelEl) {
                    const fg = emptyField.closest('.form-group');
                    if (fg) labelEl = fg.querySelector('label');
                }
                const labelText = labelEl ? labelEl.textContent.replace(/\*/g, '').trim() : (emptyField.name || (currentLang === 'en' ? 'This field' : 'Field ini'));
                const template = t.fieldRequired || '{field} wajib diisi';
                toastMsg = template.replace('{field}', labelText);
            } else {
                // radio/checkbox groups
                for (const g of requiredGroups) {
                    const groupEls = currentSectionEl.querySelectorAll(`[name="${g}"]`);
                    const any = Array.from(groupEls).some(x => x.checked);
                    if (!any) {
                        let labelEl = groupEls[0] && groupEls[0].closest('.form-group') && groupEls[0].closest('.form-group').querySelector('label');
                        const labelText = labelEl ? labelEl.textContent.replace(/\*/g, '').trim() : (g || (currentLang === 'en' ? 'Selection' : 'Pilihan'));
                        const template = t.fieldRequired || '{field} wajib diisi';
                        toastMsg = template.replace('{field}', labelText);
                        break;
                    }
                }
            }
        }
        messageEl.classList.remove('success');
        messageEl.classList.add('error');
        messageEl.textContent = toastMsg;
        messageEl.style.display = 'block';
        showToast(toastMsg, 'error');
    } else {
        messageEl.style.display = 'none';
    }
    return isValid;
}
// Dropzone & LMS UI behaviors
(function () {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('bukti_pembayaran');
    const chooseBtn = document.getElementById('chooseFileBtn');
    const fileInfo = document.getElementById('bukti_file_info');
    const fileNameEl = document.getElementById('bukti_file_name');
    const removeBtn = document.getElementById('remove_bukti_btn');
    const previewBtn = document.getElementById('preview_bukti_btn');
    const errorEl = document.getElementById('bukti_error');

    function updateFileUI(file) {
        if (!file) {
            fileInfo.style.display = 'none';
            fileNameEl.textContent = '';
            errorEl.style.display = 'none';
            return;
        }
        fileInfo.style.display = 'flex';
        fileNameEl.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
        // localize buttons when showing file
        try {
            if (previewBtn) {
                previewBtn.textContent = (langDict && langDict[currentLang] && langDict[currentLang].fileView) || previewBtn.textContent;
                previewBtn.setAttribute('aria-label', previewBtn.textContent);
            }
            if (removeBtn) {
                removeBtn.textContent = (langDict && langDict[currentLang] && langDict[currentLang].fileRemove) || removeBtn.textContent;
                removeBtn.setAttribute('aria-label', removeBtn.textContent);
            }
        } catch (e) { }
        errorEl.style.display = 'none';
    }

    function setFile(file) {
        if (!file) return;
        const check = validateFile(file);
        if (!check.ok) {
            errorEl.textContent = check.reason;
            errorEl.style.display = 'block';
            fileInput.value = '';
            updateFileUI(null);
            return;
        }
        // Create a DataTransfer to set file input programmatically
        const dt = new DataTransfer();
        dt.items.add(file);
        fileInput.files = dt.files;
        updateFileUI(file);
    }

    chooseBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => setFile(e.target.files[0]));

    dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
    dropzone.addEventListener('dragleave', (e) => { e.preventDefault(); dropzone.classList.remove('dragover'); });
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault(); dropzone.classList.remove('dragover');
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) setFile(file);
    });

    removeBtn.addEventListener('click', () => { fileInput.value = ''; updateFileUI(null); });
    previewBtn.addEventListener('click', () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) return;
        // If image, show in new tab; if pdf open
        const url = URL.createObjectURL(file);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 2000);
    });

    // Initialize if prefilled
    if (fileInput.files && fileInput.files[0]) updateFileUI(fileInput.files[0]);
})();

// Password toggle and strength
(function () {
    const pw = document.getElementById('lms_password');
    const toggle = document.getElementById('togglePassword');
    const meterBar = document.getElementById('password_meter_bar');
    const passwordHelp = document.getElementById('password_help');

    if (!pw) return; // Exit early if password field doesn't exist

    function scorePassword(s) {
        let score = 0;
        if (!s) return 0;
        if (s.length >= 8) score += 1;
        if (/[A-Z]/.test(s)) score += 1;
        if (/[0-9]/.test(s)) score += 1;
        if (/[^A-Za-z0-9]/.test(s)) score += 1;
        return score; // 0-4
    }

    function updateMeter() {
        const score = scorePassword(pw.value);
        const percent = (score / 4) * 100;
        if (meterBar) {
            meterBar.style.width = percent + '%';
            if (score <= 1) {
                meterBar.style.background = '#e74c3c';
            } else if (score === 2) {
                meterBar.style.background = '#f1c40f';
            } else {
                meterBar.style.background = '#2ecc71';
            }
        }
        if (passwordHelp) {
            if (score <= 1) {
                passwordHelp.textContent = (langDict && langDict[currentLang] && langDict[currentLang].passwordHelpWeak) || 'Lemah — gunakan minimal 8 karakter dengan kombinasi huruf dan angka.';
            } else if (score === 2) {
                passwordHelp.textContent = (langDict && langDict[currentLang] && langDict[currentLang].passwordHelpMedium) || 'Sedang — tambahkan simbol atau huruf kapital.';
            } else {
                passwordHelp.textContent = (langDict && langDict[currentLang] && langDict[currentLang].passwordHelpStrong) || 'Kuat — baik!';
            }
        }
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            if (pw.type === 'password') {
                pw.type = 'text';
                toggle.textContent = 'Hide';
            } else {
                pw.type = 'password';
                toggle.textContent = 'Show';
            }
        });
    }

    // Confirm password toggle
    const pwConfirm = document.getElementById('lms_password_confirm');
    const toggleConfirm = document.getElementById('togglePasswordConfirm');
    if (toggleConfirm && pwConfirm) {
        toggleConfirm.addEventListener('click', () => {
            if (pwConfirm.type === 'password') {
                pwConfirm.type = 'text';
                toggleConfirm.textContent = 'Hide';
            } else {
                pwConfirm.type = 'password';
                toggleConfirm.textContent = 'Show';
            }
        });
    }

    pw.addEventListener('input', updateMeter);
    updateMeter();
})();

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('[pendaftaran] Submit clicked, section:', currentSection);
    if (!validateCurrentSection()) {
        console.log('[pendaftaran] Validation failed');
        return;
    }
    console.log('[pendaftaran] Validation passed, starting upload...');
    loadingEl.style.display = 'block';
    messageEl.style.display = 'none';
    try {
        const formData = new FormData(form);
        const validation = validateAndSanitize(formData);
        if (validation.error) {
            throw new Error(validation.error);
        }
        const safe = validation.data;
        // Gunakan alamat apa adanya, tidak digabung
        const fullAlamat = safe.alamat || '';

        // === UPLOAD FILE TO SUPABASE STORAGE ===
        const fileInput = document.getElementById('bukti_pembayaran');
        const file = fileInput.files[0];
        let buktiUrl = null;
        if (file) {
            // Gunakan global supabase dari CDN
            const { createClient } = supabase;
            const client = createClient(SUPABASE_URL, SUPABASE_KEY);
            // Nama file unik: timestamp_namaasli
            const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const { data: uploadData, error: uploadError } = await client.storage.from('payment_proofs').upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            });
            if (uploadError) {
                throw new Error('Gagal upload bukti pembayaran: ' + uploadError.message);
            }
            // Dapatkan public URL
            const { data: publicUrlData } = client.storage.from('payment_proofs').getPublicUrl(fileName);
            buktiUrl = publicUrlData.publicUrl;
        } else {
            throw new Error('File bukti pembayaran tidak ditemukan');
        }

        const data = {
            nama: safe.nama,
            no_hp: safe.no_hp || null,
            email: safe.email || null,
            alamat: fullAlamat || null,
            program: safe.program || null, // Program Tes yang Ingin Dipersiapkan
            jenis_kelamin: safe.jenis_kelamin || null,
            tanggal_lahir: safe.tanggal_lahir || null,
            domisili_kota: safe.kota || null,
            domisili_provinsi: safe.provinsi || null,
            domisili_negara: safe.negara || null,
            status_saat_ini: safe.status || null,
            pendidikan_terakhir: safe.level || null,
            apakah_bekerja: safe.status_kerja === 'Ya' ? true : false,
            nama_perusahaan: safe.perusahaan || null,
            posisi_jabatan: safe.posisi || null,
            industri: safe.industri || null,
            tujuan_utama: safe.tujuan && Array.isArray(safe.tujuan) ? safe.tujuan.join(', ') : (safe.tujuan || null),
            target_jenjang: safe.jenjang_pendidikan || null,
            butuh_tes_lain: safe.tes_tambahan || null,
            rencana_tes: safe.rencana_tes || null,
            target_skor: safe.target_skor || null,
            pernah_kursus: safe.kursus_sebelumnya === 'Ya' ? true : false,
            detail_kursus: safe.kursus_sebelumnya_detail || null,
            kendala_utama: safe.kendala || null, // ARRAY
            alasan_memilih: safe.alasan_memilih || null,
            ekspektasi: safe.ekspektasi || null,
            preferensi_kelas: safe.jadwal || null,
            kesediaan_intensif: safe.program_intensif || null,
            bersedia_screening: safe.screening === 'Ya' ? true : false,
            studi_negara_tujuan: safe.negara_studi || null,
            studi_univ_target: safe.universitas_target || null,
            studi_prodi_target: safe.program_studi || null,
            studi_intake: safe.intake || null,
            kerja_negara_tujuan: safe.negara_kerja || null,
            kerja_bidang_target: safe.bidang_industri_target || null,
            tanggal_rencana_tes: safe.tanggal_rencana_tes || null,
            prospect_status: 'none',
            nama_kontak_darurat: safe.nama_kontak_darurat || null,
            kontak_darurat: safe.kontak_darurat || null,
            skor_awal: safe.skor_awal || null,
            lms_username: safe.lms_username || null,
            lms_password: safe.lms_password || null,
            tingkat_program: safe.program_level || null,
            tes_tambahan_detail: safe.tes_tambahan_detail || null,
            bukti_pembayaran_url: buktiUrl,
            kendala_lainnya: (typeof safe.kendala_lain !== 'undefined' ? safe.kendala_lain : null),
            kecamatan: safe.kecamatan || null,
            kelurahan: safe.kelurahan || null,
            catatan: safe.catatan || null
        };
        // Cek apakah Supabase sudah dikonfigurasi
        if (SUPABASE_URL.includes('YOUR-') || SUPABASE_KEY.includes('YOUR-')) {
            throw new Error('Supabase credentials belum dikonfigurasi. Ganti SUPABASE_URL dan SUPABASE_KEY dengan kredensial Anda.');
        }
        // Gunakan global supabase dari CDN
        const { createClient } = supabase;
        const client = createClient(SUPABASE_URL, SUPABASE_KEY);
        // Insert ke database
        const { data: insertedData, error } = await client
            .from('marketing_retail')
            .insert([data])
            .select();
        if (error) {
            throw new Error(error.message || 'Gagal menyimpan data');
        }
        loadingEl.style.display = 'none';
        messageEl.classList.remove('error');
        messageEl.classList.add('success');
        // Tampilkan preview/link file bukti pembayaran (gunakan terjemahan)
        let previewHtml = '';
        const tGlobal = (langDict && langDict[currentLang]) ? langDict[currentLang] : null;
        const successMsg = (tGlobal && tGlobal.successSubmission) ? tGlobal.successSubmission : 'Berhasil! Data Anda telah dikirim. Tim kami akan menghubungi Anda segera.';
        const viewPdfLabel = (tGlobal && tGlobal.viewPaymentPDF) ? tGlobal.viewPaymentPDF : 'Lihat Bukti Pembayaran (PDF)';
        const downloadLabel = (tGlobal && tGlobal.downloadPayment) ? tGlobal.downloadPayment : 'Download Bukti Pembayaran';
        if (buktiUrl) {
            if (buktiUrl.match(/\.(jpg|jpeg|png)$/i)) {
                previewHtml = `<br><img src="${buktiUrl}" alt="${viewPdfLabel}" style="max-width:320px;max-height:320px;margin-top:10px;border:1px solid #ccc;">`;
            } else if (buktiUrl.match(/\.pdf$/i)) {
                previewHtml = `<br><a href="${buktiUrl}" target="_blank" rel="noopener">${viewPdfLabel}</a>`;
            } else {
                previewHtml = `<br><a href="${buktiUrl}" target="_blank" rel="noopener">${downloadLabel}</a>`;
            }
        }
        messageEl.innerHTML = successMsg + previewHtml;
        messageEl.style.display = 'block';
        // Hide form and show only success message
        // Hide all form sections
        document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));
        // Hide progress bar, actions, and form elements
        const progressBar = document.querySelector('.progress-bar');
        const formActions = document.querySelector('.form-actions');
        if (progressBar) progressBar.style.display = 'none';
        if (formActions) formActions.style.display = 'none';
        form.style.display = 'none';
        // Scroll to success message
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
        loadingEl.style.display = 'none';
        const errMsg = error && error.message ? error.message : 'Terjadi kesalahan';
        messageEl.classList.remove('success');
        messageEl.classList.add('error');
        messageEl.textContent = 'Error: ' + errMsg;
        messageEl.style.display = 'block';
        // Use translated toast if it matches known cases
        const t = (langDict && langDict[currentLang] && langDict[currentLang].toast) ? langDict[currentLang].toast : null;
        let toastToShow = errMsg;
        if (t) {
            if (/bukti/i.test(errMsg) || /payment proof/i.test(errMsg)) {
                toastToShow = t.fileRequired || toastToShow;
            } else {
                toastToShow = (t.genericError || 'Error: {msg}').replace('{msg}', errMsg);
            }
        }
        showToast(toastToShow, 'error');
        console.error('Error:', error);
    }
});
function buildCatatan(dataSafe) {
    const parts = [];

    parts.push(`Tanggal Lahir: ${dataSafe.tanggal_lahir || 'N/A'}`);

    if (dataSafe.tujuan && dataSafe.tujuan.length > 0) {
        parts.push('Tujuan: ' + dataSafe.tujuan.join(', '));
    }

    if (dataSafe.kendala && dataSafe.kendala.length > 0) {
        parts.push('Kendala: ' + dataSafe.kendala.join(', '));
    }

    if (dataSafe.status_kerja === 'Ya') {
        parts.push('Bekerja di: ' + (dataSafe.perusahaan || 'N/A'));
        parts.push('Posisi: ' + (dataSafe.posisi || 'N/A'));
        parts.push('Industri: ' + (dataSafe.industri || 'N/A'));
    } else {
        parts.push('Status Kerja: Tidak');
    }

    if (dataSafe.jenjang_pendidikan) {
        parts.push('Jenjang Target: ' + dataSafe.jenjang_pendidikan);
    }

    if (dataSafe.negara_studi) {
        parts.push('Negara Studi: ' + dataSafe.negara_studi);
    }
    if (dataSafe.universitas_target) {
        parts.push('Universitas Target: ' + dataSafe.universitas_target);
    }
    if (dataSafe.program_studi) {
        parts.push('Program Studi: ' + dataSafe.program_studi);
    }
    if (dataSafe.intake) {
        parts.push('Intake: ' + dataSafe.intake);
    }

    if (dataSafe.negara_kerja) {
        parts.push('Negara Kerja: ' + dataSafe.negara_kerja);
    }
    if (dataSafe.bidang_industri_target) {
        parts.push('Bidang Industri Target: ' + dataSafe.bidang_industri_target);
    }

    if (dataSafe.rencana_tes) {
        parts.push('Rencana Tes: ' + dataSafe.rencana_tes);
    }

    if (dataSafe.target_skor) {
        parts.push('Target Skor: ' + dataSafe.target_skor);
    }

    if (dataSafe.kursus_sebelumnya === 'Ya') {
        parts.push('Kursus Sebelumnya: ' + (dataSafe.kursus_sebelumnya_detail || 'N/A'));
    }

    parts.push('Program Intensif: ' + (dataSafe.program_intensif || 'N/A'));
    parts.push('Screening Advisor: ' + (dataSafe.screening || 'N/A'));

    if (dataSafe.ekspektasi) {
        parts.push('Ekspektasi: ' + dataSafe.ekspektasi);
    }

    if (dataSafe.catatan) {
        parts.push('Catatan Tambahan: ' + dataSafe.catatan);
    }

    return parts.join(' | ');
}
// Initialize first section & wilayah Indonesia dropdowns
showSection(1);
try {
    if (typeof toggleIndonesiaFields === 'function') {
        toggleIndonesiaFields();
    }
} catch (e) {
    console.error('Gagal inisialisasi wilayah Indonesia:', e);
}