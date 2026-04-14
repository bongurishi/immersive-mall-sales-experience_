import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start">
      <div className="text-5xl md:text-7xl font-serif font-medium mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-white/50">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              A Destination <br /> Beyond Scale
            </h2>
            <p className="text-white/60 text-lg font-light max-w-md mb-12">
              Strategically located at the intersection of culture and commerce, our property offers unparalleled reach and engagement for forward-thinking brands.
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <Counter value={25} label="Million Annual Visitors" suffix="M+" />
              <Counter value={1.2} label="Million Sq Ft" suffix="M" />
              <Counter value={350} label="Premium Brands" suffix="+" />
              <Counter value={45} label="Dwell Time (Mins)" suffix="m" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop" 
              alt="Mall Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Prime Location
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
