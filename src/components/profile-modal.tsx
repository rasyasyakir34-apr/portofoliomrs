"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site, socials, experience, education } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ProfileModal({ open, onClose }: Props) {
  const { tr } = useI18n();
  const overlayRef = useRef<HTMLDivElement>(null);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer panel — slides in from right */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${site.name} — Profile`}
        className={`fixed inset-y-0 right-0 z-[201] flex w-full max-w-md flex-col overflow-y-auto bg-navy text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] sm:max-w-sm md:max-w-md ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header banner */}
        <div className="relative h-32 shrink-0 overflow-hidden bg-gradient-to-br from-brand/60 via-brand/30 to-transparent">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right,rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.06) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
        </div>

        {/* Avatar — overlaps banner */}
        <div className="relative -mt-14 px-7">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-navy shadow-xl ring-2 ring-brand/40">
            <Image
              src="/images/profile.jpg"
              alt={site.name}
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-8 px-7 pb-10 pt-4">

          {/* Identity */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{site.name}</h2>
            <p className="mt-1 text-sm font-semibold text-white/60">{site.role}</p>
            <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-white/40">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c-4-4-7-7.8-7-11a7 7 0 0 1 14 0c0 3.2-3 7-7 11z" />
                <circle cx="12" cy="10" r="2" />
              </svg>
              {site.location}
            </p>
            {/* Availability badge */}
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {tr(site.availability)}
            </p>
          </div>

          {/* About */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">About</p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              {tr(site.intro)}
            </p>
          </div>

          {/* Education */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">Education</p>
            <div className="mt-3 space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/8 text-xs font-extrabold text-white/60">
                    {edu.school.split(" ").filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join("") || "SC"}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight">{tr(edu.major)}</p>
                    <p className="text-xs font-semibold text-white/50">{edu.school}</p>
                    <p className="text-xs text-white/35">{edu.period}</p>
                    <p className="mt-1 text-xs text-white/40">{tr(edu.degree)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">Experience</p>
            <div className="mt-3 space-y-4">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/8 text-xs font-extrabold text-white/60">
                    {exp.company.split(" ").filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join("") || "CO"}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight">{tr(exp.role)}</p>
                    <p className="text-xs font-semibold text-white/50">{exp.company} · {tr(exp.type)}</p>
                    <p className="text-xs text-white/35">{exp.period}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50">{tr(exp.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">Links</p>
            <div className="mt-3 space-y-2">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-soft" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {site.email}
              </a>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
                >
                  <span className="w-4 shrink-0 text-center text-[11px] font-extrabold text-brand-soft">{s.label.slice(0,2).toUpperCase()}</span>
                  <span className="text-white/70">{s.handle}</span>
                  <svg viewBox="0 0 24 24" className="ml-auto h-3.5 w-3.5 shrink-0 text-white/25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
