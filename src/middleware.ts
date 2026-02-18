import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
    if (url.pathname === "/wp-admin" || url.pathname.startsWith("/wp-admin/")) {
        return redirect("https://cms.ultimateducation.co.id/wp-login.php", 301);
    }

    return next();
});
