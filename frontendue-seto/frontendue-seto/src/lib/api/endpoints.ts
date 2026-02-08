/**
 * OWNER: DYNAMIC (Dev B)
 * Endpoint specific getters with data normalization.
 */

import { wpFetch } from './wp';
import type { WPPost, WPPostRaw, WPCategory } from '../../types/wp';

function normalizePost(post: WPPostRaw): WPPost {
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const terms = post._embedded?.['wp:term']?.flat() || [];
    const categories = terms
        .filter(term => term.taxonomy === 'category')
        .map(c => ({ name: c.name, slug: c.slug }));

    return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        date: post.date,
        featuredImage: featuredMedia ? {
            src: featuredMedia.source_url,
            alt: featuredMedia.alt_text || post.title.rendered
        } : undefined,
        categories,
        author: post._embedded?.author?.[0] ? {
            name: post._embedded.author[0].name,
            image: post._embedded.author[0].avatar_urls?.['96']
        } : undefined
    };
}

export async function getPosts(page: number = 1, perPage: number = 10): Promise<WPPost[]> {
    const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
    const rawPosts = await wpFetch<WPPostRaw[]>(endpoint);
    return rawPosts.map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const endpoint = `/wp/v2/posts?_embed&slug=${slug}`;
    const rawPosts = await wpFetch<WPPostRaw[]>(endpoint);

    if (rawPosts.length === 0) return null;
    return normalizePost(rawPosts[0]);
}

export async function getAllPostsSlugs(): Promise<string[]> {
    // Fetching all slugs for SSG (simplified, might need pagination loop for many posts)
    const endpoint = `/wp/v2/posts?per_page=100&_fields=slug`;
    const posts = await wpFetch<{ slug: string }[]>(endpoint);
    return posts.map(p => p.slug);
}

export async function getCategories(): Promise<WPCategory[]> {
    return wpFetch<WPCategory[]>('/wp/v2/categories');
}
