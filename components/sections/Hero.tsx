"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { lerp } from "@/hooks/useMouseParallax";

/* ------------------------------------------------------------------ */
/*  Cursor Particle Trail                                               */
/* ------------------------------------------------------------------ */
const PARTICLE_COLORS = [
  "rgba(109,40,217,0.92)",   // deep violet
  "rgba(79,70,229,0.90)",    // indigo
  "rgba(190,24,93,0.88)",    // dark rose
  "rgba(147,51,234,0.90)",   // purple
  "rgba(219,39,119,0.85)",   // magenta-pink
  "rgba(67,20,150,0.92)",    // royal purple
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;           // radius
  life: number;        // 1 → 0
  decay: number;       // speed of fade
  color: string;
}

function useParticleTrail(canvasRef: React.RefObject<HTMLCanvasElement | null>, enabled: boolean) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let rafId = 0;
    let lastX = -999, lastY = -999;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const spawn = (cx: number, cy: number) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: cx + (Math.random() - 0.5) * 14,
          y: cy + (Math.random() - 0.5) * 14,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -Math.random() * 2.2 - 0.8,
          r: Math.random() * 5 + 3,
          life: 1,
          decay: 0.016 + Math.random() * 0.016,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const dx = cx - lastX, dy = cy - lastY;
      if (Math.hypot(dx, dy) > 4) {
        spawn(cx, cy);
        lastX = cx; lastY = cy;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.97;  // slight drag
        p.life -= p.decay;
        p.r *= 0.987;
        if (p.life <= 0 || p.r < 0.3) { particles.splice(i, 1); continue; }
        ctx.save();
        ctx.globalAlpha = p.life * p.life;
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, p.color);
        grad.addColorStop(0.5, p.color.replace(/[\d.]+\)$/, "0.5)"));
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      rafId = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      particles = [];
    };
  }, [canvasRef, enabled]);
}

/* ------------------------------------------------------------------ */
/*  Parallax layer refs (updated directly via RAF — no re-renders)     */
/* ------------------------------------------------------------------ */
function useHeroParallax(enabled: boolean) {
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const refs = {
    orb1: useRef<HTMLDivElement>(null),
    orb2: useRef<HTMLDivElement>(null),
    browser: useRef<HTMLDivElement>(null),
    card1: useRef<HTMLDivElement>(null),
    card2: useRef<HTMLDivElement>(null),
    card3: useRef<HTMLDivElement>(null),
    glow: useRef<HTMLDivElement>(null),
  };
  const curr = useRef({ x: 0, y: 0, rx: 0, ry: 0, gx: 50, gy: 50 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,   // –1 → +1
        y: (e.clientY / window.innerHeight) * 2 - 1,
        px: (e.clientX / window.innerWidth) * 100,      // 0–100 (for radial-gradient position)
        py: (e.clientY / window.innerHeight) * 100,
      };
    };

    const animate = () => {
      const f = 0.055;
      curr.current.x = lerp(curr.current.x, mouseRef.current.x, f);
      curr.current.y = lerp(curr.current.y, mouseRef.current.y, f);
      curr.current.rx = lerp(curr.current.rx, mouseRef.current.y * -6, f);
      curr.current.ry = lerp(curr.current.ry, mouseRef.current.x * 7, f);
      const { x, y, rx, ry } = curr.current;

      // Layer 2 — background orbs (very slow)
      if (refs.orb1.current) refs.orb1.current.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
      if (refs.orb2.current) refs.orb2.current.style.transform = `translate(${x * -8}px, ${y * 12}px)`;
      // Layer 3 — browser (tilt + slight translate)
      if (refs.browser.current)
        refs.browser.current.style.transform =
          `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translate(${x * 4}px, ${y * 5}px)`;
      // Layer 4-6 — floating cards (faster, different axes)
      if (refs.card1.current) refs.card1.current.style.transform = `translate(${x * 16}px, ${y * 12}px)`;
      if (refs.card2.current) refs.card2.current.style.transform = `translate(${x * -12}px, ${y * 18}px)`;
      if (refs.card3.current) refs.card3.current.style.transform = `translate(${x * 20}px, ${y * -10}px)`;
      // Cursor spotlight — bright white centre → soft violet ring
      curr.current.gx = lerp(curr.current.gx, mouseRef.current.px, 0.09);
      curr.current.gy = lerp(curr.current.gy, mouseRef.current.py, 0.09);
      if (refs.glow.current)
        refs.glow.current.style.background = `radial-gradient(480px circle at ${curr.current.gx}% ${curr.current.gy}%, rgba(255,255,255,0.70) 0%, rgba(245,203,203,0.45) 28%, rgba(197,179,211,0.25) 52%, transparent 70%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return refs;
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const refs = useHeroParallax(!shouldReduceMotion);
  const { t, isRTL } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleTrail(canvasRef, !shouldReduceMotion);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #FBEFEF 0%, #FFE2E2 40%, #F5CBCB 70%, #C5B3D3 100%)",
      }}
    >
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#1e1e2e 1px, transparent 1px), linear-gradient(90deg, #1e1e2e 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative orbs — Layer 2 */}
      <div ref={refs.orb1} className="pointer-events-none absolute -top-10 -right-10 h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(circle, rgba(197,179,211,0.45) 0%, transparent 70%)" }} />
      <div ref={refs.orb2} className="pointer-events-none absolute bottom-0 -left-20 h-[420px] w-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(245,203,203,0.5) 0%, transparent 65%)" }} />
      {/* Cursor spotlight — white-hot glow that follows the mouse */}
      <div
        ref={refs.glow}
        className="pointer-events-none absolute inset-0 z-[1] transition-none"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Canvas particle trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-28 lg:py-0">
        <div className={`grid items-center gap-14 lg:grid-cols-2 ${isRTL ? "lg:grid-cols-2" : ""}`}>

          {/* ── Left: Text ─────────────────────────────────────────── */}
          <div className={`order-2 lg:order-1 ${isRTL ? "text-right" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
            {/* Status badge */}
            <Reveal>
              <div className={`mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#C5B3D3]/50 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-sm`}>
                <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-dot" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-secondary">
                  {t.hero.badge}
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.08}>
              <h1 className="text-[2.6rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                {t.hero.headline}{" "}
                <br />
                <span
                  className="inline-block"
                  style={{
                    background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #b06060 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.hero.headlineAccent}
                </span>
              </h1>
            </Reveal>

            {/* Subtext */}
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-foreground-secondary sm:text-lg">
                {t.hero.subtext}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.22}>
              <div className={`mt-8 flex flex-wrap gap-3 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }} transition={{ duration: 0.18 }}>
                  <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #1e40af 0%, #4f46e5 100%)" }}
                  >
                    {t.hero.viewWork}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }} transition={{ duration: 0.18 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#C5B3D3] bg-white/65 px-6 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
                  >
                    {t.hero.letsWork}
                  </Link>
                </motion.div>
              </div>
            </Reveal>

            {/* Checklist */}
            <Reveal delay={0.3}>
              <ul className={`mt-7 flex flex-wrap gap-x-6 gap-y-2 ${isRTL ? "justify-end" : ""}`}>
                {t.hero.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-sm text-foreground-secondary">
                    <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ── Right: 3D Floating UI ──────────────────────────────── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center" style={{ minHeight: 480 }}>

            {/* Layer 3 — Main browser mockup, mouse-responsive */}
            <div
              ref={refs.browser}
              className="relative mx-auto w-full max-w-[500px]"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
              {/* Browser chrome */}
              <div className="overflow-hidden rounded-2xl border border-[#C5B3D3]/40 shadow-xl" style={{ boxShadow: "0 24px 60px rgba(197,179,211,0.45)" }}>
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 border-b border-[#F5CBCB]/60 bg-white/80 px-4 py-2.5 backdrop-blur-md">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                  </div>
                  <div className="mx-auto flex h-5 w-48 items-center justify-center rounded-md bg-[#FBEFEF] text-[10px] text-foreground-muted">
                    yourbusiness.com
                  </div>
                </div>

                {/* Page content */}
                <div className="bg-white p-5" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fffafa 100%)" }}>
                  {/* Nav */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-3 w-20 rounded-full bg-foreground/15" />
                    <div className="flex gap-3">
                      {[40, 32, 38, 44].map((w, i) => (
                        <div key={i} className="h-2 rounded-full bg-foreground/8" style={{ width: w }} />
                      ))}
                    </div>
                    <div className="h-7 w-20 rounded-lg" style={{ background: "linear-gradient(135deg,#1e40af,#4f46e5)" }} />
                  </div>
                  {/* Hero strip */}
                  <div className="mb-4 overflow-hidden rounded-xl p-5" style={{ background: "linear-gradient(135deg,#FBEFEF,#FFE2E2,#F5CBCB)" }}>
                    <div className="mb-2 h-4 w-48 rounded-full bg-foreground/15" />
                    <div className="mb-1 h-3 w-40 rounded-full bg-foreground/10" />
                    <div className="mt-3 h-7 w-24 rounded-lg" style={{ background: "linear-gradient(135deg,#1e40af,#4f46e5)" }} />
                  </div>
                  {/* Cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[["#FFE2E2", "#F5CBCB"], ["#FBEFEF", "#C5B3D3"], ["#E8F0FF", "#C7D7FF"]].map(([from, to], i) => (
                      <div key={i} className="overflow-hidden rounded-lg p-3" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
                        <div className="mb-2 h-4 w-4 rounded-full bg-foreground/15" />
                        <div className="mb-1 h-2 w-12 rounded-full bg-foreground/12" />
                        <div className="h-2 w-8 rounded-full bg-foreground/8" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 4 — Analytics card (faster parallax) */}
            <div
              ref={refs.card1}
              className="float-a absolute -bottom-6 -left-4 overflow-hidden rounded-2xl border border-[#C5B3D3]/40 bg-white/90 p-4 shadow-lg backdrop-blur-sm lg:-left-10"
              style={{ boxShadow: "0 8px 32px rgba(197,179,211,0.35)", willChange: "transform", width: 160 }}
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">Performance</p>
              <div className="flex items-end gap-1.5">
                <span className="text-2xl font-extrabold text-foreground">98</span>
                <span className="mb-0.5 text-xs text-emerald-500">↑ +3</span>
              </div>
              <div className="mt-2 flex gap-1">
                {[55, 70, 60, 85, 75, 90, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: h * 0.4, background: `linear-gradient(to top, #1e40af, #C5B3D3)`, opacity: 0.3 + h * 0.004 }} />
                ))}
              </div>
            </div>

            {/* Layer 5 — Visitors card */}
            <div
              ref={refs.card2}
              className="float-b absolute -top-6 -right-4 overflow-hidden rounded-2xl border border-[#C5B3D3]/40 bg-white/90 p-4 shadow-lg backdrop-blur-sm lg:-right-10"
              style={{ boxShadow: "0 8px 32px rgba(197,179,211,0.35)", willChange: "transform", width: 155 }}
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">Monthly visits</p>
              <p className="text-2xl font-extrabold text-foreground">12.4k</p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[#FBEFEF]">
                <div className="h-full rounded-full" style={{ width: "72%", background: "linear-gradient(90deg,#F5CBCB,#C5B3D3)" }} />
              </div>
              <p className="mt-1 text-[10px] text-foreground-muted">72% of monthly goal</p>
            </div>

            {/* Layer 6 — Notification bubble */}
            <div
              ref={refs.card3}
              className="float-c absolute right-4 bottom-12 overflow-hidden rounded-xl border border-[#F5CBCB]/60 bg-white/90 px-3.5 py-2.5 shadow-md backdrop-blur-sm lg:right-2"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg,#28CA41,#10b981)" }}>
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground">New client enquiry!</p>
                  <p className="text-[9px] text-foreground-muted">2 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
