'use client';

import { motion } from 'motion/react';
import { AssessmentResult } from '@/lib/types';
import { Lock, ArrowRight, ShieldAlert, Zap, Target } from 'lucide-react';
import { useState } from 'react';

interface ResultsProps {
  result: AssessmentResult;
}

export default function Results({ result }: ResultsProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSending) {
      return;
    }

    setIsSending(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, result }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || `Send failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send report:', error);
      setSubmitError('Could not send email right now. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-10"
          >
            <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-5">
              <Lock className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Thank you. Your report is on the way.
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-2">
              We&apos;ve sent your full Blind Spot breakdown to:
            </p>
            <p className="text-amber-400 font-semibold break-all mb-6">{email}</p>
            <p className="text-zinc-400">
              Check your inbox and spam folder. Keep this page open until you receive the email.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-3xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-zinc-900 border-2 border-amber-500/30 mb-6 relative"
          >
            <span className="text-4xl font-bold text-amber-500">{result.blind_spot_score}</span>
            <div className="absolute -bottom-3 bg-zinc-950 px-3 py-1 text-xs font-bold tracking-wider uppercase text-zinc-500 border border-zinc-800 rounded-full">
              Score
            </div>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {result.top_blind_spot}
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Your strongest hidden pattern.<br />Let&apos;s decode what it means for how you show&nbsp;up.
          </p>
        </div>

        {/* Core Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6"
          >
            <div className="flex items-center gap-3 mb-4 text-red-400">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-semibold">The Impact</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {result.impact_statement}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6"
          >
            <div className="flex items-center gap-3 mb-4 text-amber-400">
              <Zap className="w-5 h-5" />
              <h3 className="font-semibold">The Asset Beneath</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Every blind spot is an overused strength. Yours is rooted in <strong className="text-zinc-100">{result.growth_leverage}</strong>.
            </p>
          </motion.div>
        </div>

        {/* Lead Gate Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mt-12 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/30 min-h-[500px]"
        >
          {/* Blurred Content Preview */}
          <div className="p-8 pb-12 filter blur-sm opacity-50 select-none pointer-events-none">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Target className="w-5 h-5"/> Starter Roadmap</h3>
            <ul className="space-y-4">
              <li className="flex gap-3"><div className="w-6 h-6 rounded-full bg-zinc-800 shrink-0" /> <div className="h-6 bg-zinc-800 rounded w-3/4" /></li>
              <li className="flex gap-3"><div className="w-6 h-6 rounded-full bg-zinc-800 shrink-0" /> <div className="h-6 bg-zinc-800 rounded w-5/6" /></li>
              <li className="flex gap-3"><div className="w-6 h-6 rounded-full bg-zinc-800 shrink-0" /> <div className="h-6 bg-zinc-800 rounded w-2/3" /></li>
            </ul>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Your Narrative Driver</h3>
              <div className="space-y-3">
                <div className="h-4 bg-zinc-800 rounded w-full" />
                <div className="h-4 bg-zinc-800 rounded w-11/12" />
                <div className="h-4 bg-zinc-800 rounded w-4/5" />
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Secondary Blind Spots</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-zinc-800 rounded-xl w-full" />
                <div className="h-24 bg-zinc-800 rounded-xl w-full" />
              </div>
            </div>
          </div>

          {/* Gate Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Want the full breakdown?</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Unlock your narrative driver, secondary blind spots, and a 3-step practical reset plan.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 rounded-xl px-4 py-3 font-medium hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send My Full Report'}
                  {!isSending && <ArrowRight className="w-4 h-4" />}
                </button>
                {submitError && (
                  <p className="text-sm text-red-400">{submitError}</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
