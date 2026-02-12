import React, { useState } from 'react';

const steps = [
    {
        num: '01',
        title: 'Kirim Data Diri Dulu',
        desc: 'Kirimkan nama lengkap dan alamat email aktif kamu ke tim UE',
    },
    {
        num: '02',
        title: 'Tunggu Konfirmasi dari UE',
        desc: 'Kami akan kirim invoice & link formulir ke email kamu.',
    },
    {
        num: '03',
        title: 'Lakukan Pembayaran',
        desc: 'Transfer sesuai invoice, mudah & fleksibel!',
    },
    {
        num: '04',
        title: 'Lengkapi Formulir Pendaftaran',
        desc: 'Lengkapi data biar pendaftaranmu cepat diproses.',
    },
    {
        num: '05',
        title: 'Kerjakan Pretest dari UE',
        desc: 'Sudah bayar? Langsung kerjain pretest!',
    },
    {
        num: '06',
        title: 'Kamu Resmi Terdaftar di UE!',
        desc: 'Kamu resmi jadi peserta! Yuk capai skor impian bareng UE!',
    },
];

const PaymentRoadmap = () => {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="py-12 md:py-16 bg-slate-50 overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-ultimate-blue mb-16 text-center">
                    Cara Mendaftar Ultimate Education
                </h2>

                {/* Desktop: SVG road with positioned markers */}
                <div className="hidden md:block relative">
                    <svg className="w-full" viewBox="0 0 1200 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Road background (thick) */}
                        <path
                            d="M60,300 L400,300 Q500,300 500,220 L500,140 Q500,60 400,60 L800,60 Q900,60 900,140 L900,220 Q900,300 800,300 L1140,300"
                            stroke="#1e3a8a"
                            strokeWidth="60"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.08"
                        />
                        {/* Road center line (dashed) */}
                        <path
                            d="M60,300 L400,300 Q500,300 500,220 L500,140 Q500,60 400,60 L800,60 Q900,60 900,140 L900,220 Q900,300 800,300 L1140,300"
                            stroke="#1e3a8a"
                            strokeWidth="4"
                            strokeDasharray="16 12"
                            strokeLinecap="round"
                            opacity="0.25"
                        />
                    </svg>

                    {/* Step markers positioned along the road */}
                    {[
                        { left: '5%', top: '72%' },
                        { left: '33%', top: '72%' },
                        { left: '42%', top: '10%' },
                        { left: '67%', top: '10%' },
                        { left: '75%', top: '72%' },
                        { left: '95%', top: '72%' },
                    ].map((pos, idx) => (
                        <div
                            key={idx}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ left: pos.left, top: pos.top }}
                            onMouseEnter={() => setActiveStep(idx)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center
                font-bold text-lg shadow-xl cursor-pointer
                transition-all duration-300
                ${activeStep === idx
                                    ? 'bg-ultimate-yellow text-ultimate-navy scale-110 -rotate-3'
                                    : 'bg-white text-ultimate-blue hover:scale-105 border border-slate-100'
                                }
              `}>
                                {steps[idx].num}
                            </div>

                            {/* Tooltip */}
                            <div className={`
                absolute left-1/2 transform -translate-x-1/2 w-72
                bg-white p-5 rounded-2xl shadow-2xl border border-slate-100
                pointer-events-none transition-all duration-300 z-50
                ${idx < 3 ? 'top-full mt-4' : 'bottom-full mb-4'}
                ${activeStep === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}>
                                <div className={`
                  absolute left-1/2 transform -translate-x-1/2
                  w-3 h-3 bg-white rotate-45 border border-slate-100
                  ${idx < 3 ? '-top-1.5 border-r-0 border-b-0' : '-bottom-1.5 border-l-0 border-t-0'}
                `}></div>
                                <div className="text-ultimate-blue font-bold text-base mb-1">{steps[idx].title}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{steps[idx].desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: stacked vertical timeline */}
                <div className="md:hidden space-y-0 relative">
                    <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-ultimate-blue/10"></div>
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative flex items-start gap-5 py-6"
                            onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                        >
                            <div className={`
                w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center
                font-bold text-lg shadow-lg z-10 cursor-pointer
                transition-all duration-300
                ${activeStep === idx
                                    ? 'bg-ultimate-yellow text-ultimate-navy scale-105'
                                    : 'bg-white text-ultimate-blue border border-slate-100'
                                }
              `}>
                                {step.num}
                            </div>
                            <div className="pt-2">
                                <div className="font-bold text-slate-900 text-base mb-1">{step.title}</div>
                                <p className={`
                  text-slate-500 text-sm leading-relaxed
                  transition-all duration-300 overflow-hidden
                  ${activeStep === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-slate-400 text-sm">
                    <span className="hidden md:inline">Arahkan kursor ke nomor untuk melihat detail langkah</span>
                    <span className="md:hidden">Ketuk nomor untuk melihat detail langkah</span>
                </div>
            </div>
        </section>
    );
};

export default PaymentRoadmap;
