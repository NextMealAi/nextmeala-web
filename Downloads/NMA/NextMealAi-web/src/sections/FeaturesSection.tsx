import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  RefreshCw,
  ListChecks,
  PieChart,
  Lightbulb,
  Heart,
  Users,
  Award,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'AI Meal Plan',
    description: 'Weekly menus built for your diet and schedule.',
    icon: Calendar,
  },
  {
    title: 'Smart Swaps',
    description: 'Replace any meal with alternatives that still fit your goals.',
    icon: RefreshCw,
  },
  {
    title: 'Auto Shopping List',
    description: 'Ingredients compiled, deduplicated, and sorted.',
    icon: ListChecks,
  },
  {
    title: 'Nutrition Tracking',
    description: 'Calories and macros per meal, auto-adjusted.',
    icon: PieChart,
  },
  {
    title: 'Inspiration Search',
    description: 'Type what\'s in your fridge; get recipe ideas.',
    icon: Lightbulb,
  },
  {
    title: 'Favorites & History',
    description: 'Save meals and revisit your best-rated dishes.',
    icon: Heart,
  },
  {
    title: 'Groups & Friends',
    description: 'Plan together and share ideas.',
    icon: Users,
  },
  {
    title: 'Badges & Backgrounds',
    description: 'Customize the app and earn milestones.',
    icon: Award,
  },
];

export default function FeaturesSection() {
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
      id="features"
      className="w-full bg-off-white py-20 sm:py-24 lg:py-32 relative z-50"
    >
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05]">
            Everything you need to eat well.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-[28px] p-5 lg:p-6 card-shadow card-border hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-dark" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-lg lg:text-xl text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-text text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
