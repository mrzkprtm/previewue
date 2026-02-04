/* empty css                                 */
import { f as createComponent, j as renderComponent, r as renderTemplate, i as createAstro, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BeN8361j.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DQYTS-O7.mjs';
import { f as fetchWP } from '../chunks/wp_SivcEAB_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = [];
  let error = null;
  try {
    const data = await fetchWP(`
    query GetPosts {
      posts(first: 9) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `);
    posts = data.posts?.nodes || [];
  } catch (e) {
    error = e;
    console.error("Failed to fetch posts:", e);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | AstroWP" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Latest Posts</h1> ${error ? renderTemplate`<div class="p-4 bg-red-50 text-red-600 rounded-lg"> <p>Could not load posts. Please ensure your WordPress site is running and WPGraphQL is active.</p> <p class="text-xs mt-2 opacity-75">Error details check console</p> </div>` : renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`<article class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"> ${post.featuredImage?.node?.sourceUrl && renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} class="w-full h-48 object-cover">`} <div class="p-6"> <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="hover:text-blue-600 transition-colors"> ${post.title} </a> </h2> <div class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">${unescapeHTML(post.excerpt)}</div> <div class="flex items-center text-xs text-gray-500 dark:text-gray-500"> <time${addAttribute(post.date, "datetime")}>${new Date(post.date).toLocaleDateString()}</time> </div> </div> </article>`)} </div>`} ${posts.length === 0 && !error && renderTemplate`<p class="text-center text-gray-500">No posts found.</p>`} </div> ` })}`;
}, "C:/laragon/www/frontendue/src/pages/blog/index.astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
