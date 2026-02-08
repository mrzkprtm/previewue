export interface ProgramData {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: 'Persiapan TES' | 'Bahasa Inggris' | 'Program Bahasa';
    image: string;
    logoText?: string; // HTML string for the graphic logo
    themeColor?: string; // Tailwind class
    duration: string;
    targetAudience: string;
    method: string;
    description: string;
    benefits: string[];
    topics: {
        title: string;
        content: string[];
    }[];
    pricing?: {
        online: number;
        offline: number;
        discount?: number;
    };
    schedule?: string; // Image or description
    faq: {
        question: string;
        answer: string;
    }[];
}

export const programs: ProgramData[] = [
    {
        id: 'ielts',
        slug: 'ielts',
        title: 'Ultimate IELTS',
        subtitle: 'Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja',
        category: 'Persiapan TES',
        image: 'https://placehold.co/600x400/F59E0B/white?text=IELTS',
        logoText: '<span class="text-slate-800 text-sm block mb-1">Ultimate</span><span class="text-red-600 text-5xl font-extrabold tracking-tighter">IELTS</span><span class="text-red-600 text-lg align-top font-bold">™</span>',
        themeColor: 'bg-[#FFC107]',
        duration: 'Durasi 4–8 minggu',
        targetAudience: 'Mahasiswa & profesional muda',
        method: 'Simulasi, soal, sertifikat',
        description: `Kursus IELTS di Ultimate Education dirancang untuk membantu Anda meraih skor tinggi, baik untuk IELTS Academic maupun IELTS General Training. Kelas persiapan ielts ini didukung oleh tutor berpengalaman, termasuk native speaker dan pengajar lokal profesional, sehingga setiap peserta mendapatkan bimbingan yang relevan dengan format ujian terbaru. Pembelajaran difokuskan pada 4 keterampilan utama IELTS: Listening, Reading, Writing, dan Speaking. Peserta mendapatkan strategi praktis, tips manajemen waktu, serta mock test resmi untuk melatih kesiapan ujian.`,
        benefits: [
            'Bimbingan Expert (Native & Lokal)',
            'Strategi Praktis & Tips Waktu',
            'Full IELTS Simulation Test',
            'Review Official Cambridge Guide',
            'Garansi Skor Meningkat'
        ],
        topics: [
            {
                title: 'Listening',
                content: ['Mengenali berbagai aksen', 'Memahami audio monolog dan dialog', 'Latihan tipe soal (matching, map labelling)']
            },
            {
                title: 'Reading',
                content: ['Teknik skimming & scanning', 'Memahami jenis pertanyaan', 'Analisis teks panjang', 'Strategi manajemen waktu']
            },
            {
                title: 'Writing',
                content: ['Struktur Task 1 (Grafik/Surat)', 'Struktur Task 2 (Essay)', 'Ideation & Argumen Logis', 'Grammar & Kohesi']
            },
            {
                title: 'Speaking',
                content: ['Latihan Part 1, 2, 3', 'Meningkatkan pronunciation', 'Menghindari filler words', 'Ide spontan']
            }
        ],
        pricing: {
            online: 1750000,
            offline: 2320000,
            discount: 0
        },
        faq: [
            {
                question: 'Apa bedanya IELTS Academic dan General Training?',
                answer: 'IELTS Academic untuk keperluan studi (S1, S2, S3), sedangkan General Training biasanya untuk keperluan kerja atau migrasi (WHV).'
            },
            {
                question: 'Apakah jadwalnya fleksibel?',
                answer: 'Ya, kami menyediakan opsi kelas Online dan Offline dengan jadwal yang dapat disesuaikan dengan aktivitas peserta (mahasiswa/karyawan).'
            },
            {
                question: 'Apakah ada placement test?',
                answer: 'Tentu, kami menyediakan layanan tes skor gratis untuk mengetahui level kemampuan bahasa Inggris Anda sebelum memulai kelas.'
            }
        ]
    },
    {
        id: 'sat',
        slug: 'sat',
        title: 'Ultimate SAT',
        subtitle: 'Bimbingan intensif tes SAT untuk persiapan kuliah ke luar negeri',
        category: 'Persiapan TES',
        image: 'https://placehold.co/600x400/0F4C81/white?text=SAT+Prep',
        logoText: '<span class="text-slate-800 text-sm block mb-1">Ultimate</span><span class="text-[#007aff] text-5xl font-extrabold tracking-tighter">SAT</span><span class="text-[#007aff] text-lg align-top font-bold">®</span>',
        themeColor: 'bg-[#FFC107]',
        duration: 'Durasi 4–8 minggu',
        targetAudience: 'Pelajar SMA & calon mahasiswa',
        method: 'Simulasi, soal, sertifikat',
        description: 'Program persiapan SAT komprehensif yang mencakup Matematika dan Reading/Writing. Dirancang khusus untuk siswa yang ingin mendaftar ke universitas top di AS dan negara lainnya.',
        benefits: ['Materi Math & Verbal Lengkap', 'Bank Soal Update', 'Try Out Rutin', 'Analisis Performa'],
        topics: [
            { title: 'Mathematics', content: ['Algebra', 'Advanced Math', 'Problem Solving', 'Data Analysis'] },
            { title: 'Reading & Writing', content: ['Command of Evidence', 'Words in Context', 'Standard English Conventions', 'Expression of Ideas'] }
        ],
        pricing: { online: 2000000, offline: 3000000 },
        faq: [
            { question: 'Kapan sebaiknya mulai belajar SAT?', answer: 'Idealnya dimulai sejak kelas 10 atau 11 SMA agar memiliki waktu persiapan yang cukup.' }
        ]
    },
    {
        id: 'gmat',
        slug: 'gmat',
        title: 'Ultimate GMAT',
        subtitle: 'Persiapan GMAT intensif untuk lanjut kuliah S2 bisnis di luar negeri',
        category: 'Persiapan TES',
        image: 'https://placehold.co/600x400/F59E0B/white?text=GMAT+Prep',
        logoText: '<span class="text-slate-800 text-sm block mb-1">Ultimate</span><span class="text-slate-900 text-5xl font-extrabold tracking-tighter">GMAT</span><span class="text-slate-900 text-lg align-top font-bold">™</span>',
        themeColor: 'bg-[#FFC107]',
        duration: 'Durasi 6-8 minggu',
        targetAudience: 'Calon mahasiswa MBA',
        method: 'Simulasi, soal, sertifikat',
        description: 'Kuasai GMAT dengan strategi penyeleasaian soal kuantitatif dan verbal tingkat lanjut. Cocok untuk profesional yang menargetkan sekolah bisnis top dunia.',
        benefits: ['Integrated Reasoning', 'Analytical Writing Assessment', 'Official Guide Review', 'Personalized Feedback'],
        topics: [
            { title: 'Quantitative', content: ['Problem Solving', 'Data Sufficiency'] },
            { title: 'Verbal', content: ['Critical Reasoning', 'Reading Comprehension', 'Sentence Correction'] }
        ],
        pricing: { online: 2500000, offline: 3500000 },
        faq: [
            { question: 'Berapa skor GMAT yang bagus?', answer: 'Skor 700+ dianggap sangat kompetitif untuk masuk ke program MBA top dunia.' }
        ]
    }
];
