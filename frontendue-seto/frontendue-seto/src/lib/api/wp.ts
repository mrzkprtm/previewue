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
