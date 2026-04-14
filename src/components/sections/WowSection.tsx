import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function WowSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale, opacity }} 
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2940&auto=format&fit=crop" 
            alt="Concert Crowd" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight text-white mix-blend-overlay">
            Feel The Energy.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
