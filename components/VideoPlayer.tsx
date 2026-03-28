'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Maximize, 
  Settings,
  Sparkles,
  Brain,
  MessageSquare,
  Share2,
  Heart,
  MoreHorizontal,
  Zap
} from 'lucide-react';

export const CustomVideoPlayer = ({ onClipClick, onWatchPartyClick }: { onClipClick?: () => void, onWatchPartyClick?: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black group border border-white/10">
      {/* Video Content Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 animate-pulse"></div>
        <Play className="w-20 h-20 text-white/20" />
      </div>

      {/* AI Interactive Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clickable Object Example */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-[30%] left-[40%] pointer-events-auto"
        >
          <div className="relative group/obj">
            <div className="w-4 h-4 rounded-full bg-accent-purple ai-glow animate-ping absolute inset-0"></div>
            <div className="w-4 h-4 rounded-full bg-accent-purple relative z-10 border-2 border-white"></div>
            
            <div className="absolute top-6 left-1/2 -translate-x-1/2 glass-panel px-3 py-2 rounded-xl opacity-0 group-hover/obj:opacity-100 transition-all whitespace-nowrap border border-accent-purple/30">
              <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">AI Identified</p>
              <p className="text-xs font-semibold text-white">Neural Processor V2</p>
              <button className="mt-2 w-full py-1 rounded-lg gradient-bg text-[10px] font-bold text-white">View Details</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-lg glass-panel flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent-purple" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">AI Intelligence Active</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/10 transition-all"><Settings className="w-5 h-5 text-white" /></button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-all"><Maximize className="w-5 h-5 text-white" /></button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Timeline */}
          <div className="relative h-1.5 group/timeline cursor-pointer">
            <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full gradient-bg transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* AI Key Moments */}
            <div className="absolute inset-0 pointer-events-none">
              {[15, 45, 72, 88].map((pos) => (
                <div 
                  key={pos}
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(139,92,246,1)]"
                  style={{ left: `${pos}%` }}
                ></div>
              ))}
            </div>

            {/* Hover Preview */}
            <div className="absolute -top-12 left-[45%] -translate-x-1/2 glass-panel p-1 rounded-lg opacity-0 group-hover/timeline:opacity-100 transition-all border border-white/10">
              <div className="w-24 aspect-video rounded bg-surface overflow-hidden">
                <div className="w-full h-full bg-accent-purple/20"></div>
              </div>
              <p className="text-[10px] font-bold text-center mt-1">05:42</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-accent-purple transition-colors"><SkipBack className="w-5 h-5" /></button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center ai-glow hover:scale-105 transition-all"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-white fill-white" /> : <Play className="w-6 h-6 text-white fill-white ml-1" />}
              </button>
              <button className="text-white hover:text-accent-purple transition-colors"><SkipForward className="w-5 h-5" /></button>
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-white" />
                <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-white"></div>
                </div>
              </div>
              <span className="text-xs font-mono text-white/80">05:42 / 12:45</span>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={onClipClick}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
              >
                <Zap className="w-4 h-4" />
              </button>
              <button 
                onClick={onWatchPartyClick}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-purple/20 text-accent-purple border border-accent-purple/30 hover:bg-accent-purple/30 transition-all ai-glow">
                <Brain className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Ask AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideoInfo = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white leading-tight">
            The Future of Neural Interfaces: Bridging Human Intelligence and AI
          </h1>
          <div className="flex items-center gap-4 mt-3 text-sm text-text-secondary">
            <span>1.2M views</span>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <span>2 days ago</span>
            <div className="flex items-center gap-1 text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" />
              Trending in AI
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">42K</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
          <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full gradient-bg p-[1px]">
            <div className="w-full h-full rounded-full bg-surface overflow-hidden relative">
              <Image 
                src="https://picsum.photos/seed/tech/100/100" 
                alt="Creator" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Neural Frontier</h3>
            <p className="text-xs text-text-secondary">2.4M Subscribers</p>
          </div>
          <button className="ml-4 px-6 py-2 rounded-xl gradient-bg text-sm font-bold text-white hover:opacity-90 transition-all ai-glow">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Creator Value</p>
            <p className="text-sm font-bold text-success">$VIBE 12.42</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all">
            Invest
          </button>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-surface/50 border border-white/5">
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
          In this episode, we dive deep into the latest breakthroughs in brain-computer interfaces. We explore how new sensor technologies are enabling higher bandwidth communication between the human brain and external AI systems...
        </p>
        <button className="mt-2 text-xs font-bold text-accent-purple hover:underline">Show More</button>
      </div>
    </div>
  );
};
