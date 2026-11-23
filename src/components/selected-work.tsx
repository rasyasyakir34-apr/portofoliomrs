"use client";

import { ProjectArt } from "@/components/project-art";
import { projects } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

export function SelectedWork() {
  const { tr } = useI18n();

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative overflow-hidden bg-[#020c28] py-20 text-white md:py-28"
    >
      {/* Fluid-style background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand/18 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-brand-soft/12 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">
              {tr(ui.work.label)}
            </p>
            <h2
              id="work-title"
              className="mt-4 text-5xl font-bold leading-[0.92] tracking-tighter md:text-7xl"
            >
              {tr(ui.work.titleA)}
              <br />
              {tr(ui.work.titleB)}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-white/50 md:text-base">
              {tr(ui.work.desc)}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/35">
              {tr(ui.work.hint)}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
        aria-label={tr(ui.work.titleA) + " " + tr(ui.work.titleB)}
        tabIndex={0}
      >
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="w-full card-hover lg:w-[34vw] lg:shrink-0 lg:snap-start xl:w-[30rem]"
            data-reveal
            style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${tr(ui.work.open)}`}
              className="group block"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-[20px] transition-[border-radius] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rounded-[40px]"
                style={{ backgroundColor: project.color }}
              >
                <ProjectArt variant={project.art} dark={project.darkTitle} />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/25 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[0.14em] left-4 whitespace-nowrap text-[clamp(2.25rem,4.2vw,3.9rem)] font-bold leading-none tracking-[-0.05em] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:translate-x-2"
                  style={{ color: project.darkTitle ? "#0a0d1f" : "#ffffff" }}
                >
                  {project.title}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur transition-all duration-500 group-hover:rotate-45"
                  style={{
                    color: project.darkTitle ? "#0a0d1f" : "#ffffff",
                    backgroundColor: project.darkTitle
                      ? "rgba(10, 13, 31, 0.12)"
                      : "rgba(255, 255, 255, 0.18)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 grid gap-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight md:text-2xl">{project.title}</h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {tr(ui.work.live)}
                  </span>
                </div>
                <p className="line-clamp-2 max-w-[48ch] text-sm leading-relaxed text-white/55">
                  {tr(project.description)}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold text-brand-soft">{project.stack.join(" / ")}</p>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
                    {tr(project.category)}
                  </span>
                </div>
              </div>
            </a>
          </article>
        ))}

        <div className="mt-8 flex w-full items-center rounded-[20px] border border-white/10 bg-white/[0.03] p-8 lg:mt-0 lg:w-[26rem] lg:shrink-0 lg:snap-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              {tr(ui.work.moreLabel)}
            </p>
            <p className="mt-3 text-2xl font-bold leading-tight tracking-tight">
              {tr(ui.work.moreTitle)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{tr(ui.work.moreDesc)}</p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber"
            >
              {tr(ui.work.moreCta)}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
