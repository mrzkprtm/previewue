import type { APIRoute } from "astro";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { registrationId, answers } = body;

        if (!registrationId || !answers) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const SUPABASE_URL = import.meta.env.SUPABASE_URL;
        const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;
        const GEMINI_API_KEY = import.meta.env.GEMINI_API_KEY;

        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
            return new Response(JSON.stringify({ error: "Database configuration missing" }), { status: 500 });
        }

        // 0. Check if results already exist for this registration to prevent double-submission
        const checkRes = await fetch(
            `${SUPABASE_URL}/rest/v1/placement_test_results?registration_id=eq.${registrationId}&select=id`,
            {
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                },
            }
        );

        if (checkRes.ok) {
            const existing = await checkRes.json();
            if (existing && existing.length > 0) {
                return new Response(JSON.stringify({
                    error: "Submission already exists for this registration."
                }), { status: 400 });
            }
        }

        // 1. Fetch correct answers and questions from Supabase
        const pretestRes = await fetch(
            `${SUPABASE_URL}/rest/v1/cms_pretests?nama_program=eq.IELTS&deleted_at=is.null`,
            {
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                },
            }
        );

        if (!pretestRes.ok) {
            throw new Error("Failed to fetch pretest data");
        }

        const pretestData = await pretestRes.json();

        // 2. Scoring Logic
        let listeningScore = { correct: 0, total: 0 };
        let grammarScore = { correct: 0, total: 0 };
        let readingScore = { correct: 0, total: 0 };

        const questionDataForAI: any[] = [];

        pretestData.forEach((section: any) => {
            const type = section.jenis_soal.toLowerCase();
            section.questions.forEach((q: any, idx: number) => {
                const answerKey = `${section.id}_${idx}`;
                const userAnswer = answers[answerKey];
                const isCorrect = userAnswer === q.jawaban;

                const scoreObj = type === "listening" ? listeningScore : type === "grammar" ? grammarScore : readingScore;
                scoreObj.total++;
                if (isCorrect) scoreObj.correct++;

                questionDataForAI.push({
                    type,
                    question: q.soal,
                    userAnswer,
                    correctAnswer: q.jawaban,
                    isCorrect
                });
            });
        });

        // Calculate Band Scores (Linear Placement Scoring)
        // Formula: Band = 1 + (accuracy × 8)
        // - accuracy 0%   → Band 1.0 (IELTS minimum)
        // - accuracy 100% → Band 9.0 (IELTS maximum)
        // - Section not attempted at all → returns 0 (not counted)
        // Rounded to nearest 0.5 per IELTS convention.
        const calculateBand = (correct: number, total: number): number => {
            if (total === 0) return 0; // Section skipped entirely
            const accuracy = correct / total;
            const raw = 1 + (accuracy * 8);
            // Round to nearest 0.5
            return Math.round(raw * 2) / 2;
        };

        const listeningBand = calculateBand(listeningScore.correct, listeningScore.total);
        const grammarBand = calculateBand(grammarScore.correct, grammarScore.total);
        const readingBand = calculateBand(readingScore.correct, readingScore.total);

        // IELTS rounding: average to the nearest half-band
        const avg = (listeningBand + grammarBand + readingBand) / 3;
        const overallBand = Math.round(avg * 2) / 2;

        // 3. AI Analysis via Gemini
        let aiRecommendations = [];
        let aiSummary = "";
        let listeningStrengths = [];
        let listeningImprovements = [];
        let readingStrengths = [];
        let readingImprovements = [];
        let grammarStrengths = [];
        let grammarImprovements = [];

        if (GEMINI_API_KEY) {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

            const prompt = `
                Analyze the following IELTS placement test results for a student.
                Results Summary:
                - Overall Band: ${overallBand}
                - Listening: ${listeningScore.correct}/${listeningScore.total} (Band ${listeningBand})
                - Grammar: ${grammarScore.correct}/${grammarScore.total} (Band ${grammarBand})
                - Reading: ${readingScore.correct}/${readingScore.total} (Band ${readingBand})

                Detailed Question Data:
                ${JSON.stringify(questionDataForAI.slice(0, 30))} 

                Please provide:
                1. A brief "ai_analysis_summary".
                2. "recommendations": An array of 3 objects with { title, info, border }.
                3. Section specific arrays (listening_strengths, listening_improvements, reading_strengths, reading_improvements, grammar_strengths, grammar_improvements). Max 2 items each.

                IMPORTANT:
                - Tone: Casual and polite ("santai dan sopan"). 
                - Language: Indonesian (Bahasa Indonesia).
                - Use "Kamu" to refer to the student (DO NOT use "Sobi").
                - Border values: strictly "border-purple-400", "border-green-400", "border-blue-400".
                - Return the response STRICTLY as a valid JSON object.
            `;

            try {
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const rawText = response.text();

                // More robust JSON extraction
                const jsonMatch = rawText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const aiData = JSON.parse(jsonMatch[0]);

                    aiSummary = aiData.ai_analysis_summary || "";
                    aiRecommendations = aiData.recommendations || [];

                    // Handle both flat keys and nested structures
                    listeningStrengths = aiData.listening_strengths || aiData.listening?.strengths || [];
                    listeningImprovements = aiData.listening_improvements || aiData.listening?.improvements || [];
                    readingStrengths = aiData.reading_strengths || aiData.reading?.strengths || [];
                    readingImprovements = aiData.reading_improvements || aiData.reading?.improvements || [];
                    grammarStrengths = aiData.grammar_strengths || aiData.grammar?.strengths || [];
                    grammarImprovements = aiData.grammar_improvements || aiData.grammar?.improvements || [];
                }
            } catch (err: any) {
                console.error("AI Analysis Error:", err);
            }
        } else {
            console.warn("GEMINI_API_KEY NOT FOUND in env. AI analysis skipped.");
        }

        // 4. Save to Supabase
        const resultPayload = {
            registration_id: registrationId,
            overall_band: overallBand,
            listening_band: listeningBand,
            listening_correct: listeningScore.correct,
            listening_total: listeningScore.total,
            listening_strengths: listeningStrengths,
            listening_improvements: listeningImprovements,
            reading_band: readingBand,
            reading_correct: readingScore.correct,
            reading_total: readingScore.total,
            reading_strengths: readingStrengths,
            reading_improvements: readingImprovements,
            grammar_band: grammarBand,
            grammar_correct: grammarScore.correct,
            grammar_total: grammarScore.total,
            grammar_strengths: grammarStrengths,
            grammar_improvements: grammarImprovements,
            recommendations: aiRecommendations,
            ai_analysis_summary: aiSummary
        };

        const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/placement_test_results`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                Prefer: "return=minimal"
            },
            body: JSON.stringify(resultPayload)
        });

        if (!insertRes.ok) {
            const errText = await insertRes.text();
            console.error("Supabase Save Error:", errText);
            throw new Error("Failed to save results to database");
        }

        return new Response(JSON.stringify({ success: true, registrationId }), { status: 200 });

    } catch (error: any) {
        console.error("Submit Test API Error:", error);
        return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { status: 500 });
    }
};
