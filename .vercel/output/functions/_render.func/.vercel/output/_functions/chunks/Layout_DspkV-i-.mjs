import { c as createComponent, m as maybeRenderHead, e as renderComponent, r as renderTemplate, d as addAttribute, f as createAstro, g as renderSlot, i as renderHead, u as unescapeHTML } from './astro/server_CQNAQ0jI.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';

const megaMenuData = [
  {
    id: "terfavorit",
    label: "Program Terfavorit",
    items: [
      { name: "Ultimate IELTS", href: "/program/ielts", image: "/program/ielts.png", desc: "Bimbingan intensif tes IELTS untuk persiapan kuliah dan kerja" },
      { name: "Ultimate SAT", href: "/program/sat", image: "/program/sat.png", desc: "Bimbingan intensif tes SAT untuk persiapan kuliah ke luar negeri" },
      { name: "Ultimate GRE", href: "/program/gre", image: "/program/gre.png", desc: "Persiapan lengkap GRE untuk program Master di luar negeri" },
      { name: "Ultimate TOEFL", href: "/program/toefl", image: "/program/toefl.png", desc: "Strategi dan latihan TOEFL iBT untuk skor tinggi" }
    ]
  },
  {
    id: "kuliah-luar-negeri",
    label: "Kuliah di Luar Negeri",
    items: [
      { name: "Persiapan Beasiswa", href: "/program/beasiswa", image: "/program/ausbildung.png", desc: "Panduan lengkap mendapatkan beasiswa kuliah di luar negeri" },
      { name: "Study in USA", href: "/study-usa", image: "/program/sat.png", desc: "Konsultasi kuliah di Amerika Serikat" },
      { name: "Study in UK", href: "/study-uk", image: "/program/ielts.png", desc: "Konsultasi kuliah di Inggris" },
      { name: "Study in Australia", href: "/study-australia", image: "/program/pte.png", desc: "Konsultasi kuliah di Australia" }
    ]
  },
  {
    id: "persiapan-tes",
    label: "Persiapan Tes",
    items: [
      { name: "IELTS", href: "/program/ielts", image: "/program/ielts.png", desc: "International English Language Testing System" },
      { name: "TOEFL", href: "/program/toefl", image: "/program/toefl.png", desc: "Test of English as a Foreign Language" },
      { name: "SAT", href: "/program/sat", image: "/program/sat.png", desc: "Scholastic Assessment Test" },
      { name: "GRE", href: "/program/gre", image: "/program/gre.png", desc: "Graduate Record Examination" },
      { name: "GMAT", href: "/program/gmat", image: "/program/gmat.png", desc: "Graduate Management Admission Test" },
      { name: "PTE", href: "/program/pte", image: "/program/pte.png", desc: "Pearson Test of English" }
    ]
  },
  {
    id: "kelas-bahasa",
    label: "Kelas Bahasa",
    items: [
      { name: "JLPT - Bahasa Jepang", href: "/program/jlpt", image: "/program/jlpt.png", desc: "Japanese Language Proficiency Test" },
      { name: "HSK - Bahasa Mandarin", href: "/program/hsk", image: "/program/hsk.png", desc: "Hanyu Shuiping Kaoshi (Chinese Proficiency)" },
      { name: "TOPIK - Bahasa Korea", href: "/program/topik", image: "/program/topik.png", desc: "Test of Proficiency in Korean" },
      { name: "DELF - Bahasa Prancis", href: "/program/delf", image: "/program/delf.png", desc: "Diplome d Etudes en Langue Francaise" }
    ]
  },
  {
    id: "lainnya",
    label: "Lainnya",
    items: [
      { name: "General English", href: "/program/general-english", image: "/program/ge.png", desc: "Kursus Bahasa Inggris untuk semua level" },
      { name: "Business English", href: "/program/business-english", image: "/program/be.png", desc: "Bahasa Inggris untuk profesional" },
      { name: "BIPA", href: "/program/bipa", image: "/program/bipa.png", desc: "Bahasa Indonesia bagi Penutur Asing" },
      { name: "Corporate Training", href: "/corporate", image: "/program/be.png", desc: "Program pelatihan khusus perusahaan" }
    ]
  }
];
function MegaMenu({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("terfavorit");
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute top-full left-1/2 -translate-x-1/2 w-full bg-white rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden",
      onMouseLeave: onClose,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "flex lg:flex-col bg-slate-50 lg:w-56 border-r border-slate-100", children: megaMenuData.map((tab) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab(tab.id),
            onMouseEnter: () => setActiveTab(tab.id),
            className: `flex-1 lg:flex-initial py-3 px-5 text-xs font-bold font-heading uppercase tracking-wider text-left transition-all duration-200 border-b lg:border-b-0 lg:border-l-4 ${activeTab === tab.id ? "bg-white text-ultimate-blue border-ultimate-blue" : "text-slate-500 hover:text-ultimate-blue hover:bg-white/50 border-transparent"}`,
            children: tab.label
          },
          tab.id
        )) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 p-6 max-h-[60vh] overflow-y-auto", children: megaMenuData.map((tab) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${activeTab === tab.id ? "block" : "hidden"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4", children: tab.items.map((item, index) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: item.href,
                  className: "group relative flex items-center gap-3 p-2 rounded-xl overflow-hidden border border-slate-100 hover:border-ultimate-blue transition-all duration-300 hover:shadow-md bg-white",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-slate-50", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: item.image,
                        alt: item.name,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                        loading: "lazy"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-800 group-hover:text-ultimate-blue mb-0.5 transition-colors font-heading text-xs uppercase tracking-wide truncate", children: item.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 leading-relaxed line-clamp-2 font-sans", children: item.desc })
                    ] })
                  ]
                },
                index
              )) }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-3 border-t border-slate-100", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/program",
                  className: "group inline-flex items-center gap-2 px-5 py-2 text-ultimate-blue hover:text-white bg-white hover:bg-ultimate-blue border-2 border-ultimate-blue font-bold font-heading text-xs uppercase tracking-wider rounded-lg transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "Lihat Semua Program" }),
                    /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) })
                  ]
                }
              ) })
            ]
          },
          tab.id
        )) })
      ] })
    }
  );
}

function Logo({ className = "h-10 w-auto" }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 494 425.14",
      className,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx("style", { children: `.cls-1{fill:#4195d5;}.cls-2{fill:url(#linear-gradient);}` }),
          /* @__PURE__ */ jsxs("linearGradient", { id: "linear-gradient", y1: "212.57", x2: "494", y2: "212.57", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#fff" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#fff" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("title", { children: "Asset 4" }),
        /* @__PURE__ */ jsx("g", { id: "Layer_2", "data-name": "Layer 2", children: /* @__PURE__ */ jsxs("g", { id: "Layer_1-2", "data-name": "Layer 1", children: [
          /* @__PURE__ */ jsx("rect", { className: "cls-1", width: "222", height: "425" }),
          /* @__PURE__ */ jsx("path", { className: "cls-2", d: "M157,425C50,429,0,347.06,0,289.47V0H102V285.38c0,31.51,25.32,57.38,56.83,57.62h.67q1.18,0,2.35,0c33.62-.9,60.15-29,60.15-62.61V0H494V74H332V175H494v74H332V351H494v74H222" })
        ] }) })
      ]
    }
  );
}

function MegaMenuWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className: `fixed w-full z-[999] transition-all duration-500 ease-in-out ${isScrolled ? "bg-hero-gradient shadow-lg py-2" : "bg-transparent py-6"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2 group transition-transform hover:scale-105 duration-300", children: [
            /* @__PURE__ */ jsx(Logo, { className: "h-10 w-auto" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-l border-white/20 pl-3 ml-1", children: [
              /* @__PURE__ */ jsx("span", { className: `font-heading font-black leading-none text-lg tracking-tighter text-white`, children: "ULTIMATE" }),
              /* @__PURE__ */ jsx("span", { className: `font-heading font-medium leading-none text-[10px] tracking-[0.2em] uppercase ${isScrolled ? "text-white/60" : "text-white/60"}`, children: "Education" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-1", children: navItems.map((item) => {
            const isActive = activePath === item.href || item.href !== "/" && activePath.startsWith(item.href);
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative px-4 py-2",
                onMouseEnter: () => item.hasDropdown && setIsMenuOpen(true),
                onMouseLeave: () => item.hasDropdown && setIsMenuOpen(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: item.href,
                      className: `text-sm font-bold font-heading uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-1 ${isScrolled ? isActive ? "text-ultimate-yellow" : item.label === "Artikel" ? "text-white hover:text-white" : "text-white/80 hover:text-ultimate-yellow" : isActive ? "text-ultimate-yellow" : item.label === "Artikel" ? "text-white hover:text-white" : "text-white hover:text-ultimate-yellow"}`,
                      onClick: (e) => {
                        if (item.hasDropdown) {
                          e.preventDefault();
                          setIsMenuOpen(!isMenuOpen);
                        }
                      },
                      children: [
                        item.label,
                        item.hasDropdown && /* @__PURE__ */ jsx("svg", { className: `w-3 h-3 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M19 9l-7 7-7-7" }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${isActive ? "w-1/2 opacity-100" : "w-0 group-hover:w-1/2 opacity-0 group-hover:opacity-100"} ${isScrolled ? "bg-ultimate-yellow" : "bg-ultimate-yellow"}` }),
                  item.hasDropdown && isMenuOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[90vw] max-w-7xl z-[1000] animate-in fade-in slide-in-from-top-4 duration-300", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden", children: /* @__PURE__ */ jsx(MegaMenu, { isOpen: true, onClose: () => setIsMenuOpen(false) }) }) })
                ]
              },
              item.label
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: `lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"}`,
              children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMobileMenuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
            }
          )
        ] }) }),
        isMobileMenuOpen && /* @__PURE__ */ jsx(
          "div",
          {
            className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[998] lg:hidden",
            onClick: () => setIsMobileMenuOpen(false)
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `lg:hidden fixed top-0 right-0 h-screen w-[280px] z-[999] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col h-full bg-ultimate-navy text-white", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-heading font-extrabold text-xl", children: [
                  "ULTIMATE",
                  /* @__PURE__ */ jsx("span", { className: "text-ultimate-yellow", children: "." })
                ] }),
                /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(false), className: "p-2 bg-white/10 rounded-full hover:bg-white/20", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 overflow-y-auto", children: navItems.map((item) => {
                const isActive = activePath === item.href || item.href !== "/" && activePath.startsWith(item.href);
                return /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: item.href,
                      className: `text-lg font-bold font-heading py-3 flex items-center justify-between group ${isActive ? "text-ultimate-yellow" : "text-slate-300"}`,
                      onClick: () => !item.hasDropdown && setIsMobileMenuOpen(false),
                      children: [
                        item.label,
                        item.hasDropdown && /* @__PURE__ */ jsx("span", { className: "text-xs", children: "▾" })
                      ]
                    }
                  ),
                  item.hasDropdown && /* @__PURE__ */ jsxs("div", { className: "pl-4 border-l-2 border-white/10 mt-1 flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsx("a", { href: "/persiapan-ielts", className: "text-sm py-2 text-slate-400", children: "Ultimate IELTS" }),
                    /* @__PURE__ */ jsx("a", { href: "/beasiswa", className: "text-sm py-2 text-slate-400", children: "Beasiswa" })
                  ] })
                ] }, item.label);
              }) })
            ] })
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
      {
        icon: "instagram",
        href: "https://instagram.com/ultimateeducation",
        label: "Instagram"
      },
      {
        icon: "linkedin",
        href: "https://linkedin.com/company/ultimateeducation",
        label: "LinkedIn"
      },
      {
        icon: "youtube",
        href: "https://youtube.com/@ultimateeducation",
        label: "YouTube"
      },
      {
        icon: "tiktok",
        href: "https://tiktok.com/@ultimateeducation",
        label: "TikTok"
      },
      {
        icon: "facebook",
        href: "https://facebook.com/ultimateeducation",
        label: "Facebook"
      }
    ],
    contact = [
      {
        label: "Jakarta",
        text: "Sampoerna Strategic Square, Jalan Jenderal Sudirman No. 45 \u2013 46 (Lantai 18)"
      },
      {
        label: "Bandung",
        text: "Jl. Ir. H. Juanda No.84, Lebakgede, Kecamatan Coblong"
      },
      { label: "Phone", text: "+6283812310368" },
      { label: "Landline", text: "(021) 50913616" }
    ]
  } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const currentPath = Astro2.url.pathname;
  const navLinks = {
    programs: [
      { name: "IELTS", href: "/persiapan-ielts" },
      { name: "TOEFL iBT", href: "/persiapan-toefl" },
      { name: "SAT Prep", href: "/persiapan-sat" },
      { name: "GMAT", href: "/persiapan-gmat" },
      { name: "GRE", href: "/persiapan-gre" },
      { name: "PTE Academic", href: "/persiapan-pte" }
    ],
    bahasa: [
      { name: "General English", href: "/general-english" },
      { name: "Business English", href: "/business-english" },
      { name: "Mandarin (HSK)", href: "/kelas-hsk" },
      { name: "Japanese (JLPT)", href: "/kelas-jlpt" },
      { name: "Korean (TOPIK)", href: "/kelas-topik" }
    ],
    lainnya: [
      { name: "About Us", href: "/about" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Blog", href: "/artikel" },
      { name: "Mitra", href: "/mitra" },
      { name: "Partnership", href: "/partnership" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-hero-gradient text-white pt-20 pb-12"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-sm">  <div class="lg:col-span-4 space-y-8"> <a href="/" class="flex items-center gap-3 transition-transform hover:scale-105 duration-300"> ${renderComponent($$result, "Logo", Logo, { "className": "h-12 w-auto" })} <div class="flex flex-col border-l border-white/20 pl-4 ml-1"> <div class="font-heading font-black text-2xl tracking-tighter leading-none">
ULTIMATE
</div> <div class="font-heading font-medium text-[11px] tracking-[0.25em] uppercase leading-none mt-1 opacity-70">
Education
</div> </div> </a> <p class="text-white/70 leading-relaxed font-sans max-w-sm text-base">
Konsultan pendidikan luar negeri terpercaya dengan layanan persiapan
          tes bahasa dan akademik terlengkap di Indonesia. Wujudkan impian
          kuliah di kampus top dunia bersama kami.
</p> <div class="space-y-4"> <h3 class="text-lg font-bold font-heading uppercase tracking-wider text-ultimate-yellow">
Follow Us
</h3> <div class="flex flex-wrap gap-4"> ${social.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer" class="group relative w-12 h-12 bg-white/5 hover:bg-ultimate-yellow rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(255,187,0,0.5)]"${addAttribute(item.label, "aria-label")}> ${item.icon === "instagram" && renderTemplate`<svg class="w-6 h-6 text-white group-hover:text-ultimate-navy transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg>`} ${item.icon === "linkedin" && renderTemplate`<svg class="w-6 h-6 text-white group-hover:text-ultimate-navy transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.327c0-3.771 4.968-4.085 4.968 0v8.327h5v-9.352c0-5.717-6.142-5.496-7.551-2.709l-.449-.788v-3.15z"></path> </svg>`} ${item.icon === "youtube" && renderTemplate`<svg class="w-6 h-6 text-white group-hover:text-ultimate-navy transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg>`} ${item.icon === "tiktok" && renderTemplate`<svg class="w-6 h-6 text-white group-hover:text-ultimate-navy transition-colors" fill="currentColor" viewBox="0 0 32 32"> <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path> </svg>`} ${item.icon === "facebook" && renderTemplate`<svg class="w-6 h-6 text-white group-hover:text-ultimate-navy transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.77h-2.946v-3.429h2.946v-2.528c0-2.921 1.784-4.51 4.387-4.51 1.246 0 2.318.092 2.63.133v3.049l-1.805.001c-1.417 0-1.691.674-1.691 1.662v2.183h3.375l-.439 3.429h-2.936v8.77h6.148c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"></path> </svg>`} </a>`)} </div> </div> </div>  <div class="lg:col-span-2"> <h3 class="text-lg font-bold font-heading mb-8 uppercase tracking-wider text-ultimate-yellow">
Persiapan Tes
</h3> <ul class="space-y-4"> ${navLinks.programs.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`group text-base transition-all duration-300 hover:text-ultimate-yellow hover:pl-2 flex items-center gap-2 ${currentPath === item.href ? "text-ultimate-yellow pl-2 font-bold" : "text-white/80"}`, "class")}> <span class="w-1.5 h-1.5 rounded-full bg-ultimate-yellow/40 group-hover:bg-ultimate-yellow group-hover:scale-125 transition-all duration-300"></span> ${item.name} </a> </li>`)} </ul> </div>  <div class="lg:col-span-2"> <h3 class="text-lg font-bold font-heading mb-8 uppercase tracking-wider text-ultimate-yellow">
Kursus Bahasa
</h3> <ul class="space-y-4"> ${navLinks.bahasa.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`group text-base transition-all duration-300 hover:text-ultimate-yellow hover:pl-2 flex items-center gap-2 ${currentPath === item.href ? "text-ultimate-yellow pl-2 font-bold" : "text-white/80"}`, "class")}> <span class="w-1.5 h-1.5 rounded-full bg-ultimate-yellow/40 group-hover:bg-ultimate-yellow group-hover:scale-125 transition-all duration-300"></span> ${item.name} </a> </li>`)} </ul> </div>  <div class="lg:col-span-2"> <h3 class="text-lg font-bold font-heading mb-8 uppercase tracking-wider text-ultimate-yellow">
Perusahaan
</h3> <ul class="space-y-4"> ${navLinks.lainnya.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`group text-base transition-all duration-300 hover:text-ultimate-yellow hover:pl-2 flex items-center gap-2 ${currentPath === item.href ? "text-ultimate-yellow pl-2 font-bold" : "text-white/80"}`, "class")}> <span class="w-1.5 h-1.5 rounded-full bg-ultimate-yellow/40 group-hover:bg-ultimate-yellow group-hover:scale-125 transition-all duration-300"></span> ${item.name} </a> </li>`)} </ul> </div>  <div class="lg:col-span-2"> <h3 class="text-lg font-bold font-heading mb-8 uppercase tracking-wider text-ultimate-yellow">
Kontak
</h3> <ul class="space-y-6"> ${contact.map((item) => renderTemplate`<li class="flex gap-4 items-start group"> <div class="mt-1 w-8 h-8 bg-ultimate-yellow/10 rounded-lg flex-shrink-0 flex items-center justify-center text-ultimate-yellow group-hover:bg-ultimate-yellow group-hover:text-ultimate-navy transition-all duration-300"> ${item.label === "Phone" || item.label === "Landline" ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> </svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path> <circle cx="12" cy="10" r="3"></circle> </svg>`} </div> <div> <span class="font-bold block text-white text-sm uppercase tracking-tighter mb-1"> ${item.label} </span> <span class="text-white/60 text-sm leading-relaxed block"> ${item.text} </span> </div> </li>`)} </ul> </div> </div>  <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"> <div class="text-white/40 text-sm font-sans italic">
Building the future leaders of Indonesia.
</div> <div class="text-white/60 text-sm font-sans flex items-center gap-1">
&copy; ${currentYear} <span class="text-ultimate-yellow font-bold">Ultimate Education</span>.
        All rights reserved.
</div> </div> </div> </footer>`;
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
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"><!-- SEO Metadata --><meta name="title"', '><meta name="description"', '><meta name="keywords" content="Kursus IELTS Jakarta, Kursus GMAT Indonesia, Kursus GRE Bandung, Kursus SAT Jakarta, Bimbingan Belajar Luar Negeri, Ultimate Education"><meta name="robots" content="index, follow"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="language" content="Indonesian"><meta name="author" content="Ultimate Education"><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="https://placehold.co/1200x630?text=Ultimate+Education"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image" content="https://placehold.co/1200x630?text=Ultimate+Education"><!-- JSON-LD Structured Data --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script><title>", "</title>", '</head> <body class="bg-white text-gray-900 font-sans antialiased min-h-screen flex flex-col"> ', ' <main class="flex-grow w-full relative"> ', " </main> ", " ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify({
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
