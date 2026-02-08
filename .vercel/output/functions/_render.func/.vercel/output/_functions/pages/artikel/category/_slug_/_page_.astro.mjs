/* empty css                                          */
import { c as createComponent, e as renderComponent, r as renderTemplate, f as createAstro, F as Fragment, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../../../../chunks/astro/server_CQNAQ0jI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../chunks/Layout_DspkV-i-.mjs';
import { $ as $$ArticleCard } from '../../../../chunks/ArticleCard_Cv4AQnOC.mjs';
import { $ as $$Pagination } from '../../../../chunks/Pagination_ByS00C8I.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { slug, page } = Astro2.params;
  const currentPage = parseInt(page || "1");
  const postsPerPage = 9;
  if (currentPage < 2) {
    return Astro2.redirect(`/artikel/category/${slug}`);
  }
  let category = null;
  let posts = [];
  let totalPages = 1;
  let error = null;
  try {
    const { getCategories, getPostsByCategory } = await import('../../../../chunks/endpoints_BcQY9cMI.mjs');
    const categories = await getCategories();
    category = categories.find((c) => c.slug === slug) || null;
    if (category) {
      const response = await getPostsByCategory(slug, currentPage, postsPerPage);
      posts = response.posts;
      totalPages = response.totalPages;
    }
  } catch (e) {
    console.error("Failed to fetch category:", e);
    error = "Menggunakan data contoh";
    if (slug) {
      category = { id: 0, name: slug.charAt(0).toUpperCase() + slug.slice(1), slug, count: 0 };
      posts = [];
      totalPages = 1;
    }
  }
  if (!category) {
    return Astro2.redirect("/artikel");
  }
  const canonicalUrl = `${Astro2.url.origin}/artikel/category/${category.slug}/${currentPage}`;
  const rootUrl = `/artikel/category/${category.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Artikel ${category.name} - Halaman ${currentPage} - Ultimate Education`,
    description: `Halaman ${currentPage} - Kumpulan artikel tentang ${category.name}.`,
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${Astro2.url.origin}/artikel/${post.slug}`
      }))
    }
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: Astro2.url.origin },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${Astro2.url.origin}/artikel` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${Astro2.url.origin}${rootUrl}` },
      { "@type": "ListItem", position: 4, name: `Halaman ${currentPage}`, item: canonicalUrl }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Artikel ${category.name} - Halaman ${currentPage} | Blog Ultimate Education`, "description": `Halaman ${currentPage} - Kumpulan artikel tentang ${category.name}: tips, panduan, strategi, dan informasi terbaru dari Ultimate Education.` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 min-h-screen"> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Breadcrumb --> <nav class="pt-6 pb-4" aria-label="Breadcrumb"> <ol class="flex items-center gap-2 text-sm text-slate-500"> <li><a href="/" class="hover:text-primary transition-colors">Home</a></li> <li><span class="mx-1">/</span></li> <li><a href="/artikel" class="hover:text-primary transition-colors">Artikel</a></li> <li><span class="mx-1">/</span></li> <li><a${addAttribute(rootUrl, "href")} class="hover:text-primary transition-colors">${category.name}</a></li> <li><span class="mx-1">/</span></li> <li class="text-slate-400">Halaman ${currentPage}</li> </ol> </nav> <!-- Header --> <div class="pt-4 pb-8"> <div class="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Kategori</div> <h1 class="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-2">${category.name}</h1> <p class="text-slate-500">Halaman ${currentPage}</p> </div> ${error && renderTemplate`<div class="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm">⚠️ ${error}</div>`} <!-- Articles Grid --> <section class="pb-12"> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-2xl"> <p class="text-slate-500">Tidak ada artikel di halaman ini.</p> <a${addAttribute(rootUrl, "href")} class="mt-4 inline-block text-primary font-medium hover:underline">
← Kembali ke Kategori
</a> </div>`} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": rootUrl, "rootUrl": rootUrl })} </section> </main> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="canonical"', '> <meta name="robots" content="noindex, follow"> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), addAttribute(canonicalUrl, "href"), unescapeHTML(JSON.stringify(structuredData)), unescapeHTML(JSON.stringify(breadcrumbData))) })}` })}`;
}, "C:/laragon/www/frontendue/src/pages/artikel/category/[slug]/[page].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/artikel/category/[slug]/[page].astro";
const $$url = "/artikel/category/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
