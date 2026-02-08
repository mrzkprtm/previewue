/* empty css                                       */
import { f as createComponent, j as renderComponent, r as renderTemplate, i as createAstro, k as Fragment, u as unescapeHTML, h as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_BeN8361j.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BbBaf_yP.mjs';
import { $ as $$ArticleCard } from '../../../chunks/ArticleCard_7fAHV1Il.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_8hep0b7h.mjs';
export { renderers } from '../../../renderers.mjs';

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
  let category = null;
  let posts = [];
  let totalPages = 1;
  let error = null;
  try {
    const { getCategories, getPostsByCategory } = await import('../../../chunks/endpoints_BcQY9cMI.mjs');
    const categories = await getCategories();
    category = categories.find((c) => c.slug === slug) || null;
    if (category) {
      const response = await getPostsByCategory(slug, 1, 9);
      posts = response.posts;
      totalPages = response.totalPages;
    }
  } catch (e) {
    console.error("Failed to fetch category:", e);
    error = "Menggunakan data contoh";
    const mockCategories = {
      ielts: { id: 1, name: "IELTS", slug: "ielts", count: 5 },
      beasiswa: { id: 2, name: "Beasiswa", slug: "beasiswa", count: 8 },
      toefl: { id: 3, name: "TOEFL", slug: "toefl", count: 3 }
    };
    category = mockCategories[slug] || { id: 0, name: slug, slug, count: 0 };
    posts = [
      {
        id: 1,
        slug: "tips-ielts",
        title: `Tips ${category.name}`,
        content: "",
        excerpt: `<p>Tips untuk ${category.name}</p>`,
        date: "2026-02-05T10:00:00",
        featuredImage: { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop", alt: category.name },
        author: { name: "Admin" },
        categories: [{ name: category.name, slug: category.slug }]
      },
      {
        id: 2,
        slug: "panduan-lengkap",
        title: `Panduan Lengkap ${category.name}`,
        content: "",
        excerpt: `<p>Panduan ${category.name}</p>`,
        date: "2026-02-03T14:30:00",
        featuredImage: { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop", alt: category.name },
        author: { name: "Tim" },
        categories: [{ name: category.name, slug: category.slug }]
      }
    ];
    totalPages = 1;
  }
  if (!category) {
    return Astro2.redirect("/artikel");
  }
  const canonicalUrl = `${Astro2.url.origin}/artikel/category/${category.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Artikel ${category.name} - Ultimate Education`,
    description: `Kumpulan artikel tentang ${category.name}: tips, panduan, dan informasi terbaru.`,
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
      { "@type": "ListItem", position: 3, name: category.name, item: canonicalUrl }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Artikel ${category.name} | Blog Ultimate Education`, "description": `Kumpulan artikel tentang ${category.name}: tips, panduan, strategi, dan informasi terbaru dari Ultimate Education.` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 min-h-screen"> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Breadcrumb --> <nav class="pt-6 pb-4" aria-label="Breadcrumb"> <ol class="flex items-center gap-2 text-sm text-slate-500"> <li><a href="/" class="hover:text-primary transition-colors">Home</a></li> <li><span class="mx-1">/</span></li> <li><a href="/artikel" class="hover:text-primary transition-colors">Artikel</a></li> <li><span class="mx-1">/</span></li> <li class="text-slate-400">${category.name}</li> </ol> </nav> <!-- Header --> <div class="pt-4 pb-8"> <div class="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Kategori</div> <h1 class="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-2">${category.name}</h1> <p class="text-slate-500">${category.count} artikel dalam kategori ini</p> </div> ${error && renderTemplate`<div class="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm">⚠️ ${error}</div>`} <!-- Articles Grid --> <section class="pb-12"> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-2xl"> <p class="text-slate-500">Belum ada artikel dalam kategori ini.</p> <a href="/artikel" class="mt-4 inline-block text-primary font-medium hover:underline">
← Kembali ke Blog
</a> </div>`} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "totalPages": totalPages, "baseUrl": `/artikel/category/${category.slug}`, "rootUrl": `/artikel/category/${category.slug}` })} </section> <!-- Back to Blog --> <div class="pb-12 text-center"> <a href="/artikel" class="inline-flex items-center gap-2 text-primary font-medium hover:underline"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Lihat Semua Artikel
</a> </div> </main> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="canonical"', '> <meta property="og:type" content="website"> <meta property="og:url"', '> <meta property="og:title"', '> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "content"), addAttribute(`Artikel ${category.name} | Ultimate Education`, "content"), unescapeHTML(JSON.stringify(structuredData)), unescapeHTML(JSON.stringify(breadcrumbData))) })}` })}`;
}, "C:/laragon/www/frontendue/src/pages/artikel/category/[slug].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/artikel/category/[slug].astro";
const $$url = "/artikel/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
