"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { languageNames, type Language } from "@/lib/i18n/translations";

const navRoutes = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "services" as const, href: "/services" },
  { key: "work" as const, href: "/work" },
  { key: "saudiReady" as const, href: "/saudi-ready" },
  { key: "contact" as const, href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { t, lang, setLang, isRTL } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-[var(--nav-height)] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
          aria-label="Main navigation"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Brand */}
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-lg"
          >
            <span className="text-foreground font-bold">{siteConfig.brand}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            <ul className={`flex items-center gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "link-underline text-sm font-medium transition-colors",
                      pathname === route.href
                        ? "text-foreground"
                        : "text-foreground-secondary hover:text-foreground",
                    )}
                  >
                    {t.nav[route.key]}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground-secondary shadow-sm transition hover:border-accent hover:text-accent"
                aria-label="Select language"
                aria-expanded={langOpen}
              >
                <Globe size={13} />
                <span>{languageNames[lang]}</span>
                <ChevronDown size={11} className={cn("transition-transform", langOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute top-full mt-2 min-w-[130px] overflow-hidden rounded-xl border border-border bg-surface shadow-lg ${isRTL ? "left-0" : "right-0"}`}
                  >
                    {(Object.keys(languageNames) as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={cn(
                          "flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors hover:bg-background-secondary",
                          l === lang ? "font-semibold text-accent bg-accent-light" : "text-foreground-secondary"
                        )}
                      >
                        <span className="opacity-60 text-xs">{l === "en" ? "EN" : l === "ar" ? "ع" : "বা"}</span>
                        {languageNames[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button href="/contact" size="sm" showArrow>
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        pathname={pathname}
        onClose={() => setIsMobileOpen(false)}
        shouldReduceMotion={!!shouldReduceMotion}
      />
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
  shouldReduceMotion: boolean;
}

function MobileMenu({ isOpen, pathname, onClose, shouldReduceMotion }: MobileMenuProps) {
  const { t, lang, setLang, isRTL } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={shouldReduceMotion ? false : { x: isRTL ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed inset-y-0 ${isRTL ? "left-0" : "right-0"} z-50 flex w-full max-w-sm flex-col bg-background px-6 py-8 shadow-xl lg:hidden`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-lg font-bold">
                <span className="text-foreground font-bold">{siteConfig.brand}</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navRoutes.map((route, i) => (
                <motion.li
                  key={route.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: isRTL ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={route.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-xl font-semibold transition-colors",
                      pathname === route.href
                        ? "bg-accent-light text-accent"
                        : "text-foreground hover:bg-background-secondary",
                    )}
                  >
                    {t.nav[route.key]}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Language selector in mobile */}
            <div className="mt-8 flex gap-2">
              {(Object.keys(languageNames) as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "flex-1 rounded-xl border py-2 text-xs font-bold transition-all",
                    l === lang
                      ? "border-accent bg-accent-light text-accent"
                      : "border-border bg-surface text-foreground-secondary hover:border-accent-light"
                  )}
                >
                  {languageNames[l]}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <Button href="/contact" size="lg" className="w-full" showArrow>
                {t.nav.cta}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
