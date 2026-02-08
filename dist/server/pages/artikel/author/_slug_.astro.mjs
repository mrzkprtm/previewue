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
  if (!slug) {
    return Astro2.redirect("/artikel");
  }
  function slugToName(s) {
    return s.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  let author = null;
  let posts = [];
  let totalPages = 1;
  let error = null;
  try {
    const { getAuthorBySlug, getPostsByAuthor } = await import('../../../chunks/endpoints_BcQY9cMI.mjs');
    const wpAuthor = await getAuthorBySlug(slug);
    if (wpAuthor) {
      author = {
        id: wpAuthor.id,
        name: wpAuthor.name,
        slug: wpAuthor.slug,
        description: wpAuthor.description,
        avatar: wpAuthor.avatar_urls?.["96"] || wpAuthor.avatar_urls?.["48"]
      };
      const response = await getPostsByAuthor(wpAuthor.id, 1, 12);
      posts = response.posts;
      totalPages = response.totalPages;
    }
  } catch (e) {
    console.error("Failed to fetch author:", e);
    error = "Menggunakan data contoh";
  }
  if (!author) {
    author = {
      id: 0,
      name: slugToName(slug),
      slug,
      description: void 0,
      avatar: void 0
    };
    posts = [
      {
        id: 1,
        slug: "tips-ielts",
        title: "Tips IELTS",
        content: "",
        excerpt: "<p>Tips IELTS</p>",
        date: "2026-02-05T10:00:00",
        featuredImage: { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop", alt: "IELTS" },
        author: { name: author.name },
        categories: [{ name: "IELTS", slug: "ielts" }]
      },
      {
        id: 2,
        slug: "beasiswa-tips",
        title: "Tips Beasiswa",
        content: "",
        excerpt: "<p>Tips beasiswa</p>",
        date: "2026-02-03T14:30:00",
        featuredImage: { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop", alt: "Beasiswa" },
        author: { name: author.name },
        categories: [{ name: "Beasiswa", slug: "beasiswa" }]
      }
    ];
    totalPages = 1;
  }
  const canonicalUrl = `${Astro2.url.origin}/artikel/author/${author.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: author.name,
      url: canonicalUrl,
      description: author.description,
      worksFor: {
        "@type": "Organization",
        name: "Ultimate Education"
      }
    }
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: Astro2.url.origin },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${Astro2.url.origin}/artikel` },
      { "@type": "ListItem", position: 3, name: author.name, item: canonicalUrl }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Artikel oleh ${author.name} | Blog Ultimate Education`, "description": `Baca semua artikel yang ditulis oleh ${author.name} di blog Ultimate Education.` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 min-h-screen"> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Breadcrumb --> <nav class="pt-6 pb-4" aria-label="Breadcrumb"> <ol class="flex items-center gap-2 text-sm text-slate-500"> <li><a href="/" class="hover:text-primary transition-colors">Home</a></li> <li><span class="mx-1">/</span></li> <li><a href="/artikel" class="hover:text-primary transition-colors">Artikel</a></li> <li><span class="mx-1">/</span></li> <li class="text-slate-400">${author.name}</li> </ol> </nav> <!-- Author Header --> <div class="pt-4 pb-8"> <div class="flex items-center gap-5"> ${author.avatar ? renderTemplate`<img${addAttribute(author.avatar, "src")}${addAttribute(`Foto ${author.name}`, "alt")} class="w-20 h-20 rounded-full object-cover" loading="eager">` : renderTemplate`<div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"> <span class="text-primary font-bold text-3xl">${author.name.charAt(0)}</span> </div>`} <div> <div class="text-sm text-slate-500 mb-1">Penulis</div> <h1 class="text-2xl lg:text-3xl font-bold font-heading text-gray-900">${author.name}</h1> ${author.description && renderTemplate`<p class="text-slate-500 mt-1 max-w-lg">${unescapeHTML(author.description)}</p>`} <p class="text-slate-400 mt-2 text-sm">${posts.length} artikel</p> </div> </div> </div> ${error && renderTemplate`<div class="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm">⚠️ ${error}</div>`} <!-- Articles Grid --> <section class="pb-12"> <h2 class="text-xl font-bold font-heading text-gray-900 mb-6">Artikel oleh ${author.name}</h2> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-2xl"> <p class="text-slate-500">Belum ada artikel dari penulis ini.</p> </div>`} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "totalPages": totalPages, "baseUrl": `/artikel/author/${author.slug}`, "rootUrl": `/artikel/author/${author.slug}` })} </section> <!-- Back to Blog --> <div class="pb-12 text-center"> <a href="/artikel" class="inline-flex items-center gap-2 text-primary font-medium hover:underline"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Kembali ke Blog
</a> </div> </main> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="canonical"', '> <meta property="og:type" content="profile"> <meta property="og:url"', '> <meta property="og:title"', '> <meta property="profile:username"', '> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "content"), addAttribute(`Artikel oleh ${author.name}`, "content"), addAttribute(author.slug, "content"), unescapeHTML(JSON.stringify(structuredData)), unescapeHTML(JSON.stringify(breadcrumbData))) })}` })}`;
}, "C:/laragon/www/frontendue/src/pages/artikel/author/[slug].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/artikel/author/[slug].astro";
const $$url = "/artikel/author/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
