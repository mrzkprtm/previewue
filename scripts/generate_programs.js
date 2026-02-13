import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_PATH = path.resolve(__dirname, '../src/data/extracted_programs.json');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/programs.ts');

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

const INTERFACE_DEF = `export interface ProgramData {
    slug: string;
    meta: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
        pillText: string;
        image?: string;
    };
    overview: {
        title: string;
        content: string[];
    };
    pricing: {
        [key: string]: {
            title: string;
            description: string;
            features: string;
            curriculum: { title: string; content: string }[];
            pricing: {
                [mode: string]: {
                    [variant: string]: number;
                };
            };
        };
    };
    whyUs: {
        title: string;
        items: {
            title: string;
            description: string;
            iconPath: string;
        }[];
    };
    alumni: {
        title: string;
        subtitle: string;
        items: {
            name: string;
            program: string;
            quote: string;
        }[];
    };
    faq: {
        items: {
            q: string;
            a: string;
        }[];
    };
}
`;

function main() {
    console.log('Reading extracted data...');
    if (!fs.existsSync(INPUT_PATH)) {
        console.error('Extracted data file not found!');
        process.exit(1);
    }

    const rawData = fs.readFileSync(INPUT_PATH, 'utf8');
    const programs = JSON.parse(rawData);

    console.log(`Processing ${programs.length} programs...`);

    const processedPrograms = programs.map(p => {
        // Map slug
        let rawSlug = p.slug || '';
        if (p.originalSlug) rawSlug = p.originalSlug;

        // Try to find mapping
        let cleanSlug = SLUG_MAP[rawSlug];
        if (!cleanSlug) {
            // Try to fuzzy match keys if exact match failed
            cleanSlug = Object.keys(SLUG_MAP).find(k => rawSlug.includes(k));
            if (cleanSlug) cleanSlug = SLUG_MAP[cleanSlug];
        }

        if (!cleanSlug) {
            console.warn(`Warning: No slug mapping found for '${rawSlug}', using original.`);
            cleanSlug = rawSlug;
        }

        // Override slug in object
        p.slug = cleanSlug;

        // Ensure image has default if missing
        if (!p.hero.image) {
            p.hero.image = "/images/hero_img.png";
        }

        // Clean up empty arrays/objects if strictly necessary, but TS handles them fine mostly
        return p;
    });

    // Remove duplicates based on slug
    const uniquePrograms = [];
    const seenSlugs = new Set();

    for (const p of processedPrograms) {
        if (!seenSlugs.has(p.slug)) {
            uniquePrograms.push(p);
            seenSlugs.add(p.slug);
        } else {
            console.log(`Skipping duplicate slug: ${p.slug}`);
        }
    }

    console.log(`Generating TypeScript file with ${uniquePrograms.length} unique programs...`);

    const fileContent = `${INTERFACE_DEF}
export const programs: ProgramData[] = ${JSON.stringify(uniquePrograms, null, 4)};
`;

    fs.writeFileSync(OUTPUT_PATH, fileContent);
    console.log(`Success! Data written to ${OUTPUT_PATH}`);
}

main();
