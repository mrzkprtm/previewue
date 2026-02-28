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

        // 1. Fetch correct answers and questions from Supabase for SAT
        const pretestRes = await fetch(
            `${SUPABASE_URL}/rest/v1/cms_pretests?nama_program=eq.SAT&deleted_at=is.null`,
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
        let verbalScore = { correct: 0, total: 0 };
        let mathScore = { correct: 0, total: 0 };

        const questionDataForAI: any[] = [];

        pretestData.forEach((section: any) => {
            const type = section.jenis_soal.toLowerCase(); // 'verbal' or 'math'
            section.questions.forEach((q: any, idx: number) => {
                const answerKey = `${section.id}_${idx}`;
                const userAnswer = answers[answerKey];
                const isCorrect = userAnswer === q.jawaban;

                const scoreObj = type === "verbal" ? verbalScore : mathScore;

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

        // Calculate Proportional SAT Scores 
        // Verbal: 200 - 800
        // Math: 200 - 800
        // Total: 400 - 1600
        const calculateSatSection = (correct: number, total: number): number => {
            if (total === 0) return 200; // Minimum score
            const accuracy = correct / total;
            const raw = 200 + (accuracy * 600);
            return Math.round(raw / 10) * 10; // Round to nearest 10
        };

        const verbalBand = calculateSatSection(verbalScore.correct, verbalScore.total);
        const mathBand = calculateSatSection(mathScore.correct, mathScore.total);
        const overallBand = verbalBand + mathBand;

        // 3. AI Analysis via Gemini
        let aiRecommendations = [];
        let aiSummary = "";
        let listeningStrengths: any[] = []; // Store verbal as listening for schema compatibility
        let listeningImprovements: any[] = [];
        let readingStrengths: any[] = [];
        let readingImprovements: any[] = [];
        let grammarStrengths: any[] = [];  // Store math as grammar for schema compatibility
        let grammarImprovements: any[] = [];

        if (GEMINI_API_KEY) {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

            const prompt = `
                Analyze the following SAT placement test results for a student.
                Results Summary:
                - Overall Score: ${overallBand} out of 1600
                - Verbal Section: ${verbalScore.correct}/${verbalScore.total} -> Score: ${verbalBand}
                - Math Section: ${mathScore.correct}/${mathScore.total} -> Score: ${mathBand}

                Detailed Question Data:
                ${JSON.stringify(questionDataForAI.slice(0, 30))} 

                Please provide:
                1. A brief "ai_analysis_summary".
                2. "recommendations": An array of 3 objects with { title, info, border }.
                3. Section specific arrays for the standard SAT sections (verbal_strengths, verbal_improvements, math_strengths, math_improvements). Max 2 items each.

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

                    // Map SAT to existing Supabase columns
                    listeningStrengths = aiData.verbal_strengths || aiData.verbal?.strengths || [];
                    listeningImprovements = aiData.verbal_improvements || aiData.verbal?.improvements || [];

                    grammarStrengths = aiData.math_strengths || aiData.math?.strengths || [];
                    grammarImprovements = aiData.math_improvements || aiData.math?.improvements || [];
                }
            } catch (err: any) {
                console.error("AI Analysis Error:", err);
            }
        } else {
            console.warn("GEMINI_API_KEY NOT FOUND in env. AI analysis skipped.");
        }

        // 4. Save to Supabase (Re-using IELTS columns for ease)
        const resultPayload = {
            registration_id: registrationId,
            overall_band: overallBand,
            listening_band: verbalBand, // Maps to Verbal Score
            listening_correct: verbalScore.correct,
            listening_total: verbalScore.total,
            listening_strengths: listeningStrengths,
            listening_improvements: listeningImprovements,
            reading_band: 0,
            reading_correct: 0,
            reading_total: 0,
            reading_strengths: readingStrengths,
            reading_improvements: readingImprovements,
            grammar_band: mathBand, // Maps to Math Score
            grammar_correct: mathScore.correct,
            grammar_total: mathScore.total,
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
