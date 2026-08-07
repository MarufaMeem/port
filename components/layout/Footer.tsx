"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { languageNames, type Language } from "@/lib/i18n/translations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/data/site";

const navRoutes = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "services" as const, href: "/services" },
  { key: "work" as const, href: "/work" },
  { key: "saudiReady" as const, href: "/saudi-ready" },
  { key: "contact" as const, href: "/contact" },
];

export function Footer() {
  const { t, lang, setLang, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border"
      style={{ background: "linear-gradient(180deg, #FFE2E2 0%, #FBEFEF 100%)" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="text-foreground font-bold">{siteConfig.brand}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-secondary">
              {t.footer.tagline}
            </p>
            <SocialLinks className="mt-5" />

            {/* Language switcher */}
            <div className="mt-6 flex gap-2">
              {(Object.keys(languageNames) as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${l === lang
                    ? "border-accent bg-accent-light text-accent"
                    : "border-border bg-white/60 text-foreground-secondary hover:border-accent-light hover:text-foreground"
                    }`}
                >
                  {languageNames[l]}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
              {t.footer.navigation}
            </h3>
            <ul className="mt-4 space-y-3">
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground-secondary transition-colors hover:text-accent"
                  >
                    {t.nav[route.key]}
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="lg:col-span-6">
            <div
              className="rounded-2xl border border-[#C5B3D3]/30 p-8 shadow-sm"
              style={{ background: "linear-gradient(135deg, #ffffff 0%, #fffafa 100%)" }}
            >
              <h3 className="text-lg font-bold text-foreground">{t.footer.footerCta}</h3>
              <p className="mt-2 text-sm text-foreground-secondary">{t.footer.footerCtaSub}</p>
              <Button href="/contact" className="mt-5" showArrow>
                {t.footer.footerCtaBtn}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <p className="text-sm text-foreground-muted">
            © {currentYear} {siteConfig.brand}. {t.footer.rights}
          </p>
          <p className="text-sm text-foreground-muted">
            Built with care by {siteConfig.owner}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
