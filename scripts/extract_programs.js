import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.resolve(__dirname, '../src/data/sitemap.html');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/extracted_programs.json');

// Helper to sanitize text
const cleanText = (text) => {
    if (!text) return '';
    // Remove CSS/JS artifacts often found in Elementor text widgets
    let cleaned = text
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove CSS comments
        .replace(/@media[\s\S]*?\{[\s\S]*?\}/g, '') // Remove @media blocks (simple)
        .replace(/@media[^\{]+\{([^\{\}]*\{[^\{\}]*\})*[^\}]*\}/g, '') // Remove nested @media (better)
        .replace(/document\.addEventListener\([\s\S]*?\}\);/g, '') // Remove JS event listeners
        .replace(/\.accordion-box[\s\S]*?\}/g, '') // Remove CSS rules
        .replace(/\.elementor-[^{]*\{[^}]*\}/g, '') // Remove elementor styles
        .replace(/Baca selengkapnya/g, '') // Remove "Read more" trigger text
        .replace(/&nbsp;/g, ' ')
        .replace(/&#8211;/g, '-')
        .replace(/&#8217;/g, "'")
        .replace(/&amp;/g, '&');

    // Remove lingering brace artifacts from CSS
    cleaned = cleaned.replace(/\s*\}\s*\}\);\s*\}\);/g, '');
    cleaned = cleaned.replace(/\s*\}\s*\}\);/g, '');

    return cleaned.replace(/\s+/g, ' ').trim();
};

// Helper to extract curriculum items
const extractCurriculum = ($, container) => {
    const curriculum = [];
    // Look for accordion items
    $(container).find('.e-n-accordion-item').each((i, el) => {
        const title = cleanText($(el).find('.e-n-accordion-item-title-text').text());
        // Content might be in .elementor-widget-text-editor inside the accordion body
        let contentHtml = $(el).find('.elementor-widget-text-editor').html();

        // Convert HTML list to text with bullets if present
        if (contentHtml) {
            const $content = cheerio.load(contentHtml);
            let contentText = '';

            // Strategy: Extract text from P and LI elements only to avoid duplication from parent DIVs
            const elements = $content('p, li');

            if (elements.length > 0) {
                elements.each((j, elem) => {
                    const tag = elem.tagName;
                    let text = cleanText($(elem).text());
                    if (!text) return;

                    if (tag === 'li') {
                        text = '• ' + text;
                    }

                    // Avoid exact duplicates (simple check)
                    if (!contentText.includes(text)) {
                        contentText += text + '\n';
                    }
                });
            } else {
                // Fallback to direct text if no p/li tags
                contentText = cleanText($content.text());
            }

            if (title && contentText) {
                curriculum.push({ title, content: contentText.trim() });
            }
        }
    });
    return curriculum;
};


async function main() {
    try {
        console.log(`Current directory: ${process.cwd()}`);
        console.log(`Script directory: ${__dirname}`);
        console.log(`Resolution path for sitemap: ${SITEMAP_PATH}`);

        if (!fs.existsSync(SITEMAP_PATH)) {
            console.error(`ERROR: Sitemap not found at ${SITEMAP_PATH}`);
            process.exit(1);
        }

        console.log('Reading sitemap...');
        const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
        const $ = cheerio.load(sitemapContent);

        // Extract URLs
        const urls = [];
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href) urls.push(href);
        });

        console.log(`Found ${urls.length} total URLs in sitemap.`);

        // Filter for potential programs
        const keywords = [
            'ielts', 'toefl', 'sat', 'gmat', 'gre', 'ged', 'act', 'pte', 'toeic',
            'igcse', 'bipa', 'hsk', 'delf', 'topik', 'testdaf', 'caliston', 'english',
            'persiapan-ib', 'level', 'utbk', 'jlpt', 'ausbildung', 'scholarship', 'g3sa'
        ];

        const programUrls = urls.filter(url => {
            const lowerUrl = url.toLowerCase();
            // Exclude generic pages
            if (lowerUrl.includes('/artikel/') || lowerUrl.includes('/cart/') || lowerUrl.includes('/checkout/') || lowerUrl.includes('/shop/') || lowerUrl.includes('/contact/') || lowerUrl.includes('/testimonials/') || lowerUrl.includes('/mitra/') || lowerUrl.includes('/about-us/') || lowerUrl.includes('wp-content')) return false;

            return keywords.some(k => lowerUrl.includes(k));
        });

        console.log(`Filtered down to ${programUrls.length} potential program URLs.`);

        const extractedData = [];

        // Process sequentially
        for (const url of programUrls) {
            let slug = url.split('/').filter(Boolean).pop();
            console.log(`Processing: ${slug} (${url})`);

            try {
                const apiUrl = `https://staging-u.ultimateducation.co.id/wp-json/wp/v2/pages?slug=${slug}&_fields=title,content,slug,id`;
                const response = await axios.get(apiUrl, { timeout: 15000 }); // increased timeout

                if (response.data.length === 0) {
                    // Try without 'preparation' or strict slug match if needed, but for now just skip
                    console.log(`  No WP page found for slug: ${slug}`);
                    continue;
                }

                const pageData = response.data[0];
                const html = pageData.content.rendered;
                const $ = cheerio.load(html);

                // Structure check
                const hasTabs = $('.e-n-tabs, .elementor-widget-n-tabs').length > 0;
                const hasAccordions = $('.e-n-accordion, .elementor-widget-n-accordion').length > 0;
                const hasPricing = html.includes('Biaya') || html.includes('Investasi') || html.includes('Pilihan Paket');

                if (!hasTabs && !hasAccordions && !hasPricing) {
                    console.log(`  Skipping: Structure likely not a program page.`);
                    continue;
                }

                // REMOVE STYLE AND SCRIPT TAGS GLOBALY
                $('style').remove();
                $('script').remove();
                $('.e-n-accordion-item > style').remove(); // Deep nested styles

                // Extract Overview
                let overviewContent = [];
                let overviewTitle = "Gambaran Kursus";
                let overviewFound = false;
                $('h2').each((i, el) => {
                    if (overviewFound) return;
                    const text = $(el).text();
                    if (text.includes('Gambaran') || text.includes('Overview') || text.includes('Tentang')) {
                        overviewTitle = text;
                        overviewFound = true;
                        const parent = $(el).closest('.elementor-widget');
                        let nextWidget = parent.next('.elementor-widget-text-editor');
                        if (!nextWidget.length) nextWidget = parent.next().next('.elementor-widget-text-editor');
                        if (nextWidget.length) {
                            nextWidget.find('p').each((j, p) => {
                                const t = cleanText($(p).text());
                                if (t) overviewContent.push(t);
                            });
                        }
                    }
                });

                if (overviewContent.length === 0) {
                    const firstText = $('.elementor-widget-text-editor').first();
                    if (firstText.length) {
                        firstText.find('p').each((j, p) => {
                            const t = cleanText($(p).text());
                            if (t && overviewContent.length < 3) overviewContent.push(t);
                        });
                    }
                }


                // Extract Tabs and Pricing
                const pricing = {};
                let tabHeadings = $('.e-n-tabs-heading button');
                tabHeadings.each((i, tabBtn) => {
                    const tabTitle = cleanText($(tabBtn).find('.e-n-tab-title-text').text());
                    const tabId = $(tabBtn).attr('aria-controls');
                    const tabContent = $(`#${tabId}`);

                    if (tabTitle && tabContent.length) {
                        let descText = "";
                        tabContent.find('.elementor-widget-text-editor').each((j, editor) => {
                            if ($(editor).parents('.e-n-accordion').length > 0) return;
                            const t = cleanText($(editor).text());
                            if (t.includes('Pilihan Paket') || t.includes('Cuplikan Materi')) return;
                            if (!descText && t.length > 20) descText = t;
                        });

                        const curriculum = extractCurriculum($, tabContent);

                        // Try to find pricing if possible
                        // Often hidden or in iframe
                        // Just placeholders for now
                        pricing[tabTitle] = {
                            title: tabTitle,
                            description: descText,
                            features: "",
                            curriculum: curriculum,
                            pricing: {
                                Offline: { Bronze: 0, Silver: 0 },
                                Online: { Bronze: 0, Silver: 0 }
                            }
                        };
                    }
                });

                // Extract Testimonials
                const alumniItems = [];
                $('.elementor-testimonial').each((i, el) => {
                    const name = cleanText($(el).find('.elementor-testimonial__name').text());
                    const program = cleanText($(el).find('.elementor-testimonial__title').text());
                    const quote = cleanText($(el).find('.elementor-testimonial__text').text());
                    if (name && quote && !alumniItems.some(item => item.name === name)) {
                        alumniItems.push({ name, program, quote });
                    }
                });

                // Extract FAQ
                const faqItems = [];
                const lastAccordion = $('.e-n-accordion').last();
                if (lastAccordion.length) {
                    lastAccordion.find('.e-n-accordion-item').each((i, el) => {
                        const q = cleanText($(el).find('.e-n-accordion-item-title-text').text());
                        const aText = $(el).find('.elementor-widget-text-editor').text();
                        const a = cleanText(aText);
                        if (q && a && !q.includes("Format") && !q.includes("Materi")) {
                            faqItems.push({ q, a });
                        }
                    });
                }

                // Clean slug
                const cleanSlug = slug.replace('kursus-persiapan-', '').replace('persiapan-', '').replace('-preparation', '').replace('-course', '');
                let title = cleanText(pageData.title.rendered);
                const rawTitle = title; // keep raw title for meta
                title = title.replace('Kursus Persiapan', '').replace('Preparation', '').replace('Course', '').replace('-', '').replace('Ultimate Education', '').trim();
                const heroTitle = `Kursus Persiapan <span class="text-ultimate-yellow">${title}</span>`;

                extractedData.push({
                    slug: cleanSlug,
                    originalSlug: slug,
                    meta: {
                        title: rawTitle,
                        description: `Raih skor ${title} impianmu dengan bimbingan intensif.`
                    },
                    hero: {
                        title: heroTitle,
                        subtitle: "Raih skor impianmu dengan bimbingan intensif dari pengajar ahli",
                        pillText: title.toUpperCase() + " Preparation",
                        image: "/images/hero_img.png"
                    },
                    overview: {
                        title: overviewTitle,
                        content: overviewContent
                    },
                    pricing: pricing,
                    whyUs: {
                        title: "Kenapa Kami?",
                        items: []
                    },
                    alumni: {
                        title: "Cerita Alumni",
                        subtitle: "Apa kata mereka?",
                        items: alumniItems
                    },
                    faq: {
                        items: faqItems
                    }
                });

                console.log(`  Extracted: ${title} (${Object.keys(pricing).length} tabs, ${alumniItems.length} reviews, ${faqItems.length} FAQs)`);

            } catch (innerErr) {
                console.error(`  ERROR processing slug ${slug}:`, innerErr.message);
            }
        }

        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(extractedData, null, 2));
        console.log(`\nDone. Extracted ${extractedData.length} programs to:`);
        console.log(OUTPUT_PATH);

    } catch (err) {
        console.error("FATAL ERROR in main script:", err);
        process.exit(1);
    }
}

main();
