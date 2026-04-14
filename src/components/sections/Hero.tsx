import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { trackEvent } from '../../lib/analytics';
import { playHoverSound, playClickSound } from '../../lib/audio';

export function Hero() {
  const [userType, setUserType] = useState<'retail' | 'event' | 'sponsor'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('imse_user_type');
      if (saved === 'retail' || saved === 'event' || saved === 'sponsor') return saved;
    }
    return 'retail';
  });

  useEffect(() => {
    localStorage.setItem('imse_user_type', userType);
    trackEvent('user_segment_selected', { segment: userType });
  }, [userType]);

  const content = {
    retail: {
      headline: "Where Culture Meets Commerce",
      sub: "Reach 25M+ high-spend visitors annually in a destination designed to elevate your brand.",
      cta: "Explore Leasing"
    },
    event: {
      headline: "Stage Your Next Big Moment",
      sub: "From 500 to 20,000 capacity. State-of-the-art venues for global product launches and concerts.",
      cta: "Find Your Venue"
    },
    sponsor: {
      headline: "Unrivaled Brand Visibility",
      sub: "Connect with a premium global audience through high-impact digital and physical activations.",
      cta: "View Sponsorships"
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519567281799-915b05a415bc?q=80&w=2940&auto=format&fit=crop" 
          alt="Mall Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-20">
        
        {/* User Type Selector */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl md:rounded-full mb-12 border border-white/10"
        >
          {[
            { id: 'retail', label: 'Retail Brand' },
            { id: 'event', label: 'Event Organizer' },
            { id: 'sponsor', label: 'Sponsor' }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setUserType(type.id as any)}
              className={`px-6 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                userType === type.id 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {type.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={userType + '-tag'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase tracking-[0.2em] text-sm font-medium text-green-400 mb-6 block">
            The Future of Retail
          </span>
        </motion.div>
        
        <motion.h1 
          key={userType + '-headline'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8 h-[160px] md:h-auto"
        >
          {content[userType].headline.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4">{word}</span>
          ))}
        </motion.h1>

        <motion.p
          key={userType + '-sub'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light h-[60px] md:h-auto"
        >
          {content[userType].sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              trackEvent('cta_click', { section: 'hero', action: content[userType].cta, segment: userType });
              const target = userType === 'event' ? '#booking' : '#retail';
              document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-sm font-medium hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            {content[userType].cta}
          </button>
          <button 
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              trackEvent('cta_click', { section: 'hero', action: 'watch_film' });
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch the Film
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}

