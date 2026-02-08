/* empty css                                          */
import { c as createComponent, e as renderComponent, r as renderTemplate, f as createAstro, F as Fragment, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../../../../chunks/astro/server_DWPYSQod.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../chunks/Layout_B7meVBy6.mjs';
import { $ as $$ArticleCard } from '../../../../chunks/ArticleCard_ryf7C36u.mjs';
import { $ as $$Pagination } from '../../../../chunks/Pagination_n9RwW6-W.mjs';
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
    return Astro2.redirect(`/artikel/author/${slug}`);
  }
  function slugToName(s) {
    return s.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  let author = null;
  let posts = [];
  let totalPages = 1;
  let error = null;
  try {
    const { getAuthorBySlug, getPostsByAuthor } = await import('../../../../chunks/endpoints_BcQY9cMI.mjs');
    const wpAuthor = await getAuthorBySlug(slug);
    if (wpAuthor) {
      author = {
        id: wpAuthor.id,
        name: wpAuthor.name,
        slug: wpAuthor.slug,
        description: wpAuthor.description,
        avatar: wpAuthor.avatar_urls?.["96"] || wpAuthor.avatar_urls?.["48"]
      };
      const response = await getPostsByAuthor(wpAuthor.id, currentPage, postsPerPage);
      posts = response.posts;
      totalPages = response.totalPages;
    }
  } catch (e) {
    console.error("Failed to fetch author:", e);
    error = "Menggunakan data contoh";
    if (slug) {
      author = {
        id: 0,
        name: slugToName(slug),
        slug,
        description: void 0,
        avatar: void 0
      };
      posts = [];
      totalPages = 1;
    }
  }
  if (!author) {
    return Astro2.redirect("/artikel");
  }
  const canonicalUrl = `${Astro2.url.origin}/artikel/author/${author.slug}/${currentPage}`;
  const rootUrl = `/artikel/author/${author.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Artikel oleh ${author.name} - Halaman ${currentPage} - Ultimate Education`,
    description: `Halaman ${currentPage} - Kumpulan artikel yang ditulis oleh ${author.name}.`,
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
      { "@type": "ListItem", position: 3, name: author.name, item: `${Astro2.url.origin}${rootUrl}` },
      { "@type": "ListItem", position: 4, name: `Halaman ${currentPage}`, item: canonicalUrl }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Artikel oleh ${author.name} - Halaman ${currentPage} | Blog Ultimate Education`, "description": `Halaman ${currentPage} - Baca semua artikel yang ditulis oleh ${author.name} di blog Ultimate Education.` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 min-h-screen"> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Breadcrumb --> <nav class="pt-6 pb-4" aria-label="Breadcrumb"> <ol class="flex items-center gap-2 text-sm text-slate-500"> <li><a href="/" class="hover:text-primary transition-colors">Home</a></li> <li><span class="mx-1">/</span></li> <li><a href="/artikel" class="hover:text-primary transition-colors">Artikel</a></li> <li><span class="mx-1">/</span></li> <li><a${addAttribute(rootUrl, "href")} class="hover:text-primary transition-colors">${author.name}</a></li> <li><span class="mx-1">/</span></li> <li class="text-slate-400">Halaman ${currentPage}</li> </ol> </nav> <!-- Author Header --> <div class="pt-4 pb-8"> <div class="flex items-center gap-5"> ${author.avatar ? renderTemplate`<img${addAttribute(author.avatar, "src")}${addAttribute(`Foto ${author.name}`, "alt")} class="w-16 h-16 rounded-full object-cover" loading="eager">` : renderTemplate`<div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"> <span class="text-primary font-bold text-2xl">${author.name.charAt(0)}</span> </div>`} <div> <div class="text-sm text-slate-500 mb-1">Penulis</div> <h1 class="text-2xl font-bold font-heading text-gray-900">${author.name}</h1> <p class="text-slate-500 text-sm">Halaman ${currentPage}</p> </div> </div> </div> ${error && renderTemplate`<div class="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm">⚠️ ${error}</div>`} <!-- Articles Grid --> <section class="pb-12"> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-2xl"> <p class="text-slate-500">Tidak ada artikel di halaman ini.</p> <a${addAttribute(rootUrl, "href")} class="mt-4 inline-block text-primary font-medium hover:underline">
← Kembali ke Profil Penulis
</a> </div>`} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": rootUrl, "rootUrl": rootUrl })} </section> </main> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="canonical"', '> <meta name="robots" content="noindex, follow"> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), addAttribute(canonicalUrl, "href"), unescapeHTML(JSON.stringify(structuredData)), unescapeHTML(JSON.stringify(breadcrumbData))) })}` })}`;
}, "C:/laragon/www/frontendue/src/pages/artikel/author/[slug]/[page].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/artikel/author/[slug]/[page].astro";
const $$url = "/artikel/author/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
