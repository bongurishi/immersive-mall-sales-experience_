import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Luxury() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="luxury" ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[600px] flex gap-6">
            <motion.div style={{ y: y1 }} className="w-1/2 h-full relative rounded-2xl overflow-hidden mt-12">
              <img 
                src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2940&auto=format&fit=crop" 
                alt="Luxury Fashion" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="w-1/2 h-full relative rounded-2xl overflow-hidden -mt-12">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=2952&auto=format&fit=crop" 
                alt="Luxury Watch" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="uppercase tracking-[0.2em] text-sm font-medium text-white/50 mb-6 block">
              The Avenue
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Uncompromising <br /> Elegance
            </h2>
            <p className="text-white/60 text-lg font-light max-w-md mb-12">
              A dedicated precinct for the world's most prestigious maisons. Featuring double-height facades, VIP drop-offs, and bespoke concierge services.
            </p>
            
            <ul className="space-y-6 border-t border-white/10 pt-8">
              {[
                "Private Viewing Rooms",
                "Valet & VIP Entrance",
                "Personal Shopping Suites",
                "Exclusive F&B Partnerships"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <span className="font-light tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
