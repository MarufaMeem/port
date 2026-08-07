"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NajdMockup() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white shadow-2xl" style={{ boxShadow: "0 24px 64px rgba(37,99,235,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}>
            {/* Label */}
            <div className="absolute right-3 top-3 z-10 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                Saudi Business Website Concept
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-[#0A1628] to-[#0E1E38] px-5 py-3" dir="rtl">
                <div className="text-sm font-bold tracking-widest text-white">NAJD</div>
                <div className="hidden items-center gap-5 sm:flex">
                    {["الرئيسية", "من نحن", "خدماتنا", "مشاريعنا"].map((item) => (
                        <span key={item} className="text-[11px] text-gray-300 hover:text-white transition-colors cursor-pointer">{item}</span>
                    ))}
                </div>
                <button className="rounded-lg bg-[#C9A84C] px-3.5 py-1.5 text-[11px] font-bold text-white">
                    تواصل معنا
                </button>
            </div>

            {/* Hero */}
            <div
                className="relative px-6 py-8 text-right"
                dir="rtl"
                style={{ background: "linear-gradient(135deg, #0A1628 0%, #0E1E38 60%, #1a2f52 100%)" }}
            >
                {/* Gold accent line */}
                <div className="mb-4 h-0.5 w-14 rounded-full bg-[#C9A84C] ml-auto" />
                <h2 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
                    نبني تجارب رقمية<br />تليق بعلامتك التجارية
                </h2>
                <p className="mt-2 text-[12px] text-gray-300 max-w-xs ml-auto">
                    Digital experiences built for ambitious businesses.
                </p>
                <div className="mt-4 flex gap-2.5 justify-end">
                    <button className="rounded-lg bg-[#C9A84C] px-4 py-2 text-xs font-bold text-white shadow-md">
                        ابدأ مشروعك
                    </button>
                    <button className="rounded-lg border border-white/25 px-4 py-2 text-xs text-white/80">
                        اعرف أكثر
                    </button>
                </div>

                {/* Stats row */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                    {[
                        { num: "+٥٠", label: "مشروع منجز" },
                        { num: "+١٠", label: "سنوات خبرة" },
                        { num: "١٠٠٪", label: "رضا العملاء" },
                    ].map((s) => (
                        <div key={s.num} className="text-center">
                            <p className="text-base font-extrabold text-[#C9A84C]">{s.num}</p>
                            <p className="text-[10px] text-gray-400">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Service cards preview */}
            <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4" dir="rtl">
                {[
                    { icon: "🏗️", title: "البناء والتطوير", desc: "مشاريع عقارية وإنشائية متكاملة" },
                    { icon: "📍", title: "الموقع والمنطقة", desc: "الرياض، المملكة العربية السعودية" },
                    { icon: "💬", title: "تواصل واتساب", desc: "نرد خلال ٢٤ ساعة" },
                    { icon: "💰", title: "الأسعار بالريال", desc: "SAR — عروض مخصصة لكل مشروع" },
                ].map((card) => (
                    <div key={card.title} className="rounded-xl bg-white p-3 shadow-sm border border-gray-100">
                        <span className="text-lg">{card.icon}</span>
                        <p className="mt-1 text-[11px] font-bold text-gray-800">{card.title}</p>
                        <p className="text-[10px] text-gray-500">{card.desc}</p>
                    </div>
                ))}
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between bg-[#0A1628] px-5 py-2.5" dir="rtl">
                <span className="text-[10px] text-gray-500">© ٢٠٢٦ شركة نجد. جميع الحقوق محفوظة.</span>
                <span className="text-[10px] font-bold text-[#C9A84C]">NAJD</span>
            </div>
        </div>
    );
}

export function RTLDemo() {
    const [lang, setLang] = useState<"en" | "ar">("en");

    const content = {
        en: {
            title: "Build your business online",
            subtitle: "Professional websites for businesses of all sizes.",
            cta: "Get Started",
            label1: "Service Quality",
            label2: "Trusted Service",
            dir: "ltr" as const,
        },
        ar: {
            title: "طوّر أعمالك على الإنترنت",
            subtitle: "مواقع إلكترونية احترافية لجميع أنواع الأعمال.",
            cta: "ابدأ الآن",
            label1: "جودة الخدمة",
            label2: "خدمة موثوقة",
            dir: "rtl" as const,
        },
    };

    const c = content[lang];

    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
            {/* Toggle bar */}
            <div className="flex items-center justify-between border-b border-border bg-gray-50 px-4 py-2.5">
                <p className="text-xs font-semibold text-foreground-muted">Language / اللغة</p>
                <div className="flex rounded-lg border border-border bg-white p-0.5 text-xs font-semibold">
                    <button
                        onClick={() => setLang("en")}
                        className={`rounded-md px-3 py-1 transition-all ${lang === "en" ? "bg-accent text-white shadow-sm" : "text-foreground-secondary hover:text-foreground"}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLang("ar")}
                        className={`rounded-md px-3 py-1 transition-all ${lang === "ar" ? "bg-accent text-white shadow-sm" : "text-foreground-secondary hover:text-foreground"}`}
                    >
                        العربية
                    </button>
                </div>
            </div>

            {/* Demo content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={lang}
                    initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                    transition={{ duration: 0.25 }}
                    dir={c.dir}
                    className="p-5"
                >
                    {/* Fake browser bar */}
                    <div className="mb-4 flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                        <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                        <div className="h-2 w-2 rounded-full bg-[#28CA41]" />
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground-muted mb-2">
                        {lang === "ar" ? "معاينة الموقع" : "Website Preview"}
                    </p>
                    <h3 className={`text-lg font-extrabold text-foreground leading-snug ${lang === "ar" ? "font-['Plus_Jakarta_Sans']" : ""}`}>
                        {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-foreground-secondary">{c.subtitle}</p>

                    <div className="mt-4 flex gap-2.5" style={{ justifyContent: lang === "ar" ? "flex-end" : "flex-start" }}>
                        <button className="rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white">
                            {c.cta}
                        </button>
                        <button className="rounded-lg border border-border px-4 py-2 text-xs text-foreground-secondary">
                            {lang === "ar" ? "اعرف أكثر" : "Learn More"}
                        </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                        {[c.label1, c.label2].map((label) => (
                            <div key={label} className="rounded-xl bg-background-blue p-3 text-center">
                                <div className="mb-1.5 h-5 w-5 rounded-full bg-accent/20 mx-auto flex items-center justify-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                </div>
                                <p className="text-[11px] font-semibold text-foreground">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
