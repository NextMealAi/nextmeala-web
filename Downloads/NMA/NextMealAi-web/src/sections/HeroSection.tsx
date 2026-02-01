import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Simple entrance animation on load only
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Nav fade in
      tl.fromTo(
        navRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.4 },
        0
      );

      // Headline lines stagger in
      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines) {
        tl.fromTo(
          headlineLines,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.2
        );
      }

      // Subheadline
      tl.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        0.5
      );

      // CTA row
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        0.6
      );

      // Logo card
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.45
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-off-white flex flex-col items-center justify-center relative z-10"
    >
      {/* Navigation */}
      <nav ref={navRef} className="absolute top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-xl sm:text-2xl text-dark tracking-tight">
            NextMeal<span className="text-lime">AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              Community
            </button>
            <button className="btn-primary text-sm">Get the app</button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center pt-20">
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-6">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dark leading-[0.9]">
            <span className="headline-line block">Plan.</span>
            <span className="headline-line block">Cook.</span>
            <span className="headline-line block">Enjoy.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-center text-base sm:text-lg md:text-xl text-gray-text max-w-2xl mb-8 px-4"
        >
          AI-generated weekly menus, automatic shopping lists, and nutrition tracking—personalized to your taste and schedule.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="btn-primary text-base px-8 py-4">Get the app</button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="btn-secondary text-base px-8 py-4"
          >
            See how it works
          </button>
        </div>

        {/* Logo Display */}
        <div
          ref={logoRef}
          className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
        >
          <div className="relative rounded-[32px] overflow-hidden card-shadow card-border bg-white p-8">
            <img
              src="/images/logo.png"
              alt="NextMealAI Logo"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime/30 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-lime/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
