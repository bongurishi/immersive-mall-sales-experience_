import { motion } from 'motion/react';
import { trackEvent } from '../../lib/analytics';
import { playHoverSound, playClickSound } from '../../lib/audio';

const brands = [
  "ZARA", "H&M", "UNIQLO", "SEPHORA", 
  "APPLE", "NIKE", "ADIDAS", "LULULEMON",
  "DYSON", "LEGO", "MUJI", "AESOP"
];

export function Retail() {
  return (
    <section id="retail" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.2em] text-sm font-medium text-white/50 mb-4 block"
          >
            Retail Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Curated for Conversion
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-light max-w-2xl mx-auto"
          >
            Join a thriving ecosystem of global flagships. Our strategic zoning ensures high dwell times and maximizes cross-shopping opportunities among a premium, high-spend audience.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3/2] bg-white/5 rounded-xl flex items-center justify-center overflow-hidden hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
            >
              <span className="text-xl font-medium tracking-wider text-white/40 group-hover:text-white transition-colors relative z-10 group-hover:scale-110 duration-500">
                {brand}
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <button 
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              trackEvent('cta_click', { section: 'retail', action: 'lease_store' });
              document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full text-sm font-medium hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            Lease Your Store
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

