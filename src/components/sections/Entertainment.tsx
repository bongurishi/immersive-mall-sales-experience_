import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Entertainment() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="entertainment" ref={containerRef} className="h-[120vh] relative overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
        <img 
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop" 
          alt="Entertainment" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.2em] text-sm font-medium text-white/80 mb-6 block"
        >
          Attractions
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
        >
          Beyond Shopping. <br /> Pure Experience.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto"
        >
          Anchored by world-class entertainment venues, immersive art installations, and family attractions that transform a visit into a day-long journey.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-medium">
            IMAX Cinema Complex
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-medium">
            Indoor Theme Park
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-medium">
            Immersive Art Gallery
          </div>
        </motion.div>
      </div>
    </section>
  );
}
