import type { APIRoute } from "astro";
import { buildUrlSet, normalizeBaseUrl } from "../../lib/sitemap";

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = normalizeBaseUrl(site?.toString() || import.meta.env.SITE || "https://www.ultimateducation.co.id");
    const staticPaths = [
        "",
        "/about",
        "/kontak",
        "/mitra",
        "/partnership",
        "/promo",
        "/program",
        "/beasiswa",
        "/artikel",
        "/pendaftaran",
        "/programschedule",
    ];
    const urls = staticPaths.map((path) => ({ loc: `${baseUrl}${path}` }));
    const sitemap = buildUrlSet(urls);
    return new Response(sitemap, {
        headers: { "Content-Type": "application/xml" },
    });
};
