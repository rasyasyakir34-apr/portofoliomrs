"use client";

import { navigation, site, socials } from "@/lib/site";
import { ui } from "@/lib/ui";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { tr } = useI18n();

  return (
    <footer className="bg-paper pb-32 pt-16 md:pb-10">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-soft text-sm font-extrabold text-white">
                {site.initials}
              </span>
              <span className="text-base font-bold tracking-tight">{site.name}</span>
            </a>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink/55">
              {tr(ui.footer.blurb)}
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-ink/45">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {tr(site.availability)}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/35">
              {tr(ui.footer.pages)}
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-ink/65 transition-colors hover:text-brand">
                    {tr(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/35">
              {tr(ui.footer.elsewhere)}
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink/65 transition-colors hover:text-brand"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink/65 transition-colors hover:text-brand"
                >
                  {tr(ui.footer.email)}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name}. {tr(ui.footer.rights)}
          </p>
          <p className="sm:order-3">{tr(ui.footer.builtWith)}</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-semibold text-ink/60 transition-colors hover:text-brand"
          >
            {tr(ui.footer.backToTop)}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
