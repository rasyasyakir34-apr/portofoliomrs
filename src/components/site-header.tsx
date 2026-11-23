"use client";

import { navigation, site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

const mobileKeys = ["work", "services", "stack", "certificates", "contact"];

function RollText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

function LanguageSwitch() {
  const { lang, setLang, tr } = useI18n();

  return (
    <div
      role="group"
      aria-label={tr(ui.language)}
      className="flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 p-0.5"
    >
      {(["en", "id"] as const).map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={code === "en" ? "English" : "Bahasa Indonesia"}
            className={`rounded-full px-2 py-1 text-[11px] font-bold leading-none transition-colors duration-300 ${
              isActive ? "bg-white text-navy" : "text-white/55 hover:text-white"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export function SiteHeader() {
  const { tr } = useI18n();
  const mobileNav = navigation.filter((item) => mobileKeys.includes(item.key));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 md:px-6 md:pt-5">
        <div className="glass-dark mx-auto flex max-w-[1280px] items-center gap-2.5 rounded-full px-3 py-2 text-white md:gap-3 md:px-4">
          <a
            href="#top"
            aria-label={site.name}
            className="group flex shrink-0 items-center gap-2.5 ps-1"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand via-brand to-brand-soft text-[13px] font-extrabold tracking-tight text-white ring-2 ring-brand transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110">
              {site.initials}
            </span>
            <span className="hidden text-[15px] font-bold leading-tight lg:block">
              <RollText>{site.name}</RollText>
            </span>
          </a>

          <nav aria-label="Main" className="mx-auto hidden items-center gap-0.5 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-3.5 py-2 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
              >
                <RollText>{tr(item.label)}</RollText>
              </a>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-2 md:ms-0">
            <span className="hidden items-center gap-2 pe-1 text-xs font-medium text-white/60 xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {tr(ui.header.available)}
            </span>
            <LanguageSwitch />
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-bold text-navy transition-colors duration-300 hover:bg-amber sm:px-5"
            >
              {tr(ui.header.talk)}
            </a>
          </div>
        </div>
      </header>

      <nav
        aria-label="Mobile"
        className="glass-dark fixed inset-x-2 bottom-2 z-[100] flex gap-0.5 rounded-full p-1 text-white md:hidden"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        {mobileNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="min-w-0 flex-1 rounded-full px-0.5 py-3 text-center text-[10px] font-semibold leading-tight text-white/70 transition-colors hover:text-white active:bg-white/10"
          >
            {tr(item.label)}
          </a>
        ))}
      </nav>
    </>
  );
}
