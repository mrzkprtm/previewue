export const prerender = false;

import type { APIRoute } from "astro";

// Sanitize: strip HTML tags and limit length
function sanitize(value: unknown, maxLen = 255): string {
    if (typeof value !== "string") return "";
    return value
        .replace(/[<>\/]/g, "")
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
        .trim()
        .slice(0, maxLen);
}

// Only allow digits and dashes and plus in phone numbers
function sanitizePhone(value: unknown, maxLen = 20): string {
    if (typeof value !== "string") return "";
    return value.replace(/[^0-9\-\+\s]/g, "").trim().slice(0, maxLen);
}

export const POST: APIRoute = async ({ request }) => {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return new Response(JSON.stringify({ error: "Invalid content type" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    // --- Sanitize & validate ---
    const name = sanitize(body.name, 200);
    const email = sanitize(body.email, 150);
    const phone = sanitizePhone(body.phone);
    const atmosphere = sanitize(body.atmosphere, 50);
    const study_plan = sanitize(body.study_plan, 50);
    const source = sanitize(body.source, 50);
    const test_type = sanitize(body.test_type, 50);
    const privacy_accepted = body.privacy_accepted === true;

    if (!name || !email || !phone || !atmosphere || !study_plan || !source) {
        return new Response(JSON.stringify({ error: "Semua isian wajib diisi." }), {
            status: 422,
            headers: { "Content-Type": "application/json" },
        });
    }

    if (!privacy_accepted) {
        return new Response(
            JSON.stringify({ error: "Anda harus menyetujui kebijakan privasi sebelum melanjutkan." }),
            { status: 422, headers: { "Content-Type": "application/json" } }
        );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return new Response(JSON.stringify({ error: "Format email tidak valid." }), {
            status: 422,
            headers: { "Content-Type": "application/json" },
        });
    }


    const SUPABASE_URL = import.meta.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.error("Missing Supabase configuration");
        return new Response(JSON.stringify({ error: "Server configuration error." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    const insertPayload = {
        name,
        email,
        phone,
        atmosphere,
        study_plan,
        source,
        test_type,
        privacy_accepted,
    };

    let res;
    try {
        res = await fetch(`${SUPABASE_URL}/rest/v1/placement_test_registrations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                Prefer: "return=representation",
            },
            body: JSON.stringify(insertPayload),
        });
    } catch (e: any) {
        console.error("Supabase connection error:", e);
        return new Response(JSON.stringify({ error: "Gagal terhubung ke database. Silakan coba lagi nanti." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    if (!res.ok) {
        let detail = "";
        try {
            const err = await res.json();
            detail = err?.message || err?.error || JSON.stringify(err);
            console.error("Supabase insert error response:", err);
        } catch {
            detail = await res.text();
            console.error("Unknown Supabase insert error. Status:", res.status, "Raw body:", detail);
        }
        return new Response(
            JSON.stringify({ error: `Gagal menyimpan data: ${detail || 'Unknown error'}` }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

    const resultData = await res.json();
    const createdId = resultData[0]?.id;

    return new Response(JSON.stringify({
        success: true,
        registration_id: createdId,
        redirect_url: test_type?.toLowerCase() === 'sat' ? `/placement-test/sat-free-test?registrationId=${createdId}` : `/placement-test/ielts-free-test?registrationId=${createdId}`
    }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
};
