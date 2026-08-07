"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, MessageCircle, DollarSign, MapPin, Zap, Palette, CheckCircle2, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { lerp } from "@/hooks/useMouseParallax";

function useCardParallax(enabled: boolean) {
    const mouseRef = useRef({ x: 0, y: 0 });
    const browserRef = useRef<HTMLDivElement>(null);
    const rtlRef = useRef<HTMLDivElement>(null);
    const curr = useRef({ rx: 0, ry: 0 });
    const rafRef = useRef(0);

    useEffect(() => {
        if (!enabled) return;
        const isTouch = window.matchMedia("(hover: none)").matches;
        if (isTouch) return;

        const onMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            };
        };

        const animate = () => {
            const f = 0.05;
            curr.current.rx = lerp(curr.current.rx, mouseRef.current.y * -4, f);
            curr.current.ry = lerp(curr.current.ry, mouseRef.current.x * 5, f);
            const { rx, ry } = curr.current;

            if (browserRef.current)
                browserRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            if (rtlRef.current)
                rtlRef.current.style.transform = `perspective(900px) rotateX(${rx * 0.6}deg) rotateY(${ry * -0.7}deg)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        rafRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled]);

    return { browserRef, rtlRef };
}

export function SaudiReadySection() {
    const { t, isRTL } = useLanguage();
    const { browserRef, rtlRef } = useCardParallax(true);

    return (
        <section
            className="section-padding relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #1a1228 0%, #0d1020 100%)" }}
        >
            {/* Background orbs */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(197,179,211,0.08) 0%, transparent 70%)" }} />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />

            <Container>
                {/* Header */}
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#C9A84C]">
                            {t.saudi.badge}
                        </div>
                        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                            {t.saudi.title}
                            <br />
                            <span style={{ color: "#C9A84C" }}>{t.saudi.titleAccent}</span>
                        </h2>
                        <p className="mt-5 text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
                            {t.saudi.description}
                        </p>
                    </div>
                </Reveal>

                {/* Mockup grid */}
                <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
                    {/* NAJD mockup — mouse parallax */}
                    <Reveal direction="left">
                        <div ref={browserRef} style={{ willChange: "transform" }}>
                            <NajdMockup />
                        </div>
                    </Reveal>

                    {/* RTL Demo + checklist */}
                    <div className="flex flex-col gap-6">
                        <Reveal direction="right">
                            <div ref={rtlRef} style={{ willChange: "transform" }}>
                                <RTLDemo />
                            </div>
                        </Reveal>

                        <Reveal direction="right" delay={0.1}>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    Saudi Market Ready
                                </p>
                                <ul className="space-y-2">
                                    {t.saudi.checklist.map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                                            <CheckCircle2 size={13} className="shrink-0" style={{ color: "#C9A84C" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Capability cards */}
                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {t.saudi.capabilities.map((cap, i) => {
                        const colors = ["#2563eb", "#7c3aed", "#0f766e", "#10b981", "#f59e0b", "#dc2626", "#0ea5e9", "#be185d"];
                        const icons = [Globe, Smartphone, CheckCircle2, MessageCircle, DollarSign, MapPin, Zap, Palette];
                        const Icon = icons[i % icons.length];
                        const color = colors[i % colors.length];
                        return (
                            <Reveal key={cap.title} delay={i * 0.05}>
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className="rounded-2xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${color}20`, color }}>
                                        <Icon size={18} strokeWidth={1.75} />
                                    </div>
                                    <h3 className="text-sm font-bold text-white">{cap.title}</h3>
                                    <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{cap.desc}</p>
                                </motion.div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* CTA */}
                <Reveal>
                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl"
                            style={{ background: "linear-gradient(135deg, #C9A84C, #b8963e)" }}
                        >
                            {t.saudi.ctaButton}
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

/* ─────────────────────── NAJD Mockup ──────────────────────────────── */
function NajdMockup() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl" style={{ boxShadow: "0 24px 64px rgba(201,168,76,0.15), 0 8px 24px rgba(0,0,0,0.3)" }}>
            {/* Label */}
            <div className="absolute right-3 top-3 z-10 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-700">
                Saudi Market Concept
            </div>
            {/* Nav RTL */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-[#0A1628] to-[#0E1E38] px-5 py-3" dir="rtl">
                <span className="text-sm font-extrabold tracking-widest text-white">NAJD</span>
                <div className="hidden items-center gap-5 sm:flex">
                    {["الرئيسية", "من نحن", "خدماتنا", "مشاريعنا"].map((item) => (
                        <span key={item} className="text-[11px] text-gray-300 cursor-pointer">{item}</span>
                    ))}
                </div>
                <button className="rounded-lg bg-[#C9A84C] px-3.5 py-1.5 text-[11px] font-bold text-white">تواصل معنا</button>
            </div>
            {/* Hero */}
            <div className="relative px-6 py-8 text-right" dir="rtl" style={{ background: "linear-gradient(135deg, #0A1628 0%, #0E1E38 60%, #1a2f52 100%)" }}>
                <div className="mb-4 h-0.5 w-14 rounded-full bg-[#C9A84C] ml-auto" />
                <h2 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">نبني تجارب رقمية<br />تليق بعلامتك التجارية</h2>
                <p className="mt-2 text-[12px] text-gray-300 max-w-xs ml-auto">Digital experiences built for ambitious businesses.</p>
                <div className="mt-4 flex gap-2.5 justify-end">
                    <button className="rounded-lg bg-[#C9A84C] px-4 py-2 text-xs font-bold text-white shadow-md">ابدأ مشروعك</button>
                    <button className="rounded-lg border border-white/25 px-4 py-2 text-xs text-white/80">اعرف أكثر</button>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                    {[{ num: "+٥٠", label: "مشروع" }, { num: "+١٠", label: "سنوات" }, { num: "١٠٠٪", label: "رضا" }].map((s) => (
                        <div key={s.num} className="text-center">
                            <p className="text-base font-extrabold text-[#C9A84C]">{s.num}</p>
                            <p className="text-[10px] text-gray-400">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4" dir="rtl">
                {[
                    { icon: "🏗️", title: "التطوير", desc: "مشاريع احترافية متكاملة" },
                    { icon: "📍", title: "الرياض، المملكة", desc: "Saudi Arabia" },
                    { icon: "💬", title: "واتساب", desc: "نرد خلال ٢٤ ساعة" },
                    { icon: "💰", title: "SAR أسعار بالريال", desc: "عروض مخصصة" },
                ].map((card) => (
                    <div key={card.title} className="rounded-xl bg-white p-3 shadow-sm border border-gray-100">
                        <span className="text-lg">{card.icon}</span>
                        <p className="mt-1 text-[11px] font-bold text-gray-800">{card.title}</p>
                        <p className="text-[10px] text-gray-500">{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between bg-[#0A1628] px-5 py-2.5" dir="rtl">
                <span className="text-[10px] text-gray-500">© ٢٠٢٦ شركة نجد.</span>
                <span className="text-[10px] font-bold text-[#C9A84C]">NAJD</span>
            </div>
        </div>
    );
}

/* ─────────────────────── RTL Demo ─────────────────────────────────── */
function RTLDemo() {
    const { t, lang, setLang } = useLanguage();
    const langs: Array<{ key: "en" | "ar" | "bn"; label: string }> = [
        { key: "en", label: "EN" },
        { key: "ar", label: "العربية" },
        { key: "bn", label: "বাংলা" },
    ];
    const isRTL = lang === "ar";

    return (
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
                <p className="text-xs font-semibold text-gray-400">Language / اللغة</p>
                <div className="flex rounded-lg border border-white/15 bg-white/5 p-0.5 text-xs font-bold">
                    {langs.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setLang(key)}
                            className={`rounded-md px-3 py-1 transition-all ${lang === key ? "bg-[#C9A84C] text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-5" dir={isRTL ? "rtl" : "ltr"}>
                <div className="mb-4 flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                    <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <div className="h-2 w-2 rounded-full bg-[#28CA41]" />
                </div>
                <h3 className="text-lg font-extrabold text-white leading-snug">{t.langDemo.title}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{t.langDemo.text}</p>
                <div className="mt-4 flex gap-2.5">
                    <button className="rounded-lg bg-[#C9A84C] px-4 py-2 text-xs font-bold text-white">
                        {t.hero.viewWork}
                    </button>
                    <button className="rounded-lg border border-white/20 px-4 py-2 text-xs text-white/70">
                        {t.hero.letsWork}
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                    {[t.saudi.checklist[0], t.saudi.checklist[1]].map((label) => (
                        <div key={label} className="rounded-xl bg-white/8 p-3 text-center">
                            <div className="mb-1.5 h-5 w-5 rounded-full bg-[#C9A84C]/20 mx-auto flex items-center justify-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                            </div>
                            <p className="text-[11px] font-semibold text-white">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
