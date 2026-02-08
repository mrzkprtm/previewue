import { c as createComponent, m as maybeRenderHead, e as renderComponent, r as renderTemplate, d as addAttribute, f as createAstro, h as renderSlot, i as renderHead, u as unescapeHTML } from './astro/server_DWPYSQod.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';

const megaMenuData = [
  {
    id: "terfavorit",
    label: "Program Terfavorit",
    items: [
      { name: "Ultimate IELTS", href: "/persiapan-ielts", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592.webp", desc: "Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja" },
      { name: "Ultimate SAT", href: "/persiapan-sat", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-3.webp", desc: "Bimbingan intensif tes SAT untuk persiapan kuliah ke luar negeri" },
      { name: "Ultimate GRE", href: "/persiapan-gre", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-1.webp", desc: "Persiapan lengkap GRE untuk program Master di luar negeri" },
      { name: "Ultimate TOEFL", href: "/persiapan-toefl", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-4.webp", desc: "Strategi dan latihan TOEFL iBT untuk skor tinggi" }
    ]
  },
  {
    id: "kuliah-luar-negeri",
    label: "Kuliah di Luar Negeri",
    items: [
      { name: "Persiapan Beasiswa", href: "/beasiswa", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/beasiswa.webp", desc: "Panduan lengkap mendapatkan beasiswa kuliah di luar negeri" },
      { name: "Study in USA", href: "/study-usa", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/usa.webp", desc: "Konsultasi kuliah di Amerika Serikat" },
      { name: "Study in UK", href: "/study-uk", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/uk.webp", desc: "Konsultasi kuliah di Inggris" },
      { name: "Study in Australia", href: "/study-australia", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/australia.webp", desc: "Konsultasi kuliah di Australia" }
    ]
  },
  {
    id: "persiapan-tes",
    label: "Persiapan Tes",
    items: [
      { name: "IELTS", href: "/persiapan-ielts", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592.webp", desc: "International English Language Testing System" },
      { name: "TOEFL", href: "/persiapan-toefl", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-4.webp", desc: "Test of English as a Foreign Language" },
      { name: "SAT", href: "/persiapan-sat", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-3.webp", desc: "Scholastic Assessment Test" },
      { name: "GRE", href: "/persiapan-gre", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/Group-592-1.webp", desc: "Graduate Record Examination" },
      { name: "GMAT", href: "/persiapan-gmat", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/gmat.webp", desc: "Graduate Management Admission Test" },
      { name: "PTE", href: "/persiapan-pte", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/pte.webp", desc: "Pearson Test of English" }
    ]
  },
  {
    id: "kelas-bahasa",
    label: "Kelas Bahasa",
    items: [
      { name: "JLPT - Bahasa Jepang", href: "/kelas-jlpt", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/jlpt.webp", desc: "Japanese Language Proficiency Test" },
      { name: "HSK - Bahasa Mandarin", href: "/kelas-hsk", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/hsk.webp", desc: "Hanyu Shuiping Kaoshi (Chinese Proficiency)" },
      { name: "TOPIK - Bahasa Korea", href: "/kelas-topik", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/topik.webp", desc: "Test of Proficiency in Korean" },
      { name: "DELF - Bahasa Prancis", href: "/kelas-delf", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/delf.webp", desc: "Diplome d Etudes en Langue Francaise" }
    ]
  },
  {
    id: "lainnya",
    label: "Lainnya",
    items: [
      { name: "General English", href: "/general-english", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/general-english.webp", desc: "Kursus Bahasa Inggris untuk semua level" },
      { name: "Business English", href: "/business-english", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/business-english.webp", desc: "Bahasa Inggris untuk profesional" },
      { name: "BIPA", href: "/bipa", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/bipa.webp", desc: "Bahasa Indonesia bagi Penutur Asing" },
      { name: "Corporate Training", href: "/corporate", image: "https://www.ultimateducation.co.id/wp-content/uploads/2025/08/corporate.webp", desc: "Program pelatihan khusus perusahaan" }
    ]
  }
];
function MegaMenu({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("terfavorit");
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1140px] bg-white border-t-[3px] border-[#046bd2] rounded-b-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200",
      onMouseLeave: onClose,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "flex bg-[#F0F5FA] border-b border-gray-200", children: megaMenuData.map((tab) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab(tab.id),
            onMouseEnter: () => setActiveTab(tab.id),
            className: `flex-1 py-4 px-5 text-sm font-semibold transition-colors duration-200 border-b-2 -mb-[1px] ${activeTab === tab.id ? "bg-white text-[#046bd2] border-[#046bd2]" : "text-slate-600 hover:text-[#046bd2] hover:bg-[#046bd2]/5 border-transparent"}`,
            children: tab.label
          },
          tab.id
        )) }),
        /* @__PURE__ */ jsx("div", { className: "p-6", children: megaMenuData.map((tab) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `${activeTab === tab.id ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`,
            children: tab.items.map((item, index) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: item.href,
                className: "group flex flex-col p-4 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-200 hover:-translate-y-1",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-28 w-full mb-3 rounded-md overflow-hidden bg-gray-100 p-2", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: item.image,
                      alt: item.name,
                      className: "w-full h-full object-contain mix-blend-multiply",
                      loading: "lazy"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-slate-800 group-hover:text-[#046bd2] mb-1 transition-colors", children: item.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed line-clamp-2", children: item.desc })
                ]
              },
              index
            ))
          },
          tab.id
        )) })
      ] })
    }
  );
}

function MegaMenuWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Program", href: "/program", hasDropdown: true },
    { label: "Beasiswa", href: "/beasiswa" },
    { label: "Kontak", href: "/kontak" },
    { label: "Mitra", href: "/mitra" },
    { label: "Partnership", href: "/partnership" },
    { label: "Artikel", href: "/artikel" }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "relative w-full z-[999] bg-white shadow-sm py-3",
      children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsx("div", { className: "relative w-48 h-14 bg-gray-200 rounded overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "https://placehold.co/200x56", alt: "Ultimate Education Logo", className: "w-full h-full object-cover" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-8", children: navItems.map((item) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative group",
              onMouseEnter: () => item.hasDropdown && setIsMenuOpen(true),
              onMouseLeave: () => item.hasDropdown && setIsMenuOpen(false),
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: item.href,
                    className: "text-base font-medium font-heading transition-colors py-3 block text-gray-800 hover:text-primary",
                    onClick: (e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setIsMenuOpen(!isMenuOpen);
                      }
                    },
                    children: [
                      item.label,
                      item.hasDropdown && /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs", children: "▼" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary" }),
                item.hasDropdown && isMenuOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-7xl z-[1000]", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ jsx(MegaMenu, { isOpen: true, onClose: () => setIsMenuOpen(false) }) }) })
              ]
            },
            item.label
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: "lg:hidden p-2 text-gray-600 hover:text-primary transition-colors",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: isMobileMenuOpen ? /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  ) : /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16"
                    }
                  )
                }
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "80px" },
            children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-6 flex flex-col gap-4", children: navItems.map((item) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: "text-lg font-medium text-gray-800 hover:text-primary block py-2",
                  onClick: () => !item.hasDropdown && setIsMobileMenuOpen(false),
                  children: item.label
                }
              ),
              item.hasDropdown && /* @__PURE__ */ jsx("div", { className: "pl-4 mt-2 border-l-2 border-gray-100", children: /* @__PURE__ */ jsx(MegaMenu, { mobile: true }) })
            ] }, item.label)) })
          }
        )
      ]
    }
  );
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative w-full z-[999]"> ${renderComponent($$result, "MegaMenuWrapper", MegaMenuWrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/frontendue/src/components/common/MegaMenuWrapper.jsx", "client:component-export": "default" })} </header>`;
}, "C:/laragon/www/frontendue/src/components/common/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    social = [
      { icon: "instagram", href: "https://instagram.com/ultimateeducation", label: "Instagram" },
      { icon: "linkedin", href: "https://linkedin.com/company/ultimateeducation", label: "LinkedIn" },
      { icon: "youtube", href: "https://youtube.com/@ultimateeducation", label: "YouTube" },
      { icon: "tiktok", href: "https://tiktok.com/@ultimateeducation", label: "TikTok" },
      { icon: "facebook", href: "https://facebook.com/ultimateeducation", label: "Facebook" }
    ],
    contact = [
      { label: "Jakarta", text: "Sampoerna Strategic Square, Jalan Jenderal Sudirman No. 45 \u2013 46 (Lantai 18)" },
      { label: "Bandung", text: "Jl. Ir. H. Juanda No.84, Lebakgede, Kecamatan Coblong" },
      { label: "Phone", text: "+6283812310368" },
      { label: "Landline", text: "(021) 50913616" }
    ],
    programs = [
      "IELTS",
      "SAT",
      "GMAT",
      "GRE",
      "TOEFL",
      "IGCSE",
      "GED",
      "ACT",
      "PTE",
      "TOEIC"
    ],
    company = [
      "About Us",
      "Testimonials",
      "Blog",
      "Sales"
    ]
  } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-hero-gradient text-white py-16"> <div class="container mx-auto px-4 w-full"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-sm">  <div class="space-y-6 lg:col-span-2"> <a href="/" class="block"> <img src="https://placehold.co/200x60/white/0369a1?text=Ultimate+Education" alt="Ultimate Education" class="bg-white p-2 rounded max-w-[200px]"> </a> <p class="text-white/80 leading-relaxed max-w-xs">
Konsultan pendidikan luar negeri terpercaya dengan layanan persiapan tes bahasa dan akademik terlengkap di Indonesia.
</p> <div> <h3 class="text-lg font-semibold font-heading mb-4">Social Media</h3> <div class="flex gap-4"> ${social.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"${addAttribute(item.label, "aria-label")}> ${item.icon === "instagram" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`} ${item.icon === "linkedin" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.327c0-3.771 4.968-4.085 4.968 0v8.327h5v-9.352c0-5.717-6.142-5.496-7.551-2.709l-.449-.788v-3.15z"></path></svg>`} ${item.icon === "default" && renderTemplate`<span class="text-xs font-bold">${item.icon[0]}</span>`}  ${!["instagram", "linkedin"].includes(item.icon) && renderTemplate`<span class="text-xs font-bold flex items-center justify-center w-full h-full">${item.label[0]}</span>`} </a>`)} </div> </div> </div>  <div> <h3 class="text-lg font-semibold font-heading mb-6">Persiapan Tes</h3> <ul class="space-y-2 font-body text-white/90"> ${["IELTS", "TOEFL iBT", "SAT Prep", "GMAT", "GRE", "PTE Academic", "TOEIC", "GED", "ACT"].map((item) => renderTemplate`<li><a href="#" class="hover:text-yellow-400 transition-colors block">${item}</a></li>`)} </ul> </div>  <div> <h3 class="text-lg font-semibold font-heading mb-6">Kursus Bahasa</h3> <ul class="space-y-2 font-body text-white/90"> ${["General English", "Business English", "Mandarin (HSK)", "Japanese (JLPT)", "Korean (TOPIK)", "French (DELF)"].map((item) => renderTemplate`<li><a href="#" class="hover:text-yellow-400 transition-colors block">${item}</a></li>`)} </ul> </div>  <div> <h3 class="text-lg font-semibold font-heading mb-6">Program Lainnya</h3> <ul class="space-y-2 font-body text-white/90"> ${["Study Abroad", "Scholarship Mentoring", "Essay Review", "Simulasi Interview", "Corporate Training", "Proofreading"].map((item) => renderTemplate`<li><a href="#" class="hover:text-yellow-400 transition-colors block">${item}</a></li>`)} </ul> </div>  <div> <h3 class="text-lg font-semibold font-heading mb-6">Hubungi Kami</h3> <ul class="space-y-4 text-sm font-body"> ${contact.map((item) => renderTemplate`<li class="flex gap-3 items-start"> <span class="mt-1 w-5 h-5 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]">📍</span> <div> <span class="font-bold block text-white">${item.label}</span> <span class="opacity-80 block">${item.text}</span> </div> </li>`)} </ul> </div> <div class="mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-60 font-body">
&copy; ${currentYear} Ultimate Education. All rights reserved.
</div> </div> </div></footer>`;
}, "C:/laragon/www/frontendue/src/components/common/Footer.astro", void 0);

const $$ChatWidget = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 flex items-center group">  <div class="mr-4 px-3 py-2 bg-white text-gray-800 text-xs font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
Need Help? <span class="font-bold">Chat with us</span> </div>  <div class="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg> </div> </a>`;
}, "C:/laragon/www/frontendue/src/components/common/ChatWidget.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Astro WordPress Headless Site" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"><!-- SEO Metadata --><meta name="title"', '><meta name="description"', '><meta name="keywords" content="Kursus IELTS Jakarta, Kursus GMAT Indonesia, Kursus GRE Bandung, Kursus SAT Jakarta, Bimbingan Belajar Luar Negeri, Ultimate Education"><meta name="robots" content="index, follow"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="language" content="Indonesian"><meta name="author" content="Ultimate Education"><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="https://placehold.co/1200x630?text=Ultimate+Education"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image" content="https://placehold.co/1200x630?text=Ultimate+Education"><!-- JSON-LD Structured Data --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script><title>", "</title>", '</head> <body class="bg-white text-gray-900 font-sans antialiased min-h-screen flex flex-col"> ', ' <main class="flex-grow w-full relative"> ', " </main> ", " ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Ultimate Education",
    url: Astro2.url.origin,
    logo: "https://placehold.co/200x60",
    description: "Konsultan pendidikan luar negeri dan pusat persiapan tes IELTS, SAT, GRE, GMAT terpercaya di Indonesia.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Sampoerna Strategic Square, Jalan Jenderal Sudirman No. 45 \u2013 46",
        addressLocality: "Jakarta",
        addressCountry: "ID"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Jl. Ir. H. Juanda No.84, Lebakgede",
        addressLocality: "Bandung",
        addressCountry: "ID"
      }
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6283812310368",
      contactType: "customer service"
    },
    sameAs: ["https://instagram.com/ultimateeducation", "https://linkedin.com/company/ultimateeducation"]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: Astro2.url.origin,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${Astro2.url.origin}/artikel?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  })), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "ChatWidget", $$ChatWidget, {}));
}, "C:/laragon/www/frontendue/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
