
export interface ProgramProgram {
    name: string;
    slug: string;
    description: string;
    target: string;
    duration: string;
    includes: string;
    image?: string;
    benefits?: string[];
    curriculum?: string[];
    price?: string;
    priceNote?: string;
    scheduleImage?: string;
    testimonials?: any[];
    faqs?: any[];
}

export interface ProgramCategory {
    title: string;
    programs: ProgramProgram[];
}

export const programsData: ProgramCategory[] = [
    {
        title: "Persiapan Tes Internasional",
        programs: [
            {
                name: "Ultimate IELTS",
                slug: "ielts",
                description: "Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja",
                target: "🎯 Mahasiswa & profesional muda",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
                benefits: [
                    "Guaranteed Score Improvement (Garansi Peningkatan Skor)",
                    "Native Speaker & Expert Tutors (Pengajar Ahli & Penutur Asli)",
                    "Comprehensive Study Material (Materi Belajar Lengkap)",
                    "Unlimited Practice Tests (Latihan Soal Tanpa Batas)",
                    "Personalized Feedback (Umpan Balik Personal)"
                ],
                price: "Rp 2.225.000",
                priceNote: "per level / 20 pertemuan",
                curriculum: [
                    "Listening Strategies & Practice",
                    "Reading Techniques (Skimming & Scanning)",
                    "Writing Task 1 & 2 In-depth Analysis",
                    "Speaking Coherence & Fluency Drill",
                    "Full Mock Tests & Review"
                ]
            },
            {
                name: "Ultimate TOEFL",
                slug: "toefl",
                description: "Persiapan TOEFL intensif untuk kuliah dan beasiswa keluar negeri",
                target: "🎯 Calon mahasiswa MBA",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1499750310159-5254f4121c6d?w=800&q=80"
            },
            {
                name: "Ultimate GMAT",
                slug: "gmat",
                description: "Persiapan GMAT intensif untuk lanjut kuliah S2 bisnis di luar negeri",
                target: "🎯 Calon mahasiswa MBA",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
            },
            {
                name: "Ultimate GRE",
                slug: "gre",
                description: "Persiapan GRE intensif untuk lanjut kuliah S2 ke luar negeri",
                target: "🎯 Mahasiswa tingkat akhir & lulusan S1",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
            },
            {
                name: "Ultimate SAT",
                slug: "sat",
                description: "Bimbingan intensif tes SAT untuk persiapan kuliah keluar negeri",
                target: "🎯 Pelajar SMA & calon mahasiswa",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80"
            },
            {
                name: "Ultimate PTE",
                slug: "pte",
                description: "Bimbingan PTE intensif untuk kuliah dan kerja di luar negeri",
                target: "🎯 Calon Mahasiswa",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
            },
        ],
    },
    {
        title: "Program Bahasa Asing",
        programs: [
            {
                name: "Ultimate JLPT",
                slug: "jlpt",
                description: "Bimbingan JLPT intensif untuk lulus ujian dan raih peluang studi atau kerja di Jepang",
                target: "🎯 Pelajar, pencari kerja & peminat studi ke Jepang",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1524485369048-b572059369a9?w=800&q=80"
            },
            {
                name: "Ultimate HSK",
                slug: "hsk",
                description: "Bimbingan HSK intensif untuk lulus ujian dan lanjut studi atau kerja di Tiongkok",
                target: "🎯 Pelajar, mahasiswa & profesional",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1548625361-9876aa45c111?w=800&q=80"
            },
            {
                name: "Ultimate TOPIK",
                slug: "topik",
                description: "Bimbingan TOPIK intensif untuk lulus ujian dan lanjut studi atau kerja di Korea Selatan",
                target: "🎯 Mahasiswa & profesional muda",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1517650862287-d5377f0295d8?w=800&q=80"
            },
            {
                name: "Ultimate DELF",
                slug: "delf",
                description: "Bimbingan DELF intensif untuk lulus ujian dan lanjut studi atau kerja di negara berbahasa Prancis",
                target: "🎯 Pelajar, mahasiswa & profesional",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?w=800&q=80"
            },
            {
                name: "Ultimate TestDaF",
                slug: "testdaf",
                description: "Bimbingan TestDaF intensif untuk lulus ujian dan lanjut kuliah di Jerman",
                target: "🎯 Pelajar & mahasiswa yang ingin kuliah di Jerman",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
            },
        ],
    },
    {
        title: "Program Khusus",
        programs: [
            {
                name: "Ultimate Scholarship",
                slug: "beasiswa",
                description: "Bimbingan Persiapan Beasiswa untuk Masuk Perguruan Tinggi Negeri",
                target: "🎯 Pelajar dan Mahasiswa",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
            },
            {
                name: "General English",
                slug: "general-english",
                description: "Kelas General English intensif untuk mahir berkomunikasi dalam bahasa Inggris sehari-hari",
                target: "🎯 Pemula yang ingin lancar berbahasa Inggris",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            },
            {
                name: "Business English",
                slug: "business-english",
                description: "Kelas Business English intensif untuk lancar komunikasi profesional di dunia kerja",
                target: "🎯 Karyawan, pebisnis, & profesional muda",
                duration: "🕒 Durasi 4–8 minggu",
                includes: "🎁 Simulasi, soal, sertifikat",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
            },
            {
                name: "Ultimate BIPA",
                slug: "bipa",
                description: "Intensive BIPA class for fluency in Indonesian for daily life & work",
                target: "🎯 Students, expatriates, & foreign professionals",
                duration: "🕒 Duration: 4–8 weeks",
                includes: "🎁 Simulations, exercises, certificate",
                image: "https://images.unsplash.com/photo-1572911229712-b9b2eb853ce2?w=800&q=80"
            },
        ],
    },
];

export const allPrograms = programsData.flatMap(category => category.programs);
