import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, ImageIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CommunitySection() {
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
      id="community"
      className="w-full bg-off-white py-20 sm:py-24 lg:py-32 relative z-[80]"
    >
      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-dark leading-[1.05]">
            Cook together. Share the wins.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Groups & Friends Card */}
          <div className="community-card bg-white rounded-[34px] p-6 lg:p-8 card-shadow card-border min-h-[280px] lg:min-h-[320px] flex flex-col relative">
            <div className="w-12 h-12 bg-lime/20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-dark" />
            </div>
            <h3 className="font-heading font-semibold text-2xl lg:text-3xl text-dark mb-3">
              Groups & Friends
            </h3>
            <p className="text-gray-text text-base lg:text-lg leading-relaxed flex-grow">
              Create groups, share plans, and swap ideas with the people you cook for. Collaborative meal planning made simple.
            </p>

            {/* Overlapping badge */}
            <div className="absolute -bottom-3 left-8 bg-lime text-dark text-xs font-semibold px-4 py-2 rounded-full card-shadow">
              Plan with family
            </div>
          </div>

          {/* Community Feed Card */}
          <div className="community-card relative rounded-[34px] overflow-hidden card-shadow card-border min-h-[280px] lg:min-h-[320px]">
            <img
              src="/images/community.jpg"
              alt="Community food feed"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl lg:text-3xl text-white mb-2">
                Community Feed
              </h3>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Post your meals, discover new favorites, and get inspired by what others are cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
