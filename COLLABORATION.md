# Panduan Kolaborasi Tim (Astro + Headless WP)

Dokumen ini mengatur alur kerja teknis untuk tim developer (Static & Dynamic) dalam pengembangan website Headless WordPress menggunakan Astro, React, dan Tailwind.

---

## 1. Project Overview

Kita menggunakan arsitektur **Headless WordPress**:
*   **Backend (CMS):** WordPress (menyediakan data via REST API `/wp-json`).
*   **Frontend:** Astro (SSG/SSR) + React Islands (Interactive UI).
*   **Deployment:** Vercel (CI/CD Automatis).

**Alur Data:**
1.  Konten diinput di WordPress Admin.
2.  Astro mengambil data via `fetch` ke WP REST API saat build time (SSG).
3.  Vercel membuild HTML statis dan mendeploy ke CDN.
4.  User mengakses website super cepat tanpa membebani server WordPress.

---

## 2. Folder & Ownership

Untuk menghindari konflik file (`git conflict`), kita membagi area kerja:

### 🎨 Static Developer (Mas Seto)
**Fokus:** Layouting, slicing design, styling, static pages.
*   `src/layouts/` (Layout global: Header, Footer)
*   `src/components/ui/` (Button, Card, Reusable UI)
*   `src/components/home/` (Komponen spesifik homepage)
*   `src/styles/global.css` (Tailwind directives)
*   `src/pages/` (Kecuali folder blog/dynamic)

### 🔌 Dynamic Developer (Rizki)
**Fokus:** Data fetching, types, logic, dynamic routing.
*   `src/lib/api/` (Fungsi fetch ke WP REST API)
*   `src/types/` (TypeScript interfaces untuk data WP)
*   `src/pages/blog/` (Halaman listing & detail blog)
*   `src/env.d.ts` & `.env` (API Credentials management)

> **Aturan Penting:**
> Jika Static Dev perlu mengubah logic API, atau Dynamic Dev perlu mengubah CSS global: **Wajib komunikasi di grup sebelum edit**

---

## 3. Branching & Git Flow

Kita menggunakan strategi 3-tier simpel.

### Jenis Branch
1.  **`main` (Production)** 🔴
    *   Branch keramat.
    *   Hanya berisi kode yang SUDAH LIVE dan STABIL.
    *   **Dilarang push langsung.**
2.  **`dev` (Staging)** 🟡
    *   Branch utama pengembangan.
    *   Tempat berkumpulnya fitur dari Dev A dan Dev B.
    *   **Dilarang push langsung.**
3.  **`feat/*` atau `fix/*` (Feature Branch)** 🟢
    *   Area kerja harian developer.
    *   Dibuat dari branch `dev`.
    *   Contoh nama: `feat/homepage-hero`, `feat/blog-integration`, `fix/navbar-mobile`.

---

## 4. Daily Development Flow

Ikuti langkah ini setiap kali mulai bekerja:

### Langkah 1: Persiapan (Sync)
Pastikan lokal kodemu sinkron dengan staging terbaru.
```bash
git checkout dev
git pull origin dev
```

### Langkah 2: Buat Branch Baru
Fokus pada satu fitur kecil.
```bash
git checkout -b feat/nama-fitur-kamu
```

### Langkah 3: Coding & Commit
Lakukan perubahan kode. Commit sesering mungkin dengan pesan jelas.
```bash
# Coding...
git add .
git commit -m "feat: menambahkan komponen slider di homepage"
```
*Format pesan: `tipe: pesan singkat` (feat, fix, style, refactor).*

### Langkah 4: Push ke GitHub
```bash
git push origin feat/nama-fitur-kamu
```

### Langkah 5: Buat Pull Request (PR)
1.  Buka GitHub Repo.
2.  Klik tombol "Compare & pull request".
3.  **PENTING:** Pastikan targetnya adalah **`base: dev`** (bukan main).
4.  isi Template PR yang muncul.

---

## 5. Pull Request Rules

Sebelum meminta review atau merge PR:

*   [ ] **Target Branch Benar:** Harus ke `dev`.
*   [ ] **Lulus Build:** Jalankan `npm run build` di terminal lokal, pastikan sukses.
*   [ ] **Vercel Preview Aman:** Cek link preview otomatis dari Vercel di halaman PR. Pastikan tidak ada layout yang hancur.
*   [ ] **Deskripsi Jelas:** Jelaskan apa yang berubah dan cara testnya.

> **Persetujuan:**
> Static Dev wajib review logic Dynamic Dev (sekadar sanity check), dan Dynamic Dev wajib cek UI Static Dev.

---

## 6. Deployment Flow (Vercel)

Semua otomatis. Tidak ada manual upload file.

1.  **Vercel Preview:**
    *   Setiap kali ada **Push ke Branch manapun** (feat/...), Vercel akan membuat link preview unik.
    *   Gunakan ini untuk testing real-world sebelum merge.
2.  **Staging Deploy:**
    *   Setiap kali **Merge ke `dev`**, Vercel mengupdate server staging.
3.  **Production Deploy:**
    *   Setiap kali **Merge `dev` ke `main`**, Vercel mengupdate website live (Production).

---

## 7. Conflict Handling

*"Waduh, pas mau PR, GitHub bilang conflict!"*

Ini terjadi jika Dev A dan Dev B mengedit baris yang sama di file yang sama (jarang terjadi jika aturan folder diikuti, tapi mungkin terjadi di `global.css`).

**Solusi:**
Tarik update terbaru dari `dev` ke branch fiturmu, lalu perbaiki manual.

```bash
# Di branch fitur kamu
git fetch origin
git merge origin/dev

# ...Fix conflict di VS Code (pilih 'Input Incoming' atau 'Current')...

git add .
git commit -m "merge: resolve conflict with dev"
git push
```
Sekarang PR di GitHub akan hijau kembali.

---

## 8. Best Practices

1.  **PR Kecil-kecil:** Jangan menumpuk codingan dalam satu PR. Selesaikan satu fitur, PR. Selesaikan satu bug, PR.
2.  Gunakan fitur "Comment" di GitHub Review untuk saran.
3.  **Cek Mobile:** Selalu cek hasil codingan di tampilan mobile view (Inspect Element).
4.  **Backend Changes:** Jika Dev B mengubah struktur data di WordPress (tambah field ACF baru), kabari Dev A agar UI bisa disesuaikan.

---
*Happy Coding & Collaborate! 🚀*
