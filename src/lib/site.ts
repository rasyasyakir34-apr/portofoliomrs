import type { Localized } from "./i18n";

export const site = {
  name: "Muhammad Rasya Syakir",
  firstName: "Rasya",
  initials: "MR",
  role: "Web Developer & UI Engineer",
  location: "Palembang, Indonesia",
  email: "rasyasyakir34@gmail.com",
  availability: {
    en: "Open for freelance & full-time",
    id: "Terbuka untuk freelance & full-time",
  } satisfies Localized,
  tagline: {
    en: "Web developer in Palembang building useful, fast and accessible web apps.",
    id: "Web developer di Palembang yang membangun aplikasi web berguna, cepat, dan aksesibel.",
  } satisfies Localized,
  intro: {
    en: "Need a website, Android app, or an API-integrated system? I handle the whole process — from design and development to integration and launch. With one person who understands the full workflow, things move faster and communication stays clear.",
    id: "Membutuhkan website, aplikasi Android, atau sistem yang terintegrasi melalui API? Saya menangani seluruh prosesnya, mulai dari perancangan, pengembangan, integrasi, hingga peluncuran. Dengan satu penanggung jawab yang memahami keseluruhan alur kerja, proses menjadi lebih efisien dan komunikasi tetap jelas.",
  } satisfies Localized,
} as const;

export const navigation = [
  { key: "work", href: "#work", label: { en: "Work", id: "Karya" } },
  { key: "services", href: "#services", label: { en: "Services", id: "Layanan" } },
  { key: "stack", href: "#stack", label: { en: "Stack", id: "Teknologi" } },
  { key: "certificates", href: "#certificates", label: { en: "Certificates", id: "Sertifikat" } },
  { key: "contact", href: "#contact", label: { en: "Contact", id: "Kontak" } },
] as const;

export const marqueeSkills = [
  "PHP",
  "Laravel",
  "MySQL",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Maps",
  "Camera API",
  "Figma",
];

export type ProjectArt = "rings" | "arcs" | "diagonal" | "rows" | "dots" | "waves";

export type Project = {
  slug: string;
  title: string;
  description: Localized;
  category: Localized;
  stack: string[];
  color: string;
  darkTitle?: boolean;
  art: ProjectArt;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "edugrowth",
    title: "EduGrowth",
    description: {
      en: "A posyandu record-keeping platform for Palembang with growth charts that help health workers catch stunting risks earlier.",
      id: "Platform pencatatan posyandu di Palembang dengan grafik pertumbuhan untuk membantu kader mendeteksi risiko stunting lebih dini.",
    },
    category: { en: "Health tech", id: "Teknologi kesehatan" },
    stack: ["PHP", "MySQL", "Data visualization"],
    color: "#2f45ff",
    art: "rings",
    url: "https://edugrowth.infinityfreeapp.com/welcome.php",
  },
  {
    slug: "siguntang-hill",
    title: "Siguntang Hill",
    description: {
      en: "A digital museum that documents the cultural heritage of Bukit Siguntang, making its collection and history accessible online.",
      id: "Museum digital yang mendokumentasikan cagar budaya Bukit Siguntang, membuat koleksi dan sejarahnya bisa diakses secara online.",
    },
    category: { en: "Digital heritage", id: "Warisan budaya" },
    stack: ["PHP", "MySQL", "Interactive media"],
    color: "#0f1630",
    art: "waves",
    url: "https://siguntanghill.rf.gd/",
  },
  {
    slug: "siakad-tridharma",
    title: "SIAKAD Tridharma",
    description: {
      en: "An academic information system with camera-based attendance and map integration, built for Tridharma.",
      id: "Sistem informasi akademik dengan absensi berbasis kamera dan integrasi peta, dibangun untuk Tridharma.",
    },
    category: { en: "Education", id: "Pendidikan" },
    stack: ["PHP", "MySQL", "Camera API", "Maps"],
    color: "#7483ff",
    darkTitle: true,
    art: "diagonal",
    url: "https://siakad-tridharma.infinityfreeapp.com/",
  },
  {
    slug: "songket-palembang",
    title: "Songket Palembang",
    description: {
      en: "A marketplace that helps Palembang songket artisans sell their woven products online, from catalog to checkout.",
      id: "Marketplace yang membantu perajin songket Palembang menjual produk tenunnya secara online, dari katalog sampai checkout.",
    },
    category: { en: "Marketplace", id: "Marketplace" },
    stack: ["PHP", "MySQL", "E-commerce"],
    color: "#ffb21e",
    darkTitle: true,
    art: "arcs",
    url: "https://songketpalembangpkm.rf.gd/",
  },
];

export type Service = {
  title: Localized;
  summary: Localized;
  details: Localized;
  tools: string[];
};

export const services: Service[] = [
  {
    title: { en: "Web platforms", id: "Platform web" },
    summary: {
      en: "Fast, accessible websites and dashboards that are easy to maintain.",
      id: "Website dan dashboard yang cepat, aksesibel, dan mudah dirawat.",
    },
    details: {
      en: "From marketing pages to internal dashboards with complex state. The goal is the same: clean structure, quick loads and code the next engineer can read.",
      id: "Dari halaman marketing sampai dashboard internal dengan state yang kompleks. Tujuannya sama: struktur rapi, loading cepat, dan kode yang mudah dibaca engineer berikutnya.",
    },
    tools: ["PHP", "Laravel", "Next.js", "TypeScript"],
  },
  {
    title: { en: "UI engineering", id: "Rekayasa UI" },
    summary: {
      en: "Turning Figma designs into precise, reusable components.",
      id: "Menerjemahkan desain Figma menjadi komponen presisi yang bisa dipakai ulang.",
    },
    details: {
      en: "Pixel-perfect is the starting point, not the finish line. Every state — hover, focus, loading, error, empty — is considered so the interface feels complete.",
      id: "Pixel-perfect itu titik awal, bukan garis akhir. Semua state — hover, focus, loading, error, kosong — dipikirkan supaya antarmuka terasa utuh.",
    },
    tools: ["Tailwind CSS", "Bootstrap", "Radix UI"],
  },
  {
    title: { en: "Design systems", id: "Sistem desain" },
    summary: {
      en: "Components, tokens and documentation that help teams move faster.",
      id: "Komponen, token, dan dokumentasi yang membuat tim bergerak lebih cepat.",
    },
    details: {
      en: "A consistent, well-documented component library with usage rules, so design and engineering stop pulling in different directions.",
      id: "Library komponen yang konsisten dan terdokumentasi, lengkap dengan aturan pemakaian agar desain dan engineering tidak tarik-menarik.",
    },
    tools: ["Figma", "Storybook", "Design tokens"],
  },
  {
    title: { en: "Data & dashboards", id: "Data & dashboard" },
    summary: {
      en: "Turning records into clear charts, tables and decisions.",
      id: "Mengubah catatan menjadi grafik, tabel, dan keputusan yang jelas.",
    },
    details: {
      en: "Growth charts for posyandu, attendance reports, sales summaries. I build the queries, the aggregation and the interface that makes the numbers readable.",
      id: "Grafik pertumbuhan posyandu, laporan absensi, ringkasan penjualan. Saya mengerjakan query, agregasi, dan antarmuka yang membuat angkanya mudah dibaca.",
    },
    tools: ["MySQL", "PHP", "Chart.js"],
  },
  {
    title: { en: "Maps & camera features", id: "Fitur peta & kamera" },
    summary: {
      en: "Location-aware and camera-based features that work in the field.",
      id: "Fitur berbasis lokasi dan kamera yang tetap nyaman dipakai di lapangan.",
    },
    details: {
      en: "Map integration for attendance and location data, plus camera capture flows with clear permissions, fallbacks and error states.",
      id: "Integrasi peta untuk absensi dan data lokasi, plus alur capture kamera dengan izin yang jelas, fallback, dan penanganan error.",
    },
    tools: ["Maps API", "Camera API", "JavaScript"],
  },
  {
    title: { en: "Integrations", id: "Integrasi" },
    summary: {
      en: "Connecting products to other services without the drama.",
      id: "Menghubungkan produk ke layanan lain tanpa drama.",
    },
    details: {
      en: "Authentication, payments, REST APIs, webhooks and email. Including proper error handling so a third-party outage doesn't take the app down.",
      id: "Autentikasi, pembayaran, API REST, webhook, dan email. Termasuk error handling yang rapi supaya gangguan pihak ketiga tidak ikut mematikan aplikasi.",
    },
    tools: ["REST API", "MySQL", "Webhooks"],
  },
];

export type TechGroup = "Frontend" | "Backend" | "Mobile" | "Tooling";

export const techStack: { name: string; group: TechGroup }[] = [
  { name: "PHP", group: "Backend" },
  { name: "Laravel", group: "Backend" },
  { name: "MySQL", group: "Backend" },
  { name: "Node.js", group: "Backend" },
  { name: "Express", group: "Backend" },
  { name: "PostgreSQL", group: "Backend" },
  { name: "REST API", group: "Backend" },
  { name: "Prisma", group: "Backend" },
  { name: "Supabase", group: "Backend" },
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Bootstrap", group: "Frontend" },
  { name: "HTML", group: "Frontend" },
  { name: "CSS", group: "Frontend" },
  { name: "Alpine.js", group: "Frontend" },
  { name: "Framer Motion", group: "Frontend" },
  { name: "Figma", group: "Frontend" },
  { name: "Chart.js", group: "Frontend" },
  { name: "React Native", group: "Mobile" },
  { name: "Expo", group: "Mobile" },
  { name: "PWA", group: "Mobile" },
  { name: "Git", group: "Tooling" },
  { name: "GitHub", group: "Tooling" },
  { name: "Vercel", group: "Tooling" },
  { name: "Composer", group: "Tooling" },
  { name: "npm", group: "Tooling" },
  { name: "Vite", group: "Tooling" },
  { name: "Figma Dev Mode", group: "Tooling" },
  { name: "Postman", group: "Tooling" },
  { name: "cPanel", group: "Tooling" },
];

export type Post = {
  title: Localized;
  date: Localized;
  views: Localized;
  tag: string;
};

export const posts: Post[] = [
  {
    title: {
      en: "Lightweight scroll reveal without an animation library",
      id: "Scroll reveal ringan tanpa library animasi",
    },
    date: { en: "12 Aug 2026", id: "12 Agu 2026" },
    views: { en: "428 views", id: "428 dilihat" },
    tag: "CSS",
  },
  {
    title: {
      en: "React component patterns that are easy to maintain",
      id: "Pola komponen React yang mudah dirawat",
    },
    date: { en: "3 Jun 2026", id: "3 Jun 2026" },
    views: { en: "1.2k views", id: "1,2 rb dilihat" },
    tag: "React",
  },
  {
    title: {
      en: "Optimizing Next.js images for slow connections",
      id: "Optimasi gambar Next.js untuk koneksi lambat",
    },
    date: { en: "21 Feb 2026", id: "21 Feb 2026" },
    views: { en: "986 views", id: "986 dilihat" },
    tag: "Performance",
  },
];

export type Certificate = {
  slug: string;
  title: Localized;
  issuer: string;
  year: string;
  category: Localized;
  file: string;
  color: string;
  darkTitle?: boolean;
  art: ProjectArt;
};

export const certificates: Certificate[] = [
  {
    slug: "magang-bukit-asam",
    title: {
      en: "Internship Certificate",
      id: "Sertifikat Magang",
    },
    issuer: "PT Bukit Asam Tbk",
    year: "2026",
    category: { en: "Internship", id: "Magang" },
    file: "/images/certificates/certificate-1.pdf",
    color: "#1a2a6c",
    art: "rings",
  },
  {
    slug: "placeholder-2",
    title: {
      en: "Certificate Title",
      id: "Judul Sertifikat",
    },
    issuer: "Issuer Name",
    year: "2026",
    category: { en: "Training", id: "Pelatihan" },
    file: "",
    color: "#2f45ff",
    art: "diagonal",
  },
  {
    slug: "placeholder-3",
    title: {
      en: "Certificate Title",
      id: "Judul Sertifikat",
    },
    issuer: "Issuer Name",
    year: "2026",
    category: { en: "Training", id: "Pelatihan" },
    file: "",
    color: "#0f1630",
    art: "waves",
  },
];

export type Education = {
  degree: Localized;
  major: Localized;
  school: string;
  period: string;
};

export type Experience = {
  role: Localized;
  company: string;
  type: Localized;
  period: string;
  desc: Localized;
};

export const education: Education[] = [
  {
    degree: { en: "Diploma (D3)", id: "Diploma (D3)" },
    major: { en: "Management Informatics", id: "Manajemen Informatika" },
    school: "Politeknik Negeri Sriwijaya",
    period: "2024 – Present",
  },
];

export const experience: Experience[] = [
  {
    role: { en: "Web Developer Intern", id: "Magang Web Developer" },
    company: "PT Bukit Asam Tbk",
    type: { en: "Internship", id: "Magang" },
    period: "2026",
    desc: {
      en: "Contributed to internal web development projects at one of Indonesia's leading state-owned coal companies. Worked on building and maintaining web-based systems.",
      id: "Berkontribusi pada proyek pengembangan web internal di salah satu perusahaan batu bara milik negara terkemuka di Indonesia. Membangun dan memelihara sistem berbasis web.",
    },
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/rasyasyakir34-apr", handle: "@rasyasyakir34-apr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-rasya-syakir-580a58439/", handle: "in/muhammad-rasya-syakir" },
  { label: "Instagram", href: "https://instagram.com/mhmdrsya_s", handle: "@mhmdrsya_s" },
  { label: "WhatsApp", href: "https://wa.me/6283143134024", handle: "+62 831-4313-4024" },
];
