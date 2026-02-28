import type { APIRoute } from "astro";
import { buildSitemapIndex, normalizeBaseUrl } from "../lib/sitemap";
import { getPostsWithPagination } from "../lib/api/endpoints";

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = normalizeBaseUrl(site?.toString() || import.meta.env.SITE || "https://www.ultimateducation.co.id");

    const sitemapEntries: { loc: string; lastmod?: string }[] = [
        { loc: `${baseUrl}/sitemaps/sitemap-pages.xml` },
        { loc: `${baseUrl}/sitemaps/sitemap-programs.xml` },
        { loc: `${baseUrl}/sitemaps/sitemap-categories.xml` },
    ];

    const firstPosts = await getPostsWithPagination(1, 100);
    const totalPosts = firstPosts.totalPosts || firstPosts.posts.length;
    const totalChunks = Math.max(1, Math.ceil(totalPosts / 200));
    for (let i = 1; i <= totalChunks; i += 1) {
        sitemapEntries.push({ loc: `${baseUrl}/sitemaps/sitemap-articles-${i}.xml` });
    }

    const sitemap = buildSitemapIndex(sitemapEntries);
    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
