import type { Localized } from "./i18n";

export const ui = {
  language: { en: "Language", id: "Bahasa" },
  header: {
    available: { en: "Available", id: "Tersedia" },
    talk: { en: "Let's talk", id: "Ngobrol yuk" },
  },
  hero: {
    greeting: { en: "Hey, I'm", id: "Halo, saya" },
    headline: {
      en: "I build web apps that solve real problems.",
      id: "Saya membangun aplikasi web yang menyelesaikan masalah nyata.",
    },
    work: { en: "See my work", id: "Lihat karya saya" },
    contact: { en: "Contact me", id: "Hubungi saya" },
    scroll: { en: "Scroll", id: "Gulir" },
  },
  work: {
    label: { en: "01 — Selected work", id: "01 — Karya pilihan" },
    titleA: { en: "Selected", id: "Karya" },
    titleB: { en: "work", id: "pilihan" },
    desc: {
      en: "A few projects I'm proud of: real products, used by real people, built from scratch to launch.",
      id: "Beberapa project yang saya banggakan: produk nyata, dipakai orang, dikerjakan dari nol sampai rilis.",
    },
    hint: { en: "Scroll sideways", id: "Geser ke samping" },
    live: { en: "Live", id: "Live" },
    open: { en: "Open live site", id: "Buka situs live" },
    moreLabel: { en: "More in the lab", id: "Masih di lab" },
    moreTitle: {
      en: "Have an idea for the next project?",
      id: "Punya ide untuk project berikutnya?",
    },
    moreDesc: {
      en: "A few experiments are still in the works. If you want to collaborate, just reach out.",
      id: "Beberapa eksperimen masih dalam proses. Kalau ingin berkolaborasi, langsung hubungi saja.",
    },
    moreCta: { en: "Let's talk", id: "Ngobrol yuk" },
  },
  services: {
    label: { en: "02 — What I do", id: "02 — Yang saya kerjakan" },
    title: {
      en: "From the first sketch to the last deploy.",
      id: "Dari sketsa pertama sampai deploy terakhir.",
    },
    desc: {
      en: "It's not only about looks. I care about structure, performance and how the product will be maintained a year from now.",
      id: "Bukan cuma soal tampilan. Saya ikut memikirkan struktur, performa, dan bagaimana produk ini dirawat setahun ke depan.",
    },
    discuss: { en: "Discuss this", id: "Diskusikan ini" },
  },
  quote: {
    text: {
      en: "Simplicity is prerequisite for reliability.",
      id: "Kesederhanaan adalah prasyarat keandalan.",
    },
    role: { en: "Computer scientist", id: "Ilmuwan komputer" },
  },
  stack: {
    label: { en: "03 — The toolbox", id: "03 — Perangkat kerja" },
    title: { en: "What I work with.", id: "Yang saya pakai." },
    desc: {
      en: "Tap a chip to mark your favourite stack. Just a small interaction — everything stays visible.",
      id: "Ketuk chip untuk menandai stack favorit. Ini cuma interaksi kecil — semua tetap terlihat.",
    },
    selected: { en: "{n} selected", id: "{n} dipilih" },
    none: { en: "Nothing selected yet", id: "Belum ada yang dipilih" },
    reset: { en: "Reset", id: "Reset" },
    filters: {
      all: { en: "All", id: "Semua" },
      Frontend: { en: "Frontend", id: "Frontend" },
      Backend: { en: "Backend", id: "Backend" },
      Mobile: { en: "Mobile", id: "Mobile" },
      Tooling: { en: "Tooling", id: "Perkakas" },
    } satisfies Record<string, Localized>,
  },
  writing: {
    label: { en: "05 — Writing", id: "05 — Tulisan" },
    title: { en: "Notes from the build.", id: "Catatan dari proses build." },
    desc: {
      en: "Sometimes I write down technical notes while building. Short posts, not long tutorials.",
      id: "Kadang saya menulis catatan teknis sambil ngoding. Tulisan pendek, bukan tutorial panjang.",
    },
    soon: { en: "Soon", id: "Segera" },
    note: {
      en: "The full blog is coming in a later step.",
      id: "Halaman blog lengkap menyusul di step berikutnya.",
    },
  },
  certificates: {
    label: { en: "04 — Certificates", id: "04 — Sertifikat" },
    title: { en: "Proof of work.", id: "Bukti nyata." },
    desc: {
      en: "Certificates and credentials from internships, training, and programs I've completed.",
      id: "Sertifikat dan kredensial dari magang, pelatihan, dan program yang telah saya selesaikan.",
    },
    view: { en: "View certificate", id: "Lihat sertifikat" },
    hint: { en: "Scroll sideways", id: "Geser ke samping" },
    soon: { en: "Coming soon", id: "Segera" },
  },
  contact: {
    label: { en: "05 — Contact", id: "05 — Kontak" },
    titleA: { en: "Got a project", id: "Punya ide" },
    titleB: { en: "in mind?", id: "project?" },
    desc: {
      en: "I'm open to freelance, contract or full-time work. Tell me the idea — timeline, rough budget, or just an initial chat all work.",
      id: "Saya terbuka untuk freelance, kontrak, atau full-time. Ceritakan idenya — timeline, budget kasar, atau sekadar obrolan awal juga oke.",
    },
    emailLabel: { en: "Email", id: "Email" },
    response: {
      en: "I usually reply within 1–2 business days.",
      id: "Biasanya saya balas dalam 1–2 hari kerja.",
    },
  },
  footer: {
    blurb: {
      en: "Web developer building fast, tidy interfaces that are easy to use. Based in Palembang.",
      id: "Web developer yang membangun antarmuka cepat, rapi, dan nyaman dipakai. Berbasis di Palembang.",
    },
    pages: { en: "Pages", id: "Halaman" },
    elsewhere: { en: "Elsewhere", id: "Lainnya" },
    email: { en: "Email", id: "Email" },
    backToTop: { en: "Back to top", id: "Kembali ke atas" },
    builtWith: {
      en: "Built with Next.js & Tailwind CSS.",
      id: "Dibangun dengan Next.js & Tailwind CSS.",
    },
    rights: { en: "All rights reserved.", id: "Hak cipta dilindungi." },
  },
} as const;
