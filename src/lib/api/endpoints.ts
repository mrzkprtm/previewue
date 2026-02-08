/**
 * OWNER: DYNAMIC (Dev B)
 * Endpoint specific getters with data normalization.
 */

import { wpFetch, wpFetchWithHeaders } from './wp';
import type { WPPost, WPPostRaw, WPCategory, WPPostsResponse } from '../../types/wp';

// Extract first image from HTML content as fallback
function extractImageFromContent(html: string): string | null {
    const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return imgMatch ? imgMatch[1] : null;
}

function normalizePost(post: WPPostRaw): WPPost {
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const terms = post._embedded?.['wp:term']?.flat() || [];
    const authorData = post._embedded?.['author']?.[0];

    const categories = terms
        .filter(term => term.taxonomy === 'category')
        .map(c => ({ name: c.name, slug: c.slug }));

    // Get best available image size from featured media
    let imageSrc: string | undefined;
    if (featuredMedia?.source_url) {
        const sizes = featuredMedia.media_details?.sizes;
        imageSrc = sizes?.large?.source_url || sizes?.medium_large?.source_url || sizes?.full?.source_url || featuredMedia.source_url;
    }

    // Fallback: extract first image from post content
    if (!imageSrc && post.content?.rendered) {
        const contentImage = extractImageFromContent(post.content.rendered);
        if (contentImage) {
            imageSrc = contentImage;
        }
    }

    return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        date: post.date,
        featuredImage: imageSrc ? {
            src: imageSrc,
            alt: featuredMedia?.alt_text || post.title.rendered
        } : undefined,
        author: authorData ? {
            name: authorData.name,
            avatar: authorData.avatar_urls?.['96'] || authorData.avatar_urls?.['48']
        } : undefined,
        categories
    };
}

export async function getPosts(page: number = 1, perPage: number = 10): Promise<WPPost[]> {
    const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
    const rawPosts = await wpFetch<WPPostRaw[]>(endpoint);
    return rawPosts.map(normalizePost);
}

export async function getPostsWithPagination(page: number = 1, perPage: number = 10): Promise<WPPostsResponse> {
    const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
    const { data, totalPages, totalPosts } = await wpFetchWithHeaders<WPPostRaw[]>(endpoint);

    return {
        posts: data.map(normalizePost),
        totalPages,
        totalPosts
    };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const endpoint = `/wp/v2/posts?_embed&slug=${slug}`;
    const rawPosts = await wpFetch<WPPostRaw[]>(endpoint);

    if (rawPosts.length === 0) return null;
    return normalizePost(rawPosts[0]);
}

export async function getAllPostsSlugs(): Promise<string[]> {
    const endpoint = `/wp/v2/posts?per_page=100&_fields=slug`;
    const posts = await wpFetch<{ slug: string }[]>(endpoint);
    return posts.map(p => p.slug);
}

export async function getCategories(): Promise<WPCategory[]> {
    return wpFetch<WPCategory[]>('/wp/v2/categories?per_page=20');
}

export async function getPostsByCategory(categorySlug: string, page: number = 1, perPage: number = 10): Promise<WPPostsResponse> {
    // First get category ID from slug
    const categories = await wpFetch<WPCategory[]>(`/wp/v2/categories?slug=${categorySlug}`);
    if (categories.length === 0) {
        return { posts: [], totalPages: 0, totalPosts: 0 };
    }

    const categoryId = categories[0].id;
    const endpoint = `/wp/v2/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}`;
    const { data, totalPages, totalPosts } = await wpFetchWithHeaders<WPPostRaw[]>(endpoint);

    return {
        posts: data.map(normalizePost),
        totalPages,
        totalPosts
    };
}

export async function searchPosts(query: string, perPage: number = 10): Promise<WPPost[]> {
    const endpoint = `/wp/v2/posts?_embed&search=${encodeURIComponent(query)}&per_page=${perPage}`;
    const rawPosts = await wpFetch<WPPostRaw[]>(endpoint);
    return rawPosts.map(normalizePost);
}

export interface WPAuthor {
    id: number;
    name: string;
    slug: string;
    description?: string;
    avatar_urls?: Record<string, string>;
}

export async function getAuthors(): Promise<WPAuthor[]> {
    return wpFetch<WPAuthor[]>('/wp/v2/users?per_page=50');
}

export async function getAuthorBySlug(slug: string): Promise<WPAuthor | null> {
    const authors = await wpFetch<WPAuthor[]>(`/wp/v2/users?slug=${slug}`);
    return authors.length > 0 ? authors[0] : null;
}

export async function getPostsByAuthor(authorId: number, page: number = 1, perPage: number = 10): Promise<WPPostsResponse> {
    const endpoint = `/wp/v2/posts?_embed&author=${authorId}&page=${page}&per_page=${perPage}`;
    const { data, totalPages, totalPosts } = await wpFetchWithHeaders<WPPostRaw[]>(endpoint);

    return {
        posts: data.map(normalizePost),
        totalPages,
        totalPosts
    };
}

// Sub-function to normalize scholarship data (handling Pods/ACF fields)
import type { WPScholarship, WPScholarshipsResponse } from '../../types/wp';

// Helper to extract value from various Pods field formats
function extractPodValue(val: any): string {
    if (val === null || val === undefined) return '';

    // Handle array (e.g. multi-select)
    if (Array.isArray(val)) {
        return val.map(item => extractPodValue(item)).join(', ');
    }

    // Handle 'Both' mode object: { value: '...', rendered: '...' }
    if (typeof val === 'object' && val !== null) {
        return val.rendered || val.value || JSON.stringify(val);
    }

    return String(val);
}

// Helper to strip HTML tags
function stripHtml(html: any): string {
    if (typeof html !== 'string') return String(html || '');
    return html.replace(/<[^>]*>?/gm, '').trim();
}

function normalizeScholarship(post: any): WPScholarship {
    // 1. Handle Image: Check 'gambar' field first (from Pods), then fallback to standard WP featured media
    let imageSrc = post.gambar; // Direct URL from Pods

    // If 'gambar' is empty/null, try standard WP _embedded
    if (!imageSrc) {
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
        if (featuredMedia?.source_url) {
            const sizes = featuredMedia.media_details?.sizes;
            imageSrc = sizes?.large?.source_url || sizes?.medium_large?.source_url || sizes?.full?.source_url || featuredMedia.source_url;
        }
    }

    // Content Fallback: use deskripsi if content is empty
    const rawDesc = post.deskripsi || post.description || post.acf?.deskripsi;
    const finalContent = post.content?.rendered || post.content || rawDesc || '';
    const finalExcerpt = post.excerpt?.rendered || post.excerpt || (typeof rawDesc === 'string' ? stripHtml(rawDesc).slice(0, 150) + '...' : '');

    // Map Fields based on verified JSON structure
    const rawCountry = post.negara || post.country;
    const rawDegree = post.jenjang || post.degree;
    const rawDeadline = post.deadline;
    const rawStartDate = post.start_date;
    const rawUniversity = post.university || post.universitas;
    const rawType = post.jenis; // Contains HTML <p>..
    const rawFieldOfStudy = post.bidang || post.field_of_study;
    const rawBenefits = post.benefit || post.benefits; // Note: 'benefit' in JSON
    const rawAge = post.umur || post.age;
    const rawGpa = post.ipk || post.gpa;
    const rawEnglish = post.english_test;
    const rawDocuments = post.dokumen || post.documents;
    const rawOthers = post.lainnya || post.others;
    const rawApply = post.daftar || post.how_to_apply;

    // Helper to prioritize rendered value if object, or raw if string
    // But since we saw raw strings in JSON, extractPodValue handles simple strings too.
    // specific fix: Type needs stripping HTML

    return {
        id: post.id,
        slug: post.slug,
        title: post.title?.rendered || post.title || '',
        content: finalContent,
        excerpt: finalExcerpt,
        date: post.date,
        featuredImage: imageSrc ? {
            src: imageSrc,
            alt: post.title?.rendered || post.title || 'Scholarship Image'
        } : undefined,
        country: extractPodValue(rawCountry),
        degree: extractPodValue(rawDegree),
        deadline: extractPodValue(rawDeadline),
        startDate: extractPodValue(rawStartDate),
        university: extractPodValue(rawUniversity),
        type: stripHtml(extractPodValue(rawType)), // Fix: Strip HTML for type/badge
        fieldOfStudy: extractPodValue(rawFieldOfStudy),
        benefits: extractPodValue(rawBenefits),
        ageLimit: extractPodValue(rawAge),
        gpaRequirement: extractPodValue(rawGpa),
        englishTest: extractPodValue(rawEnglish),
        documents: extractPodValue(rawDocuments),
        others: extractPodValue(rawOthers),
        howToApply: extractPodValue(rawApply), // Likely HTML
        description: extractPodValue(rawDesc), // Likely HTML
        coverage: ''
    };
}

export async function getScholarships(page: number = 1, perPage: number = 10): Promise<WPScholarshipsResponse> {
    // Try 'beasiswa' endpoint
    const endpoint = `/wp/v2/beasiswa?_embed&page=${page}&per_page=${perPage}`;
    try {
        const { data, totalPages, totalPosts } = await wpFetchWithHeaders<any[]>(endpoint);
        return {
            scholarships: data.map(normalizeScholarship),
            totalPages,
            totalPosts
        };
    } catch (e) {
        console.warn(`Failed to fetch from ${endpoint}, checking 'beasiswas' fallback...`);
        // Fallback to 'beasiswas' (plural)
        const fallbackEndpoint = `/wp/v2/beasiswas?_embed&page=${page}&per_page=${perPage}`;
        const { data, totalPages, totalPosts } = await wpFetchWithHeaders<any[]>(fallbackEndpoint);
        return {
            scholarships: data.map(normalizeScholarship),
            totalPages,
            totalPosts
        };
    }
}

export async function getScholarshipBySlug(slug: string): Promise<WPScholarship | null> {
    const endpoint = `/wp/v2/beasiswa?_embed&slug=${slug}`;
    try {
        let rawPosts = await wpFetch<any[]>(endpoint);
        if (rawPosts.length === 0) {
            // Try plural endpoint
            const fallbackEndpoint = `/wp/v2/beasiswas?_embed&slug=${slug}`;
            rawPosts = await wpFetch<any[]>(fallbackEndpoint);
        }

        if (rawPosts.length === 0) return null;
        return normalizeScholarship(rawPosts[0]);
    } catch (e) {
        console.error("Error fetching scholarship by slug:", e);
        return null;
    }
}
