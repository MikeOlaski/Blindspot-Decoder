'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Eye, ArrowRight, Activity } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background atmospheric gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#5048B0]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#6860E0]/16 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl w-full flex flex-col items-center text-center z-10"
      >
        <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
          <Image
            src="/images/brand/third-eye-indigo.png"
            alt="Rehabit icon"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
        </div>

        <div className="mb-8 -mt-2">
          <p className="font-logo text-[24px] leading-[32px] font-bold tracking-[-0.02em] text-[#70FFE7]">
            rehabit
          </p>
          <p className="font-ui mt-2 text-[14px] leading-[20px] font-normal text-[#99B0D6]">
            Welcome back
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Decode the Blind-spots <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B85F2] via-[#6860E0] to-[#5048B0] lg:whitespace-nowrap">
            shaping how you react and behave
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Stream a short clip or voice note and get a live readout of the hidden pattern affecting your communication, leadership, or relationships.
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-50 text-zinc-950 rounded-full font-medium text-lg overflow-hidden transition-all hover:bg-[#DCD9FF]"
        >
          <span className="relative z-10">Start My Blind Spot Scan</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-4xl border-t border-zinc-800/50 pt-12">
          <div className="flex flex-col gap-2">
            <Activity className="w-5 h-5 text-zinc-500" />
            <h3 className="font-medium text-zinc-200">Live Analysis</h3>
            <p className="text-sm text-zinc-500">Analyzes what you say, how you say it, and your visual composure.</p>
          </div>
          <div className="flex flex-col gap-2">
            <Eye className="w-5 h-5 text-[#6860E0]" />
            <h3 className="font-medium text-zinc-200">Hidden Patterns</h3>
            <p className="text-sm text-zinc-500">Reveals where your intent and impact diverge under pressure.</p>
          </div>
          <div className="flex flex-col gap-2">
            <ArrowRight className="w-5 h-5 text-zinc-500" />
            <h3 className="font-medium text-zinc-200">Actionable Shifts</h3>
            <p className="text-sm text-zinc-500">Provides a practical roadmap to turn friction into leverage.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
