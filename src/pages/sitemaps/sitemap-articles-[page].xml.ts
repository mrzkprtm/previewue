import type { APIRoute } from "astro";
import { buildUrlSet, chunkArray, MAX_URLS_PER_SITEMAP, normalizeBaseUrl, toLastmod } from "../../lib/sitemap";
import { getPostsWithPagination } from "../../lib/api/endpoints";

let cachedPosts: { slug: string; date?: string }[] | null = null;

const loadAllPosts = async () => {
    if (cachedPosts) return cachedPosts;
    const posts: { slug: string; date?: string }[] = [];
    const first = await getPostsWithPagination(1, 100);
    posts.push(...first.posts.map((post) => ({ slug: post.slug, date: post.date })));
    if (first.totalPages > 1) {
        for (let page = 2; page <= first.totalPages; page += 1) {
            const next = await getPostsWithPagination(page, 100);
            posts.push(...next.posts.map((post) => ({ slug: post.slug, date: post.date })));
        }
    }
    cachedPosts = posts;
    return posts;
};

export const getStaticPaths = async () => {
    const posts = await loadAllPosts();
    const chunks = chunkArray(posts, MAX_URLS_PER_SITEMAP);
    return chunks.map((_, index) => ({
        params: { page: String(index + 1) },
    }));
};

export const GET: APIRoute = async ({ site, params }) => {
    const baseUrl = normalizeBaseUrl(site?.toString() || import.meta.env.SITE || "https://www.ultimateducation.co.id");
    const pageIndex = Math.max(1, Number(params.page || 1)) - 1;
    const posts = await loadAllPosts();
    const chunks = chunkArray(posts, MAX_URLS_PER_SITEMAP);
    const currentChunk = chunks[pageIndex];
    if (!currentChunk) {
        return new Response("Not found", { status: 404 });
    }
    const urls = currentChunk.map((post) => ({
        loc: `${baseUrl}/artikel/${post.slug}`,
        lastmod: toLastmod(post.date),
    }));
    const sitemap = buildUrlSet(urls);
    return new Response(sitemap, {
        headers: { "Content-Type": "application/xml" },
    });
};
