"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "framer-motion";

const icons = ["🏢", "🚀", "👤", "💻", "🛍️", "🔄"];
const gradients = [
  ["#FBEFEF", "#FFE2E2", "#1e40af"],
  ["#FFE2E2", "#F5CBCB", "#7c3aed"],
  ["#F5CBCB", "#C5B3D3", "#0f766e"],
  ["#FBEFEF", "#C5B3D3", "#0ea5e9"],
  ["#FFE2E2", "#C5B3D3", "#be185d"],
  ["#FBEFEF", "#FFE2E2", "#f59e0b"],
];

function TiltCard({
  from, to, accent, icon, title, desc, learnMore, href, enabled
}: {
  from: string; to: string; accent: string; icon: string;
  title: string; desc: string; learnMore: string; href: string; enabled: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    cardRef.current.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(4px)`;
    cardRef.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    cardRef.current.style.transition = "transform 0.45s ease-out";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full overflow-hidden rounded-2xl border border-border p-6 transition-shadow hover:shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        willChange: "transform",
      }}
    >
      {/* Subtle corner circle */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.12]"
        style={{ background: accent }}
      />
      {/* Icon */}
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-lg shadow-sm"
        style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
      >
        {icon}
      </div>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{desc}</p>
      <Link
        href={href}
        className="group/link mt-5 inline-flex items-center gap-1.5 text-xs font-bold"
        style={{ color: accent }}
      >
        {learnMore}
        <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}

export function ServicesOverview() {
  const { t, isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-background">
      <Container>
        <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <SectionHeading
            label={t.services.label}
            title={t.services.title}
            description={t.services.description}
          />
          <Reveal>
            <Link
              href="/services"
              className="group whitespace-nowrap inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground-secondary shadow-sm transition-all hover:border-accent hover:bg-accent hover:text-white"
            >
              {t.services.viewAll}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" dir={isRTL ? "rtl" : "ltr"}>
          {t.services.items.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.07}>
              <TiltCard
                from={gradients[i][0]}
                to={gradients[i][1]}
                accent={gradients[i][2]}
                icon={icons[i]}
                title={svc.title}
                desc={svc.desc}
                learnMore={t.services.learnMore}
                href={`/services`}
                enabled={!shouldReduceMotion}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
