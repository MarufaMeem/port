"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  title?: string;
  accentColor?: string;
  className?: string;
  variant?: "dashboard" | "landing" | "portfolio" | "ecommerce";
}

export function BrowserMockup({
  title = "yourbusiness.com",
  accentColor = "#2563EB",
  className,
  variant = "landing",
}: BrowserMockupProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative w-full", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-lg"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10), 0 4px 20px rgba(0,0,0,0.06)" }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-background-secondary px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
          </div>
          <div className="mx-auto flex h-7 max-w-xs flex-1 items-center justify-center rounded-md bg-surface px-3 text-xs text-foreground-muted">
            {title}
          </div>
        </div>

        {/* Content area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          {variant === "landing" && (
            <LandingPreview accentColor={accentColor} />
          )}
          {variant === "dashboard" && (
            <DashboardPreview accentColor={accentColor} />
          )}
          {variant === "portfolio" && (
            <PortfolioPreview accentColor={accentColor} />
          )}
          {variant === "ecommerce" && (
            <EcommercePreview accentColor={accentColor} />
          )}
        </div>
      </motion.div>

      {/* Floating cards */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 },
              x: { delay: 0.8, duration: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            className="absolute -right-4 top-1/4 hidden rounded-xl border border-border bg-surface p-3 shadow-md sm:block lg:-right-8"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${accentColor}20` }}
              >
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: accentColor }} />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-foreground">New visitor</div>
                <div className="mt-0.5 h-1.5 w-12 rounded bg-foreground/8" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              x: { delay: 1, duration: 0.5 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute -left-4 bottom-1/4 hidden rounded-xl border border-border bg-surface p-3 shadow-md sm:block lg:-left-8"
          >
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
                <span className="text-[10px] font-bold" style={{ color: accentColor }}>✓</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">98</div>
                <div className="text-[9px] text-foreground-muted">Performance</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

function LandingPreview({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex h-full flex-col" style={{ background: "linear-gradient(160deg, #f8f8f6 0%, #f0f0ed 100%)" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-black/5 bg-white/70">
        <div className="h-2.5 w-20 rounded bg-foreground/20" />
        <div className="flex gap-3 items-center">
          <div className="h-1.5 w-8 rounded bg-foreground/10" />
          <div className="h-1.5 w-8 rounded bg-foreground/10" />
          <div className="h-5 w-14 rounded-lg" style={{ backgroundColor: accentColor }} />
        </div>
      </div>
      {/* Hero */}
      <div className="flex flex-1 items-center justify-between px-6 py-4 gap-4">
        <div className="flex-1 max-w-[55%]">
          <div className="mb-1.5 h-1.5 w-20 rounded" style={{ backgroundColor: `${accentColor}50` }} />
          <div className="mb-1 h-3.5 w-full rounded bg-foreground/18" />
          <div className="mb-1 h-3.5 w-5/6 rounded bg-foreground/18" />
          <div className="mb-4 h-2 w-3/4 rounded bg-foreground/8" />
          <div className="flex gap-2">
            <div className="h-7 w-20 rounded-lg" style={{ backgroundColor: accentColor }} />
            <div className="h-7 w-20 rounded-lg border border-border" />
          </div>
        </div>
        <div className="flex-1 max-w-[42%] space-y-2">
          <div className="h-24 rounded-xl border border-border bg-white shadow-sm" />
        </div>
      </div>
      {/* Cards strip */}
      <div className="grid grid-cols-3 gap-2 px-6 pb-4">
        {[accentColor + "12", "#00000008", "#00000008"].map((bg, i) => (
          <div key={i} className="h-12 rounded-xl border border-border" style={{ background: bg }}>
            <div className="flex flex-col gap-1 p-2">
              <div className="h-1.5 w-8 rounded bg-foreground/10" />
              <div className="h-2 w-12 rounded bg-foreground/15" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardPreview({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex h-full bg-gray-50">
      {/* Sidebar */}
      <div className="hidden w-[22%] border-r border-border bg-white p-3 sm:block">
        <div className="mb-4 h-3 w-14 rounded bg-foreground/20" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`mb-2 flex items-center gap-2 rounded-lg px-2 py-1.5 ${i === 1 ? "" : ""}`}
            style={{ backgroundColor: i === 1 ? `${accentColor}15` : "transparent" }}>
            <div className="h-2 w-2 rounded-full"
              style={{ backgroundColor: i === 1 ? accentColor : "#00000015" }} />
            <div className="h-1.5 flex-1 rounded bg-foreground/8" />
          </div>
        ))}
      </div>
      {/* Main content */}
      <div className="flex-1 p-3 sm:p-4">
        {/* Stats */}
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[accentColor, "#10b981", "#f59e0b"].map((color, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-2.5 shadow-sm">
              <div className="mb-1 h-1.5 w-8 rounded bg-foreground/8" />
              <div className="h-4 w-10 rounded" style={{ backgroundColor: `${color}25` }}>
                <div className="h-full w-3/4 rounded" style={{ backgroundColor: color, opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
          <div className="mb-2 h-1.5 w-16 rounded bg-foreground/12" />
          <div className="flex h-16 items-end gap-1.5">
            {[35, 55, 42, 70, 48, 62, 85, 58, 72, 90, 68, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 10 ? accentColor : `${accentColor}30`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex h-full flex-col" style={{ background: "#fafafa" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 bg-white">
        <div className="h-2.5 w-14 rounded bg-foreground/20" />
        <div className="flex gap-2.5">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-1.5 w-8 rounded bg-foreground/10" />
          ))}
        </div>
      </div>
      {/* Hero */}
      <div className="flex flex-1 items-center gap-4 px-5 py-3">
        <div className="flex-1">
          <div className="mb-1 h-1.5 w-16 rounded" style={{ backgroundColor: `${accentColor}60` }} />
          <div className="mb-1 h-4 w-full rounded bg-foreground/18" />
          <div className="mb-3 h-4 w-4/5 rounded bg-foreground/12" />
          <div className="h-1.5 w-full rounded bg-foreground/8" />
          <div className="mt-1 h-1.5 w-3/4 rounded bg-foreground/6" />
          <div className="mt-3 h-6 w-16 rounded-lg" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="w-2/5 space-y-2">
          <div className="h-24 rounded-xl border border-border bg-white shadow-sm overflow-hidden">
            <div className="h-full w-full" style={{ background: `linear-gradient(135deg, ${accentColor}15, transparent)` }} />
          </div>
        </div>
      </div>
      {/* Project grid */}
      <div className="grid grid-cols-2 gap-2 px-5 pb-4">
        {[accentColor, "#10b981"].map((color, i) => (
          <div key={i} className="h-10 rounded-lg border border-border bg-white overflow-hidden shadow-sm">
            <div className="h-1 w-full" style={{ backgroundColor: color }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommercePreview({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-border px-5 py-2.5">
        <div className="h-2.5 w-16 rounded bg-foreground/20" />
        <div className="flex gap-2 items-center">
          <div className="h-1.5 w-8 rounded bg-foreground/10" />
          <div className="h-1.5 w-8 rounded bg-foreground/10" />
          <div className="h-5 w-5 rounded-md border border-border" />
        </div>
      </div>
      {/* Products */}
      <div className="flex-1 p-4">
        <div className="mb-2 h-1.5 w-20 rounded bg-foreground/12" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-border overflow-hidden">
              <div className="aspect-square" style={{ background: i === 0 ? `${accentColor}15` : i === 1 ? "#f3f3f0" : "#f8f0ff" }} />
              <div className="p-2">
                <div className="h-1.5 w-full rounded bg-foreground/12 mb-1" />
                <div className="h-2 w-8 rounded" style={{ backgroundColor: `${accentColor}30` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cart strip */}
      <div className="border-t border-border bg-background-secondary px-4 py-2 flex items-center justify-between">
        <div className="h-1.5 w-12 rounded bg-foreground/10" />
        <div className="h-5 w-16 rounded-lg" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
}
