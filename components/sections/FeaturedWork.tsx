import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Work"
            title="Selected work."
            description="A collection of digital experiences and applications built with attention to design, usability, and business value."
          />
          <Reveal>
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent transition-all hover:gap-2.5"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 space-y-8">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              layout={index === 0 ? "full" : "split"}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
