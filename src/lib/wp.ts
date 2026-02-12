import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(import.meta.env.PUBLIC_WP_API_URL);

export const fetchWP = async (query: string, variables: Record<string, any> = {}) => {
  try {
    const data = await client.request(query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching from WordPress:", error);
    throw error;
  }
};
export const WP_BASE = import.meta.env.PUBLIC_WP_BASE_URL; 
// contoh: https://staging-u.ultimateducation.co.id

export async function wpGet<T>(path: string): Promise<T> {
  const url = `${WP_BASE}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WP REST error ${res.status}: ${url}`);
  return res.json() as Promise<T>;
}
