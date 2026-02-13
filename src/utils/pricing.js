export const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR1V4FCqLd08TiFKMf078u8f7YJxICIa9QVZHOoDCI2W15J31z6iyWj1XrulzrdFxD1i84gDRrUvanj/pub?output=csv";
export const WA_NUMBER = "6283812310368";

// Static online prices for specific programs (from group.html)
export const ONLINE_PRICES = {
    'ielts': { bronzeg: 1990000, silverg: 2300000 },
    'sat': { bronzeg: 4600000, silverg: 5000000 },
    'gmat': { bronzeg: 4600000, silverg: 5000000 },
    'gre': { bronzeg: 4600000, silverg: 5000000 },
};

// Fallback subjects for Private programs (from private.html)
export const SUBJECTS_FALLBACK = {
    igcse: ["Math", "Physics", "Chemistry", "Biology", "Combined Science", "Economy", "Accounting", "Business English", "English"],
    alevel: ["Science", "Humanities", "Social Sciences", "Languages", "Arts and Design"],
    olevel: ["Languages", "Math", "Science", "Social Sciences", "Computer Sciences", "Business", "Arts and Design"]
};

/**
 * Parsers a CSV string into an array of arrays.
 */
function parseCSV(text) {
    const rows = [];
    let f = '', r = [], q = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (q) {
            if (c === '\"') {
                if (text[i + 1] === '\"') { f += '\"'; i++; } else q = false;
            } else f += c;
        } else {
            if (c === '\"') q = true;
            else if (c === ',') { r.push(f); f = ''; }
            else if (c === '\n') { r.push(f); rows.push(r); r = []; f = ''; }
            else if (c !== '\r') f += c;
        }
    }
    if (f.length || r.length) { r.push(f); rows.push(r); }
    return rows;
}

const headerMap = {
    program: ['program', 'group'],
    bronzeg: ['bronzeg', 'bronze_g', 'group_bronze', 'bronze'],
    silverg: ['silverg', 'silver_g', 'group_silver', 'silverg'],
    silver: ['silver', 'p_silver', 'private silver', 'privatesilver'],
    gold: ['gold', 'p_gold'],
    premium: ['premium', 'p_premium'],
    persesi: ['persesi', 'per_sesi', 'per sesi', 'per-session', 'per_session'],
    bundling: ['bundling', 'bundle', 'bundling_test', 'bundlingtes'],
    sesisilver: ['sesisilver', 'sesi_silver', 'sesi silver'],
    sesigold: ['sesigold', 'sesi_gold', 'sesi gold'],
    sesipremium: ['sesipremium', 'sesi_premium', 'sesi premium'],
    garansi: ['garansi', 'garansi_skor', 'guarantee'],
    igcse: ['igcse'],
    alevel: ['alevel', 'a-level', 'a level'],
    olevel: ['olevel', 'o-level', 'o level'],
    tigasesil: ['tigasesil', 'tigasesi_l', '3sesi_local', 'local3'],
    tigasesin: ['tigasesin', 'tigasesi_n', '3sesi_native', 'native3']
};

const toKey = s => (s || '').toString().trim().toLowerCase();

function mapHeaders(hdr) {
    const H = hdr.map(toKey);
    const m = {};
    for (const k in headerMap) {
        const ix = H.findIndex(x => headerMap[k].includes(x));
        if (ix !== -1) m[k] = ix;
    }
    return m;
}

function rowsToObjects(rows) {
    if (!rows.length) return [];
    const map = mapHeaders(rows[0]);
    const out = [];
    for (let i = 1; i < rows.length; i++) {
        const o = {};
        for (const k in map) o[k] = (rows[i][map[k]] || '').toString().trim();
        out.push(o);
    }
    return out;
}

export const cleanNum = (v) => {
    const n = Number((v || '').toString().replace(/[^\d.-]/g, ''));
    return isNaN(n) ? 0 : n;
};

export const formatPrice = (n) => new Intl.NumberFormat("id-ID").format(Number(n || 0));

export const isTBI = (v) => (typeof v === 'string' && v.trim().toLowerCase() === 'to be informed') || String(v).trim().toLowerCase() === 'tbi';

/**
 * Fetches and parses pricing data from the configured Google Sheet CSV.
 * @returns {Promise<Array>} Array of program pricing objects
 */
export async function fetchPricingData() {
    try {
        const res = await fetch(CSV_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch CSV');
        const text = await res.text();
        const rows = parseCSV(text);
        return rowsToObjects(rows);
    } catch (err) {
        console.error("Error fetching pricing data:", err);
        return [];
    }
}

/**
 * Finds a specific program row in the pricing data.
 */
export function findProgramRow(pricingData, slug) {
    if (!pricingData || !slug) return null;
    const cleanSlug = slug.replace(/-/g, '').toLowerCase(); // Normalize slug (e.g. 'general-english' -> 'generalenglish')

    return pricingData.find(r => {
        const rowProg = (r.program || '').replace(/\s+/g, '').toLowerCase();
        // Exact match or contains
        return rowProg === cleanSlug || rowProg.includes(cleanSlug) || cleanSlug.includes(rowProg);
    });
}
