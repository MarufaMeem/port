import { SaudiReadySection } from "@/components/sections/SaudiReadySection";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saudi Ready — ITHelper",
    description:
        "Professional websites built for Saudi businesses — bilingual Arabic/English interfaces, WhatsApp integration, SAR pricing, mobile-first design, and RTL support.",
};

export default function SaudiReadyPage() {
    return (
        <>
            <SaudiReadySection />
            <CTASection
                title="Ready to build your Saudi website?"
                description="Tell me about your business and what you need. Let's create a professional digital experience for your Saudi audience."
                buttonText="Start a Conversation"
                buttonHref="/contact"
            />
        </>
    );
}
