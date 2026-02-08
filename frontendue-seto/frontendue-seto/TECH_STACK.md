# Tech Stack & Coding Standards

Dokumen ini berisi aturan teknis (Rules of the Road) yang wajib diikuti oleh seluruh developer untuk menjaga konsistensi, performa, dan maintainability kode.

---

## 🏗 Core Stack

| Layer | Tools | Version | Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | **Astro** | v4.x | Static Site Generation (SSG) First. |
| **UI Library** | **React** | v19.x | Gunakan hanya untuk komponen interaktif (Islands). |
| **Styling** | **Tailwind CSS** | v3.x | Utility-first. Dilarang custom CSS berlebih. |
| **Language** | **TypeScript** | v5.x | Strict mode. No `any` allowed. |
| **Backend** | **WordPress** | 6.x | Headless via REST API (No GraphQL). |
| **Package Mgr** | **NPM** | Latest | Gunakan `npm` (bukan yarn/pnpm) untuk konsistensi lockfile. |

---

## 📜 Development Rules

### 1. Astro First Approach 🚀
Astro adalah framework utama kita.
*   **DO:** Gunakan `.astro` component untuk layout, header, footer, dan konten statis.
*   **DO:** Gunakan `getStaticPaths()` untuk generate halaman dynamic (Blog Detail).
*   **DON'T:** Menggunakan React Component untuk konten yang *hanya* teks statis (HTML biasa). Jangan "React-ify" segalanya.

### 2. React Usage (Islands Architecture) 🏝️
Gunakan React **HANYA** jika butuh interaktivitas browser (state, hooks, event listeners).
*   **Hydration:** Selalu gunakan directip hydration paling ringan yang memungkinkan:
    *   `client:visible` (Default untuk komponen UI interactive).
    *   `client:load` (Hanya untuk elemen di fold atas yang butuh interaksi instan).
    *   `client:only="react"` (Untuk komponen yang butuh `window`/API browser).
*   **State:** Gunakan `useState` lokal. Untuk state global antar-island, gunakan **Nano Stores**.

### 3. Styling with Tailwind 🎨
*   **Utility First:** Hindari menulis CSS manual di `<style>`. Gunakan class Tailwind.
*   **Config:** Warna & Font harus diambil dari `tailwind.config.mjs` (jangan hardcode hex color).
    *   ❌ `text-[#145DA0]`
    *   ✅ `text-primary`
*   **Sorting:** Biarkan extension Prettier mengurutkan class secara otomatis.

### 4. Data Fetching & Types 🔌
*   **Centralized API:** Semua fetch ke WordPress **WAJIB** melalui `src/lib/api/`. Jangan fetch langsung di component.
*   **Strict Types:** Semua data yang masuk dari WP API harus punya Interface di `src/types/wp.ts`.
*   **Normalization:** Data mentah dari WP harus dinormalisasi sebelum masuk ke Component (buang field WP yang tidak perlu).

### 5. File Naming Conventions 📂
*   **Component (.astro/.jsx):** `PascalCase.astro` (e.g., `HeroSection.astro`, `submitButton.jsx` ❌ -> `SubmitButton.jsx` ✅).
*   **Pages:** Lowercase kebab-case (e.g., `about-us.astro`, `blog/[slug].astro`).
*   **Utilities/Libs:** camelCase (e.g., `dateFormatter.ts`, `apiClient.ts`).

### 6. Images & Assets 🖼️
*   Gunakan komponen `<Image />` bawaan Astro untuk optimasi otomatis.
*   Simpan gambar statis UI di `public/images` (atau `src/assets` jika butuh diproses).
*   Selalu sertakan `alt` text.

---

## 🚫 Anti-Patterns (Dilarang Keras)

1.  **Dilarang jQuery.** Kita pakai React atau Vanilla JS modern.
2.  **Dilarang `!important`** di CSS kecuali terpaksa menimpa library pihak ketiga.
3.  **Dilarang Hardcode Text** di dalam logic file. Pisahkan content ke variabel atau CMS.
4.  **Dilarang Push Secret Key** ke repo. Gunakan `.env`.

---

*Setiap Pull Request akan direview berdasarkan checklist di atas.*
