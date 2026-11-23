# Portfolio — Muhammad Rasya Syakir

Website portofolio pribadi dengan gaya dark-navy + aksen biru/kuning, mengacu pada referensi [aulianza.com](https://aulianza.com/). Dibangun dengan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS v4**.

> **Status:** Step 1 selesai — Landing page lengkap.
> Semua konten (project, pengalaman, blog, sosial media) masih **data dummy** dan tersimpan di satu tempat: `src/lib/site.ts`.

---

## 1. Cara menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Perintah lain:

```bash
npm run build   # build production
npm start       # jalankan hasil build
npm run lint    # cek ESLint
```

> Catatan: gunakan `localhost`, bukan `127.0.0.1`, saat mode dev. Next.js memblokir resource dev lintas origin secara default (sudah ditambahkan `allowedDevOrigins` di `next.config.ts`, tapi tetap disarankan memakai `localhost`).

---

## 2. Struktur project

```
src/
├─ app/
│  ├─ layout.tsx        # font, metadata, ScrollReveal
│  ├─ page.tsx          # susunan section landing page
│  ├─ globals.css       # design token, glass, marquee, reveal, animasi
│  └─ icon.svg          # favicon monogram "MR"
├─ components/
│  ├─ site-header.tsx   # navbar glass + bottom nav mobile
│  ├─ hero.tsx          # hero full-screen, headline animasi per kata
│  ├─ skills-marquee.tsx# dua baris marquee skill (solid + outline)
│  ├─ selected-work.tsx # kartu project scroll horizontal
│  ├─ project-art.tsx   # ilustrasi SVG tiap project (tanpa gambar eksternal)
│  ├─ services.tsx      # daftar layanan interaktif (tab detail)
│  ├─ quote.tsx         # section kutipan
│  ├─ tech-stack.tsx    # filter + chip stack yang bisa diklik
│  ├─ writing.tsx       # preview tulisan/blog
│  ├─ contact.tsx       # CTA kontak + email + sosial
│  ├─ site-footer.tsx   # footer
│  └─ scroll-reveal.tsx # fade-in saat elemen masuk viewport
└─ lib/site.ts          # SEMUA data dummy & konten
```

### Ganti data dummy

Semua yang tampil di halaman diambil dari `src/lib/site.ts`:

- `site` — nama, role, lokasi, email, deskripsi
- `navigation` — menu navbar
- `marqueeSkills` — teks marquee
- `projects` — 6 project (judul, deskripsi, stack, warna, ilustrasi)
- `services` — 6 layanan
- `techStack` — daftar teknologi + kategori
- `posts` — preview blog
- `socials` — link GitHub/LinkedIn/Instagram

Cukup edit file itu, tampilan ikut berubah.

---

## 3. Design system singkat

| Token | Nilai | Dipakai untuk |
| --- | --- | --- |
| `navy` | `#070a1a` | background section gelap, teks header |
| `navy-soft` | `#0f1630` | kartu/ilustrasi |
| `paper` | `#f3f5f9` | background section terang |
| `ink` | `#0a0d1f` | teks di section terang |
| `brand` | `#2f45ff` | aksen utama |
| `brand-soft` | `#7483ff` | aksen sekunder, label stack |
| `amber` | `#ffb21e` | aksen hangat, hover CTA |

- Font: **Plus Jakarta Sans** via `next/font`.
- Efek khas referensi yang sudah diterapkan: navbar glass pill, text-roll hover, headline reveal per kata, marquee dua baris, kartu project dengan sudut membesar saat hover, section reveal on scroll, dan reduced-motion support.
- Semua ilustrasi project dibuat dengan SVG inline — belum butuh file gambar.

---

## 4. Roadmap step-by-step

**Step 1 — Landing page (selesai)**
- Hero, marquee skill, selected work, services, quote, tech stack, writing preview, contact CTA, footer.
- Responsive (mobile bottom nav, tablet, desktop), aksesibel, animasi ringan.

**Step 2 — Halaman Portfolio + detail project**
- Route `/portfolio` dengan grid/filter project.
- Route `/portfolio/[slug]` untuk case study (masalah, proses, hasil, gambar).
- Pindahkan link kartu project dari non-klik menjadi tautan nyata.

**Step 3 — Halaman About**
- Cerita singkat, timeline pengalaman & pendidikan, tools harian, CV download.

**Step 4 — Blog / Writing**
- `/blog` dan `/blog/[slug]`, konten dari MDX atau CMS.
- Update section "Writing" agar menaut ke artikel asli.

**Step 5 — Contact**
- Halaman `/contact` dengan form (validasi + kirim email/Resend) dan info kolaborasi.
- Bisa juga tambah guestbook.

**Step 6 — Polish & deploy**
- OG image dinamis, sitemap, robots, analytics.
- Ganti dummy data dengan data asli.
- Deploy ke Vercel + custom domain.

---

## 5. Catatan

- Semua nama project, angka pengalaman, blog, dan akun sosial adalah **dummy**.
- Email dummy: `hello@rasyasyakir.dev`.
- Belum ada backend/database. Form kontak masih berupa `mailto:`.
- Saat ini link navbar mengarah ke anchor section (`#work`, `#services`, dst.) agar tidak ada halaman 404 di step 1.
