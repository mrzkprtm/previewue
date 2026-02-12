import React, { useState, useMemo } from 'react';

export default function ProgramTabs({ allPrograms }) {
    const tabs = ["Semua Program", "Persiapan TES", "Bahasa Inggris", "Program Bahasa"];
    const [activeTab, setActiveTab] = useState("Semua Program");

    const filteredPrograms = useMemo(() => {
        if (activeTab === "Semua Program") return allPrograms;
        return allPrograms.filter(program => program.categories.includes(activeTab));
    }, [activeTab, allPrograms]);

    return (
        <div className="w-full">
            {/* Tab Navigation - Centered */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3.5 rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-md ${activeTab === tab
                            ? 'bg-ultimate-blue text-white scale-105 shadow-blue-200'
                            : 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-lg'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Program List - Full Width */}
            <div className="space-y-6">
                {filteredPrograms.map((program, idx) => (
                    <div
                        key={program.slug + idx}
                        className="bg-white rounded-[1.5rem] shadow-lg border border-slate-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-2"
                    >
                        {/* Image Section - Compact 3:2 aspect */}
                        <div className="md:w-[35%] bg-slate-50 relative overflow-hidden group-hover:bg-slate-100 transition-colors shrink-0">
                            <div className="aspect-[3/2] w-full h-full relative z-10">
                                <img
                                    src={program.image}
                                    alt={program.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-[65%] p-6 md:p-7 flex flex-col relative">
                            {/* Blue Border Accent */}
                            <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-ultimate-blue/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex-grow">
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2 group-hover:text-ultimate-blue transition-colors text-left">
                                    {program.name}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed font-sans text-left">
                                    {program.description}
                                </p>

                                {/* Details Grid - More Compact */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <span className="text-base shrink-0">🎯</span>
                                        <span className="text-xs md:text-sm font-medium line-clamp-1">{program.target}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <span className="text-base shrink-0">🕒</span>
                                        <span className="text-xs md:text-sm font-medium line-clamp-1">Durasi {program.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600 sm:col-span-2">
                                        <span className="text-base shrink-0">🎁</span>
                                        <span className="text-xs md:text-sm font-medium line-clamp-1">{program.includes}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action - Bottom Right */}
                            <div className="flex justify-end mt-auto">
                                <a
                                    href={`/program/${program.slug}`}
                                    className="bg-ultimate-blue text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-ultimate-navy transition-all shadow-md group/btn flex items-center gap-2"
                                >
                                    <span>Pelajari lebih lanjut</span>
                                    <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredPrograms.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        <p className="text-xl">Belum ada program untuk kategori ini.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
