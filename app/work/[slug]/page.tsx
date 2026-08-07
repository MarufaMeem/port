import { notFound } from "next/navigation";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/projects/FeaturedProject";
import { CTASection } from "@/components/sections/CTASection";
import { isPlaceholderUrl } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return createMetadata({
    title: `${project.title} — ITHelper`,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const sections = [
    { title: "The Challenge", content: project.challenge },
    { title: "The Approach", content: project.approach },
    { title: "The Experience", content: project.experience },
    { title: "The Build", content: project.build },
    { title: "The Result", content: project.result },
  ];

  return (
    <>
      <article>
        <section className="pt-[calc(var(--nav-height)+3rem)] pb-12 sm:pb-16">
          <Container>
            <Reveal>
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                  <span className="text-sm text-foreground-muted">
                    {project.year}
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-foreground-secondary">
                  {project.longDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {!isPlaceholderUrl(project.liveUrl) && (
                    <Button href={project.liveUrl} external showArrow>
                      View Live
                    </Button>
                  )}
                  {!isPlaceholderUrl(project.githubUrl) && (
                    <Button href={project.githubUrl} variant="secondary" external>
                      <GitHubIcon size={16} className="mr-1.5" />
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 overflow-hidden rounded-3xl border border-border">
                <ProjectVisual project={project} />
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="section-padding border-t border-border bg-background-secondary">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-12">
                {sections.map((section, index) => (
                  <Reveal key={section.title} delay={index * 0.05}>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-foreground-secondary">
                        {section.content}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="space-y-8">
                <Reveal delay={0.1}>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground-muted">
                      Technology
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="text-sm text-foreground-secondary"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground-muted">
                      Key Features
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {project.keyFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <Reveal>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                More from this project
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <ProjectVisual project={project} />
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </article>

      <CTASection
        title="Have a project in mind?"
        description="Let's discuss how we can create a digital experience that represents your business with clarity and confidence."
        buttonText="Let's talk"
      />
    </>
  );
}
