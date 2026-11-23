"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";
import { ProfileModal } from "@/components/profile-modal";
import { FluidBg } from "@/components/fluid-bg";

export function Hero() {
  const { lang, tr } = useI18n();
  const headline = tr(ui.hero.headline);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <section
        id="top"
        className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#020c28] text-white"
      >
        {/* Fluid blue smoke background */}
        <FluidBg />

        {/* Subtle amber accent glow — bottom left */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -left-20 -z-10 h-72 w-72 rounded-full bg-amber/8 blur-[100px]"
        />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-5 pb-10 pt-28 md:px-10 md:pt-36">

        {/* Profile photo + greeting row */}
        <div className="flex items-center gap-4" style={{ animationDelay: "60ms" }}>
          <button
            type="button"
            onClick={() => setProfileOpen(true)}
            aria-label="Open profile"
            className="animate-scale-in group relative shrink-0"
            style={{ animationDelay: "0ms" }}
          >
            <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand to-amber opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative block h-16 w-16 overflow-hidden rounded-full border-2 border-white/20 md:h-20 md:w-20">
              <Image
                src="/images/profile.jpg"
                alt={site.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="80px"
                priority
              />
            </span>
          </button>

          <p
            className="animate-fade-up text-xl font-bold leading-snug text-white/70 md:text-2xl"
            style={{ animationDelay: "80ms" }}
          >
            {tr(ui.hero.greeting)} <span className="text-white">{site.firstName}</span>
            <span className="text-amber">.</span>
          </p>
        </div>

        <h1
          key={lang}
          className="mt-4 max-w-[22ch] text-[clamp(2.4rem,min(7vw,10.5vh),6rem)] font-bold leading-[0.98] tracking-[-0.04em]"
        >
          {headline.split(" ").map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              {index > 0 && " "}
              <span
                className={`animate-rise inline-block ${index === headline.split(" ").length - 1 ? "shimmer-text" : ""}`}
                style={{ animationDelay: `${140 + index * 55}ms` }}
              >
                {word}
              </span>
            </Fragment>
          ))}
        </h1>

        <div
          className="animate-fade-up mt-8 grid gap-8 md:mt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
          style={{ animationDelay: "720ms" }}
        >
          <p className="max-w-[56ch] text-lg font-medium leading-relaxed text-white/70 md:text-xl">
            {tr(site.intro)}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group relative inline-flex overflow-hidden rounded-full bg-white px-7 py-4 text-base font-bold text-navy shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-amber transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
              <span className="relative">{tr(ui.hero.work)}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
            >
              {tr(ui.hero.contact)}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mb-8 flex w-full max-w-[1280px] items-end justify-between px-5 text-sm text-white/50 md:px-10">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-glow-pulse" />
          {site.location}
        </span>
        <a href="#work" className="group flex flex-col items-center gap-3">
          <span className="transition-colors group-hover:text-white/80">
            {tr(ui.hero.scroll)}
          </span>
          <span className="animate-bounce-soft relative block h-12 w-px overflow-hidden bg-white/15">
            <span className="animate-scroll-line absolute inset-0 bg-white" />
          </span>
        </a>
      </div>
    </section>

      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
