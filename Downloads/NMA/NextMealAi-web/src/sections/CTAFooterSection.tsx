import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Apple, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function CTAFooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in for CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative z-[100]">
      {/* CTA Band */}
      <div
        ref={ctaRef}
        className="w-full bg-off-white py-20 sm:py-24 lg:py-32 relative overflow-hidden"
      >
        {/* Decorative lime circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/12 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05] mb-6">
              Start planning your week.
            </h2>
            <p className="text-base sm:text-lg text-gray-text mb-8 max-w-xl mx-auto">
              Download NextMealAI and get your first meal plan in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-base px-8 py-4 flex items-center justify-center gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </button>
              <button className="btn-primary text-base px-8 py-4 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Band */}
      <footer className="w-full bg-dark py-12 lg:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
            {/* Logo & Tagline */}
            <div className="lg:w-1/3">
              <Link to="/" className="font-heading font-bold text-2xl text-white tracking-tight inline-block mb-4">
                NextMeal<span className="text-lime">AI</span>
              </Link>
              <p className="text-white/60 text-base">
                Eat better. Stress less.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
              {/* Product */}
              <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#features" className="text-white/60 hover:text-white transition-colors text-sm">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors text-sm">
                      How it works
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                      About
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://nextmealairecipesandplan.blogspot.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:nextmealai@gmail.com" 
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-white/60 hover:text-white transition-colors text-sm">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 NextMealAI. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span className="text-white/40 text-sm">Available on iOS & Android</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
