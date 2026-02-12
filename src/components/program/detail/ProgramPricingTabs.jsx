import React, { useState, useMemo, useEffect } from 'react';

const programData = {
    Group: {
        title: 'IELTS GROUP',
        description:
            'Program IELTS Group menawarkan suasana belajar kelompok dengan jumlah peserta terbatas (7-12 orang per kelas). Metode ini membuat pembelajaran lebih fokus, interaktif, dan menyenangkan melalui peran edukatif serta diskusi aktif.',
        features:
            'Peserta akan mendapatkan materi lengkap mencakup Listening, Reading, Writing, dan Speaking. Dengan pendekatan ini, siswa tidak hanya memahami teori dan strategi, tetapi juga langsung berlatih mengaplikasikannya, sehingga lebih percaya diri dalam menghadapi ujian IELTS.',
        curriculum: [
            {
                title: 'Penguatan Dasar & Teknik Dasar (B1)',
                content:
                    'Fokus pada pembangunan pondasi bahasa Inggris yang kuat untuk IELTS, termasuk vocabulary building dan grammar essentials.',
            },
            {
                title: 'Intensif Diferensiasi (B1-B2)',
                content:
                    'Latihan intensif membedakan tipe soal dan strategi menjawab, meningkatkan kecepatan dan akurasi.',
            },
            {
                title: 'Writing Mastery & Speaking Fluency',
                content:
                    'Teknik menulis essay Task 1 & Task 2, serta meningkatkan kelancaran dan koherensi speaking.',
            },
            {
                title: 'Advance Strategies & Final Simulation',
                content:
                    'Strategi tingkat lanjut, time management, dan simulasi ujian full-length dengan feedback detail.',
            },
        ],
        pricing: {
            Offline: { Bronze: 2500000, Silver: 2700000 },
            Online: { Bronze: 1800000, Silver: 2000000 },
        },
    },
    Private: {
        title: 'IELTS PRIVATE',
        description:
            'Program Private dirancang khusus untuk Anda yang menginginkan perhatian penuh dari tutor (1-on-1). Waktu belajar sangat fleksibel dan materi disesuaikan dengan kebutuhan spesifik Anda.',
        features:
            'Ideal untuk mengejar target skor dalam waktu singkat. Anda akan mendapatkan feedback instan dan mendalam untuk setiap sesi latihan.',
        curriculum: [
            {
                title: 'Personalized Diagnostic Test',
                content: 'Analisis mendalam kekuatan dan kelemahan peserta di keempat skill IELTS.',
            },
            {
                title: 'Customized Learning Path',
                content: 'Materi yang disusun khusus berdasarkan hasil tes awal dan target skor.',
            },
            {
                title: 'High-Frequency Practice',
                content:
                    'Latihan intensif pada bagian yang paling membutuhkan peningkatan, dengan mock test rutin.',
            },
        ],
        pricing: {
            Offline: { Bronze: 4500000, Silver: 5000000 },
            Online: { Bronze: 3500000, Silver: 4000000 },
        },
    },
    'Custom Class': {
        title: 'IELTS CUSTOM CLASS',
        description:
            'Buat kelas Anda sendiri bersama teman-teman atau rekan kerja (2-5 orang). Kombinasi antara fokus private dan interaksi group.',
        features:
            'Sangat efektif untuk belajar bersama partner yang setara levelnya. Jadwal dan materi bisa disesuaikan dengan kebutuhan kelompok.',
        curriculum: [
            {
                title: 'Small Group Interaction',
                content: 'Diskusi intensif dalam kelompok kecil dengan feedback individual.',
            },
            {
                title: 'Targeted Skill Building',
                content: 'Fokus pada skill yang disepakati bersama oleh anggota grup.',
            },
        ],
        pricing: {
            Offline: { Bronze: 3500000, Silver: 3800000 },
            Online: { Bronze: 2800000, Silver: 3100000 },
        },
    },
    'Program Bundling': {
        title: 'IELTS BUNDLING',
        description:
            'Paket lengkap kursus persiapan + official test. Hemat lebih banyak dan tidak perlu repot mengurus pendaftaran tes secara terpisah.',
        features:
            'Sudah termasuk bimbingan intensif dan voucher tes resmi IELTS. Pilihan terbaik untuk persiapan yang menyeluruh.',
        curriculum: [
            {
                title: 'Full Prep Course',
                content: 'Seluruh materi persiapan IELTS dari dasar hingga simulasi akhir.',
            },
            {
                title: 'Test Registration Assistance',
                content: 'Bantuan pendaftaran tes resmi dan konsultasi pemilihan tanggal tes.',
            },
        ],
        pricing: {
            Offline: { Bronze: 5500000, Silver: 6000000 },
            Online: { Bronze: 4800000, Silver: 5300000 },
        },
    },
};

const tabKeys = Object.keys(programData);

const ProgramPricingTabs = () => {
    const [activeTab, setActiveTab] = useState('Group');
    const [mode, setMode] = useState('Offline');
    const [selectedVariant, setSelectedVariant] = useState('Bronze');
    const [extraSessions, setExtraSessions] = useState(0);
    const [bundlingTest, setBundlingTest] = useState(0);
    const [openAccordion, setOpenAccordion] = useState(null);

    const currentProg = programData[activeTab];

    // Reset state when switching tabs
    useEffect(() => {
        setSelectedVariant('Bronze');
        setExtraSessions(0);
        setBundlingTest(0);
        setOpenAccordion(null);
    }, [activeTab]);

    const variants = Object.keys(currentProg.pricing[mode]);
    const safeVariant = variants.includes(selectedVariant) ? selectedVariant : variants[0];
    const basePrice = currentProg.pricing[mode][safeVariant];
    const extraCost = extraSessions * 150000;
    const bundlingCost = bundlingTest * 3000000;
    const totalPrice = basePrice + extraCost + bundlingCost;

    const formatPrice = (n) => 'Rp ' + n.toLocaleString('id-ID');

    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-ultimate-blue mb-3 text-center">
                    Topik
                </h2>
                <p className="text-slate-500 text-center mb-10 text-[15px] md:text-base">
                    Pilih tipe kelas yang sesuai dengan kebutuhan belajar kamu
                </p>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
                    {tabKeys.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold 
                transition-all duration-200 border
                ${activeTab === tab
                                    ? 'bg-ultimate-blue text-white border-ultimate-blue shadow-lg shadow-ultimate-blue/20'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-ultimate-blue hover:text-ultimate-blue'
                                }
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left: Description & Curriculum (70%) */}
                        <div className="lg:w-[68%] p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                                {currentProg.title}
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed text-[15px]">
                                {currentProg.description}
                            </p>
                            <p className="text-slate-500 mb-10 leading-relaxed text-[15px]">
                                {currentProg.features}
                            </p>

                            <h4 className="text-lg font-heading font-bold text-slate-900 mb-5">
                                Cuplikan Materi Pembelajaran
                            </h4>
                            <div className="space-y-3">
                                {currentProg.curriculum.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-slate-100 rounded-2xl overflow-hidden transition-colors"
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors"
                                            onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                        >
                                            <span className="font-semibold text-slate-800 text-[15px]">{item.title}</span>
                                            <svg
                                                className={`w-5 h-5 text-ultimate-blue shrink-0 ml-4 transition-transform duration-200 ${openAccordion === idx ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-200 ${openAccordion === idx ? 'max-h-40' : 'max-h-0'}`}
                                        >
                                            <div className="p-4 md:p-5 text-slate-600 border-t border-slate-100 text-[15px] leading-relaxed">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Pricing Card (30%) */}
                        <div className="lg:w-[32%] p-6 md:p-8 bg-slate-50/30">
                            <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg border border-slate-100 lg:sticky lg:top-8">
                                <h4 className="text-base font-bold text-slate-800 mb-5">Pilih Tipe Kelas</h4>

                                {/* Mode Toggle: Offline / Online */}
                                <div className="flex p-1 bg-slate-100 rounded-xl mb-5">
                                    {['Offline', 'Online'].map((m) => (
                                        <button
                                            key={m}
                                            onClick={() => setMode(m)}
                                            className={`
                        flex-1 py-2 text-sm font-bold rounded-lg transition-all
                        flex items-center justify-center gap-2
                        ${mode === m ? 'bg-white text-ultimate-blue shadow-sm' : 'text-slate-400'}
                      `}
                                        >
                                            {m === 'Offline' ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {m}
                                        </button>
                                    ))}
                                </div>

                                {/* Variant Selection */}
                                <div className="space-y-2 mb-5">
                                    {variants.map((v) => (
                                        <button
                                            key={v}
                                            onClick={() => setSelectedVariant(v)}
                                            className={`
                        w-full text-left p-3.5 rounded-xl border-2 transition-all
                        ${safeVariant === v
                                                    ? 'border-ultimate-blue bg-blue-50/40'
                                                    : 'border-slate-100 hover:border-slate-200'
                                                }
                      `}
                                        >
                                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                                {v}
                                            </div>
                                            <div className="text-lg font-bold text-slate-900">
                                                {formatPrice(currentProg.pricing[mode][v])}
                                            </div>
                                            <div className="text-[11px] text-slate-400">Paket {activeTab}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Counters */}
                                <div className="space-y-3 mb-5">
                                    <CounterRow
                                        label="Tambah Kelas (per sesi)"
                                        value={extraSessions}
                                        onDec={() => setExtraSessions(Math.max(0, extraSessions - 1))}
                                        onInc={() => setExtraSessions(extraSessions + 1)}
                                    />
                                    <CounterRow
                                        label="Bundling Test (opsional)"
                                        value={bundlingTest}
                                        onDec={() => setBundlingTest(Math.max(0, bundlingTest - 1))}
                                        onInc={() => setBundlingTest(bundlingTest + 1)}
                                    />
                                </div>

                                {/* Price Summary */}
                                <div className="pt-4 border-t border-slate-100 space-y-1.5 mb-5">
                                    <PriceRow label="Harga Dasar" value={formatPrice(basePrice)} />
                                    {extraSessions > 0 && (
                                        <PriceRow
                                            label={`Harga Tambah Kelas`}
                                            value={formatPrice(extraCost)}
                                        />
                                    )}
                                    {bundlingTest > 0 && (
                                        <PriceRow label="Harga Bundling Test" value={formatPrice(bundlingCost)} />
                                    )}
                                    <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-50">
                                        <span>Total</span>
                                        <span className="text-ultimate-blue">{formatPrice(totalPrice)}</span>
                                    </div>
                                </div>

                                <a
                                    href="https://api.whatsapp.com/send/?phone=6283812310368"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3.5 bg-ultimate-blue text-white text-center rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-ultimate-navy transition-all text-[15px]"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function CounterRow({ label, value, onDec, onInc }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">{label}</span>
            <div className="flex items-center gap-2">
                <button
                    onClick={onDec}
                    className="w-7 h-7 rounded-lg bg-ultimate-blue text-white flex items-center justify-center font-bold text-sm shadow-sm hover:bg-ultimate-navy transition-colors"
                >
                    −
                </button>
                <span className="text-sm font-bold w-5 text-center tabular-nums">{value}</span>
                <button
                    onClick={onInc}
                    className="w-7 h-7 rounded-lg bg-ultimate-blue text-white flex items-center justify-center font-bold text-sm shadow-sm hover:bg-ultimate-navy transition-colors"
                >
                    +
                </button>
            </div>
        </div>
    );
}

function PriceRow({ label, value }) {
    return (
        <div className="flex justify-between text-xs text-slate-500">
            <span>{label}</span>
            <span className="tabular-nums">{value}</span>
        </div>
    );
}

export default ProgramPricingTabs;
