"use client";

import { useState } from "react";
import type { ProjectFilter } from "@/lib/types";
import { projects, projectFilters } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/FeaturedProject";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const featured = filteredProjects.filter((p) => p.featured);
  const rest = filteredProjects.filter((p) => !p.featured);

  return (
    <>
      <section className="section-padding pt-[calc(var(--nav-height)+4rem)] pb-8">
        <Container>
          <SectionHeading
            label="Portfolio"
            title="Selected work."
            description="A collection of digital experiences, applications, and experiments I've built — each focused on clarity, usability, and professional presentation."
          />

          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    activeFilter === filter.value
                      ? "bg-accent text-white shadow-sm"
                      : "border border-border bg-surface text-foreground-secondary hover:border-border-strong hover:text-foreground",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          {filteredProjects.length === 0 ? (
            <p className="py-12 text-center text-foreground-secondary">
              No projects in this category yet.
            </p>
          ) : (
            <div className="space-y-8">
              {featured.map((project, index) => (
                <FeaturedProject
                  key={project.slug}
                  project={project}
                  layout={index % 2 === 0 ? "full" : "split"}
                  index={index}
                />
              ))}

              {rest.length > 0 && (
                <div className="grid gap-6 pt-4 sm:grid-cols-2">
                  {rest.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title="Want something like this?"
        description="Every project starts with a conversation. Tell me about your business, your goals, and what you're looking to build."
        buttonText="Let's talk"
      />
    </>
  );
}
