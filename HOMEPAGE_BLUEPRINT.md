# Homepage Optimization Blueprint for Ultimate Education

## 1. Strategic Goals
- **Dominate Local SEO:** Target "Jakarta" and "Bandung" modifiers explicitly in content and schema.
- **Conversion Rate Optimization (CRO):** Shift from generic "Learn More" to high-intent "Book Consultation" and "Free Assessment".
- **Topical Authority:** Establish Ultimate Education as the *expert* in both test prep and admissions consulting.

## 2. Section-by-Section Structure

### 1. Hero Section (Above the Fold)
- **Component:** `HomeHero.astro`
- **Headline:** "Konsultan Pendidikan Luar Negeri & Persiapan Tes Terbaik di Jakarta & Bandung" (H1)
- **Subhead:** "Bimbingan intensif IELTS, SAT, GMAT, dan beasiswa dengan mentor lulusan universitas top dunia. Garansi skor meningkat."
- **CTAs:**
  - Primary: "Konsultasi Gratis" (WhatsApp link)
  - Secondary: "Lihat Program" (Anchor to Programs)
- **Trust Signals:** "Dipercaya 5000+ Siswa", "Rating 4.9/5", Logos of top universities (Harvard, Oxford, etc.).

### 2. Trust & Authority Bar
- **Component:** `TrustStats.astro` (New/Refined)
- **Content:**
  - **Stats:** 98% Acceptance Rate, 5000+ Alumni, 50+ Mitra Universitas.
  - **Logos:** "Diliput oleh" or "Partner Resmi" strip (Media/Partners).
- **Design:** Slim, high-contrast bar immediately following the Hero.

### 3. Services Overview (The "What We Do")
- **Component:** `ServicesOverview.astro` (Replaces `HomePaths`)
- **Structure:** Grid layout highlighting 4 pillars:
  1.  **Test Preparation:** IELTS, SAT, GMAT, GRE, TOEFL.
  2.  **Study Abroad Consulting:** S1/S2/S3 Admissions.
  3.  **Language Courses:** General & Business English, Foreign Languages.
  4.  **Scholarship Guidance:** LPDP, Chevening, AAS.

### 4. Program Highlights (SEO Anchors)
- **Component:** `FeaturedPrograms.astro`
- **Strategy:** Cards linking to specific `/program/[slug]` pages.
- **Anchor Text:** Use exact match keywords in card titles (e.g., "Kursus IELTS", "Bimbingan SAT").

### 5. Location Section (Local SEO Critical)
- **Component:** `Locations.astro` (New)
- **Content:**
  - **Jakarta:** Address, Map Embed, "Kursus IELTS Jakarta Selatan".
  - **Bandung:** Address, Map Embed, "Les Bahasa Inggris Bandung".
  - **Online:** "Tersedia kelas interaktif untuk seluruh Indonesia".
- **Schema:** Embedded `LocalBusiness` JSON-LD for each location.

### 6. Why Choose Us (Differentiators)
- **Component:** `WhyChooseUs.astro`
- **Points:**
  - "Curriculum Terupdate"
  - "Mentor Awardee Beasiswa"
  - "Garansi Mengulang Gratis"
  - "Simulasi Tes Resmi"

### 7. Student Success Stories (Social Proof)
- **Component:** `Alumni.astro`
- **Format:** Carousel of student photos + university logos + test scores.
- **Content:** "Kak Budi - Diterima di UCL (IELTS 7.5)", "Kak Ani - LPDP Awardee".

### 8. Resources & Blog Preview
- **Component:** `HighlightedArticles.astro`
- **Heading:** "Tips & Panduan Kuliah ke Luar Negeri".
- **Selection:** 3 latest keyword-rich articles.

### 9. SEO Content Block (Long Form)
- **Component:** `SEOContent.astro` (New)
- **Strategy:** 800+ words of "hidden" but accessible content at the bottom.
- **Topics:** "Pentingnya Persiapan IELTS", "Strategi Lolos Beasiswa", "Kenapa Memilih Ultimate Education".
- **Internal Links:** Contextual links to all program pages.

### 10. Final Conversion Block
- **Component:** `FinalCTA.astro`
- **Headline:** "Siap Wujudkan Mimpi Kuliah di Luar Negeri?"
- **CTA:** "Hubungi Kami Sekarang" (Sticky or large button).

## 3. Technical SEO Implementation

### Meta Tags
- **Title:** `Ultimate Education - Konsultan Pendidikan Luar Negeri & Kursus IELTS`
- **Description:** `Pusat persiapan tes IELTS, SAT, GMAT, GRE & konsultan kuliah luar negeri terpercaya di Jakarta & Bandung. Dapatkan bimbingan mentor expert & garansi skor.`

### Schema Markup (JSON-LD)
- **Global:** `EducationalOrganization`
- **Local:** `LocalBusiness` (Multiple locations via `department` property or separate items).
- **Product:** `Course` schema for specific programs listed on homepage.

### Core Web Vitals
- **Images:** WebP/AVIF format, explicit dimensions, lazy loading (except Hero).
- **Scripts:** Defer non-critical JS, use Partytown for GTM.

## 4. Local SEO Checklist
- [ ] NAP (Name, Address, Phone) consistent in Footer and Location section.
- [ ] Google Maps embed for both Jakarta and Bandung.
- [ ] "Jakarta" and "Bandung" keywords in H2/H3 headers.
- [ ] WhatsApp link with pre-filled message mentioning location (optional).
