import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const designPrinciples = [
  { icon: "✦", text: "Visual clarity" },
  { icon: "✦", text: "Mobile-first" },
  { icon: "✦", text: "Clean architecture" },
  { icon: "✦", text: "Business-focused" },
];

export function AboutPreview() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left visual */}
          <Reveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              {/* Background gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(145deg, #EFF6FF 0%, #F8F8F6 40%, #F0F0ED 100%)",
                }}
              />
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Floating design elements */}
              <div className="absolute inset-0 p-7">
                {/* Top card — browser frame */}
                <div className="mb-4 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="flex items-center gap-1.5 border-b border-border/50 bg-gray-50 px-3 py-2.5">
                    <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                    <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <div className="h-2 w-2 rounded-full bg-[#28CA41]" />
                    <div className="mx-auto h-4 w-28 rounded bg-foreground/5 text-center text-[8px] leading-4 text-foreground/30">
                      yourbusiness.com
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="h-2 w-16 rounded bg-foreground/15" />
                      <div className="flex gap-1.5">
                        <div className="h-5 w-12 rounded-md bg-accent/80" />
                      </div>
                    </div>
                    <div className="mb-1.5 h-3 w-full rounded bg-foreground/10" />
                    <div className="mb-1.5 h-3 w-5/6 rounded bg-foreground/10" />
                    <div className="mb-4 h-2 w-3/4 rounded bg-foreground/6" />
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-10 rounded-lg border border-border"
                          style={{ background: i === 0 ? "#EFF6FF" : "#f8f8f6" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Principles list */}
                <div className="mb-4 rounded-2xl border border-border bg-white/80 p-4 backdrop-blur-sm">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted">
                    Design Principles
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {designPrinciples.map((p) => (
                      <div
                        key={p.text}
                        className="flex items-center gap-1.5 text-xs font-medium text-foreground-secondary"
                      >
                        <span className="text-accent text-[10px]">{p.icon}</span>
                        {p.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom stat panel */}
                <div className="rounded-2xl border border-border bg-white/90 px-4 py-3 backdrop-blur-sm shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-accent">ITHelper</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        Professional digital experiences
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white text-xs font-bold shadow-sm">
                      A
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-foreground-muted">
                    Design · Development · Delivery
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right content */}
          <div>
            <SectionHeading
              label="About"
              title="Technology is only part of a great website."
              description="I don't just write code. I think about how a website should look, feel, communicate, and perform — so your business makes the right impression from the first visit."
            />

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-foreground-secondary">
                Combining frontend development, UI/UX thinking, responsive design,
                and clean architecture, I build websites that feel professional,
                load quickly, and work beautifully on every device.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-accent sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all hover:gap-2.5"
              >
                Learn more about my approach
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
