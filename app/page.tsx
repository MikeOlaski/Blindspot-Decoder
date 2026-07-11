'use client';

import { useState } from 'react';
import { AppState, AssessmentResult } from '@/lib/types';
import Landing from '@/components/Landing';
import Setup from '@/components/Setup';
import Interview from '@/components/Interview';
import Analyzing from '@/components/Analyzing';
import Results from '@/components/Results';
import { RehabitShell } from '@/app/components/RehabitShell';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [mode, setMode] = useState<'multimodal' | 'text'>('text');
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleSetupComplete = (selectedMode: 'multimodal' | 'text') => {
    setMode(selectedMode);
    setAppState('interview');
  };

  const handleInterviewComplete = async (
    qaPairs: { question: string; answer: string }[],
    frames: string[]
  ) => {
    setAppState('analyzing');
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qaPairs, frames }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const details =
          errorBody?.details || errorBody?.error || `Analysis request failed: ${response.status}`;
        const isQuotaError =
          details.includes('RESOURCE_EXHAUSTED') ||
          details.includes('quota') ||
          details.includes('429');

        alert(
          isQuotaError
            ? 'Analysis is temporarily unavailable because the Gemini API quota is exhausted. Please top up/upgrade your Gemini billing or try again later.'
            : 'There was an error analyzing your responses. Please try again.'
        );
        setAppState('landing');
        return;
      }

      const analysis = (await response.json()) as AssessmentResult;
      setResult(analysis);
      setAppState('results');
    } catch (error) {
      console.warn("Analysis failed:", error);
      const message =
        error instanceof Error ? error.message : 'There was an error analyzing your responses.';
      const isQuotaError =
        message.includes('RESOURCE_EXHAUSTED') ||
        message.includes('quota') ||
        message.includes('429');

      alert(
        isQuotaError
          ? 'Analysis is temporarily unavailable because the Gemini API quota is exhausted. Please top up/upgrade your Gemini billing or try again later.'
          : 'There was an error analyzing your responses. Please try again.'
      );
      setAppState('landing');
    }
  };

  return (
    <RehabitShell><main className="min-h-[calc(100vh-145px)] bg-zinc-950 font-sans selection:bg-amber-500/30">
      {appState === 'landing' && <Landing onStart={() => setAppState('setup')} />}
      {appState === 'setup' && <Setup onComplete={handleSetupComplete} />}
      {appState === 'interview' && <Interview mode={mode} onComplete={handleInterviewComplete} />}
      {appState === 'analyzing' && <Analyzing />}
      {appState === 'results' && result && <Results result={result} />}
    </main></RehabitShell>
  );
}
