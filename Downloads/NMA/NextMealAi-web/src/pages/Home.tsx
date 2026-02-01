import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import HeroSection from '../sections/HeroSection';
import ProblemSection from '../sections/ProblemSection';
import SolutionSection from '../sections/SolutionSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import FeaturesSection from '../sections/FeaturesSection';
import BuilderSection from '../sections/BuilderSection';
import NutritionSection from '../sections/NutritionSection';
import CommunitySection from '../sections/CommunitySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTAFooterSection from '../sections/CTAFooterSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Refresh ScrollTrigger on resize only
  useLayoutEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="relative bg-off-white">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Sections */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BuilderSection />
      <NutritionSection />
      <CommunitySection />
      <TestimonialsSection />
      <CTAFooterSection />
    </main>
  );
}
