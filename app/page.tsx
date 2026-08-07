import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SaudiReadyPreview } from "@/components/sections/SaudiReadyPreview";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Technologies } from "@/components/sections/Technologies";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <ProjectGallery />
      <ProcessTimeline />
      <SaudiReadyPreview />
      <WhyWorkWithMe />
      <Technologies />
      <CTASection
        title="Have a business idea? Let's turn it into a website people remember."
        description="Tell me what you're building, and let's create a digital experience that represents your business professionally."
        buttonText="Let's Work Together"
      />
    </>
  );
}
