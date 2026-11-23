import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "404 — Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-navy px-5 text-white">
      {/* Background grid */}
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_55%_at_50%_50%,rgba(47,69,255,0.2),transparent_72%)]"
      />

      {/* Giant 404 background text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute select-none text-[clamp(8rem,30vw,22rem)] font-bold leading-none tracking-tighter text-white/[0.04]"
      >
        404
      </span>

      <div className="relative text-center">
        {/* Initials badge */}
        <a
          href="/"
          aria-label={site.name}
          className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-soft text-base font-extrabold text-white ring-2 ring-brand transition-transform duration-500 hover:scale-110"
        >
          {site.initials}
        </a>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">
          404 — Not found
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
          Page not <br />
          <span className="text-white/35">found.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[38ch] text-base leading-relaxed text-white/50">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-navy transition-colors hover:bg-amber"
          >
            ← Back to home
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </main>
  );
}
