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
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
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
