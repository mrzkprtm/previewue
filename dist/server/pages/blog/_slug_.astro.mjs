/* empty css                                    */
import { f as createComponent, j as renderComponent, r as renderTemplate, i as createAstro, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_BeN8361j.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DQYTS-O7.mjs';
import { f as fetchWP } from '../../chunks/wp_SivcEAB_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = null;
  let error = null;
  if (slug) {
    try {
      const data = await fetchWP(`
      query GetPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          content
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `, { slug });
      post = data.post;
    } catch (e) {
      error = e;
    }
  }
  if (!post && !error) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post?.title || "Post Not Found" }, { "default": async ($$result2) => renderTemplate`${error ? renderTemplate`${maybeRenderHead()}<div class="p-4 bg-red-50 text-red-600 rounded-lg max-w-2xl mx-auto mt-10"> <p>Error loading post.</p> </div>` : renderTemplate`<article class="max-w-3xl mx-auto"> ${post.featuredImage?.node?.sourceUrl && renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} class="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-sm">`} <header class="mb-8 text-center"> <h1 class="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight"> ${post.title} </h1> <div class="text-sm text-gray-500 dark:text-gray-400 flex justify-center gap-4"> <span>By ${post.author?.node?.name}</span> <span>&bull;</span> <time${addAttribute(post.date, "datetime")}>${new Date(post.date).toLocaleDateString()}</time> </div> </header> <div class="prose prose-lg dark:prose-invert mx-auto focus:outline-none">${unescapeHTML(post.content)}</div> <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"> <a href="/blog" class="text-blue-600 hover:text-blue-700 font-medium">
&larr; Back to Blog
</a> </div> </article>`}` })}`;
}, "C:/laragon/www/frontendue/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/laragon/www/frontendue/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
