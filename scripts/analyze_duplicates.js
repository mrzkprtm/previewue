import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_PATH = path.resolve(__dirname, '../src/data/extracted_programs.json');

const SLUG_MAP = {
    'kursus-persiapan-ielts': 'ielts',
    'ielts-preparation': 'ielts',
    'ielts': 'ielts',
    'kursus-persiapan-toefl': 'toefl',
    'toefl-preparation': 'toefl',
    'toefl': 'toefl',
    'kursus-persiapan-sat': 'sat',
    'sat-preparation': 'sat',
    'sat': 'sat',
    'kursus-persiapan-gmat': 'gmat',
    'gmat-preparation': 'gmat',
    'gmat': 'gmat',
    'kursus-persiapan-gre': 'gre',
    'gre-preparation': 'gre',
    'gre': 'gre',
    'persiapan-ged': 'ged',
    'ged-preparation': 'ged',
    'ged': 'ged',
    'persiapan-pte': 'pte',
    'pte-preparation': 'pte',
    'pte': 'pte',
    'persiapan-toeic': 'toeic',
    'toeic-preparation': 'toeic',
    'toeic': 'toeic',
    'persiapan-act': 'act',
    'act-preparation': 'act',
    'act': 'act',
    'persiapan-igcse': 'igcse',
    'igcse-preparation': 'igcse',
    'igcse': 'igcse',
    'persiapan-lsat': 'lsat',
    'lsat-preparation': 'lsat',
    'lsat': 'lsat',
    'persiapan-ib': 'ib',
    'ib-preparation': 'ib',
    'ib': 'ib',
    'persiapan-as-level': 'as-level',
    'as-level-preparation': 'as-level',
    'as-level': 'as-level',
    'persiapan-o-level': 'o-level',
    'o-level-preparation': 'o-level',
    'o-level': 'o-level',
    'persiapan-a-level': 'a-level',
    'a-level-preparation': 'a-level',
    'a-level': 'a-level',
    'persiapan-tpa': 'tpa',
    'tpa-preparation': 'tpa',
    'tpa': 'tpa',
    'ausbildung-ver-2-0': 'ausbildung',
    'ausbildung': 'ausbildung',
    'kursus-persiapan-utbk': 'utbk',
    'utbk-preparation': 'utbk',
    'utbk': 'utbk',
    'tes-topik': 'topik',
    'topik-course': 'topik',
    'topik': 'topik',
    'tes-hsk': 'hsk',
    'hsk-test': 'hsk',
    'hsk': 'hsk',
    'tes-delf': 'delf',
    'delf-course': 'delf',
    'delf': 'delf',
    'tes-jlpt': 'jlpt',
    'jlpt-test': 'jlpt',
    'jlpt': 'jlpt',
    'tes-bipa': 'bipa',
    'bipa': 'bipa',
    'tes-testdaf': 'testdaf',
    'testdaf-course': 'testdaf',
    'testdaf': 'testdaf',
    'caliston': 'caliston',
    'english-for-kids': 'english-for-kids',
    'generalenglish': 'general-english',
    'general-english': 'general-english',
    'business-english': 'business-english',
    'business-english-2': 'business-english',
    'ultimate-scholarship': 'scholarship',
    'scholarship-preparation': 'scholarship'
};

function main() {
    const rawData = fs.readFileSync(INPUT_PATH, 'utf8');
    const programs = JSON.parse(rawData);

    const grouped = {};

    programs.forEach(p => {
        let rawSlug = p.slug || p.originalSlug;
        let mappedSlug = SLUG_MAP[rawSlug];
        if (!mappedSlug) {
            mappedSlug = Object.keys(SLUG_MAP).find(k => rawSlug.includes(k));
            if (mappedSlug) mappedSlug = SLUG_MAP[mappedSlug];
        }
        if (!mappedSlug) mappedSlug = rawSlug; // Fallback

        if (!grouped[mappedSlug]) {
            grouped[mappedSlug] = [];
        }
        grouped[mappedSlug].push(p);
    });

    console.log('--- Duplicate Analysis ---');
    for (const [slug, items] of Object.entries(grouped)) {
        if (items.length > 1) {
            console.log(`\nSlug: ${slug} (Cleaned) has ${items.length} source entries:`);
            items.forEach((item, idx) => {
                const title = item.meta?.title || 'No Title';
                const originalSlug = item.originalSlug || item.slug;
                console.log(`  ${idx + 1}. Original Slug: ${originalSlug} | Title: ${title} | Overview Length: ${JSON.stringify(item.overview).length}`);
            });

            // Check if they are identical
            const first = JSON.stringify(items[0].overview);
            const isIdentical = items.every(i => JSON.stringify(i.overview) === first);
            console.log(`  -> Identical Content? ${isIdentical ? 'YES' : 'NO'}`);
        }
    }
}

main();
