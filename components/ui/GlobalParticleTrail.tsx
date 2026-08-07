"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const COLORS = [
    "rgba(109,40,217,0.90)",   // deep violet
    "rgba(79,70,229,0.88)",    // indigo
    "rgba(190,24,93,0.86)",    // dark rose
    "rgba(147,51,234,0.90)",   // purple
    "rgba(219,39,119,0.84)",   // magenta-pink
    "rgba(67,20,150,0.90)",    // royal purple
];

interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    r: number;
    life: number;
    decay: number;
    color: string;
}

export function GlobalParticleTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced) return;
        const isTouch = window.matchMedia("(hover: none)").matches;
        if (isTouch) return;

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let particles: Particle[] = [];
        let rafId = 0;
        let lastX = -999, lastY = -999;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
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
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                });
            }
        };

        const onMove = (e: MouseEvent) => {
            const dx = e.clientX - lastX, dy = e.clientY - lastY;
            if (Math.hypot(dx, dy) > 4) {
                spawn(e.clientX, e.clientY);
                lastX = e.clientX; lastY = e.clientY;
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy *= 0.97;
                p.life -= p.decay;
                p.r *= 0.987;
                if (p.life <= 0 || p.r < 0.3) { particles.splice(i, 1); continue; }

                ctx.save();
                ctx.globalAlpha = p.life * p.life;
                ctx.beginPath();
                const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
                g.addColorStop(0, p.color);
                g.addColorStop(0.5, p.color.replace(/[\d.]+\)$/, "0.5)"));
                g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g;
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
    }, [reduced]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[9999]"
            aria-hidden="true"
        />
    );
}
