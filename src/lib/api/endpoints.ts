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
    if (Array.isArray(val)) {
        return val.map(item => extractPodValue(item)).filter(Boolean).join(', ');
    }
    if (typeof val === 'object') {
        const renderedTop = typeof (val as any).rendered === 'string' ? (val as any).rendered : '';
        if (renderedTop && renderedTop.trim()) return renderedTop;
        const v = (val as any).value;
        if (typeof v === 'string' && v.trim()) return v;
        if (v && typeof v === 'object') {
            const renderedInner = typeof (v as any).rendered === 'string' ? (v as any).rendered : '';
            if (renderedInner && renderedInner.trim()) return renderedInner;
        }
        const mediaUrl = (val as any).source_url || (val as any).guid || (val as any).url;
        if (typeof mediaUrl === 'string' && mediaUrl.trim()) return mediaUrl;
        return '';
    }
    return String(val);
}

// Helper to strip HTML tags
function stripHtml(html: any): string {
    if (typeof html !== 'string') return String(html || '');
    return html.replace(/<[^>]*>?/gm, '').trim();
}

function pick(...vals: any[]) {
    for (const v of vals) {
        if (v === null || v === undefined) continue;
        if (typeof v === 'string' && v.trim().length > 0) return v;
        if (typeof v === 'number' && !Number.isNaN(v)) return String(v);
        if (typeof v === 'object' && Object.keys(v).length > 0) return v;
    }
    return '';
}

function normalizeScholarship(post: any): WPScholarship {
    let imageSrc = typeof post.gambar === 'string' ? post.gambar : '';
    if (!imageSrc && post.gambar && typeof post.gambar === 'object') {
        const g = post.gambar;
        if (typeof g.rendered === 'string' && g.rendered.trim()) {
            const extracted = extractImageFromContent(g.rendered) || (g.rendered.match(/^https?:\/\//) ? g.rendered : null);
            if (extracted) imageSrc = extracted;
        }
        if (!imageSrc && g.value) {
            const v = g.value;
            if (typeof v === 'string') {
                imageSrc = v;
            } else if (typeof v === 'object' && v !== null) {
                imageSrc = v.source_url || v.guid || v.url || v?.sizes?.large || v?.sizes?.medium_large || v?.sizes?.full || '';
            }
        }
    }
    if (!imageSrc) {
        const acfImg = pick(post.acf?.gambar, post.acf?.featured_image, post.acf?.image);
        if (acfImg) {
            if (typeof acfImg === 'string') imageSrc = acfImg;
            else imageSrc = acfImg?.url || acfImg?.source_url || acfImg?.sizes?.large || acfImg?.sizes?.medium_large || acfImg?.sizes?.full || '';
        }
    }
    if (!imageSrc) {
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
        if (featuredMedia?.source_url) {
            const sizes = featuredMedia.media_details?.sizes;
            imageSrc = sizes?.large?.source_url || sizes?.medium_large?.source_url || sizes?.full?.source_url || featuredMedia.source_url;
        }
    }

    const rawDesc = pick(post.deskripsi, post.description, post.acf?.deskripsi, post.acf?.description);
    const finalContent = post.content?.rendered || post.content || rawDesc || '';
    const finalExcerpt = post.excerpt?.rendered || post.excerpt || (typeof rawDesc === 'string' ? stripHtml(rawDesc).slice(0, 150) + '...' : '');

    const rawCountry = pick(post.negara, post.country, post.acf?.negara, post.acf?.country);
    const rawDegree = pick(post.jenjang, post.degree, post.acf?.jenjang, post.acf?.degree);
    const rawDeadline = pick(post.deadline, post.acf?.deadline);
    const rawStartDate = pick(post.start_date, post.acf?.start_date, post.acf?.startDate);
    const rawUniversity = pick(post.university, post.universitas, post.acf?.university, post.acf?.universitas);
    const rawType = pick(post.jenis, post.acf?.jenis);
    const rawFieldOfStudy = pick(post.bidang, post.field_of_study, post.acf?.bidang, post.acf?.field_of_study);
    const rawBenefits = pick(post.benefit, post.benefits, post.acf?.benefit, post.acf?.benefits);
    const rawAge = pick(post.umur, post.age, post.acf?.umur, post.acf?.age);
    const rawGpa = pick(post.ipk, post.gpa, post.acf?.ipk, post.acf?.gpa);
    const rawEnglish = pick(post.english_test, post.acf?.english_test);
    const rawDocuments = pick(post.dokumen, post.documents, post.acf?.dokumen, post.acf?.documents);
    const rawOthers = pick(post.lainnya, post.others, post.acf?.lainnya, post.acf?.others);
    const rawApply = pick(post.daftar, post.how_to_apply, post.acf?.daftar, post.acf?.how_to_apply);

    return {
        id: post.id,
        slug: post.slug,
        title: post.title?.rendered || post.title || '',
        content: finalContent,
        excerpt: finalExcerpt,
        date: post.date,
        featuredImage: imageSrc ? { src: imageSrc, alt: post.title?.rendered || post.title || 'Scholarship Image' } : undefined,
        country: extractPodValue(rawCountry),
        degree: extractPodValue(rawDegree),
        deadline: extractPodValue(rawDeadline),
        startDate: extractPodValue(rawStartDate),
        university: extractPodValue(rawUniversity),
        type: stripHtml(extractPodValue(rawType)),
        fieldOfStudy: extractPodValue(rawFieldOfStudy),
        benefits: extractPodValue(rawBenefits),
        ageLimit: extractPodValue(rawAge),
        gpaRequirement: extractPodValue(rawGpa),
        englishTest: extractPodValue(rawEnglish),
        documents: extractPodValue(rawDocuments),
        others: extractPodValue(rawOthers),
        howToApply: extractPodValue(rawApply),
        description: extractPodValue(rawDesc),
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
    const safeSlug = String(slug || '').trim().replace(/\/+$/, '');
    const endpoint = `/wp/v2/beasiswa?_embed&slug=${encodeURIComponent(safeSlug)}`;
    try {
        let rawPosts = await wpFetch<any[]>(endpoint);
        if (rawPosts.length === 0) {
            // Try plural endpoint
            const fallbackEndpoint = `/wp/v2/beasiswas?_embed&slug=${encodeURIComponent(safeSlug)}`;
            rawPosts = await wpFetch<any[]>(fallbackEndpoint);
        }

        if (rawPosts.length === 0) return null;
        return normalizeScholarship(rawPosts[0]);
    } catch (e) {
        console.error("Error fetching scholarship by slug:", e);
        return null;
    }
}
