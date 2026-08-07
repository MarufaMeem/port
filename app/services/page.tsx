import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/data/services";
import { processSteps } from "@/lib/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata = createMetadata({
  title: "Web Design & Development Services — ITHelper",
  description:
    "Professional web design and development services including business websites, landing pages, portfolio sites, SaaS interfaces, and website redesigns.",
  path: "/services",
});

const deliverables = [
  "Responsive design for all devices",
  "Clean, modern visual presentation",
  "Fast-loading, optimized pages",
  "Clear structure and navigation",
  "SEO-friendly foundation",
  "Deployment-ready delivery",
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-height)+4rem)] pb-8 sm:pb-12">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Services
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Websites built around your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
              I create digital experiences designed around your goals — whether
              you need a company website, a high-converting landing page, or a
              modern web application interface.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding border-t border-border">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-secondary">
        <Container>
          <SectionHeading
            label="Process"
            title="How I work."
            description="A clear, collaborative process that keeps your project organized from discovery through launch."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <span className="text-xs font-bold text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              label="Deliverables"
              title="What clients receive."
              description="Every project is delivered with the fundamentals that make a website professional, usable, and ready for the real world."
            />
            <Reveal>
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-foreground-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-padding border-t border-border bg-background-secondary">
        <Container>
          <SectionHeading
            label="FAQ"
            title="Common questions."
            description="Straightforward answers to help you understand how we can work together."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <FAQSection />
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Tell me about your business and what you're looking to build. I'd love to hear from you."
      />
    </>
  );
}
