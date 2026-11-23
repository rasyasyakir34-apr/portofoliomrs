"use client";

import { ProjectArt } from "@/components/project-art";
import { certificates } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

function CertCard({ cert, index }: { cert: (typeof certificates)[number]; index: number }) {
  const { tr } = useI18n();
  const isEmpty = !cert.file;

  const card = (
    <div className="group block">
      {/* Visual area — same style as project cards */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-[20px] transition-[border-radius] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rounded-[40px]"
        style={{ backgroundColor: cert.color }}
      >
        <ProjectArt variant={cert.art} dark={cert.darkTitle} />

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/30 to-transparent"
        />

        {/* Large title at bottom */}
        <span
          aria-hidden="true"
          className="absolute -bottom-[0.14em] left-4 whitespace-nowrap text-[clamp(2rem,3.8vw,3.5rem)] font-bold leading-none tracking-[-0.05em] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:translate-x-2"
          style={{ color: cert.darkTitle ? "#0a0d1f" : "#ffffff" }}
        >
          {tr(cert.title)}
        </span>

        {/* Top-right icon */}
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur transition-all duration-500"
          style={{
            color: cert.darkTitle ? "#0a0d1f" : "#ffffff",
            backgroundColor: cert.darkTitle
              ? "rgba(10,13,31,0.12)"
              : "rgba(255,255,255,0.18)",
          }}
        >
          {isEmpty ? (
            /* lock icon for coming-soon */
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ) : (
            /* external link arrow, rotates on hover */
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          )}
        </span>

        {/* Coming-soon overlay */}
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
              {tr(ui.certificates.soon)}
            </span>
          </div>
        )}
      </div>

      {/* Meta below card */}
      <div className="mt-5 grid gap-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {tr(cert.title)}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-soft/25 bg-brand-soft/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-soft" />
            {tr(cert.category)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-bold text-brand-soft">{cert.issuer}</p>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
            {cert.year}
          </span>
        </div>
      </div>
    </div>
  );

  /* Wrap with <a> only if file exists */
  if (isEmpty) {
    return (
      <article
        className="w-full card-hover lg:w-[24vw] lg:shrink-0 lg:snap-start xl:w-[22rem]"
        data-reveal
        style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
      >
        {card}
      </article>
    );
  }

  return (
    <article
      className="w-full card-hover lg:w-[24vw] lg:shrink-0 lg:snap-start xl:w-[22rem]"
      data-reveal
      style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
    >
      <a
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${tr(cert.title)} — ${tr(ui.certificates.view)}`}
        className="group block"
      >
        {/* Visual area */}
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-[20px] transition-[border-radius] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rounded-[40px]"
          style={{ backgroundColor: cert.color }}
        >
          <ProjectArt variant={cert.art} dark={cert.darkTitle} />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/30 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-[0.14em] left-4 whitespace-nowrap text-[clamp(2rem,3.8vw,3.5rem)] font-bold leading-none tracking-[-0.05em] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:translate-x-2"
            style={{ color: cert.darkTitle ? "#0a0d1f" : "#ffffff" }}
          >
            {tr(cert.title)}
          </span>
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur transition-all duration-500 group-hover:rotate-45"
            style={{
              color: cert.darkTitle ? "#0a0d1f" : "#ffffff",
              backgroundColor: cert.darkTitle
                ? "rgba(10,13,31,0.12)"
                : "rgba(255,255,255,0.18)",
            }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>

        {/* Meta */}
        <div className="mt-5 grid gap-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              {tr(cert.title)}
            </h3>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-soft/25 bg-brand-soft/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-soft" />
              {tr(cert.category)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-bold text-brand-soft">{cert.issuer}</p>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
              {cert.year}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

export function Certificates() {
  const { tr } = useI18n();

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="relative overflow-hidden bg-[#020c28] py-20 text-white md:py-28"
    >
      {/* Fluid-style background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/16 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 left-1/4 h-[24rem] w-[24rem] rounded-full bg-brand-soft/12 blur-[100px]" />

      {/* Header */}
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">
              {tr(ui.certificates.label)}
            </p>
            <h2
              id="certificates-title"
              className="mt-4 text-5xl font-bold leading-[0.92] tracking-tighter md:text-7xl"
            >
              {tr(ui.certificates.title)}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-white/50 md:text-base">
              {tr(ui.certificates.desc)}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/35">
              {tr(ui.certificates.hint)}
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: vertical stack | Desktop: horizontal scroll, no scrollbar */}
      <div
        className="no-scrollbar relative mt-10 grid grid-cols-1 gap-8 overflow-x-auto px-5 md:mt-14 md:px-10 lg:flex lg:snap-x lg:snap-mandatory lg:gap-7 lg:pb-6"
        role="region"
        aria-label={tr(ui.certificates.title)}
        tabIndex={0}
      >
        {certificates.map((cert, index) => (
          <CertCard key={cert.slug} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
}
