"use client";

import { site, socials } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { tr } = useI18n();

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020c28] py-20 text-white md:py-28">
      {/* Fluid-style background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-[38rem] w-[38rem] rounded-full bg-brand/20 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 left-0 h-[28rem] w-[28rem] rounded-full bg-amber/8 blur-[110px]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-bold leading-none tracking-tighter text-white/[0.035]"
      >
        RASYA
      </span>

      <div className="relative mx-auto max-w-[1180px] px-5 md:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft" data-reveal>
          {tr(ui.contact.label)}
        </p>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end" data-reveal>
          <div>
            <h2 className="text-[clamp(2.5rem,6.5vw,5.25rem)] font-bold leading-[0.94] tracking-tighter">
              {tr(ui.contact.titleA)}
              <br />
              {tr(ui.contact.titleB)}
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-white/60 md:text-lg">
              {tr(ui.contact.desc)}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {tr(site.availability)}
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.09]"
            >
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                  {tr(ui.contact.emailLabel)}
                </span>
                <span className="mt-1 block text-base font-bold md:text-lg">{site.email}</span>
              </span>
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-navy transition-transform duration-500 group-hover:rotate-45"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </a>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-4 transition-colors hover:bg-white/[0.08]"
                >
                  <span className="block text-sm font-bold">{social.label}</span>
                  <span className="mt-1 block truncate text-[11px] text-white/40">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>

            <p className="pt-1 text-xs text-white/35">{tr(ui.contact.response)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
