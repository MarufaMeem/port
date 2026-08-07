"use client";

import {
  Building2,
  Rocket,
  Layout,
  Monitor,
  ShoppingBag,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Rocket,
  Layout,
  Monitor,
  ShoppingBag,
  RefreshCw,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "compact";
}

export function ServiceCard({
  service,
  index = 0,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Building2;

  return (
    <Reveal delay={index * 0.08}>
      <Link
        href="/services"
        className={cn(
          "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:shadow-md sm:p-8",
          variant === "compact" && "p-5 sm:p-6",
        )}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-secondary sm:text-base">
          {service.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all group-hover:gap-2.5">
          Explore service
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
