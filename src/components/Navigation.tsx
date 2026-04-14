import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { trackEvent } from '../lib/analytics';
import { playHoverSound, playClickSound } from '../lib/audio';

const navItems = [
  { name: 'Overview', href: '#hero' },
  { name: 'Scale', href: '#stats' },
  { name: 'Retail', href: '#retail' },
  { name: 'Luxury', href: '#luxury' },
  { name: 'Dining', href: '#dining' },
  { name: 'Entertainment', href: '#entertainment' },
  { name: 'Events', href: '#events' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      let current = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    trackEvent('nav_click', { destination: href });
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollTo(e, '#hero')}
          className="text-xl font-serif font-semibold tracking-wider text-white mix-blend-difference"
        >
          IMSE.
        </a>

        <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={playHoverSound}
              onClick={(e) => {
                playClickSound();
                scrollTo(e, item.href);
              }}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full"
            >
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/20 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              trackEvent('cta_click', { section: 'nav', action: 'book_tour' });
              document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            Book Tour
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 relative z-50"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={playHoverSound}
                onClick={(e) => {
                  playClickSound();
                  scrollTo(e, item.href);
                }}
                className={cn(
                  "text-lg font-medium transition-colors py-3 md:py-0",
                  activeSection === item.href.substring(1) ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
