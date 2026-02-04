import React, { useState } from 'react';

const megaMenuData = [
  {
    id: 'terfavorit',
    label: 'Program Terfavorit',
    items: [
      { name: 'Ultimate IELTS', href: '/persiapan-ielts', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592.webp', desc: 'Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja' },
      { name: 'Ultimate SAT', href: '/persiapan-sat', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-3.webp', desc: 'Bimbingan intensif tes SAT untuk persiapan kuliah ke luar negeri' },
      { name: 'Ultimate GRE', href: '/persiapan-gre', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-1.webp', desc: 'Persiapan lengkap GRE untuk program Master di luar negeri' },
      { name: 'Ultimate TOEFL', href: '/persiapan-toefl', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-4.webp', desc: 'Strategi dan latihan TOEFL iBT untuk skor tinggi' }
    ]
  },
  {
    id: 'kuliah-luar-negeri',
    label: 'Kuliah di Luar Negeri',
    items: [
      { name: 'Persiapan Beasiswa', href: '/beasiswa', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/beasiswa.webp', desc: 'Panduan lengkap mendapatkan beasiswa kuliah di luar negeri' },
      { name: 'Study in USA', href: '/study-usa', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/usa.webp', desc: 'Konsultasi kuliah di Amerika Serikat' },
      { name: 'Study in UK', href: '/study-uk', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/uk.webp', desc: 'Konsultasi kuliah di Inggris' },
      { name: 'Study in Australia', href: '/study-australia', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/australia.webp', desc: 'Konsultasi kuliah di Australia' }
    ]
  },
  {
    id: 'persiapan-tes',
    label: 'Persiapan Tes',
    items: [
      { name: 'IELTS', href: '/persiapan-ielts', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592.webp', desc: 'International English Language Testing System' },
      { name: 'TOEFL', href: '/persiapan-toefl', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-4.webp', desc: 'Test of English as a Foreign Language' },
      { name: 'SAT', href: '/persiapan-sat', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-3.webp', desc: 'Scholastic Assessment Test' },
      { name: 'GRE', href: '/persiapan-gre', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-1.webp', desc: 'Graduate Record Examination' },
      { name: 'GMAT', href: '/persiapan-gmat', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/gmat.webp', desc: 'Graduate Management Admission Test' },
      { name: 'PTE', href: '/persiapan-pte', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/pte.webp', desc: 'Pearson Test of English' }
    ]
  },
  {
    id: 'kelas-bahasa',
    label: 'Kelas Bahasa',
    items: [
      { name: 'JLPT - Bahasa Jepang', href: '/kelas-jlpt', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/jlpt.webp', desc: 'Japanese Language Proficiency Test' },
      { name: 'HSK - Bahasa Mandarin', href: '/kelas-hsk', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/hsk.webp', desc: 'Hanyu Shuiping Kaoshi (Chinese Proficiency)' },
      { name: 'TOPIK - Bahasa Korea', href: '/kelas-topik', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/topik.webp', desc: 'Test of Proficiency in Korean' },
      { name: 'DELF - Bahasa Prancis', href: '/kelas-delf', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/delf.webp', desc: 'Diplome d Etudes en Langue Francaise' }
    ]
  },
  {
    id: 'lainnya',
    label: 'Lainnya',
    items: [
      { name: 'General English', href: '/general-english', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/general-english.webp', desc: 'Kursus Bahasa Inggris untuk semua level' },
      { name: 'Business English', href: '/business-english', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/business-english.webp', desc: 'Bahasa Inggris untuk profesional' },
      { name: 'BIPA', href: '/bipa', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/bipa.webp', desc: 'Bahasa Indonesia bagi Penutur Asing' },
      { name: 'Corporate Training', href: '/corporate', image: 'https://www.ultimateducation.co.id/wp-content/uploads/2025/08/corporate.webp', desc: 'Program pelatihan khusus perusahaan' }
    ]
  }
];

export default function MegaMenu({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('terfavorit');

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1140px] bg-white border-t-[3px] border-[#046bd2] rounded-b-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="flex flex-col">
        {/* Tabs Header */}
        <div className="flex bg-[#F0F5FA] border-b border-gray-200">
          {megaMenuData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-5 text-sm font-semibold transition-colors duration-200 border-b-2 -mb-[1px] ${
                activeTab === tab.id
                  ? 'bg-white text-[#046bd2] border-[#046bd2]'
                  : 'text-slate-600 hover:text-[#046bd2] hover:bg-[#046bd2]/5 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {megaMenuData.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`}
            >
              {tab.items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex flex-col p-4 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="h-28 w-full mb-3 rounded-md overflow-hidden bg-gray-100 p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-[#046bd2] mb-1 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
