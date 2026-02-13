import React, { useState } from 'react';

const megaMenuData = [
  {
    id: 'terfavorit',
    label: 'Program terfavorit',
    type: 'featured',
    items: [
      { name: 'Ultimate IELTS', href: '/program/ielts', image: '/program/ielts.png', desc: 'Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja' },
      { name: 'Ultimate SAT', href: '/program/sat', image: '/program/sat.png', desc: 'Bimbingan intensif tes SAT untuk persiapan kuliah ke luar negeri' },
      { name: 'Ultimate GRE', href: '/program/gre', image: '/program/gre.png', desc: 'Persiapan lengkap GRE untuk program Master di luar negeri' },
    ]
  },
  {
    id: 'kuliah-luar-negeri',
    label: 'Kuliah Luar Negeri',
    type: 'split',
    title: 'Kuliah di Luar Negeri',
    desc: 'Layanan konsultasi, bimbingan, dan persiapan dokumen untuk kuliah ke luar negeri melalui jalur beasiswa maupun mandiri. Untuk S1, S2, hingga S3, semua lengkap!',
    featured: {
      name: 'Ultimate Scholarship',
      href: '/program/scholarship',
      image: '/program/Scholarship.png',
      desc: 'Bimbingan persiapan beasiswa luar negeri dari hulu ke hilir.'
    }
  },
  {
    id: 'persiapan-tes',
    label: 'Persiapan tes',
    type: 'list-split',
    title: 'Persiapan Tes',
    desc: 'Layanan bimbingan dan pendaftaran tes masuk kuliah luar negeri, seperti SAT, GMAT, GRE, ACT, dan lainnya',
    items: [
      { name: 'Ultimate IELTS', href: '/program/ielts' },
      { name: 'Ultimate SAT', href: '/program/sat' },
      { name: 'Ultimate GMAT', href: '/program/gmat' },
      { name: 'Ultimate GRE', href: '/program/gre' },
      { name: 'Ultimate TOEFL', href: '/program/toefl' },
      { name: 'Ultimate A-LEVEL', href: '/program/a-level' },
      { name: 'Ultimate IB', href: '/program/ib' },
      { name: 'Ultimate Scholarship', href: '/program/scholarship' },
      { name: 'Ultimate IGCSE', href: '/program/igcse' },
      { name: 'Ultimate GED', href: '/program/ged' },
      { name: 'Ultimate ACT', href: '/program/act' },
      { name: 'Ultimate PTE', href: '/program/pte' },
      { name: 'Ultimate TOEIC', href: '/program/toeic' },
      { name: 'Ultimate O-LEVEL', href: '/program/o-level' },
      { name: 'Ultimate LSAT', href: '/program/lsat' },
      { name: 'Ultimate AS-Level', href: '/program/as-level' },
    ]
  },
  {
    id: 'kelas-bahasa',
    label: 'Kelas bahasa',
    type: 'list-split',
    title: 'Kelas Bahasa',
    desc: 'Layanan bimbingan bahasa hingga pendaftaran tes proficiency untuk bahasa inggris dan bahasa asing lainnya',
    items: [
      { name: 'Ultimate BIPA', href: '/program/bipa' },
      { name: 'Ultimate HSK', href: '/program/hsk' },
      { name: 'Ultimate JLPT', href: '/program/jlpt' },
      { name: 'Ultimate TOPIK', href: '/program/topik' },
      { name: 'Ultimate DELF', href: '/program/delf' },
      { name: 'Ultimate TesDAF', href: '/program/testdaf' },
      { name: 'Business English', href: '/program/business-english' },
      { name: 'General English', href: '/program/general-english' },
    ]
  },
  {
    id: 'lainnya',
    label: 'Lainnya',
    type: 'list-split',
    title: 'Lainnya',
    desc: 'Beragam kelas bimbingan lain yang berguna untuk menunjang studi kamu',
    items: [
      { name: 'Ultimate UTBK', href: '/program/utbk' },
      { name: 'Ultimate Ausbildung', href: '/program/ausbildung' },
      { name: 'Ultimate Webinar', href: '/webinar' },
      { name: 'IELTS Calculator', href: '/tools/ielts-calculator' },
      { name: 'SAT Calculator', href: '/tools/sat-calculator' },
      { name: 'Rasionalisasi SNBP', href: '/tools/snbp' },
    ]
  }
];

export default function MegaMenu({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('terfavorit');

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-full bg-white rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Tabs Sidebar */}
        <div className="flex lg:flex-col bg-slate-50 lg:w-64 border-r border-slate-100">
          {megaMenuData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`flex-1 lg:flex-initial py-4 px-6 text-base font-normal capitalize text-left transition-all duration-200 border-b lg:border-b-0 lg:border-l-4 ${activeTab === tab.id
                ? 'bg-white text-ultimate-blue border-ultimate-blue'
                : 'text-slate-700 hover:text-ultimate-blue hover:bg-white/50 border-transparent'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl">
            {megaMenuData.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? 'block animate-in fade-in duration-300' : 'hidden'}`}
              >
                {tab.type === 'featured' && (
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      {tab.items.map((item, index) => (
                        <a key={index} href={item.href} className="group block max-w-[340px]">
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 group-hover:border-ultimate-blue/30 transition-all">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <h4 className="font-heading font-semibold text-slate-900 group-hover:text-ultimate-blue text-lg mb-2 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </a>
                      ))}
                    </div>
                    <div className="flex justify-center pt-4 border-t border-slate-100 mt-auto">
                      <a href="/program" className="inline-flex items-center gap-2 px-6 py-2.5 bg-ultimate-blue text-white rounded-full font-semibold hover:bg-ultimate-blue/90 transition-all transform hover:scale-105 shadow-md">
                        <span>Lihat Semua Program</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}

                {tab.type === 'split' && (
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-8 items-start">
                      <div className="md:col-span-3 flex flex-col pt-2">
                        <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-4">{tab.title}</h3>
                        <p className="text-slate-500 leading-relaxed mb-8 text-base">
                          {tab.desc}
                        </p>
                        <a href="/program" className="w-fit inline-flex items-center gap-2 px-6 py-2.5 bg-ultimate-blue text-white rounded-full font-semibold hover:bg-ultimate-blue/90 transition-all shadow-md">
                          <span>Lihat Semua Program</span>
                        </a>
                      </div>
                      <div className="md:col-span-2">
                        <a href={tab.featured.href} className="group block">
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 group-hover:border-ultimate-blue/30 transition-all">
                            <img src={tab.featured.image} alt={tab.featured.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <h4 className="font-heading font-semibold text-slate-900 group-hover:text-ultimate-blue text-lg mb-2 transition-colors">
                            {tab.featured.name}
                          </h4>
                          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed font-sans">
                            {tab.featured.desc}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {tab.type === 'list-split' && (
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-8 items-start">
                      <div className="md:col-span-2">
                        <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-4">{tab.title}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6 text-base">
                          {tab.desc}
                        </p>
                        <a href="/program" className="inline-flex items-center gap-2 px-6 py-2.5 bg-ultimate-blue text-white rounded-full font-semibold hover:bg-ultimate-blue/90 transition-all shadow-md">
                          <span>Lihat Semua Program</span>
                        </a>
                      </div>
                      <div className="md:col-span-3 grid grid-cols-2 gap-x-8 gap-y-3">
                        {tab.items.map((item, idx) => (
                          <a key={idx} href={item.href} className="text-slate-600 hover:text-ultimate-blue transition-colors flex items-center gap-2 group text-[15px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-ultimate-blue transition-colors shrink-0"></span>
                            <span className="truncate">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
