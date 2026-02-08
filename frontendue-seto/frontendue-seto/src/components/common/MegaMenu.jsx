import React, { useState } from 'react';

const megaMenuData = [
  {
    id: 'terfavorit',
    label: 'Program Terfavorit',
    items: [
      { name: 'Ultimate IELTS', href: '/persiapan-ielts', image: '/program/ielts.png', desc: 'Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja' },
      { name: 'Ultimate SAT', href: '/persiapan-sat', image: '/program/sat.png', desc: 'Bimbingan intensif tes SAT untuk persiapan kuliah ke luar negeri' },
      { name: 'Ultimate GRE', href: '/persiapan-gre', image: '/program/gre.png', desc: 'Persiapan lengkap GRE untuk program Master di luar negeri' },
      { name: 'Ultimate TOEFL', href: '/persiapan-toefl', image: '/program/toefl.png', desc: 'Strategi dan latihan TOEFL iBT untuk skor tinggi' }
    ]
  },
  {
    id: 'kuliah-luar-negeri',
    label: 'Kuliah di Luar Negeri',
    items: [
      { name: 'Persiapan Beasiswa', href: '/beasiswa', image: '/program/ausbildung.png', desc: 'Panduan lengkap mendapatkan beasiswa kuliah di luar negeri' },
      { name: 'Study in USA', href: '/study-usa', image: '/program/sat.png', desc: 'Konsultasi kuliah di Amerika Serikat' },
      { name: 'Study in UK', href: '/study-uk', image: '/program/ielts.png', desc: 'Konsultasi kuliah di Inggris' },
      { name: 'Study in Australia', href: '/study-australia', image: '/program/pte.png', desc: 'Konsultasi kuliah di Australia' }
    ]
  },
  {
    id: 'persiapan-tes',
    label: 'Persiapan Tes',
    items: [
      { name: 'IELTS', href: '/persiapan-ielts', image: '/program/ielts.png', desc: 'International English Language Testing System' },
      { name: 'TOEFL', href: '/persiapan-toefl', image: '/program/toefl.png', desc: 'Test of English as a Foreign Language' },
      { name: 'SAT', href: '/persiapan-sat', image: '/program/sat.png', desc: 'Scholastic Assessment Test' },
      { name: 'GRE', href: '/persiapan-gre', image: '/program/gre.png', desc: 'Graduate Record Examination' },
      { name: 'GMAT', href: '/persiapan-gmat', image: '/program/gmat.png', desc: 'Graduate Management Admission Test' },
      { name: 'PTE', href: '/persiapan-pte', image: '/program/pte.png', desc: 'Pearson Test of English' }
    ]
  },
  {
    id: 'kelas-bahasa',
    label: 'Kelas Bahasa',
    items: [
      { name: 'JLPT - Bahasa Jepang', href: '/kelas-jlpt', image: '/program/jlpt.png', desc: 'Japanese Language Proficiency Test' },
      { name: 'HSK - Bahasa Mandarin', href: '/kelas-hsk', image: '/program/hsk.png', desc: 'Hanyu Shuiping Kaoshi (Chinese Proficiency)' },
      { name: 'TOPIK - Bahasa Korea', href: '/kelas-topik', image: '/program/topik.png', desc: 'Test of Proficiency in Korean' },
      { name: 'DELF - Bahasa Prancis', href: '/kelas-delf', image: '/program/delf.png', desc: 'Diplome d Etudes en Langue Francaise' }
    ]
  },
  {
    id: 'lainnya',
    label: 'Lainnya',
    items: [
      { name: 'General English', href: '/general-english', image: '/program/ge.png', desc: 'Kursus Bahasa Inggris untuk semua level' },
      { name: 'Business English', href: '/business-english', image: '/program/be.png', desc: 'Bahasa Inggris untuk profesional' },
      { name: 'BIPA', href: '/bipa', image: '/program/bipa.png', desc: 'Bahasa Indonesia bagi Penutur Asing' },
      { name: 'Corporate Training', href: '/corporate', image: '/program/be.png', desc: 'Program pelatihan khusus perusahaan' }
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
      <div className="flex flex-col lg:flex-row">
        {/* Tabs Sidebar/Header */}
        <div className="flex lg:flex-col bg-slate-50 lg:w-56 border-r border-slate-100">
          {megaMenuData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`flex-1 lg:flex-initial py-3 px-5 text-xs font-bold font-heading uppercase tracking-wider text-left transition-all duration-200 border-b lg:border-b-0 lg:border-l-4 ${activeTab === tab.id
                ? 'bg-white text-ultimate-blue border-ultimate-blue'
                : 'text-slate-500 hover:text-ultimate-blue hover:bg-white/50 border-transparent'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 max-h-[60vh] overflow-y-auto">
          {megaMenuData.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                {tab.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group relative flex items-center gap-3 p-2 rounded-xl overflow-hidden border border-slate-100 hover:border-ultimate-blue transition-all duration-300 hover:shadow-md bg-white"
                  >
                    {/* Square image */}
                    <div className="w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-800 group-hover:text-ultimate-blue mb-0.5 transition-colors font-heading text-xs uppercase tracking-wide truncate">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2 font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* View All Programs Link */}
              <div className="flex justify-center pt-3 border-t border-slate-100">
                <a
                  href="/program"
                  className="group inline-flex items-center gap-2 px-5 py-2 text-ultimate-blue hover:text-white bg-white hover:bg-ultimate-blue border-2 border-ultimate-blue font-bold font-heading text-xs uppercase tracking-wider rounded-lg transition-all duration-300"
                >
                  <span>Lihat Semua Program</span>
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
