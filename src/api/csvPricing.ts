// src/api/csvPricing.ts
// Utility to parse local CSV pricing table and map to tab structure
import fs from 'fs';
import path from 'path';

const CSV_PATH = path.resolve('src/api/pricing_table - pricing_table.csv.csv');

export function parsePricingCSV() {
  const csv = fs.readFileSync(CSV_PATH, 'utf-8');
  const [headerLine, ...lines] = csv.split(/\r?\n/).filter(Boolean);
  const headers = headerLine.split(',');
  return lines.map(line => {
    const cols = line.split(',');
    return Object.fromEntries(headers.map((h, i) => [h, cols[i]]));
  });
}

// Map a program row to tab structure for ProgramTabs
export function mapProgramToTabs(programRow) {
  // Helper for bundling price
  function bundlingLabel(val) {
    if (!val || val === '') return 'Tidak tersedia';
    if (val.toLowerCase().includes('to be informed') || val.toLowerCase().includes('tbi')) return 'Biaya akan diinformasikan kemudian';
    return `Rp${Number(val).toLocaleString('id-ID')}`;
  }
  return {
    'Group Class': {
      desc: 'Belajar intensif dalam kelompok kecil yang kondusif.',
      tiers: [
        { name: 'Bronze', price: programRow.bronzeg },
        { name: 'Silver', price: programRow.silverg }
      ]
    },
    'Private Class': {
      desc: 'Belajar 1-on-1 dengan mentor profesional.',
      tiers: [
        { name: 'Silver', price: programRow.silver },
        { name: 'Gold', price: programRow.gold },
        { name: 'Premium', price: programRow.premium }
      ]
    },
    'Custom Class': {
      desc: 'Rancang program belajarmu sendiri.',
      options: [
        { name: 'Per Sesi', price: programRow.persesi },
        { name: '3 Sesi Local', price: programRow.tigasesil },
        { name: '3 Sesi Native', price: programRow.tigasesin }
      ]
    },
    'Bundling Class': {
      desc: 'Paket hemat untuk persiapan menyeluruh. Gabungan materi utama dengan bundling test.',
      price: bundlingLabel(programRow.bundling)
    }
  };
}
