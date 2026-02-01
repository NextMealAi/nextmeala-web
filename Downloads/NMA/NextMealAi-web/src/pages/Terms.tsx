import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-dark mb-8">
            Terms and Conditions
          </h1>

          <div className="bg-white rounded-[34px] p-8 lg:p-12 card-shadow card-border">
            <div className="space-y-8">
              <section>
                <h2 className="font-heading font-bold text-xl text-dark mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-text leading-relaxed">
                  By using NextMealAI, you agree to these Terms of Service. If you do not agree with these terms, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-xl text-dark mb-4">
                  Use of the Service
                </h2>
                <p className="text-gray-text leading-relaxed">
                  You may use our service for personal, non-commercial purposes. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-xl text-dark mb-4">
                  Responsibility for Content
                </h2>
                <p className="text-gray-text leading-relaxed">
                  You are solely responsible for all content you post, share, or upload through our service. You may not post content that is illegal, harmful, or infringes on the rights of others.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-xl text-dark mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Our service is provided &ldquo;as is,&rdquo; and we make no guarantees regarding its reliability or availability. We are not liable for any damages arising from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-xl text-dark mb-4">
                  Changes
                </h2>
                <p className="text-gray-text leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes take effect immediately upon publication. Continued use of the service constitutes acceptance of the updated terms.
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
