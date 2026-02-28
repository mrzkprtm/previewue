import type { APIRoute } from "astro";
import { buildUrlSet, normalizeBaseUrl } from "../../lib/sitemap";
import { getCategories } from "../../lib/api/endpoints";

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = normalizeBaseUrl(site?.toString() || import.meta.env.SITE || "https://www.ultimateducation.co.id");
    const categories = await getCategories();
    const urls = categories
        .filter((cat) => cat.slug)
        .map((cat) => ({ loc: `${baseUrl}/artikel/category/${cat.slug}` }));
    const sitemap = buildUrlSet(urls);
    return new Response(sitemap, {
        headers: { "Content-Type": "application/xml" },
    });
};
