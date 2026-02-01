import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animation when section enters viewport
      gsap.fromTo(
        [textRef.current, imageRef.current],
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
      className="min-h-screen bg-off-white flex items-center py-20 lg:py-0 relative z-20"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full lg:w-[38vw] text-center lg:text-left order-2 lg:order-1"
        >
          <span className="font-mono-label text-gray-text mb-4 block">
            THE PROBLEM
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05] mb-6">
            Meal planning shouldn&apos;t feel like a second job.
          </h2>
          <p className="text-base sm:text-lg text-gray-text leading-relaxed">
            Deciding what to cook, balancing nutrition, and building a shopping list eats up hours every week—and often leads to stress, waste, and repeating the same meals.
          </p>
        </div>

        {/* Image Card */}
        <div
          ref={imageRef}
          className="w-full lg:w-[34vw] order-1 lg:order-2"
        >
          <div className="relative rounded-[34px] overflow-hidden card-shadow card-border aspect-[4/5]">
            <img
              src="/images/meal-choice.jpg"
              alt="Meal choice interface"
              className="w-full h-full object-cover"
            />
            {/* Accent badge */}
            <div className="absolute top-4 right-4 bg-lime text-dark text-xs font-semibold px-4 py-2 rounded-full">
              Too many decisions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
