import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BuilderSection() {
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
      className="min-h-screen bg-off-white flex items-center py-20 lg:py-0 relative z-[60]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full lg:w-[38vw] text-center lg:text-left order-2 lg:order-1"
        >
          <span className="font-mono-label text-gray-text mb-4 block">
            PLAN BUILDER
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05] mb-6">
            Pick your meals. We&apos;ll do the math.
          </h2>
          <p className="text-base sm:text-lg text-gray-text leading-relaxed mb-8">
            Select 1–3 warm meals per day. NextMealAI adjusts portions, calories, and ingredients for your household size—automatically.
          </p>
          <button className="btn-primary text-base px-8 py-4">
            Try the builder
          </button>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-[34vw] relative order-1 lg:order-2"
        >
          <div className="relative rounded-[34px] overflow-hidden card-shadow card-border aspect-square">
            <img
              src="/images/badges.jpg"
              alt="Meal planning achievements"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-lime text-dark text-sm font-semibold px-4 py-3 rounded-2xl card-shadow">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-dark rounded-full animate-pulse" />
              3 meals/day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
