import { marqueeSkills } from "@/lib/site";

function MarqueeRow({ outline = false }: { outline?: boolean }) {
  const itemClass = [
    "flex items-center gap-8 px-4 text-5xl font-bold tracking-tight md:gap-12 md:px-6 md:text-8xl",
    outline ? "text-outline" : "text-ink",
  ].join(" ");

  const items = marqueeSkills.map((skill) => (
    <li key={skill} className={itemClass}>
      {skill}
      <span
        aria-hidden="true"
        className="inline-block h-3 w-3 rotate-45 rounded-[3px] bg-brand md:h-5 md:w-5"
      />
    </li>
  ));

  return (
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      <ul className="flex shrink-0 items-center">{items}</ul>
      <ul aria-hidden="true" className="flex shrink-0 items-center">
        {items}
      </ul>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section aria-label="What I work with" className="overflow-hidden bg-paper py-14 md:py-20">
      <div className="space-y-2 md:space-y-4">
        <MarqueeRow />
        <MarqueeRow outline />
      </div>
    </section>
  );
}
