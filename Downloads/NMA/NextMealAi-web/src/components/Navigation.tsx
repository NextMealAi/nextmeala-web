import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-off-white/90 backdrop-blur-md py-3 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-heading font-bold text-xl sm:text-2xl text-dark tracking-tight"
          >
            NextMeal<span className="text-lime">AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              Community
            </button>
            <button className="btn-primary text-sm">Get the app</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-off-white transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-2xl font-heading font-semibold text-dark"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-2xl font-heading font-semibold text-dark"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('community')}
            className="text-2xl font-heading font-semibold text-dark"
          >
            Community
          </button>
          <button className="btn-primary text-lg mt-4">Get the app</button>
        </div>
      </div>
    </>
  );
}
