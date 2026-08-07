"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { Mail, Clock, Send } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/* ───────────────────────────── Contact Form ────────────────────────── */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opening" | "done">("idle");
  const { t, isRTL } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("opening");

    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const projectType = data.get("projectType") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `Project Inquiry from ${name}${company ? ` — ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nLooking to build: ${projectType || "N/A"}\n\nMessage:\n${message}`,
    );

    // Opens Gmail in a new tab with the pre-filled message (much more reliable than mailto:)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => setStatus("done"), 1500);
    setTimeout(() => setStatus("idle"), 5000);
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" dir={isRTL ? "rtl" : "ltr"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={t.contact.name} name="name" required placeholder="e.g. Ahmed Al-Rashid" inputClass={inputClass} />
        <FormField label={t.contact.email} name="email" type="email" required placeholder="you@company.com" inputClass={inputClass} />
      </div>
      <FormField label={t.contact.company} name="company" placeholder="Your company (optional)" inputClass={inputClass} />
      <FormField label={t.contact.projectType} name="projectType" placeholder="e.g. Business website, landing page, e-commerce" inputClass={inputClass} />

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, goals, and timeline..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={status === "idle" ? { y: -3 } : {}}
        whileTap={status === "idle" ? { y: 0 } : {}}
        transition={{ duration: 0.18 }}
        className="group inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all disabled:opacity-70"
        style={{ background: "linear-gradient(135deg, #1e40af 0%, #4f46e5 100%)" }}
      >
        {status === "opening" ? (
          <>Opening your email client…</>
        ) : status === "done" ? (
          <>✓ Email client opened!</>
        ) : (
          <>
            {t.contact.submit}
            <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </motion.button>

    </form>
  );
}

/* ───────────────────────────── Form Field ──────────────────────────── */
function FormField({ label, name, type = "text", required, placeholder, inputClass }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; inputClass: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

/* ───────────────────────────── Full Contact Section ────────────────── */
export function ContactContent() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      {/* Hero header */}
      <section
        className="pt-[calc(var(--nav-height)+4rem)] pb-10"
        style={{ background: "linear-gradient(180deg, #FBEFEF 0%, #FFE2E2 100%)" }}
      >
        <Container>
          <Reveal>
            <div dir={isRTL ? "rtl" : "ltr"}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {t.contact.label}
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                {t.contact.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
                {t.contact.description}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main grid */}
      <section
        className="section-padding border-t border-border"
        style={{ background: "linear-gradient(180deg, #FFE2E2 0%, #FBEFEF 100%)" }}
      >
        <Container>
          <div className={`grid gap-12 lg:grid-cols-5 lg:gap-16 ${isRTL ? "[direction:rtl]" : ""}`}>

            {/* Left: direct contact */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold text-foreground" dir={isRTL ? "rtl" : "ltr"}>
                  Start a conversation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary" dir={isRTL ? "rtl" : "ltr"}>
                  Reach out directly by email. I typically respond within 1–2 business days.
                </p>
              </Reveal>

              {/* Email card */}
              <Reveal delay={0.1}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group mt-8 flex items-center gap-4 rounded-2xl border border-[#C5B3D3]/40 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-accent"
                  style={{ boxShadow: "0 4px 16px rgba(197,179,211,0.2)" }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
                      Email
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {siteConfig.email}
                    </p>
                    <p className="text-[11px] text-foreground-muted">Click to open email app</p>
                  </div>
                </a>
              </Reveal>

              {/* Availability */}
              <Reveal delay={0.15}>
                <div
                  className="mt-4 flex items-center gap-3 rounded-2xl border border-[#C5B3D3]/30 bg-white p-4"
                  style={{ boxShadow: "0 4px 16px rgba(197,179,211,0.15)" }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Currently Available</p>
                    <p className="text-xs text-foreground-muted">Open to new projects — let&apos;s talk</p>
                  </div>
                  <div className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-500 pulse-dot" />
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div
                className="rounded-3xl border border-[#C5B3D3]/30 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                style={{ boxShadow: "0 8px 32px rgba(197,179,211,0.2)" }}
              >
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
