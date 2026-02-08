import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site?.toString() || "https://ultimateeducation.co.id";

    // Static pages
    const staticPages = [
        "",
        "/program",
        "/beasiswa",
        "/kontak",
        "/mitra",
        "/partnership",
        "/artikel",
    ];

    // Dynamic content fetching
    let postsXml = "";
    let categoriesXml = "";

    try {
        const { getPosts, getCategories } = await import("../lib/api/endpoints");

        // Fetch latest 100 posts
        const posts = await getPosts(1, 100);
        postsXml = posts
            .map(
                (post) => `
    <url>
      <loc>${baseUrl}/artikel/${post.slug}</loc>
      <lastmod>${post.date.split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
            )
            .join("");

        // Fetch categories
        const categories = await getCategories();
        categoriesXml = categories
            .map(
                (cat) => `
    <url>
      <loc>${baseUrl}/artikel/category/${cat.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>`
            )
            .join("");

    } catch (e) {
        console.error("Sitemap generation failed:", e);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
            .map(
                (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
            )
            .join("")}
  ${categoriesXml}
  ${postsXml}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
