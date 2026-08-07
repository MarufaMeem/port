import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { GlobalParticleTrail } from "@/components/ui/GlobalParticleTrail";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = createMetadata({
  title: "ITHelper — Modern Websites & Digital Experiences",
  description:
    "ITHelper designs and builds modern, responsive websites and digital experiences for businesses, startups, and organizations.",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <LanguageProvider>
          <GlobalParticleTrail />
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
