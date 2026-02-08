/**
 * OWNER: DYNAMIC (Dev B)
 * Base fetch wrapper for WordPress REST API.
 */

const API_URL = import.meta.env.WP_API_URL;

export class WPError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'WPError';
    }
}

export async function wpFetch<T>(endpoint: string): Promise<T> {
    if (!API_URL) {
        throw new Error('WP_API_URL is not defined in .env');
    }

    const res = await fetch(`${API_URL}${endpoint}`);

    if (!res.ok) {
        throw new WPError(res.status, `Failed to fetch ${endpoint}: ${res.statusText}`);
    }

    return res.json();
}

export interface FetchWithHeadersResult<T> {
    data: T;
    totalPages: number;
    totalPosts: number;
}

export async function wpFetchWithHeaders<T>(endpoint: string): Promise<FetchWithHeadersResult<T>> {
    if (!API_URL) {
        throw new Error('WP_API_URL is not defined in .env');
    }

    const res = await fetch(`${API_URL}${endpoint}`);

    if (!res.ok) {
        throw new WPError(res.status, `Failed to fetch ${endpoint}: ${res.statusText}`);
    }

    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
    const totalPosts = parseInt(res.headers.get('X-WP-Total') || '0', 10);

    const data = await res.json();

    return {
        data,
        totalPages,
        totalPosts
    };
}
