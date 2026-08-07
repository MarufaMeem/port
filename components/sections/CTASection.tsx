"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
  variant = "default",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "dark";
}) {
  const { t, isRTL } = useLanguage();
  const finalTitle = title ?? t.cta.title;
  const finalDesc = description ?? t.cta.description;
  const finalBtn = buttonText ?? t.cta.primary;

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #FFE2E2 0%, #FBEFEF 100%)" }}>
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24"
            style={{
              background: "linear-gradient(135deg, #FBEFEF 0%, #FFE2E2 40%, #F5CBCB 70%, #C5B3D3 100%)",
              border: "1px solid rgba(197,179,211,0.4)",
            }}
          >
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(197,179,211,0.45)" }} />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-3xl" style={{ background: "rgba(245,203,203,0.55)" }} />
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.025]"
              style={{
                backgroundImage: `linear-gradient(#18181b 1px, transparent 1px), linear-gradient(90deg, #18181b 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative mx-auto max-w-2xl text-center" dir={isRTL ? "rtl" : "ltr"}>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5B3D3]/50 bg-white/60 px-4 py-1.5 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(135deg,#1e40af,#7c3aed)" }} />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-foreground-secondary">
                  Let&apos;s build together
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {finalTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground-secondary sm:text-lg">
                {finalDesc}
              </p>

              <div className={`mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }} transition={{ duration: 0.18 }}>
                  <Link
                    href={buttonHref}
                    className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #1e40af 0%, #4f46e5 100%)" }}
                  >
                    {finalBtn}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }} transition={{ duration: 0.18 }}>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground-secondary transition-colors hover:text-foreground"
                  >
                    {t.cta.secondary}
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
