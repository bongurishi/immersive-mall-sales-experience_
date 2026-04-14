import { motion } from 'motion/react';
import React, { useState } from 'react';
import { trackEvent } from '../../lib/analytics';
import { playHoverSound, playClickSound } from '../../lib/audio';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setSubmitted(true);
      trackEvent('lead_captured', { company, section: 'final_cta' });
      // In a real app, send to CRM here
    }
  };

  return (
    <section id="final-cta" className="py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Ready to Make <br /> Your Mark?
          </h2>
          <p className="text-xl text-black/60 font-light mb-12 max-w-2xl mx-auto">
            Join the world's most innovative brands in redefining the retail and entertainment landscape.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input 
                type="text" 
                placeholder="Company Name" 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-6 py-4 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black/30 transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Work Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black/30 transition-colors"
                required
              />
              <button 
                type="submit"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="w-full bg-black text-white px-8 py-4 md:py-5 rounded-xl text-sm font-medium hover:bg-black/90 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                Request Full Proposal
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/5 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-2">Request Received</h3>
              <p className="text-black/60">Our commercial team will be in touch shortly with your tailored proposal.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
