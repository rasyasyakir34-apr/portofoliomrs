"use client";

import { useMemo, useState } from "react";
import { techStack, type TechGroup } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

const filters = ["all", "Frontend", "Backend", "Mobile", "Tooling"] as const;
type Filter = (typeof filters)[number];

const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-[1.5deg]"];

export function TechStack() {
  const [filter, setFilter] = useState<Filter>("all");
  const [picked, setPicked] = useState<string[]>([]);
  const { tr } = useI18n();

  const visible = useMemo(
    () =>
      filter === "all" ? techStack : techStack.filter((item) => item.group === (filter as TechGroup)),
    [filter],
  );

  const toggle = (name: string) => {
    setPicked((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <section id="stack" aria-labelledby="stack-title" className="bg-[#e8ecf6] py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {tr(ui.stack.label)}
            </p>
            <h2
              id="stack-title"
              className="mt-4 max-w-[18ch] text-4xl font-bold leading-[0.98] tracking-tighter md:text-6xl"
            >
              {tr(ui.stack.title)}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-ink/55 md:text-base">
              {tr(ui.stack.desc)}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-ink/45">
              <span>
                {picked.length > 0
                  ? tr(ui.stack.selected).replace("{n}", String(picked.length))
                  : tr(ui.stack.none)}
              </span>
              {picked.length > 0 && (
                <button
                  type="button"
                  onClick={() => setPicked([])}
                  className="rounded-full border border-ink/15 px-3 py-1 transition-colors hover:border-ink/30 hover:text-ink"
                >
                  {tr(ui.stack.reset)}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" data-reveal>
          {filters.map((item) => {
            const isActive = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                  isActive
                    ? "bg-navy text-white"
                    : "border border-ink/10 bg-white/60 text-ink/60 hover:border-ink/25 hover:text-ink"
                }`}
              >
                {tr(ui.stack.filters[item])}
              </button>
            );
          })}
        </div>

        <div
          key={filter}
          className="animate-fade-up mt-10 flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {visible.map((item, index) => {
            const isPicked = picked.includes(item.name);
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => toggle(item.name)}
                aria-pressed={isPicked}
                className={[
                  "rounded-full border px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 md:px-5 md:py-3",
                  tilts[index % tilts.length],
                  isPicked
                    ? "-translate-y-1 rotate-0 border-brand bg-brand text-white shadow-lg shadow-brand/25"
                    : "border-ink/10 bg-white text-ink/75 hover:-translate-y-0.5 hover:border-ink/25 hover:text-ink",
                ].join(" ")}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
