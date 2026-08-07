"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import type { Project } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { isPlaceholderUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface FeaturedProjectProps {
  project: Project;
  layout?: "full" | "split";
  index?: number;
}

export function FeaturedProject({
  project,
  layout = "full",
  index = 0,
}: FeaturedProjectProps) {
  const isReversed = layout === "split" && index % 2 === 1;

  return (
    <Reveal>
      <article
        className={cn(
          "group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg",
          layout === "split" &&
          "grid items-center gap-0 lg:grid-cols-2 lg:gap-0",
        )}
      >
        {layout === "full" ? (
          <>
            <div className="overflow-hidden">
              <ProjectVisual project={project} className="rounded-none border-0 shadow-none" />
            </div>
            <ProjectContent project={project} className="p-6 sm:p-8 lg:p-10" />
          </>
        ) : (
          <>
            <div className={cn("overflow-hidden", isReversed && "lg:order-2")}>
              <ProjectVisual
                project={project}
                className="rounded-none border-0 shadow-none"
              />
            </div>
            <ProjectContent
              project={project}
              className={cn("p-6 sm:p-8 lg:p-10", isReversed && "lg:order-1")}
            />
          </>
        )}
      </article>
    </Reveal>
  );
}

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

export function ProjectVisual({ project, className }: ProjectVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative w-full overflow-hidden bg-background-secondary", className)}
      style={{ paddingBottom: "58%", perspective: "800px" }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={shouldReduceMotion ? {} : { rotateX: -2, rotateY: 2, scale: 1.03 }}
        transition={{ duration: 0.35 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      {/* Subtle overlay on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

interface ProjectContentProps {
  project: Project;
  className?: string;
}

function ProjectContent({ project, className }: ProjectContentProps) {
  return (
    <div className={className}>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: `${project.accentColor}15`, color: project.accentColor }}
        >
          {project.category}
        </span>
        <span className="text-xs text-foreground-muted">{project.year}</span>
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-foreground-secondary">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-background-secondary px-2.5 py-1 text-xs font-medium text-foreground-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`/work/${project.slug}`} variant="primary" size="sm" showArrow>
          View Project
        </Button>
        {!isPlaceholderUrl(project.githubUrl) && (
          <Button
            href={project.githubUrl}
            variant="secondary"
            size="sm"
            external
          >
            <GitHubIcon size={16} className="mr-1.5" />
            GitHub
          </Button>
        )}
        {!isPlaceholderUrl(project.liveUrl) && (
          <Button
            href={project.liveUrl}
            variant="ghost"
            size="sm"
            external
          >
            <ExternalLink size={16} className="mr-1.5" />
            Live Site
          </Button>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal delay={index * 0.1}>
      <Link
        href={`/work/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:shadow-md"
      >
        {/* Real screenshot image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingBottom: "58%", perspective: "600px" }}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={shouldReduceMotion ? {} : { scale: 1.04, rotateX: -1, rotateY: 2 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
          {/* Category badge overlay */}
          <div className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-white/85 px-2.5 py-0.5 text-[11px] font-semibold text-foreground backdrop-blur-sm">
            {project.category}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium" style={{ color: project.accentColor }}>
              {project.year}
            </span>
            <ArrowRight
              size={14}
              className="text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
            />
          </div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-foreground-secondary">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-background-secondary px-2 py-0.5 text-[10px] font-medium text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
