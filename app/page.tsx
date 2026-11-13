import { LanguageProvider } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative flex flex-col min-h-screen selection:bg-[#FF5C7A]/20 selection:text-[#FF5C7A]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Exactly 3 Core Sections */}
        <main className="flex-1">
          {/* Section 1: Hero Section */}
          <HeroSection />

          {/* Section 2: Work Section (Campaigns Bento Grid) */}
          <WorkSection />

          {/* Section 3: Contact Section (Display-only Glass Panel) */}
          <ContactSection />
        </main>

        {/* Minimal Footer Line */}
        <Footer />

        {/* Floating WhatsApp Action Button (Locale Corner-Mirrored) */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
