"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/types";
import { faqs } from "@/lib/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <Reveal delay={index * 0.05}>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-medium text-foreground">{faq.question}</span>
          <ChevronDown
            size={20}
            className={cn(
              "shrink-0 text-foreground-muted transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-300 ease-out",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-sm leading-relaxed text-foreground-secondary">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
