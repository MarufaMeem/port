"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/lib/types";

function TechChip({ label, color }: { label: string; color: string }) {
    return (
        <span
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            style={{ background: `${color}15`, color }}
        >
            {label}
        </span>
    );
}

function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.div
            className={`group relative overflow-hidden rounded-xl border border-border bg-background-secondary ${className ?? ""}`}
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.005 }}
            transition={{ duration: 0.25 }}
        >
            <div
                className="relative w-full"
                style={{ paddingBottom: "62.5%", perspective: "800px" }}
            >
                <motion.div
                    className="absolute inset-0"
                    whileHover={
                        shouldReduceMotion
                            ? {}
                            : { rotateX: -2, rotateY: 3, scale: 1.02 }
                    }
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover object-top transition-all duration-500 group-hover:brightness-[1.02]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ borderRadius: "inherit" }}
                    />
                </motion.div>
            </div>
            {/* Glow border on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-2 ring-accent/30 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}

// Layout 1: Large featured hero card (full width, image top)
function FeaturedHeroCard({ project }: { project: Project }) {
    return (
        <Reveal>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="relative w-full" style={{ paddingBottom: "42%" }}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Category badge */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                        {project.category}
                    </div>
                </div>
                <div className="p-7 lg:p-9">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-foreground-muted">{project.year}</p>
                            <h3 className="text-2xl font-bold text-foreground lg:text-3xl">{project.title}</h3>
                            <p className="mt-2 max-w-2xl text-foreground-secondary">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.technologies.map((t, i) => (
                                    <TechChip key={t} label={t} color={["#2563eb", "#7c3aed", "#0f766e", "#be185d"][i % 4]} />
                                ))}
                            </div>
                        </div>
                        <Link
                            href={`/work/${project.slug}`}
                            className="group/link flex items-center gap-2 whitespace-nowrap rounded-xl bg-foreground px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent"
                        >
                            View Case Study
                            <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

// Layout 2: Split card (text left, image right OR reversed)
function SplitCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
    return (
        <Reveal direction={reversed ? "right" : "left"}>
            <div className="grid gap-6 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg lg:grid-cols-2 lg:items-center lg:p-8">
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-foreground-muted">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground lg:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.technologies.map((t, i) => (
                            <TechChip key={t} label={t} color={["#2563eb", "#7c3aed", "#0f766e", "#be185d", "#f59e0b"][i % 5]} />
                        ))}
                    </div>
                    <Link
                        href={`/work/${project.slug}`}
                        className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
                    >
                        Explore Project <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                    <ProjectImage src={project.image} alt={project.title} />
                </div>
            </div>
        </Reveal>
    );
}

// Layout 3: Small grid card
function GridCard({ project }: { project: Project }) {
    return (
        <Reveal>
            <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="flex flex-1 flex-col p-5">
                    <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-foreground-muted">{project.category}</span>
                    <h3 className="font-bold text-foreground">{project.title}</h3>
                    <p className="mt-1.5 text-sm text-foreground-secondary line-clamp-2">{project.description}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((t, i) => (
                            <TechChip key={t} label={t} color={["#2563eb", "#0f766e", "#7c3aed"][i % 3]} />
                        ))}
                    </div>
                    <Link
                        href={`/work/${project.slug}`}
                        className="group/link mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent"
                    >
                        View Project <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </Reveal>
    );
}

export function ProjectGallery() {
    const [p0, p1, p2, p3, ...rest] = projects;

    return (
        <section className="section-padding bg-background-blue">
            <Container>
                <SectionHeading
                    label="Selected Work"
                    title="Projects built with purpose."
                    description="A collection of digital experiences, platforms, and applications — each designed around real goals and real users."
                    align="center"
                    className="mx-auto"
                />

                <div className="mt-12 space-y-6">
                    {/* Row 1: Full-width hero card */}
                    {p0 && <FeaturedHeroCard project={p0} />}

                    {/* Row 2: Two-column pair */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        {p1 && <SplitCard project={p1} />}
                        {p2 && <SplitCard project={p2} reversed />}
                    </div>

                    {/* Row 3: Full-width reversed featured */}
                    {p3 && <SplitCard project={p3} reversed />}

                    {/* Row 4: Grid of remaining projects */}
                    {rest.length > 0 && (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {rest.map((project) => (
                                <GridCard key={project.slug} project={project} />
                            ))}
                        </div>
                    )}
                </div>

                <Reveal>
                    <div className="mt-12 text-center">
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-white px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent hover:bg-accent hover:text-white"
                        >
                            View All Projects
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
