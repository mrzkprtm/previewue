import type { APIRoute } from "astro";
import pendaftaranHtml from "../../pendaftaran.html?raw";

export const GET: APIRoute = async () => {
    return new Response(pendaftaranHtml, {
        headers: { "content-type": "text/html; charset=utf-8" },
        status: 200,
    });
};
