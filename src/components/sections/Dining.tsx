import { motion } from 'motion/react';

export function Dining() {
  return (
    <section id="dining" className="py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-sm font-medium text-white/50 mb-4 block">
              Gastronomy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif">
              Taste the World
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg font-light max-w-md"
          >
            From Michelin-starred concepts to vibrant street food markets, our dining ecosystem drives evening footfall and extends dwell time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative rounded-2xl overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop" 
              alt="Fine Dining" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-serif mb-2">Fine Dining Terraces</h3>
              <p className="text-white/60 font-light">Panoramic views with signature concepts</p>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1/2 relative rounded-2xl overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop" 
                alt="Casual Dining" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif mb-1">The Food Hall</h3>
                <p className="text-sm text-white/60 font-light">Curated artisanal vendors</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1/2 relative rounded-2xl overflow-hidden group bg-white/5 flex items-center justify-center p-8 text-center border border-white/10"
            >
              <div>
                <div className="text-4xl font-serif mb-2">40+</div>
                <div className="text-sm uppercase tracking-widest text-white/50 mb-6">F&B Concepts</div>
                <button className="text-sm font-medium border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors">
                  Explore F&B Leasing
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
