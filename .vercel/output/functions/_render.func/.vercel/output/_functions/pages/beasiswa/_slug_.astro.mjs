/* empty css                                    */
import { c as createComponent, e as renderComponent, r as renderTemplate, f as createAstro, F as Fragment, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_DWPYSQod.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B7meVBy6.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/beasiswa");
  }
  let scholarship = null;
  try {
    const { getScholarshipBySlug } = await import('../../chunks/endpoints_BcQY9cMI.mjs');
    scholarship = await getScholarshipBySlug(slug);
  } catch (e) {
    console.error("Failed to fetch scholarship:", e);
  }
  if (!scholarship && slug === "beasiswa-lpdp-2024") {
    scholarship = {
      id: 1,
      slug: "beasiswa-lpdp-2024",
      title: "Beasiswa LPDP Tahap 1 2024",
      content: "<p>Konten detail...</p>",
      excerpt: "Info LPDP...",
      date: "2024-01-15",
      featuredImage: { src: "https://placehold.co/800x500?text=LPDP+Detail", alt: "LPDP" },
      country: "Indonesia & Luar Negeri",
      degree: "S2, S3",
      deadline: "2024-02-12",
      university: "Top 100 QS World Ranking",
      benefits: "<p>Full Funding, Living Allowance, Insurance</p>",
      type: "Full Scholarship"
    };
  }
  if (!scholarship) {
    return Astro2.redirect("/404");
  }
  const title = `${scholarship.title} | Info Beasiswa`;
  const description = scholarship.description?.replace(/<[^>]*>/g, "").slice(0, 160) || scholarship.excerpt.replace(/<[^>]*>/g, "").slice(0, 160);
  const canonicalUrl = `${Astro2.url.origin}/beasiswa/${scholarship.slug}`;
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen pb-20"> <!-- Hero Header --> <header class="bg-white border-b border-gray-200 relative"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"> <!-- Breadcrumb --> <nav class="mb-6"> <ol class="flex items-center gap-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap"> <li><a href="/" class="hover:text-primary transition-colors">Home</a></li> <li><span class="mx-1 text-slate-300">/</span></li> <li><a href="/beasiswa" class="hover:text-primary transition-colors">Beasiswa</a></li> <li><span class="mx-1 text-slate-300">/</span></li> <li class="text-slate-800 font-medium truncate max-w-[200px]">${scholarship.title}</li> </ol> </nav> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> <!-- Title & Main Info --> <div class="lg:col-span-2"> <div class="flex flex-wrap gap-2 mb-4"> ${scholarship.type && renderTemplate`<span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-100">${scholarship.type}</span>`} ${scholarship.degree && renderTemplate`<span class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-semibold border border-indigo-100">${scholarship.degree}</span>`} </div> <h1 class="text-3xl md:text-5xl font-bold font-heading text-slate-900 leading-tight mb-6"> ${scholarship.title} </h1> <div class="flex flex-wrap gap-6 text-sm text-slate-600"> ${scholarship.university && renderTemplate`<div class="flex items-center gap-2"> <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"> <svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> <span class="font-medium">${scholarship.university}</span> </div>`} ${scholarship.country && renderTemplate`<div class="flex items-center gap-2"> <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"> <svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <span class="font-medium">${scholarship.country}</span> </div>`} </div> </div> <!-- Deadline Box --> <div class="lg:col-span-1"> <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"> <div class="absolute top-0 right-0 p-4 opacity-10"> <svg class="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="relative z-10"> <p class="text-slate-300 text-sm font-medium uppercase tracking-wider mb-2">Batas Pendaftaran</p> ${scholarship.deadline ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="text-3xl font-bold mb-1">${formatDate(scholarship.deadline)}</div> <div class="text-amber-400 text-sm font-medium flex items-center gap-1"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg>
Jangan terlewat!
</div> ` })}` : renderTemplate`<div class="text-3xl font-bold text-emerald-400">Open Recruitment</div>`} ${scholarship.startDate && renderTemplate`<div class="mt-4 pt-4 border-t border-white/10"> <p class="text-slate-300 text-xs mb-1">Tanggal Mulai</p> <p class="font-semibold">${formatDate(scholarship.startDate)}</p> </div>`} </div> </div> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-10"> <!-- Left Content: Description & Details --> <div class="lg:col-span-2 space-y-10"> ${scholarship.featuredImage && renderTemplate`<div class="rounded-2xl overflow-hidden shadow-sm border border-slate-200"> <img${addAttribute(scholarship.featuredImage.src, "src")}${addAttribute(scholarship.featuredImage.alt, "alt")} class="w-full h-auto object-cover"> </div>`} <!-- About / Description --> <section class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"> <h2 class="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3"> <span class="w-10 h-1 rounded-full bg-primary block"></span>
Tentang Beasiswa
</h2> <div class="prose prose-slate max-w-none prose-a:text-primary hover:prose-a:underline"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.description || scholarship.content)}` })} </div> </section> <!-- Benefits --> ${scholarship.benefits && renderTemplate`<section class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"> <h2 class="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3"> <span class="w-10 h-1 rounded-full bg-emerald-500 block"></span>
Cakupan Beasiswa
</h2> <div class="prose prose-slate max-w-none prose-ul:list-disc prose-ul:pl-4 prose-li:marker:text-emerald-500"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.benefits)}` })} </div> </section>`} <!-- Documents --> ${scholarship.documents && renderTemplate`<section class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"> <h2 class="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3"> <span class="w-10 h-1 rounded-full bg-amber-500 block"></span>
Dokumen Persyaratan
</h2> <div class="bg-amber-50 rounded-xl p-6 border border-amber-100 prose prose-slate max-w-none"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.documents)}` })} </div> </section>`} <!-- How to Apply --> ${scholarship.howToApply && renderTemplate`<section class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"> <h2 class="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3"> <span class="w-10 h-1 rounded-full bg-blue-500 block"></span>
Cara Mendaftar
</h2> <div class="prose prose-slate max-w-none"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.howToApply)}` })} </div> </section>`} ${scholarship.others && renderTemplate`<section class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"> <h2 class="text-xl font-bold font-heading text-slate-900 mb-4">Informasi Tambahan</h2> <div class="prose prose-slate max-w-none"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.others)}` })} </div> </section>`} </div> <!-- Right Sidebar: Quick Requirements & Info --> <aside class="space-y-6"> <!-- Requirements Card --> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-28"> <div class="bg-slate-50 px-6 py-4 border-b border-slate-100"> <h3 class="font-bold text-slate-900 text-lg">Persyaratan Minimum</h3> </div> <div class="p-6 space-y-6">  <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <p class="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Minimum IPK</p> <p class="font-semibold text-slate-900">${scholarship.gpaRequirement || "Tidak disebutkan"}</p> </div> </div>  <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div> <p class="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Batasan Umur</p> <p class="font-semibold text-slate-900">${scholarship.ageLimit || "Lihat detail"}</p> </div> </div>  <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path> </svg> </div> <div> <p class="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Bahasa Inggris</p> <div class="font-semibold text-slate-900 prose prose-sm prose-p:my-0"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.englishTest || "Lihat detail")}` })} </div> </div> </div>  ${scholarship.fieldOfStudy && renderTemplate`<div class="flex items-start gap-4 pt-4 border-t border-slate-100"> <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <div> <p class="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Bidang Studi</p> <div class="font-semibold text-slate-900 text-sm prose prose-sm prose-p:my-0"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(scholarship.fieldOfStudy)}` })} </div> </div> </div>`} </div> <div class="p-6 bg-slate-50 border-t border-slate-100 text-center"> <p class="text-xs text-slate-500 mb-4">Butuh bantuan persiapan dokumen & essay?</p> <a href="/kontak" class="block w-full bg-slate-900 hover:bg-black text-white py-3 rounded-xl font-bold transition-colors"> Konsultasi Gratis </a> </div> </div> </aside> </div> </main> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="canonical"', '> <meta property="og:type" content="article"> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:url"', "> ", ' <script type="application/ld+json">', "<\/script> "])), addAttribute(canonicalUrl, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), scholarship.featuredImage && renderTemplate`<meta property="og:image"${addAttribute(scholarship.featuredImage.src, "content")}>`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: scholarship.title,
    description,
    url: canonicalUrl,
    credentialCategory: "Scholarship",
    educationalLevel: scholarship.degree,
    validFrom: scholarship.startDate,
    validThrough: scholarship.deadline,
    recognizedBy: {
      "@type": "Organization",
      name: scholarship.university || "Penyedia Beasiswa"
    }
  }))) })}` })}`;
}, "C:/laragon/www/frontendue/src/pages/beasiswa/[slug].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/beasiswa/[slug].astro";
const $$url = "/beasiswa/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
