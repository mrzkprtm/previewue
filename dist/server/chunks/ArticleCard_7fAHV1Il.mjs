import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderComponent, k as Fragment, i as createAstro } from './astro/server_BeN8361j.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { post } = Astro2.props;
  function getRelativeTime(date) {
    const now = /* @__PURE__ */ new Date();
    const postDate = new Date(date);
    const diffDays = Math.floor((now.getTime() - postDate.getTime()) / (1e3 * 60 * 60 * 24));
    if (diffDays === 0) return "Hari ini";
    if (diffDays === 1) return "Kemarin";
    if (diffDays < 7) return `${diffDays} hari lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
    return new Date(date).toLocaleDateString("id-ID", { month: "long", day: "numeric", year: "numeric" });
  }
  function stripHtml(html) {
    return html.replace(/<[^>]*>/g, "").trim();
  }
  return renderTemplate`${maybeRenderHead()}<article class="bg-white rounded-3xl overflow-hidden shadow-card group cursor-pointer border border-transparent hover:border-primary/20 transition-all duration-300 flex flex-col"> <!-- Image --> <a${addAttribute(`/artikel/${post.slug}`, "href")} class="relative h-56 overflow-hidden block bg-gray-200"> ${post.featuredImage ? renderTemplate`<img${addAttribute(post.featuredImage.src, "src")}${addAttribute(post.featuredImage.alt, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="w-full h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 hidden absolute inset-0"> <svg class="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5"> <svg class="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div>`} <!-- Category Badge --> ${post.categories.length > 0 && renderTemplate`<span class="absolute top-4 left-4 bg-white/95 text-primary px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm backdrop-blur-sm"> ${post.categories[0].name} </span>`} </a> <!-- Content --> <div class="p-6 flex flex-col flex-grow"> <!-- Author & Date --> <div class="flex items-center gap-3 mb-3"> ${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${post.author.avatar ? renderTemplate`<img${addAttribute(post.author.avatar, "src")}${addAttribute(post.author.name, "alt")} class="w-8 h-8 rounded-full object-cover" loading="lazy">` : renderTemplate`<div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"> <span class="text-primary font-bold text-sm">${post.author.name.charAt(0)}</span> </div>`}<div class="flex flex-col"> <span class="text-sm font-medium text-gray-700">${post.author.name}</span> <span class="text-xs text-slate-400">${getRelativeTime(post.date)}</span> </div> ` })}`} ${!post.author && renderTemplate`<span class="text-xs text-slate-400">${getRelativeTime(post.date)}</span>`} </div> <!-- Title --> <h3 class="text-lg font-bold mb-3 line-clamp-2 leading-snug font-heading"> <a${addAttribute(`/artikel/${post.slug}`, "href")} class="text-gray-900 hover:text-primary transition-colors"> ${post.title} </a> </h3> <!-- Excerpt --> <p class="text-slate-500 text-sm line-clamp-2 leading-relaxed flex-grow"> ${stripHtml(post.excerpt)} </p> <!-- Read More --> <a${addAttribute(`/artikel/${post.slug}`, "href")} class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
Baca Selengkapnya
<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </article>`;
}, "C:/laragon/www/frontendue/src/components/blog/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
