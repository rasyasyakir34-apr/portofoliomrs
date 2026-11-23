"use client";

import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

export function Quote() {
  const { tr } = useI18n();

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_50%_at_25%_80%,rgba(47,69,255,0.18),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-[1000px] px-5 md:px-10">
        <div className="flex items-start gap-5 md:gap-8" data-reveal>
          <span
            aria-hidden="true"
            className="mt-1 block text-6xl font-bold leading-none text-amber md:text-7xl"
          >
            &ldquo;
          </span>
          <div>
            <blockquote>
              <p className="text-2xl font-bold leading-snug tracking-tight md:text-4xl">
                {tr(ui.quote.text)}
              </p>
            </blockquote>
            <footer className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">
              <cite className="not-italic font-semibold text-white/70">Edsger W. Dijkstra</cite>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
              <span>{tr(ui.quote.role)}</span>
            </footer>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 text-xs font-semibold tracking-[0.18em] text-white/30">
          <span>01</span>
          <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
          <span>06</span>
        </div>
      </div>
    </section>
  );
}
