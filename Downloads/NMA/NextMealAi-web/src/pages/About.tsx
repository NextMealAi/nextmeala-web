import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );

      const cards = contentRef.current?.querySelectorAll('.about-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }
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

      {/* Header */}
      <div
        ref={headerRef}
        className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 xl:px-12 text-center"
      >
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-dark mb-4">
          About NextMealAI
        </h1>
        <p className="text-gray-text text-lg max-w-2xl mx-auto">
          Making meal planning effortless, one week at a time.
        </p>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-24 max-w-5xl mx-auto"
      >
        {/* Mission Section */}
        <div className="about-card bg-white rounded-[34px] p-8 lg:p-12 card-shadow card-border mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-lime/20 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6 text-dark" />
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-text text-base lg:text-lg leading-relaxed">
            NextMealAI was created to solve a simple problem: meal planning takes too much time. 
            We believe everyone deserves to eat well without the stress of deciding what to cook, 
            calculating portions, or creating shopping lists. Our AI-powered platform makes healthy 
            eating effortless by generating personalized weekly menus tailored to your diet, 
            schedule, and household size.
          </p>
        </div>

        {/* Team Section */}
        <div className="about-card bg-white rounded-[34px] p-8 lg:p-12 card-shadow card-border mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-lime/20 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-dark" />
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
              Behind the Project
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/3">
              <img
                src="/images/kickstarter-profile.png"
                alt="NextMealAI Team"
                className="w-full rounded-2xl card-shadow"
              />
            </div>
            <div className="lg:w-2/3">
              <p className="text-gray-text text-base lg:text-lg leading-relaxed mb-4">
                NextMealAI is developed by a motivated young founder under the supervision 
                and management of an adult-led professional team. This team is fully responsible 
                for project execution and delivery.
              </p>
              <p className="text-gray-text text-base lg:text-lg leading-relaxed">
                Together, the team brings experience in technical development, product design, 
                and planning—ensuring the app is built responsibly and sustainably.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-card bg-white rounded-[34px] p-8 lg:p-12 card-shadow card-border">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-lime/20 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-dark" />
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-dark mb-2">Simplicity First</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                We believe technology should make life easier, not more complicated.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Health Matters</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Good nutrition is the foundation of a healthy life.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Personalization</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Everyone&apos;s dietary needs are unique and should be respected.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Community</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Cooking is better when shared with others.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Prevent Food Waste</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Smart planning helps you use ingredients efficiently and reduce waste.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Help Save Money</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Plan ahead, shop smarter, and avoid expensive last-minute takeout.
              </p>
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
                to="/privacy"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Privacy
              </Link>
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
