import { defineMiddleware } from "astro:middleware";

const LEGACY_REDIRECTS = new Map<string, string>([
    ["/contact", "/kontak"],
    ["/home", "/"],
    ["/program-v02", "/program"],
    ["/company", "/about"],
    ["/perusahaan", "/about"],
    ["/sales", "/partnership"],
    ["/sales-partner", "/partnership"],
    ["/kursus-persiapan-gmat", "/program/gmat"],
    ["/kursus-persiapan-ielts", "/program/ielts"],
    ["/kursus-persiapan-utbk", "/program/utbk"],
    ["/kursus-persiapan-toefl", "/program/toefl"],
    ["/kursus-persiapan-gre", "/program/gre"],
    ["/kursus-persiapan-sat", "/program/sat"],
    ["/ged-preparation", "/program/ged"],
    ["/persiapan-ged", "/program/ged"],
    ["/persiapan-ged-01", "/program/ged"],
    ["/toeic-preparation", "/program/toeic"],
    ["/persiapan-toeic", "/program/toeic"],
    ["/act-preparation", "/program/act"],
    ["/persiapan-act", "/program/act"],
    ["/persiapan-act-01", "/program/act"],
    ["/igcse-preparation", "/program/igcse"],
    ["/persiapan-igcse", "/program/igcse"],
    ["/persiapan-pte", "/program/pte"],
    ["/tes-tesdaf", "/program/testdaf"],
    ["/testdaf-course", "/program/testdaf"],
    ["/tes-delf", "/program/delf"],
    ["/delf-course-01", "/program/delf"],
    ["/tes-topik", "/program/topik"],
    ["/topik-course", "/program/topik"],
    ["/tes-hsk", "/program/hsk"],
    ["/tes-hsk-01", "/program/hsk"],
    ["/hsk-test", "/program/hsk"],
    ["/tes-jlpt", "/program/jlpt"],
    ["/tes-bipa", "/program/bipa"],
    ["/ausbildung-ver-2-0", "/program/ausbildung"],
    ["/ultimate-scholarship", "/program/scholarship"],
    ["/persiapan-lsat", "/program/lsat"],
    ["/persiapan-o-level", "/program/o-level"],
    ["/as-level-preparation", "/program/as-level"],
    ["/persiapan-as-level", "/program/as-level"],
    ["/persiapan-a-level", "/program/a-level"],
    ["/business-english", "/program/business-english"],
    ["/business-english-2", "/program/business-english"],
    ["/business-english-course", "/program/business-english"],
    ["/generalenglish", "/program/general-english"],
    ["/general-english", "/program/general-english"],
    ["/general-english-course", "/program/general-english"],
    ["/gre-preparation", "/program/gre"],
    ["/sat-preparation", "/program/sat"],
    ["/ielts-preparation", "/program/ielts"],
]);

const ARTICLE_SLUG_EXCLUSIONS = new Set([
    "about",
    "artikel",
    "articles",
    "api",
    "beasiswa",
    "kontak",
    "mitra",
    "partnership",
    "program",
    "promo",
    "robots.txt",
    "shop",
    "checkout",
    "customer-dashboard",
    "sitemap.xml",
]);

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
    if (url.pathname === "/wp-admin" || url.pathname.startsWith("/wp-admin/")) {
        return redirect("https://cms.ultimateducation.co.id/wp-login.php", 301);
    }

    const normalizedPath = url.pathname !== "/" ? url.pathname.replace(/\/+$/g, "") : "/";
    const legacyRedirect = LEGACY_REDIRECTS.get(normalizedPath);
    if (legacyRedirect) {
        return redirect(legacyRedirect, 301);
    }

    const segments = normalizedPath.split("/").filter(Boolean);

    if (segments.length === 1) {
        const slug = segments[0];
        if (!ARTICLE_SLUG_EXCLUSIONS.has(slug) && !slug.startsWith("_") && !slug.includes(".")) {
            return redirect(`/artikel/${slug}`, 301);
        }
    }

    return next();
});
