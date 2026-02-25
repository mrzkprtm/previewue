# SEO Implementation Plan for Ultimate Education (Astro + WordPress Headless)

## 1. SEO Architecture Design

### Title Tag Strategy
- **Homepage:** `Ultimate Education - Konsultan Pendidikan Luar Negeri & Persiapan Tes`
- **Program List:** `Program Kursus Persiapan Tes & Bimbingan Beasiswa - Ultimate Education`
- **Program Detail:** `Kursus {Program Name} {City/Area} - {USP} | Ultimate Education`
  - *Example:* `Kursus IELTS Jakarta - Garansi Skor 7.0+ | Ultimate Education`
- **Article Detail:** `{Article Title} - Ultimate Education`
- **Contact:** `Hubungi Kami - Konsultasi Gratis Pendidikan Luar Negeri`

### Meta Description Patterns
- **Homepage:** `Konsultan pendidikan luar negeri terpercaya di Indonesia. Bimbingan persiapan tes IELTS, SAT, GRE, GMAT, dan beasiswa dengan mentor lulusan kampus top dunia.`
- **Program Detail:** `Daftar kursus {Program Name} di {City}. Dapatkan strategi terbaik, latihan soal terbaru, dan garansi skor. Siap wujudkan mimpi kuliah di luar negeri bersama kami.`

### Canonical URL Rules
- Always use absolute URLs (`https://www.ultimateducation.co.id/...`).
- Self-referencing canonicals on all pages.
- Handle query parameters (e.g., search, filters) by pointing back to the main page URL unless the filter changes content significantly and is SEO-targeted.

### Robots Directives
- **Default:** `index, follow`
- **Search Results:** `noindex, follow`
- **Admin/CMS:** `noindex, nofollow`
- **404 Pages:** `noindex, follow`

### Open Graph & Twitter Cards
- **OG Type:** `website` (Home/Programs), `article` (Blog posts).
- **Images:** Use `1200x630` optimized images. Fallback to brand cover if specific image is missing.
- **Twitter Card:** `summary_large_image`.

## 2. Local SEO Implementation (JSON-LD)

### Schema Types to Implement
1.  **Organization:** Global brand info, logo, social links.
2.  **LocalBusiness:** Specifics for Jakarta and Bandung offices (multi-location).
3.  **EducationalOrganization:** Specific for the education niche.
4.  **Course:** For individual program pages (IELTS, SAT, etc.).
5.  **BreadcrumbList:** For site navigation hierarchy.
6.  **WebSite:** Sitelinks Search Box.

### Implementation Strategy
- Create a reusable `Schema.astro` component.
- Inject JSON-LD in the `<head>` or body.
- Use data from `SEO_PROFILE.txt` and `programs.ts`.

## 3. Program Page SEO

### Keyword Targeting
- **Primary:** `Kursus {Program} {City}`, `Les {Program} {City}`, `Persiapan {Program}`.
- **Secondary:** `Biaya kursus {Program}`, `Jadwal tes {Program}`, `Tips {Program}`.

### Content Structure
- **H1:** Keyword-rich title.
- **H2/H3:** Breakdown of curriculum, benefits, pricing, and FAQ.
- **FAQ Section:** Mark up with `FAQPage` schema.
- **Internal Linking:** Link to related articles and other relevant programs.

## 4. Core Web Vitals Optimization

### Strategies
- **LCP (Largest Contentful Paint):**
  - Preload hero images using `astro:assets` (`loading="eager"`).
  - Use `fetchpriority="high"` for LCP elements.
  - Critical CSS inlining (Vite handles this mostly).
- **CLS (Cumulative Layout Shift):**
  - Explicit width/height on all images/videos.
  - Reserve space for dynamic content (ads, widgets).
  - Font loading strategies (`font-display: swap`).
- **FID/INP (Interaction to Next Paint):**
  - Minimize main thread work.
  - Offload third-party scripts (GTM, Chat widgets) to Web Workers using **Partytown**.
  - Hydrate components only when visible (`client:visible`).

## 5. Sitemap & Indexing

### Strategy
- **Tools:** `@astrojs/sitemap`.
- **Inclusions:**
  - Static pages (Home, About, Contact).
  - Dynamic Program pages (`/program/[slug]`).
  - Dynamic Blog pages (`/artikel/[slug]`).
- **Exclusions:**
  - Search result pages.
  - Pagination pages (if canonical points to view-all or page 1, though usually pagination is indexed).
  - Utility pages (404, Success).
- **Change Frequency:**
  - Programs: `weekly` or `monthly`.
  - Blog: `weekly`.
  - Home: `daily`.

## 6. URL Structure Optimization

### Hierarchy
- **Home:** `https://www.ultimateducation.co.id/`
- **Programs:**
  - List: `/program/`
  - Detail: `/program/ielts`, `/program/sat` (Keep it flat and clean).
- **Blog:**
  - List: `/artikel/`
  - Detail: `/artikel/tips-belajar-ielts-2025` (Descriptive slugs).
- **Locations (Future):**
  - `/kursus-ielts-jakarta`, `/kursus-ielts-bandung` (Landing pages for specific local SEO).

## 7. Astro Implementation Plan

### Components to Build/Refactor
1.  **`SEO.astro`:** A comprehensive head component handling Meta, OG, Twitter, and Canonical.
2.  **`Schema.astro`:** A component to generate JSON-LD based on page type.
3.  **`Breadcrumbs.astro`:** A navigational component with Schema markup.
4.  **`Layout.astro`:** Integrate `SEO` and `Schema` components globally.

### Code Adjustments
- Refactor `src/layouts/Layout.astro` to use the new `SEO.astro`.
- Update `src/pages/program/[slug].astro` to pass specific SEO props.
- Implement Partytown for Google Ads and Analytics.

## 8. Cloud & Hosting Optimization

### Vercel & Cloudflare
- **Vercel:**
  - Use `Analytics` and `Speed Insights` (already in place).
  - Ensure `Cache-Control` headers are set for static assets (hashed files: `public, max-age=31536000, immutable`).
- **Cloudflare:**
  - Use as DNS and CDN.
  - Enable **Auto Minify** (HTML, CSS, JS).
  - **Brotli** compression.
  - **Rocket Loader** (Test carefully with hydration).
  - **Rules:** Cache everything for `/assets/*` and `/images/*`.

## Actionable Steps
1.  **Refactor SEO Component:** Create a robust `SEO.astro` in `src/components/common`.
2.  **Create Schema Generators:** Helper functions to build JSON-LD objects.
3.  **Implement Partytown:** Move GTM/Analytics scripts to web workers.
4.  **Optimize Images:** Ensure all images use `astro:assets` or have proper dimensions.
5.  **Generate Sitemap:** Configure `@astrojs/sitemap` properly for dynamic routes.
6.  **Verify & Test:** Use Lighthouse and Google Rich Results Test.
