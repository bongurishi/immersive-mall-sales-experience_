import { useState } from 'react';
import { toggleAudioMute, getIsMuted, playClickSound } from '../lib/audio';

export function AudioToggle() {
  const [isMuted, setIsMuted] = useState(getIsMuted());

  const handleToggle = () => {
    const muted = toggleAudioMute();
    setIsMuted(muted);
    if (!muted) {
      // Play sound to confirm it's on
      setTimeout(playClickSound, 50);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-8 left-6 md:left-8 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
      aria-label={isMuted ? "Unmute sound" : "Mute sound"}
    >
      {isMuted ? (
        <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )}
    </button>
  );
}
