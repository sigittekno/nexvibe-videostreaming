'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ShieldCheck, 
  Info,
  Zap,
  Sparkles,
  BarChart3
} from 'lucide-react';

export const InvestmentPanel = () => {
  return (
    <div className="p-6 glass-panel rounded-[32px] border border-white/10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            Content Investment
          </h2>
          <p className="text-xs text-text-secondary mt-1">Support creators and earn from content growth.</p>
        </div>
        <div className="px-3 py-1 rounded-lg bg-success/10 text-success border border-success/20 text-[10px] font-bold uppercase tracking-widest">
          High Yield
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Current Value</p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-white">$VIBE 12.42</p>
            <span className="text-xs font-bold text-success flex items-center">
              <ArrowUpRight className="w-3 h-3" />
              +4.2%
            </span>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Total Staked</p>
          <p className="text-2xl font-bold text-white">42.8K</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-accent-purple" />
            Performance Forecast
          </h3>
          <Info className="w-4 h-4 text-text-secondary cursor-help" />
        </div>
        <div className="h-32 relative bg-white/5 rounded-2xl overflow-hidden p-4">
          <div className="absolute inset-0 flex items-end gap-1 px-4 pb-2">
            {[30, 45, 40, 60, 55, 75, 70, 90].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-accent-purple/20 to-accent-purple rounded-t-sm"
              />
            ))}
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-accent-purple" />
            <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">AI Projected</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Your Balance</span>
          <span className="font-bold text-white">1,242 $VIBE</span>
        </div>
        <div className="flex gap-2">
          <input 
            type="number" 
            placeholder="Amount to invest..." 
            className="flex-1 bg-background border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent-purple/50 outline-none"
          />
          <button className="px-6 py-3 rounded-xl gradient-bg text-sm font-bold text-white ai-glow hover:opacity-90 transition-all">
            Invest
          </button>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
        <p className="text-[10px] text-text-secondary leading-relaxed">
          NexVibe uses AI-driven risk assessment. Content value is based on engagement intelligence, learning impact, and creator reputation.
        </p>
      </div>
    </div>
  );
};
