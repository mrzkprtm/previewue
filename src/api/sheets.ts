// src/api/sheets.ts
// Utility to fetch program pricing/options from Google Sheets (public JSON)

const SHEET_ID = '1pnqAl6cBEawMXDuqM2dICZ6ZCFXhUxI3PGf67hQ3lbI';
const SHEET_NAME = 'Sheet1'; // Ganti sesuai nama sheet jika berbeda

export async function fetchProgramPricing() {
  // Google Sheets public JSON endpoint (v4 API)
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?alt=json&key=${import.meta.env.PUBLIC_GOOGLE_SHEETS_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch pricing data');
  const data = await res.json();
  // data.values: [ [header], [row1], [row2], ... ]
  const [header, ...rows] = data.values;
  return rows.map(row => Object.fromEntries(header.map((h, i) => [h, row[i]])));
}
