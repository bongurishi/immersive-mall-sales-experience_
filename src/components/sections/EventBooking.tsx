import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from '../../lib/analytics';
import { playHoverSound, playClickSound } from '../../lib/audio';

const venues = [
  {
    id: 'grand-atrium',
    name: 'The Grand Atrium',
    capacity: 5000,
    types: ['Product Launch', 'Expo'],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2912&auto=format&fit=crop',
    description: '10,000 sq ft • 360° Visibility • Digital LED Wraps'
  },
  {
    id: 'rooftop-garden',
    name: 'The Rooftop Garden',
    capacity: 500,
    types: ['Product Launch', 'Concert'],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop',
    description: '5,000 sq ft • Open Air • VIP Access'
  },
  {
    id: 'main-arena',
    name: 'The Main Arena',
    capacity: 20000,
    types: ['Concert', 'Expo'],
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2940&auto=format&fit=crop',
    description: 'State-of-the-art acoustics • Tiered seating • Backstage suites'
  }
];

const getReason = (type: string, size: number) => {
  if (type === 'Expo') return "Best for maximum brand visibility and lead generation.";
  if (type === 'Concert') return "Best for high-energy audience engagement and social sharing.";
  if (size >= 5000) return "Best for large-scale impact and PR amplification.";
  return "Best for intimate, premium brand experiences.";
};

export function EventBooking() {
  const [eventType, setEventType] = useState('Product Launch');
  const [audienceSize, setAudienceSize] = useState(500);

  const recommendedVenue = venues.find(v => 
    v.types.includes(eventType) && v.capacity >= audienceSize
  ) || venues[2]; // fallback to largest

  return (
    <section id="booking" className="py-32 bg-zinc-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.2em] text-sm font-medium text-white/50 mb-4 block"
          >
            Interactive Planner
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Find Your Perfect Stage
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-white/50 mb-6">1. Select Event Type</h3>
              <div className="flex flex-wrap gap-4">
                {['Product Launch', 'Concert', 'Expo'].map(type => (
                  <button
                    key={type}
                    id={`btn-type-${type}`}
                    onClick={() => {
                      setEventType(type);
                      trackEvent('event_type_selected', { type });
                    }}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      eventType === type 
                        ? 'bg-white text-black' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-white/50 mb-6">2. Audience Size</h3>
              <div className="flex flex-wrap gap-4">
                {[500, 5000, 20000].map(size => (
                  <button
                    key={size}
                    id={`btn-size-${size}`}
                    onClick={() => {
                      setAudienceSize(size);
                      trackEvent('audience_size_selected', { size });
                    }}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      audienceSize === size 
                        ? 'bg-white text-black' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {size >= 1000 ? `${size / 1000}k+` : `${size}+`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={recommendedVenue.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden aspect-[16/10] group"
              >
                <img 
                  src={recommendedVenue.image} 
                  alt={recommendedVenue.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-green-400 mb-2 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Smart Match: {getReason(eventType, audienceSize)}
                    </div>
                    <h3 className="text-3xl font-serif mb-2">{recommendedVenue.name}</h3>
                    <p className="text-white/70 font-light mb-4">{recommendedVenue.description}</p>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Up to {recommendedVenue.capacity.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    onMouseEnter={playHoverSound}
                    onClick={() => {
                      playClickSound();
                      trackEvent('cta_click', { section: 'event_booking', venue: recommendedVenue.name });
                      document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-sm font-medium hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 whitespace-nowrap shrink-0"
                  >
                    Book This Space
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
