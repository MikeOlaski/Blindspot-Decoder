'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROMPTS } from '@/lib/types';
import { ArrowRight, Video, VideoOff, Mic, MicOff, Square } from 'lucide-react';

interface InterviewProps {
  mode: 'multimodal' | 'text';
  onComplete: (qaPairs: { question: string; answer: string }[], frames: string[]) => void;
}

export default function Interview({ mode, onComplete }: InterviewProps) {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [qaPairs, setQaPairs] = useState<{ question: string; answer: string }[]>([]);
  const [frames, setFrames] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);
  const isRecognizingRef = useRef(false);

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Compress heavily to save token space
        const dataUrl = canvas.toDataURL('image/jpeg', 0.5);
        setFrames(prev => [...prev, dataUrl]);
      }
    }
  };

  useEffect(() => {
    if (mode === 'multimodal') {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          
          // Capture a frame every 2 seconds
          intervalRef.current = setInterval(() => {
            captureFrame();
          }, 2000);
        })
        .catch(err => console.error("Failed to get camera/mic:", err));

      // Setup Speech Recognition
      if (typeof window !== 'undefined') {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.interimResults = true;
          
          recognition.onresult = (event: any) => {
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript;
            }
            setAnswer(transcript);
          };

          recognition.onstart = () => {
            isRecognizingRef.current = true;
            setIsRecording(true);
          };

          recognition.onerror = (event: any) => {
            // Browser speech recognition errors (for example "network") are common
            // and should not break the interview flow or trigger dev overlays.
            if (event.error !== 'aborted' && event.error !== 'no-speech' && event.error !== 'network') {
              console.warn("Speech recognition error:", event.error);
            }
            isRecognizingRef.current = false;
            setIsRecording(false);
          };

          recognition.onend = () => {
            isRecognizingRef.current = false;
            setIsRecording(false);
          };

          recognitionRef.current = recognition;

          try {
            recognition.start();
          } catch (e) {
            console.warn("Speech recognition start failed:", e);
          }
        }
      }
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, [mode]);

  const toggleRecording = () => {
    if (!recognitionRef.current) return;
    
    if (isRecognizingRef.current) {
      try { recognitionRef.current.stop(); } catch(e) {}
    } else {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn("Speech recognition toggle failed:", e);
      }
    }
  };

  const handleNext = () => {
    const finalAnswer = answer.trim() || "(No verbal or text response provided)";
    const newQaPairs = [...qaPairs, { question: PROMPTS[currentPromptIndex], answer: finalAnswer }];
    
    if (currentPromptIndex < PROMPTS.length - 1) {
      setQaPairs(newQaPairs);
      setAnswer('');
      setCurrentPromptIndex(prev => prev + 1);

      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
        
        setTimeout(() => {
          if (recognitionRef.current && !isRecognizingRef.current) {
            try {
              recognitionRef.current.start();
            } catch (e) {
              console.warn("Failed to restart speech recognition:", e);
            }
          }
        }, 250);
      }
    } else {
      // Clean up stream before completing
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
      onComplete(newQaPairs, frames);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl flex flex-col h-[80vh]">
        
        {/* Header / Progress */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {PROMPTS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentPromptIndex ? 'w-8 bg-amber-500' : 'w-4 bg-zinc-800'}`} 
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
            {mode === 'multimodal' ? <Video className="w-4 h-4 text-amber-500" /> : <VideoOff className="w-4 h-4" />}
            {mode === 'multimodal' ? 'Live Analysis Active' : 'Text Mode'}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPromptIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-8 text-zinc-100">
                {PROMPTS[currentPromptIndex]}
              </h2>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={mode === 'multimodal' ? "Speak your answer (we are listening), or type it here..." : "Type your response here. Be as honest and direct as possible..."}
                className="flex-1 w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-lg text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* Hidden canvas for frame capture */}
          <canvas ref={canvasRef} className="hidden" />
          
          {/* Video Preview */}
          {mode === 'multimodal' && (
            <div className="absolute bottom-6 right-6 w-32 h-40 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl z-10">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover opacity-80"
              />
              {isRecording && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            {mode === 'multimodal' && (
              <button
                onClick={toggleRecording}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isRecording 
                    ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20' 
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {isRecording ? (
                  <>
                    <Square className="w-4 h-4 fill-current" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    Start Recording
                  </>
                )}
              </button>
            )}
          </div>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium hover:bg-white transition-colors"
          >
            {currentPromptIndex === PROMPTS.length - 1 ? 'Analyze Patterns' : 'Next Question'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
