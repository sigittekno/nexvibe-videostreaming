'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  X, 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  FileVideo, 
  ChevronRight,
  Plus,
  Trash2
} from 'lucide-react';

export const UploadFlow = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<'upload' | 'processing' | 'review'>('upload');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 'processing') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('review'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-2xl glass-panel rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Upload className="w-5 h-5 text-accent-purple" />
            Upload Intelligence
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === 'upload' && (
              <motion.div 
                key="upload"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:border-accent-purple/50 transition-all cursor-pointer group">
                  <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileVideo className="w-8 h-8 text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Drag & drop video file</p>
                    <p className="text-sm text-text-secondary">MP4, MOV or WebM (Max 2GB)</p>
                  </div>
                  <button 
                    onClick={() => setStep('processing')}
                    className="px-6 py-2.5 rounded-xl gradient-bg text-sm font-bold text-white ai-glow"
                  >
                    Select File
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'processing' && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 py-8"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <Loader2 className="w-16 h-16 text-accent-purple animate-spin" />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-accent-purple ai-glow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI is analyzing your content</h3>
                    <p className="text-sm text-text-secondary">Generating transkrip, detecting objects, and mapping chapters...</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-text-secondary uppercase tracking-widest">
                    <span>Processing Status</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full gradient-bg ai-glow"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Transcript', status: progress > 30 ? 'done' : 'loading' },
                    { label: 'Object Mapping', status: progress > 60 ? 'done' : 'loading' },
                    { label: 'Auto Chapters', status: progress > 90 ? 'done' : 'loading' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                      {item.status === 'done' ? (
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      ) : (
                        <Loader2 className="w-4 h-4 text-accent-purple animate-spin" />
                      )}
                      <span className="text-xs font-bold text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'review' && (
              <motion.div 
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Review AI Suggestions</h3>
                  <span className="px-2 py-1 rounded-lg bg-success/10 text-success text-[10px] font-bold uppercase tracking-widest border border-success/20">
                    Analysis Complete
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Suggested Chapters</p>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {[
                      { time: '00:00', title: 'Introduction to Neural Networks' },
                      { time: '02:14', title: 'The Evolution of AI Models' },
                      { time: '05:45', title: 'Practical Applications' }
                    ].map((chapter, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group">
                        <span className="text-xs font-mono text-accent-purple">{chapter.time}</span>
                        <input 
                          type="text" 
                          defaultValue={chapter.title}
                          className="flex-1 bg-transparent border-none text-sm text-white focus:ring-0 p-0"
                        />
                        <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-destructive/10 text-text-secondary hover:text-destructive transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button className="w-full py-3 rounded-xl border border-dashed border-white/10 text-xs font-bold text-text-secondary hover:border-accent-purple/50 hover:text-white transition-all flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add Custom Chapter
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button className="flex-1 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
                    Save Draft
                  </button>
                  <button 
                    onClick={onClose}
                    className="flex-1 py-3 rounded-2xl gradient-bg text-sm font-bold text-white ai-glow hover:opacity-90 transition-all"
                  >
                    Publish Intelligence
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
