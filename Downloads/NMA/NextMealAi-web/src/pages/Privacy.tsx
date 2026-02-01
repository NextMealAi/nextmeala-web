import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowLeft, Shield, Database, Cookie, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-off-white/90 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-dark hover:text-dark/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Back to home</span>
          </Link>
          <Link
            to="/"
            className="font-heading font-bold text-xl text-dark tracking-tight"
          >
            NextMeal<span className="text-lime">AI</span>
          </Link>
          <div className="w-20" />
        </div>
      </nav>

      {/* Content */}
      <div
        ref={contentRef}
        className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 xl:px-12"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-dark" />
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-text text-lg">
              Your privacy matters
            </p>
          </div>

          <div className="bg-white rounded-[34px] p-8 lg:p-12 card-shadow card-border">
            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lime/20 rounded-xl flex items-center justify-center">
                    <Database className="w-5 h-5 text-dark" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-dark">
                    Data Collection
                  </h2>
                </div>
                <p className="text-gray-text leading-relaxed pl-13">
                  We collect only essential information required for our meal-planning service. Your dietary preferences and meal plans are stored locally on your device.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lime/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-dark" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-dark">
                    Local Storage
                  </h2>
                </div>
                <p className="text-gray-text leading-relaxed pl-13">
                  All your personal data—including meal preferences, dietary restrictions, and generated meal plans—is stored locally in your browser. This data never leaves your device.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lime/20 rounded-xl flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-dark" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-dark">
                    Cookies
                  </h2>
                </div>
                <p className="text-gray-text leading-relaxed pl-13">
                  We use minimal cookies only for essential functionality, such as remembering your language preference and theme settings. No tracking or advertising cookies are used.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lime/20 rounded-xl flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-dark" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-dark">
                    Data Sharing
                  </h2>
                </div>
                <p className="text-gray-text leading-relaxed pl-13">
                  We do not share, sell, or transfer your personal data to any third parties. Your information stays private and secure on your device.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark py-12">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <Link
              to="/"
              className="font-heading font-bold text-2xl text-white tracking-tight"
            >
              NextMeal<span className="text-lime">AI</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <a
                href="https://nextmealairecipesandplan.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Blog
              </a>
              <a
                href="mailto:nextmealai@gmail.com"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
              <Link
                to="/terms"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Terms
              </Link>
            </div>
            <p className="text-white/40 text-sm">
              © 2026 NextMealAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
