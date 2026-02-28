export const MAX_URLS_PER_SITEMAP = 200;

const xmlEscape = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

export const normalizeBaseUrl = (value: string) => value.replace(/\/$/, "");

export const toLastmod = (value?: string | null) => {
    if (!value) return undefined;
    return String(value).split("T")[0];
};

export const buildUrlSet = (urls: { loc: string; lastmod?: string }[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (url) => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>${url.lastmod ? `\n    <lastmod>${xmlEscape(url.lastmod)}</lastmod>` : ""}
  </url>`
    )
    .join("\n")}
</urlset>`;

export const buildSitemapIndex = (sitemaps: { loc: string; lastmod?: string }[]) => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
    .map(
        (item) => `  <sitemap>
    <loc>${xmlEscape(item.loc)}</loc>${item.lastmod ? `\n    <lastmod>${xmlEscape(item.lastmod)}</lastmod>` : ""}
  </sitemap>`
    )
    .join("\n")}
</sitemapindex>`;

export const chunkArray = <T,>(items: T[], size: number) => {
    const chunks: T[][] = [];
    for (let i = 0; i < items.length; i += size) {
        chunks.push(items.slice(i, i + size));
    }
    return chunks;
};
