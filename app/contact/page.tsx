import { createMetadata } from "@/lib/metadata";
import { ContactContent } from "@/components/sections/ContactContent";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = createMetadata({
  title: "Let's Work Together — ITHelper",
  description:
    "Get in touch with ITHelper to discuss your business website, landing page, or digital product project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <CTASection
        variant="dark"
        title="Ready when you are."
        description="The best projects start with a simple conversation. No pressure, no jargon — just a clear discussion about what you're looking to build."
        buttonText="Send a message"
      />
    </>
  );
}
