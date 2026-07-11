'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const LOADING_MESSAGES = [
  "Reviewing your signal patterns...",
  "Looking for gaps between intent, style, and impact...",
  "Decoding your strongest hidden pattern...",
  "Finalizing your Blind Spot Score..."
];

export default function Analyzing() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center max-w-md text-center">
        
        {/* Radar / Scanning Animation */}
        <div className="relative w-32 h-32 mb-12">
          <div className="absolute inset-0 rounded-full border border-zinc-800" />
          <div className="absolute inset-4 rounded-full border border-zinc-800" />
          <div className="absolute inset-8 rounded-full border border-zinc-700" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(245, 158, 11, 0.4) 100%)'
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
          </div>
        </div>

        <motion.p 
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl font-medium text-zinc-300 h-16"
        >
          {LOADING_MESSAGES[messageIndex]}
        </motion.p>
      </div>
    </div>
  );
}
