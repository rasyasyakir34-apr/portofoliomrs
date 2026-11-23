"use client";

import { useState } from "react";
import { services } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const [active, setActive] = useState(0);
  const { tr } = useI18n();
  const current = services[active];

  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-16 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {tr(ui.services.label)}
            </p>
            <h2
              id="services-title"
              className="mt-4 max-w-[18ch] text-4xl font-bold leading-[0.98] tracking-tighter md:text-6xl"
            >
              {tr(ui.services.title)}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55 md:text-base">
            {tr(ui.services.desc)}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="border-t border-ink/10" data-reveal>
            {services.map((service, index) => {
              const isActive = index === active;
              return (
                <button
                  key={service.title.en}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                  aria-controls="service-detail"
                  className="group grid w-full grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-ink/10 py-6 text-left md:gap-5"
                >
                  <span className="pt-1.5 text-xs font-bold tabular-nums text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={`flex items-center gap-2.5 text-xl font-bold tracking-tight transition-colors md:text-2xl ${
                        isActive ? "text-brand" : "text-ink/80 group-hover:text-ink"
                      }`}
                    >
                      {tr(service.title)}
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rotate-45 rounded-[2px] bg-amber transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </span>
                    <span className="mt-1 block max-w-[46ch] text-sm leading-relaxed text-ink/50">
                      {tr(service.summary)}
                    </span>
                    {isActive && (
                      <span className="mt-3 block max-w-[48ch] text-sm leading-relaxed text-ink/65 lg:hidden">
                        {tr(service.details)}
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`pt-1 text-lg transition-transform duration-500 ${
                      isActive
                        ? "translate-x-0 text-brand"
                        : "-translate-x-1 text-ink/25 group-hover:translate-x-0 group-hover:text-ink/50"
                    }`}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>

          <div id="service-detail" className="hidden lg:block" aria-live="polite">
            <div className="sticky top-28">
              <div
                key={current.title.en}
                className="animate-fade-up relative overflow-hidden rounded-[28px] bg-navy p-8 text-white"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl"
                />
                <span
                  aria-hidden="true"
                  className="block text-7xl font-bold leading-none tracking-tighter text-white/10"
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
                  {tr(current.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                  {tr(current.details)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {current.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-amber transition-colors hover:text-white"
                >
                  {tr(ui.services.discuss)}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
