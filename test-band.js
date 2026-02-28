// Verify: Band = 1 + (accuracy × 8), rounded to nearest 0.5
const calculateBand = (correct, total) => {
    if (total === 0) return 0;
    const accuracy = correct / total;
    const raw = 1 + (accuracy * 8);
    return Math.round(raw * 2) / 2;
};

const cases = [
    { correct: 0, total: 0, label: "Not attempted" },
    { correct: 0, total: 8, label: "Grammar 0/8   (0%)" },
    { correct: 0, total: 21, label: "Reading  0/21 (0%)" },
    { correct: 1, total: 10, label: "Listening 1/10 (10%)" },
    { correct: 4, total: 10, label: "40%" },
    { correct: 5, total: 10, label: "50%" },
    { correct: 7, total: 10, label: "70%" },
    { correct: 9, total: 10, label: "90%" },
    { correct: 10, total: 10, label: "100%" },
];

for (const c of cases) {
    console.log(`${c.label.padEnd(28)} → Band ${calculateBand(c.correct, c.total)}`);
}

const L = calculateBand(1, 10);
const G = calculateBand(0, 8);
const R = calculateBand(0, 21);
const avg = (L + G + R) / 3;
const overall = Math.round(avg * 2) / 2;
console.log(`\nUser scenario: L=${L}, G=${G}, R=${R} → Overall=${overall}`);
