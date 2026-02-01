import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Sparkles, ShoppingCart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Set your preferences',
    description: 'Choose your diet, allergies, schedule, and how many people you\'re cooking for.',
    icon: Settings,
  },
  {
    number: '02',
    title: 'Generate your week',
    description: 'AI builds a balanced menu with calories, macros, and portion sizes.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Shop & cook',
    description: 'Get an auto-organized grocery list and step-by-step recipes.',
    icon: ShoppingCart,
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in for the whole section
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="w-full bg-off-white py-20 sm:py-24 lg:py-32 relative z-40"
    >
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05]">
            Three steps to smarter meals.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card bg-white rounded-[32px] p-6 lg:p-8 card-shadow card-border min-h-[280px] lg:min-h-[320px] flex flex-col"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading font-bold text-4xl lg:text-5xl text-lime">
                  {step.number}
                </span>
                <div className="w-12 h-12 bg-off-white rounded-2xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-dark" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl lg:text-2xl text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-text text-base leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
