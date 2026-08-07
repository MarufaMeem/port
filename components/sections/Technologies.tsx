"use client";

import { technologies } from "@/lib/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Technology categories with colors for visual interest
const techGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
    color: "#2563EB",
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python"],
    color: "#0F766E",
  },
  {
    label: "Database",
    items: ["MongoDB", "MySQL"],
    color: "#7C3AED",
  },
  {
    label: "Tools",
    items: ["Git", "REST APIs"],
    color: "#BE185D",
  },
];

export function Technologies() {
  return (
    <section className="section-padding border-t border-border">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading
            label="Capabilities"
            title="The technology behind the experience."
            description="Modern, reliable tools chosen to build fast, maintainable, and polished digital experiences."
            align="center"
            className="mx-auto"
          />
        </div>

        <Reveal>
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techGroups.map((group, gi) => (
                <div key={group.label} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-1.5 w-4 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.15em]"
                      style={{ color: group.color }}
                    >
                      {group.label}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-foreground-secondary transition-colors hover:border-accent/20 hover:text-foreground"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: group.color }}
                        />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background-secondary px-6 py-5 text-center">
              <p className="text-sm text-foreground-secondary">
                The right technology for{" "}
                <span className="font-medium text-foreground">your</span>{" "}
                project — not just the most popular one. Every tool chosen with
                purpose, performance, and long-term maintainability in mind.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
