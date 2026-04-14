import { motion } from 'motion/react';
import { trackEvent } from '../../lib/analytics';
import { playHoverSound, playClickSound } from '../../lib/audio';

export function Events() {
  return (
    <section id="events" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="uppercase tracking-[0.2em] text-sm font-medium text-white/50 mb-6 block">
              The Platform
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Stage Your <br /> Next Moment
            </h2>
            <p className="text-white/60 text-lg font-light max-w-md mb-12">
              Our central atrium and dedicated event spaces offer a high-visibility platform for brand launches, cultural exhibitions, and live performances.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="border-b border-white/10 pb-6 group">
                <h4 className="text-xl font-medium mb-2 group-hover:text-green-400 transition-colors">The Grand Atrium</h4>
                <p className="text-white/50 text-sm font-light">10,000 sq ft • 360° Visibility • Digital LED Wraps</p>
              </div>
              <div className="border-b border-white/10 pb-6 group">
                <h4 className="text-xl font-medium mb-2 group-hover:text-green-400 transition-colors">The Rooftop Garden</h4>
                <p className="text-white/50 text-sm font-light">5,000 sq ft • Open Air • VIP Access</p>
              </div>
              <div className="border-b border-white/10 pb-6 group">
                <h4 className="text-xl font-medium mb-2 group-hover:text-green-400 transition-colors">Pop-Up Plazas</h4>
                <p className="text-white/50 text-sm font-light">Flexible footprints • High Footfall Corridors</p>
              </div>
            </div>

            <button 
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                trackEvent('cta_click', { section: 'events', action: 'host_event' });
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-sm font-medium hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Host Your Event
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop" 
              alt="Live Event" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-2">Past Event</div>
                <div className="text-xl font-serif mb-1">Global Tech Launch</div>
                <div className="text-sm text-white/80 font-light">50,000+ Attendees over 3 days</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
