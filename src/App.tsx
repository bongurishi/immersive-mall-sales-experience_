/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Retail } from './components/sections/Retail';
import { Luxury } from './components/sections/Luxury';
import { Dining } from './components/sections/Dining';
import { WowSection } from './components/sections/WowSection';
import { Entertainment } from './components/sections/Entertainment';
import { Events } from './components/sections/Events';
import { EventBooking } from './components/sections/EventBooking';
import { ImpactMetrics } from './components/sections/ImpactMetrics';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { FloatingCTA } from './components/FloatingCTA';
import { DemoMode } from './components/DemoMode';
import { AudioToggle } from './components/AudioToggle';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-black min-h-screen text-white selection:bg-white/30">
          <DemoMode />
          <AudioToggle />
          <Navigation />
          <Hero />
          <Stats />
          <Retail />
          <Luxury />
          <Dining />
          <WowSection />
          <Entertainment />
          <Events />
          <EventBooking />
          <ImpactMetrics />
          <FinalCTA />
          <Footer />
          <FloatingCTA />
        </main>
      )}
    </>
  );
}

