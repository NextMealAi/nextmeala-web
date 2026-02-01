import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
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
      className="min-h-screen bg-off-white flex items-center py-20 lg:py-0 relative z-30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Image Card */}
        <div ref={imageRef} className="w-full lg:w-[34vw]">
          <div className="relative rounded-[34px] overflow-hidden card-shadow card-border aspect-[4/5]">
            <img
              src="/images/shopping-list.jpg"
              alt="Shopping list feature"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-dark text-xs font-semibold px-4 py-2 rounded-full">
              Organized & ready
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full lg:w-[38vw] text-center lg:text-left"
        >
          <span className="font-mono-label text-gray-text mb-4 block">
            THE SOLUTION
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05] mb-6">
            Your personal AI meal planner.
          </h2>
          <p className="text-base sm:text-lg text-gray-text leading-relaxed mb-8">
            NextMealAI builds a full week of recipes tailored to your diet, schedule, and household size—complete with nutrition info and a ready-to-shop grocery list.
          </p>
          <button className="btn-primary text-base px-8 py-4">
            Start your plan
          </button>
        </div>
      </div>
    </section>
  );
}
