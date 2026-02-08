/**
 * OWNER: DYNAMIC (Dev B)
 * Contract data untuk WordPress objects.
 */

export interface WPPostRaw {
    id: number;
    date: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
            media_details?: {
                sizes?: {
                    medium_large?: { source_url: string };
                    large?: { source_url: string };
                    full?: { source_url: string };
                };
            };
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
        'author'?: Array<{
            id: number;
            name: string;
            avatar_urls?: {
                '96'?: string;
                '48'?: string;
            };
        }>;
    };
}

// Normalized Internal Type
export interface WPPost {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    featuredImage?: {
        src: string;
        alt: string;
    };
    author?: {
        name: string;
        avatar?: string;
    };
    categories: Array<{
        name: string;
        slug: string;
    }>;
}

export interface WPCategory {
    id: number;
    name: string;
    slug: string;
    count: number;
}

// API Response with pagination info
export interface WPPostsResponse {
    posts: WPPost[];
    totalPages: number;
    totalPosts: number;
}

export interface WPAuthor {
    id: number;
    name: string;
    slug: string;
    description?: string;
    avatar_urls?: Record<string, string>;
}

export interface WPScholarship {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    featuredImage?: {
        src: string;
        alt: string;
    };
    // Custom Fields (Pods)
    country?: string; // negara
    degree?: string; // jenjang
    deadline?: string; // deadline
    startDate?: string; // start_date
    university?: string; // university (Plain Text)
    coverage?: string; // (mapped from benefit? or keep custom) - User image shows 'benefit' as WYSIWYG. Let's keep coverage/benefit separate or map benefit.
    // New fields from user image
    type?: string; // jenis
    fieldOfStudy?: string; // bidang
    benefits?: string; // benefit (WYSIWYG)
    ageLimit?: string; // umur
    gpaRequirement?: string; // ipk
    englishTest?: string; // english_test (WYSIWYG)
    documents?: string; // dokumen (WYSIWYG)
    others?: string; // lainnya (WYSIWYG)
    howToApply?: string; // daftar (WYSIWYG) - Link or text?
    description?: string; // deskripsi (WYSIWYG)
}

export interface WPScholarshipsResponse {
    scholarships: WPScholarship[];
    totalPages: number;
    totalPosts: number;
}

