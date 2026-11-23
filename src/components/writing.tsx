"use client";

import { posts } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

export function Writing() {
  const { tr } = useI18n();

  return (
    <section id="writing" aria-labelledby="writing-title" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {tr(ui.writing.label)}
            </p>
            <h2
              id="writing-title"
              className="mt-4 text-4xl font-bold leading-[0.98] tracking-tighter md:text-6xl"
            >
              {tr(ui.writing.title)}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55 md:text-base">
            {tr(ui.writing.desc)}
          </p>
        </div>

        <div className="mt-10 border-t border-ink/10" data-reveal>
          {posts.map((post) => (
            <article
              key={post.title.en}
              className="group grid grid-cols-1 gap-3 border-b border-ink/10 px-1 py-6 transition-colors hover:bg-white/60 md:grid-cols-[9rem_1fr_auto] md:items-center md:gap-6 md:px-4"
            >
              <time className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                {tr(post.date)}
              </time>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-brand md:text-2xl">
                  {tr(post.title)}
                </h3>
                <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] font-bold text-ink/50">
                  {post.tag}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-ink/40">
                <span>{tr(post.views)}</span>
                <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/45">
                  {tr(ui.writing.soon)}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink/40">{tr(ui.writing.note)}</p>
      </div>
    </section>
  );
}
