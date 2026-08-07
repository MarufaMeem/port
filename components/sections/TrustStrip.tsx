"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  const { t, isRTL } = useLanguage();

  return (
    <div
      className="border-y border-[#C5B3D3]/30 py-4"
      style={{ background: "linear-gradient(90deg, #FFE2E2 0%, #F5CBCB 50%, #FFE2E2 100%)" }}
    >
      <Container>
        <div
          className={`flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-secondary sm:gap-0`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {t.trust.items.map((item, i) => (
            <span key={item} className="flex items-center gap-2 whitespace-nowrap">
              {item}
              {i < t.trust.items.length - 1 && (
                <span className="hidden text-[#C5B3D3] sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
