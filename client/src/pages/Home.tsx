import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

/**
 * Technical Practical Design Philosophy
 * - Deep black background (#1f1f1f) with neon green accents (#72c864)
 * - Monospace fonts for technical feel (JetBrains Mono, Fira Code)
 * - Grid patterns and code-like elements throughout
 * - Smooth transitions and subtle animations
 * - High contrast for readability and professionalism
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
