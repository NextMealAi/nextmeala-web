import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NutritionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animation when section enters viewport
      gsap.fromTo(
        [imageRef.current, textRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
      className="min-h-screen bg-off-white flex items-center py-20 lg:py-0 relative z-[70]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-[34vw] relative"
        >
          <div className="relative rounded-[34px] overflow-hidden card-shadow card-border aspect-square bg-white p-8">
            <img
              src="/images/logo.png"
              alt="NextMealAI Nutrition Tracking"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-dark text-white text-sm font-semibold px-4 py-3 rounded-2xl card-shadow">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              Sorted by aisle
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full lg:w-[38vw] text-center lg:text-left"
        >
          <span className="font-mono-label text-gray-text mb-4 block">
            NUTRITION + SHOPPING
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05] mb-6">
            Track macros. Shop smarter.
          </h2>
          <p className="text-base sm:text-lg text-gray-text leading-relaxed mb-8">
            Every meal shows calories, protein, carbs, and fats. Your grocery list bundles duplicates and sorts items so you&apos;re in and out of the store faster.
          </p>
          <button className="btn-primary text-base px-8 py-4">
            See the list
          </button>
        </div>
      </div>
    </section>
  );
}
