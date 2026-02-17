import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site?.toString() || "https://ultimateducation.co.id";

    const staticPages = [
        "",
        "/about",
        "/kontak",
        "/mitra",
        "/partnership",
        "/promo",
        "/program",
        "/beasiswa",
        "/artikel",
        "/articles",
        "/programschedule",
    ];

    const buildUrl = (loc: string, changefreq: string, priority: string, lastmod?: string) => `
  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

    let postsXml = "";
    let categoriesXml = "";
    let authorsXml = "";
    let programsXml = "";
    let scholarshipsXml = "";

    try {
        const { getPostsWithPagination, getCategories, getAuthors, getScholarships } = await import("../lib/api/endpoints");
        const { programs } = await import("../data/programs");

        const posts: { slug: string; date?: string }[] = [];
        const firstPosts = await getPostsWithPagination(1, 100);
        posts.push(...firstPosts.posts);
        if (firstPosts.totalPages > 1) {
            for (let page = 2; page <= firstPosts.totalPages; page += 1) {
                const nextPosts = await getPostsWithPagination(page, 100);
                posts.push(...nextPosts.posts);
            }
        }

        postsXml = posts
            .map((post) => {
                const lastmod = post.date ? post.date.split("T")[0] : undefined;
                return buildUrl(`${baseUrl}/artikel/${post.slug}`, "weekly", "0.8", lastmod);
            })
            .join("");

        const categories = await getCategories();
        categoriesXml = categories
            .map((cat) => buildUrl(`${baseUrl}/artikel/category/${cat.slug}`, "weekly", "0.6"))
            .join("");

        const authors = await getAuthors();
        authorsXml = authors
            .map((author) => buildUrl(`${baseUrl}/artikel/author/${author.slug}`, "monthly", "0.4"))
            .join("");

        programsXml = programs
            .map((program) => buildUrl(`${baseUrl}/program/${program.slug}`, "monthly", "0.7"))
            .join("");

        const scholarships: { slug: string; date?: string }[] = [];
        const firstScholarships = await getScholarships(1, 100);
        scholarships.push(...firstScholarships.scholarships);
        if (firstScholarships.totalPages > 1) {
            for (let page = 2; page <= firstScholarships.totalPages; page += 1) {
                const nextScholarships = await getScholarships(page, 100);
                scholarships.push(...nextScholarships.scholarships);
            }
        }

        scholarshipsXml = scholarships
            .map((scholarship) => {
                const lastmod = scholarship.date ? String(scholarship.date).split("T")[0] : undefined;
                return buildUrl(`${baseUrl}/beasiswa/${scholarship.slug}`, "weekly", "0.7", lastmod);
            })
            .join("");
    } catch (e) {
        console.error("Sitemap generation failed:", e);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
            .map((path) => buildUrl(`${baseUrl}${path}`, "monthly", path === "" ? "1.0" : "0.8"))
            .join("")}
  ${programsXml}
  ${categoriesXml}
  ${authorsXml}
  ${postsXml}
  ${scholarshipsXml}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
