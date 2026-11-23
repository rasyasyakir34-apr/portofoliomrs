import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofoliomrs.vercel.app"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.name} is a ${site.role.toLowerCase()} based in ${site.location}. ${site.tagline.en}`,
  authors: [{ name: site.name }],
  keywords: [
    "Muhammad Rasya Syakir",
    "Web Developer",
    "UI Engineer",
    "Palembang",
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portofoliomrs.vercel.app",
    title: `${site.name} — ${site.role}`,
    description: site.tagline.en,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline.en,
    creator: "@rasyasyakir",
  },
};

export const viewport: Viewport = {
  themeColor: "#070a1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <LanguageProvider>
          <CursorGlow />
          <ScrollReveal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
