import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as createAstro } from './astro/server_BeN8361j.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl = "/artikel/page", rootUrl = "/artikel", queryParams = "" } = Astro2.props;
  function getPageNumbers(current, total) {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages = [];
    pages.push(1);
    if (current > 3) {
      pages.push("...");
    }
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
    if (current < total - 2) {
      pages.push("...");
    }
    if (!pages.includes(total)) {
      pages.push(total);
    }
    return pages;
  }
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  function getPageUrl(page) {
    if (baseUrl === "/beasiswa") {
      return `${baseUrl}?${queryParams ? queryParams + "&" : ""}page=${page}`;
    }
    if (page === 1) {
      return rootUrl + (queryParams ? `?${queryParams}` : "");
    }
    return `${baseUrl}/${page}` + (queryParams ? `?${queryParams}` : "");
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-center gap-2 mt-12" aria-label="Pagination"><!-- Previous Button --><a${addAttribute(currentPage > 1 ? getPageUrl(currentPage - 1) : void 0, "href")}${addAttribute([
    "w-10 h-10 flex items-center justify-center rounded-xl border transition-colors",
    currentPage > 1 ? "bg-white text-slate-500 hover:text-primary hover:border-primary border-slate-200" : "bg-slate-100 text-slate-300 border-slate-100 pointer-events-none"
  ], "class:list")} aria-label="Halaman sebelumnya"${addAttribute(currentPage <= 1, "aria-disabled")}><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></a><!-- Page Numbers -->${pageNumbers.map((page) => page === "..." ? renderTemplate`<span class="text-slate-400 px-2">...</span>` : renderTemplate`<a${addAttribute(page !== currentPage ? getPageUrl(page) : void 0, "href")}${addAttribute([
    "w-10 h-10 flex items-center justify-center rounded-xl font-semibold transition-colors text-sm",
    page === currentPage ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white text-slate-600 hover:text-primary border border-slate-200 hover:border-primary"
  ], "class:list")}${addAttribute(`Halaman ${page}`, "aria-label")}${addAttribute(page === currentPage ? "page" : void 0, "aria-current")}>${page}</a>`)}<!-- Next Button --><a${addAttribute(currentPage < totalPages ? getPageUrl(currentPage + 1) : void 0, "href")}${addAttribute([
    "w-10 h-10 flex items-center justify-center rounded-xl border transition-colors",
    currentPage < totalPages ? "bg-white text-slate-500 hover:text-primary hover:border-primary border-slate-200" : "bg-slate-100 text-slate-300 border-slate-100 pointer-events-none"
  ], "class:list")} aria-label="Halaman berikutnya"${addAttribute(currentPage >= totalPages, "aria-disabled")}><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></nav>`}`;
}, "C:/laragon/www/frontendue/src/components/blog/Pagination.astro", void 0);

export { $$Pagination as $ };
