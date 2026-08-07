"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const accentColors = ["#1e40af", "#7c3aed", "#0f766e", "#be185d"];
const emojis = ["🎯", "📱", "✨", "🌱"];

function TiltCard({ title, desc, accent, emoji, enabled }: {
  title: string; desc: string; accent: string; emoji: string; enabled: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    const y = ((e.clientY - r.top) / r.height) * 2 - 1;
    ref.current.style.transform = `perspective(700px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(6px)`;
    ref.current.style.transition = "transform 0.1s ease-out";
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateZ(0)";
    ref.current.style.transition = "transform 0.4s ease-out";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
      style={{ willChange: "transform" }}
    >
      {/* Colored top bar */}
      <div className="mb-4 h-1 w-10 rounded-full" style={{ background: accent }} />
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-lg" style={{ background: `${accent}12`, border: `1px solid ${accent}20` }}>
        {emoji}
      </div>
      <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{desc}</p>
    </div>
  );
}

export function WhyWorkWithMe() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading
          label={t.why.label}
          title={t.why.title}
          description=""
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2" dir={isRTL ? "rtl" : "ltr"}>
          {t.why.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <TiltCard
                title={item.title}
                desc={item.desc}
                accent={accentColors[i % accentColors.length]}
                emoji={emojis[i % emojis.length]}
                enabled={true}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
