'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  Share2, 
  X, 
  Play, 
  Download, 
  Globe, 
  Twitter, 
  Instagram,
  Sparkles,
  Zap
} from 'lucide-react';

export const ClipShare = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<'trim' | 'share'>('trim');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl glass-panel rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Scissors className="w-5 h-5 text-accent-purple" />
            Clip & Share
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === 'trim' && (
              <motion.div 
                key="trim"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="aspect-video rounded-2xl bg-black relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-purple/10 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/40" />
                  </div>
                  
                  {/* Trimming UI */}
                  <div className="absolute bottom-4 left-4 right-4 h-16 glass-panel rounded-xl border border-white/10 p-2 flex items-center">
                    <div className="flex-1 h-full bg-white/5 rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 bottom-0 left-[20%] right-[40%] bg-accent-purple/30 border-x-2 border-accent-purple ai-glow">
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-white cursor-ew-resize"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-1 bg-white cursor-ew-resize"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">Selected Duration</p>
                    <p className="text-xs text-text-secondary">02:14 - 03:45 (01:31)</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">AI Optimized for Shorts</span>
                  </div>
                </div>

                <button 
                  onClick={() => setStep('share')}
                  className="w-full py-4 rounded-2xl gradient-bg text-white font-bold ai-glow hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Generate Clip
                  <Zap className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {step === 'share' && (
              <motion.div 
                key="share"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center ai-glow">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Clip Ready!</h3>
                    <p className="text-sm text-text-secondary">AI has optimized this clip for maximum engagement.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Twitter, label: 'Twitter', color: 'bg-[#1DA1F2]' },
                    { icon: Instagram, label: 'Instagram', color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
                    { icon: Globe, label: 'NexVibe Feed', color: 'gradient-bg' },
                    { icon: Download, label: 'Download', color: 'bg-white/10' },
                  ].map((platform) => (
                    <button 
                      key={platform.label}
                      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${platform.color} group-hover:scale-110 transition-transform shadow-lg`}>
                        <platform.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-text-secondary group-hover:text-white">{platform.label}</span>
                    </button>
                  ))}
                </div>

                <div className="p-6 rounded-3xl bg-accent-purple/5 border border-accent-purple/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">Potential Reach</p>
                    <p className="text-xl font-bold text-white">42.5K - 120K</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">Est. Reward</p>
                    <p className="text-xl font-bold text-success">+150 $VIBE</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
