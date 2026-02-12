
export interface ProgramProgram {
    name: string;
    slug: string;
    description: string;
    target: string;
    duration: string;
    includes: string;
    image: string;
    categories: string[];
    benefits?: string[];
    curriculum?: string[];
    price?: string;
    priceNote?: string;
    scheduleImage?: string;
}

export const programsData: ProgramProgram[] = [
    // --- PERSIAPAN TES ---
    {
        name: "Ultimate IELTS",
        slug: "ielts",
        description: "Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja di luar negeri.",
        target: "Mahasiswa & profesional muda",
        duration: "4–8 Minggu",
        includes: "Simulasi, soal, sertifikat",
        image: "/program/ielts.png",
        categories: ["Persiapan TES", "Bahasa Inggris"]
    },
    {
        name: "Ultimate IELTS WHV",
        slug: "ielts-whv",
        description: "Persiapan IELTS General Training khusus untuk pengajuan Working Holiday Visa Australia.",
        target: "Calon peserta WHV Australia",
        duration: "4–6 Minggu",
        includes: "Simulasi IELTS, bimbingan dokumen, komunitas",
        image: "/program/ielts.png",
        categories: ["Bahasa Inggris"]
    },
    {
        name: "Ultimate TOEFL iBT",
        slug: "toefl-ibt",
        description: "Strategi dan latihan TOEFL iBT untuk skor tinggi guna pendaftaran universitas global.",
        target: "Calon mahasiswa (USA/Canada)",
        duration: "4–8 Minggu",
        includes: "Simulasi, bank soal, sertifikat",
        image: "/program/toefl.png",
        categories: ["Persiapan TES", "Bahasa Inggris"]
    },
    {
        name: "Ultimate TOEFL ITP",
        slug: "toefl-itp",
        description: "Bimbingan TOEFL ITP untuk kebutuhan beasiswa dalam negeri dan syarat kelulusan.",
        target: "Mahasiswa & pencari kerja lokal",
        duration: "4–6 Minggu",
        includes: "Simulasi, tips & trik, sertifikat",
        image: "/program/toefl.png",
        categories: ["Persiapan TES", "Bahasa Inggris"]
    },
    {
        name: "Ultimate TOEIC",
        slug: "toeic",
        description: "Persiapan tes TOEIC untuk mengukur kemampuan bahasa Inggris dalam lingkungan kerja.",
        target: "Profesional & karyawan perusahaan",
        duration: "4–6 Minggu",
        includes: "Fokus Listening & Reading, simulasi",
        image: "/program/toeic.png",
        categories: ["Persiapan TES", "Bahasa Inggris"]
    },
    {
        name: "Ultimate PTE",
        slug: "pte",
        description: "Bimbingan Pearson Test of English (PTE) Academic untuk studi dan migrasi.",
        target: "Calon mahasiswa (Aussie/UK/NZ)",
        duration: "4–8 Minggu",
        includes: "AI scoring simulation, feedback",
        image: "/program/pte.png",
        categories: ["Persiapan TES", "Bahasa Inggris"]
    },
    {
        name: "Ultimate GMAT",
        slug: "gmat",
        description: "Persiapan GMAT intensif untuk pendaftaran sekolah bisnis dan program MBA.",
        target: "Calon mahasiswa MBA/Bisnis",
        duration: "6–10 Minggu",
        includes: "Quant & Verbal prep, simulasi CAT",
        image: "/program/gmat.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate GRE",
        slug: "gre",
        description: "Bimbingan tes GRE untuk pendaftaran program Master dan PhD di luar negeri.",
        target: "Calon mahasiswa Pascasarjana",
        duration: "6–10 Minggu",
        includes: "Vocab building, Math prep, mock test",
        image: "/program/gre.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate SAT",
        slug: "sat",
        description: "Persiapan Digital SAT untuk pendaftaran kuliah S1 di universitas Amerika Serikat.",
        target: "Pelajar SMA (Undergraduate USA)",
        duration: "8–12 Minggu",
        includes: "Simulasi Digital SAT, bank soal",
        image: "/program/sat.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate ACT",
        slug: "act",
        description: "Alternatif tes SAT untuk pendaftaran kuliah di Amerika Serikat dan Kanada.",
        target: "Pelajar SMA (Undergraduate USA)",
        duration: "8–12 Minggu",
        includes: "Science section prep, simulasi",
        image: "/program/sat.png", // Fallback to SAT image
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate GED",
        slug: "ged",
        description: "Persiapan ujian kesetaraan SMA internasional untuk melanjutkan studi ke luar negeri.",
        target: "Siswa tanpa ijazah SMA formal",
        duration: "3–6 Bulan",
        includes: "Materi 4 subjek, ujian resmi",
        image: "/program/ged.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate IGCSE",
        slug: "igcse",
        description: "Bimbingan kurikulum internasional Cambridge untuk siswa menengah pertama.",
        target: "Siswa Grade 9-10",
        duration: "Program Pendampingan",
        includes: "Past papers, subject tutoring",
        image: "/program/caie.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate A-LEVEL",
        slug: "alevel",
        description: "Persiapan ujian standar emas internasional untuk masuk universitas top dunia.",
        target: "Siswa Grade 11-12",
        duration: "1–2 Tahun",
        includes: "AS & A2 level prep, materi lengkap",
        image: "/program/alevel.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate O-LEVEL",
        slug: "olevel",
        description: "Bimbingan persiapan ujian Ordinary Level untuk kualifikasi pendidikan menengah.",
        target: "Siswa Grade 9-10",
        duration: "1–2 Tahun",
        includes: "Materi Cambridge/Pearson, latihan soal",
        image: "/program/olevel.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate LSAT",
        slug: "lsat",
        description: "Persiapan tes masuk sekolah hukum terkemuka di Amerika Serikat dan Kanada.",
        target: "Calon mahasiswa hukum",
        duration: "8–12 Minggu",
        includes: "Logic games prep, reading comp",
        image: "/program/lsat.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate AS-Level",
        slug: "aslevel",
        description: "Bimbingan tahun pertama kualifikasi A-Level untuk akses pendidikan tinggi.",
        target: "Siswa Grade 11",
        duration: "1 Tahun",
        includes: "Materi AS subjek, latihan ujian",
        image: "/program/alevel.png", // Use alevel.png
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate IB",
        slug: "ib",
        description: "Pendampingan kurikulum International Baccalaureate untuk meraih Diploma Program.",
        target: "Siswa sekolah IB",
        duration: "1–2 Tahun",
        includes: "IA & EE mentoring, subject tutoring",
        image: "/program/ib.png",
        categories: ["Persiapan TES"]
    },

    // --- PROGRAM BAHASA ---
    {
        name: "Ultimate BIPA",
        slug: "bipa",
        description: "Kursus Bahasa Indonesia bagi penutur asing untuk kebutuhan profesional dan harian.",
        target: "Warga asing & ekspatriat",
        duration: "4–8 Minggu",
        includes: "Percakapan, budaya, sertifikat",
        image: "/program/bipa.png",
        categories: ["Program Bahasa"]
    },
    {
        name: "Ultimate DELF",
        slug: "delf",
        description: "Persiapan ujian sertifikat bahasa Prancis tingkat internasional (A1-B2).",
        target: "Peminat studi/kerja di Prancis",
        duration: "4–8 Minggu",
        includes: "Penutur asli, simulasi ujian",
        image: "/program/delf.png",
        categories: ["Program Bahasa"]
    },
    {
        name: "Ultimate HSK",
        slug: "hsk",
        description: "Bimbingan intensif bahasa Mandarin untuk persiapan ujian HSK level 1-6.",
        target: "Peminat studi/kerja di Tiongkok",
        duration: "6–12 Minggu",
        includes: "Karakter Hanzi, bank soal",
        image: "/program/hsk.png",
        categories: ["Program Bahasa"]
    },
    {
        name: "Ultimate JLPT",
        slug: "jlpt",
        description: "Persiapan ujian kemampuan bahasa Jepang (JLPT) level N5 hingga N1.",
        target: "Peminat studi/kerja di Jepang",
        duration: "6–12 Minggu",
        includes: "Kanji & Grammar, latihan soal",
        image: "/program/jlpt.png",
        categories: ["Program Bahasa"]
    },
    {
        name: "Ultimate TesDAF",
        slug: "testdaf",
        description: "Persiapan bahasa Jerman tingkat lanjut untuk syarat masuk perguruan tinggi di Jerman.",
        target: "Mahasiswa ke Jerman",
        duration: "8–16 Minggu",
        includes: "Level B2-C1, simulasi ujian",
        image: "/program/testdaf.png",
        categories: ["Program Bahasa"]
    },
    {
        name: "Ultimate TOPIK",
        slug: "topik",
        description: "Bimbingan bahasa Korea untuk persiapan ujian TOPIK I dan TOPIK II.",
        target: "Mahasiswa & pekerja ke Korea",
        duration: "6–12 Minggu",
        includes: "Latihan soal, kosa kata intensif",
        image: "/program/topik.png",
        categories: ["Program Bahasa"]
    },

    // --- KHUSUS / LAINNYA ---
    {
        name: "Ultimate Scholarship",
        slug: "beasiswa",
        description: "Mentoring komprehensif untuk persiapan aplikasi beasiswa luar negeri.",
        target: "Pencari beasiswa",
        duration: "3–6 Bulan",
        includes: "Mentoring esai, CV, interview",
        image: "/program/Scholarship.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate General English",
        slug: "general-english",
        description: "Kursus bahasa Inggris umum untuk meningkatkan kepercayaan diri dalam berkomunikasi.",
        target: "Pelajar & karyawan",
        duration: "4–12 Minggu",
        includes: "Speaking focus, grammar",
        image: "/program/ge.png",
        categories: ["Bahasa Inggris", "Program Bahasa"]
    },
    {
        name: "Ultimate Business English",
        slug: "business-english",
        description: "Keterampilan bahasa Inggris praktis untuk presentasi, negosiasi, dan email bisnis.",
        target: "Profesional & eksekutif",
        duration: "4–8 Minggu",
        includes: "Presentation skills, meeting skills",
        image: "/program/be.png",
        categories: ["Bahasa Inggris", "Program Bahasa"]
    },
    {
        name: "Ultimate UTBK",
        slug: "utbk",
        description: "Persiapan intensif UTBK SNBT untuk masuk perguruan tinggi negeri di Indonesia.",
        target: "Lulusan SMA (SNBT)",
        duration: "6–12 Minggu",
        includes: "TPS & TKA, Try out, analisis",
        image: "/program/utbk.png",
        categories: ["Persiapan TES"]
    },
    {
        name: "Ultimate Ausbildung",
        slug: "ausbildung",
        description: "Program persiapan vokasi ke Jerman yang menggabungkan belajar dan bekerja.",
        target: "Lulusan SMA/SMK",
        duration: "6–12 Bulan",
        includes: "Bahasa Jerman B1, kontrak, visa",
        image: "/program/ausbildung.png",
        categories: ["Program Bahasa"]
    },
    {
        name: "Ultimate TPA",
        slug: "tpa",
        description: "Bimbingan Tes Potensi Akademik untuk pendaftaran S2/S3 dan seleksi kerja.",
        target: "Calon mahasiswa pascasarjana",
        duration: "4–6 Minggu",
        includes: "Logika, Numerik, Verbal prep",
        image: "/program/utbk.png", // Fallback
        categories: ["Persiapan TES"]
    }
];

export const allPrograms = programsData;
