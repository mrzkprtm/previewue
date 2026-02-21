export interface ProgramData {
    slug: string;
    originalSlug?: string;
    meta: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
        pillText: string;
        image?: string;
    };
    overview: {
        title: string;
        content: string[];
    };
    pricing: {
        [key: string]: {
            title: string;
            description: string;
            features: string;
            curriculum: { title: string; content: string }[];
            pricing: {
                [mode: string]: {
                    [variant: string]: number;
                };
            };
        };
    };
    whyUs: {
        title: string;
        items: {
            title: string;
            description: string;
            iconPath: string;
        }[];
    };
    alumni: {
        title: string;
        subtitle: string;
        items: {
            name: string;
            program: string;
            quote: string;
        }[];
    };
    faq: {
        items: {
            q: string;
            a: string;
        }[];
    };
}

export const programs: ProgramData[] = [
    {
        "slug": "scholarship",
        "originalSlug": "ultimate-scholarship",
        "meta": {
            "title": "Ultimate Scholarship",
            "description": "Raih skor Ultimate Scholarship impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">Ultimate Scholarship</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "ULTIMATE SCHOLARSHIP Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Program Persiapan Beasiswa di Ultimate Education adalah pendampingan komprehensif yang dirancang untuk memaksimalkan peluang Anda lolos beasiswa. Program ini lebih dari sekadar kursus bahasa—kita mulai dari profiling kandidat (analisis rekam jejak akademik, prestasi, minat riset, dan proyeksi karier), menentukan jenis beasiswa & universitas yang paling cocok, lalu mendampingi seluruh proses aplikasi: penulisan dokumen, pelatihan bahasa, simulasi tes skolastik, hingga mock interview.",
                "Semua peserta mendapatkan bimbingan One-on-One oleh mentor berpengalaman yang memahami standar beasiswa internasional dan lokal. Selain itu, program menyediakan fasilitas pendukung seperti IELTS/TOEFL practice tests gratis, proofreading dokumen, seminar dan sesi sharing alumni."
            ]
        },
        "pricing": {
            "Private CLASS": {
                "title": "Private CLASS",
                "description": "Alur Persiapan (Step-by-Step):\n1. Profiling & Rekomendasi Beasiswa\nAnalisis mendalam terhadap transkrip, CV, prestasi, minat riset, dan rencana karier. Hasil profiling dipakai untuk menyusun daftar target beasiswa/universitas yang realistic & strategis.\n2. Perencanaan & Roadmap Pendaftaran\nMenentukan timeline pendaftaran, deadline dokumen, kebutuhan language score, dan strategi aplikasi.\n3. Penyusunan Dokumen Aplikasi\nMotivation Letter untuk pelamar S1 & S2: brainstorming ide, struktur, serta revisi hingga final.\nResearch Proposal untuk pelamar S3: pembentukan ide riset, metodologi, kontribusi ilmiah, serta penyusunan referensi.\nSemua dokumen melalui proses proofreading, editing gaya bahasa akademik, dan personal branding agar lebih persuasive.\n4. Persiapan Bahasa Inggris\nLatihan intens pada keempat keterampilan (Listening, Reading, Writing, Speaking) + akses free IELTS & TOEFL practice tests berkala untuk memastikan skor memenuhi syarat beasiswa.\n5. Tes Skolastik & Penalaran\nLatihan numerik, logika, dan tes kemampuan akademik yang sering muncul pada proses seleksi atau assessment center.\n6. Mock Interview Beasiswa\nSimulasi wawancara dengan feedback konkret: menjawab pertanyaan sensitif, menyusun jawaban STAR (Situation-Task-Action-Result), dan melatih delivery agar percaya diri.\n7. Seminar & Networking\nSesi seminar strategi pendaftaran, beasiswa yang relevan, serta sharing dari alumni penerima beasiswa untuk insight praktis.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Analisis Profil & Pemetaan Beasiswa yang Cocok",
                        "content": "Tahap ini dimulai dengan analisis mendalam terhadap profil akademis, non-akademis, dan minat karir Anda. Kami akan meninjau riwayat pendidikan, prestasi, pengalaman kerja, serta tujuan masa depan Anda. Berdasarkan data ini, kami akan memetakan dan merekomendasikan daftar beasiswa yang paling relevan dan memiliki peluang sukses tinggi untuk Anda lamar. Pendekatan ini memastikan Anda tidak membuang waktu pada beasiswa yang tidak sesuai, melainkan fokus pada kesempatan yang benar-benar bisa Anda raih."
                    },
                    {
                        "title": "Penulisan dan Polishing Motivation Letter (S1/S2)",
                        "content": "Kami akan membimbing Anda dalam proses penulisan Motivation Letter (Surat Motivasi) yang kuat dan persuasif untuk aplikasi S1 atau S2. Tahap ini tidak hanya tentang memperbaiki tata bahasa, tetapi juga membantu Anda menyusun narasi pribadi yang menonjol. Kami akan membantu Anda menceritakan pengalaman, motivasi, dan aspirasi Anda dengan cara yang unik, sehingga dapat menarik perhatian komite seleksi dan menunjukkan mengapa Anda adalah kandidat yang ideal."
                    },
                    {
                        "title": "Penyusunan Research Proposal (S3)",
                        "content": "Bagi calon mahasiswa S3, kami menyediakan dukungan komprehensif dalam menyusun Research Proposal, mulai dari tahap ide hingga penulisan akhir. Kami akan bekerja sama dengan Anda untuk merumuskan topik penelitian yang inovatif, mengembangkan metodologi yang solid, dan mengumpulkan referensi yang kredibel. Tujuannya adalah menghasilkan proposal yang tidak hanya memenuhi standar akademis, tetapi juga secara jelas menunjukkan kontribusi signifikan yang ingin Anda berikan di bidang Anda."
                    },
                    {
                        "title": "Proofreading Profesional untuk Semua Dokumen Aplikasi",
                        "content": "Setiap dokumen aplikasi, termasuk esai, surat rekomendasi, dan proposal, akan melalui proses proofreading profesional. Tim kami akan memeriksa setiap detail, memastikan tidak ada kesalahan tata bahasa, ejaan, atau sintaksis. Kami juga akan mengoptimalkan pilihan kata dan struktur kalimat agar argumen Anda tersampaikan dengan jelas, ringkas, dan persuasif, meninggalkan kesan profesional pada para penilai."
                    },
                    {
                        "title": "Practice Tests IELTS/TOEFL (Internal) + Strategi Peningkatan Skor",
                        "content": "Kami menyediakan practice tests internal untuk IELTS/TOEFL yang dirancang untuk mensimulasikan kondisi ujian sesungguhnya. Setelah setiap tes, kami akan memberikan strategi spesifik untuk meningkatkan skor Anda, seperti tips manajemen waktu, pendekatan untuk menjawab setiap jenis soal, dan cara menghindari jebakan umum dalam ujian. Latihan teratur ini akan membangun kepercayaan diri dan kesiapan Anda."
                    },
                    {
                        "title": "Latihan Soal Skolastik & Logical Reasoning",
                        "content": "Untuk beasiswa atau program studi yang memerlukan tes kemampuan umum, kami menawarkan pelatihan khusus pada soal skolastik dan logical reasoning. Kami akan membekali Anda dengan teknik pemecahan masalah yang efisien, termasuk cara berpikir kritis, mengidentifikasi pola, dan menyimpulkan argumen secara logis. Latihan ini bertujuan untuk meningkatkan kecepatan dan akurasi Anda dalam menjawab soal."
                    },
                    {
                        "title": "Mock Interview Real-Case dengan Umpan Balik Mendalam",
                        "content": "Anda akan berpartisipasi dalam sesi mock interview yang meniru situasi wawancara beasiswa atau universitas yang sebenarnya. Pewawancara kami akan mengajukan pertanyaan-pertanyaan yang relevan dan sering muncul. Setelahnya, Anda akan menerima umpan balik mendalam mengenai jawaban Anda, bahasa tubuh, nada bicara, serta area yang perlu Anda perbaiki. Simulasi ini akan membantu Anda tampil lebih tenang dan meyakinkan saat wawancara sungguhan."
                    },
                    {
                        "title": "Akses Ultimate English Club untuk Meningkatkan Fluency & Confidence",
                        "content": "Sebagai bagian dari program, Anda akan mendapatkan akses eksklusif ke Ultimate English Club. Lingkungan ini dirancang untuk membantu Anda meningkatkan kefasihan (fluency) dan kepercayaan diri dalam berkomunikasi menggunakan bahasa Inggris."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apakah program ini cocok untuk semua jenjang (S1, S2, S3)?",
                    "a": "Ya. Program fleksibel dan dirancang khusus untuk kebutuhan S1/S2/S3: motivation letter untuk S1/S2; research proposal untuk S3."
                },
                {
                    "q": "Apa itu profiling beasiswa?",
                    "a": "Profiling adalah analisis awal terhadap akademik, prestasi, pengalaman, dan rencana karier untuk menentukan jenis beasiswa/universitas yang paling sesuai dan realistis."
                },
                {
                    "q": "Berapa kali saya bisa mengikuti free IELTS/TOEFL practice test?",
                    "a": "Tergantung paket: Silver 2x, Gold 5x, Premium hingga 15x. Test ini adalah evaluasi internal untuk mengukur kesiapan skor bahasa."
                },
                {
                    "q": "Apakah saya dibantu menulis dokumen dari nol?",
                    "a": "Ya. Tim kami membantu dari tahap ide hingga final: penulisan awal, coaching gaya bahasa, dan proofreading akhir."
                },
                {
                    "q": "Apakah skor dari free test bisa digunakan untuk pendaftaran resmi?",
                    "a": "Skor free test bersifat evaluasi internal. Untuk pendaftaran resmi Anda harus mengikuti tes resmi (mis. IELTS/TOEFL Institutional atau test center). Free test membantu Anda memastikan kesiapan sebelum mengikuti tes resmi."
                },
                {
                    "q": "Berapa lama program biasanya berjalan?",
                    "a": "Durasi disesuaikan dengan kebutuhan dan paket: umumnya antara 2–6 bulan, bergantung jarak waktu hingga deadline beasiswa dan level persiapan awal."
                },
                {
                    "q": "Apakah ada simulasi wawancara?",
                    "a": "Ya — terutama pada paket Premium (dan dapat ditambahkan di paket Gold atas permintaan). Mock interview diberikan dengan feedback komprehensif."
                },
                {
                    "q": "Apakah saya akan dibantu memilih negara atau universitas tujuan?",
                    "a": "Ya. Melalui proses profiling dan konsultasi, tim akan membantu menetapkan daftar negara/universitas/beasiswa yang paling relevan untuk Anda."
                },
                {
                    "q": "Bolehkah saya menambah sesi atau meminta paket kustom?",
                    "a": "Tentu. Paket bisa dikustomisasi sesuai kebutuhan, termasuk sesi tambahan untuk dokumen, bahasa, atau mock interview."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Kami memahami pentingnya kecocokan antara siswa dan tutor. Meskipun tidak menyediakan fitur pemilihan tutor dari daftar publik, kami melakukan konsultasi awal untuk memahami target nilai, gaya belajar, area prioritas, dan jadwal Anda.Berdasarkan informasi tersebut, kami mencocokkan Anda dengan tutor yang paling relevan. Preferensi Anda akan dipertimbangkan, dan kami selalu terbuka mendiskusikan penyesuaian bila diperlukan."
                }
            ]
        }
    },
    {
        "slug": "as-level",
        "originalSlug": "as-level-preparation",
        "meta": {
            "title": "AS-Level Preparation",
            "description": "Raih skor ASLevel impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">ASLevel</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "ASLEVEL Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Course Overview",
            "content": [
                "The AS Level course at Ultimate Education is designed to help students prepare for the Cambridge International AS Level exam, the initial stage of the A-Level qualification. This program is suitable for:",
                "students who only want to take the first year of A-Level,",
                "or those who want to deepen their understanding of certain subjects before progressing to the full A-Level.",
                "With the guidance of experienced tutors, our curriculum is always up-to-date and oriented towards the official Cambridge exams. Each participant will receive:",
                "a flexible study plan tailored to personal goals,",
                "private or small group face-to-face sessions,",
                "practice questions equivalent to official exams,",
                "and regular progress monitoring."
            ]
        },
        "pricing": {
            "AS-Level Private CLASS": {
                "title": "AS-Level Private CLASS",
                "description": "The AS Level Private Class (One-on-One) program provides a more personal, intensive, and customized learning experience tailored to individual needs.Tutors will directly target specific subjects or topics that need improvement, such as focusing on Mathematics, Physics, or Economics.Learning materials are tailored to the student’s skill level and academic goals, making the learning process more efficient and the results optimal for achieving the best scores on the Cambridge International AS Level exam.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "In the initial stage, students will take a diagnostic test designed to map their level of understanding in each selected subject. This test assesses fundamental concept knowledge, analytical skills, and readiness for the Cambridge International AS Level exam. The results provide an accurate picture of their strengths and areas that need to be reinforced.\nBased on these results, the teaching team develops a Personalized Study Plan that adjusts to the student’s target grades, schedule, and learning preferences. This plan ensures the learning process is focused and efficient, while also providing flexibility to adapt if the student’s progress is faster than initially expected."
                    },
                    {
                        "title": "FIRST: Understanding AS-Level Exam Structure & Assessment Criteria",
                        "content": "This stage focuses on introducing the AS Level exam format, including question types, grade weight distribution, and official Cambridge assessment criteria. Students will learn how each exam component, such as multiple choice, analytical essays, or practical experiments, is graded and affects the final score.\nAdditionally, tutors provide technical guidance such as time management per exam section, carefully reading question instructions, and how to avoid common mistakes that often lower scores. This deep understanding helps students feel more prepared and confident when facing the actual exam."
                    },
                    {
                        "title": "SECOND: Mastering Core Subject Knowledge",
                        "content": "In this stage, students strengthen their core concepts in their chosen subjects like Mathematics, Physics, Economics, and others. The learning includes explanations of fundamental theories, application of concepts in problem-solving, and in-depth discussions to ensure a comprehensive understanding.\nTutors adapt teaching methods to the student’s learning style, for example through tiered practice questions, mini-experiments, or real-case analysis. With this approach, students don’t just memorize formulas or definitions, but truly understand the underlying scientific and economic principles."
                    },
                    {
                        "title": "THIRD: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "This stage ensures the entire Cambridge AS Level syllabus is covered thoroughly. The material is mapped into structured modules so that each topic receives an adequate portion of time. Tutors guide students to complete each chapter, provide specific exercises, and highlight topics that frequently appear in exams.\nAdditionally, students enrich their academic vocabulary and technical terminology relevant to each subject. Mastering these terms is very important, as many exam questions rely on a precise understanding of keywords to interpret questions correctly."
                    },
                    {
                        "title": "FOURTH: Timed Practice & Real Exam Simulation",
                        "content": "In this phase, students undergo timed practice that mimics the conditions of the actual exam. The practice is done with identical duration and format, so they become accustomed to time pressure and can manage their work strategy.\nThis simulation is also evaluated comprehensively: tutors provide detailed feedback on speed, accuracy, and answering techniques. The evaluation results are used to improve the study plan and review weak topics, ensuring full readiness before exam day."
                    },
                    {
                        "title": "FIFTH: Advanced Topics and Strategies",
                        "content": "The final stage focuses on advanced topics that often make the difference for high scores. Tutors teach strategies for solving complex problems, combining various concepts across chapters, and writing analytical answers that earn maximum points.\nStudents also practice advanced exam strategies, such as how to strategically choose questions, quickly outline answers, and optimize remaining time for double-checking. With this preparation, students are not only ready to pass, but also have the opportunity to achieve the highest grades on the Cambridge International AS Level exam."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "AS-Level Customized Class": {
                "title": "AS-Level Customized Class",
                "description": "The AS Level Customized Class program is highly suitable for students who have limited time or want to focus on specific subjects.With flexible package options in multiples of 3 sessions, students can customize their learning, for example, only focusing on Science or Business Studies with a study schedule that truly fits their needs.This class is completely personalized, covering:Focus on specific subjectsStudy only the subjects that are a priority according to academic goals and study plans.Flexible study scheduleStudy time can be adjusted to school schedules or other activities without compromising the quality of guidance.Intensive guidance from experienced tutorsIn-depth mentoring to ensure optimal material comprehension and readiness to face the official exams.This approach ensures students can learn more practically, in a focused manner, and according to their academic needs while being ready to face the Cambridge International AS Level exam with confidence.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "In the initial stage, students will take a diagnostic test designed to map their level of understanding in each selected subject. This test assesses fundamental concept knowledge, analytical skills, and readiness for the Cambridge International AS Level exam. The results provide an accurate picture of their strengths and areas that need to be reinforced.\nBased on these results, the teaching team develops a Personalized Study Plan that adjusts to the student’s target grades, schedule, and learning preferences. This plan ensures the learning process is focused and efficient, while also providing flexibility to adapt if the student’s progress is faster than initially expected."
                    },
                    {
                        "title": "FIRST: Understanding AS-Level Exam Structure & Assessment Criteria",
                        "content": "This stage focuses on introducing the AS Level exam format, including question types, grade weight distribution, and official Cambridge assessment criteria. Students will learn how each exam component, such as multiple choice, analytical essays, or practical experiments, is graded and affects the final score.\nAdditionally, tutors provide technical guidance such as time management per exam section, carefully reading question instructions, and how to avoid common mistakes that often lower scores. This deep understanding helps students feel more prepared and confident when facing the actual exam."
                    },
                    {
                        "title": "SECOND: Mastering Core Subject Knowledge",
                        "content": "In this stage, students strengthen their core concepts in their chosen subjects like Mathematics, Physics, Economics, and others. The learning includes explanations of fundamental theories, application of concepts in problem-solving, and in-depth discussions to ensure a comprehensive understanding.\nTutors adapt teaching methods to the student’s learning style, for example through tiered practice questions, mini-experiments, or real-case analysis. With this approach, students don’t just memorize formulas or definitions, but truly understand the underlying scientific and economic principles."
                    },
                    {
                        "title": "THIRD: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "This stage ensures the entire Cambridge AS Level syllabus is covered thoroughly. The material is mapped into structured modules so that each topic receives an adequate portion of time. Tutors guide students to complete each chapter, provide specific exercises, and highlight topics that frequently appear in exams.\nAdditionally, students enrich their academic vocabulary and technical terminology relevant to each subject. Mastering these terms is very important, as many exam questions rely on a precise understanding of keywords to interpret questions correctly."
                    },
                    {
                        "title": "FOURTH: Timed Practice & Real Exam Simulation",
                        "content": "In this phase, students undergo timed practice that mimics the conditions of the actual exam. The practice is done with identical duration and format, so they become accustomed to time pressure and can manage their work strategy.\nThis simulation is also evaluated comprehensively: tutors provide detailed feedback on speed, accuracy, and answering techniques. The evaluation results are used to improve the study plan and review weak topics, ensuring full readiness before exam day."
                    },
                    {
                        "title": "FIFTH: Advanced Topics and Strategies",
                        "content": "The final stage focuses on advanced topics that often make the difference for high scores. Tutors teach strategies for solving complex problems, combining various concepts across chapters, and writing analytical answers that earn maximum points.\nStudents also practice advanced exam strategies, such as how to strategically choose questions, quickly outline answers, and optimize remaining time for double-checking. With this preparation, students are not only ready to pass, but also have the opportunity to achieve the highest grades on the Cambridge International AS Level exam."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "How much does the AS Level exam cost?",
                    "a": "The cost of the Cambridge International AS Level exam is determined by the Cambridge exam center (Cambridge International School/Test Centre) and can vary in each country/city. The cost usually includes the registration fee per subject (per paper) and the exam center service fee.For an accurate estimate, please check directly with the nearest Cambridge exam center or an official Cambridge partner in Indonesia. Ultimate Education can help direct you to an accredited exam center to get the latest cost details before registration."
                },
                {
                    "q": "Where are AS Level exams held?",
                    "a": "AS Level exams are held at accredited Cambridge International exam centers. In Indonesia, exam centers are generally located in international schools or educational institutions that have met Cambridge’s requirements.You can find the nearest exam center through the Cambridge International website or by consulting with the Ultimate Education team. Make sure to choose an official exam center so your registration, schedule, and certification are internationally recognized."
                },
                {
                    "q": "When is the AS Level exam schedule?",
                    "a": "The Cambridge International exam schedule is generally available twice a year: the May/June session and the October/November session. The registration deadline and detailed schedule for each exam center may vary.For optimal preparation, it is recommended to start studying at least 4–6 months before your chosen exam date. Ultimate Education consultants can help you create a study timeline until the day of the exam."
                },
                {
                    "q": "How long is the AS Level certificate valid for?",
                    "a": "The Cambridge International AS Level certificate does not have an expiration date. However, some universities may request relatively recent results (e.g., within the last 2–3 years) to ensure academic relevance.Check the policies of each of your target universities. If you’re unsure, our team can help check the latest requirements to help you make the right decision."
                },
                {
                    "q": "What are the components/structure of the AS Level exam?",
                    "a": "The structure of the AS Level exam varies by subject, but generally consists of 1–3 written papers. The format may include multiple choice, structured essays, data/graph analysis, and numerical problem-solving.Assessment for AS Level is usually entirely based on the final exam (external assessment). Details on the format, weight, and duration of each paper refer to the official Cambridge syllabus for each subject."
                },
                {
                    "q": "When is the AS Level course schedule at Ultimate Education? How much does it cost?",
                    "a": "Ultimate Education provides flexible AS Level preparation programs: private (one-on-one) and semi-private (small class) if available. The schedule can be adjusted to the student’s needs and the Cambridge exam calendar.For detailed information on the latest schedule and costs, please contact our consultant team:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "What are the benefits of having an AS Level score/certificate?",
                    "a": "Having a strong AS Level score offers several benefits: international recognition by many universities, proof of academic readiness in the chosen field, and a solid foundation if continuing to A2 (full A Level).Additionally, AS Level results can strengthen college applications and help determine initial placement in some degree programs at target universities."
                },
                {
                    "q": "Can you give me an example of the AS Level paper format?",
                    "a": "The format of AS Level papers varies by subject. For example: Mathematics emphasizes numerical problem-solving and short proofs; Economics/Business tests graph analysis and structured essays; Sciences (Physics/Chemistry/Biology) assess the interpretation of experimental data and the application of scientific concepts.In our tutoring, students practice using a representative question bank and Cambridge-style exam simulations, so they become familiar with the question types and official assessment standards."
                },
                {
                    "q": "What media are used in the tutoring process at Ultimate Education?",
                    "a": "To support effective learning, we use a variety of media:Interactive Online Sessions: Zoom/Google Meet with a digital whiteboard, screen-sharing, and collaborative exercises.Face-to-Face Sessions: Based on availability and agreement.Digital Materials: Modules, e-books, question banks, and presentations.Exam Simulations: Timed practice with structured evaluations.Individual Feedback: Detailed reviews of strong/weak areas for quick improvement."
                },
                {
                    "q": "Can I choose my own tutor at Ultimate Education?",
                    "a": "We understand the importance of a good fit between student and tutor. Although we do not provide a feature for selecting a tutor from a public list, we conduct an initial consultation to understand your target grades, learning style, priority areas, and schedule.Based on this information, we match you with the most relevant tutor. Your preferences will be taken into consideration, and we are always open to discussing adjustments if needed."
                }
            ]
        }
    },
    {
        "slug": "lsat",
        "originalSlug": "persiapan-lsat",
        "meta": {
            "title": "LSAT",
            "description": "Raih skor LSAT impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">LSAT</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "LSAT Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Program persiapan LSAT (Law School Admission Test) di Ultimate Education dirancang untuk membantu calon mahasiswa hukum meraih skor terbaik sebagai syarat masuk law school internasional. Dengan dukungan tutor berpengalaman (native speaker & lokal), kurikulum up-to-date sesuai format LSAT terbaru, serta jadwal belajar fleksibel.",
                "Peserta akan mendapatkan bimbingan intensif pada tiga bagian utama LSAT:",
                "• Logical Reasoning – mengasah kemampuan berpikir kritis, menganalisis argumen, dan menarik kesimpulan secara logis.",
                "• Analytical Reasoning (Logic Games) – melatih kemampuan problem solving, pola berpikir deduktif, dan menyelesaikan soal berbasis aturan.",
                "• Reading Comprehension – meningkatkan kecepatan membaca, memahami teks hukum/akademik, serta menjawab pertanyaan dengan akurat.",
                "Selain penguasaan materi, siswa juga akan mendapatkan strategi ujian, latihan soal intensif, hingga mock test untuk memastikan kesiapan menghadapi tes LSAT yang sesungguhnya."
            ]
        },
        "pricing": {
            "LSAT PRIVATE": {
                "title": "LSAT PRIVATE",
                "description": "Program LSAT Private (One-on-One) di Ultimate Education dirancang untuk memberikan pengalaman belajar yang paling personal, intensif, dan efektif. Dalam kelas privat ini, setiap siswa akan mendapatkan bimbingan langsung dari tutor berpengalaman—baik native speaker maupun pengajar lokal profesional—yang memahami secara mendalam format LSAT terbaru dan strategi terbaik untuk menaklukkannya.\nPendekatan 1-on-1 memungkinkan tutor untuk:\n• Menganalisis kebutuhan siswa sejak awal, termasuk kekuatan dan kelemahan di setiap section LSAT: Logical Reasoning, Analytical Reasoning, dan Reading Comprehension.\n• Menyusun rencana belajar tailored, sesuai dengan target skor, kebutuhan aplikasi sekolah hukum, serta durasi persiapan yang tersedia.\n• Memberikan feedback langsung dan detail pada setiap latihan, sehingga siswa dapat memperbaiki cara berpikir, teknik menjawab soal, hingga manajemen waktu dengan cepat dan efektif.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Logical Reasoning",
                        "content": "Tahap ini berfokus pada kemampuan menganalisis dan mengevaluasi argumen. Peserta belajar mengidentifikasi premis, kesimpulan, serta menemukan kelemahan logis dalam teks singkat.\nLatihan intensif diberikan agar siswa mampu menjawab dengan cepat dan akurat, karena bagian ini memiliki bobot terbesar dalam skor LSAT."
                    },
                    {
                        "title": "Analytical Reasoning (Logic Games)",
                        "content": "Peserta dilatih menyelesaikan soal berbasis aturan (games) seperti pengurutan, pengelompokan, dan penempatan. Setiap soal membutuhkan diagram dan strategi inferensi.\nMateri ini membantu siswa mengembangkan keterampilan berpikir analitis, efisiensi, dan ketelitian dalam memecahkan masalah kompleks."
                    },
                    {
                        "title": "Reading Comprehension",
                        "content": "Tahap ini melatih peserta membaca teks panjang dari berbagai bidang (hukum, sosial, sejarah) dengan fokus pada ide utama, detail pendukung, dan struktur argumen.\nStrategi active reading dan manajemen waktu diterapkan untuk meningkatkan kecepatan membaca tanpa kehilangan pemahaman mendalam."
                    },
                    {
                        "title": "Time Management",
                        "content": "Manajemen waktu adalah kunci sukses di LSAT. Pada tahap ini siswa belajar teknik mengalokasikan waktu per soal, mengenali tipe pertanyaan yang membutuhkan prioritas, dan mengurangi kebiasaan terjebak terlalu lama pada satu soal.\nSimulasi bersyarat waktu dilakukan untuk membiasakan diri dengan kondisi ujian nyata."
                    },
                    {
                        "title": "Test Strategies & Review",
                        "content": "Peserta diperkenalkan dengan berbagai strategi pengerjaan LSAT, termasuk cara melakukan eliminasi jawaban, teknik prediksi jawaban, dan membangun stamina ujian.\nSetelah itu dilakukan review mendalam berdasarkan hasil latihan dan simulasi, sehingga setiap kelemahan bisa segera diperbaiki menjelang ujian resmi."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa itu LSAT dan siapa yang harus mengikutinya?",
                    "a": "LSAT (Law School Admission Test) adalah ujian masuk resmi untuk sekolah hukum di Amerika Serikat, Kanada, dan beberapa negara lain. Tes ini wajib bagi calon mahasiswa yang ingin mendaftar ke law school terkemuka."
                },
                {
                    "q": "Bagaimana struktur ujian LSAT?",
                    "a": "LSAT terdiri dari beberapa bagian: Logical Reasoning, Analytical Reasoning (Logic Games), Reading Comprehension, dan Writing Sample. Ujian berlangsung sekitar 3 jam 30 menit."
                },
                {
                    "q": "Bagaimana sistem penilaian LSAT dan rentang skor?",
                    "a": "Skor LSAT berkisar antara 120–180. Rata-rata skor nasional sekitar 150, sedangkan skor di atas 165 sangat kompetitif untuk masuk law school papan atas."
                },
                {
                    "q": "Apa saja bagian utama dalam LSAT?",
                    "a": "Bagian utama LSAT adalah: Logical Reasoning, Analytical Reasoning (Logic Games), Reading Comprehension, dan Writing Sample. Logical Reasoning menyumbang bagian terbesar dari skor."
                },
                {
                    "q": "Berapa kali LSAT diselenggarakan setiap tahun?",
                    "a": "LSAT diadakan beberapa kali setahun, biasanya 7–8 sesi tes resmi. Peserta dapat memilih jadwal sesuai lokasi dan ketersediaan pusat tes."
                },
                {
                    "q": "Apakah Writing Sample memengaruhi skor LSAT?",
                    "a": "Writing Sample tidak dinilai dalam skor 120–180, tetapi tetap dikirim ke law school sebagai bahan pertimbangan dalam proses seleksi."
                },
                {
                    "q": "Apakah bisa mengulang (retake) ujian LSAT?",
                    "a": "Ya, peserta dapat melakukan retake LSAT sesuai jadwal tes berikutnya. Banyak law school akan melihat semua skor, namun biasanya memperhatikan skor tertinggi."
                },
                {
                    "q": "Bagaimana format kelas persiapan LSAT di Ultimate Education?",
                    "a": "Ultimate Education menyediakan kelas persiapan LSAT dalam format Group, Private, dan Online. Kelas mencakup teori, strategi, latihan soal resmi, dan simulasi ujian."
                },
                {
                    "q": "Apa saja yang termasuk dalam program persiapan LSAT?",
                    "a": "Program persiapan LSAT meliputi: Diagnostic Test, Personalized Study Plan, latihan soal Logical Reasoning & Logic Games, Reading Comprehension drills, Writing Sample workshop, serta full mock exam."
                },
                {
                    "q": "Bagaimana cara daftar dan berapa biaya kursus persiapan LSAT di Ultimate Education?",
                    "a": "Untuk informasi lebih lanjut mengenai jadwal, biaya, dan pendaftaran kursus persiapan LSAT di Ultimate Education, silakan hubungi konsultan kami:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                }
            ]
        }
    },
    {
        "slug": "ib",
        "originalSlug": "persiapan-ib",
        "meta": {
            "title": "IB",
            "description": "Raih skor IB impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">IB</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "IB Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "IB Preparation Course di Ultimate Education dirancang untuk membantu siswa meraih hasil terbaik dalam International Baccalaureate (IB) Diploma Programme (DP) maupun IB Middle Years Programme (MYP). Dengan bimbingan tutor berpengalaman (native speaker & lokal), kurikulum up-to-date sesuai standar IB, serta jadwal belajar fleksibel, siswa akan mendapatkan pembelajaran komprehensif yang terarah dan efektif.",
                "Program mencakup berbagai mata pelajaran utama IB, antara lain:",
                "• Mathematics (Analysis & Approaches, Applications & Interpretations)",
                "• Sciences (Physics, Chemistry, Biology, Computer Science)",
                "• Individuals & Societies (Economics, Business Management, Psychology, History)",
                "• Studies in Language & Literature",
                "• Language Acquisition",
                "Selain penguasaan materi, siswa akan dibekali dengan latihan intensif, strategi ujian, serta mock test untuk memastikan kesiapan menghadapi ujian IB dengan percaya diri."
            ]
        },
        "pricing": {
            "IB Private CLASS": {
                "title": "IB Private CLASS",
                "description": "Program IB Private Class (One-on-One) dirancang untuk siswa yang membutuhkan pembelajaran yang lebih personal dan intensif. Tersedia dalam format offline (tatap muka) maupun online, pembelajaran dapat disesuaikan dengan kebutuhan spesifik siswa. Tutor akan menargetkan langsung kelemahan di mata pelajaran tertentu, menyesuaikan dengan level kemampuan dan target skor yang diinginkan, sehingga pembelajaran menjadi lebih efisien, fokus, dan hasilnya optimal.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur kemampuan akademik saat ini, kesiapan untuk program IB, dan mengidentifikasi kekuatan serta area yang memerlukan pengembangan khusus. Tes ini mencakup evaluasi terhadap kemampuan berpikir kritis, keterampilan penelitian, pemahaman konsep lintas disiplin ilmu, serta familiaritas dengan pendekatan pembelajaran IB yang menekankan inquiry-based learning dan international mindedness. Berdasarkan hasil diagnostik, tim akademik Ultimate Education akan menyusun rencana belajar individual yang disesuaikan dengan profil pembelajaran siswa, target skor IB yang realistis, pilihan mata pelajaran Higher Level (HL) dan Standard Level (SL), serta timeline persiapan yang komprehensif termasuk persiapan untuk Internal Assessment (IA), Extended Essay (EE), dan komponen Theory of Knowledge (TOK)."
                    },
                    {
                        "title": "PERTAMA: Understanding IB Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur IB Diploma Programme yang terdiri dari 6 grup mata pelajaran, 3 komponen inti (TOK, CAS, Extended Essay), dan sistem penilaian yang kompleks menggunakan skala 1-7 untuk setiap mata pelajaran. Program ini memberikan penjelasan detail tentang perbedaan antara Higher Level dan Standard Level subjects, persyaratan minimum untuk memperoleh IB Diploma, dan bagaimana Internal Assessment berkontribusi terhadap nilai akhir bersama dengan External Assessment.\nSiswa akan memahami kriteria penilaian IB secara menyeluruh, termasuk Assessment Objectives untuk setiap mata pelajaran, rubrik penilaian yang digunakan oleh IB examiners, command terms yang spesifik untuk IB (analyse, evaluate, discuss, to what extent), serta strategi untuk memaksimalkan perolehan poin dalam setiap komponen penilaian sesuai dengan IB marking schemes yang ketat dan standarisasi global."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan mendalam terhadap konsep-konsep fundamental setiap mata pelajaran IB dengan pendekatan interdisipliner yang mencakup:\n• Matematika: Analysis and Approaches (kalkulus, aljabar kompleks, geometri analitik) atau Applications and Interpretations (statistika terapan, pemodelan matematika, probabilitas)\n• Fisika: Mekanika (kinematika, dinamika, energi), Gelombang (optik, gelombang elektromagnetik), Listrik dan Magnetisme (rangkaian, medan elektromagnetik), Fisika Modern (fisika kuantum, relativitas)\n• Kimia: Struktur Atom dan Ikatan (teori orbital, hibridisasi), Kinetika Kimia (laju reaksi, katalisis), Kesetimbangan Kimia (asam-basa, redoks), Kimia Organik (hidrokarbon, gugus fungsi)\n• Biologi: Biologi Sel dan Molekuler (struktur sel, metabolisme), Genetika (pewarisan sifat, bioteknologi), Evolusi dan Biodiversitas (seleksi alam, klasifikasi), Ekologi (siklus nutrisi, konservasi)\n• Bahasa Inggris Language A: Analisis sastra (tema, gaya bahasa, konteks budaya), Penulisan kreatif (puisi, prosa, drama), Penulisan analitis (esai kritis, refleksi)\n• Bahasa Inggris Language B: Kemampuan komunikatif (berbicara, menulis formal), Pemahaman budaya (teks media, literatur kontemporer), Keterampilan presentasi\n• Ekonomi: Mikroekonomi (elastisitas, struktur pasar), Makroekonomi (kebijakan fiskal dan moneter), Ekonomi Internasional (perdagangan, nilai tukar), Ekonomi Pembangunan\n• Sejarah: Analisis sumber primer dan sekunder, Historiografi (perspektif sejarawan), Studi kasus peristiwa sejarah dunia, Penulisan esai sejarah\n• Geografi: Geografi Fisik (iklim, geomorfologi), Geografi Manusia (urbanisasi, migrasi), Studi lapangan dan analisis data geografis\nSiswa akan mengembangkan kemampuan berpikir kritis tingkat tinggi melalui pendekatan konstruktivis, pembelajaran berbasis penyelidikan, dan pengembangan keterampilan Pendekatan Pembelajaran (ATL) yang mencakup kemampuan berpikir, penelitian, komunikasi, sosial, dan manajemen diri yang esensial untuk sukses dalam program IB."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan IB-Preparation sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian IB. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian A-Level sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "IB Customized Class": {
                "title": "IB Customized Class",
                "description": "Program IB Customized Class sangat cocok untuk siswa dengan waktu terbatas atau kebutuhan belajar spesifik. Dengan pilihan paket fleksibel (dalam kelipatan 3 sesi), siswa dapat fokus pada mata pelajaran tertentu—misalnya hanya Mathematics atau Sciences—sesuai prioritas masing-masing. Kelas ini sepenuhnya personalized, meliputi: Materi yang disesuaikan dengan kebutuhan siswa Jadwal belajar fleksibel Strategi ujian yang terarah untuk meningkatkan skor IB Pendekatan ini menjadikan siswa lebih siap menghadapi IB exams secara efektif dan percaya diri.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur kemampuan akademik saat ini, kesiapan untuk program IB, dan mengidentifikasi kekuatan serta area yang memerlukan pengembangan khusus. Tes ini mencakup evaluasi terhadap kemampuan berpikir kritis, keterampilan penelitian, pemahaman konsep lintas disiplin ilmu, serta familiaritas dengan pendekatan pembelajaran IB yang menekankan inquiry-based learning dan international mindedness. Berdasarkan hasil diagnostik, tim akademik Ultimate Education akan menyusun rencana belajar individual yang disesuaikan dengan profil pembelajaran siswa, target skor IB yang realistis, pilihan mata pelajaran Higher Level (HL) dan Standard Level (SL), serta timeline persiapan yang komprehensif termasuk persiapan untuk Internal Assessment (IA), Extended Essay (EE), dan komponen Theory of Knowledge (TOK)."
                    },
                    {
                        "title": "PERTAMA: Understanding IB Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur IB Diploma Programme yang terdiri dari 6 grup mata pelajaran, 3 komponen inti (TOK, CAS, Extended Essay), dan sistem penilaian yang kompleks menggunakan skala 1-7 untuk setiap mata pelajaran. Program ini memberikan penjelasan detail tentang perbedaan antara Higher Level dan Standard Level subjects, persyaratan minimum untuk memperoleh IB Diploma, dan bagaimana Internal Assessment berkontribusi terhadap nilai akhir bersama dengan External Assessment.\nSiswa akan memahami kriteria penilaian IB secara menyeluruh, termasuk Assessment Objectives untuk setiap mata pelajaran, rubrik penilaian yang digunakan oleh IB examiners, command terms yang spesifik untuk IB (analyse, evaluate, discuss, to what extent), serta strategi untuk memaksimalkan perolehan poin dalam setiap komponen penilaian sesuai dengan IB marking schemes yang ketat dan standarisasi global."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan mendalam terhadap konsep-konsep fundamental setiap mata pelajaran IB dengan pendekatan interdisipliner yang mencakup:\n• Matematika: Analysis and Approaches (kalkulus, aljabar kompleks, geometri analitik) atau Applications and Interpretations (statistika terapan, pemodelan matematika, probabilitas)\n• Fisika: Mekanika (kinematika, dinamika, energi), Gelombang (optik, gelombang elektromagnetik), Listrik dan Magnetisme (rangkaian, medan elektromagnetik), Fisika Modern (fisika kuantum, relativitas)\n• Kimia: Struktur Atom dan Ikatan (teori orbital, hibridisasi), Kinetika Kimia (laju reaksi, katalisis), Kesetimbangan Kimia (asam-basa, redoks), Kimia Organik (hidrokarbon, gugus fungsi)\n• Biologi: Biologi Sel dan Molekuler (struktur sel, metabolisme), Genetika (pewarisan sifat, bioteknologi), Evolusi dan Biodiversitas (seleksi alam, klasifikasi), Ekologi (siklus nutrisi, konservasi)\n• Bahasa Inggris Language A: Analisis sastra (tema, gaya bahasa, konteks budaya), Penulisan kreatif (puisi, prosa, drama), Penulisan analitis (esai kritis, refleksi)\n• Bahasa Inggris Language B: Kemampuan komunikatif (berbicara, menulis formal), Pemahaman budaya (teks media, literatur kontemporer), Keterampilan presentasi\n• Ekonomi: Mikroekonomi (elastisitas, struktur pasar), Makroekonomi (kebijakan fiskal dan moneter), Ekonomi Internasional (perdagangan, nilai tukar), Ekonomi Pembangunan\n• Sejarah: Analisis sumber primer dan sekunder, Historiografi (perspektif sejarawan), Studi kasus peristiwa sejarah dunia, Penulisan esai sejarah\n• Geografi: Geografi Fisik (iklim, geomorfologi), Geografi Manusia (urbanisasi, migrasi), Studi lapangan dan analisis data geografis\nSiswa akan mengembangkan kemampuan berpikir kritis tingkat tinggi melalui pendekatan konstruktivis, pembelajaran berbasis penyelidikan, dan pengembangan keterampilan Pendekatan Pembelajaran (ATL) yang mencakup kemampuan berpikir, penelitian, komunikasi, sosial, dan manajemen diri yang esensial untuk sukses dalam program IB."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan IB-Preparation sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian IB. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian A-Level sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa itu International Baccalaureate (IB) Diploma Programme?",
                    "a": "International Baccalaureate (IB) Diploma Programme adalah program pendidikan global selama 2 tahun untuk siswa usia 16–19 tahun, yang menekankan penguasaan akademik, penelitian, dan pengembangan pribadi. IB diakui oleh lebih dari 5000 universitas di seluruh dunia."
                },
                {
                    "q": "Siapa yang sebaiknya mengambil program IB?",
                    "a": "Program IB cocok untuk siswa yang ingin melanjutkan studi ke luar negeri dengan kurikulum internasional. IB menuntut kedisiplinan tinggi, sehingga sangat sesuai bagi siswa yang ingin mengembangkan keterampilan akademik, riset, dan kepemimpinan global."
                },
                {
                    "q": "Bagaimana struktur program IB (HL, SL, TOK, EE, CAS)?",
                    "a": "IB terdiri dari 6 mata pelajaran yang dipilih (HL & SL) serta tiga komponen inti: TOK (Theory of Knowledge), EE (Extended Essay), dan CAS (Creativity, Activity, Service). Total skor maksimum adalah 45 poin (42 dari mata pelajaran + 3 dari komponen inti)."
                },
                {
                    "q": "Mata pelajaran apa saja yang tersedia di IB?",
                    "a": "Kelompok mata pelajaran IB meliputi: Studies in Language & Literature, Language Acquisition, Individuals & Societies, Sciences, Mathematics, dan The Arts. Siswa memilih minimal satu dari setiap kelompok, dengan opsi mengganti Arts dengan mata pelajaran tambahan lainnya."
                },
                {
                    "q": "Bagaimana sistem penilaian IB dan rentang skor?",
                    "a": "Setiap mata pelajaran dinilai 1–7, dengan skor total maksimal 45 (42 dari 6 pelajaran + 3 dari TOK/EE/CAS). Nilai 24 adalah skor minimum untuk lulus IB Diploma. Nilai tinggi (40+) sangat kompetitif untuk masuk universitas top dunia."
                },
                {
                    "q": "Apakah sertifikat IB berlaku internasional dan berapa lama?",
                    "a": "Sertifikat IB diakui secara internasional dan tidak memiliki masa kedaluwarsa. Namun, beberapa universitas mungkin meminta hasil dalam 2–3 tahun terakhir sebagai bukti kesiapan akademik."
                },
                {
                    "q": "Apakah ada kesempatan mengulang (retake) ujian IB?",
                    "a": "Ya, siswa dapat melakukan retake pada ujian IB di sesi berikutnya. Retake dapat meningkatkan nilai mata pelajaran atau komponen tertentu, sesuai kebijakan IB Organization."
                },
                {
                    "q": "Apa format kelas persiapan IB di Ultimate Education?",
                    "a": "Ultimate Education menyediakan kelas persiapan IB dalam format Group, Private, dan Online. Semua kelas dilengkapi diagnostic test, progress report, serta bimbingan untuk TOK, EE, dan CAS."
                },
                {
                    "q": "Apa saja yang termasuk dalam program persiapan IB (diagnostic, study plan, simulasi)?",
                    "a": "Program persiapan IB mencakup Diagnostic Test, Subject Mapping, latihan soal past papers, mock exam, serta bimbingan untuk Extended Essay, TOK, dan CAS. Semua diarahkan agar siswa siap menghadapi ujian dan persyaratan universitas."
                },
                {
                    "q": "Bagaimana cara daftar dan berapa biaya kursus persiapan IB di Ultimate Education?",
                    "a": "Untuk informasi mengenai jadwal kelas, biaya, dan format program persiapan IB, silakan hubungi tim konsultan kami:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                }
            ]
        }
    },
    {
        "slug": "o-level",
        "originalSlug": "persiapan-o-level",
        "meta": {
            "title": "O-Level",
            "description": "Raih skor OLevel impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">OLevel</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "OLEVEL Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus O Level di Ultimate Education dirancang khusus untuk membantu siswa menghadapi ujian Cambridge O Level dengan percaya diri. Dengan dukungan tutor berpengalaman (native speaker & lokal), kurikulum up-to-date yang relevan, serta jadwal belajar fleksibel, siswa dapat belajar lebih fokus, efektif, dan sesuai kebutuhan akademik.",
                "Program ini mencakup berbagai mata pelajaran inti maupun pilihan, antara lain:",
                "• Mathematics (D-Math, A-Math)",
                "• Science (Physics, Chemistry, Biology)",
                "• English Language & Literature",
                "• Humanities (Economics, Business Studies, Geography, History)",
                "• Accounting & Computer Science",
                "Selain penguasaan materi, siswa juga dibekali dengan strategi menghadapi ujian, latihan intensif, hingga mock test sehingga siap menghadapi tantangan ujian O Level yang sesungguhnya."
            ]
        },
        "pricing": {
            "O-Level Private CLASS": {
                "title": "O-Level Private CLASS",
                "description": "Program O Level Private Class (One-on-One) dirancang untuk siswa yang membutuhkan pembelajaran lebih personal dan intensif. Dengan bimbingan tutor khusus, siswa dapat fokus memperkuat mata pelajaran tertentu yang menjadi prioritas. Materi, latihan soal, dan strategi ujian disusun secara tailored sesuai kebutuhan individu, sehingga pembelajaran menjadi lebih cepat, efisien, dan hasilnya optimal untuk mencapai target ujian O Level.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur kemampuan dasar matematika, sains, dan bahasa Inggris, serta mengidentifikasi gaya belajar dan area yang membutuhkan perhatian khusus.\nTes ini mencakup evaluasi pemahaman konsep fundamental dari mata pelajaran yang akan diambil, kemampuan pemecahan masalah dasar, dan familiaritas dengan format soal Cambridge O-Level. Berdasarkan hasil diagnostik, tim akademik Ultimate Education akan menyusun rencana belajar individual yang disesuaikan dengan kemampuan awal siswa, target nilai yang realistis, dan timeline persiapan ujian, termasuk milestone pembelajaran yang jelas, prioritas materi berdasarkan tingkat kesulitan, dan jadwal belajar yang fleksibel dengan evaluasi berkala untuk memantau kemajuan."
                    },
                    {
                        "title": "PERTAMA: Understanding O-Level Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman komprehensif tentang format ujian Cambridge O-Level untuk setiap mata pelajaran, termasuk struktur paper, jenis pertanyaan yang sering muncul (objektif, terstruktur, esai pendek), alokasi waktu, dan sistem penilaian Cambridge.\nProgram ini memberikan analisis mendalam tentang pola soal dari tahun-tahun sebelumnya, tren perubahan format ujian, dan karakteristik soal O Level yang berbeda dengan tingkat pendidikan sebelumnya. Siswa akan memahami kriteria penilaian Cambridge secara detail, termasuk bagaimana examiner memberikan marks untuk setiap jenis jawaban, interpretasi command words yang tepat (state, explain, calculate, describe), dan teknik menyusun jawaban yang sistematis untuk memperoleh full marks sesuai dengan marking scheme yang digunakan."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan solid terhadap konsep-konsep fundamental setiap mata pelajaran O Level yang mencakup:\n• Mathematics: Algebra (linear equations, quadratic equations), Geometry (properties of shapes, mensuration), Trigonometry (basic ratios, solving triangles), Statistics (data handling, probability)\n• Physics: Mechanics (forces, motion, energy), Waves (light, sound), Electricity (circuits, magnetism), Matter (states, kinetic theory)\n• Chemistry: Atomic structure, Chemical bonding, Acids and bases, Organic chemistry basics, Periodic table trends\n• Biology: Cell biology, Human physiology, Genetics basics, Ecology, Plant biology\n• English Language: Reading comprehension, Creative writing, Grammar and vocabulary, Oral communication skills\n• Other Subjects: Economics (supply and demand), Geography (physical and human), History (world events), Literature (text analysis)\nSiswa akan mengembangkan pemahaman yang kokoh melalui penjelasan step-by-step, contoh aplikasi dalam kehidupan sehari-hari, dan latihan progresif dari tingkat basic hingga intermediate, dengan tutor memastikan setiap konsep dipahami secara menyeluruh sebelum melanjutkan ke topik yang lebih kompleks."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus O-Level sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian O-Level. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian O-Level sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "O-Level Customized Class": {
                "title": "O-Level Customized Class",
                "description": "Program O Level Customized Class merupakan pilihan belajar yang sepenuhnya fleksibel dan personal. Siswa dapat menentukan: Mata pelajaran spesifik yang ingin difokuskan Jadwal belajar fleksibel sesuai kesibukan akademik Latihan soal personal & strategi ujian terarah bersama tutor berpengalaman Kelas ini sangat cocok untuk siswa yang ingin mempersiapkan ujian O Level secara lebih efisien, fokus, dan sesuai target pribadi.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur kemampuan dasar matematika, sains, dan bahasa Inggris, serta mengidentifikasi gaya belajar dan area yang membutuhkan perhatian khusus.\nTes ini mencakup evaluasi pemahaman konsep fundamental dari mata pelajaran yang akan diambil, kemampuan pemecahan masalah dasar, dan familiaritas dengan format soal Cambridge O-Level. Berdasarkan hasil diagnostik, tim akademik Ultimate Education akan menyusun rencana belajar individual yang disesuaikan dengan kemampuan awal siswa, target nilai yang realistis, dan timeline persiapan ujian, termasuk milestone pembelajaran yang jelas, prioritas materi berdasarkan tingkat kesulitan, dan jadwal belajar yang fleksibel dengan evaluasi berkala untuk memantau kemajuan."
                    },
                    {
                        "title": "PERTAMA: Understanding O-Level Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman komprehensif tentang format ujian Cambridge O-Level untuk setiap mata pelajaran, termasuk struktur paper, jenis pertanyaan yang sering muncul (objektif, terstruktur, esai pendek), alokasi waktu, dan sistem penilaian Cambridge.\nProgram ini memberikan analisis mendalam tentang pola soal dari tahun-tahun sebelumnya, tren perubahan format ujian, dan karakteristik soal O Level yang berbeda dengan tingkat pendidikan sebelumnya. Siswa akan memahami kriteria penilaian Cambridge secara detail, termasuk bagaimana examiner memberikan marks untuk setiap jenis jawaban, interpretasi command words yang tepat (state, explain, calculate, describe), dan teknik menyusun jawaban yang sistematis untuk memperoleh full marks sesuai dengan marking scheme yang digunakan."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan solid terhadap konsep-konsep fundamental setiap mata pelajaran O Level yang mencakup:\n• Mathematics: Algebra (linear equations, quadratic equations), Geometry (properties of shapes, mensuration), Trigonometry (basic ratios, solving triangles), Statistics (data handling, probability)\n• Physics: Mechanics (forces, motion, energy), Waves (light, sound), Electricity (circuits, magnetism), Matter (states, kinetic theory)\n• Chemistry: Atomic structure, Chemical bonding, Acids and bases, Organic chemistry basics, Periodic table trends\n• Biology: Cell biology, Human physiology, Genetics basics, Ecology, Plant biology\n• English Language: Reading comprehension, Creative writing, Grammar and vocabulary, Oral communication skills\n• Other Subjects: Economics (supply and demand), Geography (physical and human), History (world events), Literature (text analysis)\nSiswa akan mengembangkan pemahaman yang kokoh melalui penjelasan step-by-step, contoh aplikasi dalam kehidupan sehari-hari, dan latihan progresif dari tingkat basic hingga intermediate, dengan tutor memastikan setiap konsep dipahami secara menyeluruh sebelum melanjutkan ke topik yang lebih kompleks."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus O-Level sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian O-Level. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian O-Level sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa itu O-Level dan siapa yang sebaiknya mengambilnya?",
                    "a": "O-Level (Ordinary Level) adalah kualifikasi internasional setara ujian sekolah menengah atas, diakui global terutama di Inggris, Singapura, dan negara persemakmuran. O-Level biasanya diambil siswa usia 14–16 tahun sebagai fondasi sebelum A-Level atau IB Diploma."
                },
                {
                    "q": "Board apa yang tersedia untuk O-Level (Cambridge/CAIE atau Pearson Edexcel)?",
                    "a": "Ultimate Education mendukung Cambridge O-Level (CAIE) dan Pearson Edexcel International GCSE. Keduanya memiliki pengakuan internasional dan dapat digunakan sebagai syarat melanjutkan ke A-Level atau universitas foundation."
                },
                {
                    "q": "Mata pelajaran apa saja yang bisa dipilih di O-Level?",
                    "a": "Pilihan mata pelajaran O-Level mencakup Mathematics, Additional Mathematics, Physics, Chemistry, Biology, Economics, Business Studies, Accounting, Computer Science, serta English Language dan Literature. Kombinasi dipilih sesuai minat dan target studi lanjutan."
                },
                {
                    "q": "Bagaimana sistem penilaian dan grading O-Level?",
                    "a": "O-Level menggunakan sistem grading A*–E, dengan penilaian berbasis ujian akhir, coursework, atau praktikum (tergantung mata pelajaran). Grade A* adalah tertinggi dan E terendah. Nilai ini menentukan eligibility siswa untuk A-Level atau foundation program."
                },
                {
                    "q": "Kapan jadwal ujian O-Level biasanya diadakan?",
                    "a": "Ujian O-Level biasanya dilaksanakan dua kali setahun, pada sesi May/June dan October/November. Beberapa pusat ujian mungkin menawarkan jadwal tambahan pada January."
                },
                {
                    "q": "Berapa lama sertifikat O-Level berlaku?",
                    "a": "Sertifikat O-Level berlaku tanpa batas waktu. Namun, sebagian sekolah atau universitas mungkin lebih memprioritaskan hasil yang relatif baru (2–3 tahun terakhir) sebagai bukti kemampuan akademik."
                },
                {
                    "q": "Apakah bisa mengulang (retake) ujian O-Level?",
                    "a": "Siswa dapat melakukan retake pada mata pelajaran tertentu di O-Level. Retake ini bertujuan memperbaiki nilai dan meningkatkan peluang diterima di program lanjutan. Hasil terbaik biasanya dipertimbangkan oleh lembaga penerima."
                },
                {
                    "q": "Apa format kelas persiapan O-Level di Ultimate Education?",
                    "a": "Ultimate Education menawarkan format kelas Group (kelas terstruktur), Private (satu-satu dengan tutor), dan Online. Semua dilengkapi progress report, diagnostic test, dan latihan soal past papers untuk memaksimalkan persiapan siswa."
                },
                {
                    "q": "Apa saja yang termasuk dalam program persiapan O-Level (diagnostic, simulasi, study plan)?",
                    "a": "Program persiapan O-Level mencakup Diagnostic Test, Personalized Study Plan, latihan topik per topik, mock exam dengan waktu terbatas, serta review mendetail oleh tutor sesuai rubrik penilaian."
                },
                {
                    "q": "Bagaimana cara daftar dan berapa biaya kursus persiapan O-Level di Ultimate Education?",
                    "a": "Untuk informasi terbaru mengenai jadwal kelas, durasi program, dan biaya kursus persiapan O-Level, silakan hubungi konsultan Ultimate Education:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                }
            ]
        }
    },
    {
        "slug": "a-level",
        "originalSlug": "persiapan-a-level",
        "meta": {
            "title": "A-Level",
            "description": "Raih skor ALevel impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">ALevel</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "ALEVEL Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus A Level di Ultimate Education dirancang untuk membantu siswa mempersiapkan diri menghadapi ujian Cambridge International A Level yang diakui oleh universitas top dunia. Dengan bimbingan tutor berpengalaman (native speaker & lokal), kurikulum up-to-date yang relevan, serta jadwal belajar fleksibel, peserta dapat belajar secara lebih terarah sesuai bidang studi yang dipilih.",
                "Program ini mencakup mata pelajaran utama A Level, seperti:",
                "• Mathematics & Further Mathematics",
                "• Sciences (Physics, Chemistry, Biology)",
                "• Economics, Business, & Accounting",
                "• Psychology & Sociology",
                "• English Literature",
                "Selain itu, peserta akan berlatih soal-soal berbasis kurikulum Cambridge, mempelajari strategi menjawab sesuai format ujian, serta mengikuti mock test untuk mengukur kesiapan sebelum menghadapi ujian resmi."
            ]
        },
        "pricing": {
            "A-Level Private CLASS": {
                "title": "A-Level Private CLASS",
                "description": "Program A Level Private Class (One-on-One) memberikan pembelajaran yang lebih personal, intensif, dan sesuai kebutuhan individu. Tutor akan menargetkan langsung mata pelajaran atau topik tertentu yang perlu ditingkatkan, misalnya fokus pada Mathematics, Physics, atau Economics. Materi pembelajaran disusun secara tailored sesuai dengan level kemampuan dan target akademik siswa, sehingga proses belajar menjadi lebih efisien dan hasilnya optimal untuk meraih nilai terbaik.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat pengetahuan saat ini, gaya belajar, dan area yang membutuhkan fokus khusus. Tes ini mencakup evaluasi terhadap konsep dasar dari setiap mata pelajaran yang akan diambil, kemampuan berpikir analitis, dan keakraban dengan format ujian Cambridge.\nBerdasarkan hasil diagnostik, tim akademik Ultimate Education akan menyusun rencana belajar personal yang disesuaikan dengan target nilai, jadwal ujian, dan kebutuhan individual siswa, termasuk pencapaian pembelajaran, prioritas topik berdasarkan bobot dalam silabus Cambridge, serta jadwal belajar optimal dengan titik evaluasi berkala dan fleksibilitas penyesuaian."
                    },
                    {
                        "title": "PERTAMA: Understanding A-Level Exam Structure & Assessment Criteria",
                        "content": "Siswa akan mendapat pemahaman mendalam tentang format ujian Cambridge A Level untuk setiap mata pelajaran, termasuk jenis pertanyaan (pilihan ganda, terstruktur, esai), alokasi waktu per bagian, distribusi nilai, dan analisis pola soal tahun-tahun sebelumnya.\nProgram ini memberikan wawasan detail tentang kriteria penilaian Cambridge dan skema pemberian nilai, termasuk bagaimana pemeriksa memberikan nilai berdasarkan tujuan penilaian spesifik, interpretasi kata perintah (analisis, evaluasi, diskusi, bandingkan), dan bagaimana menyusun jawaban untuk memaksimalkan nilai sesuai dengan apa yang dicari pemeriksa dalam setiap jenis jawaban."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran dirancang untuk membangun pemahaman konseptual yang kuat melalui penguasaan konsep dan teori fundamental. Setiap mata pelajaran disusun dengan pendekatan strategis agar siswa tidak hanya menghafal, tetapi mampu memahami struktur logis dan prinsip dasar yang menjadi inti dari bidang studi tersebut.\n• Sciences & Matematika Fokus pada prinsip ilmiah, dasar-dasar matematika, serta metode pemecahan masalah seperti manipulasi aljabar dan konsep kalkulus.\n• Humaniora Menekankan pengembangan berpikir kritis, kerangka analitis, dan pemahaman mendalam terhadap tema serta konteks utama.\nDengan metode pembelajaran aktif dan penerapan dalam situasi nyata, siswa diajak untuk menghubungkan antar topik dan lintas bidang secara menyeluruh. Tutor berperan memastikan setiap siswa memahami materi secara mendalam dan mampu menerapkannya dalam berbagai konteks akademik maupun profesional.\nPemahaman ini menjadi fondasi penting sebelum melanjutkan ke aplikasi tingkat lanjut dan strategi khusus untuk menghadapi ujian."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus A-Level sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian A-Level. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian A-Level sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "A-Level Customized Class": {
                "title": "A-Level Customized Class",
                "description": "Program A Level Customized Class sangat cocok untuk siswa yang memiliki waktu terbatas atau fokus pada subjek tertentu. Dengan pilihan paket fleksibel (dalam kelipatan 3 sesi), siswa dapat menyesuaikan pembelajaran—misalnya hanya fokus pada Science atau Business Studies—dengan jadwal belajar yang fleksibel. Kelas ini sepenuhnya personalized, mencakup: Fokus pada mata pelajaran spesifik Jadwal belajar fleksibel Bimbingan intensif dari tutor berpengalaman Pendekatan ini memastikan siswa bisa belajar lebih praktis, terarah, dan sesuai kebutuhan akademik, sekaligus siap menghadapi ujian A Level dengan percaya diri.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat pengetahuan saat ini, gaya belajar, dan area yang membutuhkan fokus khusus. Tes ini mencakup evaluasi terhadap konsep dasar dari setiap mata pelajaran yang akan diambil, kemampuan berpikir analitis, dan keakraban dengan format ujian Cambridge.\nBerdasarkan hasil diagnostik, tim akademik Ultimate Education akan menyusun rencana belajar personal yang disesuaikan dengan target nilai, jadwal ujian, dan kebutuhan individual siswa, termasuk pencapaian pembelajaran, prioritas topik berdasarkan bobot dalam silabus Cambridge, serta jadwal belajar optimal dengan titik evaluasi berkala dan fleksibilitas penyesuaian."
                    },
                    {
                        "title": "PERTAMA: Understanding A-Level Exam Structure & Assessment Criteria",
                        "content": "Siswa akan mendapat pemahaman mendalam tentang format ujian Cambridge A Level untuk setiap mata pelajaran, termasuk jenis pertanyaan (pilihan ganda, terstruktur, esai), alokasi waktu per bagian, distribusi nilai, dan analisis pola soal tahun-tahun sebelumnya.\nProgram ini memberikan wawasan detail tentang kriteria penilaian Cambridge dan skema pemberian nilai, termasuk bagaimana pemeriksa memberikan nilai berdasarkan tujuan penilaian spesifik, interpretasi kata perintah (analisis, evaluasi, diskusi, bandingkan), dan bagaimana menyusun jawaban untuk memaksimalkan nilai sesuai dengan apa yang dicari pemeriksa dalam setiap jenis jawaban."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran dirancang untuk membangun pemahaman konseptual yang kuat melalui penguasaan konsep dan teori fundamental. Setiap mata pelajaran disusun dengan pendekatan strategis agar siswa tidak hanya menghafal, tetapi mampu memahami struktur logis dan prinsip dasar yang menjadi inti dari bidang studi tersebut.\n• Sciences & Matematika Fokus pada prinsip ilmiah, dasar-dasar matematika, serta metode pemecahan masalah seperti manipulasi aljabar dan konsep kalkulus.\n• Humaniora Menekankan pengembangan berpikir kritis, kerangka analitis, dan pemahaman mendalam terhadap tema serta konteks utama.\nDengan metode pembelajaran aktif dan penerapan dalam situasi nyata, siswa diajak untuk menghubungkan antar topik dan lintas bidang secara menyeluruh. Tutor berperan memastikan setiap siswa memahami materi secara mendalam dan mampu menerapkannya dalam berbagai konteks akademik maupun profesional.\nPemahaman ini menjadi fondasi penting sebelum melanjutkan ke aplikasi tingkat lanjut dan strategi khusus untuk menghadapi ujian."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus A-Level sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian A-Level. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian A-Level sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa itu A-Level dan siapa yang sebaiknya mengambilnya?",
                    "a": "A-Level (Advanced Level Qualification) adalah kualifikasi akademik internasional yang diakui luas di Inggris, Singapura, dan negara lainnya. A-Level biasanya diambil oleh siswa usia 16–19 tahun sebagai syarat utama untuk masuk universitas. Program ini cocok untuk siswa yang ingin melanjutkan studi ke luar negeri dan menargetkan universitas bergengsi."
                },
                {
                    "q": "Board apa yang tersedia untuk A-Level (Cambridge/CAIE atau Pearson Edexcel)?",
                    "a": "Ultimate Education mendukung dua board utama A-Level: Cambridge Assessment International Education (CAIE) dan Pearson Edexcel. Keduanya sama-sama diakui secara global, dengan perbedaan kecil pada gaya soal, silabus, dan jadwal ujian."
                },
                {
                    "q": "Mata pelajaran apa saja yang bisa dipilih di A-Level?",
                    "a": "Mata pelajaran populer di A-Level antara lain: Mathematics, Further Mathematics, Physics, Chemistry, Biology, Economics, Business, Computer Science, serta English Language/Literature. Siswa biasanya memilih 3–4 mata pelajaran sesuai target jurusan universitas."
                },
                {
                    "q": "Bagaimana sistem penilaian dan grading A-Level?",
                    "a": "Penilaian A-Level terdiri dari dua tahap: AS Level (tahun pertama) dan A2 Level (tahun kedua). Nilai akhir menggunakan sistem grade A*–E. Beberapa mata pelajaran juga memiliki komponen praktikum atau coursework sesuai ketentuan board."
                },
                {
                    "q": "Kapan jadwal ujian A-Level biasanya diadakan?",
                    "a": "Ujian A-Level biasanya diadakan dua kali setahun, yaitu pada sesi May/June dan October/November. Beberapa pusat ujian juga membuka sesi tambahan pada January untuk mata pelajaran tertentu."
                },
                {
                    "q": "Berapa lama sertifikat A-Level berlaku?",
                    "a": "Sertifikat A-Level pada umumnya berlaku tanpa batas waktu. Namun, beberapa universitas mungkin lebih menyukai hasil yang diperoleh dalam beberapa tahun terakhir untuk memastikan kemampuan akademik siswa masih relevan."
                },
                {
                    "q": "Apakah bisa mengulang (retake) ujian A-Level?",
                    "a": "Ya, siswa dapat melakukan retake pada mata pelajaran tertentu sesuai kebijakan board. Retake membantu memperbaiki grade akhir, dan hasil terbaik biasanya akan dipertimbangkan oleh universitas."
                },
                {
                    "q": "Apa format kelas persiapan A-Level di Ultimate Education?",
                    "a": "Ultimate Education menawarkan format kelas Group (hemat dengan kurikulum terstruktur), Private (personalized learning), dan Online (fleksibel untuk siswa luar kota/luar negeri). Semua dilengkapi diagnostic test, progress report, dan simulasi ujian."
                },
                {
                    "q": "Apa saja yang termasuk dalam program persiapan A-Level (diagnostic, simulasi, study plan)?",
                    "a": "Program persiapan A-Level mencakup Diagnostic Test, Personalized Study Plan, latihan topical, mock exam dengan waktu terbatas, serta evaluasi mendetail berdasarkan rubrik penilaian resmi."
                },
                {
                    "q": "Bagaimana cara daftar dan berapa biaya kursus persiapan A-Level di Ultimate Education?",
                    "a": "Untuk informasi mengenai jadwal kelas, durasi program, dan biaya persiapan A-Level, silakan hubungi tim konsultan Ultimate Education:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                }
            ]
        }
    },
    {
        "slug": "toeic",
        "originalSlug": "persiapan-toeic",
        "meta": {
            "title": "TOEIC",
            "description": "Raih skor TOEIC impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">TOEIC</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "TOEIC Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus TOEIC di Ultimate Education dirancang untuk membantu Anda meraih skor optimal TOEIC dengan bimbingan tutor berpengalaman, baik native speaker maupun pengajar lokal profesional.",
                "Program ini menggunakan kurikulum terbaru yang relevan dengan format TOEIC terkini, berfokus pada penguasaan bahasa Inggris untuk kebutuhan kerja dan profesional.",
                "Peserta akan berlatih intensif pada dua keterampilan utama:",
                "• Listening Comprehension – memahami percakapan, instruksi, dan presentasi dalam konteks bisnis.",
                "• Reading Comprehension – memahami teks, email, laporan, dan dokumen profesional lainnya.",
                "Selain itu, pembelajaran juga dilengkapi dengan strategi pengerjaan soal, vocabulary bisnis, serta mock test untuk memastikan kesiapan menghadapi TOEIC."
            ]
        },
        "pricing": {
            "TOEIC GROUP CLASS": {
                "title": "TOEIC GROUP CLASS",
                "description": "Program TOEIC Group Class menggunakan metode semi privat dengan jumlah peserta terbatas hanya 5–7 siswa per kelas. Suasana belajar yang fokus, interaktif, dan menyenangkan mendukung siswa dalam berlatih melalui diskusi, latihan soal, hingga simulasi tes. Materi pembelajaran mencakup Listening, Reading, serta strategi menghadapi soal-soal bisnis dan workplace communication yang sering muncul di ujian TOEIC. Dengan metode ini, siswa dapat belajar lebih efektif sekaligus membangun rasa percaya diri menghadapi tes.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai kelas intensif, peserta akan menjalani TOEIC Diagnostic Test untuk mengukur kemampuan awal pada dua bagian utama: Listening dan Reading.\nHasil tes ini akan menjadi dasar penyusunan personalized study plan, agar materi yang dipelajari sesuai dengan kebutuhan skor dan tujuan peserta (karier, studi, atau promosi kerja)."
                    },
                    {
                        "title": "PERTAMA: Understand TOEIC Test Format & Section Overview",
                        "content": "Tahap awal akan mengenalkan peserta pada:\n• Struktur resmi TOEIC: Listening Comprehension (100 soal) dan Reading Comprehension (100 soal)\n• Tipe soal dalam setiap part (foto, dialog pendek, bacaan panjang, dll)\n• Penggunaan TOEIC dalam konteks profesional dan akademik\n• Sistem penilaian (skor 10–990)"
                    },
                    {
                        "title": "KEDUA: Mastering Listening and Reading Sections",
                        "content": "Fokus utama adalah pendalaman dua skill utama TOEIC:\n• Listening:– Mengidentifikasi konteks dan suara dalam percakapan– Strategi menebak jawaban dari intonasi dan kata kunci– Latihan mendengarkan percakapan khas bisnis dan kantor\n• Reading:– Skimming & scanning teks cepat– Menjawab pertanyaan berdasarkan email, memo, iklan, dan laporan– Grammar & vocabulary yang sering muncul"
                    },
                    {
                        "title": "STAGE 3: Full TOEIC Syllabus Coverage + Vocabulary Building",
                        "content": "Sesi ini mencakup latihan soal berdasarkan seluruh bagian TOEIC dengan fokus tambahan pada:\n• Penguasaan vocabulary profesional dan formal (business English)\n• Grammar dan bentuk kalimat umum di dunia kerja\n• Teknik menghindari jebakan soal\n• Sesi fokus per bagian (Part 1 hingga Part 7 TOEIC)"
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Test Simulation Techniques",
                        "content": "Peserta akan mulai berlatih dengan:\n• Soal dengan durasi terbatas untuk melatih kecepatan\n• Sesi error review untuk menganalisis kesalahan\n• Strategi menjawab cepat dan akurat\n• Manajemen waktu untuk tiap section"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir adalah simulasi ujian TOEIC full version (2 jam).Peserta juga akan:\n• Mendapat laporan hasil lengkap\n• Diberikan tips & strategi menaikkan skor spesifik\n• Melakukan review soal-soal jebakan\n• Membuat strategi pribadi berdasarkan hasil mock test"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOEIC Private CLass": {
                "title": "TOEIC Private CLass",
                "description": "Program TOEIC Private Class (One-on-One) dirancang untuk pembelajaran yang lebih personal dan intensif. Tersedia dalam format offline (tatap muka) maupun online, tutor akan langsung menargetkan area yang paling perlu ditingkatkan—misalnya detail Listening, teknik skimming Reading, atau vocabulary bisnis. Materi pembelajaran disusun secara tailored, menyesuaikan level kemampuan dan target skor peserta. Dengan pendekatan ini, proses belajar menjadi lebih efisien, fokus, dan tepat sasaran untuk meraih skor TOEIC sesuai kebutuhan kerja maupun standar perusahaan.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai kelas intensif, peserta akan menjalani TOEIC Diagnostic Test untuk mengukur kemampuan awal pada dua bagian utama: Listening dan Reading.\nHasil tes ini akan menjadi dasar penyusunan personalized study plan, agar materi yang dipelajari sesuai dengan kebutuhan skor dan tujuan peserta (karier, studi, atau promosi kerja)."
                    },
                    {
                        "title": "PERTAMA: Understand TOEIC Test Format & Section Overview",
                        "content": "Tahap awal akan mengenalkan peserta pada:\n• Struktur resmi TOEIC: Listening Comprehension (100 soal) dan Reading Comprehension (100 soal)\n• Tipe soal dalam setiap part (foto, dialog pendek, bacaan panjang, dll)\n• Penggunaan TOEIC dalam konteks profesional dan akademik\n• Sistem penilaian (skor 10–990)"
                    },
                    {
                        "title": "KEDUA: Mastering Listening and Reading Sections",
                        "content": "Fokus utama adalah pendalaman dua skill utama TOEIC:\n• Listening:– Mengidentifikasi konteks dan suara dalam percakapan– Strategi menebak jawaban dari intonasi dan kata kunci– Latihan mendengarkan percakapan khas bisnis dan kantor\n• Reading:– Skimming & scanning teks cepat– Menjawab pertanyaan berdasarkan email, memo, iklan, dan laporan– Grammar & vocabulary yang sering muncul"
                    },
                    {
                        "title": "STAGE 3: Full TOEIC Syllabus Coverage + Vocabulary Building",
                        "content": "Sesi ini mencakup latihan soal berdasarkan seluruh bagian TOEIC dengan fokus tambahan pada:\n• Penguasaan vocabulary profesional dan formal (business English)\n• Grammar dan bentuk kalimat umum di dunia kerja\n• Teknik menghindari jebakan soal\n• Sesi fokus per bagian (Part 1 hingga Part 7 TOEIC)"
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Test Simulation Techniques",
                        "content": "Peserta akan mulai berlatih dengan:\n• Soal dengan durasi terbatas untuk melatih kecepatan\n• Sesi error review untuk menganalisis kesalahan\n• Strategi menjawab cepat dan akurat\n• Manajemen waktu untuk tiap section"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir adalah simulasi ujian TOEIC full version (2 jam).Peserta juga akan:\n• Mendapat laporan hasil lengkap\n• Diberikan tips & strategi menaikkan skor spesifik\n• Melakukan review soal-soal jebakan\n• Membuat strategi pribadi berdasarkan hasil mock test"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOEIC Customized Class": {
                "title": "TOEIC Customized Class",
                "description": "Program TOEIC Customized Class cocok untuk peserta dengan waktu terbatas atau kebutuhan spesifik. Dengan pilihan paket fleksibel (dalam kelipatan 3 sesi), siswa dapat fokus pada keterampilan tertentu—misalnya hanya Listening atau hanya Reading—sesuai prioritas individu. Kelas ini sepenuhnya personalized: mulai dari fokus materi sesuai kebutuhan kerja, jadwal belajar yang fleksibel, hingga strategi ujian praktis. Program ini sangat sesuai untuk mahasiswa maupun profesional yang ingin meningkatkan skor TOEIC secara efektif dalam waktu yang singkat.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai kelas intensif, peserta akan menjalani TOEIC Diagnostic Test untuk mengukur kemampuan awal pada dua bagian utama: Listening dan Reading.\nHasil tes ini akan menjadi dasar penyusunan personalized study plan, agar materi yang dipelajari sesuai dengan kebutuhan skor dan tujuan peserta (karier, studi, atau promosi kerja)."
                    },
                    {
                        "title": "PERTAMA: Understand TOEIC Test Format & Section Overview",
                        "content": "Tahap awal akan mengenalkan peserta pada:\n• Struktur resmi TOEIC: Listening Comprehension (100 soal) dan Reading Comprehension (100 soal)\n• Tipe soal dalam setiap part (foto, dialog pendek, bacaan panjang, dll)\n• Penggunaan TOEIC dalam konteks profesional dan akademik\n• Sistem penilaian (skor 10–990)"
                    },
                    {
                        "title": "KEDUA: Mastering Listening and Reading Sections",
                        "content": "Fokus utama adalah pendalaman dua skill utama TOEIC:\n• Listening:– Mengidentifikasi konteks dan suara dalam percakapan– Strategi menebak jawaban dari intonasi dan kata kunci– Latihan mendengarkan percakapan khas bisnis dan kantor\n• Reading:– Skimming & scanning teks cepat– Menjawab pertanyaan berdasarkan email, memo, iklan, dan laporan– Grammar & vocabulary yang sering muncul"
                    },
                    {
                        "title": "STAGE 3: Full TOEIC Syllabus Coverage + Vocabulary Building",
                        "content": "Sesi ini mencakup latihan soal berdasarkan seluruh bagian TOEIC dengan fokus tambahan pada:\n• Penguasaan vocabulary profesional dan formal (business English)\n• Grammar dan bentuk kalimat umum di dunia kerja\n• Teknik menghindari jebakan soal\n• Sesi fokus per bagian (Part 1 hingga Part 7 TOEIC)"
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Test Simulation Techniques",
                        "content": "Peserta akan mulai berlatih dengan:\n• Soal dengan durasi terbatas untuk melatih kecepatan\n• Sesi error review untuk menganalisis kesalahan\n• Strategi menjawab cepat dan akurat\n• Manajemen waktu untuk tiap section"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir adalah simulasi ujian TOEIC full version (2 jam).Peserta juga akan:\n• Mendapat laporan hasil lengkap\n• Diberikan tips & strategi menaikkan skor spesifik\n• Melakukan review soal-soal jebakan\n• Membuat strategi pribadi berdasarkan hasil mock test"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa saja jenis tes TOEIC?",
                    "a": "ETS menawarkan beberapa jenis tes dalam keluarga TOEIC yang dirancang untuk mengukur berbagai aspek kemahiran bahasa Inggris dalam konteks profesional dan sehari-hari:TOEIC® Listening and Reading Test: Ini adalah tes yang paling umum dikenal dan banyak digunakan. Tes ini menggunakan format pilihan ganda dan mengukur kemampuan pemahaman mendengar (listening comprehension) dan pemahaman membaca (reading comprehension) bahasa Inggris yang digunakan dalam situasi kerja internasional. Tes ini menilai seberapa baik seseorang dapat memahami informasi lisan dan tulisan dalam konteks bisnis, seperti rapat, email, memo, laporan, dan percakapan di tempat kerja.TOEIC® Speaking and Writing Tests: Tes ini secara terpisah mengukur kemampuan produktif dalam berbicara (speaking) dan menulis (writing) bahasa Inggris. Tes ini menilai seberapa baik seseorang dapat menyampaikan ide secara lisan, merespons pertanyaan, memberikan presentasi singkat, serta menulis email, esai opini, dan deskripsi dalam konteks profesional.TOEIC Bridge® Test: Tes ini dirancang untuk peserta dengan tingkat kemahiran bahasa Inggris pemula hingga menengah (beginner to intermediate). Fokusnya adalah pada kemampuan dasar dalam pemahaman mendengar dan membaca yang relevan untuk komunikasi sehari-hari dan situasi kerja awal. Tes ini sering digunakan untuk penempatan level kursus atau untuk mengukur kemajuan belajar.Pilihan jenis tes TOEIC tergantung pada tujuan dan kebutuhan spesifik Anda atau organisasi yang memintanya."
                },
                {
                    "q": "Berapa biaya tes TOEIC?",
                    "a": "Biaya tes TOEIC bervariasi tergantung pada beberapa faktor, termasuk jenis tes TOEIC yang Anda ambil (misalnya, TOEIC Listening and Reading Test, TOEIC Speaking and Writing Tests, atau TOEIC Bridge Test), negara tempat Anda mengikuti tes, dan pusat tes resmi yang Anda pilih. Di Indonesia, International Test Center (ITC) adalah perwakilan resmi ETS untuk penyelenggaraan tes TOEIC.Biaya juga bisa berbeda antara tes publik (Public Testing Program) yang jadwalnya ditentukan oleh ITC dan tes institusional (Institutional Testing Program) yang biasanya diselenggarakan oleh perusahaan atau lembaga pendidikan untuk keperluan internal mereka dengan biaya yang mungkin dinegosiasikan secara terpisah.Selain biaya pendaftaran dasar, mungkin ada biaya tambahan untuk layanan seperti penjadwalan ulang, pembatalan, atau permintaan laporan skor tambahan. Untuk mendapatkan informasi biaya yang paling akurat dan terkini untuk tes TOEIC di Indonesia, sangat disarankan untuk mengunjungi situs web resmi ITC Indonesia atau menghubungi mereka secara langsung."
                },
                {
                    "q": "Tes TOEIC di mana?",
                    "a": "Tes TOEIC diselenggarakan oleh pusat-pusat tes resmi yang telah ditunjuk oleh ETS melalui perwakilan lokal mereka, seperti International Test Center (ITC) di Indonesia. Lokasi tes ini tersebar di berbagai kota besar dan beberapa kota lainnya di seluruh Indonesia, seringkali berlokasi di lembaga pendidikan, pusat pelatihan bahasa, atau kantor ITC sendiri.Untuk menemukan daftar lengkap pusat tes resmi TOEIC yang tersedia di dekat lokasi Anda, Anda dapat mengunjungi situs web resmi ITC Indonesia. Mereka biasanya menyediakan fitur pencarian pusat tes atau daftar lokasi tes yang diperbarui secara berkala. Penting untuk mendaftar dan mengikuti tes hanya di pusat tes yang resmi untuk memastikan validitas skor Anda. Untuk tes institusional, lokasi tes biasanya ditentukan oleh organisasi yang menyelenggarakannya."
                },
                {
                    "q": "Kapan jadwal tes TOEIC?",
                    "a": "Jadwal tes TOEIC dapat dibedakan berdasarkan jenis programnya:Public Testing Program (Tes Publik): Untuk tes publik, jadwalnya biasanya telah ditentukan dan tersedia secara reguler setiap bulan di berbagai pusat tes yang ditunjuk oleh ITC Indonesia. Tanggal dan waktu spesifik untuk tes publik dapat ditemukan di situs web resmi ITC Indonesia, dan Anda dapat mendaftar secara online sesuai dengan slot yang tersedia.Institutional Testing Program (Tes Institusional): Untuk tes institusional, jadwalnya tidak dipublikasikan secara umum karena diatur secara khusus oleh perusahaan, universitas, atau lembaga lain yang menyelenggarakan tes tersebut untuk keperluan internal (misalnya, untuk rekrutmen, promosi karyawan, atau kelulusan mahasiswa). Jika Anda mengambil tes TOEIC melalui institusi Anda, mereka akan memberikan informasi mengenai jadwalnya.Sebaiknya periksa situs ITC Indonesia untuk jadwal tes publik terbaru dan lakukan pendaftaran jauh-jauh hari, terutama jika Anda memiliki preferensi tanggal tertentu."
                },
                {
                    "q": "Skor TOEIC valid berapa lama?",
                    "a": "ETS menawarkan beberapa jenis tes dalam keluarga TOEIC yang dirancang untuk mengukur berbagai aspek kemahiran bahasa Inggris dalam konteks profesional dan sehari-hari:TOEIC® Listening and Reading Test: Ini adalah tes yang paling umum dikenal dan banyak digunakan. Tes ini menggunakan format pilihan ganda dan mengukur kemampuan pemahaman mendengar (listening comprehension) dan pemahaman membaca (reading comprehension) bahasa Inggris yang digunakan dalam situasi kerja internasional. Tes ini menilai seberapa baik seseorang dapat memahami informasi lisan dan tulisan dalam konteks bisnis, seperti rapat, email, memo, laporan, dan percakapan di tempat kerja.TOEIC® Speaking and Writing Tests: Tes ini secara terpisah mengukur kemampuan produktif dalam berbicara (speaking) dan menulis (writing) bahasa Inggris. Tes ini menilai seberapa baik seseorang dapat menyampaikan ide secara lisan, merespons pertanyaan, memberikan presentasi singkat, serta menulis email, esai opini, dan deskripsi dalam konteks profesional.TOEIC Bridge® Test: Tes ini dirancang untuk peserta dengan tingkat kemahiran bahasa Inggris pemula hingga menengah (beginner to intermediate). Fokusnya adalah pada kemampuan dasar dalam pemahaman mendengar dan membaca yang relevan untuk komunikasi sehari-hari dan situasi kerja awal. Tes ini sering digunakan untuk penempatan level kursus atau untuk mengukur kemajuan belajar.Pilihan jenis tes TOEIC tergantung pada tujuan dan kebutuhan spesifik Anda atau organisasi yang memintanya."
                },
                {
                    "q": "Jadwal kursus TOEIC di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan TOEIC yang dirancang khusus untuk membantu Anda meningkatkan skor, terutama untuk TOEIC Listening & Reading Test yang paling sering digunakan, serta dapat juga mengakomodasi persiapan untuk Speaking & Writing Tests jika ada permintaan. Kami fokus pada strategi pengerjaan soal yang efektif, pengenalan format tes, dan latihan intensif untuk membiasakan Anda dengan berbagai jenis pertanyaan dan konteks yang sering muncul dalam tes TOEIC.Jadwal kursus kami dapat disesuaikan dengan kebutuhan Anda, baik melalui kelas grup yang terjadwal maupun sesi privat yang lebih fleksibel. Untuk mendapatkan informasi detail mengenai jadwal kelas TOEIC yang tersedia, pilihan program belajar yang kami tawarkan (misalnya, berdasarkan target skor atau durasi), serta rincian biaya kursus yang kompetitif, kami mengundang Anda untuk menghubungi tim konsultan pendidikan kami. Mereka akan memberikan informasi yang Anda butuhkan. Silakan hubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor TOEIC?",
                    "a": "Memiliki skor TOEIC yang baik dapat memberikan sejumlah manfaat signifikan, terutama dalam konteks profesional dan pengembangan karir di lingkungan global:Peluang Kerja yang Lebih Baik: Banyak perusahaan, baik nasional maupun multinasional, menggunakan skor TOEIC sebagai salah satu standar dalam proses rekrutmen untuk posisi yang membutuhkan kemampuan berbahasa Inggris. Skor yang tinggi dapat membuat aplikasi Anda lebih menonjol.Pengembangan Karir dan Promosi: Di beberapa organisasi, skor TOEIC digunakan sebagai salah satu kriteria untuk promosi jabatan, penugasan ke proyek internasional, atau partisipasi dalam program pelatihan di luar negeri.Standar Global untuk Komunikasi Bisnis: TOEIC diakui secara internasional sebagai ukuran yang andal untuk kemampuan bahasa Inggris di tempat kerja. Ini membantu perusahaan mengevaluasi kesiapan karyawan untuk berkomunikasi secara efektif dengan kolega, klien, dan mitra bisnis dari berbagai negara.Persyaratan Akademis atau Pelatihan: Beberapa program pelatihan kejuruan, program diploma, atau bahkan beberapa program universitas (terutama yang berfokus pada vokasi atau bisnis) mungkin menerima atau mensyaratkan skor TOEIC.Pengukuran Kemajuan Belajar: Bagi individu yang sedang belajar bahasa Inggris, tes TOEIC dapat menjadi alat yang berguna untuk mengukur kemajuan mereka secara objektif dan mengidentifikasi area yang perlu ditingkatkan.Meningkatkan Kepercayaan Diri: Mencapai skor TOEIC yang baik dapat meningkatkan kepercayaan diri Anda dalam menggunakan bahasa Inggris di lingkungan profesional."
                },
                {
                    "q": "Bisa kasih contoh soal TOEIC?",
                    "a": "Cara terbaik untuk berkenalan dengan format dan jenis soal TOEIC adalah melalui sumber-sumber resmi yang disediakan oleh ETS atau perwakilan lokalnya seperti ITC Indonesia. Sumber-sumber ini akan memberikan gambaran yang paling akurat tentang apa yang akan Anda hadapi:Situs Resmi ITC Indonesia atau ETS (www.ets.org/toeic): Situs-situs ini seringkali menyediakan contoh soal gratis (sample tests) untuk TOEIC Listening and Reading Test dan terkadang juga untuk Speaking and Writing Tests. Anda juga bisa menemukan buku panduan peserta (examinee handbooks) yang menjelaskan format tes secara detail.Buku Persiapan TOEIC Resmi: ETS dan penerbit terkemuka lainnya merilis buku-buku persiapan resmi TOEIC yang berisi tes latihan penuh, analisis soal, dan strategi pengerjaan. Buku-buku ini sangat direkomendasikan untuk latihan yang mendalam.Aplikasi atau Platform Latihan Online: Ada beberapa platform online atau aplikasi yang menawarkan soal latihan TOEIC, namun pastikan untuk memilih yang memiliki reputasi baik dan menggunakan soal yang berkualitas serta mirip dengan format tes sebenarnya.Program persiapan TOEIC di Ultimate Education akan secara intensif membiasakan Anda dengan berbagai format dan tipe soal yang sering muncul dalam TOEIC Listening and Reading Test, serta memberikan strategi untuk menjawabnya secara efektif dan efisien. Kami menggunakan kombinasi materi dari sumber resmi dan latihan tambahan yang relevan."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Untuk memastikan proses bimbingan TOEIC yang efektif dan nyaman bagi peserta, Ultimate Education memanfaatkan berbagai media pembelajaran:Sesi Online (Daring): Sebagian besar program persiapan TOEIC kami dapat diakses secara online melalui platform konferensi video interaktif seperti Google Meet atau Zoom. Ini memungkinkan sesi tatap muka virtual dengan tutor, diskusi materi, latihan soal bersama, dan simulasi bagian-bagian tes.Sesi Offline (Tatap Muka): Tergantung pada lokasi dan permintaan, kami juga dapat menyelenggarakan sesi bimbingan secara tatap muka di pusat belajar kami atau lokasi yang disepakati.Materi Digital dan Audio: Kami menyediakan modul pembelajaran dalam format digital (PDF), kumpulan soal latihan, rekaman audio untuk latihan Listening Comprehension yang ekstensif, dan presentasi materi.Platform Latihan Interaktif: Kami mungkin menggunakan platform e-learning atau perangkat lunak khusus yang menyediakan soal-soal latihan TOEIC dan simulasi tes untuk membantu Anda berlatih secara mandiri dan melacak kemajuan Anda.Grup Diskusi Online: Untuk kelas grup, kami dapat membuat grup diskusi online (misalnya melalui WhatsApp atau platform lain) untuk memfasilitasi komunikasi dan tanya jawab di luar jam pelajaran."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami berkomitmen untuk menyediakan pengalaman belajar TOEIC yang berkualitas tinggi dengan menugaskan tutor yang paling sesuai dengan kebutuhan Anda. Meskipun sistem kami saat ini tidak secara langsung memungkinkan siswa untuk memilih tutor spesifik dari daftar nama, kami memiliki proses yang cermat dalam mencocokkan Anda dengan tutor yang tepat.Tim tutor TOEIC kami adalah para pengajar yang berpengalaman, memahami format tes TOEIC secara mendalam, dan memiliki strategi pengajaran yang efektif. Saat Anda mendaftar, kami akan mempertimbangkan level kemahiran bahasa Inggris Anda saat ini, target skor TOEIC Anda, dan preferensi jadwal Anda. Berdasarkan informasi ini, kami akan menugaskan seorang tutor yang kami yakini memiliki keahlian dan pendekatan yang paling cocok untuk membantu Anda berhasil dalam persiapan TOEIC Anda. Kami selalu berusaha memastikan bahwa Anda mendapatkan bimbingan terbaik."
                }
            ]
        }
    },
    {
        "slug": "business-english",
        "originalSlug": "business-english-2",
        "meta": {
            "title": "Business English",
            "description": "Raih skor Business English impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">Business English</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "BUSINESS ENGLISH Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus Business English di Ultimate Education ditujukan khusus bagi profesional, eksekutif, maupun mahasiswa yang ingin mempersiapkan diri menghadapi tuntutan komunikasi bisnis dalam skala global.",
                "Program ini mencakup keterampilan penting dalam dunia kerja, antara lain:",
                "• Business Correspondence (Email, Report Writing)",
                "• Meetings & Negotiations",
                "• Presentations & Public Speaking",
                "• Professional Networking & Socializing",
                "Dengan latihan praktis, role play, studi kasus, dan simulasi dunia kerja nyata, peserta akan lebih percaya diri, fasih, dan profesional dalam menggunakan bahasa Inggris di lingkungan kerja internasional."
            ]
        },
        "pricing": {
            "Business English private class": {
                "title": "Business English private class",
                "description": "Bagi peserta yang membutuhkan pembelajaran intensif dan personal, Business English Private 1-on-1 adalah pilihan terbaik. Dalam kelas ini, tutor akan menyesuaikan materi, latihan, dan strategi sesuai kebutuhan peserta, misalnya:\n• Fokus pada email writing untuk komunikasi kerja sehari-hari.\n• Latihan public speaking & presentation skills untuk meeting atau pitching.\n• Peningkatan vocabulary bisnis & workplace communication.\n• Strategi negosiasi & diplomasi dalam bahasa Inggris.\nCocok untuk profesional muda, karyawan, eksekutif, maupun mahasiswa yang ingin lebih percaya diri berkomunikasi secara profesional di dunia kerja global.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai kelas intensif, peserta akan menjalani Diagnostic Test untuk mengukur kemampuan awal pada dua bagian utama: Listening dan Reading.\nHasil tes ini akan menjadi dasar penyusunan personalized study plan, agar materi yang dipelajari sesuai dengan kebutuhan skor dan tujuan peserta (karier, studi, atau promosi kerja)."
                    },
                    {
                        "title": "PERTAMA: Understanding Business English Exam Structure & Assessment Criteria",
                        "content": "Pada tahap ini, peserta akan diperkenalkan dengan format ujian Business English secara menyeluruh, termasuk jenis soal, bobot penilaian, serta cara penguji memberikan skor. Pemahaman awal ini penting agar siswa tidak hanya menguasai materi, tetapi juga terbiasa dengan standar dan ekspektasi lembaga internasional seperti Cambridge International dan Pearson Edexcel. Selain itu, siswa akan dibimbing untuk memahami perbedaan antara ujian A-Level dan sistem ujian lainnya. Dengan bekal ini, peserta mampu merancang strategi belajar sejak dini dan menghindari kesalahan mendasar yang sering muncul akibat kurang mengenal struktur ujian."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Fokus utama adalah pendalaman dua skill utama Business English:\n• Listening:– Mengidentifikasi konteks dan suara dalam percakapan– Strategi menebak jawaban dari intonasi dan kata kunci– Latihan mendengarkan percakapan khas bisnis dan kantor\n• Reading:– Skimming & scanning teks cepat– Menjawab pertanyaan berdasarkan email, memo, iklan, dan laporan– Grammar & vocabulary yang sering muncul"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus Business English sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing. Selain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics & Transition to Higher Studies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian Business English. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian Business English sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "English for business": {
                "title": "English for business",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": [
                {
                    "name": "Melati Sulistyaningrum",
                    "program": "English for Business",
                    "quote": "Kelas dengan Mr. Ardianus berjalan baik dan menyenangkan. Beliau menyampaikan materi dengan jelas, interaktif, dan selalu memberikan feedback yang efektif. Menurut saya, akan lebih menarik lagi kalau bisa memanfaatkan teknologi dengan integrasi alat bantu digital seperti presentasi, video, atau aplikasi pembelajaran online. Itu pasti akan semakin memperkaya materi dan bikin kelas makin engaging."
                }
            ]
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya kursus Business English di Ultimate Education?",
                    "a": "Biaya kursus Business English di Ultimate Education dirancang agar kompetitif dan disesuaikan dengan kebutuhan spesifik para profesional atau perusahaan. Beberapa faktor yang mempengaruhi struktur biaya meliputi:Durasi Program dan Jumlah Sesi: Apakah Anda membutuhkan program singkat untuk fokus pada keterampilan tertentu (misalnya, persiapan presentasi) atau program yang lebih komprehensif untuk peningkatan kemampuan Business English secara menyeluruh.Materi Spesifik yang Dicakup: Kursus dapat disesuaikan untuk fokus pada area tertentu seperti Bahasa Inggris untuk negosiasi, penulisan laporan bisnis, korespondensi email profesional, partisipasi dalam rapat internasional, atau Bahasa Inggris untuk industri spesifik (misalnya, keuangan, pemasaran, teknologi). Tingkat kustomisasi ini dapat mempengaruhi biaya.Jenis Kelas (Grup atau Privat/Korporat): Kami menawarkan sesi privat yang sangat personal, sesi kelompok kecil untuk karyawan dari satu perusahaan (pelatihan korporat), atau kelas grup umum (jika tersedia). Masing-masing memiliki struktur biaya yang berbeda. Sesi privat dan pelatihan korporat yang disesuaikan biasanya memiliki investasi yang lebih tinggi per jamnya.Level Peserta dan Intensitas Program: Tingkat kemahiran awal peserta dan seberapa intensif program yang diinginkan juga akan menjadi pertimbangan.Untuk mendapatkan konsultasi mengenai kebutuhan Business English Anda atau tim Anda, serta penawaran biaya yang transparan dan disesuaikan, kami mengundang Anda untuk menghubungi tim konsultan pendidikan kami."
                },
                {
                    "q": "Kursus Business English di Ultimate Education lokasinya di mana?",
                    "a": "Ultimate Education menawarkan fleksibilitas lokasi untuk kursus Business English guna mengakomodasi kebutuhan para profesional dan perusahaan yang sibuk:Kursus Online (Daring): Sebagian besar program Business English kami dapat diakses sepenuhnya secara online. Ini memungkinkan partisipasi dari berbagai lokasi geografis, baik individu dari kantor atau rumah mereka, maupun tim yang tersebar di berbagai cabang. Sesi online dilakukan secara interaktif melalui platform konferensi video.Pelatihan Korporat di Tempat (In-Company Training): Untuk klien perusahaan, kami dapat menyelenggarakan sesi pelatihan Business English langsung di lokasi kantor Anda (in-house training). Ini memberikan kenyamanan dan memungkinkan materi disesuaikan lebih lanjut dengan konteks spesifik perusahaan Anda. Ketersediaan layanan ini tergantung pada lokasi dan kesepakatan.Kursus Offline (Tatap Muka) di Pusat Kami: Tergantung pada ketersediaan, kami juga mungkin menawarkan sesi tatap muka di pusat belajar Ultimate Education (jika ada di kota Anda) untuk individu atau kelompok kecil.Silakan diskusikan preferensi lokasi Anda dengan tim kami untuk menemukan solusi yang paling efektif."
                },
                {
                    "q": "Kapan jadwal kursus Business English di Ultimate Education?",
                    "a": "Jadwal kursus Business English di Ultimate Education dirancang dengan mempertimbangkan kesibukan para profesional dan kebutuhan perusahaan. Oleh karena itu, kami menawarkan tingkat fleksibilitas yang tinggi:Kelas Privat dan Pelatihan Korporat: Untuk sesi privat individu atau pelatihan yang dirancang khusus untuk perusahaan, jadwalnya sangat fleksibel dan dapat disesuaikan sepenuhnya berdasarkan kesepakatan antara peserta/perusahaan dan tutor. Ini bisa berarti sesi di pagi hari sebelum jam kerja, saat istirahat makan siang, sore hari setelah jam kerja, atau bahkan pada akhir pekan.Kelas Grup Umum (jika tersedia): Jika kami menawarkan kelas grup Business English untuk umum, jadwalnya akan ditentukan sebelumnya, namun kami akan berusaha menyediakan beberapa opsi waktu yang populer di kalangan profesional.Kami sangat menyarankan Anda untuk mendiskusikan kebutuhan jadwal spesifik Anda atau tim Anda dengan konsultan pendidikan kami. Kami akan bekerja sama dengan Anda untuk merancang jadwal yang paling minim gangguan terhadap rutinitas kerja dan paling efektif untuk mencapai tujuan pembelajaran."
                },
                {
                    "q": "Apakah kemampuan dari kursus Business English memiliki masa berlaku?",
                    "a": "Serupa dengan kursus General English, kemampuan dan pengetahuan yang Anda peroleh dari kursus Business English tidak memiliki “tanggal kedaluwarsa” atau masa berlaku formal seperti skor tes standar. Keterampilan berbahasa Inggris untuk keperluan bisnis yang Anda kembangkan, seperti kemampuan bernegosiasi, melakukan presentasi, menulis email profesional, atau berpartisipasi dalam rapat internasional, adalah aset yang berkelanjutan.Namun, agar keterampilan ini tetap tajam dan relevan, sangat penting untuk terus menggunakannya secara aktif dalam lingkungan kerja Anda. Semakin sering Anda mempraktikkan Business English dalam situasi nyata, semakin kuat dan berkembang kemampuan Anda. Jika penggunaan aktif berkurang, beberapa aspek seperti kelancaran atau kosakata spesifik mungkin memerlukan penyegaran.Kursus Business English dari Ultimate Education bertujuan untuk membekali Anda dengan fondasi dan alat yang kuat sehingga Anda dapat terus mengembangkan kemahiran Anda secara mandiri bahkan setelah kursus selesai. Manfaatnya akan bertahan selama Anda terus menerapkan dan mengasah apa yang telah dipelajari."
                },
                {
                    "q": "Apa saja yang dipelajari dalam kursus Business English?",
                    "a": "Kursus Business English di Ultimate Education bertujuan untuk meningkatkan kemampuan Anda menggunakan bahasa Inggris secara efektif dan profesional dalam berbagai konteks bisnis dan pekerjaan. Materi kursus disesuaikan dengan kebutuhan peserta, namun secara umum mencakup topik-topik berikut:Komunikasi Lisan Profesional:Bahasa Inggris untuk rapat (meetings): memimpin rapat, berpartisipasi aktif, menyampaikan pendapat, bertanya, menyetujui dan tidak menyetujui secara sopan.Bahasa Inggris untuk presentasi (presentations): struktur presentasi, teknik penyampaian yang efektif, penggunaan visual, menjawab pertanyaan.Bahasa Inggris untuk negosiasi (negotiations): strategi negosiasi, bahasa persuasif, mencapai kesepakatan.Telephoning dan konferensi video: etiket telepon, membuat janji, menangani keluhan.Networking dan sosialisasi dalam konteks bisnis.Komunikasi Tulisan Profesional:Penulisan email bisnis yang efektif: format, gaya bahasa, kejelasan, nada yang sesuai.Penulisan laporan (reports), proposal, dan memo.Korespondensi bisnis formal dan informal lainnya.Kosakata dan Idiom Bisnis: Pengembangan kosakata spesifik yang relevan dengan dunia kerja, industri tertentu (jika diperlukan), serta pemahaman idiom dan ungkapan umum dalam bisnis.Pemahaman Lintas Budaya dalam Bisnis: Kesadaran akan perbedaan budaya dalam komunikasi bisnis internasional dan cara berinteraksi secara efektif dengan kolega atau klien dari berbagai latar belakang budaya.Keterampilan Khusus Industri: Jika diperlukan, kursus dapat difokuskan pada terminologi dan skenario komunikasi yang spesifik untuk industri tertentu (misalnya, keuangan, pemasaran, teknologi, perhotelan).Kami menggunakan studi kasus, simulasi, permainan peran, dan materi otentik dari dunia bisnis untuk membuat pembelajaran menjadi praktis dan relevan."
                },
                {
                    "q": "Jadwal kursus Business English di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program Business English yang dirancang khusus untuk para profesional dan perusahaan yang ingin meningkatkan kemahiran berbahasa Inggris dalam konteks kerja. Kami menyediakan pilihan jadwal yang sangat fleksibel, terutama untuk kelas privat individu dan program pelatihan korporat yang dapat disesuaikan sepenuhnya dengan jam kerja dan kebutuhan spesifik perusahaan Anda. Sesi dapat diatur di pagi hari, siang hari, sore hari, atau bahkan akhir pekan, tergantung kesepakatan.Biaya kursus Business English akan bervariasi tergantung pada durasi program, jumlah peserta (untuk pelatihan korporat), tingkat kustomisasi materi, dan frekuensi sesi. Untuk mendapatkan informasi terkini dan paling akurat mengenai opsi jadwal, desain program yang dapat kami tawarkan untuk kebutuhan spesifik Anda atau tim Anda, serta rincian investasi biaya kursus, kami sangat merekomendasikan Anda untuk menghubungi tim konsultan pendidikan kami. Mereka siap memberikan proposal yang disesuaikan. Anda dapat menghubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat mengikuti kursus Business English?",
                    "a": "Mengikuti kursus Business English di Ultimate Education dapat memberikan sejumlah manfaat strategis yang signifikan bagi pengembangan karir individu dan produktivitas perusahaan:Peningkatan Efektivitas Komunikasi di Tempat Kerja Global: Anda akan belajar berkomunikasi dengan lebih jelas, percaya diri, dan profesional dalam bahasa Inggris saat berinteraksi dengan kolega, atasan, klien, dan mitra bisnis internasional. Ini mengurangi kesalahpahaman dan meningkatkan efisiensi.Perluasan Peluang Karir Internasional: Kemahiran Business English yang kuat adalah aset yang sangat dicari di pasar kerja global. Kursus ini dapat membuka pintu untuk peluang kerja di perusahaan multinasional, penugasan di luar negeri, atau peran yang melibatkan interaksi internasional.Peningkatan Kinerja dalam Tugas Bisnis Spesifik: Anda akan lebih terampil dalam melakukan presentasi yang meyakinkan, memimpin atau berpartisipasi dalam rapat internasional secara efektif, bernegosiasi dengan sukses, dan menulis korespondensi bisnis yang profesional.Pemahaman Etiket Bisnis Internasional: Kursus ini seringkali mencakup aspek komunikasi lintas budaya, membantu Anda memahami dan beradaptasi dengan etiket bisnis yang berbeda di berbagai negara, sehingga membangun hubungan kerja yang lebih baik.Meningkatkan Citra Profesional dan Perusahaan: Kemampuan berkomunikasi dalam Business English yang baik mencerminkan profesionalisme individu dan dapat meningkatkan citra perusahaan di mata mitra bisnis internasional.Akses ke Jaringan dan Sumber Daya Global: Dengan kemampuan bahasa Inggris bisnis yang lebih baik, Anda dapat lebih mudah mengakses informasi, tren industri global, dan membangun jaringan profesional internasional."
                },
                {
                    "q": "Bisa kasih contoh materi kursus Business English?",
                    "a": "Materi kursus Business English di Ultimate Education dirancang agar praktis, relevan, dan langsung dapat diterapkan dalam situasi kerja nyata. Kami menggunakan berbagai sumber dan aktivitas, yang disesuaikan dengan kebutuhan peserta. Berikut beberapa contohnya:Studi Kasus Bisnis (Business Case Studies): Menganalisis skenario bisnis nyata atau hipotetis untuk didiskusikan, dianalisis masalahnya, dan diusulkan solusinya dalam bahasa Inggris.Simulasi dan Permainan Peran (Simulations and Role-Playing):Simulasi rapat: peserta memainkan peran yang berbeda (pemimpin rapat, peserta) dan berlatih menyampaikan pendapat, bertanya, atau menyetujui/tidak menyetujui.Simulasi negosiasi: berlatih teknik negosiasi dan bahasa persuasif.Simulasi presentasi: peserta menyiapkan dan menyampaikan presentasi singkat, diikuti dengan sesi tanya jawab dan umpan balik.Analisis dan Penulisan Dokumen Bisnis:Contoh email bisnis (permintaan, keluhan, penawaran) untuk dianalisis format, gaya bahasa, dan efektivitasnya, lalu berlatih menulis email serupa.Contoh laporan singkat, memo, atau proposal untuk dipelajari strukturnya.Artikel dan Publikasi Bisnis Otentik: Membaca dan mendiskusikan artikel dari sumber berita bisnis terkemuka (seperti The Wall Street Journal, Harvard Business Review, The Economist) untuk memperluas kosakata dan pemahaman isu bisnis terkini.Latihan Mendengarkan Konteks Bisnis: Mendengarkan rekaman percakapan telepon, kutipan dari rapat, atau presentasi bisnis untuk melatih pemahaman mendengar dalam konteks profesional.Fokus pada Kosakata dan Idiom Bisnis: Latihan khusus untuk menguasai terminologi kunci dalam manajemen, pemasaran, keuangan, serta idiom dan frasa umum yang digunakan dalam dunia bisnis.Tutor kami di Ultimate Education akan menyesuaikan materi dengan industri atau fungsi kerja spesifik peserta jika diperlukan, untuk memastikan relevansi maksimal."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Dalam kursus Business English di Ultimate Education, kami menggunakan berbagai media dan teknologi untuk menciptakan pengalaman belajar yang interaktif, relevan, dan efektif bagi para profesional:Platform Konferensi Video (untuk sesi online/pelatihan korporat jarak jauh): Sesi interaktif dilakukan melalui Google Meet, Zoom, Microsoft Teams, atau platform pilihan lainnya, yang memungkinkan tatap muka virtual, diskusi kelompok, berbagi layar untuk presentasi dan analisis dokumen, serta fitur papan tulis digital.Materi Digital yang Disesuaikan: Kami mengembangkan dan menggunakan modul pembelajaran digital (PDF, presentasi PowerPoint/Google Slides), e-book, dan kumpulan studi kasus yang relevan dengan tujuan pembelajaran Business English.Sumber Materi Otentik: Kami sering mengintegrasikan materi otentik dari dunia bisnis, seperti artikel berita bisnis, laporan industri, video presentasi dari para pemimpin bisnis, dan contoh korespondensi bisnis nyata (yang dianonimkan).Platform Kolaborasi Online: Untuk tugas kelompok atau berbagi dokumen, kami mungkin menggunakan Google Workspace, Microsoft 365, atau platform kolaborasi lainnya.Video dan Audio Pembelajaran: Klip video dari rapat, negosiasi, atau presentasi model, serta rekaman audio untuk latihan mendengarkan aksen dan jargon bisnis.Perangkat Lunak atau Aplikasi Pendukung (jika relevan): Terkadang kami merekomendasikan atau menggunakan aplikasi tertentu untuk latihan kosakata atau aspek lain dari Business English.Sesi Tatap Muka (untuk pelatihan korporat di tempat atau sesi privat offline): Menggunakan papan tulis, proyektor, dan materi cetak tradisional sebagai pelengkap media digital."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat memahami bahwa kualitas dan kecocokan tutor adalah faktor krusial dalam keberhasilan program Business English, terutama karena seringkali melibatkan kebutuhan yang sangat spesifik dari individu profesional atau perusahaan.Meskipun kami tidak memiliki sistem di mana klien dapat secara langsung memilih tutor dari sebuah katalog publik, kami menerapkan proses konsultasi dan pencocokan yang sangat mendalam. Ketika Anda atau perusahaan Anda menghubungi kami untuk program Business English, kami akan:Melakukan analisis kebutuhan yang komprehensif (needs analysis) untuk memahami tujuan spesifik Anda, industri Anda, fungsi pekerjaan peserta, area keterampilan yang ingin ditingkatkan (misalnya, presentasi, negosiasi, penulisan), level kemahiran saat ini, dan preferensi jadwal.Berdasarkan analisis ini, kami akan merekomendasikan dan menugaskan tutor dari tim kami yang memiliki keahlian, pengalaman industri yang relevan (jika memungkinkan), dan pendekatan mengajar yang paling sesuai dengan profil dan kebutuhan Anda atau tim Anda.Tim tutor Business English kami terdiri dari para profesional berpengalaman, banyak di antaranya memiliki latar belakang korporat selain kualifikasi mengajar bahasa Inggris. Kami selalu berusaha untuk memastikan bahwa Anda mendapatkan bimbingan dari tutor yang tidak hanya ahli dalam bahasa Inggris bisnis tetapi juga dapat memahami konteks profesional Anda. Jika Anda memiliki preferensi atau informasi tertentu yang dapat membantu kami dalam proses pencocokan, kami sangat terbuka untuk mendiskusikannya."
                }
            ]
        }
    },
    {
        "slug": "general-english",
        "originalSlug": "generalenglish",
        "meta": {
            "title": "General English",
            "description": "Raih skor General English impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">General English</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "GENERAL ENGLISH Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus General English di Ultimate Education dirancang untuk membantu Anda meningkatkan kemampuan bahasa Inggris sehari-hari secara menyeluruh. Program ini mencakup empat keterampilan utama: Speaking, Listening, Reading, dan Writing, sehingga peserta dapat lebih percaya diri dalam berkomunikasi, baik di lingkungan akademik, profesional, maupun kehidupan sehari-hari.",
                "Dengan metode interaktif, latihan percakapan, diskusi, serta praktik nyata, peserta akan memperluas kosakata, memperbaiki tata bahasa, dan meningkatkan kefasihan berbahasa Inggris secara bertahap. Kursus ini cocok untuk pelajar, mahasiswa, maupun profesional yang ingin menguasai komunikasi bahasa Inggris lebih baik."
            ]
        },
        "pricing": {
            "General English Private Class": {
                "title": "General English Private Class",
                "description": "Bagi peserta yang menginginkan pembelajaran lebih personal dan intensif, General English Private 1-on-1 adalah pilihan terbaik. Melalui pendekatan tailored learning, tutor akan menyesuaikan materi, latihan, dan strategi pembelajaran dengan kebutuhan individu, seperti:\n• Fokus pada percakapan sehari-hari (casual speaking).\n• Peningkatan kemampuan mendengar (listening) dalam percakapan natural.\n• Latihan menulis (writing) untuk email, laporan, maupun esai.\n• Penguasaan membaca (reading) teks akademik maupun umum.\nProgram ini sangat cocok untuk pelajar, mahasiswa, hingga profesional muda yang ingin lebih percaya diri menggunakan bahasa Inggris di sekolah, kampus, tempat kerja, atau dalam interaksi sehari-hari.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai kelas intensif, peserta akan menjalani Diagnostic Test untuk mengukur kemampuan awal pada dua bagian utama: Listening dan Reading.Hasil tes ini akan menjadi dasar penyusunan personalized study plan, agar materi yang dipelajari sesuai dengan kebutuhan skor dan tujuan peserta (karier, studi, atau promosi kerja)."
                    },
                    {
                        "title": "PERTAMA: Understanding Exam Structure & Assessment Criteria",
                        "content": "Pada tahap ini, peserta akan diperkenalkan dengan format ujian General English secara menyeluruh, termasuk jenis soal, bobot penilaian, serta cara penguji memberikan skor. Pemahaman awal ini penting agar siswa tidak hanya menguasai materi, tetapi juga terbiasa dengan standar dan ekspektasi lembaga internasional seperti Cambridge International dan Pearson Edexcel.\nSelain itu, siswa akan dibimbing untuk memahami perbedaan antara ujian A-Level dan sistem ujian lainnya. Dengan bekal ini, peserta mampu merancang strategi belajar sejak dini dan menghindari kesalahan mendasar yang sering muncul akibat kurang mengenal struktur ujian."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Fokus utama adalah pendalaman dua skill utama General English:\n• Listening:– Mengidentifikasi konteks dan suara dalam percakapan– Strategi menebak jawaban dari intonasi dan kata kunci– Latihan mendengarkan percakapan khas bisnis dan kantor\n• Reading:– Skimming & scanning teks cepat– Menjawab pertanyaan berdasarkan email, memo, iklan, dan laporan– Grammar & vocabulary yang sering muncul"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus General English sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics & Transition to Higher Studies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian General English. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian General English sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya kursus General English di Ultimate Education?",
                    "a": "Biaya kursus General English di Ultimate Education bervariasi tergantung pada beberapa faktor yang dirancang untuk mengakomodasi kebutuhan dan preferensi belajar yang beragam. Faktor-faktor ini meliputi:Level Kursus: Kami menawarkan kursus untuk berbagai level kemahiran, mulai dari pemula (beginner) hingga mahir (advanced). Biaya mungkin sedikit berbeda antar level karena kompleksitas materi dan durasi yang mungkin dibutuhkan.Durasi Program dan Jumlah Sesi: Anda dapat memilih durasi program yang sesuai, apakah itu program jangka pendek untuk kebutuhan spesifik atau program jangka panjang untuk peningkatan yang lebih komprehensif. Jumlah total sesi akan mempengaruhi biaya keseluruhan.Jenis Kelas (Grup atau Privat): Kami menawarkan kelas grup kecil yang lebih ekonomis dan memungkinkan interaksi dengan siswa lain, serta kelas privat yang memberikan perhatian penuh dari tutor dan fleksibilitas materi yang lebih besar. Kelas privat biasanya memiliki biaya per sesi yang lebih tinggi.Intensitas Kursus: Beberapa siswa mungkin memilih program intensif dengan frekuensi pertemuan yang lebih sering, yang juga dapat mempengaruhi struktur biaya.Untuk mendapatkan informasi biaya yang akurat dan penawaran yang disesuaikan dengan kebutuhan spesifik Anda, kami sangat menyarankan untuk menghubungi tim konsultan pendidikan kami. Mereka akan dengan senang hati memberikan rincian, membahas opsi yang tersedia, dan membantu Anda memilih paket yang paling sesuai dengan anggaran dan tujuan belajar Anda."
                },
                {
                    "q": "Kursus General English di Ultimate Education lokasinya di mana?",
                    "a": "Ultimate Education berupaya memberikan aksesibilitas dan kenyamanan maksimal bagi para siswa kami. Oleh karena itu, kami menawarkan kursus General English melalui beberapa opsi lokasi:Kursus Online (Daring): Sebagian besar kursus General English kami tersedia secara online. Ini memungkinkan Anda untuk belajar dari mana saja, baik dari rumah, kantor, atau bahkan saat bepergian, selama Anda memiliki koneksi internet yang stabil dan perangkat yang sesuai (komputer, laptop, atau tablet dengan webcam dan mikrofon). Sesi online dilakukan secara interaktif melalui platform konferensi video.Kursus Offline (Tatap Muka): Tergantung pada ketersediaan dan lokasi geografis Anda, kami mungkin juga menawarkan sesi kursus General English secara tatap muka (offline) di pusat belajar kami (jika ada di kota Anda) atau lokasi lain yang disepakati. Opsi ini memberikan keuntungan interaksi langsung yang lebih personal.Silakan hubungi tim kami untuk mendiskusikan opsi lokasi yang paling sesuai untuk Anda dan untuk mengetahui ketersediaan kursus offline di area Anda."
                },
                {
                    "q": "Kapan jadwal kursus General English di Ultimate Education?",
                    "a": "Kami memahami bahwa setiap siswa memiliki komitmen dan ketersediaan waktu yang berbeda. Oleh karena itu, Ultimate Education menawarkan berbagai pilihan jadwal untuk kursus General English yang dirancang agar fleksibel:Kelas Reguler (Mingguan): Kami biasanya memiliki jadwal kelas reguler yang berlangsung satu atau beberapa kali seminggu, pada hari dan jam tertentu. Ini cocok bagi siswa yang memiliki rutinitas stabil.Kelas Intensif: Bagi siswa yang ingin mempercepat proses belajar mereka atau memiliki target waktu tertentu, kami mungkin menawarkan program intensif dengan frekuensi pertemuan yang lebih tinggi.Kelas Grup: Jadwal untuk kelas grup biasanya telah ditentukan sebelumnya, namun kami berusaha menawarkan beberapa opsi waktu (misalnya, kelas pagi, siang, sore, atau akhir pekan) untuk mengakomodasi berbagai preferensi.Kelas Privat: Untuk kelas privat, jadwalnya sangat fleksibel dan dapat disesuaikan sepenuhnya berdasarkan kesepakatan antara siswa dan tutor. Ini adalah pilihan ideal bagi mereka yang memiliki jadwal yang padat atau tidak menentu.Silakan diskusikan kebutuhan jadwal spesifik Anda dengan tim konsultan pendidikan kami. Mereka akan membantu Anda menemukan atau mengatur jadwal kursus yang paling sesuai dengan ketersediaan Anda."
                },
                {
                    "q": "Apakah kemampuan dari kursus General English memiliki masa berlaku?",
                    "a": "Berbeda dengan skor tes standar seperti TOEFL atau IELTS yang memiliki periode validitas formal (biasanya dua tahun), kemampuan bahasa Inggris yang Anda peroleh dari kursus General English tidak memiliki “tanggal kedaluwarsa” atau masa berlaku yang ditetapkan secara resmi.Kemahiran berbahasa adalah sebuah keterampilan yang bersifat berkelanjutan. Apa yang Anda pelajari dan kuasai selama kursus General English akan menjadi bagian dari pengetahuan dan kemampuan Anda. Namun, penting untuk diingat bahwa seperti keterampilan lainnya, kemahiran bahasa Inggris perlu terus diasah dan digunakan secara aktif agar tetap terjaga dan bahkan terus berkembang. Jika Anda berhenti menggunakan bahasa Inggris secara teratur setelah menyelesaikan kursus, ada kemungkinan beberapa aspek kemampuan Anda (terutama kosakata aktif dan kelancaran berbicara) dapat sedikit menurun seiring waktu.Oleh karena itu, meskipun tidak ada masa berlaku formal, manfaat dari kursus General English akan bertahan selama Anda terus mempraktikkan dan menggunakan bahasa Inggris dalam kehidupan sehari-hari, pekerjaan, atau studi Anda. Kursus ini memberikan fondasi yang kuat untuk pembelajaran seumur hidup."
                },
                {
                    "q": "Apa saja yang dipelajari dalam kursus General English?",
                    "a": "Kursus General English di Ultimate Education dirancang secara komprehensif untuk meningkatkan semua aspek inti kemampuan berbahasa Inggris Anda secara seimbang. Materi dan fokus pembelajaran akan disesuaikan dengan level kemahiran siswa, mulai dari tingkat pemula (beginner) hingga tingkat mahir (advanced). Secara umum, Anda akan mempelajari dan mengembangkan:Tata Bahasa (Grammar): Pemahaman dan penggunaan struktur tata bahasa Inggris yang benar, mulai dari tenses, انواع kata, struktur kalimat, hingga tata bahasa yang lebih kompleks.Kosakata (Vocabulary): Perluasan kosakata aktif dan pasif yang relevan untuk berbagai situasi sehari-hari, sosial, dan umum. Ini mencakup idiom, frasa umum, dan kolokasi.Kemampuan Berbicara (Speaking) dan Kelancaran (Fluency): Latihan untuk meningkatkan kepercayaan diri dan kelancaran dalam berbicara, pengucapan (pronunciation) yang lebih jelas, serta kemampuan untuk berpartisipasi dalam percakapan, diskusi, dan menyampaikan ide secara lisan.Kemampuan Mendengarkan (Listening Comprehension): Pengembangan kemampuan untuk memahami bahasa Inggris lisan dalam berbagai aksen dan kecepatan, termasuk dalam percakapan, berita, pengumuman, atau presentasi singkat.Kemampuan Membaca (Reading Comprehension): Peningkatan kemampuan untuk memahami berbagai jenis teks tertulis, mulai dari artikel, cerita pendek, email, hingga instruksi, serta kemampuan untuk mengidentifikasi ide utama, detail pendukung, dan menarik kesimpulan.Kemampuan Menulis (Writing Skills): Latihan untuk menghasilkan tulisan yang jelas, koheren, dan benar secara tata bahasa untuk berbagai keperluan, seperti menulis paragraf, esai pendek, email informal dan formal, atau deskripsi.Metode pengajaran kami interaktif dan komunikatif, dengan fokus pada penggunaan bahasa dalam konteks nyata."
                },
                {
                    "q": "Jadwal kursus General English di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program General English yang komprehensif dan dirancang untuk semua level, dari pemula hingga mahir. Kami menyediakan berbagai pilihan jadwal yang fleksibel untuk mengakomodasi kesibukan Anda, termasuk kelas reguler mingguan, kelas akhir pekan, atau bahkan program intensif jika Anda membutuhkan peningkatan cepat. Pilihan kelas mencakup kelas grup kecil yang interaktif dan kelas privat yang sepenuhnya disesuaikan dengan kebutuhan dan kecepatan belajar Anda.Biaya kursus akan bervariasi tergantung pada level, durasi program, jenis kelas (grup atau privat), dan intensitasnya. Untuk mendapatkan informasi terkini dan paling akurat mengenai jadwal kelas General English yang tersedia, rincian pilihan program belajar yang kami tawarkan, serta struktur biaya kursus dan promosi spesial yang mungkin sedang berlaku, kami sangat menganjurkan Anda untuk menghubungi tim konsultan pendidikan kami. Mereka siap memberikan konsultasi gratis. Anda dapat menghubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat mengikuti kursus General English?",
                    "a": "Mengikuti kursus General English di Ultimate Education dapat memberikan berbagai manfaat yang signifikan, baik untuk pengembangan pribadi maupun profesional:Peningkatan Kepercayaan Diri dalam Berkomunikasi: Anda akan menjadi lebih percaya diri dalam menggunakan bahasa Inggris dalam berbagai situasi sehari-hari, baik saat berbicara, mendengarkan, membaca, maupun menulis.Kemampuan Komunikasi yang Lebih Baik: Kursus ini akan membantu Anda memperbaiki kemampuan untuk menyampaikan ide dengan jelas, memahami orang lain dengan lebih baik, dan berpartisipasi secara efektif dalam percakapan atau diskusi dalam bahasa Inggris. Ini bermanfaat untuk interaksi sosial, perjalanan, maupun di tempat kerja.Perluasan Pemahaman Tata Bahasa dan Kosakata: Anda akan membangun fondasi tata bahasa yang lebih kuat dan memperkaya kosakata Anda, yang merupakan elemen penting untuk kemahiran berbahasa secara keseluruhan.Dasar untuk Tes Kemahiran Bahasa Inggris: Jika Anda memiliki rencana untuk mengambil tes kemahiran bahasa Inggris standar seperti TOEFL, IELTS, atau TOEIC di masa depan, kursus General English dapat memberikan dasar yang sangat baik sebelum Anda fokus pada persiapan tes spesifik.Membuka Peluang Pendidikan dan Karir: Kemampuan berbahasa Inggris yang baik semakin penting di dunia global. Kursus ini dapat membantu membuka lebih banyak peluang untuk studi lanjut (termasuk di luar negeri), mendapatkan pekerjaan yang lebih baik di perusahaan multinasional, atau bahkan untuk pengembangan karir saat ini.Akses ke Informasi dan Budaya Global: Dengan kemampuan bahasa Inggris yang lebih baik, Anda dapat mengakses lebih banyak informasi dari berbagai sumber internasional (buku, berita, internet) dan lebih memahami budaya global.Pengalaman Belajar yang Menyenangkan dan Interaktif: Kursus kami dirancang agar interaktif dan menarik, membuat proses belajar bahasa Inggris menjadi pengalaman yang positif."
                },
                {
                    "q": "Bisa kasih contoh materi kursus General English?",
                    "a": "Materi kursus General English di Ultimate Education sangat bervariasi dan disesuaikan dengan level kemahiran serta kebutuhan spesifik siswa atau kelompok. Kami menggunakan pendekatan komunikatif yang menekankan pada penggunaan bahasa dalam konteks nyata. Berikut adalah beberapa contoh jenis materi dan aktivitas yang mungkin Anda temui:Untuk Pemula (Beginner):Pengenalan alfabet, angka, warna, hari, bulan.Percakapan dasar sehari-hari (perkenalan diri, menanyakan kabar, memesan makanan sederhana).Kosakata benda-benda di sekitar, anggota keluarga, pekerjaan umum.Struktur kalimat sederhana (present simple, to be, possessives).Latihan mendengarkan instruksi sederhana atau dialog pendek.Untuk Menengah (Intermediate):Diskusi tentang topik-topik umum (hobi, perjalanan, berita terkini).Membaca artikel pendek, cerita, atau ulasan dan mendiskusikan isinya.Latihan menggunakan tenses yang lebih beragam (past, future, perfect tenses).Menulis email informal dan formal, paragraf deskriptif atau naratif.Latihan mendengarkan percakapan yang lebih panjang atau presentasi singkat dengan berbagai aksen.Permainan peran (role-playing) untuk situasi sosial atau transaksional.Untuk Mahir (Advanced):Diskusi dan debat tentang isu-isu kompleks atau abstrak.Menganalisis teks sastra, artikel opini, atau laporan.Menggunakan struktur tata bahasa yang lebih canggih dan nuansa kosakata.Menulis esai argumentatif, laporan, atau proposal.Latihan memahami materi audio/video yang otentik dan kompleks (misalnya, kuliah, dokumenter).Di Ultimate Education, tutor kami seringkali menggunakan kombinasi buku teks bahasa Inggris standar internasional yang terstruktur, materi tambahan yang dikembangkan sendiri, artikel dari media, video, lagu, dan berbagai sumber daya digital interaktif untuk membuat pembelajaran menjadi relevan, menarik, dan efektif."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Dalam kursus General English di Ultimate Education, kami memanfaatkan berbagai media untuk menciptakan lingkungan belajar yang dinamis, interaktif, dan efektif, baik untuk sesi online maupun offline:Platform Konferensi Video (untuk kelas online): Sesi online dilakukan melalui platform seperti Google Meet atau Zoom, yang memungkinkan interaksi tatap muka virtual, diskusi kelompok, berbagi layar untuk presentasi materi, dan penggunaan papan tulis digital.Buku Teks dan Materi Cetak (untuk kelas offline dan sebagai suplemen online): Kami sering menggunakan buku teks bahasa Inggris umum yang terstruktur dan teruji dari penerbit internasional ternama, yang dilengkapi dengan buku kerja untuk latihan.Materi Digital Interaktif: Ini bisa berupa akses ke platform e-learning, aplikasi belajar bahasa, kuis online, video pembelajaran, podcast, dan artikel dari berbagai sumber di internet yang relevan dengan topik yang sedang dipelajari.Audio dan Video Otentik: Kami menggunakan rekaman audio dan klip video dari penutur asli untuk melatih kemampuan mendengarkan dan memperkenalkan berbagai aksen serta konteks penggunaan bahasa.Papan Tulis (fisik atau digital): Digunakan untuk menjelaskan konsep tata bahasa, menulis contoh kalimat, atau melakukan brainstorming ide.Kartu Flash (Flashcards) dan Permainan Edukatif: Terutama untuk level pemula atau untuk memperkenalkan kosakata baru, media ini bisa sangat membantu.Grup Diskusi Online: Untuk kelas grup, kami mungkin menggunakan platform seperti WhatsApp atau forum diskusi online untuk komunikasi di luar jam pelajaran, berbagi informasi, atau diskusi tugas."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat memahami bahwa kecocokan antara siswa dan tutor adalah salah satu kunci keberhasilan dalam belajar bahasa Inggris. Oleh karena itu, kami berusaha semaksimal mungkin untuk memastikan Anda mendapatkan tutor General English yang paling sesuai dengan level kemahiran Anda, tujuan belajar Anda, gaya belajar yang Anda preferensikan, dan ketersediaan jadwal Anda.Meskipun sistem kami saat ini tidak secara eksplisit menawarkan fitur di mana siswa dapat memilih tutor secara langsung dari sebuah daftar publik, kami sangat terbuka terhadap preferensi Anda. Jika Anda memiliki rekomendasi atau permintaan khusus (misalnya, Anda lebih cocok dengan tutor yang memiliki gaya mengajar tertentu atau pengalaman dengan kelompok usia tertentu), kami akan mempertimbangkannya dengan serius selama proses konsultasi dan penempatan tutor.Tim tutor General English kami terdiri dari para pengajar yang berpengalaman, seringkali dengan sertifikasi mengajar bahasa Inggris (seperti TEFL/TESOL), dan memiliki semangat untuk membantu siswa berkembang. Kami akan melakukan yang terbaik untuk mencocokkan Anda dengan tutor yang kami yakini dapat memberikan pengalaman belajar yang optimal dan membantu Anda mencapai target kemahiran bahasa Inggris Anda."
                }
            ]
        }
    },
    {
        "slug": "ausbildung",
        "originalSlug": "ausbildung-ver-2-0",
        "meta": {
            "title": "Ausbildung",
            "description": "Raih skor Ausbildung impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">Ausbildung</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "AUSBILDUNG Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": [
                "Persiapan program Ausbildung dengan biayaterjangkau dan pembelajaran bahasa yang berkualitas"
            ]
        },
        "pricing": {
            "PERSIAPAN AUSBILDUNG": {
                "title": "PERSIAPAN AUSBILDUNG",
                "description": "Kursus Bimbingan Ausbildung Jerman di Ultimate Education dirancang untuk membantu peserta yang ingin mempersiapkan diri secara menyeluruh sebelum berangkat ke Jerman. Program ini tidak hanya berfokus pada penguasaan bahasa Jerman (hingga level B1/B2 sesuai kebutuhan), tetapi juga membekali peserta dengan pengetahuan budaya kerja, tata cara administrasi, hingga keterampilan wawancara profesional.Dengan kombinasi pembelajaran intensif, simulasi komunikasi sehari-hari, serta bimbingan dari tutor berpengalaman yang memahami sistem Ausbildung secara langsung, peserta akan lebih siap menghadapi proses seleksi dan beradaptasi dengan kehidupan di Jerman — baik untuk sektor industri, kuliner, kesehatan, hingga teknik.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Penguasaan Bahasa Jerman (Level B1/B2)",
                        "content": "Bahasa Jerman adalah kunci utama untuk diterima di program Ausbildung. Peserta akan belajar tata bahasa, percakapan sehari-hari, serta istilah khusus yang umum digunakan dalam dunia kerja di Jerman. Pembelajaran difokuskan pada komunikasi aktif agar peserta mampu berbicara dengan lancar dalam lingkungan profesional maupun sosial.\nSelain itu, sesi latihan juga mencakup simulasi ujian sertifikasi bahasa (Goethe, TELC, atau ÖSD). Dengan pendekatan berbasis praktik, siswa tidak hanya memahami teori, tetapi juga percaya diri berkomunikasi dengan native speaker dan rekan kerja nantinya di Jerman."
                    },
                    {
                        "title": "Pelatihan Wawancara Perusahaan & Motivasi Kerja",
                        "content": "Peserta akan mendapatkan bimbingan dalam menghadapi interview perusahaan Jerman baik secara daring maupun langsung. Materi meliputi bagaimana memperkenalkan diri dengan sopan dalam bahasa Jerman, menjawab pertanyaan motivasi, dan menunjukkan kompetensi profesional sesuai bidang yang dipilih.\nSelain itu, tutor juga akan membantu peserta memahami etika kerja dan budaya profesional di Jerman, termasuk cara berinteraksi dengan atasan dan rekan kerja, manajemen waktu, serta cara menunjukkan komitmen dan disiplin yang menjadi nilai penting di dunia kerja Jerman."
                    },
                    {
                        "title": "Persiapan CV & Surat Lamaran (Lebenslauf & Bewerbungsschreiben)",
                        "content": "Dalam sistem seleksi Ausbildung, dokumen lamaran menjadi tahap penting yang menentukan keberhasilan. Peserta akan belajar menyusun CV (Lebenslauf) dan Surat Lamaran (Bewerbungsschreiben) sesuai standar Jerman — mulai dari format, gaya bahasa formal, hingga pemilihan kata yang menarik HRD perusahaan Jerman.\nTutor juga akan memberikan contoh nyata dari dokumen yang berhasil lolos seleksi, serta membantu peserta merevisi CV masing-masing agar lebih kuat dan profesional. Hasil akhirnya adalah dokumen siap kirim untuk perusahaan mitra Ausbildung di berbagai bidang seperti kesehatan, teknik, kuliner, perhotelan, dan lainnya."
                    },
                    {
                        "title": "Pengenalan Budaya & Kehidupan di Jerman",
                        "content": "Program ini juga mencakup sesi khusus tentang kehidupan sosial dan budaya di Jerman. Peserta akan memahami sistem transportasi, gaya hidup masyarakat, etika pergaulan, hingga tata cara administratif seperti pendaftaran izin tinggal atau asuransi kesehatan.\nMateri ini membantu peserta beradaptasi lebih cepat setelah tiba di Jerman, menghindari culture shock, dan memudahkan integrasi dengan lingkungan kerja maupun masyarakat setempat. Dengan demikian, peserta tidak hanya siap dari segi akademik, tetapi juga mental dan sosial."
                    },
                    {
                        "title": "Simulasi Seleksi & Pendampingan Dokumen",
                        "content": "Tahap akhir dari program adalah simulasi seleksi Ausbildung yang mencakup wawancara dan tes bahasa. Peserta akan mendapatkan evaluasi langsung dari tutor untuk melihat kesiapan aktual sebelum melamar ke perusahaan Jerman.\nSelain itu, tim pendamping juga membantu dalam penyusunan dokumen resmi seperti penerjemahan ijazah, surat rekomendasi, hingga proses komunikasi dengan agen atau lembaga mitra di Jerman. Tujuannya agar setiap peserta benar-benar siap secara administratif maupun akademik."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "1. Apa itu Ultimate Education?",
                    "a": "Ultimate Education adalah tempat belajar berbagai program menarik mulai dari persiapan IELTS, TOEFL, GMAT, SAT, GRE hingga bahasa Inggris untuk dewasa dan pekerja. Selain itu, menyediakan program pelatihan untuk korporat dengan topik – topik yang beragam. Sejak berdiri, Ultimate Education telah membantu ribuan siswa individu dan korporat mulai dari Pertamina hingga Direktorat Jenderal Pajak.Belum percaya? Silahkan tanya sendiri kepada alumni-alumni kami."
                },
                {
                    "q": "2. Berapa biaya untuk belajar di Ultimate Education?",
                    "a": "Biaya program sangatlah beragam tergantung jenis dan durasi program yang sesuai dengan kebutuhan anda. Kami akan merekomendasikan program yang sesuai dengan kebutuhan anda yang unik. Ingin berkonsultasi lebih lanjut? Klik disini."
                },
                {
                    "q": "3. Bagaimana cara mendaftar di Ultimate Education?",
                    "a": "Untuk memulai program anda di Ultimate Education, bisa klik disini"
                },
                {
                    "q": "4. Apa saja program yang disediakan oleh Ultimate Education?",
                    "a": "Ultimate Education menyediakan beragam program menarik untuk anda. Untuk anda yang berencana untuk kuliah di luar negeri, anda bisa mengikuti berbagai program persiapan yang kami miliki mulai dari IELTS dan TOEFL, hingga GMAT dan GRE. Info lebih lanjut, klik disini.Bagi anda yang ingin meningkatkan kemampuan bahasa Inggris, kami menyediakan berbagai program mulai dari tingkat Beginner hingga Advanced dengan jadwal yang fleksibel. Hubungi kami sekarang juga dan mulailah program belajar yang sesuai dengan kebutuhan anda.Bagi anda yang telah bekerja dan ingin memperbaiki kemampuan komunikasi bahasa Inggris, anda dapat mengikuti program English for professionals. Anda tidak hanya akan belajar untuk meningkatkan kemampuan bahasa inggris tapi juga bagaimana menggunakannya dalam konteks pekerjaan.Bagi anda pemilik perusahaan atau bagian HRD yang ingin memberikan pelatihan bagi pegawai, kami juga menyediakan program corporate training. Kami akan memberikan anda program yang khusus dirancang untuk memenuhi kebutuhan perusahaan anda. Hubungi kami disini."
                },
                {
                    "q": "5. Program lainnya?",
                    "a": "Bagi anda yang ingin menambah keahlian baru dalam bahasa, kami menyediakan program bahasa menarik bagi anda mulai dari Bahasa Perancis dan Jerman hingga Korea dan Mandarin."
                }
            ]
        }
    },
    {
        "slug": "utbk",
        "originalSlug": "kursus-persiapan-utbk",
        "meta": {
            "title": "Kursus Persiapan UTBK - Ultimate Education",
            "description": "Raih skor UTBK impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">UTBK</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "UTBK Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": []
        },
        "pricing": {
            "PERSIAPAN UTBK 1 on 1": {
                "title": "PERSIAPAN UTBK 1 on 1",
                "description": "Bagi Anda yang menginginkan pembelajaran yang lebih personal, Program Persiapan UTBK 1-on-1 adalah pilihan terbaik. Program ini dirancang untuk memberikan bimbingan intensif dan fleksibel sesuai kebutuhan siswa, baik secara offline (tatap muka) maupun online (daring).Tutor akan membantu secara khusus berdasarkan kelemahan dan target skor siswa. Materi yang disusun secara tailored (disesuaikan) membuat proses belajar lebih efisien dan hasilnya lebih optimal — memastikan siswa memahami konsep UTBK secara mendalam dan siap menghadapi soal-soal dengan percaya diri.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Pengenalan Format UTBK & Analisis Soal",
                        "content": "Sesi ini berfokus pada pemahaman mendalam terhadap struktur dan jenis soal yang muncul dalam UTBK, termasuk TPS (Tes Potensi Skolastik) dan TKA (Tes Kompetensi Akademik). Siswa akan mempelajari pola soal, waktu pengerjaan, serta strategi dalam mengelola waktu agar hasil maksimal.\nSelain itu, tutor akan membantu siswa mengenali kesalahan umum yang sering terjadi dalam ujian UTBK serta memberikan tips untuk mengatasinya. Dengan memahami pola dan logika di balik setiap soal, siswa dapat mengembangkan kemampuan berpikir analitis dan adaptif yang menjadi kunci sukses di UTBK."
                    },
                    {
                        "title": "Penguatan Konsep & Teknik Dasar UTBK",
                        "content": "Tahap ini bertujuan memperkuat pemahaman konsep dasar pada bidang yang diujikan, seperti matematika, penalaran umum, dan pemahaman bacaan. Tutor akan membantu siswa meninjau kembali materi inti SMA yang paling sering keluar di UTBK, serta cara menerapkannya pada soal-soal berbasis penalaran.\nPendekatan belajar difokuskan pada problem-solving dan reasoning, bukan sekadar hafalan. Siswa juga diajarkan teknik cepat dan akurat dalam mengerjakan soal — termasuk cara membaca soal secara strategis dan mengenali kata kunci penting yang menentukan arah jawaban."
                    },
                    {
                        "title": "Intensive Practice per Section",
                        "content": "Di tahap ini, siswa akan menghadapi berbagai latihan intensif yang disusun menyerupai format asli UTBK. Setiap sesi latihan dirancang untuk melatih kecepatan, ketelitian, serta kemampuan berpikir kritis dalam menjawab soal.\nSetiap hasil latihan akan dievaluasi oleh tutor secara mendetail, sehingga siswa mendapatkan umpan balik langsung untuk memperbaiki kelemahan. Proses ini tidak hanya meningkatkan performa akademik, tetapi juga membangun mental tahan ujian dan rasa percaya diri menjelang hari tes."
                    },
                    {
                        "title": "Penguasaan Penulisan & Komunikasi Logis",
                        "content": "Walaupun UTBK bukan ujian bahasa murni, kemampuan menulis dan berpikir logis tetap sangat berperan dalam memahami dan menganalisis soal-soal bacaan serta argumentasi. Pada bagian ini, siswa akan belajar menstrukturkan ide, membaca cepat dengan pemahaman tinggi, dan mengasah kemampuan inferensi logis.\nTutor juga akan memberikan latihan berbasis kasus dan teks panjang agar siswa terbiasa menghadapi soal-soal dengan konteks kompleks. Hasilnya, siswa akan mampu membaca secara efektif, memahami argumen, dan menarik kesimpulan logis dengan cepat."
                    },
                    {
                        "title": "Strategi Lanjutan & Simulasi Akhir",
                        "content": "Tahap terakhir ini dirancang sebagai final preparation menjelang ujian UTBK sebenarnya. Siswa akan mempelajari strategi lanjutan seperti teknik eliminasi jawaban, analisis tingkat kesulitan soal, dan manajemen stres saat ujian.\nSetelah itu, dilakukan simulasi UTBK penuh dengan sistem waktu dan format asli. Hasil simulasi akan menjadi dasar untuk analisis performa akhir siswa, serta rekomendasi strategi pribadi pada hari H agar siswa siap menghadapi ujian dengan tenang dan fokus."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya pendaftaran UTBK?",
                    "a": "Biaya UTBK ditetapkan secara nasional oleh panitia SNPMB dan diumumkan tiap tahun. Besaran biaya dapat berbeda untuk kelompok ujian tertentu (mis. Campuran). Lihat pengumuman resmi saat pendaftaran dibuka."
                },
                {
                    "q": "UTBK diselenggarakan di mana saja?",
                    "a": "UTBK dilaksanakan di Pusat UTBK yang tersebar di berbagai Perguruan Tinggi Negeri (PTN) di Indonesia. Peserta memilih lokasi pusat UTBK saat mendaftar sesuai kuota."
                },
                {
                    "q": "Kapan jadwal UTBK biasanya diadakan?",
                    "a": "UTBK umumnya diadakan sekali setahun sesuai kalender SNPMB. Tanggal pelaksanaan dan periode pendaftaran diumumkan beberapa bulan sebelumnya di situs resmi SNPMB."
                },
                {
                    "q": "Skor UTBK berlaku berapa lama?",
                    "a": "Skor UTBK hanya berlaku untuk pendaftaran SNBT pada tahun berjalan dan tidak dapat digunakan untuk seleksi tahun berikutnya."
                },
                {
                    "q": "Bagaimana sistem penilaian UTBK?",
                    "a": "UTBK tidak menggunakan status lulus/gagal. Peserta menerima skor per komponen: Tes Potensi Skolastik (TPS), Literasi (Bahasa Indonesia & Bahasa Inggris), dan Penalaran Matematika. PTN menggunakan kombinasi skor tersebut untuk seleksi."
                },
                {
                    "q": "Apa manfaat utama mengikuti UTBK?",
                    "a": "Skor UTBK menjadi syarat masuk PTN melalui jalur SNBT. Semakin tinggi skor, semakin besar peluang diterima di program studi yang diminati. Skor juga membantu memetakan kekuatan/kelemahan belajar untuk persiapan lanjutan."
                },
                {
                    "q": "Di mana dapat contoh soal UTBK?",
                    "a": "Contoh soal tersedia di situs resmi SNPMB dan berbagai buku/platfom try out UTBK (online maupun cetak). Gunakan sumber resmi untuk format terbaru."
                },
                {
                    "q": "Jadwal & biaya kursus persiapan UTBK di Ultimate Education?",
                    "a": "Ultimate Education menyediakan program persiapan UTBK dengan jadwal fleksibel (kelas grup & privat, online/offline). Biaya bergantung pada durasi dan jenis kelas. Hubungi tim kami untuk katalog terbaru:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Bisa memilih tutor sendiri untuk program UTBK?",
                    "a": "Kami akan mencocokkan tutor sesuai kebutuhan (Saintek/Soshum), target skor, dan gaya belajar kamu. Jika punya preferensi tertentu, sampaikan ke admin—kami usahakan penjadwalan dengan tutor yang paling relevan."
                }
            ]
        }
    },
    {
        "slug": "topik",
        "originalSlug": "tes-topik",
        "meta": {
            "title": "TOPIK",
            "description": "Raih skor TOPIK impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">TOPIK</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "TOPIK Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": []
        },
        "pricing": {
            "TOPIK Private CLASS": {
                "title": "TOPIK Private CLASS",
                "description": "Program 개인수업 (Gaein Sueop / Private One-on-One) yang dirancang untuk pembelajaran personal dan intensif.\nKeunggulan:\n• Fokus pada area tertentu (misalnya 듣기, 쓰기, atau tata bahasa).\n• Materi 맞춤형 (Majchumhyeong / tailored) sesuai kemampuan awal & target siswa.\n• Fleksibel: tersedia 온라인 (online) maupun 오프라인 (offline).\n• Ideal untuk siswa yang menyiapkan syarat kuliah, beasiswa, atau kebutuhan profesional di Korea.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Korea saat ini berdasarkan level TOPIK mulai dari TOPIK I (1-2급) untuk pemula hingga TOPIK II (3-6급) untuk level menengah hingga mahir. Tes ini dirancang untuk mengidentifikasi kekuatan dan kelemahan dalam setiap skill area bahasa Korea yang essential untuk sukses dalam ujian TOPIK.\n• Evaluasi Komprehensif: Assessment terhadap kemampuan membaca (읽기), menyimak (듣기), dan menulis (쓰기) sesuai format ujian TOPIK terbaru\n• Analisis Hangeul: Penguasaan sistem tulisan Korea, pronunciation rules, dan sound change patterns yang fundamental\n• Level Placement: Penentuan starting point yang tepat berdasarkan Korean proficiency level siswa saat ini\n• Learning Style Assessment: Identifikasi preferensi belajar untuk optimalisasi strategi pembelajaran individual\n• Goal Setting: Penetapan target level TOPIK yang realistic dengan timeline yang achievable\n• Personalized Study Plan: Rencana belajar yang disesuaikan dengan kebutuhan akademik, profesional, atau cultural interest siswa"
                    },
                    {
                        "title": "PERTAMA: Understanding TOPIK Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur ujian TOPIK yang terbaru, termasuk format TOPIK I (level 1-2) dan TOPIK II (level 3-6) dengan sistem penilaian yang berbeda untuk setiap kategori. Program ini memberikan insight detail tentang karakteristik soal, time management strategies, dan scoring system yang kompleks dalam ujian TOPIK.\n• TOPIK I Format: 100 soal pilihan ganda (듣기 30 soal + 읽기 40 soal) dengan durasi 100 menit, passing score 80+ untuk level 1, 140+ untuk level 2\n• TOPIK II Format: 듣기 50 soal + 읽기 50 soal + 쓰기 4 soal dengan durasi total 180 menit, scoring 120+ (level 3), 150+ (level 4), 190+ (level 5), 230+ (level 6)\n• Question Types: Pengenalan berbagai jenis soal dari listening comprehension, reading comprehension, hingga essay writing\n• Scoring System: Pemahaman scaled scoring dan bagaimana raw score dikonversi menjadi final TOPIK score\n• Test Strategies: Time allocation techniques, question prioritization, dan effective guessing strategies\n• Registration Process: Panduan lengkap pendaftaran ujian TOPIK di Indonesia dan prosedur test day preparation"
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan tiga keterampilan utama yang diujikan dalam TOPIK dengan pendekatan komunikatif dan task-based learning. Program ini dirancang untuk membangun Korean language proficiency yang solid dari basic survival Korean hingga advanced academic dan professional level sesuai target TOPIK siswa.\n• Kemampuan Menyimak (듣기): Listening comprehension dari daily conversation, announcements, news, lectures dengan berbagai Korean accents dan speech speeds\n• Kemampuan Membaca (읽기): Reading comprehension dari simple texts hingga complex academic articles, essay analysis, dan inference skills\n• Kemampuan Menulis (쓰기): Writing skills dari sentence construction, paragraph writing, hingga argumentative essays dengan proper Korean discourse markers\n• Kosakata (어휘): Systematic vocabulary building sesuai TOPIK levels dengan focus pada high-frequency words dan academic vocabulary\n• Tata Bahasa (문법): Korean grammar patterns dari basic particles hingga advanced connectives, honorifics, dan complex sentence structures\n• Hangeul Mastery: Perfect command of Korean writing system, pronunciation rules, dan phonetic changes\n• Korean Pragmatics: Understanding of Korean communication styles, politeness levels, dan cultural contexts dalam language use"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus TOPIK sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian TOPIK. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian TOPIK sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOPIK Customized Class": {
                "title": "TOPIK Customized Class",
                "description": "Program 맞춤반 (Majchum Ban / Customized Class) cocok untuk mereka yang memiliki waktu terbatas atau fokus pada area tertentu.\n• Paket fleksibel (kelipatan 3 sesi).\n• Fokus sesuai kebutuhan, misalnya 쓰기 (writing) untuk TOPIK II atau 듣기 (listening) intensif.\n• Sepenuhnya 개인화 (Gaeinhwa / personalized) dari segi materi, jadwal, hingga strategi.\n• Sangat efektif bagi mahasiswa maupun profesional yang ingin mencapai target level TOPIK dengan efisien dan tepat sasaran.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Korea saat ini berdasarkan level TOPIK mulai dari TOPIK I (1-2급) untuk pemula hingga TOPIK II (3-6급) untuk level menengah hingga mahir. Tes ini dirancang untuk mengidentifikasi kekuatan dan kelemahan dalam setiap skill area bahasa Korea yang essential untuk sukses dalam ujian TOPIK.\n• Evaluasi Komprehensif: Assessment terhadap kemampuan membaca (읽기), menyimak (듣기), dan menulis (쓰기) sesuai format ujian TOPIK terbaru\n• Analisis Hangeul: Penguasaan sistem tulisan Korea, pronunciation rules, dan sound change patterns yang fundamental\n• Level Placement: Penentuan starting point yang tepat berdasarkan Korean proficiency level siswa saat ini\n• Learning Style Assessment: Identifikasi preferensi belajar untuk optimalisasi strategi pembelajaran individual\n• Goal Setting: Penetapan target level TOPIK yang realistic dengan timeline yang achievable\n• Personalized Study Plan: Rencana belajar yang disesuaikan dengan kebutuhan akademik, profesional, atau cultural interest siswa"
                    },
                    {
                        "title": "PERTAMA: Understanding TOPIK Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur ujian TOPIK yang terbaru, termasuk format TOPIK I (level 1-2) dan TOPIK II (level 3-6) dengan sistem penilaian yang berbeda untuk setiap kategori. Program ini memberikan insight detail tentang karakteristik soal, time management strategies, dan scoring system yang kompleks dalam ujian TOPIK.\n• TOPIK I Format: 100 soal pilihan ganda (듣기 30 soal + 읽기 40 soal) dengan durasi 100 menit, passing score 80+ untuk level 1, 140+ untuk level 2\n• TOPIK II Format: 듣기 50 soal + 읽기 50 soal + 쓰기 4 soal dengan durasi total 180 menit, scoring 120+ (level 3), 150+ (level 4), 190+ (level 5), 230+ (level 6)\n• Question Types: Pengenalan berbagai jenis soal dari listening comprehension, reading comprehension, hingga essay writing\n• Scoring System: Pemahaman scaled scoring dan bagaimana raw score dikonversi menjadi final TOPIK score\n• Test Strategies: Time allocation techniques, question prioritization, dan effective guessing strategies\n• Registration Process: Panduan lengkap pendaftaran ujian TOPIK di Indonesia dan prosedur test day preparation"
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan tiga keterampilan utama yang diujikan dalam TOPIK dengan pendekatan komunikatif dan task-based learning. Program ini dirancang untuk membangun Korean language proficiency yang solid dari basic survival Korean hingga advanced academic dan professional level sesuai target TOPIK siswa.\n• Kemampuan Menyimak (듣기): Listening comprehension dari daily conversation, announcements, news, lectures dengan berbagai Korean accents dan speech speeds\n• Kemampuan Membaca (읽기): Reading comprehension dari simple texts hingga complex academic articles, essay analysis, dan inference skills\n• Kemampuan Menulis (쓰기): Writing skills dari sentence construction, paragraph writing, hingga argumentative essays dengan proper Korean discourse markers\n• Kosakata (어휘): Systematic vocabulary building sesuai TOPIK levels dengan focus pada high-frequency words dan academic vocabulary\n• Tata Bahasa (문법): Korean grammar patterns dari basic particles hingga advanced connectives, honorifics, dan complex sentence structures\n• Hangeul Mastery: Perfect command of Korean writing system, pronunciation rules, dan phonetic changes\n• Korean Pragmatics: Understanding of Korean communication styles, politeness levels, dan cultural contexts dalam language use"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus TOPIK sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian TOPIK. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian TOPIK sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOPIK Group Class": {
                "title": "TOPIK Group Class",
                "description": "Kelas semi privat dengan 5–7 siswa, suasana belajar lebih fokus, interaktif, dan kolaboratif.\nPeserta akan berlatih:\n• 듣기 (listening), 읽기 (reading), 쓰기 (writing untuk TOPIK II), serta kosakata & tata bahasa.\n• Latihan soal, diskusi, dan 모의고사 (moigosa) agar terbiasa dengan format resmi ujian.\n• Cocok untuk siswa yang ingin belajar bersama dengan suasana aktif, seru, namun tetap mendalam.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "• Evaluasi Komprehensif: Assessment terhadap kemampuan membaca (읽기), menyimak (듣기), dan menulis (쓰기) sesuai format ujian TOPIK terbaru\n• Analisis Hangeul: Penguasaan sistem tulisan Korea, pronunciation rules, dan sound change patterns yang fundamental\n• Level Placement: Penentuan starting point yang tepat berdasarkan Korean proficiency level siswa saat ini\n• Learning Style Assessment: Identifikasi preferensi belajar untuk optimalisasi strategi pembelajaran individual\n• Goal Setting: Penetapan target level TOPIK yang realistic dengan timeline yang achievable\n• Personalized Study Plan: Rencana belajar yang disesuaikan dengan kebutuhan akademik, profesional, atau cultural interest siswa"
                    },
                    {
                        "title": "PERTAMA: Understanding TOPIK Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur ujian TOPIK yang terbaru, termasuk format TOPIK I (level 1-2) dan TOPIK II (level 3-6) dengan sistem penilaian yang berbeda untuk setiap kategori. Program ini memberikan insight detail tentang karakteristik soal, time management strategies, dan scoring system yang kompleks dalam ujian TOPIK.\n• TOPIK I Format: 100 soal pilihan ganda (듣기 30 soal + 읽기 40 soal) dengan durasi 100 menit, passing score 80+ untuk level 1, 140+ untuk level 2\n• TOPIK II Format: 듣기 50 soal + 읽기 50 soal + 쓰기 4 soal dengan durasi total 180 menit, scoring 120+ (level 3), 150+ (level 4), 190+ (level 5), 230+ (level 6)\n• Question Types: Pengenalan berbagai jenis soal dari listening comprehension, reading comprehension, hingga essay writing\n• Scoring System: Pemahaman scaled scoring dan bagaimana raw score dikonversi menjadi final TOPIK score\n• Test Strategies: Time allocation techniques, question prioritization, dan effective guessing strategies\n• Registration Process: Panduan lengkap pendaftaran ujian TOPIK di Indonesia dan prosedur test day preparation"
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan tiga keterampilan utama yang diujikan dalam TOPIK dengan pendekatan komunikatif dan task-based learning. Program ini dirancang untuk membangun Korean language proficiency yang solid dari basic survival Korean hingga advanced academic dan professional level sesuai target TOPIK siswa.\n• Kemampuan Menyimak (듣기): Listening comprehension dari daily conversation, announcements, news, lectures dengan berbagai Korean accents dan speech speeds\n• Kemampuan Membaca (읽기): Reading comprehension dari simple texts hingga complex academic articles, essay analysis, dan inference skills\n• Kemampuan Menulis (쓰기): Writing skills dari sentence construction, paragraph writing, hingga argumentative essays dengan proper Korean discourse markers\n• Kosakata (어휘): Systematic vocabulary building sesuai TOPIK levels dengan focus pada high-frequency words dan academic vocabulary\n• Tata Bahasa (문법): Korean grammar patterns dari basic particles hingga advanced connectives, honorifics, dan complex sentence structures\n• Hangeul Mastery: Perfect command of Korean writing system, pronunciation rules, dan phonetic changes\n• Korean Pragmatics: Understanding of Korean communication styles, politeness levels, dan cultural contexts dalam language use"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus TOPIK sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics & Transition to Higher Studies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian TOPIK. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian TOPIK sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes TOPIK?",
                    "a": "Biaya pendaftaran tes TOPIK (Test of Proficiency in Korean) bervariasi tergantung pada jenis tes yang diambil (TOPIK I atau TOPIK II) dan negara serta pusat tes tempat Anda mendaftar. Di Indonesia, biaya tes ditetapkan oleh National Institute for International Education (NIIED) Korea Selatan dan dikelola oleh penyelenggara lokal (seringkali Kedutaan Besar Republik Korea atau Korean Cultural Center Indonesia – KCCI, serta universitas atau lembaga bahasa Korea yang ditunjuk). Umumnya, biaya untuk TOPIK II sedikit lebih tinggi daripada TOPIK I. Untuk informasi biaya yang paling akurat dan terkini, Anda disarankan untuk mengunjungi situs web resmi KCCI atau pusat penyelenggara TOPIK di Indonesia ketika periode pendaftaran dibuka."
                },
                {
                    "q": "Tes TOPIK diselenggarakan di mana saja di Indonesia?",
                    "a": "Tes TOPIK di Indonesia biasanya diselenggarakan di beberapa kota besar yang memiliki komunitas Korea atau peminat bahasa Korea yang signifikan. Lokasi pusat ujian umumnya adalah: Jakarta: Seringkali di Korean Cultural Center Indonesia (KCCI) atau universitas yang memiliki program studi Bahasa Korea. Kota-kota besar lainnya: Seperti Surabaya, Bandung, Yogyakarta, Semarang, dan terkadang kota lain tergantung pada permintaan dan kerjasama dengan institusi lokal. Daftar pasti lokasi pusat ujian untuk setiap periode tes akan diumumkan oleh KCCI atau penyelenggara resmi TOPIK di Indonesia. Anda dapat memeriksa situs web mereka untuk informasi terbaru."
                },
                {
                    "q": "Kapan jadwal tes TOPIK biasanya diadakan?",
                    "a": "Tes TOPIK secara global diadakan beberapa kali dalam setahun. NIIED mengumumkan jadwal tes internasional untuk sepanjang tahun tersebut. Di Indonesia, tes TOPIK umumnya diselenggarakan: Dua hingga empat kali setahun. Tanggal pastinya bisa bervariasi, namun seringkali ada sesi di bulan April, Juli, Oktober, atau November. Tidak semua tanggal tes global ditawarkan di setiap negara. KCCI atau penyelenggara lokal akan mengumumkan tanggal mana saja yang akan diselenggarakan di Indonesia beserta periode pendaftarannya. Informasi jadwal dapat ditemukan di situs web KCCI atau media sosial resmi mereka. Pendaftaran biasanya dibuka beberapa bulan sebelum tanggal tes dan kuota seringkali terbatas."
                },
                {
                    "q": "Sertifikat TOPIK valid berapa lama?",
                    "a": "Sertifikat hasil tes TOPIK Anda berlaku selama dua (2) tahun terhitung sejak tanggal pengumuman hasil tes (bukan tanggal pelaksanaan tes). Tanggal kedaluwarsa akan tercantum pada sertifikat Anda. Periode validitas dua tahun ini penting untuk diperhatikan jika Anda berencana menggunakan sertifikat TOPIK untuk aplikasi beasiswa (seperti KGSP/GKS), pendaftaran universitas di Korea, atau keperluan profesional. Setelah dua tahun, Anda mungkin perlu mengambil ulang tes jika institusi yang Anda tuju mensyaratkan sertifikat yang masih berlaku."
                },
                {
                    "q": "Ada berapa jenis dan level dalam tes TOPIK (TOPIK I dan TOPIK II)?",
                    "a": "Tes TOPIK dibagi menjadi dua jenis utama, yang selanjutnya mencakup beberapa level kemahiran: TOPIK I (Level Dasar): Mengukur kemahiran bahasa Korea tingkat dasar. Terdiri dari dua sub-level: Level 1: Kemampuan dasar untuk percakapan sehari-hari yang sederhana, memahami kalimat dasar, dan menghasilkan kalimat sederhana. Level 2: Kemampuan untuk berpartisipasi dalam percakapan sehari-hari tentang topik familiar, memahami dan menggunakan sekitar 1.500-2.000 kosakata. TOPIK II (Level Menengah hingga Mahir): Mengukur kemahiran bahasa Korea tingkat menengah hingga mahir yang diperlukan untuk studi atau bekerja di Korea. Terdiri dari empat sub-level: Level 3: Kemampuan untuk menjalankan fungsi bahasa dasar yang diperlukan untuk kehidupan sehari-hari di Korea dan memahami konten sosial budaya dasar. Level 4: Kemampuan untuk memahami berita, artikel koran sederhana, dan berbagai topik sosial budaya. Mampu menggunakan ungkapan umum terkait pekerjaan. Level 5: Kemampuan untuk menjalankan fungsi bahasa pada tingkat tertentu yang diperlukan untuk penelitian atau pekerjaan profesional. Mampu memahami dan mendiskusikan topik yang kurang familiar dalam politik, ekonomi, dan masyarakat. Level 6 (Paling Sulit): Kemampuan untuk menjalankan fungsi bahasa secara akurat dan fasih untuk penelitian atau pekerjaan profesional. Mampu memahami dan menggunakan bahasa dalam berbagai konteks tanpa kesulitan yang berarti. Anda memilih untuk mengambil TOPIK I atau TOPIK II saat mendaftar. Skor yang Anda peroleh pada TOPIK I akan menentukan apakah Anda lulus Level 1 atau 2. Skor pada TOPIK II akan menentukan apakah Anda lulus Level 3, 4, 5, atau 6."
                },
                {
                    "q": "Keterampilan apa saja yang diuji dalam setiap level TOPIK?",
                    "a": "Keterampilan yang diuji dalam TOPIK berbeda antara TOPIK I dan TOPIK II: TOPIK I (Level 1-2): Mendengarkan (듣기 – Deutgi): Pilihan ganda. Membaca (읽기 – Ilgi): Pilihan ganda. Tidak ada bagian menulis atau berbicara untuk TOPIK I. TOPIK II (Level 3-6): Mendengarkan (듣기 – Deutgi): Pilihan ganda. Menulis (쓰기 – Sseugi): Mengisi kalimat, menulis penjelasan pendek, dan menulis esai panjang (argumentatif atau deskriptif). Membaca (읽기 – Ilgi): Pilihan ganda. Tidak ada komponen berbicara (speaking) dalam tes TOPIK standar saat ini, meskipun ada rencana untuk memperkenalkan tes berbicara TOPIK (TOPIK Speaking) secara terpisah di masa depan atau telah mulai diujicobakan di beberapa negara."
                },
                {
                    "q": "Apa manfaat memiliki sertifikat TOPIK?",
                    "a": "Memiliki sertifikat TOPIK dengan level yang sesuai memberikan berbagai manfaat: Studi di Korea Selatan: Merupakan persyaratan utama bagi mahasiswa internasional yang ingin mendaftar ke universitas (S1, S2, S3) atau program bahasa di Korea Selatan. Level yang dibutuhkan bervariasi (umumnya TOPIK Level 3-4 untuk S1, dan Level 4-5 ke atas untuk S2/S3). Beasiswa Pemerintah Korea (KGSP/GKS): Sertifikat TOPIK dengan level tertentu seringkali menjadi salah satu kriteria penting dan dapat memberikan poin tambahan dalam seleksi beasiswa bergengsi ini. Peluang Kerja di Korea atau Perusahaan Korea: Banyak perusahaan di Korea Selatan atau perusahaan Korea di luar negeri mencari karyawan yang memiliki kemampuan bahasa Korea yang dibuktikan dengan sertifikat TOPIK, terutama untuk posisi yang membutuhkan interaksi dengan penutur Korea. Keperluan Visa dan Izin Tinggal: Untuk beberapa jenis visa (misalnya, visa kerja, visa pasangan, atau aplikasi untuk tinggal permanen) di Korea Selatan, skor TOPIK mungkin diperlukan atau memberikan keuntungan. Pengakuan Kemampuan Bahasa: Sebagai standar internasional untuk mengukur kemahiran bahasa Korea Anda. Akses Budaya: Memudahkan pemahaman terhadap budaya populer Korea (K-Pop, K-Drama), sastra, dan media lainnya."
                },
                {
                    "q": "Di mana saya bisa mendapatkan contoh soal TOPIK?",
                    "a": "Sumber terbaik untuk mendapatkan contoh soal TOPIK yang resmi dan akurat adalah: Situs Web Resmi TOPIK (www.topik.go.kr): Situs ini biasanya menyediakan contoh soal (기출문제 – gichul munje) dari tes-tes periode sebelumnya yang dapat diunduh secara gratis. Ini adalah sumber yang paling otentik. Materi dari NIIED: National Institute for International Education (NIIED) sebagai penyelenggara juga mungkin merilis materi atau panduan tes. Buku-buku Persiapan TOPIK: Banyak buku teks dan buku latihan TOPIK yang diterbitkan di Korea dan negara lain, yang dirancang khusus untuk setiap level. Carilah buku yang memiliki reputasi baik dan sesuai dengan format tes terbaru. Aplikasi Mobile dan Situs Web Latihan: Ada berbagai aplikasi dan situs web yang menawarkan latihan soal TOPIK, namun pastikan kualitas dan keakuratannya."
                },
                {
                    "q": "Jadwal kursus persiapan TOPIK di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan TOPIK yang komprehensif untuk membantu Anda sukses dalam mencapai target level Anda, baik untuk TOPIK I maupun TOPIK II. Kursus kami mencakup penguasaan tata bahasa, kosakata, latihan intensif untuk bagian mendengarkan dan membaca, serta strategi khusus untuk bagian menulis (untuk TOPIK II). Kami menyediakan jadwal yang fleksibel, dengan pilihan kelas grup dan sesi privat. Biaya kursus akan bergantung pada level TOPIK yang dituju, durasi program, dan jenis kelas. Untuk informasi terbaru mengenai jadwal, program, dan biaya kursus persiapan TOPIK, silakan hubungi tim konsultan pendidikan kami: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri untuk kursus TOPIK di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat peduli dengan kualitas bimbingan yang Anda terima. Tim tutor TOPIK kami terdiri dari pengajar bahasa Korea yang berpengalaman, banyak di antaranya adalah penutur asli atau memiliki sertifikat TOPIK level tertinggi dan kualifikasi mengajar yang relevan. Meskipun sistem kami tidak secara langsung memungkinkan siswa memilih tutor, kami akan berusaha keras mencocokkan Anda dengan tutor yang paling sesuai berdasarkan level target Anda, gaya belajar, dan preferensi jadwal untuk memastikan pengalaman belajar yang optimal."
                }
            ]
        }
    },
    {
        "slug": "hsk",
        "originalSlug": "tes-hsk",
        "meta": {
            "title": "HSK",
            "description": "Raih skor HSK impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">HSK</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "HSK Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": []
        },
        "pricing": {
            "HSK Private CLASS": {
                "title": "HSK Private CLASS",
                "description": "Program HSK 一对一 (Yī duì yī / Private One-on-One) memberikan pengalaman belajar personal dan intensif.\nTutor akan menargetkan langsung area yang perlu diperkuat, baik 听力 (tīnglì), 阅读 (yuèdú), 写作 (xiězuò), maupun penguasaan kosakata dan tata bahasa.\nMateri akan 量身定制 (Liángshēn Dìngzhì / tailored) sesuai kebutuhan individu—misalnya persiapan kuliah di Tiongkok, beasiswa, atau kebutuhan profesional.\nKelas tersedia 线上 (xiànshàng / online) maupun 线下 (xiànxià / tatap muka) dengan jadwal fleksibel.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Mandarin saat ini berdasarkan level HSK mulai dari HSK 1 (pemula) hingga HSK 6 (mahir) sesuai dengan standar internasional yang ditetapkan oleh Hanban. Tes ini mencakup evaluasi terhadap empat keterampilan utama yaitu menyimak (听力), membaca (阅读), menulis (书写), dan berbicara (口语), serta penguasaan karakter Cina (汉字), pinyin, dan tata bahasa Mandarin sesuai level.\nBerdasarkan hasil diagnostik, tim pengajar bahasa Mandarin berpengalaman akan menyusun rencana belajar individual yang disesuaikan dengan target level HSK yang ingin dicapai, tujuan pembelajaran (akademik untuk studi di Tiongkok, profesional untuk bisnis, atau budaya), timeline persiapan ujian, dan learning style preference siswa, termasuk milestone yang jelas dengan fokus pada penguatan area yang lemah dan jadwal latihan intensif dengan authentic Chinese materials."
                    },
                    {
                        "title": "PERTAMA: Understanding HSK Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang format ujian HSK untuk setiap level, termasuk struktur paper, jumlah soal per section, alokasi waktu, dan sistem penilaian yang menggunakan skala 300 poin dengan passing score minimal 180 poin (60% skor). Program ini memberikan penjelasan detail tentang progression antar level HSK, karakteristik soal untuk setiap tingkat kesulitan, dan perbedaan antara HSK written test dan HSK speaking test (HSKK) yang terpisah.\nSiswa akan memahami kriteria penilaian HSK secara menyeluruh, termasuk bagaimana skor dihitung untuk setiap section (listening, reading, writing), bobot penilaian yang equal untuk setiap komponen, format soal yang bervariasi dari pilihan ganda hingga essay writing, serta time management strategies yang efektif untuk setiap level karena durasi ujian yang meningkat dari 40 menit (HSK 1) hingga 140 menit (HSK 6), dengan understanding tentang computer-based test format yang digunakan di beberapa test center modern."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan empat keterampilan utama bahasa Mandarin dengan pendekatan sistematis yang disesuaikan dengan level HSK masing-masing siswa. Program ini dirancang untuk membangun fondasi yang kuat dalam semua aspek bahasa Mandarin secara terintegrasi dan komunikatif.\n• Karakter Cina dan Pinyin (汉字和拼音): Penguasaan karakter sesuai level HSK (HSK 1: 150 karakter, HSK 2: 300, HSK 3: 600, HSK 4: 1200, HSK 5: 2500, HSK 6: 5000+), struktur radikal dan stroke order, sistem pinyin dengan tone marks yang akurat\n• Kosakata (词汇): Pengembangan vocabulary bertahap (HSK 1: 150 kata hingga HSK 6: 5000+ kata), word formation patterns, compound words, dan usage dalam konteks formal dan informal\n• Tata Bahasa (语法): Struktur kalimat SVO, measure words (量词), aspect markers (了, 着, 过), modal verbs, complex sentence patterns, dan grammar points spesifik setiap level\n• Kemampuan Menyimak (听力): Pemahaman percakapan sehari-hari, monolog, dialog dengan berbagai aksen Mandarin, speed recognition, dan contextual understanding\n• Kemampuan Membaca (阅读): Comprehension dari teks pendek hingga artikel kompleks, skimming dan scanning techniques, inference skills, dan analisis struktur teks\n• Kemampuan Menulis (书写): Penulisan karakter yang benar, sentence construction, paragraph writing, essay composition untuk level tinggi, dan penggunaan punctuation marks Cina\n• Kemampuan Berbicara (口语): Pronunciation akurat dengan 4 tone Mandarin, conversation skills, presentation abilities, dan kemampuan mengekspresikan opini secara fluent"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus HSK sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian HSK. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian HSK sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "HSK Customized Class": {
                "title": "HSK Customized Class",
                "description": "Program HSK 定制课程 (Dìngzhì Kèchéng / Customized Class) cocok bagi peserta dengan waktu terbatas atau kebutuhan spesifik.\nDengan paket fleksibel (kelipatan 3 sesi), siswa dapat fokus pada keterampilan tertentu—misalnya 写作 (writing) untuk level HSK 5–6 atau 听力 (listening) untuk pemula.\nKelas ini sepenuhnya 个性化 (Gèxìnghuà / personalized) dari segi materi, jadwal, hingga strategi ujian, sehingga efektif untuk mahasiswa maupun profesional yang ingin mencapai target HSK secara efisien.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Mandarin saat ini berdasarkan level HSK mulai dari HSK 1 (pemula) hingga HSK 6 (mahir) sesuai dengan standar internasional yang ditetapkan oleh Hanban. Tes ini mencakup evaluasi terhadap empat keterampilan utama yaitu menyimak (听力), membaca (阅读), menulis (书写), dan berbicara (口语), serta penguasaan karakter Cina (汉字), pinyin, dan tata bahasa Mandarin sesuai level.\nBerdasarkan hasil diagnostik, tim pengajar bahasa Mandarin berpengalaman akan menyusun rencana belajar individual yang disesuaikan dengan target level HSK yang ingin dicapai, tujuan pembelajaran (akademik untuk studi di Tiongkok, profesional untuk bisnis, atau budaya), timeline persiapan ujian, dan learning style preference siswa, termasuk milestone yang jelas dengan fokus pada penguatan area yang lemah dan jadwal latihan intensif dengan authentic Chinese materials."
                    },
                    {
                        "title": "PERTAMA: Understanding HSK Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang format ujian HSK untuk setiap level, termasuk struktur paper, jumlah soal per section, alokasi waktu, dan sistem penilaian yang menggunakan skala 300 poin dengan passing score minimal 180 poin (60% skor). Program ini memberikan penjelasan detail tentang progression antar level HSK, karakteristik soal untuk setiap tingkat kesulitan, dan perbedaan antara HSK written test dan HSK speaking test (HSKK) yang terpisah.\nSiswa akan memahami kriteria penilaian HSK secara menyeluruh, termasuk bagaimana skor dihitung untuk setiap section (listening, reading, writing), bobot penilaian yang equal untuk setiap komponen, format soal yang bervariasi dari pilihan ganda hingga essay writing, serta time management strategies yang efektif untuk setiap level karena durasi ujian yang meningkat dari 40 menit (HSK 1) hingga 140 menit (HSK 6), dengan understanding tentang computer-based test format yang digunakan di beberapa test center modern."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan empat keterampilan utama bahasa Mandarin dengan pendekatan sistematis yang disesuaikan dengan level HSK masing-masing siswa. Program ini dirancang untuk membangun fondasi yang kuat dalam semua aspek bahasa Mandarin secara terintegrasi dan komunikatif.\n• Karakter Cina dan Pinyin (汉字和拼音): Penguasaan karakter sesuai level HSK (HSK 1: 150 karakter, HSK 2: 300, HSK 3: 600, HSK 4: 1200, HSK 5: 2500, HSK 6: 5000+), struktur radikal dan stroke order, sistem pinyin dengan tone marks yang akurat\n• Kosakata (词汇): Pengembangan vocabulary bertahap (HSK 1: 150 kata hingga HSK 6: 5000+ kata), word formation patterns, compound words, dan usage dalam konteks formal dan informal\n• Tata Bahasa (语法): Struktur kalimat SVO, measure words (量词), aspect markers (了, 着, 过), modal verbs, complex sentence patterns, dan grammar points spesifik setiap level\n• Kemampuan Menyimak (听力): Pemahaman percakapan sehari-hari, monolog, dialog dengan berbagai aksen Mandarin, speed recognition, dan contextual understanding\n• Kemampuan Membaca (阅读): Comprehension dari teks pendek hingga artikel kompleks, skimming dan scanning techniques, inference skills, dan analisis struktur teks\n• Kemampuan Menulis (书写): Penulisan karakter yang benar, sentence construction, paragraph writing, essay composition untuk level tinggi, dan penggunaan punctuation marks Cina\n• Kemampuan Berbicara (口语): Pronunciation akurat dengan 4 tone Mandarin, conversation skills, presentation abilities, dan kemampuan mengekspresikan opini secara fluent"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus HSK sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian HSK. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian HSK sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "HSK Group Class": {
                "title": "HSK Group Class",
                "description": "Kelas kelompok semi privat dengan jumlah terbatas 5–7 siswa, menghadirkan suasana belajar yang fokus, interaktif, dan kolaboratif.\nMateri mencakup keterampilan mendengar, membaca, menulis (level menengah–lanjut), serta kosakata & tata bahasa sesuai level ujian.\nMelalui diskusi, latihan bersama, dan 模拟考试 (mónǐ kǎoshì), siswa terbiasa dengan format resmi HSK dan lebih siap mencapai target level HSK 1–6.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Mandarin saat ini berdasarkan level HSK mulai dari HSK 1 (pemula) hingga HSK 6 (mahir) sesuai dengan standar internasional yang ditetapkan oleh Hanban. Tes ini mencakup evaluasi terhadap empat keterampilan utama yaitu menyimak (听力), membaca (阅读), menulis (书写), dan berbicara (口语), serta penguasaan karakter Cina (汉字), pinyin, dan tata bahasa Mandarin sesuai level.\nBerdasarkan hasil diagnostik, tim pengajar bahasa Mandarin berpengalaman akan menyusun rencana belajar individual yang disesuaikan dengan target level HSK yang ingin dicapai, tujuan pembelajaran (akademik untuk studi di Tiongkok, profesional untuk bisnis, atau budaya), timeline persiapan ujian, dan learning style preference siswa, termasuk milestone yang jelas dengan fokus pada penguatan area yang lemah dan jadwal latihan intensif dengan authentic Chinese materials."
                    },
                    {
                        "title": "PERTAMA: Understanding HSK Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang format ujian HSK untuk setiap level, termasuk struktur paper, jumlah soal per section, alokasi waktu, dan sistem penilaian yang menggunakan skala 300 poin dengan passing score minimal 180 poin (60% skor). Program ini memberikan penjelasan detail tentang progression antar level HSK, karakteristik soal untuk setiap tingkat kesulitan, dan perbedaan antara HSK written test dan HSK speaking test (HSKK) yang terpisah.\nSiswa akan memahami kriteria penilaian HSK secara menyeluruh, termasuk bagaimana skor dihitung untuk setiap section (listening, reading, writing), bobot penilaian yang equal untuk setiap komponen, format soal yang bervariasi dari pilihan ganda hingga essay writing, serta time management strategies yang efektif untuk setiap level karena durasi ujian yang meningkat dari 40 menit (HSK 1) hingga 140 menit (HSK 6), dengan understanding tentang computer-based test format yang digunakan di beberapa test center modern."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan empat keterampilan utama bahasa Mandarin dengan pendekatan sistematis yang disesuaikan dengan level HSK masing-masing siswa. Program ini dirancang untuk membangun fondasi yang kuat dalam semua aspek bahasa Mandarin secara terintegrasi dan komunikatif.\n• Karakter Cina dan Pinyin (汉字和拼音): Penguasaan karakter sesuai level HSK (HSK 1: 150 karakter, HSK 2: 300, HSK 3: 600, HSK 4: 1200, HSK 5: 2500, HSK 6: 5000+), struktur radikal dan stroke order, sistem pinyin dengan tone marks yang akurat\n• Kosakata (词汇): Pengembangan vocabulary bertahap (HSK 1: 150 kata hingga HSK 6: 5000+ kata), word formation patterns, compound words, dan usage dalam konteks formal dan informal\n• Tata Bahasa (语法): Struktur kalimat SVO, measure words (量词), aspect markers (了, 着, 过), modal verbs, complex sentence patterns, dan grammar points spesifik setiap level\n• Kemampuan Menyimak (听力): Pemahaman percakapan sehari-hari, monolog, dialog dengan berbagai aksen Mandarin, speed recognition, dan contextual understanding\n• Kemampuan Membaca (阅读): Comprehension dari teks pendek hingga artikel kompleks, skimming dan scanning techniques, inference skills, dan analisis struktur teks\n• Kemampuan Menulis (书写): Penulisan karakter yang benar, sentence construction, paragraph writing, essay composition untuk level tinggi, dan penggunaan punctuation marks Cina\n• Kemampuan Berbicara (口语): Pronunciation akurat dengan 4 tone Mandarin, conversation skills, presentation abilities, dan kemampuan mengekspresikan opini secara fluent"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus HSK sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics & Transition to Higher Studies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian HSK. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian HSK sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes HSK?",
                    "a": "Biaya tes HSK (Ujian Kemahiran Bahasa Mandarin) bervariasi tergantung pada level yang diambil (HSK Level 1 hingga Level 6) dan pusat ujian resmi tempat Anda mendaftar. Umumnya, biaya untuk level yang lebih tinggi akan lebih mahal dibandingkan level yang lebih rendah. Selain itu, jika Anda mengambil tes lisan HSKK (Hànyǔ Shuǐpíng Kǒuyǔ Kǎoshì), akan ada biaya terpisah. Untuk informasi biaya yang paling akurat dan terkini, Anda disarankan untuk menghubungi langsung pusat penyelenggara tes HSK resmi di kota Anda (biasanya berlokasi di universitas, lembaga kursus bahasa Mandarin, atau Confucius Institute) atau memeriksa situs web resmi mereka ketika periode pendaftaran dibuka."
                },
                {
                    "q": "Tes HSK diselenggarakan di mana saja di Indonesia?",
                    "a": "Tes HSK diselenggarakan di berbagai kota di Indonesia melalui pusat-pusat ujian resmi yang telah mendapatkan otorisasi dari Hanban/Confucius Institute Headquarters. Beberapa kota besar yang biasanya memiliki pusat tes HSK antara lain Jakarta, Surabaya, Medan, Bandung, Semarang, Yogyakarta, dan kota-kota lain yang memiliki komunitas atau institusi pendidikan bahasa Mandarin yang aktif. Daftar lengkap pusat ujian resmi HSK di Indonesia dan informasi kontaknya dapat ditemukan melalui situs web resmi Chinese Testing International (www.chinesetest.cn) atau dengan menghubungi Confucius Institute atau lembaga bahasa Mandarin terkemuka di wilayah Anda."
                },
                {
                    "q": "Kapan jadwal tes HSK biasanya diadakan?",
                    "a": "Tes HSK (baik paper-based maupun internet-based) diadakan beberapa kali dalam setahun. Jadwal tes HSK ditentukan secara global oleh Chinese Testing International (CTI) dan biasanya diumumkan di awal tahun untuk sepanjang tahun tersebut. Frekuensi tes bisa berbeda antar pusat ujian; beberapa pusat mungkin menyelenggarakan tes hampir setiap bulan, sementara yang lain mungkin hanya beberapa kali setahun. Anda dapat menemukan kalender jadwal tes HSK resmi di situs web CTI (www.chinesetest.cn). Pastikan juga untuk memeriksa jadwal spesifik yang ditawarkan oleh pusat tes HSK terdekat di kota Anda, karena mereka akan mengikuti jadwal global tersebut namun mungkin tidak menawarkan semua tanggal. Pendaftaran biasanya dibuka beberapa minggu hingga beberapa bulan sebelum tanggal tes."
                },
                {
                    "q": "Sertifikat HSK valid berapa lama?",
                    "a": "Sertifikat hasil tes HSK Anda berlaku selama dua (2) tahun terhitung sejak tanggal Anda mengambil tes. Tanggal tes akan tercantum pada sertifikat Anda. Periode validitas dua tahun ini penting untuk diperhatikan, terutama jika Anda berencana menggunakan sertifikat HSK untuk aplikasi beasiswa, pendaftaran universitas di Tiongkok, atau keperluan profesional. Setelah dua tahun, meskipun Anda masih memiliki sertifikat tersebut, beberapa institusi mungkin menganggapnya sudah tidak relevan lagi untuk menunjukkan tingkat kemahiran bahasa Mandarin Anda saat ini dan mungkin meminta Anda untuk mengambil ulang tes. Selalu periksa persyaratan validitas skor dari institusi yang Anda tuju."
                },
                {
                    "q": "Ada berapa level dalam tes HSK dan apa perbedaannya?",
                    "a": "Struktur HSK yang umum dikenal (sebelum standar baru 2021) terdiri dari enam level tertulis: HSK Level 1: Menguasai 150 kata dasar, mampu memahami dan menggunakan frasa bahasa Mandarin yang sangat sederhana. HSK Level 2: Menguasai 300 kata, mampu berkomunikasi secara sederhana dan langsung mengenai topik sehari-hari yang familiar. HSK Level 3: Menguasai 600 kata, mampu berkomunikasi pada level dasar untuk keperluan sehari-hari, akademis, dan pekerjaan. Mampu berkomunikasi saat bepergian di Tiongkok. HSK Level 4: Menguasai 1200 kata, mampu berdiskusi tentang berbagai topik dalam bahasa Mandarin dan berinteraksi dengan penutur asli pada tingkat kelancaran yang tinggi. HSK Level 5: Menguasai 2500 kata, mampu membaca koran dan majalah berbahasa Mandarin, menikmati film dan drama berbahasa Mandarin, serta menyampaikan pidato lengkap. HSK Level 6 (Paling Sulit): Menguasai 5000 kata atau lebih, mampu dengan mudah memahami informasi lisan atau tulisan dalam bahasa Mandarin dan mengekspresikan diri secara fasih baik lisan maupun tulisan. Penting untuk dicatat bahwa telah diperkenalkan standar baru “Chinese Proficiency Grading Standards for International Chinese Language Education” yang membagi kemahiran menjadi “Tiga Tahap dan Sembilan Level”. Namun, implementasi tes berdasarkan standar baru ini masih bertahap. Saat ini, tes HSK Level 1-6 yang lama masih banyak diselenggarakan. Pastikan untuk memeriksa format dan level yang berlaku saat Anda mendaftar."
                },
                {
                    "q": "Apa saja komponen yang diujikan dalam tes HSK (dan HSKK jika relevan)?",
                    "a": "Tes HSK (Level 1-6 yang umum) fokus pada keterampilan reseptif dan produktif terbatas: HSK Level 1 & 2: Terdiri dari dua bagian: Mendengarkan (Listening) dan Membaca (Reading). HSK Level 3, 4, 5, & 6: Terdiri dari tiga bagian: Mendengarkan (Listening), Membaca (Reading), dan Menulis (Writing). Bagian menulis bervariasi dari menyusun kalimat (Level 3) hingga menulis esai pendek (Level 6). Selain tes HSK tertulis, ada juga tes kemahiran berbicara yang terpisah, yaitu HSKK (Hànyǔ Shuǐpíng Kǒuyǔ Kǎoshì). Tes HSKK dibagi menjadi tiga level: HSKK Dasar (Beginner) HSKK Menengah (Intermediate) HSKK Mahir (Advanced) Beberapa institusi atau program mungkin mensyaratkan skor HSK dan HSKK."
                },
                {
                    "q": "Apa manfaat memiliki sertifikat HSK?",
                    "a": "Memiliki sertifikat HSK memberikan berbagai manfaat signifikan: Studi di Tiongkok: Merupakan syarat utama untuk mendaftar ke universitas atau institusi pendidikan tinggi di Tiongkok. Level HSK yang dibutuhkan bervariasi tergantung program dan jenjang studi. Beasiswa: Banyak program beasiswa untuk studi di Tiongkok (seperti Beasiswa Pemerintah Tiongkok/CGS, Beasiswa Confucius Institute) mensyaratkan sertifikat HSK dengan skor tertentu. Peluang Karir: Meningkatkan daya saing di pasar kerja, terutama di perusahaan Tiongkok, perusahaan multinasional yang berbisnis dengan Tiongkok, atau industri pariwisata dan perdagangan internasional. Pengembangan Profesional: Menunjukkan kemampuan berbahasa Mandarin yang dapat mendukung kemajuan karir. Pengukuran Kemampuan: Sebagai standar internasional untuk mengukur tingkat kemahiran bahasa Mandarin Anda. Kepercayaan Diri: Memberikan validasi atas usaha belajar Anda dan meningkatkan kepercayaan diri dalam menggunakan bahasa Mandarin."
                },
                {
                    "q": "Di mana saya bisa mendapatkan contoh soal HSK?",
                    "a": "Sumber resmi dan terpercaya untuk mendapatkan contoh soal HSK adalah: Situs Web Resmi Chinese Testing International (www.chinesetest.cn): Situs ini menyediakan contoh soal (sample papers/mock tests) untuk semua level HSK dan HSKK. Anda dapat mengunduhnya secara gratis untuk berlatih. Buku-buku Persiapan HSK Resmi: Hanban/CTI bekerja sama dengan berbagai penerbit (seperti Beijing Language and Culture University Press) untuk menerbitkan buku-buku persiapan HSK resmi yang berisi tes latihan penuh, analisis soal, dan materi pembelajaran. Aplikasi Mobile Resmi: Ada beberapa aplikasi mobile resmi atau yang direkomendasikan oleh Hanban/CTI yang menyediakan latihan soal HSK. Materi dari Confucius Institute: Confucius Institute di berbagai negara seringkali menyediakan sumber daya atau kursus persiapan HSK yang menggunakan contoh soal yang relevan."
                },
                {
                    "q": "Jadwal kursus persiapan HSK di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan HSK yang komprehensif untuk semua level, dari HSK 1 hingga HSK 6, serta persiapan HSKK jika diperlukan. Kursus kami dirancang untuk membantu Anda menguasai kosakata, tata bahasa, karakter Hanzi, serta strategi untuk mengerjakan bagian mendengarkan, membaca, dan menulis (untuk level 3 ke atas) secara efektif. Kami menyediakan jadwal yang fleksibel, termasuk kelas grup dan sesi privat. Biaya kursus akan bergantung pada level HSK yang dituju, durasi program, dan jenis kelas. Untuk informasi terbaru mengenai jadwal, program, dan biaya kursus persiapan HSK, silakan hubungi tim konsultan pendidikan kami: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri untuk kursus HSK di Ultimate Education?",
                    "a": "Di Ultimate Education, kami berupaya keras untuk memberikan pengalaman belajar terbaik dengan mencocokkan Anda dengan tutor HSK yang paling sesuai. Tim tutor kami terdiri dari pengajar bahasa Mandarin yang berpengalaman, banyak di antaranya adalah penutur asli atau memiliki sertifikasi HSK level tertinggi dan kualifikasi mengajar. Meskipun pemilihan tutor spesifik secara langsung oleh siswa belum menjadi fitur standar, kami akan mempertimbangkan preferensi Anda dan memastikan Anda mendapatkan bimbingan dari tutor yang memiliki keahlian untuk level HSK target Anda dan gaya mengajar yang efektif."
                }
            ]
        }
    },
    {
        "slug": "delf",
        "originalSlug": "tes-delf",
        "meta": {
            "title": "DELF",
            "description": "Raih skor DELF impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">DELF</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "DELF Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": []
        },
        "pricing": {
            "DELF Private CLASS": {
                "title": "DELF Private CLASS",
                "description": "Program DELF Private (One-on-One) menawarkan pembelajaran yang lebih personal dan intensif.Tutor menargetkan langsung area yang perlu ditingkatkan (misalnya Speaking untuk wawancara atau Writing untuk surat resmi).Materi disesuaikan dengan kebutuhan individu, baik untuk studi, pekerjaan, atau persiapan migrasi.Kelas tersedia offline maupun online dengan jadwal fleksibel.Cocok untuk target level A1, A2, B1, hingga B2.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Prancis saat ini berdasarkan Common European Framework of Reference (CEFR) mulai dari level A1 (pemula) hingga B2 (menengah atas) sesuai dengan format ujian DELF. Tes ini dirancang untuk mengidentifikasi kekuatan dan area yang perlu diperkuat dalam setiap komponen DELF.\n• Evaluasi 4 Compétences: Assessment terhadap compréhension orale (menyimak), compréhension écrite (membaca), production écrite (menulis), dan production orale (berbicara)\n• Level Determination: Penentuan starting point yang tepat berdasarkan CEFR framework (A1, A2, B1, B2) sesuai kemampuan siswa saat ini\n• French Phonetics Analysis: Evaluasi pronunciation, accent français, dan kemampuan mengenali sounds yang challenging untuk Indonesian speakers\n• Grammar Foundation Check: Assessment terhadap penguasaan conjugaison, temps verbaux, dan structures grammaticales fundamentales\n• Cultural Awareness Test: Pengukuran familiarity dengan French culture, customs, dan social contexts yang relevant untuk DELF\n• Personalized Learning Path: Rencana belajar individual dengan target DELF level, timeline realistic, dan focus areas berdasarkan hasil diagnostic"
                    },
                    {
                        "title": "PERTAMA: Understanding DELF Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur ujian DELF untuk setiap level dengan format yang konsisten namun kompleksitas yang meningkat. Program ini memberikan insight detail tentang durasi ujian, sistem penilaian, dan karakteristik soal untuk setiap level DELF dari A1 hingga B2.\n• DELF A1 Structure: 4 épreuves dengan durasi total 80 menit, seuil de réussite 50/100 dengan minimum 5/25 per compétence\n• DELF A2 Structure: Format serupa A1 namun durasi 100 menit dengan complexity yang meningkat dalam vocabulary dan grammar\n• DELF B1 Structure: 4 épreuves, durasi 105 menit, requiring ability untuk express opinions dan handle complex situations\n• DELF B2 Structure: Level paling advanced dengan durasi 150 menit, demanding sophisticated argumentation dan critical thinking\n• Scoring System: Understanding of notation sur 25 points per compétence, compensation possibilities, dan passing requirements\n• Test Day Procedures: Panduan lengkap tentang registration, test center protocols, dan what to expect pada examination day"
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan empat kompetens yang diujikan dalam DELF dengan pendekatan komunikatif dan immersive French learning. Program ini dirancang untuk membangun French language proficiency yang solid sesuai dengan standar européen dan authentic French communication patterns.\n• Compréhension Orale: Listening skills dari conversations quotidiennes, annonces publiques, émissions radio hingga discours académiques dengan berbagai accents français\n• Compréhension Écrite: Reading comprehension dari messages simples, articles de presse, textes littéraires, dengan focus pada skimming, scanning, dan inference\n• Production Écrite: Writing skills dari messages personnels, lettres formelles, essays argumentatifs dengan proper French discourse markers dan register approprié\n• Production Orale: Speaking competence melalui entretien dirigé, monologue suivi, dan exercice en interaction dengan pronunciation et intonation françaises\n• Grammaire Française: Systematic grammar building dari conjugaisons de base hingga subjonctif, concordance des temps, dan complex structures\n• Vocabulaire et Expression: Vocabulary expansion dengan thematic approach, expressions idiomatiques, dan register variations dari familier ke soutenu\n• Phonétique et Prononciation: French phonetic system, liaisons, accent tonique, dan correction of Indonesian speaker common errors"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus DELF sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian DELF. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian DELF sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "DELF Customized Class": {
                "title": "DELF Customized Class",
                "description": "Program DELF Customized Class cocok bagi peserta dengan waktu terbatas atau tujuan khusus.Paket fleksibel (kelipatan 3 sesi) memungkinkan fokus pada keterampilan tertentu, misalnya Listening intensif atau Speaking untuk presentasi.Kelas sepenuhnya personnalisé (personalized) dari segi materi, strategi, hingga jadwal.Efektif untuk mahasiswa, profesional, maupun individu yang ingin persiapan cepat dan tepat untuk ujian DELF.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik komprehensif yang mengukur tingkat kemampuan bahasa Prancis saat ini berdasarkan Common European Framework of Reference (CEFR) mulai dari level A1 (pemula) hingga B2 (menengah atas) sesuai dengan format ujian DELF. Tes ini dirancang untuk mengidentifikasi kekuatan dan area yang perlu diperkuat dalam setiap komponen DELF.\n• Evaluasi 4 Compétences: Assessment terhadap compréhension orale (menyimak), compréhension écrite (membaca), production écrite (menulis), dan production orale (berbicara)\n• Level Determination: Penentuan starting point yang tepat berdasarkan CEFR framework (A1, A2, B1, B2) sesuai kemampuan siswa saat ini\n• French Phonetics Analysis: Evaluasi pronunciation, accent français, dan kemampuan mengenali sounds yang challenging untuk Indonesian speakers\n• Grammar Foundation Check: Assessment terhadap penguasaan conjugaison, temps verbaux, dan structures grammaticales fundamentales\n• Cultural Awareness Test: Pengukuran familiarity dengan French culture, customs, dan social contexts yang relevant untuk DELF\n• Personalized Learning Path: Rencana belajar individual dengan target DELF level, timeline realistic, dan focus areas berdasarkan hasil diagnostic"
                    },
                    {
                        "title": "PERTAMA: Understanding DELF Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang struktur ujian DELF untuk setiap level dengan format yang konsisten namun kompleksitas yang meningkat. Program ini memberikan insight detail tentang durasi ujian, sistem penilaian, dan karakteristik soal untuk setiap level DELF dari A1 hingga B2.\n• DELF A1 Structure: 4 épreuves dengan durasi total 80 menit, seuil de réussite 50/100 dengan minimum 5/25 per compétence\n• DELF A2 Structure: Format serupa A1 namun durasi 100 menit dengan complexity yang meningkat dalam vocabulary dan grammar\n• DELF B1 Structure: 4 épreuves, durasi 105 menit, requiring ability untuk express opinions dan handle complex situations\n• DELF B2 Structure: Level paling advanced dengan durasi 150 menit, demanding sophisticated argumentation dan critical thinking\n• Scoring System: Understanding of notation sur 25 points per compétence, compensation possibilities, dan passing requirements\n• Test Day Procedures: Panduan lengkap tentang registration, test center protocols, dan what to expect pada examination day"
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan empat kompetens yang diujikan dalam DELF dengan pendekatan komunikatif dan immersive French learning. Program ini dirancang untuk membangun French language proficiency yang solid sesuai dengan standar européen dan authentic French communication patterns.\n• Compréhension Orale: Listening skills dari conversations quotidiennes, annonces publiques, émissions radio hingga discours académiques dengan berbagai accents français\n• Compréhension Écrite: Reading comprehension dari messages simples, articles de presse, textes littéraires, dengan focus pada skimming, scanning, dan inference\n• Production Écrite: Writing skills dari messages personnels, lettres formelles, essays argumentatifs dengan proper French discourse markers dan register approprié\n• Production Orale: Speaking competence melalui entretien dirigé, monologue suivi, dan exercice en interaction dengan pronunciation et intonation françaises\n• Grammaire Française: Systematic grammar building dari conjugaisons de base hingga subjonctif, concordance des temps, dan complex structures\n• Vocabulaire et Expression: Vocabulary expansion dengan thematic approach, expressions idiomatiques, dan register variations dari familier ke soutenu\n• Phonétique et Prononciation: French phonetic system, liaisons, accent tonique, dan correction of Indonesian speaker common errors"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus DELF sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian DELF. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian DELF sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes DELF?",
                    "a": "Biaya tes DELF (Diplôme d’Études en Langue Française) bervariasi tergantung pada level yang diambil (A1, A2, B1, B2 untuk DELF Tout Public/Junior/Scolaire; atau DELF Pro) dan pusat ujian resmi (biasanya Institut Français d’Indonésie – IFI atau Alliance Française) tempat Anda mendaftar. Umumnya, biaya untuk level yang lebih tinggi cenderung sedikit lebih mahal. Untuk informasi biaya yang paling akurat dan terkini, sangat disarankan untuk mengunjungi situs web resmi IFI atau Alliance Française di kota Anda, atau menghubungi mereka secara langsung. Biaya biasanya diumumkan menjelang periode pendaftaran setiap sesi ujian."
                },
                {
                    "q": "Tes DELF diselenggarakan di mana saja di Indonesia?",
                    "a": "Tes DELF di Indonesia umumnya diselenggarakan di pusat-pusat ujian resmi yang telah diakreditasi oleh France Éducation international. Lokasi utama penyelenggaraan tes adalah: Institut Français d’Indonésie (IFI): Berlokasi di Jakarta, Bandung, Surabaya, dan Yogyakarta. Alliance Française (AF): Berlokasi di beberapa kota lain seperti Medan, Denpasar, Semarang, dan Balikpapan. Daftar lengkap pusat ujian resmi dan jadwal ujian di masing-masing lokasi dapat ditemukan di situs web IFI atau situs web masing-masing cabang Alliance Française."
                },
                {
                    "q": "Kapan jadwal tes DELF biasanya diadakan?",
                    "a": "Tes DELF umumnya diadakan beberapa kali dalam setahun. Jadwal yang paling umum adalah: Sesi Maret Sesi Juni Sesi November/Desember Namun, ketersediaan sesi dan tanggal pasti dapat bervariasi antar pusat ujian (IFI atau Alliance Française). Setiap pusat ujian akan mengumumkan jadwal sesi ujian dan periode pendaftaran mereka sendiri. Anda perlu memeriksa langsung ke situs web atau menghubungi pusat ujian terdekat untuk informasi jadwal yang paling akurat."
                },
                {
                    "q": "Sertifikat DELF valid berapa lama?",
                    "a": "Sertifikat DELF (Diplôme d’Études en Langue Française) adalah diploma resmi yang dikeluarkan oleh Kementerian Pendidikan Nasional Prancis dan berlaku seumur hidup. Artinya, setelah Anda lulus dan mendapatkan sertifikat DELF untuk level tertentu (A1, A2, B1, atau B2), sertifikat tersebut tidak memiliki tanggal kedaluwarsa. Ini berbeda dengan beberapa tes kemahiran bahasa lain yang memiliki masa berlaku terbatas. Validitas seumur hidup ini menjadikan DELF sebagai investasi jangka panjang yang berharga untuk portofolio akademis atau profesional Anda."
                },
                {
                    "q": "Apa saja tingkatan/level dalam ujian DELF (misalnya A1, A2, B1, B2)?",
                    "a": "Ujian DELF terdiri dari empat level independen yang sesuai dengan Kerangka Acuan Umum Eropa untuk Bahasa (CEFR – Common European Framework of Reference for Languages): DELF A1 (Tingkat Penemuan/Beginner): Menilai kemampuan dasar untuk berinteraksi secara sederhana, memperkenalkan diri, dan memahami ungkapan sehari-hari. DELF A2 (Tingkat Dasar/Elementary): Menilai kemampuan untuk berkomunikasi dalam tugas-tugas sederhana dan rutin yang membutuhkan pertukaran informasi langsung mengenai topik yang familiar. DELF B1 (Tingkat Menengah/Intermediate): Menilai kemampuan untuk memahami poin-poin utama ketika bahasa yang jelas dan standar digunakan, mengatasi situasi yang mungkin timbul saat bepergian, menghasilkan teks sederhana tentang topik yang familiar, dan menceritakan pengalaman. DELF B2 (Tingkat Mandiri/Upper Intermediate): Menilai kemampuan untuk memahami ide-ide utama dari teks kompleks, berinteraksi dengan tingkat kelancaran dan spontanitas tertentu dengan penutur asli, dan menghasilkan teks yang jelas dan terperinci tentang berbagai subjek serta menjelaskan sudut pandang. Untuk level yang lebih tinggi (C1 dan C2), ujiannya disebut DALF (Diplôme Approfondi de Langue Française)."
                },
                {
                    "q": "Keterampilan apa saja yang diuji dalam setiap level DELF?",
                    "a": "Setiap level ujian DELF (A1, A2, B1, B2) mengevaluasi empat keterampilan berbahasa utama: Compréhension de l’oral (Pemahaman Mendengarkan): Kemampuan memahami bahasa Prancis lisan melalui rekaman audio (misalnya, percakapan, pengumuman, siaran radio). Compréhension des écrits (Pemahaman Membaca): Kemampuan memahami berbagai jenis teks tertulis dalam bahasa Prancis (misalnya, artikel, surat, iklan). Production écrite (Produksi Tulisan): Kemampuan menulis dalam bahasa Prancis untuk berbagai tujuan (misalnya, mengisi formulir, menulis surat/email, esai pendek, atau artikel, tergantung levelnya). Production orale (Produksi Lisan): Kemampuan berbicara dalam bahasa Prancis, biasanya melalui interaksi dengan penguji. Ini bisa berupa wawancara terstruktur, presentasi singkat, atau diskusi/permainan peran, tergantung levelnya. Bobot penilaian untuk setiap keterampilan biasanya sama, dan kandidat harus mencapai skor minimal tertentu secara keseluruhan dan per bagian untuk lulus."
                },
                {
                    "q": "Apa manfaat memiliki sertifikat DELF?",
                    "a": "Memiliki sertifikat DELF memberikan berbagai keuntungan, antara lain: Pengakuan Internasional: DELF adalah diploma resmi yang diakui secara internasional oleh banyak negara, institusi pendidikan, dan perusahaan sebagai bukti kemahiran berbahasa Prancis. Studi di Prancis atau Negara Frankofon: Sertifikat DELF B2 (atau terkadang B1) seringkali menjadi persyaratan bahasa untuk masuk ke universitas-universitas di Prancis atau negara-negara berbahasa Prancis lainnya tanpa perlu mengikuti tes bahasa tambahan dari universitas tersebut. Peluang Karir: Meningkatkan prospek karir di perusahaan Prancis atau perusahaan internasional yang menggunakan bahasa Prancis sebagai bahasa kerja, serta di bidang pariwisata, diplomasi, dan organisasi internasional. Keperluan Imigrasi: Dapat menjadi aset untuk aplikasi imigrasi ke negara-negara berbahasa Prancis seperti Kanada (Quebec). Pengembangan Pribadi: Merupakan pencapaian pribadi dan validasi objektif atas kemampuan bahasa Prancis Anda. Validitas Seumur Hidup: Seperti yang disebutkan, diploma ini berlaku seumur hidup."
                },
                {
                    "q": "Di mana saya bisa mendapatkan contoh soal DELF?",
                    "a": "Untuk mendapatkan contoh soal DELF yang resmi dan representatif, Anda dapat merujuk ke sumber-sumber berikut: Situs Web France Éducation international (sebelumnya CIEP): Sebagai lembaga yang bertanggung jawab atas DELF/DALF, situs web mereka (www.france-education-international.fr) biasanya menyediakan contoh soal (sujets zéro atau spécimens d’épreuves) untuk setiap level DELF. Situs Web Institut Français d’Indonésie (IFI) atau Alliance Française: Pusat ujian lokal seringkali juga menyediakan tautan ke contoh soal atau materi persiapan di situs web mereka. Buku-buku Persiapan DELF: Terdapat banyak buku persiapan DELF yang diterbitkan oleh penerbit Prancis ternama (seperti Didier, Hachette FLE, CLE International) yang berisi latihan soal, simulasi ujian, dan tips strategi. Sumber Daya Online Lainnya: Beberapa situs web pendidikan dan platform belajar bahasa Prancis juga menawarkan latihan soal DELF, namun pastikan kualitas dan kesesuaiannya."
                },
                {
                    "q": "Jadwal kursus persiapan DELF di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan DELF yang dirancang untuk membantu Anda sukses dalam menghadapi ujian DELF pada level yang Anda targetkan (A1, A2, B1, atau B2). Kursus kami fokus pada pengembangan keempat keterampilan berbahasa (mendengarkan, membaca, menulis, berbicara) sesuai format ujian DELF, serta penguasaan tata bahasa dan kosakata yang relevan. Kami menyediakan pilihan jadwal yang fleksibel, termasuk kelas grup dan sesi privat yang dapat disesuaikan. Biaya kursus akan bervariasi tergantung level, durasi, dan jenis kelas. Untuk informasi terkini mengenai jadwal kelas persiapan DELF, pilihan program, dan rincian biaya, silakan hubungi tim konsultan pendidikan kami melalui: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri untuk kursus DELF di Ultimate Education?",
                    "a": "Di Ultimate Education, kami berkomitmen mencocokkan Anda dengan tutor yang paling sesuai untuk kebutuhan persiapan DELF Anda. Meskipun pemilihan tutor spesifik secara langsung oleh siswa belum menjadi fitur standar, kami akan mempertimbangkan preferensi Anda. Tim tutor DELF kami adalah pengajar bahasa Prancis yang berpengalaman, banyak di antaranya adalah penutur asli atau memiliki kualifikasi DELF/DALF tingkat tinggi serta pengalaman mengajar yang relevan. Kami akan memastikan Anda mendapatkan bimbingan berkualitas untuk mencapai target Anda."
                }
            ]
        }
    },
    {
        "slug": "jlpt",
        "originalSlug": "tes-jlpt",
        "meta": {
            "title": "JLPT",
            "description": "Raih skor JLPT impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">JLPT</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "JLPT Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": []
        },
        "pricing": {
            "JLPT Private CLASS": {
                "title": "JLPT Private CLASS",
                "description": "Program JLPT Private 1-on-1 ditujukan untuk pembelajaran yang lebih personal dan intensif.\nTutor akan menargetkan langsung area yang perlu diperkuat, misalnya 漢字 (kanji), 文法 (bunpō), atau 聴解 (chōkai).\nMateri dan strategi belajar akan カスタマイズ (kasutamaizu / disesuaikan) dengan kemampuan awal siswa dan target level JLPT (N5–N1).\nKelas tersedia dalam format オンライン (onrain / online) maupun 対面 (taimen / tatap muka), dengan jadwal fleksibel sesuai kebutuhan siswa.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur tingkat kemampuan bahasa Jepang saat ini berdasarkan level JLPT mulai dari N5 (pemula) hingga N1 (mahir). Tes ini mencakup evaluasi terhadap tiga komponen utama JLPT yaitu pengetahuan bahasa dan tata bahasa (言語知識・文法), kemampuan membaca (読解), dan kemampuan menyimak (聴解), serta penguasaan hiragana, katakana, dan kanji sesuai level.\nBerdasarkan hasil diagnostik, tim pengajar bahasa Jepang berpengalaman akan menyusun rencana belajar individual yang disesuaikan dengan target level JLPT yang ingin dicapai, latar belakang pembelajaran bahasa Jepang sebelumnya, tujuan belajar (akademik, profesional, atau budaya), dan jangka waktu persiapan ujian, termasuk milestone pembelajaran yang jelas dengan fokus pada area yang membutuhkan penguatan khusus dan jadwal latihan intensif sesuai dengan pola ujian JLPT."
                    },
                    {
                        "title": "PERTAMA: Understanding JPLT Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang format ujian JLPT untuk setiap level, termasuk struktur soal, alokasi waktu untuk setiap section, dan sistem penilaian yang menggunakan skala skor dengan passing score yang berbeda untuk setiap level (N5: 80/180, N4: 90/180, N3: 95/180, N2: 90/180, N1: 100/180).\nProgram ini memberikan penjelasan detail tentang karakteristik setiap level JLPT, perbedaan tingkat kesulitan antar level, dan progression skills yang diperlukan untuk naik ke level berikutnya. Siswa akan memahami kriteria penilaian JLPT secara menyeluruh, termasuk sistem penilaian berbasis Item Response Theory (IRT) yang digunakan JLPT, pentingnya mencapai minimum passing score di setiap section, strategi mengerjakan berbagai jenis soal (pilihan ganda dengan 4 opsi), serta time management yang efektif untuk setiap bagian ujian agar dapat memaksimalkan skor dalam kondisi ujian yang sesungguhnya."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan tiga komponen utama yang diujikan dalam JLPT dengan pendekatan sistematis\nyang mencakup: Huruf dan Kanji (文字・漢字): Penguasaan hiragana dan katakana lengkap, kanji sesuai level JLPT (N5: 80 kanji, N4: 168 kanji, N3: 370 kanji, N2: 1000 kanji, N1: 2000+ kanji), cara baca on’yomi dan kun’yomi, serta penggunaan kanji dalam konteks. Kosakata (語彙): Pengembangan vocabulary sesuai level (N5: 800 kata, N4: 1500 kata, N3: 3750 kata, N2: 6000 kata, N1: 10000+ kata), sinonim dan antonim, collocations, dan penggunaan kata dalam situasi formal dan informal. Tata Bahasa (文法): Pola kalimat dan struktur grammar sesuai level, partikel (助詞), auxiliary verbs (助動詞), bentuk kata kerja (動詞の活用), keigo (bahasa hormat), dan ekspresi idiomatik. Kemampuan Membaca (読解): Pemahaman teks pendek hingga panjang, identifikasi ide pokok dan detail, inferensi makna, dan analisis struktur teks berbagai genre (narasi, eksposisi, argumentasi). Kemampuan Menyimak (聴解): Pemahaman percakapan sehari-hari, monolog, pengumuman, dan diskusi, dengan fokus pada kemampuan memahami konteks, nuansa, dan informasi spesifik dari audio berbagai kecepatan dan aksen. Kemampuan Komunikatif: Penggunaan bahasa Jepang dalam situasi nyata, pemahaman budaya Jepang dalam berkomunikasi, dan aplikasi grammar dalam speaking dan writing practice.\nSiswa akan mengembangkan kemampuan terintegrasi melalui metode pembelajaran yang menggabungkan drill practice, contextual learning, dan authentic materials dari budaya Jepang untuk memastikan pemahaman yang mendalam dan aplikatif."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus JLPT sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian JPLT. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian JPLT sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "JLPT Customized Class": {
                "title": "JLPT Customized Class",
                "description": "Program JLPT Customized Class cocok untuk mereka yang memiliki waktu terbatas atau ingin fokus pada keterampilan tertentu.\nDengan paket fleksibel (kelipatan 3 sesi), siswa bisa memilih fokus pembelajaran, misalnya 聴解 (chōkai) intensif atau 読解 (dokkai) tingkat lanjut.\nKelas ini sepenuhnya パーソナライズ (pāsonaraizu / personalized): mulai dari materi, fokus keterampilan, hingga strategi ujian, sehingga sangat efektif untuk mahasiswa, profesional, maupun siapa saja yang ingin meraih 合格 (gōkaku / kelulusan) JLPT sesuai target.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur tingkat kemampuan bahasa Jepang saat ini berdasarkan level JLPT mulai dari N5 (pemula) hingga N1 (mahir). Tes ini mencakup evaluasi terhadap tiga komponen utama JLPT yaitu pengetahuan bahasa dan tata bahasa (言語知識・文法), kemampuan membaca (読解), dan kemampuan menyimak (聴解), serta penguasaan hiragana, katakana, dan kanji sesuai level.\nBerdasarkan hasil diagnostik, tim pengajar bahasa Jepang berpengalaman akan menyusun rencana belajar individual yang disesuaikan dengan target level JLPT yang ingin dicapai, latar belakang pembelajaran bahasa Jepang sebelumnya, tujuan belajar (akademik, profesional, atau budaya), dan jangka waktu persiapan ujian, termasuk milestone pembelajaran yang jelas dengan fokus pada area yang membutuhkan penguatan khusus dan jadwal latihan intensif sesuai dengan pola ujian JLPT."
                    },
                    {
                        "title": "PERTAMA: Understanding JPLT Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang format ujian JLPT untuk setiap level, termasuk struktur soal, alokasi waktu untuk setiap section, dan sistem penilaian yang menggunakan skala skor dengan passing score yang berbeda untuk setiap level (N5: 80/180, N4: 90/180, N3: 95/180, N2: 90/180, N1: 100/180).\nProgram ini memberikan penjelasan detail tentang karakteristik setiap level JLPT, perbedaan tingkat kesulitan antar level, dan progression skills yang diperlukan untuk naik ke level berikutnya. Siswa akan memahami kriteria penilaian JLPT secara menyeluruh, termasuk sistem penilaian berbasis Item Response Theory (IRT) yang digunakan JLPT, pentingnya mencapai minimum passing score di setiap section, strategi mengerjakan berbagai jenis soal (pilihan ganda dengan 4 opsi), serta time management yang efektif untuk setiap bagian ujian agar dapat memaksimalkan skor dalam kondisi ujian yang sesungguhnya."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan tiga komponen utama yang diujikan dalam JLPT dengan pendekatan sistematis\nyang mencakup: Huruf dan Kanji (文字・漢字): Penguasaan hiragana dan katakana lengkap, kanji sesuai level JLPT (N5: 80 kanji, N4: 168 kanji, N3: 370 kanji, N2: 1000 kanji, N1: 2000+ kanji), cara baca on’yomi dan kun’yomi, serta penggunaan kanji dalam konteks. Kosakata (語彙): Pengembangan vocabulary sesuai level (N5: 800 kata, N4: 1500 kata, N3: 3750 kata, N2: 6000 kata, N1: 10000+ kata), sinonim dan antonim, collocations, dan penggunaan kata dalam situasi formal dan informal. Tata Bahasa (文法): Pola kalimat dan struktur grammar sesuai level, partikel (助詞), auxiliary verbs (助動詞), bentuk kata kerja (動詞の活用), keigo (bahasa hormat), dan ekspresi idiomatik. Kemampuan Membaca (読解): Pemahaman teks pendek hingga panjang, identifikasi ide pokok dan detail, inferensi makna, dan analisis struktur teks berbagai genre (narasi, eksposisi, argumentasi). Kemampuan Menyimak (聴解): Pemahaman percakapan sehari-hari, monolog, pengumuman, dan diskusi, dengan fokus pada kemampuan memahami konteks, nuansa, dan informasi spesifik dari audio berbagai kecepatan dan aksen. Kemampuan Komunikatif: Penggunaan bahasa Jepang dalam situasi nyata, pemahaman budaya Jepang dalam berkomunikasi, dan aplikasi grammar dalam speaking dan writing practice.\nSiswa akan mengembangkan kemampuan terintegrasi melalui metode pembelajaran yang menggabungkan drill practice, contextual learning, dan authentic materials dari budaya Jepang untuk memastikan pemahaman yang mendalam dan aplikatif."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus JLPT sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian JLPT. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian JLPT sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Bronze": {
                "title": "Bronze",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "JLPT Group Class": {
                "title": "JLPT Group Class",
                "description": "Program JLPT Group Class menggunakan metode semi-privat dengan jumlah peserta terbatas (5–7 siswa). Suasana belajar lebih fokus, interaktif, dan menyenangkan.\nPeserta akan mempelajari seluruh materi JLPT sesuai level (N5–N1), mencakup 語彙 (goi), 文法 (bunpō), 読解 (dokkai), 聴解 (chōkai), serta latihan soal.\nMelalui diskusi, latihan bersama, dan 模擬試験 (mogi shiken), siswa akan terbiasa dengan format JLPT dan lebih percaya diri menghadapi ujian resmi.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai pembelajaran, setiap siswa akan mengikuti tes diagnostik menyeluruh yang mengukur tingkat kemampuan bahasa Jepang saat ini berdasarkan level JLPT mulai dari N5 (pemula) hingga N1 (mahir). Tes ini mencakup evaluasi terhadap tiga komponen utama JLPT yaitu pengetahuan bahasa dan tata bahasa (言語知識・文法), kemampuan membaca (読解), dan kemampuan menyimak (聴解), serta penguasaan hiragana, katakana, dan kanji sesuai level.\nBerdasarkan hasil diagnostik, tim pengajar bahasa Jepang berpengalaman akan menyusun rencana belajar individual yang disesuaikan dengan target level JLPT yang ingin dicapai, latar belakang pembelajaran bahasa Jepang sebelumnya, tujuan belajar (akademik, profesional, atau budaya), dan jangka waktu persiapan ujian, termasuk milestone pembelajaran yang jelas dengan fokus pada area yang membutuhkan penguatan khusus dan jadwal latihan intensif sesuai dengan pola ujian JLPT."
                    },
                    {
                        "title": "PERTAMA: Understanding JPLT Exam Structure & Assessment Criteria",
                        "content": "Siswa akan memperoleh pemahaman mendalam tentang format ujian JLPT untuk setiap level, termasuk struktur soal, alokasi waktu untuk setiap section, dan sistem penilaian yang menggunakan skala skor dengan passing score yang berbeda untuk setiap level (N5: 80/180, N4: 90/180, N3: 95/180, N2: 90/180, N1: 100/180).\nProgram ini memberikan penjelasan detail tentang karakteristik setiap level JLPT, perbedaan tingkat kesulitan antar level, dan progression skills yang diperlukan untuk naik ke level berikutnya. Siswa akan memahami kriteria penilaian JLPT secara menyeluruh, termasuk sistem penilaian berbasis Item Response Theory (IRT) yang digunakan JLPT, pentingnya mencapai minimum passing score di setiap section, strategi mengerjakan berbagai jenis soal (pilihan ganda dengan 4 opsi), serta time management yang efektif untuk setiap bagian ujian agar dapat memaksimalkan skor dalam kondisi ujian yang sesungguhnya."
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "Pembelajaran difokuskan pada penguasaan tiga komponen utama yang diujikan dalam JLPT dengan pendekatan sistematis\nyang mencakup: Huruf dan Kanji (文字・漢字): Penguasaan hiragana dan katakana lengkap, kanji sesuai level JLPT (N5: 80 kanji, N4: 168 kanji, N3: 370 kanji, N2: 1000 kanji, N1: 2000+ kanji), cara baca on’yomi dan kun’yomi, serta penggunaan kanji dalam konteks. Kosakata (語彙): Pengembangan vocabulary sesuai level (N5: 800 kata, N4: 1500 kata, N3: 3750 kata, N2: 6000 kata, N1: 10000+ kata), sinonim dan antonim, collocations, dan penggunaan kata dalam situasi formal dan informal. Tata Bahasa (文法): Pola kalimat dan struktur grammar sesuai level, partikel (助詞), auxiliary verbs (助動詞), bentuk kata kerja (動詞の活用), keigo (bahasa hormat), dan ekspresi idiomatik. Kemampuan Membaca (読解): Pemahaman teks pendek hingga panjang, identifikasi ide pokok dan detail, inferensi makna, dan analisis struktur teks berbagai genre (narasi, eksposisi, argumentasi). Kemampuan Menyimak (聴解): Pemahaman percakapan sehari-hari, monolog, pengumuman, dan diskusi, dengan fokus pada kemampuan memahami konteks, nuansa, dan informasi spesifik dari audio berbagai kecepatan dan aksen. Kemampuan Komunikatif: Penggunaan bahasa Jepang dalam situasi nyata, pemahaman budaya Jepang dalam berkomunikasi, dan aplikasi grammar dalam speaking dan writing practice.\nSiswa akan mengembangkan kemampuan terintegrasi melalui metode pembelajaran yang menggabungkan drill practice, contextual learning, dan authentic materials dari budaya Jepang untuk memastikan pemahaman yang mendalam dan aplikatif."
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary Building",
                        "content": "Pada tahap ini, pembelajaran diarahkan untuk menuntaskan seluruh silabus JLPT sesuai kurikulum resmi. Setiap topik dibahas mendalam dengan penguatan kosakata akademik atau terminologi teknis yang relevan dengan bidang masing-masing.\nSelain itu, peserta akan dilatih untuk memahami keterkaitan antar-topik, sehingga mampu membangun penalaran yang logis dan menyeluruh. Fokus utama bukan hanya pada hafalan, tetapi juga pada kemampuan menghubungkan konsep dan menerapkannya dalam konteks yang lebih luas, seperti riset dan pemecahan masalah kompleks."
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Peserta akan menjalani latihan soal terstruktur dengan batas waktu untuk membiasakan diri menghadapi tekanan ujian sebenarnya. Setiap sesi simulasi dirancang menyerupai kondisi real exam, baik dari segi format, durasi, maupun tingkat kesulitan.\nMelalui pendekatan ini, siswa dapat mengasah keterampilan manajemen waktu, ketahanan mental, serta strategi pengerjaan. Setelah simulasi, peserta mendapatkan umpan balik mendetail mengenai hasil ujian percobaan, sehingga dapat segera memperbaiki kelemahan sebelum ujian sesungguhnya."
                    },
                    {
                        "title": "KELIMA: Advanced Topics & Transition to Higher Studies",
                        "content": "Tahap akhir menekankan pada materi lanjutan yang sering menjadi pembeda dalam ujian JPLT. Peserta akan diajak mengasah keterampilan critical thinking, problem solving, dan argumentasi logis yang sangat dibutuhkan baik dalam ujian maupun di universitas.\nSelain itu, kelas ini juga memfasilitasi persiapan masuk perguruan tinggi, termasuk strategi memilih jurusan, memahami standar penerimaan universitas internasional, dan latihan wawancara akademik jika diperlukan. Dengan bekal ini, siswa siap menghadapi ujian JPLT sekaligus langkah selanjutnya di dunia akademik global."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes JLPT?",
                    "a": "Biaya pendaftaran tes JLPT (Nihongo Nouryoku Shiken) bervariasi tergantung pada level yang diambil (N1, N2, N3, N4, atau N5) dan negara tempat Anda mengikuti tes. Di Indonesia, biaya pendaftaran ditetapkan oleh panitia penyelenggara lokal yang bekerja sama dengan The Japan Foundation. Umumnya, biaya untuk level yang lebih tinggi (N1, N2) sedikit lebih mahal dibandingkan level yang lebih rendah (N3, N4, N5). Untuk informasi biaya yang paling akurat dan terkini, sangat disarankan untuk mengunjungi situs web resmi penyelenggara JLPT di Indonesia atau menghubungi pusat pendaftaran resmi JLPT di kota Anda ketika periode pendaftaran dibuka."
                },
                {
                    "q": "Tes JLPT diselenggarakan di mana saja di Indonesia?",
                    "a": "Tes JLPT diselenggarakan di beberapa kota besar di Indonesia. Lokasi pasti pusat ujian dapat berubah setiap periode tes, namun biasanya mencakup kota-kota seperti Jakarta, Bandung, Surabaya, Semarang, Yogyakarta, Medan, Denpasar, dan Makassar. Penyelenggara lokal JLPT (biasanya institusi pendidikan tinggi atau lembaga bahasa Jepang yang ditunjuk) akan mengumumkan daftar kota dan lokasi pusat ujian beberapa bulan sebelum tanggal tes. Anda dapat menemukan informasi detail mengenai lokasi pusat ujian melalui situs web resmi JLPT global atau situs web panitia penyelenggara JLPT di Indonesia."
                },
                {
                    "q": "Kapan jadwal tes JLPT biasanya diadakan?",
                    "a": "Tes JLPT secara global umumnya diadakan dua kali setahun: Minggu pertama bulan Juli. Minggu pertama bulan Desember. Namun, tidak semua pusat ujian di seluruh dunia (termasuk di Indonesia) menyelenggarakan tes pada kedua periode tersebut. Beberapa lokasi mungkin hanya mengadakan tes sekali setahun (biasanya di bulan Desember atau Juli). Pastikan untuk memeriksa jadwal spesifik yang berlaku di Indonesia atau di pusat ujian yang Anda tuju melalui pengumuman resmi dari The Japan Foundation atau panitia lokal. Periode pendaftaran biasanya dibuka beberapa bulan sebelum tanggal tes."
                },
                {
                    "q": "Skor atau sertifikat JLPT valid berapa lama?",
                    "a": "Sertifikat kelulusan JLPT dan laporan skor yang Anda terima tidak memiliki tanggal kedaluwarsa resmi yang ditetapkan oleh penyelenggara tes (The Japan Foundation dan Japan Educational Exchanges and Services). Artinya, sertifikat tersebut secara formal berlaku seumur hidup. Namun, penting untuk dicatat bahwa beberapa institusi atau perusahaan yang meminta sertifikat JLPT (misalnya, untuk aplikasi studi, beasiswa, atau pekerjaan) mungkin memiliki kebijakan internal mereka sendiri mengenai batas usia sertifikat yang mereka terima. Mereka mungkin lebih memilih sertifikat yang diperoleh dalam beberapa tahun terakhir (misalnya, 2-5 tahun) karena kemampuan bahasa dapat berubah seiring waktu. Selalu pastikan untuk memeriksa persyaratan spesifik dari institusi yang Anda tuju."
                },
                {
                    "q": "Ada berapa level dalam tes JLPT dan apa perbedaannya?",
                    "a": "Tes JLPT memiliki lima level kemahiran, yaitu: N1 (Paling Sulit/Mahir): Kemampuan memahami bahasa Jepang dalam berbagai situasi yang kompleks dan abstrak. Mampu memahami berita, editorial, kuliah, dan percakapan dalam kecepatan alami dengan nuansa yang beragam. N2 (Menengah Atas): Kemampuan memahami bahasa Jepang yang digunakan dalam situasi sehari-hari dan berbagai situasi lainnya pada tingkat yang lebih tinggi. Mampu memahami artikel berita, ulasan, dan percakapan umum dengan baik. N3 (Menengah): Jembatan antara N4 dan N2. Kemampuan memahami bahasa Jepang yang digunakan dalam situasi sehari-hari pada tingkat tertentu. Mampu membaca tulisan dengan topik spesifik dan memahami percakapan sehari-hari dengan kecepatan mendekati alami. N4 (Dasar Akhir): Kemampuan memahami bahasa Jepang dasar. Mampu membaca dan memahami kalimat-kalimat sederhana tentang topik sehari-hari yang ditulis dengan kosakata dan kanji dasar. Mampu mengikuti percakapan sehari-hari yang diucapkan perlahan. N5 (Paling Dasar/Pemula): Kemampuan memahami bahasa Jepang pada tingkat paling dasar. Mampu membaca dan memahami ungkapan dan kalimat khas yang ditulis dalam hiragana, katakana, dan kanji dasar. Mampu mendengarkan dan memahami percakapan singkat tentang topik sehari-hari yang diucapkan perlahan. Setiap level mengukur kemampuan yang semakin meningkat dalam hal kosakata, tata bahasa, pemahaman membaca, dan pemahaman mendengarkan."
                },
                {
                    "q": "Apa saja bagian yang diujikan dalam tes JLPT?",
                    "a": "Secara umum, tes JLPT untuk semua level (N1 hingga N5) menguji tiga komponen utama: Pengetahuan Bahasa (文字・語彙・文法 – Moji, Goi, Bunpou) / Language Knowledge (Vocabulary/Grammar): Bagian ini menguji pengetahuan Anda tentang huruf Jepang (Kanji), kosakata (Goi), dan tata bahasa (Bunpou). Membaca (読解 – Dokkai) / Reading: Bagian ini menguji kemampuan Anda untuk memahami berbagai jenis teks tertulis dalam bahasa Jepang, mulai dari kalimat pendek hingga bacaan panjang, tergantung levelnya. Mendengarkan (聴解 – Choukai) / Listening: Bagian ini menguji kemampuan Anda untuk memahami informasi lisan dalam bahasa Jepang, seperti percakapan, pengumuman, atau berita, juga dengan tingkat kesulitan yang disesuaikan dengan level. Untuk N1 dan N2, bagian “Pengetahuan Bahasa” dan “Membaca” sering digabungkan dalam satu sesi ujian. Tidak ada komponen berbicara (speaking) atau menulis esai (writing) dalam tes JLPT standar."
                },
                {
                    "q": "Apa manfaat memiliki sertifikat JLPT?",
                    "a": "Memiliki sertifikat JLPT memberikan berbagai manfaat, terutama jika Anda memiliki minat atau keperluan terkait Jepang: Persyaratan Studi di Jepang: Banyak universitas, sekolah kejuruan, dan sekolah bahasa di Jepang mensyaratkan sertifikat JLPT level tertentu (biasanya N2 atau N1 untuk program S1/S2) sebagai bukti kemampuan bahasa Jepang. Peluang Karir: Perusahaan Jepang atau perusahaan yang memiliki hubungan bisnis dengan Jepang seringkali mencari karyawan dengan kemampuan bahasa Jepang yang dibuktikan dengan sertifikat JLPT. Ini dapat membuka peluang kerja yang lebih luas dan gaji yang lebih baik. Kenaikan Pangkat atau Tunjangan Bahasa: Beberapa perusahaan memberikan tunjangan bahasa atau mempertimbangkan sertifikat JLPT untuk kenaikan pangkat bagi karyawan yang menguasai bahasa Jepang. Pengukuran Kemampuan Pribadi: JLPT adalah standar objektif untuk mengukur tingkat kemahiran bahasa Jepang Anda dan melacak kemajuan belajar Anda. Keperluan Imigrasi (dalam beberapa kasus): Untuk beberapa jenis visa atau program preferensial imigrasi ke Jepang, skor JLPT dapat menjadi salah satu poin pertimbangan. Akses ke Informasi dan Budaya: Dengan kemampuan bahasa Jepang yang lebih tinggi, Anda dapat lebih menikmati budaya Jepang (film, musik, sastra) dan mengakses informasi langsung dari sumber berbahasa Jepang."
                },
                {
                    "q": "Di mana saya bisa mendapatkan contoh soal JLPT?",
                    "a": "Cara terbaik untuk mendapatkan contoh soal JLPT yang akurat dan resmi adalah melalui sumber-sumber berikut: Situs Web Resmi JLPT (www.jlpt.jp): Situs ini menyediakan contoh soal (sample questions) untuk setiap level tes. Contoh soal ini memberikan gambaran tentang format dan jenis pertanyaan yang akan muncul. Buku Latihan Resmi “New Japanese-Language Proficiency Test Sample Questions”: The Japan Foundation dan Japan Educational Exchanges and Services (JEES) menerbitkan buku kumpulan contoh soal resmi ini yang mencakup semua bagian tes untuk setiap level. Buku-buku Persiapan JLPT dari Penerbit Terkemuka: Ada banyak buku teks, buku latihan, dan buku simulasi tes JLPT yang diterbitkan oleh berbagai penerbit di Jepang dan negara lain. Pastikan memilih buku yang sesuai dengan level yang Anda targetkan dan memiliki reputasi baik. Aplikasi Mobile dan Situs Web Latihan: Beberapa aplikasi mobile dan situs web juga menyediakan latihan soal JLPT, namun pastikan kualitas dan kesesuaiannya dengan format tes terbaru."
                },
                {
                    "q": "Jadwal kursus persiapan JLPT di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan JLPT yang dirancang untuk membantu Anda menghadapi setiap level tes (N5 hingga N1) dengan percaya diri. Kami fokus pada penguasaan kosakata, tata bahasa, kanji, serta strategi efektif untuk mengerjakan soal-soal membaca dan mendengarkan sesuai dengan tuntutan setiap level JLPT. Jadwal kursus kami fleksibel, dengan pilihan kelas grup reguler atau sesi privat yang dapat disesuaikan dengan jadwal Anda. Biaya kursus akan bervariasi tergantung pada level JLPT yang dituju, durasi program, dan jenis kelas. Untuk informasi terkini mengenai jadwal kelas persiapan JLPT, pilihan program, serta rincian biaya, silakan hubungi tim konsultan pendidikan kami melalui: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri untuk kursus JLPT di Ultimate Education?",
                    "a": "Di Ultimate Education, kami berusaha keras untuk memastikan Anda mendapatkan bimbingan terbaik dari tutor yang paling sesuai dengan kebutuhan Anda. Meskipun kami tidak memiliki sistem pemilihan tutor langsung oleh siswa, tim kami akan mencocokkan Anda dengan tutor JLPT yang berpengalaman, memiliki kualifikasi yang relevan (seringkali dengan sertifikat JLPT level tinggi atau pengalaman tinggal/studi di Jepang), dan memahami strategi pengajaran yang efektif untuk setiap level. Kami akan mempertimbangkan level target Anda dan preferensi belajar Anda dalam proses pencocokan ini."
                }
            ]
        }
    },
    {
        "slug": "bipa",
        "originalSlug": "tes-bipa",
        "meta": {
            "title": "BIPA",
            "description": "Raih skor BIPA impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">BIPA</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "BIPA Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": [
                "Intensive BIPA Class to become fluent in Indonesian for daily life & work"
            ]
        },
        "pricing": {
            "BIPA Private CLASS": {
                "title": "BIPA Private CLASS",
                "description": "Highly personalized and intensive learning. Focus on specific needs such as:\n• Business communication (negotiation, meetings, formal writing).\n• Academic Indonesian (essay writing, research, discussions).\n• Daily conversations for living and traveling in Indonesia.\n• Available both offline (face-to-face) and online with flexible schedules.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Before commencing the course, each student will undergo a comprehensive diagnostic assessment that evaluates their current Indonesian language proficiency based on the Indonesian National Qualification Framework (KKNI) for BIPA, ranging from beginner (A1) to advanced (C2) levels. This assessment covers evaluation of four core language skills – listening, speaking, reading, and writing – as well as understanding of basic grammar, vocabulary, and Indonesian cultural aspects. Based on the diagnostic results, experienced BIPA instructors will develop an individualized learning plan tailored to each student’s learning objectives (academic, professional, or socio-cultural), native language background, preferred learning style, and target proficiency level they aim to achieve within a specific timeframe, complete with clear milestones and regular evaluations to monitor learning progress throughout the program. Read More"
                    },
                    {
                        "title": "PERTAMA: Understanding BIPA Exam Structure & Assessment Criteria",
                        "content": "Students will gain comprehensive understanding of Indonesian language structure as an agglutinative language with rich morphological system, including word formation through affixation (prefixes, suffixes, infixes, circumfixes), reduplication, and word composition. The program provides systematic explanation of Indonesian sentence patterns (SVO – Subject Verb Object), sentence types (simple, compound coordinate, compound complex), usage of function words (prepositions, conjunctions, particles), and language register variations from informal to formal academic style. Students will also understand the BIPA assessment system that references the Common European Framework of Reference (CEFR) and national standards, including evaluation criteria for each language skill, communicative competency assessment rubrics, and proficiency indicators for each level that will help students prepare for official BIPA certification examinations. Read More"
                    },
                    {
                        "title": "KEDUA: Mastering Core Subject Knowledge",
                        "content": "• Listening Skills: Understanding daily conversations, news, lectures, and presentations with various Indonesian accents and dialects, identifying explicit and implicit information, and comprehending contextual meanings\n• Speaking Skills: Correct pronunciation (Indonesian phonology), intonation and word stress, ability to interact in formal and informal situations, presentations, discussions, and negotiations in Indonesian\n• Reading Skills: Comprehending narrative, descriptive, expository, and argumentative texts, skimming and scanning techniques, text structure analysis, and understanding implicit and explicit meanings in various reading materials\n• Writing Skills: Writing coherent and cohesive paragraphs, various text types (letters, reports, essays, articles), correct spelling according to PUEBI (Indonesian General Spelling Guidelines), and appropriate language register for context\n• Grammar: Word systems (nouns, verbs, adjectives, adverbs), sentence structures, aspects and modality, particle usage, and formal vs informal language variations\n• Vocabulary and Expressions: Development of active and passive vocabulary, idiomatic expressions, Indonesian proverbs, and specialized vocabulary according to students’ field of interest or profession"
                    },
                    {
                        "title": "KETIGA: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "At this stage, the learning is directed toward completing the entire BIPA syllabus according to the official curriculum. Each topic is discussed in depth with reinforcement of academic vocabulary or technical terminology relevant to each field. In addition, participants will be trained to understand the interrelation between topics, enabling them to build logical and comprehensive reasoning. The main focus is not only on memorization, but also on the ability to connect concepts and apply them in broader contexts such as research and complex problem-solving. Read More"
                    },
                    {
                        "title": "KEEMPAT: Timed Practice & Real Exam Simulation",
                        "content": "Participants will undergo structured practice tests with time limits to get accustomed to the pressure of the actual exam. Each simulation session is designed to closely resemble real exam conditions in terms of format, duration, and level of difficulty. Through this approach, students can sharpen their time management skills, mental endurance, and test-taking strategies. After the simulation, participants receive detailed feedback on their mock test results, allowing them to quickly address weaknesses before the actual exam. Read More"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "The final stage emphasizes advanced material that often becomes the key differentiator in A-Level exams. Participants will be guided to sharpen critical thinking, problem-solving, and logical argumentation skills—essential not only for the exam but also for success at university. In addition, this stage also facilitates university preparation, including strategies for choosing majors, understanding international university admission standards, and practicing academic interviews if needed. With this foundation, students will be well-prepared to face the A-Level exam as well as their next steps in the global academic world. Read More"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "BIPA Customized Class": {
                "title": "BIPA Customized Class",
                "description": "Perfect for participants with limited time or specific goals. Offered in flexible packages (multiples of 3 sessions). Students can focus on a particular area, such as:\n• Professional communication.\n• Academic Indonesian.\n• Practical vocabulary for daily life.\n• Fully personalized in terms of content, schedule, and exam strategies for fast, effective, and relevant results.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Before commencing the course, each student will undergo a comprehensive diagnostic assessment that evaluates their current Indonesian language proficiency based on the Indonesian National Qualification Framework (KKNI) for BIPA, ranging from beginner (A1) to advanced (C2) levels. This assessment covers evaluation of four core language skills – listening, speaking, reading, and writing – as well as understanding of basic grammar, vocabulary, and Indonesian cultural aspects. Based on the diagnostic results, experienced BIPA instructors will develop an individualized learning plan tailored to each student’s learning objectives (academic, professional, or socio-cultural), native language background, preferred learning style, and target proficiency level they aim to achieve within a specific timeframe, complete with clear milestones and regular evaluations to monitor learning progress throughout the program. Read More"
                    },
                    {
                        "title": "1st: Understanding BIPA Exam Structure & Assessment Criteria",
                        "content": "Students will gain comprehensive understanding of Indonesian language structure as an agglutinative language with rich morphological system, including word formation through affixation (prefixes, suffixes, infixes, circumfixes), reduplication, and word composition. The program provides systematic explanation of Indonesian sentence patterns (SVO – Subject Verb Object), sentence types (simple, compound coordinate, compound complex), usage of function words (prepositions, conjunctions, particles), and language register variations from informal to formal academic style. Students will also understand the BIPA assessment system that references the Common European Framework of Reference (CEFR) and national standards, including evaluation criteria for each language skill, communicative competency assessment rubrics, and proficiency indicators for each level that will help students prepare for official BIPA certification examinations. Read More"
                    },
                    {
                        "title": "2nd: Mastering Core Subject Knowledge",
                        "content": "• Listening Skills: Understanding daily conversations, news, lectures, and presentations with various Indonesian accents and dialects, identifying explicit and implicit information, and comprehending contextual meanings\n• Speaking Skills: Correct pronunciation (Indonesian phonology), intonation and word stress, ability to interact in formal and informal situations, presentations, discussions, and negotiations in Indonesian\n• Reading Skills: Comprehending narrative, descriptive, expository, and argumentative texts, skimming and scanning techniques, text structure analysis, and understanding implicit and explicit meanings in various reading materials\n• Writing Skills: Writing coherent and cohesive paragraphs, various text types (letters, reports, essays, articles), correct spelling according to PUEBI (Indonesian General Spelling Guidelines), and appropriate language register for context\n• Grammar: Word systems (nouns, verbs, adjectives, adverbs), sentence structures, aspects and modality, particle usage, and formal vs informal language variations\n• Vocabulary and Expressions: Development of active and passive vocabulary, idiomatic expressions, Indonesian proverbs, and specialized vocabulary according to students’ field of interest or profession"
                    },
                    {
                        "title": "3rd: Comprehensive Syllabus Coverage & Vocabulary/Terminology Building",
                        "content": "At this stage, the learning is directed toward completing the entire BIPA syllabus according to the official curriculum. Each topic is discussed in depth with reinforcement of academic vocabulary or technical terminology relevant to each field. In addition, participants will be trained to understand the interrelation between topics, enabling them to build logical and comprehensive reasoning. The main focus is not only on memorization, but also on the ability to connect concepts and apply them in broader contexts such as research and complex problem-solving. Read More"
                    },
                    {
                        "title": "4th: Timed Practice & Real Exam Simulation",
                        "content": "Participants will undergo structured practice tests with time limits to get accustomed to the pressure of the actual exam. Each simulation session is designed to closely resemble real exam conditions in terms of format, duration, and level of difficulty. Through this approach, students can sharpen their time management skills, mental endurance, and test-taking strategies. After the simulation, participants receive detailed feedback on their mock test results, allowing them to quickly address weaknesses before the actual exam. Read More"
                    },
                    {
                        "title": "5th : Advanced Topics and Strategies",
                        "content": "The final stage emphasizes advanced material that often becomes the key differentiator in A-Level exams. Participants will be guided to sharpen critical thinking, problem-solving, and logical argumentation skills—essential not only for the exam but also for success at university.\nIn addition, this stage also facilitates university preparation, including strategies for choosing majors, understanding international university admission standards, and practicing academic interviews if needed. With this foundation, students will be well-prepared to face the A-Level exam as well as their next steps in the global academic world."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "What is the BIPA program at Ultimate Education?",
                    "a": "The BIPA Program (Bahasa Indonesia for Foreign Speakers) at Ultimate Education is a specialized Indonesian language course designed for individuals whose first language is not Indonesian. The main goal of this program is to equip learners with the ability to communicate effectively in Bahasa Indonesia, both spoken and written, across various contexts—ranging from daily conversations and social interactions to academic and professional settings.With a strong focus on a communicative approach and cultural immersion, the BIPA course not only builds practical language skills but also helps participants gain a deeper understanding of Indonesian culture, traditions, and local expressions."
                },
                {
                    "q": "Who is the BIPA program suitable for?",
                    "a": "The BIPA Program (Bahasa Indonesia for Foreign Speakers) at Ultimate Education is ideal for:Foreign nationals who live in Indonesia or plan to stay for work, study, or other purposes.International students who are about to begin or are currently pursuing their education at Indonesian institutions.Expatriate professionals who regularly interact with Indonesian colleagues, clients, or partners.Spouses of Indonesian citizens who want to better understand their partner’s language and culture.Researchers or academics conducting studies related to Indonesia.Anyone with a genuine interest in learning Bahasa Indonesia and exploring Indonesian culture, regardless of background or age.This program is designed to make learning Bahasa Indonesia for foreigners effective, practical, and culturally enriching."
                },
                {
                    "q": "What levels are offered in the BIPA program?",
                    "a": "Ultimate Education offers the BIPA (Bahasa Indonesia for Foreign Speakers) program in several levels, aligned with international language proficiency standards, generally based on the CEFR (Common European Framework of Reference for Languages) and adapted for BIPA. The levels include:BIPA 1 (Beginner / A1–A2): Focus on basic daily conversations, essential vocabulary, fundamental grammar, and understanding simple instructions.BIPA 2 (Pre-Intermediate / A2–B1): Development of communication skills in broader social situations, understanding simple texts, and writing short sentences or paragraphs.BIPA 3 (Intermediate / B1–B2): Improvement in speaking fluency, comprehension of more complex texts, participation in discussions on general topics, and writing simple essays or reports.BIPA 4 (Upper-Intermediate / B2–C1): Ability to discuss a wide range of diverse and abstract topics, comprehension of authentic texts (such as news and articles), and producing more structured writing.BIPA 5 (Advanced / C1–C2): Fluent and accurate use of the language in nearly all situations, deeper understanding of linguistic nuances, and the ability to produce detailed and complex written work.Level placement will be determined through an initial placement test or consultation to ensure students are matched with the right starting point."
                },
                {
                    "q": "What materials are generally covered in the BIPA course?",
                    "a": "The BIPA (Bahasa Indonesia for Foreign Speakers) course at Ultimate Education covers the four core language skills (listening, speaking, reading, and writing) along with essential linguistic and cultural aspects. The learning materials include:Grammar (Tata Bahasa): Sentence structures, affixation (prefixes, suffixes, infixes), word classes, and other grammar rules relevant to each level.Vocabulary (Kosakata): Thematic vocabulary for various situations (family, work, hobbies, food, travel), including common idiomatic expressions.Conversation (Percakapan): Dialogue practice, role-plays, and group discussions to improve fluency and speaking confidence.Listening Comprehension (Pemahaman Mendengarkan): Exercises to understand conversations, news, announcements, or presentations in Indonesian.Reading Comprehension (Pemahaman Membaca): Training to comprehend different types of texts, from short passages and articles to simplified literary works (for advanced levels).Writing (Menulis): Practice in writing sentences, paragraphs, letters/emails, essays, and reports, depending on the student’s level.Indonesian Culture (Pengenalan Budaya Indonesia): Exploration of cultural aspects, etiquette, traditions, and relevant social issues to support contextual understanding of the language.This comprehensive curriculum ensures that students not only gain practical Indonesian language skills but also build a deeper connection with Indonesian culture, making communication more natural and effective."
                },
                {
                    "q": "What are the benefits of learning Indonesian through the BIPA program?",
                    "a": "Learning Bahasa Indonesia through the BIPA program at Ultimate Education offers a wide range of benefits, including:Easier Adaptation: Helps foreigners adapt more smoothly while living in Indonesia, both in social interactions and daily activities.Career and Business Opportunities: Expands career prospects for expatriates working in Indonesia or collaborating with Indonesian partners.Access to Education: Meets language requirements for studying at Indonesian universities or academic institutions.Deeper Cultural Understanding: Provides broader insights into the richness of Indonesian culture, traditions, and values.Broader Social Interaction: Enables more meaningful and closer interactions with local communities.Personal Development: Learning a new language enriches personal growth and enhances cognitive skills.With these advantages, the BIPA program is not just about learning a language—it’s about building confidence, expanding opportunities, and connecting more deeply with life in Indonesia."
                },
                {
                    "q": "What teaching methods are used for the BIPA course at Ultimate Education?",
                    "a": "At Ultimate Education, the BIPA course applies a communicative and interactive teaching approach to ensure effective and engaging learning. Our methods include:Focus on Communication: Encouraging students to actively use Bahasa Indonesia from the very beginning.Task-Based Learning: Students learn through completing meaningful and practical communicative tasks.Integrated Skills: Balanced integration of the four language skills—listening, speaking, reading, and writing.Authentic Materials: Use of real-life resources (such as news articles, advertisements, and songs) to reflect everyday Indonesian language use.Varied Activities: Engaging students in discussions, role plays, presentations, and group projects to keep learning dynamic.Constructive Feedback: Providing regular, constructive feedback to help learners continuously improve their skills.This student-centered and communicative methodology ensures that participants don’t just study grammar and vocabulary, but also gain the confidence to use Bahasa Indonesia effectively in real-life situations."
                },
                {
                    "q": "When is the BIPA course schedule at Ultimate Education, and how much does it cost?",
                    "a": "Ultimate Education offers the BIPA (Bahasa Indonesia for Foreign Speakers) program with flexible scheduling to accommodate each learner’s needs. We provide options for group classes with regular schedules (e.g., several times per week) and private classes, where the timetable can be fully customized based on your and the tutor’s availability.The tuition fees for the BIPA course vary depending on the program level, course duration, number of sessions, and type of class (group or private). To get the most up-to-date information about available schedules, program options, course fees, and potential special offers, we invite you to contact our education consultants for a free consultation.📞 WhatsApp: +62 838 1231 0368📧 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "What media are used in the BIPA learning process at Ultimate Education?",
                    "a": "In the BIPA (Bahasa Indonesia for Foreign Speakers) program at Ultimate Education, we use a variety of media to create a rich and effective learning experience, both online and offline. These include:Video conferencing platforms (for online classes) such as Google Meet or Zoom.Structured learning modules in both digital and printed formats.Authentic audio and video materials (songs, film clips, news broadcasts).Reading resources such as Indonesian media articles, short stories, and other relevant texts.Digital or physical whiteboards for grammar and vocabulary explanations.Interactive language learning apps or platforms as supplementary tools.By combining these diverse media, the program ensures that students can learn Bahasa Indonesia effectively, while also experiencing the language as it is used in real-life contexts."
                },
                {
                    "q": "Can I get a certificate after completing the BIPA course?",
                    "a": "Yes. Upon completing each level of the BIPA (Bahasa Indonesia for Foreign Speakers) course at Ultimate Education—while meeting the required attendance and evaluation criteria—participants will receive either a Certificate of Participation or a Certificate of Completion issued by Ultimate Education.This certificate serves as official proof that you have successfully completed a Bahasa Indonesia learning program at a specific level. However, for nationally or internationally recognized proficiency certification, you may need to take a standardized exam such as the Uji Kemahiran Berbahasa Indonesia (UKBI)."
                },
                {
                    "q": "Can I choose my own tutor for the BIPA course at Ultimate Education?",
                    "a": "At Ultimate Education, we prioritize both the quality of teaching and the compatibility between tutors and students’ learning needs. While our system does not currently allow students to directly select a specific tutor from a list, we have a thorough tutor placement process in place.Our BIPA tutors are highly experienced Indonesian language instructors, many with academic backgrounds in BIPA education or Indonesian literature, and with a strong understanding of the challenges faced by foreign learners. Based on your level, learning goals, and scheduling preferences, we will carefully match you with the tutor best suited to support your progress."
                }
            ]
        }
    },
    {
        "slug": "act",
        "originalSlug": "persiapan-act",
        "meta": {
            "title": "ACT",
            "description": "Raih skor ACT impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">ACT</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "ACT Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Program kursus persiapan ACT dari Ultimate Education telah dikembangkan dan diterapkan dengan metode efektif untuk membantu Anda sukses dalam ujian dan meraih skor ACT tinggi! Hasilnya? Dipercaya oleh ribuan siswa."
            ]
        },
        "pricing": {
            "ACT Group": {
                "title": "ACT Group",
                "description": "Pelatihan persiapan untuk American College Testing (ACT), yaitu tes standar yang digunakan perguruan tinggi dan universitas di Amerika Serikat untuk menyeleksi calon mahasiswa baru. Kursus ini bertujuan membekali peserta dengan keterampilan dan strategi yang diperlukan untuk mengerjakan bagian-bagian tes ACT, yang meliputi Membaca, Sains, Matematika, dan Bahasa Inggris, serta bagian opsional Menulis, untuk meningkatkan peluang mereka diterima di perguruan tinggi.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai program, Anda akan mengikuti ACT Diagnostic Test untuk menilai kemampuan awal di tiap section.\nHasil tes ini akan digunakan untuk membuat strategi belajar personal yang efisien dan sesuai dengan target skor Anda."
                    },
                    {
                        "title": "PERTAMA: Introduce Core Concepts & Terminology",
                        "content": "Tahap ini membekali Anda dengan pemahaman dasar tentang:\n• Struktur & sistem penilaian ACT\n• Jenis soal dalam English, Math, Reading, dan Science\n• Format khusus Essay (Writing Test)\nTujuannya agar peserta memahami arah dan tantangan masing-masing section sejak awal."
                    },
                    {
                        "title": "KEDUA: Deepen Subject-Specific Topics",
                        "content": "Sesi ini fokus pada pendalaman materi sesuai dengan section ACT:\n• English: grammar rules, punctuation, rhetorical skills\n• Math: algebra, coordinate geometry, trigonometry\n• Reading: identifying main ideas, inferences, tone\n• Science: data interpretation, experimental design, scientific reasoning\nMateri disampaikan secara bertahap, dengan banyak latihan soal dari soal-soal ACT resmi."
                    },
                    {
                        "title": "KETIGA: Continue Covering The Full Act Syllabus",
                        "content": "Siswa menyelesaikan cakupan penuh dari konten ACT. Kami menggunakan:\n• Modul latihan berbasis real ACT\n• Pendekatan “section-by-section” agar siswa bisa fokus\n• Latihan komprehensif untuk integrasi antar bagian"
                    },
                    {
                        "title": "KEEMPAT: Focus On Complex Questions & Timed Drills",
                        "content": "Tahapan ini dirancang untuk:\n• Menghadapi soal sulit & jebakan\n• Meningkatkan kecepatan menjawab\n• Menumbuhkan kemampuan berpikir logis & strategis\nLatihan dilakukan dengan waktu terbatas seperti kondisi ujian nyata."
                    },
                    {
                        "title": "KELIMA: Mock Tests & Exam Strategy Refinement",
                        "content": "Peserta akan mengikuti beberapa kali mock test ACT full length untuk mengukur progress dan kesiapan.\nTermasuk di dalamnya:\n• Teknik manajemen waktu & energi\n• Review kesalahan secara personal\n• Tips meningkatkan skor Writing (jika diambil)"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "ACT Private": {
                "title": "ACT Private",
                "description": "Pelatihan persiapan untuk American College Testing (ACT), yaitu tes standar yang digunakan perguruan tinggi dan universitas di Amerika Serikat untuk menyeleksi calon mahasiswa baru. Kursus ini bertujuan membekali peserta dengan keterampilan dan strategi yang diperlukan untuk mengerjakan bagian-bagian tes ACT, yang meliputi Membaca, Sains, Matematika, dan Bahasa Inggris, serta bagian opsional Menulis, untuk meningkatkan peluang mereka diterima di perguruan tinggi.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai program, Anda akan mengikuti ACT Diagnostic Test untuk menilai kemampuan awal di tiap section.\nHasil tes ini akan digunakan untuk membuat strategi belajar personal yang efisien dan sesuai dengan target skor Anda."
                    },
                    {
                        "title": "PERTAMA: Introduce Core Concepts & Terminology",
                        "content": "Tahap ini membekali Anda dengan pemahaman dasar tentang:\n• Struktur & sistem penilaian ACT\n• Jenis soal dalam English, Math, Reading, dan Science\n• Format khusus Essay (Writing Test)\nTujuannya agar peserta memahami arah dan tantangan masing-masing section sejak awal."
                    },
                    {
                        "title": "KEDUA: Deepen Subject-Specific Topics",
                        "content": "Sesi ini fokus pada pendalaman materi sesuai dengan section ACT:\n• English: grammar rules, punctuation, rhetorical skills\n• Math: algebra, coordinate geometry, trigonometry\n• Reading: identifying main ideas, inferences, tone\n• Science: data interpretation, experimental design, scientific reasoning\nMateri disampaikan secara bertahap, dengan banyak latihan soal dari soal-soal ACT resmi."
                    },
                    {
                        "title": "KETIGA: Continue Covering The Full Act Syllabus",
                        "content": "Siswa menyelesaikan cakupan penuh dari konten ACT. Kami menggunakan:\n• Modul latihan berbasis real ACT\n• Pendekatan “section-by-section” agar siswa bisa fokus\n• Latihan komprehensif untuk integrasi antar bagian"
                    },
                    {
                        "title": "KEEMPAT: Focus On Complex Questions & Timed Drills",
                        "content": "Tahapan ini dirancang untuk:\n• Menghadapi soal sulit & jebakan\n• Meningkatkan kecepatan menjawab\n• Menumbuhkan kemampuan berpikir logis & strategis\nLatihan dilakukan dengan waktu terbatas seperti kondisi ujian nyata."
                    },
                    {
                        "title": "KELIMA: Mock Tests & Exam Strategy Refinement",
                        "content": "Peserta akan mengikuti beberapa kali mock test ACT full length untuk mengukur progress dan kesiapan.\nTermasuk di dalamnya:\n• Teknik manajemen waktu & energi\n• Review kesalahan secara personal\n• Tips meningkatkan skor Writing (jika diambil)"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "ACT Custom CLass": {
                "title": "ACT Custom CLass",
                "description": "Pelatihan persiapan untuk American College Testing (ACT), yaitu tes standar yang digunakan perguruan tinggi dan universitas di Amerika Serikat untuk menyeleksi calon mahasiswa baru. Kursus ini bertujuan membekali peserta dengan keterampilan dan strategi yang diperlukan untuk mengerjakan bagian-bagian tes ACT, yang meliputi Membaca, Sains, Matematika, dan Bahasa Inggris, serta bagian opsional Menulis, untuk meningkatkan peluang mereka diterima di perguruan tinggi.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai program, Anda akan mengikuti ACT Diagnostic Test untuk menilai kemampuan awal di tiap section.\nHasil tes ini akan digunakan untuk membuat strategi belajar personal yang efisien dan sesuai dengan target skor Anda."
                    },
                    {
                        "title": "PERTAMA: Introduce Core Concepts & Terminology",
                        "content": "Tahap ini membekali Anda dengan pemahaman dasar tentang:\n• Struktur & sistem penilaian ACT\n• Jenis soal dalam English, Math, Reading, dan Science\n• Format khusus Essay (Writing Test)\nTujuannya agar peserta memahami arah dan tantangan masing-masing section sejak awal."
                    },
                    {
                        "title": "KEDUA: Deepen Subject-Specific Topics",
                        "content": "Sesi ini fokus pada pendalaman materi sesuai dengan section ACT:\n• English: grammar rules, punctuation, rhetorical skills\n• Math: algebra, coordinate geometry, trigonometry\n• Reading: identifying main ideas, inferences, tone\n• Science: data interpretation, experimental design, scientific reasoning\nMateri disampaikan secara bertahap, dengan banyak latihan soal dari soal-soal ACT resmi."
                    },
                    {
                        "title": "KETIGA: Continue Covering The Full Act Syllabus",
                        "content": "Siswa menyelesaikan cakupan penuh dari konten ACT. Kami menggunakan:\n• Modul latihan berbasis real ACT\n• Pendekatan “section-by-section” agar siswa bisa fokus\n• Latihan komprehensif untuk integrasi antar bagian"
                    },
                    {
                        "title": "KEEMPAT: Focus On Complex Questions & Timed Drills",
                        "content": "Tahapan ini dirancang untuk:\n• Menghadapi soal sulit & jebakan\n• Meningkatkan kecepatan menjawab\n• Menumbuhkan kemampuan berpikir logis & strategis\nLatihan dilakukan dengan waktu terbatas seperti kondisi ujian nyata."
                    },
                    {
                        "title": "KELIMA: Mock Tests & Exam Strategy Refinement",
                        "content": "Peserta akan mengikuti beberapa kali mock test ACT full length untuk mengukur progress dan kesiapan.\nTermasuk di dalamnya:\n• Teknik manajemen waktu & energi\n• Review kesalahan secara personal\n• Tips meningkatkan skor Writing (jika diambil)"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Program BUNDLING": {
                "title": "Program BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": [
                {
                    "name": "Cory Aquino Lim",
                    "program": "Ultimate ACT",
                    "quote": "Miss Feli ngajarnya jelas banget dan selalu responsif kalau aku ada pertanyaan. Suasana kelasnya juga enak, walaupun kadang masih perlu ditingkatin biar lebih interaktif. Feedback dari tugas juga efektif banget, bikin aku ngerti apa yang harus diperbaiki. Overall, aku merasa terbantu banget belajar ACT di UE."
                },
                {
                    "name": "Celine Vanuel Sugiarto",
                    "program": "Ultimate ACT",
                    "quote": "\"Belajar ACT sama Mr. Ivan seru, penjelasannya enak dan efektif. Kadang aku suka lupa waktu kalau lagi fokus ngerjain soal, jadi bakal lebih oke kalau ada pengingat kalau waktu sudah habis. Mungkin juga ke depannya bisa lebih teliti dalam menjadwalkan kelas biar makin lancar. Overall puas dengan kelasnya.\""
                }
            ]
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes ACT?",
                    "a": "Biaya untuk mengikuti tes ACT bervariasi tergantung pada beberapa faktor. Ada biaya pendaftaran dasar untuk tes ACT tanpa bagian Writing (esai). Jika Anda memilih untuk mengambil tes ACT dengan bagian Writing (ACT with Writing), akan ada biaya tambahan. Selain itu, bagi siswa yang mendaftar dari luar Amerika Serikat (pendaftar internasional), biasanya ada biaya tambahan untuk pendaftaran internasional (non-U.S. regional fee). Biaya lain yang mungkin timbul termasuk biaya pendaftaran terlambat (late registration fee), biaya perubahan tanggal atau lokasi tes, biaya pengiriman laporan skor tambahan ke lebih banyak perguruan tinggi, atau biaya untuk melihat detail skor Anda (Test Information Release, jika tersedia untuk tanggal tes Anda). Untuk mendapatkan informasi biaya yang paling akurat, terkini, dan relevan dengan situasi Anda (apakah Anda mendaftar sebagai siswa domestik AS atau internasional, dan apakah Anda mengambil bagian Writing), sangat penting untuk mengunjungi situs web resmi ACT di www.act.org. Rincian biaya biasanya tersedia di bagian pendaftaran tes."
                },
                {
                    "q": "Tes ACT di mana?",
                    "a": "Tes ACT diselenggarakan di pusat-pusat tes resmi yang telah disetujui oleh ACT, Inc. Di Amerika Serikat, pusat tes ini seringkali berlokasi di sekolah menengah atas atau perguruan tinggi. Untuk siswa internasional, termasuk di Indonesia, tes ACT juga diselenggarakan di pusat-pusat tes resmi. Lokasi ini biasanya adalah sekolah-sekolah internasional atau lembaga pendidikan lain yang telah memenuhi persyaratan ACT untuk menjadi pusat tes. Jumlah pusat tes internasional mungkin lebih terbatas dibandingkan di AS. Anda dapat mencari lokasi pusat tes ACT terdekat, baik di AS maupun internasional, dengan menggunakan alat pencarian pusat tes (test center locator tool) yang tersedia di situs web resmi ACT (www.act.org) saat Anda melakukan proses pendaftaran. Penting untuk memilih pusat tes yang terakreditasi secara resmi."
                },
                {
                    "q": "Kapan jadwal tes ACT?",
                    "a": "Tes ACT ditawarkan beberapa kali dalam setahun. Di Amerika Serikat, tes biasanya diadakan pada bulan September, Oktober, Desember, Februari, April, Juni, dan Juli. Untuk siswa internasional, jadwal tes ACT mungkin sedikit berbeda dan frekuensinya bisa lebih sedikit. Biasanya, tes ACT internasional ditawarkan sekitar lima hingga enam kali setahun, seringkali pada bulan Februari, April, Juni/Juli, September, dan Oktober/Desember. Tanggal pasti untuk setiap administrasi tes, beserta batas waktu pendaftaran reguler dan pendaftaran terlambat, diumumkan jauh-jauh hari di situs web resmi ACT (www.act.org). Anda dapat melihat kalender tes internasional dan memilih tanggal yang paling sesuai dengan jadwal persiapan dan tenggat waktu aplikasi perguruan tinggi Anda. Karena slot di pusat tes internasional bisa terbatas, disarankan untuk mendaftar sedini mungkin."
                },
                {
                    "q": "Skor ACT valid berapa lama?",
                    "a": "Secara teknis, skor ACT Anda tidak memiliki tanggal kedaluwarsa resmi yang ditetapkan oleh ACT, Inc. Artinya, ACT akan menyimpan catatan skor Anda tanpa batas waktu dan Anda dapat memintanya untuk dikirim ke perguruan tinggi kapan saja. Namun, sebagian besar perguruan tinggi dan universitas di Amerika Serikat memiliki kebijakan sendiri mengenai batas usia skor ACT yang mereka terima. Umumnya, perguruan tinggi lebih memilih skor yang diambil dalam kurun waktu 3 hingga 5 tahun terakhir. Mereka berpendapat bahwa skor yang lebih baru lebih akurat mencerminkan kemampuan akademis Anda saat ini. Jika skor Anda lebih tua dari 5 tahun, beberapa perguruan tinggi mungkin masih menerimanya, tetapi ada juga yang mungkin meminta Anda untuk mengambil ulang tes atau memberikan justifikasi tambahan. Oleh karena itu, sangat penting untuk selalu memeriksa persyaratan spesifik dari masing-masing perguruan tinggi yang Anda minati mengenai kebijakan penerimaan skor ACT mereka, termasuk batas usia skor yang dapat diterima."
                },
                {
                    "q": "Apa saja bagian dalam tes ACT?",
                    "a": "Tes ACT dirancang untuk mengukur kesiapan akademis siswa sekolah menengah atas untuk studi di tingkat perguruan tinggi. Tes ini terdiri dari empat bagian pilihan ganda wajib, ditambah satu bagian Writing (esai) yang opsional: English (Bahasa Inggris): Bagian ini menguji pemahaman Anda tentang penggunaan bahasa Inggris standar, termasuk tata bahasa, tanda baca, struktur kalimat, retorika, dan organisasi tulisan. Anda akan membaca beberapa teks dan menjawab pertanyaan tentang bagian-bagian yang digarisbawahi atau tentang teks secara keseluruhan. Mathematics (Matematika): Bagian ini mengukur kemampuan matematika yang biasanya dipelajari hingga akhir kelas 11 atau awal kelas 12 SMA. Topik meliputi pra-aljabar, aljabar dasar, aljabar menengah, geometri koordinat, geometri bidang, dan trigonometri dasar. Anda diizinkan menggunakan kalkulator untuk seluruh bagian Matematika. Reading (Membaca): Bagian ini menilai kemampuan Anda untuk membaca dan memahami teks-teks panjang dan kompleks yang serupa dengan yang akan Anda temui di perguruan tinggi. Teks diambil dari empat bidang: prosa fiksi (prose fiction/literary narrative), ilmu sosial (social science), humaniora (humanities), dan ilmu pengetahuan alam (natural science). Science (Ilmu Pengetahuan Alam): Bagian ini tidak sebanyak menguji pengetahuan spesifik tentang fakta ilmiah, melainkan lebih pada kemampuan Anda untuk menafsirkan, menganalisis, mengevaluasi, dan memecahkan masalah menggunakan data ilmiah yang disajikan dalam bentuk teks, grafik, tabel, dan diagram. Teks mencakup bidang biologi, kimia, fisika, dan ilmu bumi/antariksa. Writing (Menulis) (Opsional): Jika Anda memilih untuk mengambil bagian Writing, Anda akan diminta untuk menulis sebuah esai sebagai respons terhadap sebuah isu yang diberikan. Anda akan diberikan tiga perspektif berbeda tentang isu tersebut dan diminta untuk menganalisis perspektif-perspektif tersebut, menyatakan perspektif Anda sendiri, dan menjelaskan hubungan antara perspektif Anda dengan perspektif yang diberikan. Beberapa perguruan tinggi mensyaratkan atau merekomendasikan bagian Writing, jadi pastikan untuk memeriksa persyaratan dari institusi yang Anda tuju."
                },
                {
                    "q": "Jadwal kursus ACT di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education dapat membantu Anda mempersiapkan diri secara komprehensif untuk menghadapi tes ACT melalui program bimbingan yang terstruktur dan disesuaikan. Kami fokus pada pengembangan pemahaman konsep untuk setiap bagian tes (English, Mathematics, Reading, Science, dan Writing jika diambil), serta strategi pengerjaan soal yang efektif dan manajemen waktu yang baik. Jadwal kursus ACT kami dirancang agar fleksibel untuk mengakomodasi kebutuhan siswa, baik melalui sesi privat yang dapat disesuaikan sepenuhnya dengan jadwal Anda, maupun kelas grup kecil jika tersedia. Untuk mendapatkan informasi lebih lanjut mengenai detail program persiapan ACT yang kami tawarkan, ketersediaan jadwal bimbingan, serta rincian biaya kursus, kami mengundang Anda untuk menghubungi tim konsultan pendidikan kami. Mereka akan dengan senang hati memberikan informasi yang Anda butuhkan dan membantu menyusun rencana belajar yang optimal. Anda dapat menghubungi kami melalui: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor ACT?",
                    "a": "Memiliki skor ACT yang kompetitif memberikan sejumlah manfaat penting bagi siswa yang berencana melanjutkan studi ke perguruan tinggi, terutama di Amerika Serikat: Penerimaan Perguruan Tinggi: Skor ACT diterima oleh hampir semua perguruan tinggi dan universitas S1 (empat tahun) di Amerika Serikat sebagai bagian dari proses penerimaan mahasiswa baru. Skor yang baik dapat secara signifikan meningkatkan peluang Anda untuk diterima di institusi pilihan Anda. Alternatif Selain SAT: ACT menawarkan alternatif bagi siswa selain tes SAT. Beberapa siswa mungkin merasa format atau jenis pertanyaan ACT lebih sesuai dengan gaya belajar dan kekuatan mereka dibandingkan SAT, atau sebaliknya. Banyak perguruan tinggi tidak memiliki preferensi antara kedua tes tersebut dan menerima keduanya secara setara. Penilaian Kesiapan Akademis: Tes ACT dirancang untuk mengukur pengetahuan dan keterampilan akademis yang telah dipelajari siswa di sekolah menengah atas dan yang penting untuk keberhasilan di tingkat perguruan tinggi. Skor Anda memberikan gambaran kepada komite penerimaan tentang kesiapan Anda. Peluang Beasiswa: Banyak perguruan tinggi dan organisasi swasta menawarkan beasiswa berbasis prestasi (merit-based scholarships) yang salah satu kriterianya adalah skor ACT. Skor yang tinggi dapat membuka pintu untuk mendapatkan bantuan finansial yang signifikan. Penempatan Kursus: Beberapa perguruan tinggi mungkin menggunakan skor ACT (terutama skor subjek seperti Matematika atau Bahasa Inggris) untuk membantu menentukan penempatan siswa di kursus tingkat awal yang sesuai. Pengembangan Keterampilan: Proses belajar untuk ACT dapat membantu memperkuat pemahaman Anda dalam mata pelajaran inti dan mengembangkan keterampilan berpikir kritis."
                },
                {
                    "q": "Bisa kasih contoh soal ACT?",
                    "a": "Cara terbaik untuk berkenalan dengan format, jenis pertanyaan, dan tingkat kesulitan tes ACT adalah dengan menggunakan sumber-sumber latihan resmi yang disediakan oleh ACT, Inc.: Situs Web Resmi ACT (www.act.org): Situs ini adalah sumber utama Anda. Di sana Anda dapat menemukan: Contoh Soal Gratis (Free Sample Questions): ACT menyediakan contoh soal untuk setiap bagian tes (English, Math, Reading, Science, dan Writing) agar Anda bisa mendapatkan gambaran. “Preparing for the ACT Test”: Ini adalah panduan persiapan gratis yang dapat diunduh, berisi informasi lengkap tentang tes, tips strategi, dan satu set tes latihan penuh (full-length practice test) dengan kunci jawaban. ACT Academy™: Ini adalah platform belajar online gratis yang disediakan oleh ACT, menawarkan video pembelajaran, latihan soal, dan tes diagnostik untuk membantu Anda mempersiapkan diri. Buku Panduan Resmi ACT (The Official ACT Prep Guide): Buku ini diterbitkan oleh ACT dan berisi beberapa tes latihan penuh yang diambil dari tes-tes ACT sebelumnya, beserta penjelasan jawaban yang detail dan tips strategi. Ini adalah sumber yang sangat berharga untuk latihan intensif. ACT Online Prep™ (Berbayar): ACT juga menawarkan program persiapan online berbayar yang menyediakan lebih banyak latihan soal dan fitur adaptif. Ultimate Education dalam program bimbingannya juga menggunakan soal-soal latihan yang representatif dan selaras dengan format ACT, termasuk dari sumber-sumber resmi, untuk memastikan persiapan Anda efektif."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Dalam program bimbingan persiapan ACT di Ultimate Education, kami memanfaatkan berbagai media untuk mendukung proses belajar yang efektif dan menarik: Sesi Online (Daring): Untuk fleksibilitas maksimal, sebagian besar sesi bimbingan kami dapat dilakukan secara online melalui platform konferensi video interaktif seperti Google Meet atau Zoom. Ini memungkinkan sesi tatap muka virtual dengan tutor, diskusi mendalam, pembagian layar untuk mengerjakan soal bersama, dan penggunaan papan tulis digital. Sesi Offline (Tatap Muka): Tergantung pada ketersediaan dan kesepakatan, sesi bimbingan tatap muka juga dapat diatur di lokasi yang nyaman, memungkinkan interaksi personal yang lebih langsung. Materi Pembelajaran Digital: Kami menyediakan akses ke modul kursus digital, e-book, bank soal latihan yang komprehensif, presentasi materi, dan tautan ke sumber daya online yang relevan dan berkualitas. Tes Latihan dan Simulasi: Kami menggunakan tes latihan penuh dan soal-soal dari sumber resmi ACT untuk membiasakan siswa dengan format, batasan waktu, dan tingkat kesulitan tes yang sebenarnya. Umpan Balik Individual: Tutor kami akan memberikan umpan balik yang terperinci atas pekerjaan siswa, baik untuk latihan soal maupun esai (jika mengambil bagian Writing), untuk membantu mengidentifikasi area kekuatan dan kelemahan."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat memahami bahwa hubungan dan kecocokan antara siswa dan tutor memainkan peran penting dalam keberhasilan proses belajar, terutama untuk persiapan tes sepenting ACT. Meskipun sistem kami saat ini tidak secara eksplisit menyediakan fitur bagi siswa untuk memilih tutor spesifik dari sebuah daftar, kami sangat berkomitmen untuk mencocokkan Anda dengan tutor yang paling sesuai dengan kebutuhan Anda. Tim tutor ACT kami terdiri dari para pengajar yang berpengalaman, memiliki penguasaan materi yang mendalam untuk semua bagian tes ACT, dan terampil dalam menyampaikan strategi pengajaran yang efektif. Ketika Anda mendaftar, kami akan melakukan konsultasi untuk memahami target skor Anda, gaya belajar Anda, area yang paling membutuhkan bantuan, dan preferensi jadwal Anda. Berdasarkan informasi komprehensif ini, kami akan menugaskan seorang tutor yang kami yakini memiliki keahlian dan pendekatan yang paling cocok untuk membimbing Anda menuju pencapaian target skor ACT Anda. Kami selalu terbuka untuk mendiskusikan preferensi Anda dalam proses pencocokan ini."
                }
            ]
        }
    },
    {
        "slug": "gre",
        "originalSlug": "kursus-persiapan-gre",
        "meta": {
            "title": "Kursus Persiapan GRE - Ultimate Education",
            "description": "Raih skor GRE impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">GRE</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "GRE Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus persiapan GRE di Ultimate Education dirancang untuk membantu peserta meraih skor optimal dalam Graduate Record Examination (GRE Test) sebagai salah satu persyaratan utama kuliah di luar negeri, khususnya untuk jenjang pascasarjana. Program ini dibimbing oleh tutor berpengalaman, terdiri dari pengajar lokal profesional dan native speaker, dengan kurikulum terbaru yang disesuaikan dengan format ujian GRE terkini.",
                "Melalui kelas persiapan GRE yang terstruktur dan sistematis, peserta akan mempelajari seluruh komponen penting GRE.",
                "Pembelajaran mencakup seluruh bagian utama GRE:",
                "• Verbal Reasoning",
                "• Quantitative Reasoning",
                "• Analytical Writing",
                "Pembelajaran dilengkapi dengan latihan soal terarah, strategi ujian yang efektif, serta mock test dan simulasi test yang menyerupai kondisi ujian sebenarnya. Dengan pilihan jadwal yang fleksibel, kursus persiapan GRE ini cocok bagi mahasiswa maupun profesional yang ingin meningkatkan peluang diterima di universitas top dunia untuk kuliah di luar negeri."
            ]
        },
        "pricing": {
            "GRE GROUP CLASS": {
                "title": "GRE GROUP CLASS",
                "description": "Program GRE Group Class menggunakan metode semi-privat dengan jumlah peserta terbatas (5–7 siswa per kelas). Suasana belajar yang fokus dan interaktif memungkinkan siswa untuk berdiskusi, berlatih soal, dan mengikuti simulasi tes dengan lebih efektif sekaligus menyenangkan.Materi mencakup ketiga bagian utama GRE—Verbal, Quantitative, dan Analytical Writing—dengan pendekatan yang komprehensif. Siswa tidak hanya memahami strategi dan teori, tetapi juga langsung melatih kemampuan mereka pada soal-soal GRE yang menyerupai ujian sebenarnya.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Exploratory Analysis",
                        "content": "• Tipe soal Verbal dan Quant\n• Pola penilaian Analytical Writing\n• Perbedaan GRE dengan GMAT atau SAT"
                    },
                    {
                        "title": "Learning of Fundamentals",
                        "content": "Fase ini fokus pada penguatan dasar:\n• Quantitative Reasoning: aljabar, aritmetika, geometri dasar, dan analisa data\n• Verbal Reasoning: kosakata akademik, reading comprehension, dan sentence equivalence\n• Analytical Writing: dasar-dasar membuat argumen dan analisis opini\nTahapan ini penting agar Anda membangun pondasi kuat sebelum masuk ke strategi lanjutan."
                    },
                    {
                        "title": "Focus on All Test Sections",
                        "content": "Di tahap ini, peserta mulai mengerjakan latihan terstruktur di semua bagian GRE:\n• Latihan soal Quant dengan teknik pengerjaan cepat\n• Reading comprehension berbasis teks akademik\n• Analytical Writing dengan feedback dari instruktur\nLatihan ini dirancang agar peserta terbiasa dengan waktu dan tekanan nyata ujian."
                    },
                    {
                        "title": "Mastery of Grammar and Writing Logic",
                        "content": "Kemampuan menulis dan berpikir logis sangat penting di GRE. Di tahap ini, Anda akan:\n• Menguasai struktur Argument Essay dan Issue Essay\n• Meningkatkan grammar dan struktur kalimat akademik\n• Menganalisis argumen secara kritis dan logis\nKhusus untuk peserta yang lemah di writing dan verbal, sesi ini jadi penentu skor akhir."
                    },
                    {
                        "title": "Advanced Topics and Strategies",
                        "content": "Tahap akhir adalah penyempurnaan. Di sini Anda akan belajar:\n• Teknik menjawab soal sulit dengan cepat dan tepat\n• Strategi menghadapi soal jebakan di verbal\n• Review intensif soal dari ETS Official GRE Guide\nTahap ini akan mempersiapkan Anda untuk ujian dengan percaya diri dan strategi matang."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "GRE Private CLass": {
                "title": "GRE Private CLass",
                "description": "Program GRE 1-on-1 (Private Class) dirancang khusus bagi siswa yang menginginkan pembelajaran personal dan intensif. Tersedia dalam format offline (tatap muka) maupun online (daring), tutor akan menargetkan langsung area yang paling perlu ditingkatkan, baik itu Verbal Reasoning, Quantitative Reasoning, maupun Analytical Writing.Materi disusun secara tailored (disesuaikan) dengan level kemampuan dan target skor individu, termasuk syarat masuk universitas tertentu. Dengan metode ini, pembelajaran menjadi lebih efisien, fokus, dan efektif untuk membantu siswa mencapai skor GRE sesuai kebutuhan akademik mereka.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Exploratory Analysis",
                        "content": "• Tipe soal Verbal dan Quant\n• Pola penilaian Analytical Writing\n• Perbedaan GRE dengan GMAT atau SAT"
                    },
                    {
                        "title": "Learning of Fundamentals",
                        "content": "Fase ini fokus pada penguatan dasar:\n• Quantitative Reasoning: aljabar, aritmetika, geometri dasar, dan analisa data\n• Verbal Reasoning: kosakata akademik, reading comprehension, dan sentence equivalence\n• Analytical Writing: dasar-dasar membuat argumen dan analisis opini\nTahapan ini penting agar Anda membangun pondasi kuat sebelum masuk ke strategi lanjutan."
                    },
                    {
                        "title": "Focus on All Test Sections",
                        "content": "Di tahap ini, peserta mulai mengerjakan latihan terstruktur di semua bagian GRE:\n• Latihan soal Quant dengan teknik pengerjaan cepat\n• Reading comprehension berbasis teks akademik\n• Analytical Writing dengan feedback dari instruktur\nLatihan ini dirancang agar peserta terbiasa dengan waktu dan tekanan nyata ujian."
                    },
                    {
                        "title": "Mastery of Grammar and Writing Logic",
                        "content": "Kemampuan menulis dan berpikir logis sangat penting di GRE. Di tahap ini, Anda akan:\n• Menguasai struktur Argument Essay dan Issue Essay\n• Meningkatkan grammar dan struktur kalimat akademik\n• Menganalisis argumen secara kritis dan logis\nKhusus untuk peserta yang lemah di writing dan verbal, sesi ini jadi penentu skor akhir."
                    },
                    {
                        "title": "Advanced Topics and Strategies",
                        "content": "Tahap akhir adalah penyempurnaan. Di sini Anda akan belajar:\n• Teknik menjawab soal sulit dengan cepat dan tepat\n• Strategi menghadapi soal jebakan di verbal\n• Review intensif soal dari ETS Official GRE Guide\nTahap ini akan mempersiapkan Anda untuk ujian dengan percaya diri dan strategi matang."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "GRE Customized Class": {
                "title": "GRE Customized Class",
                "description": "Bagi Anda yang memiliki waktu terbatas atau kebutuhan spesifik, program GRE Customized Class adalah solusi terbaik. Dengan paket fleksibel (kelipatan 3 sesi), peserta dapat fokus pada bagian tertentu, misalnya hanya Quantitative Reasoning atau Analytical Writing.Kelas ini sepenuhnya personalized, mulai dari fokus pada keterampilan tertentu, jadwal fleksibel, hingga bimbingan intensif dari tutor ahli. Program ini sangat cocok untuk mahasiswa maupun profesional yang ingin mempersiapkan GRE dengan cara yang praktis, efisien, dan tepat sasaran agar dapat meraih skor sesuai target universitas tujuan.",
                "features": "",
                "curriculum": [
                    {
                        "title": "Exploratory Analysis",
                        "content": "• Tipe soal Verbal dan Quant\n• Pola penilaian Analytical Writing\n• Perbedaan GRE dengan GMAT atau SAT"
                    },
                    {
                        "title": "Learning of Fundamentals",
                        "content": "Fase ini fokus pada penguatan dasar:\n• Quantitative Reasoning: aljabar, aritmetika, geometri dasar, dan analisa data\n• Verbal Reasoning: kosakata akademik, reading comprehension, dan sentence equivalence\n• Analytical Writing: dasar-dasar membuat argumen dan analisis opini\nTahapan ini penting agar Anda membangun pondasi kuat sebelum masuk ke strategi lanjutan."
                    },
                    {
                        "title": "Focus on All Test Sections",
                        "content": "Di tahap ini, peserta mulai mengerjakan latihan terstruktur di semua bagian GRE:\n• Latihan soal Quant dengan teknik pengerjaan cepat\n• Reading comprehension berbasis teks akademik\n• Analytical Writing dengan feedback dari instruktur\nLatihan ini dirancang agar peserta terbiasa dengan waktu dan tekanan nyata ujian."
                    },
                    {
                        "title": "Mastery of Grammar and Writing Logic",
                        "content": "Kemampuan menulis dan berpikir logis sangat penting di GRE. Di tahap ini, Anda akan:\n• Menguasai struktur Argument Essay dan Issue Essay\n• Meningkatkan grammar dan struktur kalimat akademik\n• Menganalisis argumen secara kritis dan logis\nKhusus untuk peserta yang lemah di writing dan verbal, sesi ini jadi penentu skor akhir."
                    },
                    {
                        "title": "Advanced Topics and Strategies",
                        "content": "Tahap akhir adalah penyempurnaan. Di sini Anda akan belajar:\n• Teknik menjawab soal sulit dengan cepat dan tepat\n• Strategi menghadapi soal jebakan di verbal\n• Review intensif soal dari ETS Official GRE Guide\nTahap ini akan mempersiapkan Anda untuk ujian dengan percaya diri dan strategi matang."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa Itu GRE? Tes Wajib untuk Masuk Program Pascasarjana Terbaik",
                    "a": "GRE (Graduate Record Examination) adalah tes standar internasional yang dirancang dan diselenggarakan oleh ETS (Educational Testing Service). Tes ini digunakan oleh berbagai universitas terkemuka di seluruh dunia sebagai salah satu syarat utama untuk masuk ke program pascasarjana atau S2."
                },
                {
                    "q": "Tujuan Tes GRE",
                    "a": "Tes GRE dirancang untuk mengukur kemampuan akademis dan potensi berpikir kritis seseorang dalam menghadapi tantangan di jenjang studi lanjut. Skor GRE yang tinggi dapat meningkatkan peluang diterima di program magister atau doktoral di berbagai bidang studi, mulai dari ilmu sosial, teknik, hingga bisnis."
                },
                {
                    "q": "Mengapa Skor GRE Penting?",
                    "a": "GRE tidak hanya mengukur pengetahuan akademik, tetapi juga menguji kemampuan berpikir di bawah tekanan, kemampuan menyusun argumen, serta keterampilan analisis data. Skor GRE yang baik menjadi nilai tambah penting dalam proses seleksi masuk program pascasarjana, terutama di kampus-kampus bergengsi."
                },
                {
                    "q": "Berapa biaya tes GRE?",
                    "a": "Biaya untuk mengikuti GRE General Test ditetapkan secara global oleh Educational Testing Service (ETS), organisasi yang menyelenggarakan tes ini. Biaya ini biasanya dinyatakan dalam Dolar AS. Namun, jumlah yang akan Anda bayarkan dalam mata uang lokal (misalnya Rupiah) dapat berfluktuasi tergantung pada nilai tukar saat Anda melakukan pendaftaran. Selain biaya pendaftaran dasar, ada beberapa biaya tambahan yang mungkin berlaku untuk layanan opsional, seperti:Penjadwalan ulang tes (rescheduling fee).Perubahan lokasi tes.Laporan skor tambahan (Additional Score Reports) yang dikirim ke lebih banyak institusi daripada yang termasuk dalam biaya awal.Reinstate skor yang telah dibatalkan.Peninjauan ulang skor untuk bagian Analytical Writing (Score Review).Jika Anda berencana mengambil GRE Subject Tests (meskipun ketersediaannya kini sangat terbatas atau telah dihentikan untuk beberapa subjek), tes ini memiliki struktur biaya terpisah. Untuk informasi biaya yang paling akurat dan terkini untuk GRE General Test dan layanan terkait, sangat penting untuk mengunjungi situs web resmi ETS di www.ets.org/gre."
                },
                {
                    "q": "Tes GRE di mana?",
                    "a": "GRE General Test tersedia dalam format computer-delivered dan dapat diambil di jaringan pusat tes resmi yang luas di seluruh dunia, termasuk di berbagai kota di Indonesia. Pusat tes ini dikelola oleh pihak ketiga yang bekerja sama dengan ETS dan dirancang untuk menyediakan lingkungan tes yang standar dan aman.Selain itu, ETS juga menawarkan GRE General Test at Home, yang merupakan opsi tes online yang dapat Anda ambil dari kenyamanan rumah Anda, asalkan Anda memenuhi semua persyaratan teknis (komputer, webcam, mikrofon, koneksi internet yang stabil) dan persyaratan lingkungan pengujian (ruangan pribadi, tidak ada gangguan). Ketersediaan tes di rumah ini bisa berbeda di setiap negara, jadi pastikan untuk memeriksa kelayakannya di situs ETS.Untuk GRE Subject Tests (jika masih tersedia untuk subjek yang Anda minati), tes ini biasanya ditawarkan dalam format paper-delivered dan memiliki jadwal serta lokasi tes yang lebih terbatas dibandingkan General Test.Anda dapat menemukan daftar lengkap pusat tes resmi dan informasi mengenai tes di rumah melalui alat pencarian di situs ETS."
                },
                {
                    "q": "Kapan jadwal tes GRE?",
                    "a": "Jadwal untuk GRE General Test yang diambil di pusat tes (computer-delivered) sangat fleksibel. Tes ini ditawarkan hampir setiap hari sepanjang tahun di sebagian besar pusat tes di seluruh dunia, tergantung pada jam operasional dan kapasitas masing-masing pusat. Ini memberikan banyak pilihan bagi calon peserta tes untuk memilih tanggal yang paling sesuai dengan jadwal persiapan mereka.Untuk GRE General Test at Home, fleksibilitasnya bahkan lebih besar, dengan janji temu yang seringkali tersedia 24 jam sehari, beberapa hari dalam seminggu, tergantung pada ketersediaan pengawas online.Sedangkan untuk GRE Subject Tests (jika relevan), jadwalnya jauh lebih terbatas. Tes ini biasanya hanya ditawarkan beberapa kali dalam setahun pada tanggal-tanggal tertentu yang telah ditetapkan secara global oleh ETS.Untuk memeriksa jadwal spesifik yang tersedia untuk GRE General Test (baik di pusat tes maupun di rumah) atau untuk Subject Tests, Anda perlu membuat akun di situs ETS dan menggunakan sistem pendaftaran online mereka. Sangat disarankan untuk mendaftar jauh-jauh hari, terutama jika Anda memiliki preferensi tanggal atau jika pusat tes di area Anda populer."
                },
                {
                    "q": "Skor GRE valid berapa lama?",
                    "a": "Skor GRE Anda, baik untuk General Test maupun Subject Tests, secara resmi berlaku dan dapat dilaporkan ke institusi selama lima (5) tahun terhitung sejak tanggal Anda mengambil tes. Tanggal tes akan tercantum pada laporan skor resmi Anda.Setelah periode lima tahun ini berakhir, skor Anda tidak akan lagi tersedia untuk dikirim secara otomatis ke institusi melalui layanan pelaporan skor ETS. Meskipun ETS mungkin menyimpan catatan skor Anda untuk periode yang lebih lama untuk keperluan internal, sebagian besar program pascasarjana mengharuskan pelamar untuk menyerahkan skor yang diambil dalam lima tahun terakhir. Ini karena kemampuan akademis dan pengetahuan dapat berubah seiring waktu, dan skor yang lebih baru dianggap lebih mencerminkan kemampuan Anda saat ini. Oleh karena itu, selalu pastikan untuk memeriksa kebijakan spesifik dari setiap program atau universitas yang Anda tuju mengenai batas usia skor GRE yang mereka terima."
                },
                {
                    "q": "Apa saja jenis tes GRE?",
                    "a": "ETS menawarkan dua jenis utama tes GRE yang melayani tujuan berbeda:GRE General Test: Ini adalah tes yang paling umum diminta oleh program-program pascasarjana (Master dan Doktoral) di berbagai bidang studi, terutama di Amerika Serikat dan semakin banyak di negara lain. GRE General Test dirancang untuk mengukur keterampilan berpikir dasar yang dianggap penting untuk keberhasilan di tingkat pascasarjana, terlepas dari bidang studi spesifik Anda. Tes ini terdiri dari tiga bagian utama:Verbal Reasoning: Mengukur kemampuan Anda untuk menganalisis dan mengevaluasi materi tertulis, mensintesis informasi, menganalisis hubungan antar komponen kalimat, dan mengenali hubungan antar kata dan konsep.Quantitative Reasoning: Mengukur kemampuan Anda untuk memecahkan masalah menggunakan konsep dasar matematika, aljabar, geometri, dan analisis data.Analytical Writing: Mengukur kemampuan berpikir kritis dan menulis analitis Anda, termasuk kemampuan untuk mengartikulasikan dan mendukung ide-ide kompleks, membangun argumen yang koheren, dan menganalisis klaim. Bagian ini terdiri dari dua tugas esai terpisah: “Analyze an Issue” dan “Analyze an Argument.”GRE Subject Tests: Tes ini dirancang untuk mengukur pengetahuan Anda di bidang studi tertentu. Sebelumnya, Subject Tests tersedia untuk bidang seperti Biologi, Kimia, Sastra Inggris, Matematika, Fisika, dan Psikologi. Namun, penting untuk dicatat bahwa per Juni 2023, ETS mengumumkan penghentian GRE Subject Tests. Meskipun demikian, beberapa program mungkin masih menerima skor Subject Test lama yang masih valid, atau ETS mungkin menawarkan format penilaian lain di masa depan. Selalu periksa persyaratan spesifik dari program yang Anda minati dan informasi terbaru di situs ETS."
                },
                {
                    "q": "Jadwal kursus GRE di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menyediakan program persiapan GRE yang dirancang untuk membantu Anda meraih kesuksesan dalam tes dan mencapai skor yang Anda butuhkan untuk aplikasi program pascasarjana impian Anda. Kami memahami bahwa setiap calon peserta memiliki kebutuhan belajar yang unik dan jadwal yang berbeda. Oleh karena itu, jadwal kursus kami dirancang agar fleksibel, dengan opsi untuk kelas grup yang interaktif atau kelas privat yang lebih personal dan dapat disesuaikan dengan kecepatan serta fokus belajar Anda.Untuk mendapatkan informasi paling akurat dan terkini mengenai detail jadwal kelas GRE yang tersedia (termasuk frekuensi pertemuan dan durasi program), berbagai pilihan program yang kami tawarkan (misalnya, program komprehensif, program fokus per bagian, atau paket berdasarkan target skor), serta rincian biaya kursus dan promosi yang mungkin sedang berlaku, kami sangat menyarankan Anda untuk menghubungi tim konsultan pendidikan kami. Mereka akan dengan senang hati memberikan konsultasi, menjawab pertanyaan Anda, dan membantu Anda memilih program yang paling tepat. Anda dapat menghubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor GRE?",
                    "a": "Memiliki skor GRE yang kompetitif dapat memberikan sejumlah manfaat penting bagi mereka yang berencana melanjutkan studi ke jenjang pascasarjana atau mencari peluang profesional tertentu:Pintu Masuk ke Program Pascasarjana: Skor GRE General Test adalah salah satu komponen utama dalam aplikasi ke ribuan program Master dan Doktoral (Ph.D.) di berbagai disiplin ilmu (kecuali biasanya untuk program bisnis yang lebih sering meminta GMAT) di universitas-universitas di Amerika Serikat, Kanada, dan semakin banyak institusi di Eropa dan belahan dunia lainnya.Evaluasi Kesiapan Akademik: Program pascasarjana menggunakan skor GRE sebagai salah satu alat untuk mengevaluasi kemampuan berpikir kritis, verbal, kuantitatif, dan analitis Anda, yang merupakan indikator kesiapan Anda untuk menghadapi tantangan akademis di tingkat lanjut.Peluang Beasiswa dan Pendanaan: Skor GRE yang tinggi dapat meningkatkan peluang Anda untuk mendapatkan beasiswa, fellowship, atau bentuk bantuan keuangan lainnya dari universitas atau lembaga pemberi dana. Banyak beasiswa berbasis prestasi mempertimbangkan skor GRE sebagai salah satu kriteria utama.Meningkatkan Daya Saing Aplikasi: Dalam proses seleksi yang kompetitif, skor GRE yang kuat dapat membantu aplikasi Anda menonjol di antara pelamar lain, terutama jika komponen lain dari aplikasi Anda (seperti IPK atau pengalaman riset) mungkin kurang kuat.Fleksibilitas Pilihan Karir (dalam beberapa kasus): Meskipun utamanya untuk akademis, beberapa perusahaan atau organisasi riset mungkin juga mempertimbangkan skor GRE sebagai bukti kemampuan analitis."
                },
                {
                    "q": "Bisa kasih contoh soal GRE?",
                    "a": "ETS, sebagai penyelenggara resmi GRE, adalah sumber terbaik untuk mendapatkan contoh soal dan materi latihan yang paling akurat dan relevan. Menggunakan materi resmi akan membantu Anda terbiasa dengan format, jenis pertanyaan, dan tingkat kesulitan yang sesungguhnya:POWERPREP™ Online: ETS menyediakan dua tes latihan GRE General Test penuh dan gratis melalui platform POWERPREP™ Online. Tes ini mensimulasikan pengalaman tes berbasis komputer yang sebenarnya, termasuk fitur-fitur seperti kemampuan untuk menandai pertanyaan, meninjau kembali jawaban, dan menggunakan kalkulator di layar (untuk bagian Quantitative Reasoning). Anda juga akan menerima perkiraan skor setelah menyelesaikan tes.Contoh Soal di Situs Resmi ETS: Situs web ETS (www.ets.org/gre) memiliki banyak contoh soal untuk setiap bagian tes (Verbal Reasoning, Quantitative Reasoning, dan Analytical Writing), lengkap dengan penjelasan jawaban dan tips strategi.Buku Panduan Resmi GRE: ETS menerbitkan buku panduan resmi seperti “The Official Guide to the GRE General Test” dan buku latihan terpisah untuk Verbal Reasoning dan Quantitative Reasoning. Buku-buku ini berisi ratusan soal latihan asli dari tes-tes sebelumnya, strategi pengerjaan soal, dan informasi tes yang komprehensif.Ultimate Education juga melengkapi program persiapan GRE kami dengan berbagai latihan soal, termasuk dari sumber resmi, serta pembahasan mendalam mengenai strategi untuk mendekati setiap jenis pertanyaan secara efektif."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Program persiapan GRE di Ultimate Education dirancang untuk fleksibel dan efektif, memanfaatkan berbagai media untuk mendukung proses belajar Anda. Kami menawarkan bimbingan dalam beberapa format:Online (Daring): Mayoritas sesi bimbingan kami dapat diakses secara online. Kelas-kelas ini dilakukan secara interaktif melalui platform konferensi video seperti Google Meet atau Zoom, yang memungkinkan komunikasi dua arah secara real-time antara Anda dan tutor, serta antar siswa dalam kelas grup. Fitur seperti berbagi layar, papan tulis digital, dan ruang diskusi kelompok digunakan secara aktif. Koneksi internet yang baik dan stabil sangat disarankan untuk pengalaman belajar online yang optimal.Offline (Tatap Muka): Tergantung pada lokasi dan ketersediaan, kami juga dapat menawarkan sesi bimbingan tatap muka di pusat belajar kami atau lokasi yang telah disepakati. Ini memberikan keuntungan interaksi personal yang lebih mendalam.Materi Digital dan Cetak: Kami menggunakan kombinasi materi pembelajaran, termasuk modul digital yang dapat diakses kapan saja, e-book, bank soal latihan, simulasi tes online yang mencerminkan format GRE, dan terkadang materi cetak sebagai pelengkap.Learning Management System (LMS): Kami mungkin menggunakan LMS untuk mengelola materi kursus, tugas, kuis, dan untuk memfasilitasi komunikasi di luar jam pelajaran."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat berkomitmen untuk menyediakan kualitas pengajaran terbaik dan memastikan bahwa setiap siswa mendapatkan bimbingan yang paling sesuai dengan kebutuhannya. Meskipun saat ini sistem kami tidak secara langsung memungkinkan siswa untuk memilih tutor spesifik dari daftar nama untuk program persiapan GRE, kami menerapkan proses pencocokan tutor yang sangat cermat.Kami memiliki tim tutor GRE yang terdiri dari para pengajar berpengalaman, banyak di antaranya adalah lulusan dari universitas terkemuka dan memiliki skor GRE pribadi yang sangat tinggi. Mereka memiliki pemahaman yang mendalam tentang konten dan strategi tes GRE. Ketika Anda mendaftar, kami akan melakukan analisis kebutuhan berdasarkan target skor Anda, latar belakang akademis, gaya belajar, dan preferensi jadwal. Berdasarkan informasi ini, kami akan menugaskan seorang tutor yang kami yakini memiliki keahlian dan pendekatan mengajar yang paling cocok untuk membantu Anda mencapai tujuan Anda. Prioritas kami adalah kesuksesan Anda."
                }
            ]
        }
    },
    {
        "slug": "ielts",
        "originalSlug": "kursus-persiapan-ielts",
        "meta": {
            "title": "Kursus Persiapan IELTS - Ultimate Education",
            "description": "Raih skor IELTS impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">IELTS</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "IELTS Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus IELTS di Ultimate Education dirancang untuk membantu Anda meraih skor tinggi, baik untuk IELTS Academic maupun IELTS General Training. Kelas persiapan ielts ini didukung oleh tutor berpengalaman, termasuk native speaker dan pengajar lokal profesional, sehingga setiap peserta mendapatkan bimbingan yang relevan dengan format ujian terbaru.",
                "Pembelajaran difokuskan pada 4 keterampilan utama IELTS: Listening, Reading, Writing, dan Speaking. Peserta mendapatkan strategi praktis, tips manajemen waktu, serta mock test resmi untuk melatih kesiapan ujian. Kami juga menyediakan layanan test skor gratis untuk menilai level Anda, dan pilihan kelas online & offline dengan jadwal fleksibel – cocok untuk mahasiswa, profesional, maupun siapa saja yang ingin memaksimalkan skor IELTS."
            ]
        },
        "pricing": {
            "IELTS GROUP": {
                "title": "IELTS GROUP",
                "description": "Program IELTS Group menawarkan suasana belajar semi-privat dengan jumlah peserta terbatas (7–10 siswa per kelas). Metode ini membuat pembelajaran lebih fokus, interaktif, dan menyenangkan melalui games edukatif serta diskusi aktif. Peserta akan mendapatkan materi lengkap mencakup Listening, Reading, Writing, dan Speaking. Dengan pendekatan ini, siswa tidak hanya memahami teori dan strategi, tetapi juga langsung berlatih mengaplikasikannya, sehingga lebih percaya diri dalam menghadapi ujian IELTS.",
                "features": "",
                "curriculum": [
                    {
                        "title": "IELTS Format & Question Awareness",
                        "content": "• Durasi, jumlah soal, dan sistem penilaian\n• Perbedaan antara IELTS Academic vs General Training\n• Tips membaca instruksi soal & mengenali pola pertanyaan"
                    },
                    {
                        "title": "Penguatan Dasar & Teknik Dasar IELTS",
                        "content": "• Listening: mengenali berbagai aksen, memahami audio monolog dan dialog\n• Reading: teknik skimming, scanning, dan memahami jenis pertanyaan\n• Writing: struktur task 1 & 2, ideation, dan grammar dasar\n• Speaking: membangun kelancaran dan pronunciation"
                    },
                    {
                        "title": "Intensive Practice per Skills",
                        "content": "• Listening: latihan berbagai tipe soal (matching, form completion, map labelling, dll)\n• Reading: teks panjang dan strategi manajemen waktu\n• Writing: latihan menulis Essay (Task 2) & Deskripsi Grafik atau Surat (Task 1)\n• Speaking: latihan Part 1, Part 2 (cue card), dan Part 3 (discussion)"
                    },
                    {
                        "title": "Writing Mastery & Speaking Fluency",
                        "content": "• Writing: teknik menulis argumen logis, kohesi dan koherensi, serta pembenahan grammar\n• Speaking: membangun ide spontan, meningkatkan pronunciation, dan menghindari filler words"
                    },
                    {
                        "title": "Advance Strategies & Final Simulation",
                        "content": "• Strategi menjawab soal tricky\n• Manajemen waktu dan tekanan\n• Teknik “educated guessing” untuk pertanyaan sulit\n• Full IELTS Simulation Test untuk mengukur kesiapan Anda\n• Review soal resmi dari IELTS Official Cambridge Guide"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "IELTS Private": {
                "title": "IELTS Private",
                "description": "Bagi Anda yang menginginkan pembelajaran yang lebih personal, IELTS 1-on-1 atau kelas privat IELTS adalah pilihan terbaik. Program ini tersedia dalam format offline (tatap muka) maupun online (daring), sehingga fleksibel mengikuti kebutuhan siswa. Tutor akan memberikan bimbingan khusus sesuai dengan kelemahan dan target skor siswa. Materi yang disusun tailored (disesuaikan) membuat pembelajaran lebih efisien dan hasilnya lebih optimal, baik untuk persiapan IELTS Academic maupun General Training.",
                "features": "",
                "curriculum": [
                    {
                        "title": "IELTS Format & Question Awareness",
                        "content": "• Durasi, jumlah soal, dan sistem penilaian\n• Perbedaan antara IELTS Academic vs General Training\n• Tips membaca instruksi soal & mengenali pola pertanyaan"
                    },
                    {
                        "title": "Penguatan Dasar & Teknik Dasar IELTS",
                        "content": "• Listening: mengenali berbagai aksen, memahami audio monolog dan dialog\n• Reading: teknik skimming, scanning, dan memahami jenis pertanyaan\n• Writing: struktur task 1 & 2, ideation, dan grammar dasar\n• Speaking: membangun kelancaran dan pronunciation"
                    },
                    {
                        "title": "Intensive Practice per Skills",
                        "content": "• Listening: latihan berbagai tipe soal (matching, form completion, map labelling, dll)\n• Reading: teks panjang dan strategi manajemen waktu\n• Writing: latihan menulis Essay (Task 2) & Deskripsi Grafik atau Surat (Task 1)\n• Speaking: latihan Part 1, Part 2 (cue card), dan Part 3 (discussion)"
                    },
                    {
                        "title": "Writing Mastery & Speaking Fluency",
                        "content": "• Writing: teknik menulis argumen logis, kohesi dan koherensi, serta pembenahan grammar\n• Speaking: membangun ide spontan, meningkatkan pronunciation, dan menghindari filler words"
                    },
                    {
                        "title": "Advance Strategies & Final Simulation",
                        "content": "• Strategi menjawab soal tricky\n• Manajemen waktu dan tekanan\n• Teknik “educated guessing” untuk pertanyaan sulit\n• Full IELTS Simulation Test untuk mengukur kesiapan Anda\n• Review soal resmi dari IELTS Official Cambridge Guide"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "IELTS WHV": {
                "title": "IELTS WHV",
                "description": "Program IELTS General Training untuk Working Holiday Visa (WHV) difokuskan untuk membantu peserta meraih skor IELTS sesuai syarat WHV ke Australia. Dengan kurikulum yang relevan, pembelajaran interaktif, dan latihan menyeluruh pada Listening, Reading, Writing, dan Speaking, siswa dipersiapkan agar lebih percaya diri menghadapi IELTS General Training Test. Program ini memastikan Anda siap secara strategi maupun mental untuk mencapai skor IELTS yang dibutuhkan.",
                "features": "",
                "curriculum": [
                    {
                        "title": "IELTS Format & Question Awareness",
                        "content": "• Durasi, jumlah soal, dan sistem penilaian\n• Perbedaan antara IELTS Academic vs General Training\n• Tips membaca instruksi soal & mengenali pola pertanyaan"
                    },
                    {
                        "title": "Penguatan Dasar & Teknik Dasar IELTS",
                        "content": "• Listening: mengenali berbagai aksen, memahami audio monolog dan dialog\n• Reading: teknik skimming, scanning, dan memahami jenis pertanyaan\n• Writing: struktur task 1 & 2, ideation, dan grammar dasar\n• Speaking: membangun kelancaran dan pronunciation"
                    },
                    {
                        "title": "Intensive Practice per Skills",
                        "content": "• Listening: latihan berbagai tipe soal (matching, form completion, map labelling, dll)\n• Reading: teks panjang dan strategi manajemen waktu\n• Writing: latihan menulis Essay (Task 2) & Deskripsi Grafik atau Surat (Task 1)\n• Speaking: latihan Part 1, Part 2 (cue card), dan Part 3 (discussion)"
                    },
                    {
                        "title": "Writing Mastery & Speaking Fluency",
                        "content": "• Writing: teknik menulis argumen logis, kohesi dan koherensi, serta pembenahan grammar\n• Speaking: membangun ide spontan, meningkatkan pronunciation, dan menghindari filler words"
                    },
                    {
                        "title": "Advance Strategies & Final Simulation",
                        "content": "• Strategi menjawab soal tricky\n• Manajemen waktu dan tekanan\n• Teknik “educated guessing” untuk pertanyaan sulit\n• Full IELTS Simulation Test untuk mengukur kesiapan Anda\n• Review soal resmi dari IELTS Official Cambridge Guide"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "IELTS CUSTOM CLASS": {
                "title": "IELTS CUSTOM CLASS",
                "description": "Bagi Anda yang memiliki waktu terbatas atau kebutuhan spesifik, IELTS Customized Class menjadi solusi tepat. Program ini fleksibel dengan pilihan paket kelipatan 3 sesi, sehingga peserta bisa menargetkan keterampilan tertentu—misalnya hanya fokus pada Writing atau Speaking. Seluruh materi pembelajaran disusun personalized sesuai kebutuhan individu, baik untuk IELTS Academic maupun IELTS General Training. Dengan bimbingan intensif dari tutor ahli, Anda akan mendapatkan strategi ujian yang efektif dan hasil yang maksimal.",
                "features": "",
                "curriculum": [
                    {
                        "title": "IELTS Format & Question Awareness",
                        "content": "• Durasi, jumlah soal, dan sistem penilaian\n• Perbedaan antara IELTS Academic vs General Training\n• Tips membaca instruksi soal & mengenali pola pertanyaan"
                    },
                    {
                        "title": "Penguatan Dasar & Teknik Dasar IELTS",
                        "content": "• Listening: mengenali berbagai aksen, memahami audio monolog dan dialog\n• Reading: teknik skimming, scanning, dan memahami jenis pertanyaan\n• Writing: struktur task 1 & 2, ideation, dan grammar dasar\n• Speaking: membangun kelancaran dan pronunciation"
                    },
                    {
                        "title": "Intensive Practice per Skills",
                        "content": "• Listening: latihan berbagai tipe soal (matching, form completion, map labelling, dll)\n• Reading: teks panjang dan strategi manajemen waktu\n• Writing: latihan menulis Essay (Task 2) & Deskripsi Grafik atau Surat (Task 1)\n• Speaking: latihan Part 1, Part 2 (cue card), dan Part 3 (discussion)"
                    },
                    {
                        "title": "Writing Mastery & Speaking Fluency",
                        "content": "• Writing: teknik menulis argumen logis, kohesi dan koherensi, serta pembenahan grammar\n• Speaking: membangun ide spontan, meningkatkan pronunciation, dan menghindari filler words"
                    },
                    {
                        "title": "Advance Strategies & Final Simulation",
                        "content": "• Strategi menjawab soal tricky\n• Manajemen waktu dan tekanan\n• Teknik “educated guessing” untuk pertanyaan sulit\n• Full IELTS Simulation Test untuk mengukur kesiapan Anda\n• Review soal resmi dari IELTS Official Cambridge Guide"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Ultimate IELTS": {
                "title": "Ultimate IELTS",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": [
                {
                    "name": "Sabila Putri",
                    "program": "Ultimate IELTS",
                    "quote": "“Kelas perdananya berjalan lancar. Gurunya sangat baik, terbuka, dan informatif sehingga membuat saya nyaman belajar. Dari skala 1-10, saya kasih nilai 10 untuk kelas hari ini!\""
                },
                {
                    "name": "Marsya Rezkitadewi",
                    "program": "Ultimate IELTS",
                    "quote": "\"Pengajarnya sangat baik dalam menyampaikan materi dengan jelas dan mudah dipahami. Pertanyaan saya selalu dijawab dengan baik, suasana kelas juga interaktif, serta umpan balik yang diberikan sangat efektif."
                },
                {
                    "name": "Akayla",
                    "program": "Ultimate IELTS",
                    "quote": "“Seru sih belajarnya, tutor gampang dipahami dan selalu bisa jawab pertanyaan aku. Suasananya nggak kaku, malah jadi interaktif dan bikin semangat. Feedback dari tutor juga praktis banget buat ningkatin kemampuan."
                }
            ]
        },
        "faq": {
            "items": [
                {
                    "q": "Apa Itu IELTS?",
                    "a": "IELTS (International English Language Testing System) adalah tes kemampuan bahasa Inggris internasional yang diakui secara global. Tes ini mengukur empat keterampilan utama: Listening, Reading, Writing, SpeakingDiselenggarakan oleh British Council, IDP Australia, dan Cambridge English, IELTS digunakan sebagai syarat masuk ke universitas luar negeri, imigrasi, atau keperluan kerja di negara berbahasa Inggris.Tes ini tersedia di lebih dari 140 negara dan hasilnya keluar dalam waktu 5-13 hari. IELTS menjadi pilihan utama bagi mereka yang ingin studi, bekerja, atau pindah ke luar negeri."
                },
                {
                    "q": "Berapa biaya tes IELTS?",
                    "a": "Biaya tes IELTS bervariasi tergantung pada jenis tes (Academic atau General Training) dan lokasi pusat tes. Untuk informasi biaya paling akurat dan terkini, silakan kunjungi situs resmi IELTS (misalnya British Council atau IDP Indonesia) atau hubungi pusat tes resmi terdekat."
                },
                {
                    "q": "Kenapa Memilih Kursus IELTS di Ultimate Education?",
                    "a": "Kursus IELTS di Ultimate Education diajar oleh pengajar bersertifikat dan berpengalaman dalam mengajar IELTS dan Bahasa Inggris Akademik, termasuk bagi para penerima beasiswa ke Australia dan Selandia Baru. Kursus ini dirancang untuk membantu Anda mencapai skor IELTS terbaik dengan pendekatan terstruktur dan mendalam.Setiap Minggu Anda Akan:Mempelajari fitur utama dari setiap keterampilan dalam IELTSFokus pada penguasaan skill penting (Listening, Reading, Writing, Speaking)Menganalisis dan berlatih berbagai jenis soal IELTSMendalami strategi dan tips untuk meningkatkan performa tesMengasah strategi menghadapi setiap bagian tesMengakses berbagai materi pembelajaran online secara fleksibelKursus ini dibuat agar menantang dan tetap menarik, memastikan peserta terlibat aktif dan termotivasi sepanjang proses belajar."
                },
                {
                    "q": "Mengapa Memilih Kursus Ini?",
                    "a": "Program persiapan IELTS di Ultimate Education diajarkan oleh pengajar profesional yang sangat berpengalaman dalam mengajar IELTS dan Bahasa Inggris Akademik. Mereka telah membantu ribuan siswa, termasuk penerima beasiswa dari Australia dan Selandia Baru, dalam meraih skor tinggi IELTS."
                },
                {
                    "q": "Tes IELTS di mana?",
                    "a": "Tes IELTS diselenggarakan di banyak kota di seluruh Indonesia. Pusat tes resmi biasanya dikelola oleh British Council atau IDP. Anda dapat menemukan daftar lengkap pusat tes dan memilih lokasi yang paling sesuai melalui situs web resmi IELTS."
                },
                {
                    "q": "Kapan jadwal tes IELTS?",
                    "a": "Tes IELTS (baik paper-based maupun computer-delivered) umumnya tersedia beberapa kali dalam sebulan. Jadwal spesifik dapat berbeda antar pusat tes. Untuk mengetahui tanggal tes yang tersedia di lokasi Anda, silakan cek langsung melalui sistem pendaftaran online di situs resmi IELTS."
                },
                {
                    "q": "Skor IELTS valid berapa lama?",
                    "a": "Skor IELTS umumnya berlaku selama dua (2) tahun sejak tanggal tes. Beberapa institusi mungkin memiliki kebijakan sendiri mengenai batas usia skor, jadi selalu periksa persyaratan spesifik dari institusi yang Anda tuju."
                },
                {
                    "q": "Apakah ada jenis tes IELTS yang berbeda?",
                    "a": "Ya, ada dua jenis utama tes IELTS:IELTS Academic: Untuk mereka yang ingin melanjutkan studi ke jenjang pendidikan tinggi (S1, S2, dst.) atau untuk registrasi profesional.IELTS General Training: Untuk mereka yang berencana migrasi ke negara berbahasa Inggris, bekerja, atau mengikuti pelatihan non-akademik. Selain itu, ada juga IELTS UKVI yang diperlukan untuk beberapa jenis visa Inggris."
                },
                {
                    "q": "Jadwal kursus IELTS di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan IELTS yang komprehensif dan adaptif. Kami menyediakan berbagai pilihan jadwal, baik kelas grup maupun privat, yang disesuaikan dengan kebutuhan siswa. Untuk informasi terkini mengenai jadwal kelas IELTS yang tersedia, pilihan program belajar, dan rincian biaya kursus, silakan hubungi tim konsultan pendidikan kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor IELTS?",
                    "a": "Memiliki skor IELTS yang baik memberikan banyak manfaat, seperti:Memenuhi syarat pendaftaran universitas di luar negeri.Mendukung aplikasi visa untuk studi, kerja, atau migrasi ke negara-negara berbahasa Inggris.Meningkatkan prospek karir di perusahaan multinasional.Mengukur kemampuan bahasa Inggris Anda secara objektif sesuai standar internasional."
                },
                {
                    "q": "Bisa kasih contoh soal IELTS?",
                    "a": "Cara terbaik untuk berkenalan dengan format dan tipe soal IELTS adalah melalui sumber resmi:Situs Resmi IELTS: Menyediakan contoh soal gratis untuk semua bagian tes (Listening, Reading, Writing, Speaking).Buku Latihan Resmi IELTS: Tersedia berbagai buku persiapan resmi yang berisi tes latihan penuh. Di Ultimate Education, kami juga menggunakan materi latihan yang relevan dan strategi pengerjaan soal yang efektif dalam program persiapan kami."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Program IELTS Preparation menawarkan fleksibilitas bimbingan yang bisa dipilih, yaitu secara online atau offline. Jika memilih bimbingan online, komunikasi dengan Tutor akan menggunakan video conference melalui Google Meet atau Zoom. Untuk itu, pastikan kamu memiliki akun Google atau Zoom dan koneksi internet yang stabil."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Saat ini, kamu belum bisa memilih tutor sendiri untuk program IELTS Preparation. Namun jangan khawatir, karena kami pasti akan menghubungkan kamu dengan tutor yang berpengalaman dan memiliki sertifikasi di bidang yang sesuai dengan kebutuhan kamu serta cocok dengan preferensi jadwal kamu."
                }
            ]
        }
    },
    {
        "slug": "ged",
        "originalSlug": "persiapan-ged",
        "meta": {
            "title": "GED",
            "description": "Raih skor GED impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">GED</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "GED Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus GED di Ultimate Education dirancang khusus untuk membantu Anda lulus ujian GED dan mendapatkan sertifikat setara SMA internasional yang diakui secara luas di berbagai negara. Dengan bimbingan tutor berpengalaman (native speaker maupun pengajar lokal profesional) serta kurikulum up-to-date sesuai format GED terbaru, peserta akan berlatih secara intensif dan terarah.",
                "Program ini mencakup pembelajaran menyeluruh pada empat area utama GED:",
                "• Mathematical Reasoning",
                "• Reasoning Through Language Arts (RLA)",
                "• Science",
                "• Social Studies",
                "Selain itu, peserta juga akan mendapatkan strategi ujian, latihan soal, serta mock test untuk mengukur kesiapan sebelum menghadapi ujian resmi GED."
            ]
        },
        "pricing": {
            "GED Private Class": {
                "title": "GED Private Class",
                "description": "Program GED Private Class (One-on-One) dirancang untuk pembelajaran yang lebih personal, intensif, dan sesuai kebutuhan individu. Tersedia dalam format offline (tatap muka) maupun online, tutor akan menargetkan area spesifik yang perlu ditingkatkan—misalnya hanya Math, RLA, Science, atau Social Studies. Materi pembelajaran disusun secara tailored sesuai dengan level kemampuan dan target akademik siswa. Dengan cara ini, pembelajaran menjadi lebih efisien, fokus, dan hasilnya optimal untuk meraih kelulusan GED dengan skor terbaik.",
                "features": "",
                "curriculum": [
                    {
                        "title": "GED Format & Question Awareness",
                        "content": "Siswa akan memperoleh pemahaman menyeluruh tentang struktur ujian GED dan berbagai jenis pertanyaan dalam empat subject areas utama. Program ini dirancang untuk membangun kesadaran format ujian dan meningkatkan kepercayaan diri siswa.\n• Reasoning Through Language Arts (RLA): Format reading comprehension, grammar, dan essay writing\n• Mathematical Reasoning: Jenis soal dari aritmatika dasar hingga algebra dan geometri\n• Science: Pertanyaan scientific reasoning dan analisis data melalui teks dan grafik\n• Social Studies: Soal civics, history, economics dengan fokus critical thinking\n• Computer-Based Testing: Familiarisasi dengan interface dan tools ujian digital\n• Scoring System: Pemahaman sistem penilaian dan passing scores"
                    },
                    {
                        "title": "Penguatan Dasar & Teknik Dasar GED",
                        "content": "Program fokus pada penguatan fundamental skills dan teknik dasar yang diperlukan untuk sukses GED. Membangun fondasi kuat dalam setiap subject area dengan pendekatan sistematis.\n• Reading Fundamentals: Teknik membaca efektif dan pemahaman berbagai jenis teks\n• Mathematics Foundation: Konsep dasar matematika dan pengenalan aljabar\n• Writing Basics: Dasar tata bahasa dan teknik penulisan esai\n• Scientific Literacy: Pemahaman konsep sains dan interpretasi data\n• Social Studies Concepts: Pengetahuan dasar kewarganegaraan dan sejarah\n• Test-Taking Strategies: Manajemen waktu dan teknik ujian efektif"
                    },
                    {
                        "title": "Intensive Practice per Skills",
                        "content": "Latihan intensif yang terfokus pada setiap keterampilan spesifik GED. Program memberikan practice mendalam dan targeted untuk memastikan penguasaan optimal setiap area kompetensi.\nSiswa akan menjalani latihan mendalam untuk setiap mata pelajaran GED dengan fokus pada penerapan praktis. Untuk Reading, siswa berlatih memahami berbagai jenis teks dan menganalisis makna tersembunyi. Bagian Mathematics mencakup latihan soal cerita dan penerapan rumus dalam kehidupan sehari-hari.\nProgram juga menekankan latihan Science melalui percobaan sederhana dan analisis grafik, serta Social Studies dengan membahas peristiwa sejarah dan isu terkini. Semua latihan dilakukan dengan menggunakan komputer untuk mempersiapkan siswa dengan format ujian digital yang sebenarnya."
                    },
                    {
                        "title": "Writing Mastery & Speaking Fluency",
                        "content": "Pengembangan kemampuan komunikasi tertulis dan lisan yang essential untuk sukses GED dan college readiness. Fokus pada essay writing dan overall language proficiency.\nSiswa akan belajar menulis dengan baik dan benar mulai dari kalimat sederhana hingga esai lengkap. Program ini mengajarkan cara menyusun ide, membuat paragraf yang runtut, dan menggunakan tata bahasa yang tepat. Siswa juga berlatih menulis berbagai jenis tulisan seperti surat, laporan, dan esai argumentatif.\nSelain menulis, program juga mengembangkan kemampuan berbicara dan berkomunikasi dengan percaya diri. Siswa berlatih presentasi, diskusi kelompok, dan menyampaikan pendapat dengan jelas. Semua kegiatan ini dirancang untuk mempersiapkan siswa tidak hanya untuk ujian GED, tetapi juga untuk sukses di perguruan tinggi dan dunia kerja."
                    },
                    {
                        "title": "Advance Strategies & Final Simulation",
                        "content": "Persiapan final dengan strategi lanjutan dan simulasi ujian comprehensive. Fokus pada fine-tuning skills dan membangun kepercayaan diri untuk kesuksesan ujian GED.\nTahap akhir persiapan ini memfokuskan pada strategi pintar untuk menghadapi ujian GED. Siswa akan belajar cara mengatur waktu dengan baik, mengatasi soal sulit, dan mengelola stres saat ujian. Program ini juga memberikan tips praktis seperti cara membaca soal dengan teliti dan memilih jawaban yang paling tepat.\nSiswa akan mengikuti simulasi ujian lengkap yang persis sama dengan ujian GED asli. Setelah simulasi, ada review mendalam untuk melihat kekuatan dan kelemahan masing-masing siswa. Program juga memberikan bimbingan tentang langkah selanjutnya setelah lulus GED, seperti cara mendaftar kuliah atau mencari pekerjaan yang lebih baik."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "CUSTOMized YOUR PROGRAM": {
                "title": "CUSTOMized YOUR PROGRAM",
                "description": "Program GED Customized Class sangat cocok bagi peserta dengan waktu terbatas atau kebutuhan khusus. Dengan pilihan paket fleksibel (dalam kelipatan 3 sesi), siswa bisa fokus pada bidang tertentu—misalnya hanya Mathematical Reasoning atau hanya Science—sesuai dengan kebutuhan masing-masing. Kelas ini sepenuhnya personalized, mencakup: Materi sesuai kebutuhan spesifik siswa Jadwal belajar fleksibel Bimbingan intensif dari tutor berpengalaman Pendekatan ini menjadikan GED Custom Class pilihan tepat bagi siswa yang ingin belajar lebih praktis, fokus, dan efisien.",
                "features": "",
                "curriculum": [
                    {
                        "title": "GED Format & Question Awareness",
                        "content": "Siswa akan memperoleh pemahaman menyeluruh tentang struktur ujian GED dan berbagai jenis pertanyaan dalam empat subject areas utama. Program ini dirancang untuk membangun kesadaran format ujian dan meningkatkan kepercayaan diri siswa.\n• Reasoning Through Language Arts (RLA): Format reading comprehension, grammar, dan essay writing\n• Mathematical Reasoning: Jenis soal dari aritmatika dasar hingga algebra dan geometri\n• Science: Pertanyaan scientific reasoning dan analisis data melalui teks dan grafik\n• Social Studies: Soal civics, history, economics dengan fokus critical thinking\n• Computer-Based Testing: Familiarisasi dengan interface dan tools ujian digital\n• Scoring System: Pemahaman sistem penilaian dan passing scores"
                    },
                    {
                        "title": "Penguatan Dasar & Teknik Dasar GED",
                        "content": "Program fokus pada penguatan fundamental skills dan teknik dasar yang diperlukan untuk sukses GED. Membangun fondasi kuat dalam setiap subject area dengan pendekatan sistematis.\n• Reading Fundamentals: Teknik membaca efektif dan pemahaman berbagai jenis teks\n• Mathematics Foundation: Konsep dasar matematika dan pengenalan aljabar\n• Writing Basics: Dasar tata bahasa dan teknik penulisan esai\n• Scientific Literacy: Pemahaman konsep sains dan interpretasi data\n• Social Studies Concepts: Pengetahuan dasar kewarganegaraan dan sejarah\n• Test-Taking Strategies: Manajemen waktu dan teknik ujian efektif"
                    },
                    {
                        "title": "Intensive Practice per Skills",
                        "content": "Latihan intensif yang terfokus pada setiap keterampilan spesifik GED. Program memberikan practice mendalam dan targeted untuk memastikan penguasaan optimal setiap area kompetensi.\nSiswa akan menjalani latihan mendalam untuk setiap mata pelajaran GED dengan fokus pada penerapan praktis. Untuk Reading, siswa berlatih memahami berbagai jenis teks dan menganalisis makna tersembunyi. Bagian Mathematics mencakup latihan soal cerita dan penerapan rumus dalam kehidupan sehari-hari.\nProgram juga menekankan latihan Science melalui percobaan sederhana dan analisis grafik, serta Social Studies dengan membahas peristiwa sejarah dan isu terkini. Semua latihan dilakukan dengan menggunakan komputer untuk mempersiapkan siswa dengan format ujian digital yang sebenarnya."
                    },
                    {
                        "title": "Writing Mastery & Speaking Fluency",
                        "content": "Pengembangan kemampuan komunikasi tertulis dan lisan yang essential untuk sukses GED dan college readiness. Fokus pada essay writing dan overall language proficiency.\nSiswa akan belajar menulis dengan baik dan benar mulai dari kalimat sederhana hingga esai lengkap. Program ini mengajarkan cara menyusun ide, membuat paragraf yang runtut, dan menggunakan tata bahasa yang tepat. Siswa juga berlatih menulis berbagai jenis tulisan seperti surat, laporan, dan esai argumentatif.\nSelain menulis, program juga mengembangkan kemampuan berbicara dan berkomunikasi dengan percaya diri. Siswa berlatih presentasi, diskusi kelompok, dan menyampaikan pendapat dengan jelas. Semua kegiatan ini dirancang untuk mempersiapkan siswa tidak hanya untuk ujian GED, tetapi juga untuk sukses di perguruan tinggi dan dunia kerja."
                    },
                    {
                        "title": "Advance Strategies & Final Simulation",
                        "content": "Persiapan final dengan strategi lanjutan dan simulasi ujian comprehensive. Fokus pada fine-tuning skills dan membangun kepercayaan diri untuk kesuksesan ujian GED.\nTahap akhir persiapan ini memfokuskan pada strategi pintar untuk menghadapi ujian GED. Siswa akan belajar cara mengatur waktu dengan baik, mengatasi soal sulit, dan mengelola stres saat ujian. Program ini juga memberikan tips praktis seperti cara membaca soal dengan teliti dan memilih jawaban yang paling tepat.\nSiswa akan mengikuti simulasi ujian lengkap yang persis sama dengan ujian GED asli. Setelah simulasi, ada review mendalam untuk melihat kekuatan dan kelemahan masing-masing siswa. Program juga memberikan bimbingan tentang langkah selanjutnya setelah lulus GED, seperti cara mendaftar kuliah atau mencari pekerjaan yang lebih baik."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes GED?",
                    "a": "Biaya tes GED bervariasi per mata pelajaran (subject test) dan juga dapat berbeda tergantung pada negara serta pusat tes resmi tempat Anda mengikuti ujian. Tes GED terdiri dari empat mata pelajaran utama, dan Anda biasanya membayar untuk setiap mata pelajaran secara terpisah saat Anda menjadwalkannya. Biaya juga bisa berbeda jika Anda mengambil tes di pusat tes fisik dibandingkan dengan opsi tes GED online dari rumah (Online Proctored GED Test), jika opsi tersebut tersedia di wilayah Anda dan Anda memenuhi syarat.Selain biaya per mata pelajaran, mungkin ada biaya tambahan untuk layanan seperti penjadwalan ulang, pembatalan, atau pengiriman transkrip resmi ke institusi. Untuk mendapatkan informasi biaya yang paling akurat dan terkini untuk setiap mata pelajaran GED, serta biaya terkait lainnya di lokasi Anda, sangat penting untuk mengunjungi situs web resmi GED Testing Service di GED.com. Anda biasanya dapat melihat rincian biaya saat Anda membuat akun dan mulai menjadwalkan tes."
                },
                {
                    "q": "Tes GED di mana?",
                    "a": "Tes GED harus diambil di pusat tes resmi GED yang telah diakreditasi oleh GED Testing Service atau melalui opsi tes online yang diawasi (Online Proctored GED Test) jika tersedia dan Anda memenuhi persyaratan.Pusat Tes Resmi Fisik: Pusat tes resmi GED tersebar di berbagai lokasi di Amerika Serikat dan beberapa negara lain di seluruh dunia. Tidak semua negara memiliki pusat tes fisik GED. Ketersediaan pusat tes resmi GED di Indonesia atau negara lain di luar AS perlu diverifikasi secara langsung melalui fitur pencarian pusat tes di situs web GED.com.Online Proctored (OP) GED Test: Di beberapa wilayah, GED Testing Service menawarkan opsi untuk mengambil tes GED secara online dari rumah Anda atau lokasi pribadi lainnya. Tes ini diawasi secara langsung oleh pengawas online melalui webcam. Untuk mengambil tes OP GED, Anda harus memenuhi persyaratan teknis (komputer, webcam, mikrofon, koneksi internet yang stabil), persyaratan sistem (menjalankan GED® Test System Check), dan memiliki skor “Hijau” (Green/Likely to Pass) pada tes latihan resmi GED Ready® untuk mata pelajaran yang akan diambil.Selalu pastikan Anda mendaftar dan mengikuti tes melalui saluran resmi GED Testing Service."
                },
                {
                    "q": "Kapan jadwal tes GED?",
                    "a": "Jadwal tes GED, baik untuk tes di pusat tes fisik maupun tes online yang diawasi, tergantung pada ketersediaan di masing-masing pusat tes atau ketersediaan slot pengawas online.Di Pusat Tes Fisik: Jadwal biasanya cukup fleksibel, dengan banyak pusat tes menawarkan tes pada berbagai hari dalam seminggu dan berbagai sesi waktu. Anda dapat mencari pusat tes terdekat dan melihat jadwal yang tersedia saat Anda melakukan proses pendaftaran dan penjadwalan melalui akun Anda di situs GED.com.Tes Online yang Diawasi (OP GED Test): Untuk opsi online, jadwal seringkali lebih fleksibel lagi, dengan potensi ketersediaan 24/7 tergantung pada zona waktu dan ketersediaan pengawas.Setelah Anda membuat akun di GED.com dan siap menjadwalkan tes untuk satu atau lebih mata pelajaran, sistem akan menampilkan tanggal dan waktu yang tersedia berdasarkan lokasi atau pilihan tes online. Disarankan untuk menjadwalkan tes Anda segera setelah Anda merasa siap, terutama jika Anda memiliki preferensi tanggal tertentu."
                },
                {
                    "q": "Sertifikat GED valid berapa lama?",
                    "a": "Sertifikat GED, yang secara resmi dikenal sebagai GED® Credential, adalah dokumen yang menunjukkan bahwa Anda telah berhasil lulus keempat mata pelajaran tes GED dan telah mencapai tingkat pencapaian akademis yang setara dengan ijazah sekolah menengah atas (SMA) di Amerika Serikat. Sebagai sebuah kredensial pencapaian akademis, sertifikat GED berlaku seumur hidup dan tidak memiliki tanggal kedaluwarsa.Ini berarti Anda dapat menggunakan kredensial GED Anda kapan saja di masa depan untuk berbagai tujuan, seperti mendaftar ke perguruan tinggi atau universitas yang menerimanya, melamar pekerjaan yang mensyaratkan ijazah setara SMA, atau untuk pengembangan karir lainnya. Namun, seperti halnya kualifikasi akademis lainnya, institusi pendidikan atau perusahaan mungkin lebih tertarik pada kredensial yang lebih baru jika ada jeda waktu yang sangat signifikan sejak Anda mendapatkannya, tetapi validitas formalnya tetap seumur hidup."
                },
                {
                    "q": "Apa saja mata pelajaran dalam tes GED?",
                    "a": "Tes GED dirancang untuk mengukur pengetahuan dan keterampilan akademis yang setara dengan lulusan sekolah menengah atas (SMA) di Amerika Serikat. Tes ini terdiri dari empat mata pelajaran utama yang harus Anda lulus untuk mendapatkan GED® Credential:Mathematical Reasoning (Penalaran Matematis): Bagian ini menguji kemampuan Anda dalam memecahkan masalah matematika kuantitatif dan aljabar. Topik yang diujikan meliputi matematika dasar, geometri, aljabar dasar, serta grafik dan fungsi. Anda diizinkan menggunakan kalkulator (baik yang disediakan di layar maupun kalkulator genggam tertentu) untuk sebagian besar soal.Reasoning Through Language Arts (RLA) (Penalaran Melalui Seni Berbahasa): Bagian ini mengintegrasikan kemampuan membaca dan menulis. Anda akan diminta untuk membaca dan menganalisis berbagai jenis teks (fiksi dan non-fiksi), mengidentifikasi argumen, menarik kesimpulan, dan memahami penggunaan bahasa. Selain itu, Anda akan diuji kemampuannya dalam tata bahasa, penggunaan bahasa Inggris standar, dan menulis esai argumentatif berdasarkan teks yang diberikan.Social Studies (Ilmu Sosial): Bagian ini menguji pemahaman Anda tentang konsep-konsep utama dalam empat bidang ilmu sosial: kewarganegaraan dan pemerintahan (civics and government), sejarah Amerika Serikat (U.S. history), ekonomi (economics), serta geografi dan dunia (geography and the world). Fokusnya adalah pada kemampuan membaca, menganalisis teks ilmu sosial, dan menerapkan konsep.Science (Ilmu Pengetahuan Alam): Bagian ini menguji pemahaman Anda tentang konsep-konsep dasar dalam tiga bidang utama ilmu pengetahuan alam: ilmu hayati (life science), ilmu fisika (physical science meliputi fisika dan kimia), serta ilmu bumi dan antariksa (earth and space science). Tes ini menekankan pada kemampuan membaca dan menafsirkan teks ilmiah, serta menerapkan konsep dan penalaran ilmiah."
                },
                {
                    "q": "Jadwal kursus/bimbingan GED di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education dapat menyediakan program bimbingan persiapan yang terstruktur dan disesuaikan untuk membantu Anda menguasai materi di keempat mata pelajaran tes GED: Mathematical Reasoning, Reasoning Through Language Arts (RLA), Social Studies, dan Science. Kami fokus pada pemahaman konsep, pengembangan keterampilan berpikir kritis yang dibutuhkan untuk setiap subjek, dan strategi pengerjaan soal yang efektif.Karena program bimbingan GED kami seringkali disesuaikan dengan kebutuhan individu, jadwal biasanya bersifat fleksibel dan dirancang untuk mengakomodasi ketersediaan waktu Anda. Sebagian besar bimbingan GED kami dilakukan dalam format privat atau semi-privat untuk memastikan perhatian yang mendalam.Untuk mendapatkan informasi lebih lanjut mengenai ketersediaan bimbingan untuk mata pelajaran GED tertentu, bagaimana kami dapat menyusun jadwal yang sesuai untuk Anda, serta rincian biaya program bimbingan, silakan hubungi tim konsultan pendidikan kami. Mereka akan dengan senang hati membahas kebutuhan spesifik Anda. Anda dapat menghubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat memiliki sertifikat GED?",
                    "a": "Memperoleh GED® Credential menawarkan sejumlah manfaat penting yang dapat membuka berbagai peluang bagi individu:Setara dengan Ijazah SMA: Manfaat utama adalah bahwa kredensial GED diakui secara luas sebagai setara dengan ijazah sekolah menengah atas (SMA) tradisional di Amerika Serikat dan oleh banyak institusi serta perusahaan di negara lain. Ini sangat berharga bagi mereka yang tidak menyelesaikan SMA karena berbagai alasan.Akses ke Pendidikan Tinggi: Dengan kredensial GED, Anda memiliki kesempatan untuk mendaftar ke community colleges, universitas (baik program associate maupun bachelor), dan sekolah kejuruan di Amerika Serikat dan beberapa negara lain yang mengakui GED. Ini membuka jalan untuk pendidikan lebih lanjut dan peningkatan kualifikasi.Peluang Kerja yang Lebih Baik: Banyak pekerjaan entry-level hingga mid-level mensyaratkan minimal ijazah SMA atau yang setara. Memiliki GED dapat memenuhi persyaratan ini dan meningkatkan peluang Anda untuk mendapatkan pekerjaan yang lebih baik, stabil, dan dengan potensi gaji yang lebih tinggi.Pengembangan Karir dan Promosi: Bagi mereka yang sudah bekerja, GED dapat menjadi langkah penting untuk kemajuan karir atau promosi jabatan yang mungkin sebelumnya terhalang karena tidak memiliki ijazah setara SMA.Peningkatan Kepercayaan Diri dan Pencapaian Pribadi: Berhasil menyelesaikan tes GED dan mendapatkan kredensial adalah pencapaian pribadi yang signifikan yang dapat meningkatkan rasa percaya diri dan motivasi untuk meraih tujuan lain dalam hidup.Memenuhi Persyaratan Militer atau Program Pelatihan Lainnya: Beberapa cabang militer atau program pelatihan kerja tertentu mungkin menerima GED sebagai kualifikasi yang memenuhi syarat."
                },
                {
                    "q": "Bisa kasih contoh soal GED?",
                    "a": "Sumber terbaik dan paling akurat untuk mendapatkan contoh soal dan materi persiapan GED adalah langsung dari GED Testing Service, penyelenggara resmi tes. Menggunakan materi resmi memastikan bahwa Anda berlatih dengan soal-soal yang paling mencerminkan format dan tingkat kesulitan tes yang sebenarnya:GED Ready® Practice Test: Ini adalah tes latihan resmi dari GED Testing Service untuk setiap mata pelajaran. Tes ini berbayar namun sangat direkomendasikan karena memberikan prediksi skor yang akurat (apakah Anda “Likely to Pass,” “Too Close to Call,” atau “Not Likely to Pass”) dan memberikan laporan diagnostik yang menunjukkan area mana yang perlu Anda tingkatkan. Lulus GED Ready® dengan skor “Green” (Likely to Pass) juga merupakan syarat untuk mengambil tes GED online yang diawasi.Contoh Soal Gratis di GED.com: Situs web resmi GED.com menyediakan contoh soal gratis untuk setiap mata pelajaran. Ini adalah cara yang baik untuk mendapatkan gambaran awal tentang jenis-jenis pertanyaan yang akan Anda hadapi.Panduan Belajar dan Tutorial di GED.com: GED.com juga menawarkan berbagai panduan belajar, video tutorial, dan tips strategi untuk membantu Anda mempersiapkan diri.Buku Persiapan GED dari Penerbit Terkemuka: Ada banyak buku persiapan GED yang diterbitkan oleh perusahaan pendidikan terkemuka yang bekerja sama atau berlisensi dengan GED Testing Service. Buku-buku ini seringkali berisi tes latihan penuh, penjelasan konsep, dan latihan soal yang ekstensif.Ultimate Education dalam program bimbingannya menggunakan materi yang relevan dan selaras dengan konten tes GED, termasuk contoh-contoh dari sumber resmi, untuk membantu Anda mempersiapkan diri secara efektif."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan GED di Ultimate Education?",
                    "a": "Untuk mendukung proses bimbingan GED yang efektif dan mudah diakses, Ultimate Education memanfaatkan berbagai media pembelajaran yang disesuaikan dengan kebutuhan siswa:Sesi Online (Daring): Sebagian besar bimbingan GED kami dapat dilakukan secara online melalui platform konferensi video interaktif seperti Google Meet atau Zoom. Ini memungkinkan sesi tatap muka virtual dengan tutor, diskusi materi, latihan soal bersama, dan penggunaan papan tulis digital untuk penjelasan konsep yang kompleks.Sesi Offline (Tatap Muka): Jika memungkinkan dan disepakati, sesi bimbingan juga dapat diadakan secara tatap muka di lokasi yang nyaman, seperti pusat belajar kami (jika tersedia) atau tempat lain yang sesuai.Materi Pembelajaran Digital: Kami menyediakan akses ke berbagai materi digital, termasuk modul kursus dalam format PDF, e-book yang relevan dengan mata pelajaran GED, presentasi, bank soal latihan, dan tautan ke sumber-sumber online yang bermanfaat.Platform Latihan Interaktif: Kami mungkin menggunakan platform e-learning atau perangkat lunak khusus yang menyediakan soal-soal latihan GED dan simulasi tes untuk membantu Anda berlatih secara mandiri dan mengukur kemajuan Anda.Alat Bantu Belajar: Tutor kami juga dapat merekomendasikan penggunaan alat bantu belajar lain seperti video edukasi, artikel, dan sumber daya online gratis yang relevan dengan kurikulum GED."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri untuk bimbingan GED di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat memprioritaskan kualitas bimbingan dan kecocokan antara siswa dengan tutor yang akan membimbing mereka dalam persiapan tes GED. Meskipun sistem kami saat ini tidak secara langsung menyediakan fitur bagi siswa untuk memilih tutor spesifik dari sebuah daftar, kami menerapkan proses yang sangat teliti dalam mencocokkan Anda dengan tutor yang paling sesuai.Tim tutor GED kami adalah para pengajar yang berpengalaman dan memiliki pemahaman yang mendalam tentang kurikulum serta format keempat mata pelajaran tes GED. Saat Anda mendaftar dan setelah sesi konsultasi awal, kami akan mempertimbangkan kebutuhan belajar spesifik Anda, mata pelajaran yang menjadi fokus, gaya belajar Anda, dan preferensi jadwal Anda. Berdasarkan analisis ini, kami akan menugaskan seorang tutor yang kami yakini memiliki keahlian, pengalaman, dan pendekatan mengajar yang paling efektif untuk membantu Anda berhasil dalam tes GED. Tujuan utama kami adalah kesuksesan akademis Anda."
                }
            ]
        }
    },
    {
        "slug": "igcse",
        "originalSlug": "persiapan-igcse",
        "meta": {
            "title": "IGCSE",
            "description": "Raih skor IGCSE impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">IGCSE</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "IGCSE Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus IGCSE di Ultimate Education dirancang untuk membantu siswa meraih nilai terbaik dengan bimbingan tutor berpengalaman, baik native speaker maupun pengajar lokal profesional.",
                "Program ini menggunakan kurikulum up-to-date sesuai format IGCSE terbaru, mencakup mata pelajaran inti seperti English, Mathematics, dan Science, serta subjek pilihan sesuai kebutuhan siswa.",
                "Melalui latihan intensif, strategi belajar efektif, mock test, serta jadwal yang fleksibel, siswa dapat belajar lebih fokus, terarah, dan siap menghadapi ujian IGCSE dengan percaya diri."
            ]
        },
        "pricing": {
            "IGCSE Private Class": {
                "title": "IGCSE Private Class",
                "description": "Program IGCSE Private Class (One-on-One) dirancang untuk pembelajaran yang lebih personal, intensif, dan sesuai kebutuhan individu. Tersedia dalam format offline (tatap muka) maupun online, tutor dapat langsung menargetkan area yang perlu ditingkatkan—misalnya fokus pada Mathematics, English, atau Science. Materi pembelajaran disusun secara tailored, menyesuaikan level kemampuan dan target akademik siswa. Dengan metode ini, pembelajaran menjadi lebih efisien, fokus, dan hasilnya optimal untuk meraih nilai terbaik di IGCSE.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PERTAMA: Introduce Core Concepts & Terminology",
                        "content": "Pada tahap awal, siswa diperkenalkan lebih mendalam pada konsep inti dan istilah penting tiap mata pelajaran IGCSE sebagai dasar sebelum ke materi lanjutan.\nMathematics: mengenal integers, functions, dan equations, lengkap dengan contoh penerapan sederhana agar mudah memahami aljabar dan geometri nantinya.\nSciences: memahami variables, hypothesis, dan istilah percobaan, termasuk cara merumuskan hipotesis dan mengenali variabel bebas–terikat untuk persiapan praktikum ilmiah.\nEnglish: mempelajari literary devices seperti metafora, berbagai text types, serta aturan grammar dasar yang menunjang kemampuan menulis dan menganalisis teks.\nPendekatan ini membantu siswa tidak hanya menghafal istilah, tetapi juga memahami konteks penggunaannya sehingga fondasi belajar mereka menjadi dua kali lebih kuat sebelum masuk ke topik yang lebih kompleks."
                    },
                    {
                        "title": "KEDUA: Deepen Subject-Specific Topics",
                        "content": "Setelah memahami dasar, siswa akan memperdalam materi yang lebih spesifik:\n• Matematika lanjutan: trigonometri, statistik, dan aljabar kompleks\n• Biologi, Kimia, Fisika: topik sistem organ, reaksi kimia, hukum Newton\n• Bahasa Inggris: analisis teks naratif, writing structures\nTahap ini bertujuan membangun pemahaman menyeluruh pada setiap bidang studi."
                    },
                    {
                        "title": "KETIGA: Continue Covering Igcse Syllabus",
                        "content": "Siswa akan menyelesaikan cakupan penuh silabus resmi IGCSE dari Cambridge.\nKami pastikan setiap bab dan topik yang mungkin keluar di ujian dibahas secara tuntas dan mendalam, termasuk latihan-latihan berbasis soal IGCSE asli."
                    },
                    {
                        "title": "KEEMPAT: Focus On Complex Topics & Exam Practice",
                        "content": "Sesi ini berfokus pada topik-topik tersulit yang sering menjadi penyebab rendahnya nilai ujian.\nDilengkapi dengan:\n• Latihan soal berbasis kasus & grafik\n• Pemecahan soal esai dan analitik\n• Time-based exercises\nTujuannya adalah meningkatkan kecepatan, akurasi, dan kepercayaan diri siswa."
                    },
                    {
                        "title": "KELIMA: Conduct Mock Exams & Refine Exam Techniques",
                        "content": "Tahap final adalah simulasi ujian IGCSE dengan format asli. Siswa akan belajar:\n• Teknik menjawab soal objektif & esai secara efisien\n• Manajemen waktu ujian\n• Analisis kesalahan dan peningkatan skor\nHasil mock exam akan digunakan sebagai evaluasi akhir dan dasar strategi menjelang ujian resmi."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "IGCSE Custom Class": {
                "title": "IGCSE Custom Class",
                "description": "Program IGCSE Customized Class cocok bagi siswa dengan waktu terbatas atau kebutuhan spesifik. Dengan pilihan paket fleksibel (dalam kelipatan 3 sesi), siswa dapat menargetkan pembelajaran hanya pada subjek tertentu—misalnya English, Science, atau Mathematics. Kelas ini sepenuhnya personalized: mulai dari fokus pada subjek spesifik, jadwal belajar yang fleksibel, hingga bimbingan intensif dengan strategi belajar yang tepat sasaran. Program ini sangat sesuai untuk siswa SMP/SMA internasional yang ingin mempersiapkan diri menghadapi IGCSE secara efektif dan meraih hasil sesuai target sekolah atau universitas tujuan.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PERTAMA: Introduce Core Concepts & Terminology",
                        "content": "Di tahap awal ini, siswa akan dikenalkan pada konsep-konsep inti dan istilah penting dalam setiap mata pelajaran IGCSE seperti:\n• Mathematics: integers, functions, equations\n• Sciences: variables, hypothesis, experimental terms\n• English: literary devices, text types, grammar rules\nTujuannya adalah membentuk fondasi yang kuat sebelum masuk ke materi yang lebih dalam."
                    },
                    {
                        "title": "KEDUA: Deepen Subject-Specific Topics",
                        "content": "Setelah memahami dasar, siswa akan memperdalam materi yang lebih spesifik:\n• Matematika lanjutan: trigonometri, statistik, dan aljabar kompleks\n• Biologi, Kimia, Fisika: topik sistem organ, reaksi kimia, hukum Newton\n• Bahasa Inggris: analisis teks naratif, writing structures\nTahap ini bertujuan membangun pemahaman menyeluruh pada setiap bidang studi."
                    },
                    {
                        "title": "KETIGA: Continue Covering Igcse Syllabus",
                        "content": "Siswa akan menyelesaikan cakupan penuh silabus resmi IGCSE dari Cambridge.\nKami pastikan setiap bab dan topik yang mungkin keluar di ujian dibahas secara tuntas dan mendalam, termasuk latihan-latihan berbasis soal IGCSE asli."
                    },
                    {
                        "title": "KEEMPAT: Focus On Complex Topics & Exam Practice",
                        "content": "Sesi ini berfokus pada topik-topik tersulit yang sering menjadi penyebab rendahnya nilai ujian.\nDilengkapi dengan:\n• Latihan soal berbasis kasus & grafik\n• Pemecahan soal esai dan analitik\n• Time-based exercises\nTujuannya adalah meningkatkan kecepatan, akurasi, dan kepercayaan diri siswa."
                    },
                    {
                        "title": "KELIMA: Conduct Mock Exams & Refine Exam Techniques",
                        "content": "Tahap final adalah simulasi ujian IGCSE dengan format asli. Siswa akan belajar:\n• Teknik menjawab soal objektif & esai secara efisien\n• Manajemen waktu ujian\n• Analisis kesalahan dan peningkatan skor\nHasil mock exam akan digunakan sebagai evaluasi akhir dan dasar strategi menjelang ujian resmi."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Apa itu IGCSE?",
                    "a": "IGCSE adalah singkatan dari International General Certificate of Secondary Education. Ini adalah salah satu kualifikasi internasional yang paling populer dan diakui secara luas di dunia untuk siswa berusia sekitar 14 hingga 16 tahun, yang setara dengan jenjang Sekolah Menengah Pertama (SMP) akhir hingga Sekolah Menengah Atas (SMA) awal di banyak sistem pendidikan nasional.Kurikulum IGCSE dirancang untuk mengembangkan pengetahuan, pemahaman, dan keterampilan siswa dalam berbagai mata pelajaran. Program ini menekankan pada pengembangan pemikiran kritis, kemampuan analisis, pemecahan masalah, serta keterampilan riset dan komunikasi. Siswa biasanya memilih antara lima hingga sepuluh mata pelajaran dari berbagai kelompok subjek, termasuk bahasa, humaniora, ilmu sosial, matematika, ilmu pengetahuan alam, seni, dan teknologi.IGCSE sering dianggap sebagai landasan yang kuat untuk melanjutkan ke jenjang pendidikan pra-universitas seperti A-Level (Advanced Level), International Baccalaureate (IB) Diploma Programme, atau program foundation universitas. Kualifikasi ini diakui oleh universitas dan perusahaan di seluruh dunia sebagai bukti pencapaian akademis yang solid."
                },
                {
                    "q": "Jadwal kursus/bimbingan IGCSE di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Jadwal kursus/bimbingan IGCSE di Ultimate Education kapan? Berapa biayanya?Ultimate Education menawarkan layanan bimbingan belajar (tutoring) yang disesuaikan secara individual untuk berbagai mata pelajaran dalam kurikulum IGCSE. Tujuan kami adalah membantu siswa memahami konsep-konsep kunci dalam setiap mata pelajaran, mengembangkan strategi belajar yang efektif, mempersiapkan diri secara optimal untuk menghadapi ujian IGCSE, dan pada akhirnya meningkatkan nilai serta potensi akademis mereka.Karena sifat bimbingan IGCSE kami yang sangat personal, jadwal bersifat fleksibel dan akan disesuaikan dengan ketersediaan waktu siswa dan tutor kami. Sebagian besar bimbingan IGCSE kami dilakukan dalam format privat atau semi-privat (kelompok kecil) untuk memastikan perhatian yang maksimal kepada setiap siswa.Untuk mendapatkan informasi lebih lanjut mengenai mata pelajaran IGCSE yang kami tawarkan bimbingannya, ketersediaan tutor, penyusunan jadwal yang sesuai, serta rincian biaya bimbingan, silakan hubungi tim konsultan pendidikan kami. Mereka akan dengan senang hati mendiskusikan kebutuhan spesifik Anda atau anak Anda. Anda dapat menghubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Kapan jadwal ujian IGCSE?",
                    "a": "Ujian IGCSE umumnya diadakan dalam dua sesi utama setiap tahun oleh kedua badan ujian utama (Cambridge dan Pearson Edexcel):Sesi Mei/Juni: Ini adalah sesi ujian terbesar dan paling umum, di mana sebagian besar mata pelajaran ditawarkan.Sesi Oktober/November: Sesi ini juga menawarkan banyak mata pelajaran dan merupakan pilihan bagi siswa yang mungkin perlu mengulang ujian, mengambil mata pelajaran tambahan, atau memiliki jadwal sekolah yang berbeda.Beberapa badan ujian, seperti Cambridge International, juga menawarkan sesi ujian tambahan di bulan Maret, terutama untuk beberapa negara tertentu seperti India, untuk beberapa mata pelajaran.Jadwal pasti untuk setiap mata pelajaran, termasuk tanggal dan waktu spesifik untuk setiap paper ujian, dikeluarkan oleh Cambridge International dan Pearson Edexcel beberapa bulan sebelum periode ujian. Sekolah yang terdaftar sebagai pusat ujian akan mendistribusikan jadwal ini kepada siswa mereka. Siswa privat harus mendapatkan jadwal ini dari pusat ujian tempat mereka mendaftar. Penting untuk memperhatikan batas waktu pendaftaran untuk setiap sesi ujian."
                },
                {
                    "q": "Berapa biaya ujian IGCSE?",
                    "a": "Biaya ujian IGCSE sangat bervariasi dan dipengaruhi oleh beberapa faktor. Faktor utama adalah jumlah mata pelajaran (subjects) yang diambil oleh siswa; setiap mata pelajaran biasanya memiliki biaya ujian tersendiri. Faktor lainnya termasuk pusat ujian (test center) tempat siswa terdaftar – apakah itu sekolah internasional yang menawarkan kurikulum Cambridge atau Pearson Edexcel, atau pusat ujian privat. Badan penyelenggara ujian (Cambridge Assessment International Education atau Pearson Edexcel) juga menetapkan biaya dasar yang kemudian dapat disesuaikan oleh masing-masing pusat ujian dengan memperhitungkan biaya administrasi lokal, pengawasan, dan pengiriman materi ujian.Selain itu, negara tempat ujian diambil juga bisa mempengaruhi total biaya karena perbedaan biaya operasional dan pajak. Sekolah yang menawarkan program IGCSE biasanya akan memberikan rincian biaya ujian per mata pelajaran kepada siswa dan orang tua mereka jauh sebelum periode pendaftaran ujian. Untuk siswa privat (private candidates) yang mendaftar melalui pusat ujian terbuka, biaya mungkin sedikit berbeda dan perlu dikonfirmasi langsung dengan pusat ujian tersebut."
                },
                {
                    "q": "Ujian IGCSE di mana?",
                    "a": "Ujian IGCSE umumnya diselenggarakan di sekolah-sekolah yang telah mendapatkan akreditasi resmi sebagai pusat ujian dari Cambridge Assessment International Education atau Pearson Edexcel. Ini berarti sekolah tersebut telah memenuhi standar fasilitas dan keamanan yang ditetapkan oleh badan ujian. Banyak sekolah internasional di seluruh dunia, termasuk di kota-kota besar di Indonesia, menawarkan kurikulum IGCSE dan menyelenggarakan ujian untuk siswa mereka.Selain sekolah reguler, ada juga “pusat ujian terbuka” (open centres) yang menerima pendaftaran dari siswa privat atau kandidat eksternal yang tidak terdaftar di sekolah yang menawarkan IGCSE. Informasi mengenai pusat ujian terakreditasi, termasuk pusat ujian terbuka, biasanya dapat ditemukan melalui situs web resmi Cambridge International atau Pearson Edexcel, yang seringkali memiliki fitur pencarian sekolah atau pusat ujian berdasarkan lokasi. Penting untuk memastikan bahwa pusat ujian yang dipilih terakreditasi secara resmi untuk mata pelajaran IGCSE yang akan diambil."
                },
                {
                    "q": "Sertifikat IGCSE valid berapa lama?",
                    "a": "Sertifikat IGCSE yang Anda terima setelah berhasil menyelesaikan ujian adalah kualifikasi akademis yang formal dan diakui secara internasional. Sebagai sebuah kualifikasi pencapaian pendidikan pada tingkat sekolah menengah, sertifikat IGCSE tidak memiliki tanggal kedaluwarsa dan berlaku seumur hidup.Artinya, hasil yang tercantum pada sertifikat Anda akan tetap menjadi catatan permanen atas pencapaian akademis Anda pada saat itu. Anda dapat menggunakan sertifikat IGCSE Anda kapan saja di masa depan untuk aplikasi ke jenjang pendidikan yang lebih tinggi (seperti A-Level, IB Diploma, Foundation Programs, atau beberapa program universitas), atau untuk keperluan aplikasi kerja yang mungkin mensyaratkan bukti pendidikan setingkat sekolah menengah. Namun, perlu diingat bahwa beberapa institusi pendidikan tinggi mungkin lebih tertarik pada kualifikasi yang lebih baru jika ada jeda waktu yang sangat lama sejak Anda menyelesaikan IGCSE."
                },
                {
                    "q": "Manfaat memiliki kualifikasi IGCSE?",
                    "a": "Memiliki kualifikasi IGCSE memberikan sejumlah manfaat penting bagi perkembangan akademis dan peluang masa depan siswa:Pengakuan Internasional: IGCSE diakui oleh universitas, institusi pendidikan, dan perusahaan di lebih dari 160 negara di seluruh dunia. Ini membuka pintu untuk melanjutkan studi atau berkarir di berbagai belahan dunia.Dasar Akademis yang Kuat: Kurikulum IGCSE dirancang untuk memberikan dasar pengetahuan dan pemahaman yang solid dalam berbagai mata pelajaran, mempersiapkan siswa dengan baik untuk tantangan akademis di jenjang yang lebih tinggi seperti A-Level, IB Diploma, atau program sarjana.Pengembangan Keterampilan Abad ke-21: Selain pengetahuan konten, IGCSE mendorong pengembangan keterampilan penting seperti berpikir kritis, analisis, evaluasi, pemecahan masalah, penelitian mandiri, kerja tim (dalam beberapa proyek), dan komunikasi yang efektif.Fleksibilitas Pilihan Mata Pelajaran: Siswa dapat memilih kombinasi mata pelajaran yang sesuai dengan minat, bakat, dan rencana karir atau studi mereka di masa depan, memungkinkan adanya spesialisasi dini atau eksplorasi berbagai bidang ilmu.Persiapan untuk Sistem Pendidikan Global: Bagi siswa yang berencana untuk belajar di luar negeri, IGCSE membantu mereka beradaptasi dengan gaya belajar dan standar penilaian yang umum digunakan dalam sistem pendidikan internasional.Meningkatkan Kemampuan Bahasa Inggris (bagi banyak siswa): Karena banyak materi dan ujian IGCSE disampaikan dalam bahasa Inggris, program ini secara signifikan dapat meningkatkan kemahiran berbahasa Inggris siswa, terutama dalam konteks akademis."
                },
                {
                    "q": "Bisa kasih contoh soal/materi IGCSE?",
                    "a": "Cara terbaik untuk mendapatkan contoh soal (dikenal sebagai “past papers” atau kertas ujian tahun-tahun sebelumnya), silabus mata pelajaran, skema penilaian (mark schemes), dan laporan penguji (examiner reports) adalah melalui sumber-sumber resmi dari badan ujian yang menyelenggarakan IGCSE:Cambridge Assessment International Education: Situs web mereka (cambridgeinternational.org) menyediakan akses ke berbagai sumber daya ini untuk setiap mata pelajaran IGCSE yang mereka tawarkan. Biasanya, beberapa past papers terbaru dapat diunduh secara gratis, sementara arsip yang lebih lengkap mungkin memerlukan langganan atau akses melalui sekolah yang terdaftar.Pearson Edexcel: Demikian pula, situs web Pearson Edexcel (qualifications.pearson.com) menyediakan spesifikasi kualifikasi, past papers, mark schemes, dan materi pendukung lainnya untuk mata pelajaran IGCSE mereka.Banyak sekolah yang menawarkan kurikulum IGCSE juga menyediakan akses ke sumber daya ini bagi siswa mereka, baik melalui portal internal sekolah atau perpustakaan. Selain itu, ada berbagai buku teks, buku panduan revisi, dan situs web pendidikan pihak ketiga yang menawarkan materi latihan dan penjelasan konsep IGCSE, namun pastikan materi tersebut selaras dengan silabus terbaru.Dalam sesi bimbingan IGCSE di Ultimate Education, tutor kami menggunakan materi yang sesuai dengan silabus terkini dari Cambridge atau Pearson Edexcel, termasuk latihan menggunakan past papers dan pengembangan pemahaman konsep melalui berbagai sumber yang relevan."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Sesi Online (Daring): Untuk bimbingan online, kami menggunakan platform konferensi video interaktif seperti Google Meet atau Zoom. Ini memungkinkan sesi tatap muka virtual, diskusi langsung, pembagian layar untuk menjelaskan konsep atau mengerjakan soal bersama, dan penggunaan papan tulis digital. Siswa memerlukan koneksi internet yang stabil dan perangkat yang sesuai.Sesi Offline (Tatap Muka): Jika memungkinkan dan disepakati, sesi bimbingan juga dapat dilakukan secara tatap muka di lokasi yang nyaman bagi siswa dan tutor, seperti di pusat belajar kami (jika tersedia) atau di rumah siswa (dengan pertimbangan tertentu).Materi Digital: Kami menggunakan berbagai materi digital, termasuk PDF modul pembelajaran, e-book, presentasi, video penjelasan, dan akses ke bank soal atau platform latihan online yang relevan dengan mata pelajaran IGCSE yang diambil.Past Papers dan Sumber Resmi: Penggunaan past papers dari Cambridge atau Pearson Edexcel adalah komponen penting dalam bimbingan kami untuk membiasakan siswa dengan format ujian dan jenis pertanyaan."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat memahami betapa pentingnya kecocokan antara siswa dan tutor untuk menciptakan lingkungan belajar yang produktif dan mendukung, terutama untuk bimbingan IGCSE yang seringkali membutuhkan pemahaman mendalam pada mata pelajaran spesifik.Meskipun kami tidak memiliki sistem di mana siswa dapat secara langsung memilih tutor dari sebuah daftar, kami berusaha semaksimal mungkin untuk mengakomodasi preferensi Anda. Ketika Anda atau orang tua Anda berkonsultasi dengan kami, kami akan mendiskusikan kebutuhan spesifik siswa, mata pelajaran yang dibutuhkan, gaya belajar, target akademis, dan preferensi jadwal. Berdasarkan informasi ini, tim kami akan berusaha mencocokkan siswa dengan tutor yang memiliki keahlian spesifik pada mata pelajaran IGCSE yang relevan, pengalaman mengajar yang terbukti, dan pendekatan yang kami yakini akan paling efektif untuk siswa tersebut. Jika Anda memiliki preferensi tertentu (misalnya, berdasarkan rekomendasi atau pengalaman sebelumnya dengan sistem kami), kami akan mempertimbangkannya dengan serius dalam proses pencocokan."
                }
            ]
        }
    },
    {
        "slug": "toefl",
        "originalSlug": "kursus-persiapan-toefl",
        "meta": {
            "title": "Kursus Persiapan TOEFL - Ultimate Education",
            "description": "Raih skor TOEFL impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">TOEFL</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "TOEFL Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus persiapan TOEFL di Ultimate Education dirancang bagi Anda yang menargetkan skor TOEFL tinggi untuk kuliah di luar negeri, beasiswa, atau kebutuhan profesional internasional. Program ini berfokus pada peningkatan skor secara terukur melalui bimbingan tutor berpengalaman (native speaker dan pengajar profesional), dengan kurikulum terbaru yang mengikuti standar resmi TOEFL.",
                "• TOEFL iBT: fokus pada 4 keterampilan utama—Reading, Listening, Speaking, dan Writing. Cocok untuk studi internasional, beasiswa, atau kebutuhan profesional global.",
                "• TOEFL ITP: fokus pada Listening, Structure & Written Expression, serta Reading. Ideal untuk syarat akademik, seleksi beasiswa, maupun karier.",
                "Setiap peserta mendapatkan latihan soal TOEFL, mock test berkala, serta evaluasi perkembangan skor. Dengan jadwal belajar yang fleksibel dan pendampingan intensif, kursus persiapan TOEFL ini membantu Anda mencapai skor target secara lebih efektif dan meningkatkan peluang kuliah di luar negeri."
            ]
        },
        "pricing": {
            "TOEFL GROUP CLASS": {
                "title": "TOEFL GROUP CLASS",
                "description": "Program TOEFL Group Class hadir dengan metode semi-privat, menghadirkan suasana belajar yang fokus dan interaktif dalam kelas berukuran kecil (5–7 siswa). Melalui diskusi, latihan soal, dan simulasi tes, peserta lebih mudah memahami materi dan membangun kepercayaan diri menghadapi ujian internasional. Peserta akan mendapatkan pembelajaran komprehensif sesuai jenis tes yang diambil: TOEFL iBT: mencakup Reading, Listening, Speaking, dan Writing TOEFL ITP: mencakup Listening, Structure, dan Reading Dengan strategi yang tepat dan pendekatan yang menyeluruh, siswa siap menaklukkan ujian TOEFL dengan hasil optimal.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum mengikuti kelas intensif TOEFL iBT & iTP®, peserta akan mengikuti diagnostic test untuk mengetahui kemampuan awal pada empat skills utama: Reading, Listening, Speaking, dan Writing.\nHasil tes ini akan digunakan untuk menyusun personalized study plan, agar proses belajar lebih fokus, efektif, dan sesuai dengan target skor masing-masing peserta."
                    },
                    {
                        "title": "PERTAMA: Understand the TOEFL iBT & iTP® Structure & Strategy Basics",
                        "content": "Tahap awal ini bertujuan mengenalkan peserta pada format resmi TOEFL iBT®:\n• Pengenalan format ujian berbasis komputer\n• Struktur dan waktu tiap section\n• Sistem skor (0–120) dan passing score universitas\n• Strategi dasar menjawab soal secara efisien di setiap bagian\nDengan pemahaman struktur ini, peserta akan memiliki panduan belajar yang terarah sejak awal."
                    },
                    {
                        "title": "KEDUA: Skill-by-Skill Development",
                        "content": "Fokus pada penguasaan materi dan teknik menjawab soal di setiap section:\n• Reading: strategi scanning, skimming, inference & vocabulary in context\n• Listening: memahami lecture, mencatat poin penting, membedakan opini dan fakta\n• Speaking: speaking templates, pronunciation, coherence, dan time limit practice\n• Writing: integrated & independent essay structure, coherence, paraphrasing & grammar\nSetiap materi dilengkapi latihan berbasis soal resmi TOEFL dan pembahasan mendalam."
                    },
                    {
                        "title": "KETIGA: Full TOEFL iBT & iTP® Syllabus Coverage + Skill Integration",
                        "content": "Pada tahap ini, peserta akan menjalani integrasi empat skill utama sesuai dengan struktur soal resmi:\n• Latihan soal terpadu (misal: Listening → Speaking, Reading → Writing)\n• Penguasaan grammar dan vocabulary kontekstual\n• Penggunaan idiom dan academic expressions\n• Sesi skill integration & critical thinking enhancement"
                    },
                    {
                        "title": "KEEMPAT: Focus on Advanced Practice & Time Management",
                        "content": "Peserta akan dilatih untuk:\n• Menghadapi soal TOEFL tingkat lanjut dengan durasi terbatas\n• Mengembangkan teknik menjawab cepat tanpa kehilangan akurasi\n• Melatih note-taking yang efektif pada Listening dan Speaking\n• Memperkuat kemampuan berpikir cepat saat Speaking dan Writing"
                    },
                    {
                        "title": "KELIMA: Full-Length Mock Tests & Score Optimization",
                        "content": "Tahap akhir berupa simulasi ujian TOEFL iBT secara penuh dan mendekati kondisi sebenarnya.Peserta akan:\n• Mendapat feedback personal untuk tiap section\n• Menganalisis kekurangan dan memperbaikinya\n• Mengasah strategi agar performa stabil di bawah tekanan waktu\n• Latihan membuat essay dengan standar penilaian ETS"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOEFL PRIVATE clASS": {
                "title": "TOEFL PRIVATE clASS",
                "description": "Untuk Anda yang menginginkan pembelajaran lebih intensif dan personal, Program TOEFL 1-on-1 (Private Class) adalah pilihan terbaik. Tersedia dalam format offline (tatap muka) maupun online (daring), kelas ini dirancang fleksibel mengikuti kebutuhan dan gaya belajar siswa. Tutor akan menargetkan langsung area yang perlu ditingkatkan sesuai jenis tes yang diambil: TOEFL iBT: Reading, Listening, Speaking, dan Writing TOEFL ITP: Listening, Structure, dan Reading Materi disusun secara tailored (disesuaikan) dengan kemampuan awal dan target skor individu. Dengan pendekatan ini, pembelajaran menjadi lebih fokus, efisien, dan hasilnya optimal.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum mengikuti kelas intensif TOEFL iBT & iTP®, peserta akan mengikuti diagnostic test untuk mengetahui kemampuan awal pada empat skills utama: Reading, Listening, Speaking, dan Writing.\nHasil tes ini akan digunakan untuk menyusun personalized study plan, agar proses belajar lebih fokus, efektif, dan sesuai dengan target skor masing-masing peserta."
                    },
                    {
                        "title": "PERTAMA: Understand the TOEFL iBT & iTP® Structure & Strategy Basics",
                        "content": "Tahap awal ini bertujuan mengenalkan peserta pada format resmi TOEFL iBT®:\n• Pengenalan format ujian berbasis komputer\n• Struktur dan waktu tiap section\n• Sistem skor (0–120) dan passing score universitas\n• Strategi dasar menjawab soal secara efisien di setiap bagian\nDengan pemahaman struktur ini, peserta akan memiliki panduan belajar yang terarah sejak awal."
                    },
                    {
                        "title": "KEDUA: Skill-by-Skill Development",
                        "content": "Fokus pada penguasaan materi dan teknik menjawab soal di setiap section:\n• Reading: strategi scanning, skimming, inference & vocabulary in context\n• Listening: memahami lecture, mencatat poin penting, membedakan opini dan fakta\n• Speaking: speaking templates, pronunciation, coherence, dan time limit practice\n• Writing: integrated & independent essay structure, coherence, paraphrasing & grammar\nSetiap materi dilengkapi latihan berbasis soal resmi TOEFL dan pembahasan mendalam."
                    },
                    {
                        "title": "KETIGA: Full TOEFL iBT & iTP® Syllabus Coverage + Skill Integration",
                        "content": "Pada tahap ini, peserta akan menjalani integrasi empat skill utama sesuai dengan struktur soal resmi:\n• Latihan soal terpadu (misal: Listening → Speaking, Reading → Writing)\n• Penguasaan grammar dan vocabulary kontekstual\n• Penggunaan idiom dan academic expressions\n• Sesi skill integration & critical thinking enhancement"
                    },
                    {
                        "title": "KEEMPAT: Focus on Advanced Practice & Time Management",
                        "content": "Peserta akan dilatih untuk:\n• Menghadapi soal TOEFL tingkat lanjut dengan durasi terbatas\n• Mengembangkan teknik menjawab cepat tanpa kehilangan akurasi\n• Melatih note-taking yang efektif pada Listening dan Speaking\n• Memperkuat kemampuan berpikir cepat saat Speaking dan Writing"
                    },
                    {
                        "title": "KELIMA: Full-Length Mock Tests & Score Optimization",
                        "content": "Tahap akhir berupa simulasi ujian TOEFL iBT secara penuh dan mendekati kondisi sebenarnya.Peserta akan:\n• Mendapat feedback personal untuk tiap section\n• Menganalisis kekurangan dan memperbaikinya\n• Mengasah strategi agar performa stabil di bawah tekanan waktu\n• Latihan membuat essay dengan standar penilaian ETS"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOEFL CUSTOM CLASS": {
                "title": "TOEFL CUSTOM CLASS",
                "description": "Program TOEFL Customized Class dirancang untuk peserta dengan waktu terbatas atau kebutuhan khusus. Dengan pilihan paket fleksibel (kelipatan 3 sesi), siswa dapat menargetkan area tertentu sesuai prioritas—misalnya Listening, Structure, Reading (TOEFL ITP) atau Speaking, Writing, Reading, Listening (TOEFL iBT). Kelas ini sepenuhnya personalized: jadwal fleksibel, fokus sesuai kebutuhan, serta bimbingan intensif dari tutor berpengalaman. Sangat ideal bagi pelajar maupun profesional yang ingin mempersiapkan TOEFL secara efektif dan meraih skor sesuai target.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum mengikuti kelas intensif TOEFL iBT & iTP®, peserta akan mengikuti diagnostic test untuk mengetahui kemampuan awal pada empat skills utama: Reading, Listening, Speaking, dan Writing.\nHasil tes ini akan digunakan untuk menyusun personalized study plan, agar proses belajar lebih fokus, efektif, dan sesuai dengan target skor masing-masing peserta."
                    },
                    {
                        "title": "PERTAMA: Understand the TOEFL iBT & iTP® Structure & Strategy Basics",
                        "content": "Tahap awal ini bertujuan mengenalkan peserta pada format resmi TOEFL iBT®:\n• Pengenalan format ujian berbasis komputer\n• Struktur dan waktu tiap section\n• Sistem skor (0–120) dan passing score universitas\n• Strategi dasar menjawab soal secara efisien di setiap bagian\nDengan pemahaman struktur ini, peserta akan memiliki panduan belajar yang terarah sejak awal."
                    },
                    {
                        "title": "KEDUA: Skill-by-Skill Development",
                        "content": "Fokus pada penguasaan materi dan teknik menjawab soal di setiap section:\n• Reading: strategi scanning, skimming, inference & vocabulary in context\n• Listening: memahami lecture, mencatat poin penting, membedakan opini dan fakta\n• Speaking: speaking templates, pronunciation, coherence, dan time limit practice\n• Writing: integrated & independent essay structure, coherence, paraphrasing & grammar\nSetiap materi dilengkapi latihan berbasis soal resmi TOEFL dan pembahasan mendalam."
                    },
                    {
                        "title": "KETIGA: Full TOEFL iBT & iTP® Syllabus Coverage + Skill Integration",
                        "content": "Pada tahap ini, peserta akan menjalani integrasi empat skill utama sesuai dengan struktur soal resmi:\n• Latihan soal terpadu (misal: Listening → Speaking, Reading → Writing)\n• Penguasaan grammar dan vocabulary kontekstual\n• Penggunaan idiom dan academic expressions\n• Sesi skill integration & critical thinking enhancement"
                    },
                    {
                        "title": "KEEMPAT: Focus on Advanced Practice & Time Management",
                        "content": "Peserta akan dilatih untuk:\n• Menghadapi soal TOEFL tingkat lanjut dengan durasi terbatas\n• Mengembangkan teknik menjawab cepat tanpa kehilangan akurasi\n• Melatih note-taking yang efektif pada Listening dan Speaking\n• Memperkuat kemampuan berpikir cepat saat Speaking dan Writing"
                    },
                    {
                        "title": "KELIMA: Full-Length Mock Tests & Score Optimization",
                        "content": "Tahap akhir berupa simulasi ujian TOEFL iBT secara penuh dan mendekati kondisi sebenarnya.Peserta akan:\n• Mendapat feedback personal untuk tiap section\n• Menganalisis kekurangan dan memperbaikinya\n• Mengasah strategi agar performa stabil di bawah tekanan waktu\n• Latihan membuat essay dengan standar penilaian ETS"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOEFL IBT": {
                "title": "TOEFL IBT",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TOEFL ITP": {
                "title": "TOEFL ITP",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Ultimate Toefl": {
                "title": "Ultimate Toefl",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": [
                {
                    "name": "Evan Tjoa Putra",
                    "program": "Ultimate TOEFL",
                    "quote": "\"I really love learning with Mr. Jene! He’s not only a great teacher but also very supportive and motivating. It’s not just about how well he explains the TOEFL materials, but also how he inspires me to put more effort and energy into my study. He’s a great communicator, and I also enjoy our discussions beyond just the teaching materials. That connection makes the learning experience even more valuable. Love it!\""
                },
                {
                    "name": "Nadia Aulia",
                    "program": "Ultimate TOEFL",
                    "quote": "\"Kelas TOEFL bareng Mr. Fayyadh seru dan cukup efektif. Cara ngajarnya runut dan gampang diikutin. Walaupun masih bisa lebih dikembangin lagi, tapi aku udah merasa puas karena progress belajarnya kerasa.\""
                }
            ]
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes TOEFL iBT dan TOEFL ITP?",
                    "a": "TOEFL iBT: Biaya tes TOEFL iBT bervariasi berdasarkan negara dan pusat tes tempat Anda mengambil ujian. ETS (Educational Testing Service), sebagai penyelenggara TOEFL, menetapkan biaya standar dalam Dolar AS, namun biaya yang Anda bayarkan dalam mata uang lokal (misalnya Rupiah) akan tergantung pada nilai tukar yang berlaku pada saat pendaftaran dan kebijakan regional. Selain biaya pendaftaran utama, ada juga biaya tambahan untuk layanan-layanan opsional seperti: Pendaftaran terlambat (late registration fee). Penjadwalan ulang tes (rescheduling fee). Pembatalan tes dengan pengembalian dana sebagian (cancellation with partial refund). Reinstate skor yang telah dibatalkan. Laporan skor tambahan (Additional Score Reports) yang dikirim ke lebih banyak institusi daripada yang termasuk dalam biaya awal. Peninjauan ulang skor untuk bagian Speaking dan/atau Writing (Score Review). Untuk mengetahui biaya pasti tes TOEFL iBT di Indonesia, cara terbaik adalah mengunjungi situs web resmi TOEFL di www.ets.org/toefl dan membuat akun. TOEFL ITP: Biaya tes TOEFL ITP umumnya lebih terjangkau dibandingkan TOEFL iBT. Biaya ini ditetapkan oleh institusi (universitas, sekolah bahasa, dll.) yang menyelenggarakan tes tersebut, bukan langsung oleh ETS untuk peserta individu. Oleh karena itu, biayanya bisa sangat bervariasi antar institusi. Biaya layanan tambahan (jika ada) juga ditentukan oleh institusi penyelenggara. Untuk mengetahui biaya pastinya, Anda perlu menghubungi institusi tempat Anda berencana mengambil tes TOEFL ITP."
                },
                {
                    "q": "Tes TOEFL iBT dan TOEFL ITP di mana?",
                    "a": "TOEFL iBT: Diselenggarakan di jaringan pusat tes resmi yang tersebar di lebih dari 160 negara, termasuk banyak kota besar di Indonesia. Pusat tes ini disertifikasi oleh ETS. Selain itu, ada TOEFL iBT Home Edition, yang memungkinkan Anda tes dari rumah dengan pengawasan online, asalkan memenuhi persyaratan teknis dan lingkungan. Ketersediaan Home Edition bisa dicek di situs ETS. TOEFL ITP: Diselenggarakan oleh institusi akademik atau organisasi yang telah membeli lisensi dari ETS untuk menggunakan tes ini. Biasanya, tes ini diadakan di kampus universitas, sekolah bahasa, atau lembaga pendidikan lainnya untuk keperluan internal mereka (misalnya, syarat kelulusan, penempatan program, evaluasi kemajuan belajar). TOEFL ITP tidak memiliki opsi Home Edition dan tidak diselenggarakan di pusat tes publik ETS seperti iBT."
                },
                {
                    "q": "Kapan jadwal tes TOEFL iBT dan TOEFL ITP?",
                    "a": "TOEFL iBT: Tes di pusat tes resmi biasanya ditawarkan lebih dari 60 kali setahun, seringkali pada akhir pekan. Untuk TOEFL iBT Home Edition, jadwal sering tersedia 24 jam sehari, beberapa hari dalam seminggu. Anda dapat mengecek jadwal spesifik dan mendaftar melalui akun ETS Anda di situs resmi TOEFL. TOEFL ITP: Jadwal tes TOEFL ITP sepenuhnya ditentukan oleh institusi yang menyelenggarakannya. Tidak ada jadwal terpusat dari ETS yang bisa dilihat publik. Anda perlu menghubungi langsung institusi (misalnya, universitas atau sekolah bahasa Anda) untuk mengetahui jadwal tes ITP yang mereka tawarkan."
                },
                {
                    "q": "Skor TOEFL iBT dan TOEFL ITP valid berapa lama?",
                    "a": "TOEFL iBT: Skor TOEFL iBT Anda secara resmi berlaku dan dapat dilaporkan ke institusi selama dua (2) tahun terhitung sejak tanggal Anda mengambil tes. TOEFL ITP: Skor TOEFL ITP juga umumnya dianggap valid selama dua (2) tahun sejak tanggal tes. Namun, penting untuk diingat bahwa penggunaan skor ITP lebih terbatas. Institusi yang menerima skor ITP mungkin memiliki kebijakan sendiri mengenai batas usia skor yang dapat diterima, terutama jika skor tersebut akan digunakan untuk tujuan di luar institusi penyelenggara tes awal."
                },
                {
                    "q": "Apa saja bagian dalam tes TOEFL iBT dan TOEFL ITP?",
                    "a": "TOEFL iBT: Menilai empat keterampilan bahasa Inggris akademis yang terintegrasi: Reading (Membaca): Memahami teks akademis. Listening (Mendengarkan): Memahami percakapan dan perkuliahan akademis. Speaking (Berbicara): Mengungkapkan opini dan merangkum informasi dari materi bacaan/dengaran. Writing (Menulis): Menulis esai berdasarkan materi bacaan/dengaran dan menyatakan opini dalam diskusi online. TOEFL ITP: Merupakan tes berbasis kertas (Paper-Based Test) yang mengukur tiga aspek kemahiran bahasa Inggris, terutama berfokus pada keterampilan reseptif: Listening Comprehension (Pemahaman Mendengarkan): Memahami bahasa Inggris lisan dalam berbagai konteks. Structure and Written Expression (Struktur dan Ungkapan Tertulis): Mengenali struktur dan tata bahasa yang benar dalam kalimat standar bahasa Inggris tertulis. Reading Comprehension (Pemahaman Membaca): Memahami teks non-teknis. Tes TOEFL ITP tidak memiliki bagian Speaking (Berbicara) atau bagian Menulis esai bebas seperti pada TOEFL iBT."
                },
                {
                    "q": "Jadwal kursus TOEFL iBT dan TOEFL ITP di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education memiliki program persiapan TOEFL iBT dan kemungkinan besar juga untuk TOEFL ITP, yang dirancang untuk membantu Anda mencapai skor target. Kami menawarkan berbagai pilihan jadwal, termasuk kelas grup dan privat, dengan materi terbaru dan strategi efektif. Untuk mendapatkan informasi paling detail dan terkini mengenai: Jadwal kelas TOEFL iBT dan TOEFL ITP yang tersedia. Pilihan program belajar yang kami tawarkan. Rincian biaya kursus yang kompetitif dan promosi spesial. Kami mengundang Anda untuk berkonsultasi langsung dengan tim konsultan pendidikan kami. Silakan hubungi kami melalui: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor TOEFL iBT dan TOEFL ITP?",
                    "a": "TOEFL iBT: Penerimaan Universitas Global: Diterima oleh lebih dari 11.500 universitas di lebih dari 160 negara. Aplikasi Beasiswa dan Bantuan Keuangan Internasional. Keperluan Imigrasi dan Visa: Di negara seperti Australia, Selandia Baru, Inggris, dan Kanada. Sertifikasi dan Lisensi Profesional Internasional. Pengembangan Pribadi dan Profesional untuk lingkungan global. Pengukuran Kemahiran Bahasa yang Objektif dan diakui secara internasional. TOEFL ITP: Penempatan Program Bahasa Inggris: Di dalam institusi lokal (universitas, sekolah bahasa). Monitoring Kemajuan Belajar Bahasa Inggris. Persyaratan Kelulusan: Dari program studi di universitas lokal. Aplikasi Beasiswa Lokal atau Institusional: Beberapa beasiswa dalam negeri atau yang disediakan oleh institusi tertentu mungkin menerima skor ITP. Seleksi Karyawan: Beberapa perusahaan di Indonesia mungkin menggunakan skor ITP sebagai salah satu pertimbangan. Pengembangan Pribadi: Meningkatkan kemampuan bahasa Inggris secara umum. Penting dicatat bahwa TOEFL ITP umumnya tidak diterima untuk aplikasi universitas di luar negeri (terutama di negara berbahasa Inggris), aplikasi beasiswa internasional, atau keperluan imigrasi yang biasanya mensyaratkan TOEFL iBT."
                },
                {
                    "q": "Bisa kasih contoh soal TOEFL iBT dan TOEFL ITP?",
                    "a": "Cara terbaik untuk mempersiapkan diri adalah dengan menggunakan sumber latihan resmi: TOEFL iBT: TOEFL iBT™ Free Practice Test: Dari situs ETS. TOEFL iBT™ Practice Sets: Dari situs ETS. TOEFL Go!™ App: Aplikasi mobile resmi dari ETS. Buku Panduan Resmi TOEFL iBT (The Official Guide to the TOEFL iBT Test). TOEFL® TestPrepPlanner: Alat perencanaan dari ETS. TOEFL ITP: TOEFL ITP® Test Taker Handbook: Seringkali berisi contoh soal dan tersedia dari ETS atau institusi penyelenggara. Materi Latihan dari Institusi: Institusi yang menyelenggarakan tes ITP mungkin menyediakan contoh soal atau materi persiapan. Buku-buku persiapan TOEFL PBT (Paper-Based Test) lama: Karena format ITP mirip dengan TOEFL PBT sebelumnya, buku-buku ini bisa relevan, terutama untuk bagian Listening, Structure, dan Reading. Program persiapan TOEFL iBT dan ITP di Ultimate Education juga menggunakan materi latihan komprehensif dari sumber resmi dan materi tambahan."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education (untuk iBT dan ITP)?",
                    "a": "Ultimate Education memanfaatkan berbagai media untuk bimbingan TOEFL iBT dan ITP: Bimbingan Online (Daring): Melalui Google Meet atau Zoom untuk sesi interaktif, pembagian materi, dan latihan. Bimbingan Offline (Tatap Muka): Di lokasi fisik Ultimate Education (jika tersedia) atau lokasi yang disepakati. Materi Pembelajaran Digital: Modul PDF, e-book, bank soal, rekaman audio. Platform Latihan Interaktif: Simulasi tes yang mirip dengan kondisi tes sebenarnya. Learning Management System (LMS): Untuk organisasi materi, tugas, dan komunikasi. Materi akan disesuaikan dengan format tes yang Anda ambil (iBT atau ITP)."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education (untuk iBT dan ITP)?",
                    "a": "Di Ultimate Education, kami mengutamakan kualitas pengajaran dan kecocokan tutor dengan kebutuhan siswa untuk program persiapan TOEFL iBT maupun ITP. Meskipun Anda tidak memilih tutor secara langsung, kami memiliki proses penempatan yang cermat. Tim tutor kami berpengalaman, memiliki pengetahuan mendalam tentang format dan strategi kedua tes. Setelah konsultasi awal, kami akan menganalisis kebutuhan Anda dan mencocokkan Anda dengan tutor yang paling sesuai untuk membantu Anda mencapai tujuan TOEFL Anda, baik itu iBT maupun ITP."
                }
            ]
        }
    },
    {
        "slug": "pte",
        "originalSlug": "persiapan-pte",
        "meta": {
            "title": "PTE",
            "description": "Raih skor PTE impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">PTE</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "PTE Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus PTE Academic di Ultimate Education dirancang untuk membantu peserta meraih skor terbaik dengan dukungan tutor berpengalaman—baik native speaker maupun pengajar lokal profesional. Program ini menggunakan kurikulum up-to-date dan relevan dengan format Pearson Test of English (PTE) Academic, sehingga siswa dapat mempersiapkan diri dengan efektif dan terarah.",
                "Pembelajaran mencakup semua komponen tes:",
                "• Speaking & Writing",
                "• Reading",
                "• Listening",
                "Peserta akan mendapatkan latihan soal intensif, strategi ujian yang efektif, mock test berbasis komputer, serta jadwal belajar fleksibel. Dengan pendekatan ini, siswa lebih percaya diri menghadapi PTE Academic, baik untuk kebutuhan kuliah di luar negeri, keperluan kerja, maupun proses migrasi internasional."
            ]
        },
        "pricing": {
            "PTE GROUP CLASS": {
                "title": "PTE GROUP CLASS",
                "description": "Program PTE Group Class menggunakan metode semi privat dengan jumlah peserta terbatas hanya 5–7 siswa per kelas. Jumlah yang kecil ini memungkinkan interaksi lebih intensif antara siswa dan tutor, sekaligus menciptakan suasana belajar yang fokus dan kondusif. Di kelas, peserta akan: Berlatih melalui diskusi interaktif dan latihan soal. Mengikuti simulasi tes berbasis komputer, sesuai format resmi PTE. Mendapatkan pembelajaran menyeluruh untuk semua bagian tes: Speaking & Writing, Reading, dan Listening. Dengan kombinasi diskusi, praktik soal, dan simulasi ujian, siswa tidak hanya memahami strategi, tetapi juga terlatih menghadapi format soal PTE secara nyata.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai program intensif PTE Academic, peserta akan menjalani diagnostic test berbasis format resmi PTE untuk mengukur kemampuan awal dalam Speaking, Writing, Reading, dan Listening.\nHasilnya akan digunakan untuk menyusun personalized study plan agar pembelajaran lebih tepat sasaran dan sesuai target skor PTE (maksimal 90)."
                    },
                    {
                        "title": "PERTAMA: Introduction to PTE Format & Basic Test Strategy",
                        "content": "Peserta akan diperkenalkan pada struktur PTE Academic:\n• Ujian berbasis komputer dan AI-scored (bukan manusia)\n• Tipe soal: integrated skills (misal: Listening + Writing, Reading + Speaking)\n• Sistem penilaian otomatis dan rubrik penilaian PTE\n• Strategi dasar di tiap bagian agar efisien dan sesuai kriteria AI"
                    },
                    {
                        "title": "KEDUA: Intensive Skill-Based Training",
                        "content": "Fokus pada latihan mendalam di masing-masing skill:\n• Speaking: Read Aloud, Repeat Sentence, Describe Image, Retell Lecture\n• Writing: Summarize Written Text, Write Essay\n• Reading: Multiple Choice, Re-order Paragraphs, Fill in the Blanks\n• Listening: Summarize Spoken Text, Highlight Correct Summary, Fill Gaps\nPeserta dilatih menggunakan template, timing technique, dan scoring logic sesuai sistem AI PTE."
                    },
                    {
                        "title": "STAGE 3: Skill Integration + Template Optimization",
                        "content": "Pada sesi ini, peserta akan:\n• Memperkuat skill terintegrasi (misal: Listening + Writing / Reading + Speaking)\n• Menggunakan dan memodifikasi template resmi PTE yang telah terbukti\n• Melatih pengucapan, intonasi, dan kejelasan suara untuk mendukung skor AI\n• Meningkatkan pemahaman teks akademik, diagram, dan grafik"
                    },
                    {
                        "title": "KEEMPAT: Focused Practice on Challenging Sections & AI Pattern",
                        "content": "Pada tahap ini, peserta akan:\n• Berlatih soal-soal yang memiliki bobot tinggi di penilaian PTE (misal: Repeat Sentence, Write Essay)\n• Menyesuaikan kecepatan bicara, intonasi, dan struktur jawaban untuk AI-based scoring\n• Melatih time management dan akurasi pada soal sulit dan panjang\n• Belajar menghindari penalti umum (over-speaking, pauses, irrelevant response)"
                    },
                    {
                        "title": "KELIMA: Mock Tests + Score Strategy Optimization",
                        "content": "Di sesi final, peserta akan menjalani simulasi full-length PTE secara online dengan sistem penilaian mirip ujian asli.\nSelanjutnya:\n• Menganalisis hasil mock test dan memperbaiki bagian yang lemah\n• Mengoptimalkan penggunaan template di Speaking & Writing\n• Menerapkan teknik menjawab cepat tanpa mengorbankan kualitas\n• Latihan mandiri dengan simulasi tambahan berbasis perangkat lunak resmi"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PTE Private CLASS": {
                "title": "PTE Private CLASS",
                "description": "Program PTE Private Class (One-on-One) ditujukan untuk siswa yang membutuhkan pembelajaran lebih personal dan intensif. Kelas privat ini tersedia dalam format offline (tatap muka) maupun online, sehingga fleksibel menyesuaikan kebutuhan. Keunggulan PTE 1-on-1: Tutor akan menargetkan langsung area yang perlu ditingkatkan—baik itu Speaking & Writing, Reading, atau Listening. Materi pembelajaran disusun secara tailored sesuai dengan level kemampuan awal, kelemahan, dan target skor siswa. Proses belajar menjadi lebih fokus, efisien, dan optimal karena diarahkan pada kebutuhan spesifik setiap peserta. Kelas privat ini sangat cocok untuk peserta dengan target skor tertentu atau yang ingin mempersiapkan diri dengan waktu belajar lebih intensif.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai program intensif PTE Academic, peserta akan menjalani diagnostic test berbasis format resmi PTE untuk mengukur kemampuan awal dalam Speaking, Writing, Reading, dan Listening.\nHasilnya akan digunakan untuk menyusun personalized study plan agar pembelajaran lebih tepat sasaran dan sesuai target skor PTE (maksimal 90)."
                    },
                    {
                        "title": "PERTAMA: Introduction to PTE Format & Basic Test Strategy",
                        "content": "Peserta akan diperkenalkan pada struktur PTE Academic:\n• Ujian berbasis komputer dan AI-scored (bukan manusia)\n• Tipe soal: integrated skills (misal: Listening + Writing, Reading + Speaking)\n• Sistem penilaian otomatis dan rubrik penilaian PTE\n• Strategi dasar di tiap bagian agar efisien dan sesuai kriteria AI"
                    },
                    {
                        "title": "KEDUA: Intensive Skill-Based Training",
                        "content": "Fokus pada latihan mendalam di masing-masing skill:\n• Speaking: Read Aloud, Repeat Sentence, Describe Image, Retell Lecture\n• Writing: Summarize Written Text, Write Essay\n• Reading: Multiple Choice, Re-order Paragraphs, Fill in the Blanks\n• Listening: Summarize Spoken Text, Highlight Correct Summary, Fill Gaps\nPeserta dilatih menggunakan template, timing technique, dan scoring logic sesuai sistem AI PTE."
                    },
                    {
                        "title": "STAGE 3: Skill Integration + Template Optimization",
                        "content": "Pada sesi ini, peserta akan:\n• Memperkuat skill terintegrasi (misal: Listening + Writing / Reading + Speaking)\n• Menggunakan dan memodifikasi template resmi PTE yang telah terbukti\n• Melatih pengucapan, intonasi, dan kejelasan suara untuk mendukung skor AI\n• Meningkatkan pemahaman teks akademik, diagram, dan grafik"
                    },
                    {
                        "title": "KEEMPAT: Focused Practice on Challenging Sections & AI Pattern",
                        "content": "Pada tahap ini, peserta akan:\n• Berlatih soal-soal yang memiliki bobot tinggi di penilaian PTE (misal: Repeat Sentence, Write Essay)\n• Menyesuaikan kecepatan bicara, intonasi, dan struktur jawaban untuk AI-based scoring\n• Melatih time management dan akurasi pada soal sulit dan panjang\n• Belajar menghindari penalti umum (over-speaking, pauses, irrelevant response)"
                    },
                    {
                        "title": "KELIMA: Mock Tests + Score Strategy Optimization",
                        "content": "Di sesi final, peserta akan menjalani simulasi full-length PTE secara online dengan sistem penilaian mirip ujian asli.\nSelanjutnya:\n• Menganalisis hasil mock test dan memperbaiki bagian yang lemah\n• Mengoptimalkan penggunaan template di Speaking & Writing\n• Menerapkan teknik menjawab cepat tanpa mengorbankan kualitas\n• Latihan mandiri dengan simulasi tambahan berbasis perangkat lunak resmi"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PTE Customized CLASS": {
                "title": "PTE Customized CLASS",
                "description": "Program PTE Customized Class sangat fleksibel dan cocok untuk mereka yang memiliki waktu terbatas atau kebutuhan spesifik dalam persiapan PTE Academic. Fitur utama program ini: Paket fleksibel dalam kelipatan 3 sesi. Peserta dapat menargetkan skill tertentu, misalnya hanya fokus pada Speaking & Writing atau Listening, sesuai prioritas masing-masing. Jadwal belajar sepenuhnya disesuaikan dengan waktu peserta. Bimbingan tutor yang intensif dengan strategi ujian yang tepat. Dengan personalisasi penuh, siswa bisa fokus pada bagian yang paling dibutuhkan dan tetap memaksimalkan hasil belajar meskipun dengan waktu persiapan terbatas. Program ini sangat ideal bagi profesional muda, mahasiswa, maupun calon migran internasional yang ingin mempersiapkan PTE secara efektif dan efisien.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Diagnostic Test & Personalized Study Plan",
                        "content": "Sebelum memulai program intensif PTE Academic, peserta akan menjalani diagnostic test berbasis format resmi PTE untuk mengukur kemampuan awal dalam Speaking, Writing, Reading, dan Listening.\nHasilnya akan digunakan untuk menyusun personalized study plan agar pembelajaran lebih tepat sasaran dan sesuai target skor PTE (maksimal 90)."
                    },
                    {
                        "title": "PERTAMA: Introduction to PTE Format & Basic Test Strategy",
                        "content": "Peserta akan diperkenalkan pada struktur PTE Academic:\n• Ujian berbasis komputer dan AI-scored (bukan manusia)\n• Tipe soal: integrated skills (misal: Listening + Writing, Reading + Speaking)\n• Sistem penilaian otomatis dan rubrik penilaian PTE\n• Strategi dasar di tiap bagian agar efisien dan sesuai kriteria AI"
                    },
                    {
                        "title": "KEDUA: Intensive Skill-Based Training",
                        "content": "Fokus pada latihan mendalam di masing-masing skill:\n• Speaking: Read Aloud, Repeat Sentence, Describe Image, Retell Lecture\n• Writing: Summarize Written Text, Write Essay\n• Reading: Multiple Choice, Re-order Paragraphs, Fill in the Blanks\n• Listening: Summarize Spoken Text, Highlight Correct Summary, Fill Gaps\nPeserta dilatih menggunakan template, timing technique, dan scoring logic sesuai sistem AI PTE."
                    },
                    {
                        "title": "STAGE 3: Skill Integration + Template Optimization",
                        "content": "Pada sesi ini, peserta akan:\n• Memperkuat skill terintegrasi (misal: Listening + Writing / Reading + Speaking)\n• Menggunakan dan memodifikasi template resmi PTE yang telah terbukti\n• Melatih pengucapan, intonasi, dan kejelasan suara untuk mendukung skor AI\n• Meningkatkan pemahaman teks akademik, diagram, dan grafik"
                    },
                    {
                        "title": "KEEMPAT: Focused Practice on Challenging Sections & AI Pattern",
                        "content": "Pada tahap ini, peserta akan:\n• Berlatih soal-soal yang memiliki bobot tinggi di penilaian PTE (misal: Repeat Sentence, Write Essay)\n• Menyesuaikan kecepatan bicara, intonasi, dan struktur jawaban untuk AI-based scoring\n• Melatih time management dan akurasi pada soal sulit dan panjang\n• Belajar menghindari penalti umum (over-speaking, pauses, irrelevant response)"
                    },
                    {
                        "title": "KELIMA: Mock Tests + Score Strategy Optimization",
                        "content": "Di sesi final, peserta akan menjalani simulasi full-length PTE secara online dengan sistem penilaian mirip ujian asli.\nSelanjutnya:\n• Menganalisis hasil mock test dan memperbaiki bagian yang lemah\n• Mengoptimalkan penggunaan template di Speaking & Writing\n• Menerapkan teknik menjawab cepat tanpa mengorbankan kualitas\n• Latihan mandiri dengan simulasi tambahan berbasis perangkat lunak resmi"
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes PTE Academic?",
                    "a": "Biaya tes PTE Academic bervariasi tergantung pada negara dan lokasi pusat tes tempat Anda mengambil ujian. Pearson VUE, yang menyelenggarakan tes ini, menetapkan biaya standar dalam mata uang lokal untuk setiap negara. Biaya ini dapat berubah dari waktu ke waktu, jadi penting untuk memeriksa informasi terbaru. Selain biaya pendaftaran standar, mungkin ada biaya tambahan untuk layanan seperti: Pendaftaran terlambat (late registration fee), jika Anda mendaftar mendekati tanggal tes. Penjadwalan ulang tes (rescheduling fee). Pembatalan tes. Pengiriman laporan skor tambahan ke lebih banyak institusi. Untuk mengetahui biaya tes PTE Academic yang paling akurat dan terkini di Indonesia, serta biaya layanan tambahan lainnya, Anda disarankan untuk mengunjungi situs web resmi Pearson PTE di pearsonpte.com. Saat Anda melakukan proses pendaftaran online, sistem akan menampilkan biaya yang berlaku untuk lokasi dan tanggal tes yang Anda pilih."
                },
                {
                    "q": "Tes PTE Academic di mana?",
                    "a": "PTE Academic diselenggarakan di jaringan pusat tes resmi Pearson VUE yang aman dan tersebar di berbagai kota di seluruh dunia, termasuk di beberapa kota besar di Indonesia. Pusat tes ini dirancang khusus untuk tes berbasis komputer dan dilengkapi dengan peralatan yang diperlukan seperti komputer, headset dengan mikrofon, dan lingkungan yang tenang untuk memastikan kondisi tes yang optimal. Anda dapat menemukan daftar lengkap lokasi pusat tes PTE Academic yang tersedia di dekat Anda dengan menggunakan fitur pencarian pusat tes di situs web resmi Pearson PTE (pearsonpte.com). Fitur ini memungkinkan Anda mencari berdasarkan negara dan kota. Sejak pandemi, Pearson juga telah meluncurkan PTE Academic Online, yang memungkinkan Anda mengambil tes dari rumah atau lokasi pribadi lainnya, asalkan Anda memenuhi persyaratan teknis dan lingkungan pengujian yang ketat, serta tes ini diawasi secara online. Ketersediaan PTE Academic Online mungkin berbeda di setiap wilayah, jadi pastikan untuk memeriksa informasi terbaru di situs resmi."
                },
                {
                    "q": "Kapan jadwal tes PTE Academic?",
                    "a": "Salah satu keunggulan PTE Academic adalah fleksibilitas jadwalnya yang tinggi. Tes ini ditawarkan hampir setiap hari sepanjang tahun di banyak pusat tes di seluruh dunia, tergantung pada jam operasional dan kapasitas masing-masing pusat. Seringkali, Anda dapat menemukan slot tes yang tersedia dalam beberapa hari ke depan atau beberapa minggu ke depan, yang sangat membantu bagi mereka yang membutuhkan hasil tes dengan cepat. Untuk PTE Academic Online, ketersediaan jadwalnya bisa lebih fleksibel lagi. Anda dapat mengecek ketersediaan jadwal tes secara real-time dan memesan tanggal serta waktu yang paling sesuai untuk Anda melalui akun Anda di situs web resmi Pearson PTE (pearsonpte.com). Karena kemudahan penjadwalan ini, Anda memiliki lebih banyak kontrol atas kapan Anda ingin mengambil tes, namun tetap disarankan untuk memesan sesegera mungkin setelah Anda merasa siap untuk memastikan mendapatkan slot yang diinginkan."
                },
                {
                    "q": "Skor PTE Academic valid berapa lama?",
                    "a": "Skor PTE Academic Anda umumnya diakui dan berlaku selama dua (2) tahun terhitung sejak tanggal Anda mengambil tes. Tanggal tes akan tercantum pada laporan skor resmi Anda. Periode validitas dua tahun ini merupakan standar yang umum digunakan oleh sebagian besar institusi pendidikan, badan profesional, dan otoritas imigrasi yang menerima skor PTE Academic. Alasan di balik batasan waktu ini adalah karena kemampuan bahasa seseorang dapat berubah seiring waktu. Meskipun demikian, selalu merupakan praktik yang baik untuk memeriksa persyaratan spesifik dari institusi atau organisasi yang Anda tuju. Beberapa mungkin memiliki kebijakan sendiri mengenai batas usia skor yang dapat diterima, meskipun jarang berbeda dari standar dua tahun tersebut. Pastikan skor Anda masih valid pada saat Anda mengirimkan aplikasi Anda."
                },
                {
                    "q": "Apa saja bagian dalam tes PTE Academic?",
                    "a": "PTE Academic adalah tes bahasa Inggris berbasis komputer yang dirancang untuk menilai kemampuan bahasa Inggris akademis Anda secara terintegrasi. Tes ini terdiri dari tiga bagian utama, namun beberapa jenis pertanyaan di dalamnya menguji lebih dari satu keterampilan sekaligus (misalnya, berbicara dan menulis, atau membaca dan berbicara): Speaking & Writing (Berbicara & Menulis): Bagian ini adalah bagian pertama dan terpanjang, berlangsung sekitar 54-67 menit. Bagian ini menguji kemampuan berbicara dan menulis Anda melalui berbagai jenis pertanyaan, termasuk: Personal Introduction (tidak dinilai, hanya untuk pengenalan) Read Aloud (membaca teks keras-keras) Repeat Sentence (mengulang kalimat yang didengar) Describe Image (mendeskripsikan gambar) Re-tell Lecture (menceritakan kembali kuliah singkat yang didengar) Answer Short Question (menjawab pertanyaan singkat dengan satu atau beberapa kata) Summarize Written Text (meringkas teks tertulis dalam satu kalimat) Write Essay (menulis esai argumentatif atau opini sepanjang 200-300 kata) Reading (Membaca): Bagian ini berlangsung sekitar 29-30 menit dan menguji kemampuan membaca Anda melalui berbagai jenis pertanyaan, seperti: Reading & Writing: Fill in the Blanks (memilih kata yang tepat untuk melengkapi teks dari pilihan yang diberikan) Multiple Choice, Multiple Answer (memilih lebih dari satu jawaban yang benar) Re-order Paragraphs (menyusun kembali paragraf agar runtut) Reading: Fill in the Blanks (memilih kata yang tepat untuk melengkapi teks dari daftar kata) Multiple Choice, Single Answer (memilih satu jawaban yang benar) Listening (Mendengarkan): Bagian ini berlangsung sekitar 30-43 menit dan menguji kemampuan mendengarkan Anda melalui berbagai jenis pertanyaan setelah mendengarkan rekaman audio atau video: Summarize Spoken Text (meringkas rekaman audio/kuliah singkat dalam tulisan 50-70 kata) Multiple Choice, Multiple Answer Fill in the Blanks (melengkapi transkrip rekaman dengan kata yang hilang) Highlight Correct Summary (memilih ringkasan yang paling akurat dari rekaman) Multiple Choice, Single Answer Select Missing Word (memilih kata atau frasa yang hilang di akhir rekaman) Highlight Incorrect Words (mengidentifikasi kata-kata dalam transkrip yang berbeda dari apa yang diucapkan dalam rekaman) Write from Dictation (menulis kalimat yang didengar secara persis) Tes ini sepenuhnya dinilai oleh teknologi kecerdasan buatan (AI) untuk memastikan objektivitas dan konsistensi."
                },
                {
                    "q": "Jadwal kursus PTE Academic di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menyediakan program persiapan PTE Academic yang komprehensif, dirancang untuk membekali Anda dengan pemahaman mendalam tentang format tes, jenis-jenis pertanyaan uniknya, serta strategi dan latihan yang dibutuhkan untuk mencapai skor target Anda. Kami fokus pada pengembangan semua keterampilan yang diuji (Speaking, Writing, Reading, Listening) dengan penekanan pada teknik yang efektif untuk tes berbasis komputer ini. Jadwal kursus kami dirancang agar fleksibel, dengan pilihan untuk kelas grup yang interaktif atau sesi privat yang dapat disesuaikan sepenuhnya dengan jadwal dan kebutuhan belajar spesifik Anda. Untuk mendapatkan informasi terkini mengenai jadwal kelas PTE Academic yang tersedia, berbagai pilihan program belajar yang kami tawarkan, serta rincian biaya kursus yang kompetitif dan promosi yang mungkin sedang berlaku, kami mengundang Anda untuk menghubungi tim konsultan pendidikan kami. Silakan hubungi kami melalui: WhatsApp: 083812310368 Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor PTE Academic?",
                    "a": "Memiliki skor PTE Academic yang baik dan diakui secara internasional menawarkan berbagai keuntungan signifikan: Penerimaan Universitas Global: Skor PTE Academic diterima oleh ribuan universitas dan institusi pendidikan tinggi di seluruh dunia, termasuk di negara-negara tujuan studi populer seperti Australia, Selandia Baru, Inggris, Amerika Serikat, dan banyak negara Eropa. Ini sangat berguna untuk aplikasi program sarjana, pascasarjana, dan vokasi. Aplikasi Visa dan Imigrasi: Pemerintah Australia, Selandia Baru, dan Inggris menerima skor PTE Academic untuk berbagai kategori aplikasi visa, termasuk visa pelajar, visa kerja, dan visa tinggal permanen. Ini menjadikannya pilihan populer bagi mereka yang berencana untuk studi, bekerja, atau bermigrasi. Hasil Tes Cepat: Salah satu keunggulan utama PTE Academic adalah kecepatan pengumuman hasil tes. Sebagian besar peserta menerima skor mereka dalam waktu 2 hari kerja, bahkan seringkali dalam 24 jam. Ini sangat bermanfaat bagi mereka yang memiliki tenggat waktu aplikasi yang ketat. Penilaian Objektif berbasis AI: Seluruh proses penilaian PTE Academic dilakukan oleh teknologi kecerdasan buatan (AI), yang meminimalkan potensi bias manusia dan memastikan konsistensi serta objektivitas dalam penilaian. Jadwal Tes Fleksibel: PTE Academic menawarkan banyak jadwal tes sepanjang tahun, seringkali dengan ketersediaan dalam waktu singkat, memberikan fleksibilitas bagi peserta tes. Format Tes Terintegrasi: Format tes yang menguji keterampilan secara terintegrasi dianggap oleh beberapa pihak lebih mencerminkan penggunaan bahasa Inggris dalam situasi nyata."
                },
                {
                    "q": "Bisa kasih contoh soal PTE Academic?",
                    "a": "Pearson PTE, sebagai penyelenggara tes, adalah sumber terbaik untuk mendapatkan contoh soal dan materi latihan resmi yang paling akurat. Menggunakan materi resmi akan membantu Anda terbiasa dengan antarmuka tes berbasis komputer dan jenis pertanyaan yang unik: Situs Web Resmi Pearson PTE (pearsonpte.com): Situs ini menyediakan banyak sumber daya gratis, termasuk contoh soal untuk setiap jenis pertanyaan, video panduan yang menjelaskan format tes, dan tips strategi. PTE Academic Official Practice App: Pearson menawarkan aplikasi mobile resmi yang berisi soal latihan dan materi persiapan yang dapat Anda akses di mana saja. Scored Practice Tests: Pearson menyediakan tes latihan resmi berbayar (Official Scored Practice Tests) yang mensimulasikan pengalaman tes PTE Academic yang sebenarnya dan memberikan laporan skor yang terperinci. Ini adalah cara yang sangat baik untuk mengukur kesiapan Anda dan mengidentifikasi area yang perlu ditingkatkan. Buku Panduan Resmi: Ada juga buku panduan persiapan resmi PTE Academic yang diterbitkan oleh Pearson yang berisi penjelasan tes, strategi, dan soal latihan. Program persiapan PTE Academic di Ultimate Education akan secara ekstensif menggunakan berbagai soal latihan, termasuk yang berasal dari sumber resmi dan materi tambahan yang dirancang untuk mempertajam setiap keterampilan yang diuji. Kami fokus pada strategi khusus untuk setiap jenis item tes dan latihan intensif."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan di Ultimate Education?",
                    "a": "Dalam program persiapan PTE Academic di Ultimate Education, kami menggunakan berbagai media untuk menciptakan pengalaman belajar yang efektif dan interaktif, terutama karena PTE Academic adalah tes berbasis komputer: Platform Konferensi Video (untuk sesi online): Sesi bimbingan online dilakukan melalui Google Meet, Zoom, atau platform serupa, memungkinkan interaksi langsung dengan tutor, diskusi, dan pembagian layar untuk demonstrasi soal dan strategi. Perangkat Lunak Simulasi Tes: Kami berusaha menggunakan atau merekomendasikan perangkat lunak atau platform online yang mensimulasikan antarmuka tes PTE Academic yang sebenarnya. Ini sangat penting agar siswa terbiasa dengan cara navigasi, format input jawaban, dan batasan waktu untuk setiap jenis soal. Materi Digital dan Audio-Visual: Modul pembelajaran, e-book, bank soal, rekaman audio dan video (untuk latihan Listening, Speaking, dan Re-tell Lecture/Summarize Spoken Text) disediakan dalam format digital. Papan Tulis Digital: Digunakan oleh tutor untuk menjelaskan konsep, strategi, atau menganalisis contoh jawaban selama sesi online. Sesi Offline (jika tersedia): Untuk bimbingan tatap muka, materi cetak dapat digunakan sebagai pelengkap, namun fokus tetap pada strategi untuk tes komputer."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri di Ultimate Education?",
                    "a": "Di Ultimate Education, kami sangat berkomitmen untuk memastikan setiap siswa mendapatkan bimbingan PTE Academic yang paling efektif dan sesuai dengan kebutuhannya. Meskipun sistem kami saat ini tidak secara langsung memungkinkan siswa untuk memilih tutor spesifik dari daftar nama, kami memiliki proses yang sangat cermat dalam mencocokkan Anda dengan tutor yang tepat. Tim tutor PTE Academic kami adalah para pengajar yang berpengalaman, memiliki pemahaman yang sangat mendalam tentang format tes PTE Academic yang unik, sistem penilaian AI-nya, dan strategi-strategi khusus yang diperlukan untuk berhasil. Saat Anda mendaftar dan setelah konsultasi awal, kami akan mempertimbangkan target skor Anda, pengalaman Anda sebelumnya dengan tes bahasa Inggris, gaya belajar Anda, dan preferensi jadwal. Berdasarkan faktor-faktor ini, kami akan menugaskan seorang tutor yang kami yakini memiliki keahlian dan pendekatan yang paling cocok untuk membimbing Anda menuju kesuksesan dalam tes PTE Academic Anda."
                }
            ]
        }
    },
    {
        "slug": "sat",
        "originalSlug": "kursus-persiapan-sat",
        "meta": {
            "title": "Kursus Persiapan SAT - Ultimate Education",
            "description": "Raih skor SAT impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">SAT</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "SAT Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus persiapan SAT di Ultimate Education dirancang untuk membantu siswa meraih skor SAT yang optimal sebagai salah satu syarat kuliah di luar negeri, khususnya ke universitas ternama di Amerika Serikat dan negara lainnya. Program ini dibimbing oleh tutor berpengalaman, terdiri dari pengajar lokal profesional dan native speaker, dengan kurikulum yang disesuaikan dengan format SAT terbaru serta mencakup seluruh materi utama, yaitu Reading, Writing dan Math.",
                "Melalui kelas persiapan SAT yang terstruktur, siswa akan mengikuti latihan intensif, pembahasan soal berbasis ujian resmi, serta mock test SAT yang menyerupai kondisi tes sebenarnya. Didukung dengan jadwal yang fleksibel dan evaluasi berkala, program ini membantu siswa belajar lebih fokus, terarah, dan lebih percaya diri dalam menghadapi SAT Test sebagai langkah penting menuju kuliah di luar negeri."
            ]
        },
        "pricing": {
            "SAT Group Class": {
                "title": "SAT Group Class",
                "description": "Program SAT Group Class menggunakan metode semi-privat dengan jumlah peserta terbatas (5–7 siswa per kelas). Suasana belajar menjadi lebih fokus, interaktif, dan menyenangkan melalui latihan soal, diskusi, serta games edukatif. Peserta akan mendapatkan pembelajaran komprehensif yang mencakup seluruh bagian tes SAT: Reading & Writing serta Math. Pendekatan ini membantu siswa tidak hanya memahami teori dan strategi, tetapi juga melatih kemampuan menerapkannya langsung pada soal-soal SAT.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Digital SAT Diagnostic Test",
                        "content": "Sebelum masuk ke sesi pembelajaran, Anda akan mengikuti SAT Diagnostic Test untuk mengetahui level awal kemampuan Reading, Writing, dan Math Anda.\nHasil ini akan digunakan untuk membuat rencana belajar personalisasi, menyesuaikan strategi terbaik demi mencapai target skor Anda."
                    },
                    {
                        "title": "PERTAMA: Understanding the Digital SAT",
                        "content": "Di tahap awal, peserta akan memahami:\n• Struktur dan sistem penilaian Digital SAT\n• Tipe soal di Reading & Writing serta Math\n• Perbedaan SAT baru dengan SAT lama dan tes lain seperti ACT atau GRE\nTujuan tahap ini adalah membentuk pemahaman strategi, bukan sekadar hafalan materi."
                    },
                    {
                        "title": "KEDUA: Strengthening Core Concepts KEDUA: Strengthening Core Concepts",
                        "content": "Fase ini berfokus pada penguatan materi fundamental:\n• Reading & Writing: grammar, sentence structure, rhetorical skills, dan vocabulary in context\n• Math: aljabar, fungsi, persamaan linear, geometri, probabilitas, dan analisis data\nDengan dasar yang kuat, Anda siap menghadapi soal-soal kompleks pada tahapan berikutnya."
                    },
                    {
                        "title": "KETIGA: Section-Focused Drills & Practice",
                        "content": "Peserta akan melakukan latihan intensif dan bertarget:\n• Reading comprehension berbasis teks ilmiah dan sastra\n• Writing questions dengan fokus grammar dan logic\n• Math drills dengan teknik solving cepat\nSimulasi dilakukan menggunakan platform digital adaptif seperti yang digunakan College Board."
                    },
                    {
                        "title": "KEEMPAT: Mastery in Grammar and Math Reasoning",
                        "content": "Di tahap ini, fokus diarahkan pada:\n• Logika penulisan dan pemahaman konteks kalimat\n• Penyelesaian soal word problems dan algebraic reasoning\n• Strategi menghindari jebakan soal digital SAT\nCocok untuk peserta yang ingin mengamankan bagian tersulit dan skor tertinggi."
                    },
                    {
                        "title": "KELIMA: Final Strategy & Score Booster",
                        "content": "Tahap akhir adalah pematangan:\n• Review soal level tinggi dari College Board Bluebook\n• Simulasi full-test dengan sistem waktu nyata\n• Strategi menghadapi soal adaptif dan prediksi pertanyaan jebakan\nTujuan utamanya: Confidence, Speed, Accuracy."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "SAT Private": {
                "title": "SAT Private",
                "description": "Bagi siswa yang membutuhkan pembelajaran lebih personal, program SAT 1-on-1 (Private Class) adalah pilihan terbaik. Kelas tersedia dalam format offline (tatap muka) maupun online (daring), sehingga fleksibel mengikuti kebutuhan siswa. Tutor akan menargetkan area yang paling perlu ditingkatkan, baik Reading & Writing maupun Math. Materi pembelajaran disusun secara tailored (disesuaikan) dengan kemampuan awal dan target skor siswa, sehingga pembelajaran lebih efisien, fokus, dan hasilnya optimal.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Digital SAT Diagnostic Test",
                        "content": "Sebelum masuk ke sesi pembelajaran, Anda akan mengikuti SAT Diagnostic Test untuk mengetahui level awal kemampuan Reading, Writing, dan Math Anda.\nHasil ini akan digunakan untuk membuat rencana belajar personalisasi, menyesuaikan strategi terbaik demi mencapai target skor Anda."
                    },
                    {
                        "title": "PERTAMA: Understanding the Digital SAT",
                        "content": "Di tahap awal, peserta akan memahami:\n• Struktur dan sistem penilaian Digital SAT\n• Tipe soal di Reading & Writing serta Math\n• Perbedaan SAT baru dengan SAT lama dan tes lain seperti ACT atau GRE\nTujuan tahap ini adalah membentuk pemahaman strategi, bukan sekadar hafalan materi."
                    },
                    {
                        "title": "KEDUA: Strengthening Core Concepts KEDUA: Strengthening Core Concepts",
                        "content": "Fase ini berfokus pada penguatan materi fundamental:\n• Reading & Writing: grammar, sentence structure, rhetorical skills, dan vocabulary in context\n• Math: aljabar, fungsi, persamaan linear, geometri, probabilitas, dan analisis data\nDengan dasar yang kuat, Anda siap menghadapi soal-soal kompleks pada tahapan berikutnya."
                    },
                    {
                        "title": "KETIGA: Section-Focused Drills & Practice",
                        "content": "Peserta akan melakukan latihan intensif dan bertarget:\n• Reading comprehension berbasis teks ilmiah dan sastra\n• Writing questions dengan fokus grammar dan logic\n• Math drills dengan teknik solving cepat\nSimulasi dilakukan menggunakan platform digital adaptif seperti yang digunakan College Board."
                    },
                    {
                        "title": "KEEMPAT: Mastery in Grammar and Math Reasoning",
                        "content": "Di tahap ini, fokus diarahkan pada:\n• Logika penulisan dan pemahaman konteks kalimat\n• Penyelesaian soal word problems dan algebraic reasoning\n• Strategi menghindari jebakan soal digital SAT\nCocok untuk peserta yang ingin mengamankan bagian tersulit dan skor tertinggi."
                    },
                    {
                        "title": "KELIMA: Final Strategy & Score Booster",
                        "content": "Tahap akhir adalah pematangan:\n• Review soal level tinggi dari College Board Bluebook\n• Simulasi full-test dengan sistem waktu nyata\n• Strategi menghadapi soal adaptif dan prediksi pertanyaan jebakan\nTujuan utamanya: Confidence, Speed, Accuracy."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "SAT Custom Class": {
                "title": "SAT Custom Class",
                "description": "Program SAT Customized Class cocok untuk mereka yang memiliki waktu terbatas atau kebutuhan khusus dalam persiapan SAT. Dengan pilihan paket fleksibel (kelipatan 3 sesi), siswa bisa menargetkan area tertentu, seperti hanya fokus pada Math atau Reading & Writing. Kelas ini sepenuhnya personalized: mulai dari fokus pada skill tertentu, jadwal fleksibel, hingga bimbingan intensif dari tutor ahli dengan strategi ujian yang tepat sasaran. Program ini sangat ideal untuk siswa SMA maupun calon mahasiswa yang ingin mempersiapkan diri secara efektif dan meraih skor SAT sesuai target universitas internasional.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Digital SAT Diagnostic Test",
                        "content": "Sebelum masuk ke sesi pembelajaran, Anda akan mengikuti SAT Diagnostic Test untuk mengetahui level awal kemampuan Reading, Writing, dan Math Anda.\nHasil ini akan digunakan untuk membuat rencana belajar personalisasi, menyesuaikan strategi terbaik demi mencapai target skor Anda."
                    },
                    {
                        "title": "PERTAMA: Understanding the Digital SAT",
                        "content": "Di tahap awal, peserta akan memahami:\n• Struktur dan sistem penilaian Digital SAT\n• Tipe soal di Reading & Writing serta Math\n• Perbedaan SAT baru dengan SAT lama dan tes lain seperti ACT atau GRE\nTujuan tahap ini adalah membentuk pemahaman strategi, bukan sekadar hafalan materi."
                    },
                    {
                        "title": "KEDUA: Strengthening Core Concepts KEDUA: Strengthening Core Concepts",
                        "content": "Fase ini berfokus pada penguatan materi fundamental:\n• Reading & Writing: grammar, sentence structure, rhetorical skills, dan vocabulary in context\n• Math: aljabar, fungsi, persamaan linear, geometri, probabilitas, dan analisis data\nDengan dasar yang kuat, Anda siap menghadapi soal-soal kompleks pada tahapan berikutnya."
                    },
                    {
                        "title": "KETIGA: Section-Focused Drills & Practice",
                        "content": "Peserta akan melakukan latihan intensif dan bertarget:\n• Reading comprehension berbasis teks ilmiah dan sastra\n• Writing questions dengan fokus grammar dan logic\n• Math drills dengan teknik solving cepat\nSimulasi dilakukan menggunakan platform digital adaptif seperti yang digunakan College Board."
                    },
                    {
                        "title": "KEEMPAT: Mastery in Grammar and Math Reasoning",
                        "content": "Di tahap ini, fokus diarahkan pada:\n• Logika penulisan dan pemahaman konteks kalimat\n• Penyelesaian soal word problems dan algebraic reasoning\n• Strategi menghindari jebakan soal digital SAT\nCocok untuk peserta yang ingin mengamankan bagian tersulit dan skor tertinggi."
                    },
                    {
                        "title": "KELIMA: Final Strategy & Score Booster",
                        "content": "Tahap akhir adalah pematangan:\n• Review soal level tinggi dari College Board Bluebook\n• Simulasi full-test dengan sistem waktu nyata\n• Strategi menghadapi soal adaptif dan prediksi pertanyaan jebakan\nTujuan utamanya: Confidence, Speed, Accuracy."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Ultimate SAT": {
                "title": "Ultimate SAT",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": [
                {
                    "name": "Ryan Maulana",
                    "program": "Ultimate SAT",
                    "quote": "\"Awalnya saya masih perlu beradaptasi karena sejak kecil bersekolah dengan kurikulum nasional, jadi untuk soal-soal masih butuh penyesuaian. Namun, para tutor tetap mampu menjelaskan materi dan soal dengan sangat baik sehingga mudah dipahami. Saya merasa terbantu sekali dalam proses belajar. Untuk kualitas kelas, saya menilai 8 dari 10.\""
                },
                {
                    "name": "Ialluna Binar Cichinda",
                    "program": "Ultimate SAT",
                    "quote": "\"Kelas SAT bersama Miss Jess sangat membantu. Penjelasannya mudah dipahami, suasana kelas interaktif, dan feedback yang diberikan efektif banget. Overall, pengalaman belajarnya sangat memuaskan.\""
                },
                {
                    "name": "Muhammad Rafi Athalla",
                    "program": "Ultimate SAT",
                    "quote": "\"Belajar SAT dengan Mr. Arsany sangat membantu, penjelasannya detail dan efektif. Proses belajarnya nyaman, jelas, dan sesuai harapan. Nggak ada yang perlu diperbaiki, saya puas dengan kelasnya.\""
                }
            ]
        },
        "faq": {
            "items": [
                {
                    "q": "Berapa biaya tes SAT?",
                    "a": "Menurut informasi terbaru dari College Board (per Mei 2025), biaya registrasi dasar untuk tes SAT adalah US$ 60. Untuk siswa yang mengikuti tes di luar Amerika Serikat, umumnya dikenakan “Non-U.S. Regional Fee” sebesar US$ 43. Beberapa pusat tes internasional mungkin juga mengenakan biaya tambahan (sekitar US$ 24).Dengan demikian, total biaya tes SAT untuk peserta internasional biasanya berkisar antara US$ 103 hingga US$ 127 (atau lebih, tergantung kebijakan pusat tes spesifik).Sebagai perkiraan, dengan kurs (misalnya US$ 1 = Rp 16.300 per Mei 2025 – kurs dapat berubah, harap selalu cek nilai tukar terkini), biaya tersebut setara dengan:US$ 103 x Rp 16.300 = Rp 1.678.900US$ 127 x Rp 16.300 = Rp 2.070.100Sangat disarankan untuk selalu memeriksa rincian biaya terbaru dan total yang berlaku saat Anda melakukan registrasi langsung di situs resmi College Board."
                },
                {
                    "q": "Tes SAT dimana?",
                    "a": "Pusat tes SAT (Test Centers) tersebar di berbagai kota di Indonesia. Berikut adalah beberapa contoh lokasi yang sebelumnya terdaftar sebagai pusat tes SAT. Penting untuk dicatat bahwa daftar ini bersifat ilustratif dan ketersediaan pusat tes dapat berubah. Selalu verifikasi dan pilih pusat tes Anda langsung melalui situs resmi College Board saat melakukan pendaftaran.Contoh Test Center di Bali:Bali Island School, Jl. Danau Buyan IV No. 15, Sanur, Denpasar.Contoh Test Center di Bandung:Bandung Alliance Intercultural School, Jalan Bujanggamanik Kav 2.Bandung Independent School, Jln. Prof. Drg. Suria Sumantri 61.Bina Bangsa School Bandung, Jl. Sentra Dago Pakar Raya Blok F-1.Pribadi Bilingual Boarding School, Jl. PHH Mustofa No. 41.Contoh Test Center di Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi):Beacon Academy, Pegangsaan Dua No. 66 Kelapa Gading, Jakarta.IPEKA Integrated Christian School, Komplek Taman Meruya Ilir, Jl. Batu Mulia Blok K, Jakarta Barat.Jakarta Intercultural School, Jl. Terogong Raya 33, Cilandak, Jakarta Selatan.North Jakarta Intercultural School, Jl. Boulevard Bukit Gading Raya, Kelapa Gading Barat, Jakarta.Sampoerna Academy – Jakarta, L’Avenue Building, Jl. Raya Pasar Minggu, Kav 16, Jakarta.Sekolah Kharisma Bangsa, Jl. Terbang Layang No.21 Pondok Cabe, Tangerang Selatan.Sekolah Victory Plus, Jl. Kemang Pratama Raya AN 2-3, Kemang Pratama, Bekasi.Pribadi Bilingual Boarding School Depok, Jl. Margonda Raya No.229, Depok.Contoh Test Center di Jawa (Selain Jabodetabek, Bandung):Bina Bangsa School Semarang, Jalan Jangli Boulevard, Ngesrep, Banyumanik, Semarang.Wesley Creative School (Wesley International School), Jl. Simpang Kwoka 1, Malang.Mountainview Christian School, Jl. Nakula Sadewa Raya No. 55, Salatiga.Semesta Bilingual Secondary School, Jl. Raya Semarang Gunungpati KM 15, Semarang.Contoh Test Center di Surabaya:Surabaya Intercultural School, CitraRaya International Village, Lakarsantri.Sekolah Ciputra, Puri Widya Kencana, Citraland, Surabaya.Contoh Test Center di Medan:Medan Independent School, Jl. Jamin Ginting KM. 10, Jl. Tali Air No. 5.Sampoerna Academy Medan, Citra Garden, Jl. Jamin Ginting – Padang Bulan.Untuk daftar pusat tes SAT terakreditasi dan terbaru di lokasi Anda, silakan gunakan fitur pencarian pusat tes di situs College Board."
                },
                {
                    "q": "Kapan jadwal tes SAT?",
                    "a": "College Board menyelenggarakan Digital SAT secara internasional beberapa kali dalam setahun. Untuk siklus tes 2025-2026, jadwal umumnya meliputi tes pada bulan:AgustusOktoberNovemberDesemberMaretMeiJuniTanggal pastinya dapat bervariasi. Sangat penting untuk selalu memeriksa informasi jadwal tes SAT terbaru dan batas waktu pendaftaran untuk lokasi spesifik Anda langsung melalui situs resmi College Board: SAT International Dates and Deadlines."
                },
                {
                    "q": "Mengapa Memilih Kursus Ini?",
                    "a": "Program persiapan SATdi Ultimate Education diajarkan oleh pengajar profesional yang sangat berpengalaman dalam mengajar SAT. Mereka telah membantu ribuan siswa, termasuk penerima beasiswa dari Australia dan Selandia Baru, dalam meraih skor tinggi SAT."
                },
                {
                    "q": "Skor SAT valid berapa lama?",
                    "a": "Secara teknis, skor SAT tidak memiliki tanggal kedaluwarsa resmi. Namun, College Board menyatakan bahwa jika skor dikirim ke universitas lebih dari lima tahun setelah tanggal tes, akan ada catatan yang mengindikasikan bahwa skor tersebut mungkin tidak lagi secara akurat memprediksi kinerja akademik Anda. Kebanyakan universitas lebih memilih skor yang diambil dalam 3-5 tahun terakhir. Sebaiknya periksa kebijakan spesifik dari universitas yang Anda tuju."
                },
                {
                    "q": "Apakah SAT Subject Tests masih ada?",
                    "a": "College Board menyelenggarakan Digital SAT secara internasional beberapa kali dalam setahun. Untuk siklus tes 2025-2026, jadwal umumnya meliputi tes pada bulan:AgustusOktoberNovemberDesemberMaretMeiJuniTanggal pastinya dapat bervariasi. Sangat penting untuk selalu memeriksa informasi jadwal tes SAT terbaru dan batas waktu pendaftaran untuk lokasi spesifik Anda langsung melalui situs resmi College Board: SAT International Dates and Deadlines."
                },
                {
                    "q": "Jadwal kursus SAT di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan SAT yang komprehensif dan adaptif untuk membantu Anda meraih skor target. Kami menyediakan berbagai pilihan jadwal, baik kelas grup maupun privat, yang disesuaikan dengan kebutuhan siswa.Untuk informasi terkini mengenai:Jadwal kelas SAT yang tersediaPilihan program belajar (intensif, reguler, online, offline)Rincian biaya kursus dan promo spesialSilakan hubungi tim konsultan pendidikan kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Manfaat punya skor SAT?",
                    "a": "Memiliki skor SAT yang kompetitif memberikan banyak manfaat, antara lain:Pintu Masuk Universitas Ternama: Menjadi salah satu syarat utama untuk mendaftar ke program sarjana (S1) di banyak universitas di Amerika Serikat, Kanada, Eropa, Australia, dan berbagai negara lainnya.Peluang Beasiswa: Skor SAT yang tinggi dapat meningkatkan peluang Anda untuk mendapatkan beasiswa akademik dari universitas atau lembaga pemberi beasiswa lainnya.Pengukuran Kemampuan Akademik: Menunjukkan kesiapan akademis Anda untuk mengikuti perkuliahan di tingkat universitas, terutama dalam kemampuan membaca, menulis, dan matematika.Pemenuhan Syarat Aplikasi: Beberapa program studi atau universitas tertentu mungkin secara spesifik mewajibkan skor SAT.Untuk program S2 (Magister atau Doktoral), tes yang umumnya dibutuhkan adalah GRE (Graduate Record Examinations) atau GMAT (Graduate Management Admission Test), tergantung bidang studi yang dituju."
                },
                {
                    "q": "Bisa kasih contoh soal SAT?",
                    "a": "Tentu! Cara terbaik untuk berkenalan dengan format dan tipe soal Digital SAT adalah melalui sumber resmi College Board:Aplikasi Bluebook™: College Board menyediakan aplikasi Bluebook™ yang berisi beberapa tes latihan digital SAT lengkap dengan fitur penilaian. Ini adalah cara paling akurat untuk merasakan pengalaman tes yang sesungguhnya. Anda dapat mengunduhnya dari situs College Board.Contoh Soal di Website College Board: Anda juga bisa menemukan contoh soal dan panduan untuk setiap bagian tes (Reading and Writing, Math) di situs web mereka: SAT Practice and Preparation – College BoardUltimate EducationDi Ultimate Education, kami berdedikasi untuk membimbing dan mempersiapkan siswa Indonesia agar sukses dalam perjalanan akademis global mereka. Kami menawarkan program persiapan tes (SAT, TOEFL iBT, IELTS, GMAT, GRE) yang terstruktur, pengajar berpengalaman, materi terkini, dan strategi efektif. Selain itu, kami juga menyediakan layanan konsultasi kuliah ke luar negeri untuk membantu Anda mulai dari pemilihan universitas hingga proses aplikasi.Hubungi Ultimate Education hari ini untuk konsultasi gratis dan mulailah langkah Anda menuju universitas impian!"
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan?",
                    "a": "Program SAT Preparation menawarkan fleksibilitas bimbingan yang bisa dipilih, yaitu secara online atau offline. Jika memilih bimbingan online, komunikasi dengan Tutor akan menggunakan video conference melalui Google Meet atau Zoom. Untuk itu, pastikan kamu memiliki akun Google atau Zoom dan koneksi internet yang stabil."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri?",
                    "a": "Saat ini, kamu belum bisa memilih tutor sendiri untuk program SAT Preparation. Namun jangan khawatir, karena kami pasti akan menghubungkan kamu dengan tutor yang berpengalaman dan memiliki sertifikasi di bidang yang sesuai dengan kebutuhan kamu serta cocok dengan preferensi jadwal kamu."
                }
            ]
        }
    },
    {
        "slug": "gmat",
        "originalSlug": "kursus-persiapan-gmat",
        "meta": {
            "title": "Kursus Persiapan GMAT - Ultimate Education",
            "description": "Raih skor GMAT impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">GMAT</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "GMAT Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus ",
            "content": [
                "Kursus persiapan GMAT di Ultimate Education dirancang untuk membantu peserta meraih skor optimal dalam GMAT Focus Edition sebagai salah satu syarat utama kuliah di luar negeri, khususnya untuk program MBA dan studi bisnis internasional. Program ini dibimbing oleh tutor berpengalaman, terdiri dari native speaker dan pengajar lokal profesional, dengan kurikulum terbaru yang disesuaikan dengan format GMAT terkini serta strategi ujian yang teruji.",
                "Melalui kelas persiapan GMAT yang terstruktur, peserta akan mempelajari seluruh bagian utama GMAT Focus Edition, meliputi:",
                "• Quantitative Reasoning",
                "• Verbal Reasoning",
                "• Data Insights",
                "Pembelajaran dilengkapi dengan latihan soal terarah, mock test, dan simulasi ujian yang menyerupai kondisi test sebenarnya. Dengan jadwal yang fleksibel, kursus persiapan GMAT ini cocok bagi profesional maupun calon mahasiswa MBA yang ingin meningkatkan peluang diterima di sekolah bisnis top dunia untuk kuliah di luar negeri."
            ]
        },
        "pricing": {
            "GMAT Group CLASS": {
                "title": "GMAT Group CLASS",
                "description": "Program GMAT Group Class menggunakan metode semi-privat dengan jumlah peserta terbatas (5–7 siswa per kelas). Suasana belajar yang lebih fokus dan interaktif membuat peserta dapat berlatih melalui diskusi, simulasi soal, dan latihan terarah yang efektif sekaligus menyenangkan. Peserta akan mendapatkan pembelajaran komprehensif mencakup Quantitative Reasoning, Verbal Reasoning, dan Data Insights. Pendekatan ini membantu siswa memahami strategi sekaligus melatih penerapan langsung dalam soal-soal GMAT, sehingga lebih siap menghadapi ujian.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Prediction Test for Baseline Purposes",
                        "content": "Langkah awal dalam program ini adalah tes prediksi (diagnostic test) untuk mengetahui level awal Anda dalam tiga area: Quantitative Reasoning, Verbal Reasoning, dan Data Insights.\nDengan hasil baseline ini, tim mentor akan menyusun strategi belajar personalisasi agar proses belajar Anda jadi lebih efisien dan terarah."
                    },
                    {
                        "title": "PERTAMA: Exploratory Analysis",
                        "content": "Tahap ini adalah eksplorasi mendalam terhadap format GMAT terbaru. Anda akan memahami perubahan signifikan dalam struktur soal, waktu pengerjaan, hingga sistem scoring. Kami juga mengajarkan bagaimana cara membaca soal dan memahami logika ujian GMAT.\nTujuannya adalah agar Anda tahu medan sebelum berperang."
                    },
                    {
                        "title": "KEDUA: Learning of Fundamentals",
                        "content": "Fase ini fokus pada penguatan dasar-dasar:\n• Quantitative Reasoning: konsep dasar aljabar, aritmetika, dan pemecahan masalah logis.\n• Verbal Reasoning: pemahaman bacaan dan evaluasi argumen.\n• Data Insights: dasar interpretasi data, tabel, grafik, dan pemikiran logis.\nFondasi yang kuat di ketiga area ini akan membuat Anda siap naik level."
                    },
                    {
                        "title": "STAGE 3: Focus on All Test Sections",
                        "content": "Mulai dari sini, peserta akan mengerjakan latihan intensif untuk semua bagian GMAT Focus:\n• Latihan soal kuantitatif dengan time tracking\n• Latihan verbal dengan fokus pada critical thinking\n• Latihan interpretasi data multi-source dan tabel\nTahap ini bertujuan meningkatkan ketepatan dan kecepatan pengerjaan Anda"
                    },
                    {
                        "title": "KEEMPAT: Mastery of Grammar and Writing Logic",
                        "content": "Meski GMAT Focus tidak lagi menguji essay writing, kemampuan memahami struktur kalimat dan logika argumen tetap penting dalam Verbal dan Data Insights.\nTahap ini akan membantu Anda:\n• Menguasai grammar untuk pertanyaan critical reasoning\n• Mengasah kemampuan membaca cepat dan memahami struktur informasi"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap final ini menyatukan semua teknik tinggi:\n• Strategi menjawab soal sulit dengan cepat\n• Teknik eliminasi pilihan jawaban\n• Strategi educated guessing\n• Review soal-soal GMAT Official Guide terbaru\nIni adalah tahap menyempurnakan skill Anda demi mencapai skor GMAT impian."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "GMAT Private class": {
                "title": "GMAT Private class",
                "description": "Bagi Anda yang membutuhkan pembelajaran lebih personal, program GMAT 1-on-1 (Private Class) adalah pilihan tepat. Kelas tersedia dalam format offline (tatap muka) maupun online (daring) untuk fleksibilitas maksimal. Tutor akan menargetkan area spesifik yang perlu ditingkatkan, baik Quantitative, Verbal, maupun Data Insights. Materi disusun secara tailored (disesuaikan) sesuai kemampuan awal dan target skor individu—misalnya skor minimal untuk aplikasi MBA tertentu—sehingga pembelajaran lebih fokus, efisien, dan optimal.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Prediction Test for Baseline Purposes",
                        "content": "Langkah awal dalam program ini adalah tes prediksi (diagnostic test) untuk mengetahui level awal Anda dalam tiga area: Quantitative Reasoning, Verbal Reasoning, dan Data Insights.\nDengan hasil baseline ini, tim mentor akan menyusun strategi belajar personalisasi agar proses belajar Anda jadi lebih efisien dan terarah."
                    },
                    {
                        "title": "PERTAMA: Exploratory Analysis",
                        "content": "Tahap ini adalah eksplorasi mendalam terhadap format GMAT terbaru. Anda akan memahami perubahan signifikan dalam struktur soal, waktu pengerjaan, hingga sistem scoring. Kami juga mengajarkan bagaimana cara membaca soal dan memahami logika ujian GMAT.\nTujuannya adalah agar Anda tahu medan sebelum berperang."
                    },
                    {
                        "title": "KEDUA: Learning of Fundamentals",
                        "content": "Fase ini fokus pada penguatan dasar-dasar:\n• Quantitative Reasoning: konsep dasar aljabar, aritmetika, dan pemecahan masalah logis.\n• Verbal Reasoning: pemahaman bacaan dan evaluasi argumen.\n• Data Insights: dasar interpretasi data, tabel, grafik, dan pemikiran logis.\nFondasi yang kuat di ketiga area ini akan membuat Anda siap naik level."
                    },
                    {
                        "title": "STAGE 3: Focus on All Test Sections",
                        "content": "Mulai dari sini, peserta akan mengerjakan latihan intensif untuk semua bagian GMAT Focus:\n• Latihan soal kuantitatif dengan time tracking\n• Latihan verbal dengan fokus pada critical thinking\n• Latihan interpretasi data multi-source dan tabel\nTahap ini bertujuan meningkatkan ketepatan dan kecepatan pengerjaan Anda"
                    },
                    {
                        "title": "KEEMPAT: Mastery of Grammar and Writing Logic",
                        "content": "Meski GMAT Focus tidak lagi menguji essay writing, kemampuan memahami struktur kalimat dan logika argumen tetap penting dalam Verbal dan Data Insights.\nTahap ini akan membantu Anda:\n• Menguasai grammar untuk pertanyaan critical reasoning\n• Mengasah kemampuan membaca cepat dan memahami struktur informasi"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap final ini menyatukan semua teknik tinggi:\n• Strategi menjawab soal sulit dengan cepat\n• Teknik eliminasi pilihan jawaban\n• Strategi educated guessing\n• Review soal-soal GMAT Official Guide terbaru\nIni adalah tahap menyempurnakan skill Anda demi mencapai skor GMAT impian."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "GMAT Custom Class": {
                "title": "GMAT Custom Class",
                "description": "Program GMAT Customized Class cocok untuk peserta dengan waktu terbatas atau kebutuhan spesifik. Dengan paket fleksibel (kelipatan 3 sesi), siswa dapat menargetkan pembelajaran pada bagian tertentu, seperti hanya Quantitative Reasoning atau Data Insights, sesuai prioritas masing-masing. Kelas ini sepenuhnya personalized, mulai dari fokus pada area spesifik, jadwal fleksibel, hingga bimbingan intensif dengan strategi ujian yang tepat sasaran. Program ini sangat ideal untuk profesional muda maupun calon mahasiswa MBA yang ingin mempersiapkan GMAT secara efektif dan meraih skor sesuai target sekolah bisnis internasional.",
                "features": "",
                "curriculum": [
                    {
                        "title": "PRE-WORK: Prediction Test for Baseline Purposes",
                        "content": "Langkah awal dalam program ini adalah tes prediksi (diagnostic test) untuk mengetahui level awal Anda dalam tiga area: Quantitative Reasoning, Verbal Reasoning, dan Data Insights.\nDengan hasil baseline ini, tim mentor akan menyusun strategi belajar personalisasi agar proses belajar Anda jadi lebih efisien dan terarah."
                    },
                    {
                        "title": "PERTAMA: Exploratory Analysis",
                        "content": "Tahap ini adalah eksplorasi mendalam terhadap format GMAT terbaru. Anda akan memahami perubahan signifikan dalam struktur soal, waktu pengerjaan, hingga sistem scoring. Kami juga mengajarkan bagaimana cara membaca soal dan memahami logika ujian GMAT.\nTujuannya adalah agar Anda tahu medan sebelum berperang."
                    },
                    {
                        "title": "KEDUA: Learning of Fundamentals",
                        "content": "Fase ini fokus pada penguatan dasar-dasar:\n• Quantitative Reasoning: konsep dasar aljabar, aritmetika, dan pemecahan masalah logis.\n• Verbal Reasoning: pemahaman bacaan dan evaluasi argumen.\n• Data Insights: dasar interpretasi data, tabel, grafik, dan pemikiran logis.\nFondasi yang kuat di ketiga area ini akan membuat Anda siap naik level."
                    },
                    {
                        "title": "STAGE 3: Focus on All Test Sections",
                        "content": "Mulai dari sini, peserta akan mengerjakan latihan intensif untuk semua bagian GMAT Focus:\n• Latihan soal kuantitatif dengan time tracking\n• Latihan verbal dengan fokus pada critical thinking\n• Latihan interpretasi data multi-source dan tabel\nTahap ini bertujuan meningkatkan ketepatan dan kecepatan pengerjaan Anda"
                    },
                    {
                        "title": "KEEMPAT: Mastery of Grammar and Writing Logic",
                        "content": "Meski GMAT Focus tidak lagi menguji essay writing, kemampuan memahami struktur kalimat dan logika argumen tetap penting dalam Verbal dan Data Insights.\nTahap ini akan membantu Anda:\n• Menguasai grammar untuk pertanyaan critical reasoning\n• Mengasah kemampuan membaca cepat dan memahami struktur informasi"
                    },
                    {
                        "title": "KELIMA: Advanced Topics and Strategies",
                        "content": "Tahap final ini menyatukan semua teknik tinggi:\n• Strategi menjawab soal sulit dengan cepat\n• Teknik eliminasi pilihan jawaban\n• Strategi educated guessing\n• Review soal-soal GMAT Official Guide terbaru\nIni adalah tahap menyempurnakan skill Anda demi mencapai skor GMAT impian."
                    }
                ],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "PROGRAM BUNDLING": {
                "title": "PROGRAM BUNDLING",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Ultimate GMAT": {
                "title": "Ultimate GMAT",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": [
                {
                    "name": "Danny Maimun",
                    "program": "Ultimate GMAT",
                    "quote": "\"Kelas GMAT di UE menurut saya bagus. Tutornya bisa menjelaskan materi dengan jelas dan efektif, juga responsif saat ada pertanyaan. Suasana kelas cukup interaktif dan feedback yang diberikan sangat membantu. Saran dari saya, akan lebih praktis kalau disediakan booklet latihan soal atau materi hardcopy, jadi bisa lebih mudah untuk belajar offline.\""
                },
                {
                    "name": "Fanni",
                    "program": "Ultimate GMAT",
                    "quote": "Belajar GMAT di UE menyenangkan banget. Tutornya jelas dalam menyampaikan materi, gampang dipahami, dan selalu kasih feedback yang efektif. Suasana kelas interaktif, waktunya juga dikelola dengan baik. Overall, saya sangat puas dengan pengalaman belajar di UE!"
                },
                {
                    "name": "Galang Nasution",
                    "program": "Ultimate GMAT",
                    "quote": "\"Menurut saya tutor di UE punya kapasitas yang baik dalam menguasai materi GMAT. Hanya saja, masih ada sedikit yang bisa ditingkatkan dari segi komunikasi supaya penyampaian materi bisa lebih jelas dan mudah dipahami. Overall, kelasnya tetap bermanfaat untuk persiapan GMAT saya.\""
                },
                {
                    "name": "Christofer Yusalfino",
                    "program": "Ultimate GMAT",
                    "quote": "\"Mengikuti kelas GMAT dengan Mr. Paulus merupakan pengalaman yang sangat bermanfaat. Materi disampaikan dengan cara yang sistematis dan mudah dipahami, membuat saya semakin percaya diri menghadapi soal-soal GMAT. Penyampaiannya menarik dan efektif, serta memberikan banyak wawasan baru. Akan lebih baik lagi jika jadwal kelas bisa dipersiapkan tetap dari jauh hari, sehingga lebih teratur dan konsisten. Secara keseluruhan, saya merasa puas dengan proses pembelajaran di sini.\""
                },
                {
                    "name": "Vierly",
                    "program": "Ultimate GMAT",
                    "quote": "\"Belajarnya enak, jelas, dan efektif. Semua sudah baik, nggak ada yang perlu dikritik. Overall puas banget sama kelasnya.\""
                }
            ]
        },
        "faq": {
            "items": [
                {
                    "q": "Apa Itu GMAT? Panduan Lengkap Tes Masuk MBA Terbaik",
                    "a": "GMAT (Graduate Management Admission Test) adalah tes standar internasional yang digunakan oleh universitas dan sekolah bisnis terkemuka di seluruh dunia untuk menilai kesiapan akademik calon mahasiswa yang ingin melanjutkan studi ke jenjang MBA (Master of Business Administration) atau program manajemen bisnis lainnya.Tes GMAT dikelola oleh GMAC (Graduate Management Admission Council), sebuah lembaga independen yang secara resmi menyelenggarakan dan mengembangkan format ujian ini agar relevan dengan kebutuhan dunia pendidikan dan bisnis global."
                },
                {
                    "q": "Rentang Skor GMAT",
                    "a": "Skor GMAT berada dalam kisaran 200 hingga 800 poin, dengan skor 600 ke atas dianggap sangat kompetitif untuk masuk ke program MBA terbaik di dunia.Jika Anda ingin masuk ke sekolah bisnis top dunia seperti Harvard, INSEAD, atau Wharton, maka persiapan GMAT yang tepat adalah kunci sukses Anda."
                },
                {
                    "q": "Berapa biaya tes GMAT?",
                    "a": "Biaya standar untuk mengikuti tes GMAT™ Focus Edition, yang merupakan versi terbaru, ditetapkan secara global oleh Graduate Management Admission Council (GMAC), penyelenggara tes. Meskipun biaya dasar ini sama di seluruh dunia jika dihitung dalam Dolar AS, jumlah yang Anda bayarkan dalam mata uang lokal (seperti Rupiah) dapat sedikit berfluktuasi karena nilai tukar mata uang. Selain biaya pendaftaran dasar, ada juga potensi biaya tambahan untuk layanan opsional, seperti:Penjadwalan ulang tes (rescheduling fee) jika Anda perlu mengubah tanggal atau waktu tes.Pembatalan tes (cancellation fee).Laporan skor tambahan (Additional Score Reports/ASR) yang dikirim ke program MBA atau sekolah bisnis lebih dari yang termasuk dalam biaya awal.Reinstate skor yang telah dibatalkan.Untuk mengetahui biaya pasti tes GMAT™ Focus Edition dan biaya layanan terkait dalam mata uang lokal Anda pada saat pendaftaran, sangat penting untuk merujuk langsung ke situs web resmi GMAT di mba.com. Informasi biaya biasanya diperbarui secara berkala di sana."
                },
                {
                    "q": "Jadwal kursus GMAT di Ultimate Education kapan? Berapa biayanya?",
                    "a": "Ultimate Education menawarkan program persiapan GMAT yang dirancang secara cermat untuk membantu Anda memahami seluk-beluk tes dan mencapai skor target yang Anda impikan untuk masuk ke program MBA atau sekolah bisnis pilihan. Kami menyadari bahwa setiap calon peserta tes memiliki latar belakang, kekuatan, kelemahan, dan ketersediaan waktu yang berbeda. Oleh karena itu, kami menyediakan pilihan jadwal yang fleksibel, termasuk kelas grup yang memungkinkan diskusi dan pembelajaran kolaboratif, serta kelas privat yang menawarkan pendekatan yang lebih personal dan disesuaikan dengan kecepatan belajar Anda.Untuk mendapatkan informasi terkini mengenai jadwal kelas GMAT yang sedang berjalan atau akan datang, opsi program belajar yang kami tawarkan (misalnya, program intensif, program reguler, atau paket bimbingan berdasarkan target skor), serta rincian biaya kursus yang kompetitif dan potensi penawaran khusus, kami sangat menyarankan Anda untuk menghubungi tim konsultan pendidikan kami. Mereka siap memberikan konsultasi mendalam dan membantu Anda memilih jalur persiapan yang paling efektif. Silakan hubungi kami melalui:WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Tes GMAT di mana?",
                    "a": "Tes GMAT diselenggarakan di pusat-pusat tes resmi yang telah disertifikasi oleh GMAC. Pusat tes ini tersebar di berbagai negara di seluruh dunia, termasuk di beberapa kota besar di Indonesia. Lokasi pusat tes ini dirancang untuk menyediakan lingkungan yang aman, tenang, dan terkontrol untuk memastikan integritas dan keadilan tes.Anda dapat dengan mudah mencari lokasi pusat tes GMAT terdekat dengan menggunakan alat pencarian (test center locator tool) yang tersedia di situs web resmi GMAT, mba.com. Saat melakukan pendaftaran online, Anda akan diminta untuk memilih negara dan kota, lalu sistem akan menampilkan daftar pusat tes yang tersedia beserta alamatnya. Sejak beberapa tahun terakhir, GMAC juga menawarkan opsi GMAT™ Online Exam yang memungkinkan kandidat mengikuti tes dari rumah atau lokasi pribadi lainnya, asalkan memenuhi persyaratan teknis dan lingkungan pengujian yang ketat. Ketersediaan GMAT Online mungkin berbeda di setiap wilayah, jadi pastikan untuk memeriksa informasi terbaru di mba.com."
                },
                {
                    "q": "Kapan jadwal tes GMAT?",
                    "a": "Salah satu keunggulan GMAT adalah fleksibilitas jadwalnya. Tes GMAT di pusat tes resmi biasanya tersedia hampir sepanjang tahun, dengan banyak tanggal dan sesi waktu yang bisa dipilih setiap minggunya, tergantung pada kapasitas dan jam operasional masing-masing pusat tes. Ini berarti Anda seringkali dapat menemukan slot tes yang sesuai dengan jadwal persiapan Anda tanpa harus menunggu terlalu lama.Untuk GMAT™ Online Exam, fleksibilitasnya bahkan lebih besar, seringkali dengan ketersediaan janji temu 24 jam sehari, 7 hari seminggu, tergantung pada zona waktu dan ketersediaan pengawas online.Anda dapat melihat jadwal yang tersedia secara real-time dan memilih tanggal serta waktu yang paling sesuai untuk Anda saat melakukan proses pendaftaran melalui akun Anda di situs resmi mba.com. Disarankan untuk mendaftar setidaknya beberapa minggu atau bulan sebelumnya, terutama jika Anda menargetkan tanggal tertentu atau jika pusat tes di area Anda memiliki permintaan tinggi."
                },
                {
                    "q": "Apa saja bagian dalam tes GMAT?",
                    "a": "Versi terbaru dari tes GMAT adalah GMAT™ Focus Edition, yang dirancang untuk lebih relevan dengan keterampilan yang dibutuhkan di sekolah bisnis modern. GMAT™ Focus Edition terdiri dari tiga bagian utama, masing-masing berdurasi 45 menit:Quantitative Reasoning: Bagian ini menguji kemampuan Anda dalam memecahkan masalah kuantitatif dan menafsirkan data grafis. Jenis soalnya adalah Problem Solving. Tidak ada lagi soal Data Sufficiency seperti pada versi GMAT sebelumnya.Verbal Reasoning: Bagian ini menilai kemampuan Anda dalam memahami dan mengevaluasi argumen tertulis serta mengoreksi materi tertulis agar sesuai dengan standar bahasa Inggris tulis. Jenis soalnya meliputi Reading Comprehension dan Critical Reasoning. Tidak ada lagi soal Sentence Correction.Data Insights: Bagian baru ini mengukur kemampuan Anda untuk menganalisis dan menafsirkan data dari berbagai sumber (tabel, grafik, teks) untuk membuat keputusan berdasarkan informasi. Jenis soalnya meliputi Data Sufficiency (yang kini pindah ke bagian ini), Multi-Source Reasoning, Table Analysis, Graphics Interpretation, dan Two-Part Analysis.Versi GMAT sebelumnya (sebelum GMAT™ Focus Edition) memiliki empat bagian: Quantitative Reasoning, Verbal Reasoning, Integrated Reasoning, dan Analytical Writing Assessment (AWA), yang merupakan esai. GMAT™ Focus Edition tidak lagi menyertakan bagian esai AWA. Penting untuk mempersiapkan diri sesuai dengan format tes yang akan Anda ambil."
                },
                {
                    "q": "Skor GMAT valid berapa lama?",
                    "a": "Skor GMAT Anda secara resmi berlaku selama lima (5) tahun terhitung sejak tanggal Anda mengambil tes. Artinya, Anda dapat menggunakan skor tersebut untuk aplikasi ke program MBA atau sekolah bisnis lainnya kapan saja dalam periode lima tahun tersebut. Setelah lima tahun, skor Anda akan diarsipkan oleh GMAC dan tidak lagi secara otomatis dikirim ke sekolah.Meskipun skor tersebut secara teknis masih ada di arsip GMAC (dan dapat diminta dengan biaya tertentu untuk laporan tidak resmi), sebagian besar sekolah bisnis lebih memilih atau bahkan mensyaratkan skor GMAT yang diambil dalam lima tahun terakhir. Ini karena mereka menganggap skor yang lebih baru lebih akurat mencerminkan kemampuan Anda saat ini. Selalu pastikan untuk memeriksa kebijakan spesifik dari masing-masing program yang Anda minati mengenai batas usia skor GMAT yang mereka terima."
                },
                {
                    "q": "Manfaat punya skor GMAT?",
                    "a": "Memiliki skor GMAT yang kompetitif memberikan sejumlah manfaat signifikan, terutama bagi mereka yang bercita-cita untuk melanjutkan pendidikan di bidang manajemen dan bisnis di tingkat pascasarjana:Akses ke Program MBA dan Bisnis Terkemuka: Skor GMAT adalah salah satu komponen kunci dalam proses aplikasi ke sebagian besar program MBA (Master of Business Administration) dan program master lainnya di bidang bisnis (seperti Master of Finance, Master of Marketing, dll.) di universitas-universitas terkemuka di seluruh dunia. Skor yang tinggi dapat meningkatkan peluang Anda diterima secara signifikan.Indikator Kesiapan Akademik: GMAT dirancang untuk mengukur keterampilan berpikir kritis, analitis, kuantitatif, verbal, dan penalaran data yang dianggap penting untuk berhasil dalam kurikulum sekolah bisnis yang menantang. Skor Anda memberikan gambaran kepada komite penerimaan tentang kesiapan Anda.Peluang Beasiswa: Banyak sekolah bisnis menawarkan beasiswa berbasis prestasi (merit-based scholarships) kepada calon mahasiswa dengan profil aplikasi yang kuat, termasuk skor GMAT yang tinggi. Skor yang baik dapat membuka pintu untuk mendapatkan bantuan finansial yang signifikan.Daya Saing Global: GMAT adalah standar yang diakui secara internasional, sehingga skor Anda dapat dibandingkan secara adil dengan pelamar dari seluruh dunia, meningkatkan kredibilitas Anda di mata komite penerimaan global.Pengembangan Keterampilan: Proses persiapan GMAT itu sendiri dapat membantu Anda mengasah keterampilan analitis dan pemecahan masalah yang berharga tidak hanya untuk studi tetapi juga untuk karir Anda di masa depan."
                },
                {
                    "q": "Bisa kasih contoh soal GMAT?",
                    "a": "Sumber terbaik dan paling otentik untuk mendapatkan contoh soal dan materi persiapan GMAT adalah yang disediakan langsung oleh GMAC, penyelenggara tes. Menggunakan materi resmi akan memastikan Anda berlatih dengan soal-soal yang paling mirip dengan apa yang akan Anda hadapi pada hari tes:Situs Resmi GMAT (mba.com): Di sini Anda dapat menemukan GMAT™ Official Starter Kit and Practice Exams, yang mencakup dua tes latihan penuh gratis yang mensimulasikan pengalaman tes GMAT™ Focus Edition, lengkap dengan laporan skor dan analisis kinerja. Ada juga contoh soal untuk setiap bagian tes.GMAT™ Official Guide: Ini adalah serangkaian buku (tersedia dalam format cetak dan digital) yang berisi ratusan soal latihan resmi dari tes-tes GMAT sebelumnya, beserta penjelasan jawaban yang detail. Ada buku panduan utama, serta buku terpisah yang fokus pada Quantitative Reasoning, Verbal Reasoning, dan Data Insights.Sumber Daya Resmi Lainnya: GMAC juga menawarkan produk persiapan berbayar lainnya, seperti paket soal tambahan (Official Practice Questions) dan tes latihan tambahan (Official Practice Exams).Di Ultimate Education, program persiapan GMAT kami secara ekstensif menggunakan soal-soal dari sumber resmi dan materi tambahan yang relevan. Kami tidak hanya memberikan latihan soal, tetapi juga mengajarkan strategi pengerjaan yang efektif, teknik manajemen waktu, dan cara menganalisis soal secara mendalam untuk setiap bagian tes."
                },
                {
                    "q": "Media apa saja yang digunakan dalam proses bimbingan?",
                    "a": "Ultimate Education berkomitmen untuk menyediakan pengalaman belajar yang efektif dan mudah diakses. Oleh karena itu, program persiapan GMAT kami dapat diikuti melalui beberapa pilihan media, yang dirancang untuk mengakomodasi preferensi dan kebutuhan siswa:Bimbingan Online: Sebagian besar program kami dapat diakses secara online. Untuk sesi tatap muka virtual, kami menggunakan platform konferensi video populer dan handal seperti Google Meet atau Zoom. Ini memungkinkan interaksi langsung dengan tutor, diskusi kelompok (untuk kelas grup), pembagian layar untuk presentasi materi dan pengerjaan soal bersama, serta penggunaan papan tulis digital. Kami juga dapat memanfaatkan platform e-learning atau sistem manajemen pembelajaran (LMS) untuk berbagi materi, tugas, dan rekaman sesi (jika ada). Untuk mengikuti bimbingan online, pastikan Anda memiliki koneksi internet yang stabil dan perangkat yang sesuai (komputer/laptop dengan webcam dan mikrofon).Bimbingan Offline (Tatap Muka): Tergantung pada ketersediaan dan lokasi, kami juga mungkin menawarkan sesi bimbingan offline di pusat belajar kami atau lokasi lain yang disepakati. Sesi tatap muka ini memberikan keuntungan interaksi langsung yang lebih personal.Materi pembelajaran yang digunakan mencakup modul digital, e-book, bank soal, dan simulasi tes online yang dirancang untuk mencerminkan format GMAT™ Focus Edition."
                },
                {
                    "q": "Apakah saya dapat memilih tutor sendiri?",
                    "a": "Di Ultimate Education, kami memahami pentingnya memiliki tutor yang cocok dan dapat membantu Anda mencapai potensi maksimal. Meskipun saat ini kami tidak memiliki sistem di mana siswa dapat memilih tutor secara langsung dari daftar nama untuk program persiapan GMAT, kami menerapkan proses yang sangat hati-hati dalam mencocokkan siswa dengan tutor.Kami memiliki tim tutor GMAT yang terdiri dari para profesional yang sangat berpengalaman, memiliki pemahaman mendalam tentang seluk-beluk tes GMAT (termasuk format GMAT™ Focus Edition terbaru), dan telah terbukti berhasil membantu siswa mencapai skor tinggi. Saat Anda mendaftar, kami akan mempertimbangkan target skor Anda, latar belakang akademis Anda, gaya belajar yang Anda preferensikan (berdasarkan diskusi awal), dan ketersediaan jadwal Anda. Berdasarkan faktor-faktor ini, kami akan menugaskan seorang tutor yang kami yakini paling ahli dan paling sesuai untuk membimbing Anda. Tujuan utama kami adalah memastikan Anda mendapatkan bimbingan berkualitas tertinggi untuk persiapan GMAT Anda."
                }
            ]
        }
    },
    {
        "slug": "testdaf",
        "originalSlug": "testdaf-course",
        "meta": {
            "title": "TESTDAF - Germany A1-C2 Language Course",
            "description": "Raih skor TESTDAF  Germany A1-C2 Language impianmu dengan bimbingan intensif."
        },
        "hero": {
            "title": "Kursus Persiapan <span class=\"text-ultimate-yellow\">TESTDAF  Germany A1-C2 Language</span>",
            "subtitle": "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
            "pillText": "TESTDAF  GERMANY A1-C2 LANGUAGE Preparation",
            "image": "/images/hero_img.png"
        },
        "overview": {
            "title": "Gambaran Kursus",
            "content": [
                "Our German courses are specially designed to prepare for the TESTDAF (Test Deutsch als Fremdsprache)exam, Our TestDaf Course start from beginner (A1) to advanced (C2) level."
            ]
        },
        "pricing": {
            "TESTDAF Preparation Course": {
                "title": "TESTDAF Preparation Course",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "TESTDAF Custom Class": {
                "title": "TESTDAF Custom Class",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Silver": {
                "title": "Silver",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "GOLD": {
                "title": "GOLD",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "Premium": {
                "title": "Premium",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "CUSTOM YOUR OWN CLASS": {
                "title": "CUSTOM YOUR OWN CLASS",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            },
            "One on one Preparation": {
                "title": "One on one Preparation",
                "description": "",
                "features": "",
                "curriculum": [],
                "pricing": {
                    "Offline": {
                        "Bronze": 0,
                        "Silver": 0
                    },
                    "Online": {
                        "Bronze": 0,
                        "Silver": 0
                    }
                }
            }
        },
        "whyUs": {
            "title": "Kenapa Kami?",
            "items": []
        },
        "alumni": {
            "title": "Cerita Alumni",
            "subtitle": "Apa kata mereka?",
            "items": []
        },
        "faq": {
            "items": [
                {
                    "q": "What is the cost of the TestDaF test?",
                    "a": "The TestDaF (Test Deutsch als Fremdsprache) fee varies depending on the country and official test center where you register. This fee is set by the TestDaF-Institut in Germany and then converted to local currency by each test center, which may also add local administrative fees. For the most accurate and up-to-date TestDaF registration fees in Indonesia, you are advised to visit the official TestDaF website (www.testdaf.de) or contact an official TestDaF test center in Indonesia directly (usually Goethe-Institut or a designated German language institution). Fee information is usually available when the registration period opens."
                },
                {
                    "q": "Where is the TestDaF test held in Indonesia?",
                    "a": "The TestDaF test in Indonesia is administered at official test centers that have obtained a license from the TestDaF-Institut. The main locations for test administration are typically:Goethe-Institut: Branches of the Goethe-Institut in major cities such as Jakarta, Bandung, and Surabaya.Partner Educational Institutions or Universities: Some universities or other German language educational institutions that collaborate with the Goethe-Institut or TestDaF-Institut may also serve as test centers.A complete list of official TestDaF test centers worldwide, including in Indonesia, can be found through the test center search feature on the official TestDaF website."
                },
                {
                    "q": "When are TestDaF test dates typically held?",
                    "a": "TestDaF is administered several times a year on dates set globally by the TestDaF-Institut. Typically, about six TestDaF exam dates are offered per year. However, not all test centers worldwide (including in Indonesia) offer all of these exam dates. The TestDaF exam schedule for the upcoming year is usually announced on the official TestDaF website. Each local test center will announce which dates they will administer along with their registration periods. It is important to check the schedule at your target test center and register as early as possible as spots are limited."
                },
                {
                    "q": "How long is my TestDaF certificate valid?",
                    "a": "Your TestDaF test result certificate is valid indefinitely (unbegrenzt gültig). The TestDaF-Institut does not set an expiration date for its certificates. However, although the certificate itself does not expire, some universities or institutions in Germany may have preferences or internal policies regarding the age limit of the certificate they accept, especially if there has been a very long gap since you took the test. They may want to ensure that your German language proficiency is still at the same level. Therefore, it is advisable to check the specific requirements of the university or program you are applying to."
                },
                {
                    "q": "How is TestDaF scored and what levels does it measure?",
                    "a": "TestDaF is a German language test for academic purposes and measures language proficiency at upper-intermediate to advanced levels. Test results are not given as an overall “pass” or “fail”; instead, you will receive a separate score for each of the four test sections. The score for each section is expressed in one of three TestDaF levels:TestDaF-Niveaustufe 5 (TDN 5): The highest level, indicating very good German language proficiency, equivalent to CEFR level C1.2-C2.1.TestDaF-Niveaustufe 4 (TDN 4): Upper intermediate level, indicating solid and adequate language proficiency for studying at most German universities, equivalent to CEFR level B2.2-C1.1. This is the level most frequently required by universities in Germany.TestDaF-Niveaustufe 3 (TDN 3): Intermediate level, indicating basic German language proficiency that may require further improvement for academic study, equivalent to CEFR level B2.1. Some universities may accept TDN 3 for certain programs or with the condition of taking additional language courses.If your score is below TDN 3 (unter TDN 3 / U3), it means your proficiency has not reached the minimum level measured by TestDaF."
                },
                {
                    "q": "What skills are tested in TestDaF?",
                    "a": "TestDaF tests four language skills essential for studying in a German-speaking academic environment:Leseverstehen (Reading Comprehension): Tests the ability to understand various types of academic texts, such as journal articles, excerpts from textbooks, or university announcements.Hörverstehen (Listening Comprehension): Tests the ability to understand spoken German in an academic context, such as dialogues between students, interviews with professors, or lecture excerpts.Schriftlicher Ausdruck (Written Production): Tests the ability to write a structured and coherent argumentative text on a specific topic, often based on graphical data or short excerpts.Mündlicher Ausdruck (Oral Production): Tests the ability to speak and respond orally in various simulated situations relevant to university life, such as discussing, expressing opinions, or summarizing information. This section is recorded and scored later."
                },
                {
                    "q": "What are the main benefits of having a TestDaF certificate?",
                    "a": "Having a TestDaF certificate with adequate scores (usually at least TDN 4 in all sections) provides crucial benefits:University Admission Requirement in Germany: TestDaF is one of the most widely recognized and accepted proofs of German language proficiency by almost all universities and higher education institutions in Germany for German-taught study programs. Achieving a TDN 4 score in all sections generally meets the language requirements for most Bachelor’s and Master’s programs.Internationally Recognized Standard: A TestDaF certificate is globally recognized as proof of advanced academic German language ability.Preparation for Academic Study: The test format and task types in TestDaF are designed to reflect the language demands of university lectures in Germany, so preparing for this test also helps you prepare for actual studies.No Need for Additional University Language Tests: If you already have a TestDaF certificate with the required score, you usually don’t need to take the internal language test (DSH – Deutsche Sprachprüfung für den Hochschulzugang) administered by individual universities.Scholarship and Research Opportunities: Some scholarship programs or research positions in Germany may also require proof of German language proficiency like TestDaF."
                },
                {
                    "q": "Where can I get TestDaF sample questions?",
                    "a": "The best sources for authentic TestDaF sample questions are:Official TestDaF-Institut Website (www.testdaf.de): This site provides several complete sets of model tests (Modellsätze) that can be downloaded for free. These model tests include all four exam sections along with answer keys and sample responses for the written and oral sections.TestDaF Preparation Books: There are many TestDaF preparation books published by reputable German publishers (such as Hueber, Klett, Cornelsen) that contain strategies, practice questions, and full test simulations.Goethe-Institut Materials: The Goethe-Institut often offers TestDaF preparation courses and may provide additional practice materials or access to sample questions.Online Practice Platforms: Several online German language learning platforms also offer specific TestDaF practice."
                },
                {
                    "q": "When are Ultimate Education's TestDaF preparation course schedules? What are the fees?",
                    "a": "Ultimate Education offers TestDaF preparation programs designed to help you deeply understand the test format, develop effective test-taking strategies for each section (Leseverstehen, Hörverstehen, Schriftlicher Ausdruck, Mündlicher Ausdruck), and improve your German language proficiency to reach your target level (TDN 4 or TDN 5).We provide flexible schedules, including group classes and private sessions. Course fees will depend on the program duration and class type. For the latest information regarding TestDaF preparation course schedules, programs, and fees, please contact our education consulting team!WhatsApp: 083812310368Email: info@ultimateducation.co.id"
                },
                {
                    "q": "Can I choose my own tutor for TestDaF courses at Ultimate Education?",
                    "a": "At Ultimate Education, we are committed to providing high-quality TestDaF guidance. Our tutor team consists of experienced German language teachers, many of whom have German as a Foreign Language (DaF) teaching qualifications and a strong understanding of TestDaF requirements. While direct specific tutor selection by students is not a standard feature, we will strive to match you with a tutor who has the expertise and experience most relevant to your needs and target score, and who considers your learning preferences."
                }
            ]
        }
    }
];