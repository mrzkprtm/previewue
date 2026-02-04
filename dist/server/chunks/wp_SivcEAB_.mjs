import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient("http://replace-with-your-wordpress-site.test/graphql");
const fetchWP = async (query, variables = {}) => {
  try {
    const data = await client.request(query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching from WordPress:", error);
    throw error;
  }
};

export { fetchWP as f };
