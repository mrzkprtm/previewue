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
