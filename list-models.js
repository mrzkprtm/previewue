
import fs from "node:fs";

const env = fs.readFileSync(".env", "utf8");
const match = env.match(/GEMINI_API_KEY=["']?([^"'\s]+)["']?/);
const API_KEY = match ? match[1] : null;

if (!API_KEY) {
    console.error("GEMINI_API_KEY not found in .env");
    process.exit(1);
}

async function run() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Available models:");
        if (data.models) {
            data.models.forEach(m => console.log(m.name));
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    } catch (err) {
        console.error("Error listing models:", err);
    }
}

run();
