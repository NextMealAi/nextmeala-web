import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I stopped ordering takeout because I finally know what to cook.",
    author: 'Amina R.',
    role: 'Busy Professional',
  },
  {
    quote: "The shopping list saves me 20 minutes every trip.",
    author: 'Jordan T.',
    role: 'Parent of Three',
  },
  {
    quote: "It's like having a nutritionist in my pocket.",
    author: 'Sofia L.',
    role: 'Fitness Enthusiast',
  },
];

export default function TestimonialsSection() {
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
      id="testimonials"
      className="w-full bg-off-white py-20 sm:py-24 lg:py-32 relative z-[90]"
    >
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05]">
            Loved by home cooks.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-[32px] p-6 lg:p-8 card-shadow card-border relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-lime opacity-20">
                <Quote className="w-16 h-16 lg:w-20 lg:h-20" fill="currentColor" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="font-heading font-semibold text-xl lg:text-2xl text-dark leading-snug mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-dark">{testimonial.author}</p>
                  <p className="text-gray-text text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
