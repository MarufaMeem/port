import { createMetadata } from "@/lib/metadata";
import { stats, capabilities, clientValues } from "@/lib/data/content";
import { technologies } from "@/lib/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/data/site";

export const metadata = createMetadata({
  title: "About — ITHelper",
  description:
    "Learn about ITHelper — a premium web design and development studio focused on business-ready digital experiences.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-height)+4rem)] pb-8 sm:pb-12">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Building with technology.{" "}
              <span className="text-accent">Designing with purpose.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
              I&apos;m {siteConfig.owner}, the developer behind {siteConfig.name}.
              I create professional websites and digital experiences for businesses
              that want to look established, communicate clearly, and grow with
              confidence.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding border-t border-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                {/* Gradient background */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(145deg, #EFF6FF 0%, #F8F8F6 50%, #F0F0ED 100%)" }}
                />
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative flex h-full flex-col justify-between p-7">
                  {/* Browser card */}
                  <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    <div className="flex items-center gap-1.5 border-b border-border/50 bg-gray-50 px-3 py-2">
                      <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                      <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                      <div className="h-2 w-2 rounded-full bg-[#28CA41]" />
                      <div className="mx-auto h-3 w-28 rounded bg-foreground/5" />
                    </div>
                    <div className="p-4">
                      <div className="mb-1.5 h-2.5 w-3/4 rounded bg-foreground/12" />
                      <div className="mb-2.5 h-2.5 w-1/2 rounded bg-foreground/8" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded-lg bg-accent/80" />
                        <div className="h-6 w-16 rounded-lg border border-border" />
                      </div>
                    </div>
                  </div>
                  {/* Middle stats card */}
                  <div className="rounded-2xl border border-border bg-white/80 px-4 py-3 backdrop-blur-sm">
                    <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground-muted">My Approach</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Visual clarity", "Mobile-first", "Clean code", "Business results"].map((item) => (
                        <div key={item} className="flex items-center gap-1.5 text-xs text-foreground-secondary">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom brand card */}
                  <div className="rounded-2xl border border-border bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <p className="text-xs font-semibold text-accent">{siteConfig.brand}</p>
                    <p className="mt-1 text-base font-bold text-foreground">
                      Professional digital experiences
                    </p>
                    <p className="mt-1 text-xs text-foreground-muted">Design · Development · Delivery</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                title="A developer who thinks like a designer."
                description="Great websites aren't built by accident. They require intentional decisions about layout, messaging, responsiveness, and the details that make an experience feel premium."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-foreground-secondary">
                  My approach combines frontend development with UI/UX thinking —
                  ensuring every website not only works technically, but also
                  communicates the right message to the right audience. I focus on
                  clarity, performance, and the kind of polish that builds trust
                  from the first visit.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-secondary">
        <Container>
          <SectionHeading
            label="Philosophy"
            title="Development philosophy."
            description="Every project is guided by principles that prioritize the people who will actually use the website."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {clientValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="rounded-2xl border border-border bg-surface p-7 text-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              label="Capabilities"
              title="What I bring to every project."
            />
            <Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground-secondary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {cap}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background-secondary p-6 text-center"
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding border-t border-border bg-background-secondary">
        <Container>
          <SectionHeading
            label="Technology"
            title="Tools that support great experiences."
            description="Modern, reliable technologies chosen for performance, maintainability, and the ability to deliver polished results."
            align="center"
            className="mx-auto"
          />
          <Reveal>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
