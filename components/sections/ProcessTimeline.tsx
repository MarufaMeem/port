"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimeline() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #FBEFEF 0%, #FFE2E2 100%)" }}
    >
      <Container>
        <SectionHeading
          label={t.process.label}
          title={t.process.title}
          description={t.process.description}
          align="center"
          className="mx-auto"
        />

        {/* Desktop horizontal */}
        <div className="mt-14 hidden lg:block" dir={isRTL ? "rtl" : "ltr"}>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[2.1rem] z-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C5B3D3 20%, #F5CBCB 50%, #C5B3D3 80%, transparent)" }} />
            <div className="relative z-10 grid grid-cols-6 gap-6">
              {t.process.steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.07}>
                  <div className="group flex flex-col items-center text-center">
                    <div
                      className="relative mb-4 flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border-2 shadow-md transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        borderColor: "#C5B3D3",
                        background: "white",
                        boxShadow: "0 4px 16px rgba(197,179,211,0.3)",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#1e40af";
                        (e.currentTarget as HTMLElement).style.background = "#FBEFEF";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#C5B3D3";
                        (e.currentTarget as HTMLElement).style.background = "white";
                      }}
                    >
                      <span className="text-xs font-extrabold tabular-nums text-foreground-secondary group-hover:text-accent transition-colors">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-foreground-secondary">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="mt-10 lg:hidden" dir={isRTL ? "rtl" : "ltr"}>
          <div className="relative space-y-0">
            {t.process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.06}>
                <div className={`relative flex gap-5 pb-8 last:pb-0 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {i < t.process.steps.length - 1 && (
                    <div
                      className={`absolute top-[3.5rem] h-[calc(100%-1rem)] w-px ${isRTL ? "right-[1.62rem]" : "left-[1.62rem]"}`}
                      style={{ background: "linear-gradient(to bottom, #C5B3D3, #F5CBCB)" }}
                    />
                  )}
                  <div className="relative z-10 flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm" style={{ borderColor: "#C5B3D3" }}>
                    <span className="text-xs font-extrabold tabular-nums text-foreground-secondary">{step.number}</span>
                  </div>
                  <div className={`pt-2 ${isRTL ? "text-right" : ""}`}>
                    <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-foreground-secondary">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
