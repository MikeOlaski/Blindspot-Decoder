'use client';

import { motion } from 'motion/react';
import { Camera, Mic, Type, ShieldCheck, ArrowRight } from 'lucide-react';

interface SetupProps {
  onComplete: (mode: 'multimodal' | 'text') => void;
}

export default function Setup({ onComplete }: SetupProps) {
  const requestPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      onComplete('multimodal');
    } catch (err) {
      console.error("Permission denied or error:", err);
      // Fallback to text if they deny or it fails
      onComplete('text');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 mb-6 text-amber-500">
          <ShieldCheck className="w-6 h-6" />
          <span className="font-medium tracking-wide uppercase text-sm">Privacy & Context</span>
        </div>

        <h2 className="text-3xl font-bold mb-4">How this works</h2>
        
        <p className="text-zinc-400 mb-8 leading-relaxed">
          This is a reflective self-awareness experience, not a clinical diagnosis. 
          We use your camera and microphone to analyze your composure, tone, and language patterns. 
          <strong className="text-zinc-200 font-medium"> No video or audio is stored.</strong>
        </p>

        <div className="space-y-4 mb-10">
          <button 
            onClick={requestPermissions}
            className="w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-zinc-100">Full Experience (Recommended)</h3>
                <p className="text-sm text-zinc-500">Enable camera & mic for deepest insights</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </button>

          <button 
            onClick={() => onComplete('text')}
            className="w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Type className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-zinc-300">Text Only</h3>
                <p className="text-sm text-zinc-500">Type your answers manually</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </button>
        </div>

        <p className="text-xs text-zinc-600 text-center">
          By proceeding, you agree to our terms of service and privacy policy.
        </p>
      </motion.div>
    </div>
  );
}
