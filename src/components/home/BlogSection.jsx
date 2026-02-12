import React, { useState } from 'react';

const categories = [
  { id: 'beasiswa', label: 'Info Beasiswa' },
  { id: 'kerja', label: 'Kerja Luar Negeri' },
  { id: 'pengetahuan', label: 'Pengetahuan Umum' },
  { id: 'program', label: 'Info Program' }
];

const postsData = {
  beasiswa: [
    { title: "Tips Lolos Wawancara LPDP 2025", excerpt: "Pelajari pertanyaan jebakan yang sering muncul dan cara menjawabnya dengan metode STAR.", date: "2 Feb 2026", image: "https://placehold.co/400x250/061f35/ffffff?text=LPDP+Interview" },
    { title: "Rahasia Personal Statement Harvard", excerpt: "Analisis struktur essay yang berhasil menembus seleksi masuk Harvard University.", date: "28 Jan 2026", image: "https://placehold.co/400x250/b91c1c/ffffff?text=Harvard+Essay" },
    { title: "Beasiswa Full S1 di Jepang MEXT", excerpt: "Panduan lengkap pendaftaran beasiswa Monbukagakusho untuk lulusan SMA.", date: "15 Jan 2026", image: "https://placehold.co/400x250/f43f5e/ffffff?text=MEXT+Japan" }
  ],
  kerja: [
    { title: "Cara Kerja di Jerman (Ausbildung)", excerpt: "Program vokasi sambil kerja digaji di Jerman untuk lulusan SMA/SMK.", date: "1 Feb 2026", image: "https://placehold.co/400x250/fbbf24/000000?text=Ausbildung" },
    { title: "Syarat Visa Working Holiday Australia", excerpt: "Liburan sambil kerja dan menabung di Australia. Cek syarat terbarunya.", date: "20 Jan 2026", image: "https://placehold.co/400x250/0ea5e9/ffffff?text=WHV+Australia" },
    { title: "Karir Software Engineer di Singapore", excerpt: "Skill yang dibutuhkan dan range gaji IT di Singapura tahun 2026.", date: "10 Jan 2026", image: "https://placehold.co/400x250/ef4444/ffffff?text=Tech+SG" }
  ],
  pengetahuan: [
    { title: "Perbedaan TOEFL iBT vs ITP", excerpt: "Jangan salah ambil tes! Kenali bedanya sebelum mendaftar kuliah atau kerja.", date: "25 Jan 2026", image: "https://placehold.co/400x250/3b82f6/ffffff?text=TOEFL" },
    { title: "Mengenal Tes GMAT Focus Edition", excerpt: "Format baru tes GMAT yang mulai berlaku tahun ini. Apa yang berubah?", date: "18 Jan 2026", image: "https://placehold.co/400x250/8b5cf6/ffffff?text=GMAT+Focus" },
    { title: "Band Score IELTS untuk Ivy League", excerpt: "Target skor minimal untuk masuk kampus top dunia. Cukupkah 7.0?", date: "5 Jan 2026", image: "https://placehold.co/400x250/10b981/ffffff?text=IELTS+Score" }
  ],
  program: [
    { title: "Batch Baru Kelas IELTS Februari", excerpt: "Pendaftaran dibuka! Kelas intensif 1 bulan target band 7.0.", date: "30 Jan 2026", image: "https://placehold.co/400x250/145da0/ffffff?text=New+Class" },
    { title: "Diskon Early Bird SAT Prep", excerpt: "Dapatkan potongan harga 20% untuk pendaftaran sebelum 10 Februari.", date: "22 Jan 2026", image: "https://placehold.co/400x250/f59e0b/ffffff?text=Promo+SAT" },
    { title: "Webinar Gratis: Study in UK", excerpt: "Diskusi langsung dengan perwakilan universitas dari Inggris.", date: "12 Jan 2026", image: "https://placehold.co/400x250/374151/ffffff?text=Webinar" }
  ]
};

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState('beasiswa');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-4">
            Artikel & <span className="text-[#145da0]">Wawasan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Update informasi terbaru seputar pendidikan, karir, dan persiapan tes internasional.
          </p>

          {/* Scrollable Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-100 p-1.5 rounded-full overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === cat.id
                    ? 'bg-[#145da0] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
          {postsData[activeTab].map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-base font-bold text-gray-800 shadow-sm">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-[#145da0] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-[#145da0] font-semibold text-base hover:underline">
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <a href="/artikel" className="inline-block border-2 border-[#145da0] text-[#145da0] font-bold py-3 px-8 rounded-full hover:bg-[#145da0] hover:text-white transition-colors duration-300">
            Lihat Semua Artikel
          </a>
        </div>

      </div>
    </section>
  );
}
