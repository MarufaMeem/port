"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function SaudiReadyPreview() {
    return (
        <section className="section-padding bg-background-secondary">
            <Container>
                <Reveal>
                    <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="relative overflow-hidden rounded-3xl border border-[#C9A84C]/20 shadow-xl"
                        style={{ background: "linear-gradient(135deg, #0A1628 0%, #0E1E38 100%)" }}
                    >
                        {/* Gold decorative bar */}
                        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

                        <div className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center lg:p-12">
                            {/* Text */}
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                                    🇸🇦 Saudi Ready
                                </div>
                                <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                                    Building for the<br />
                                    <span style={{ color: "#C9A84C" }}>Saudi market?</span>
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-gray-300 max-w-md">
                                    I build bilingual Arabic + English websites with proper RTL support, WhatsApp integration,
                                    SAR pricing, and mobile-first design — tailored for Saudi business owners.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {["Arabic + English", "RTL Support", "WhatsApp CTA", "Mobile First", "SAR Pricing"].map((tag) => (
                                        <span key={tag} className="rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 px-2.5 py-1 text-[11px] font-medium text-[#C9A84C]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href="/saudi-ready"
                                    className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C9A84C] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#b8963e] shadow-md"
                                >
                                    Explore Saudi Capabilities
                                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Mockup preview card */}
                            <div
                                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                                dir="rtl"
                            >
                                {/* Fake nav */}
                                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                                    <span className="text-xs font-extrabold tracking-widest text-white">NAJD</span>
                                    <div className="flex gap-3">
                                        {["الرئيسية", "من نحن", "خدماتنا"].map(l => (
                                            <span key={l} className="text-[10px] text-gray-400">{l}</span>
                                        ))}
                                    </div>
                                    <button className="rounded-lg bg-[#C9A84C] px-2.5 py-1 text-[10px] font-bold text-white">تواصل</button>
                                </div>
                                {/* Fake hero text */}
                                <div className="p-5">
                                    <div className="mb-1 h-0.5 w-10 rounded-full bg-[#C9A84C] ml-auto" />
                                    <p className="text-xs font-bold text-white text-right">نبني تجارب رقمية تليق بعلامتك التجارية</p>
                                    <p className="mt-1 text-[10px] text-gray-400 text-right">Digital experiences for ambitious businesses.</p>
                                    <div className="mt-3 flex gap-2 justify-end">
                                        <button className="rounded-lg bg-[#C9A84C] px-3 py-1.5 text-[10px] font-bold text-white">ابدأ مشروعك</button>
                                        <button className="rounded-lg border border-white/20 px-3 py-1.5 text-[10px] text-white/70">اعرف أكثر</button>
                                    </div>
                                    <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
                                        {["+٥٠ مشروع", "+١٠ سنوات", "١٠٠٪ رضا"].map(s => (
                                            <div key={s} className="text-center text-[10px] font-bold text-[#C9A84C]">{s}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Reveal>
            </Container>
        </section>
    );
}
