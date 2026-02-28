import type { APIRoute } from "astro";
import { buildUrlSet, normalizeBaseUrl } from "../../lib/sitemap";
import { programs } from "../../data/programs";

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = normalizeBaseUrl(site?.toString() || import.meta.env.SITE || "https://www.ultimateducation.co.id");
    const urls = programs.map((program) => ({ loc: `${baseUrl}/program/${program.slug}` }));
    const sitemap = buildUrlSet(urls);
    return new Response(sitemap, {
        headers: { "Content-Type": "application/xml" },
    });
};
