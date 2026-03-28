'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Play, Clock, Sparkles, Brain, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  creator: string;
  views: string;
  time: string;
  thumbnail: string;
  aiScore?: number;
  isLearning?: boolean;
}

export const VideoCard = ({ title, creator, views, time, thumbnail, aiScore, isLearning }: VideoCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-surface/50 mb-4 border border-white/5 group-hover:border-accent-purple/30 transition-all shadow-lg group-hover:shadow-accent-purple/10">
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* AI Overlay */}
        {aiScore && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-2xl glass-panel flex items-center gap-2 border border-white/10 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-[11px] font-black text-white tracking-wider">{aiScore}% MATCH</span>
          </div>
        )}

        {isLearning && (
          <div className="absolute top-3 right-3 px-3 py-1.5 rounded-2xl bg-accent-blue/80 flex items-center gap-2 backdrop-blur-md border border-white/10">
            <Brain className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] font-black text-white tracking-wider">LEARNING</span>
          </div>
        )}

        {/* Duration */}
        <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-bold text-white border border-white/5">
          12:45
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center ai-glow shadow-2xl"
          >
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </motion.div>
        </div>

        {/* AI Key Moments Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5 backdrop-blur-sm">
          <div className="absolute top-0 left-[20%] w-1.5 h-full bg-accent-purple shadow-[0_0_12px_rgba(139,92,246,1)]"></div>
          <div className="absolute top-0 left-[45%] w-1.5 h-full bg-accent-purple shadow-[0_0_12px_rgba(139,92,246,1)]"></div>
          <div className="absolute top-0 left-[75%] w-1.5 h-full bg-accent-purple shadow-[0_0_12px_rgba(139,92,246,1)]"></div>
        </div>
      </div>

      <div className="flex gap-4 px-1">
        <div className="w-11 h-11 rounded-2xl bg-surface flex-shrink-0 border border-white/10 overflow-hidden shadow-inner group-hover:border-accent-purple/50 transition-colors">
          <Image 
            src={`https://picsum.photos/seed/${creator}/100/100`} 
            alt={creator}
            width={44}
            height={44}
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <h3 className="text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-accent-purple transition-colors">
            {title}
          </h3>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-text-secondary hover:text-white transition-colors font-medium">{creator}</p>
            <div className="flex items-center gap-2 text-[11px] text-text-secondary/80">
              <span>{views} views</span>
              <span className="w-1 h-1 rounded-full bg-white/10"></span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MoodSelector = () => {
  const categories = [
    { label: 'All', icon: Sparkles, active: true },
    { label: 'AI Intelligence', icon: Brain },
    { label: 'Blockchain', icon: TrendingUp },
    { label: 'Quantum Physics', icon: Sparkles },
    { label: 'Generative Art', icon: Sparkles },
    { label: 'Robotics', icon: Brain },
    { label: 'Space Tech', icon: TrendingUp },
    { label: 'Cybersecurity', icon: Clock },
    { label: 'Bio-Tech', icon: Brain },
    { label: 'Future Cities', icon: Clock },
  ];

  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
      {categories.map((cat) => (
        <button 
          key={cat.label}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl transition-all whitespace-nowrap border group ${
            cat.active 
              ? 'bg-white text-black border-white font-black' 
              : 'bg-white/5 border-white/5 text-text-secondary hover:bg-white/10 hover:border-white/20 hover:text-white font-bold'
          }`}
        >
          {cat.icon && <cat.icon className={`w-4 h-4 ${cat.active ? 'text-black' : 'text-accent-purple group-hover:scale-110 transition-transform'}`} />}
          <span className="text-xs uppercase tracking-widest">{cat.label}</span>
        </button>
      ))}
    </div>
  );
};
