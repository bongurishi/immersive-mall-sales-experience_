import { useState } from 'react';
import { trackEvent } from '../lib/analytics';

export function DemoMode() {
  const [isRunning, setIsRunning] = useState(false);

  const runDemo = async () => {
    if (isRunning) return;
    setIsRunning(true);
    trackEvent('demo_mode_started');

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    // 1. Hero
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await sleep(3500);

    // 2. Retail
    document.querySelector('#retail')?.scrollIntoView({ behavior: 'smooth' });
    await sleep(4000);

    // 3. Booking
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
    await sleep(3500);

    // Simulate clicks
    document.getElementById('btn-type-Expo')?.click();
    await sleep(2000);
    document.getElementById('btn-size-5000')?.click();
    await sleep(4000);

    // 4. Final CTA
    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' });
    await sleep(3000);

    setIsRunning(false);
    trackEvent('demo_mode_completed');
  };

  return (
    <div className="fixed top-20 right-4 md:top-24 md:right-12 z-50">
      <button
        onClick={runDemo}
        disabled={isRunning}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 shadow-lg backdrop-blur-md border ${
          isRunning 
            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
            : 'bg-white/10 text-white hover:bg-white/20 border-white/20'
        }`}
      >
        {isRunning ? (
          <>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Demo Running
          </>
        ) : (
          <>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Demo Mode
          </>
        )}
      </button>
    </div>
  );
}
