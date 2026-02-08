/* empty css                                       */
import { c as createComponent, e as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead } from '../../../chunks/astro/server_CQNAQ0jI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_DspkV-i-.mjs';
import { $ as $$ScholarshipCard } from '../../../chunks/ScholarshipCard_0XWJXcNL.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_ByS00C8I.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const currentPage = parseInt(page || "1");
  if (currentPage < 2) {
    return Astro2.redirect("/beasiswa");
  }
  let scholarships = [];
  let totalPages = 1;
  let error = null;
  try {
    const { getScholarships } = await import('../../../chunks/endpoints_BcQY9cMI.mjs');
    const response = await getScholarships(currentPage, 9);
    scholarships = response.scholarships;
    totalPages = response.totalPages;
  } catch (e) {
    console.error("Failed to fetch scholarships:", e);
    error = "Gagal memuat data beasiswa.";
    scholarships = [];
  }
  const title = `Info Beasiswa - Halaman ${currentPage} | Ultimate Education`;
  const description = `Halaman ${currentPage} - Informasi beasiswa luar negeri terbaru.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-slate-50 min-h-screen"> <!-- Hero Section Configured for Inner Pages --> <section class="bg-primary text-white py-12 relative overflow-hidden"> <div class="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-5"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"> <h1 class="text-3xl font-bold font-heading mb-2">Info Beasiswa</h1> <p class="text-blue-100">Halaman ${currentPage}</p> </div> </section> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> ${error && renderTemplate`<div class="mb-6 px-4 py-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm">${error}</div>`} <!-- Scholarship Grid --> ${scholarships.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${scholarships.map((scholarship) => renderTemplate`${renderComponent($$result2, "ScholarshipCard", $$ScholarshipCard, { "scholarship": scholarship })}`)} </div>` : renderTemplate`<div class="text-center py-20 bg-white rounded-3xl shadow-sm"> <div class="text-slate-400 mb-4"> <svg class="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-2">Tidak ada data di halaman ini</h3> <a href="/beasiswa" class="text-primary hover:underline font-medium">
Kembali ke halaman utama
</a> </div>`} <!-- Pagination --> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/beasiswa/page", "rootUrl": "/beasiswa" })} </main> </div> ` })}`;
}, "C:/laragon/www/frontendue/src/pages/beasiswa/page/[page].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/beasiswa/page/[page].astro";
const $$url = "/beasiswa/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
