'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
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
  Zap,
  Monitor,
  Check,
  ChevronRight,
  Copy,
  Globe
} from 'lucide-react';

export const CustomVideoPlayer = ({ 
  onClipClick, 
  onWatchPartyClick,
  isCinemaMode,
  onToggleCinemaMode
}: { 
  onClipClick?: () => void, 
  onWatchPartyClick?: () => void,
  isCinemaMode?: boolean,
  onToggleCinemaMode?: () => void
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [quality, setQuality] = useState('1080p');
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && containerRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedPos = x / rect.width;
      videoRef.current.currentTime = clickedPos * videoRef.current.duration;
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${isCinemaMode ? 'aspect-[21/9]' : 'aspect-video'} rounded-3xl overflow-hidden bg-black group border border-white/10 shadow-2xl transition-all duration-500`}
    >
      {/* Real Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        playsInline
      />

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
            
            <div className="absolute top-6 left-1/2 -translate-x-1/2 glass-panel px-3 py-2 rounded-xl opacity-0 group-hover/obj:opacity-100 transition-all whitespace-nowrap border border-accent-purple/30 shadow-xl">
              <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">AI Identified</p>
              <p className="text-xs font-semibold text-white">Neural Processor V2</p>
              <button className="mt-2 w-full py-1 rounded-lg gradient-bg text-[10px] font-bold text-white">View Details</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Play/Pause Large Overlay Icon */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
              <Play className="w-10 h-10 text-white fill-white ml-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Menu */}
      <AnimatePresence>
        {showSettings && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-24 right-6 w-64 glass-panel border border-white/10 rounded-2xl p-2 z-[70] shadow-2xl"
          >
            <div className="space-y-1">
              <div className="px-3 py-2 text-[10px] font-black text-text-secondary uppercase tracking-widest border-b border-white/5 mb-1">
                Playback Settings
              </div>
              
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                    <Monitor className="w-4 h-4 text-text-secondary group-hover:text-accent-purple" />
                  </div>
                  <span className="text-xs font-bold text-white">Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-accent-purple">{quality}</span>
                  <ChevronRight className="w-3 h-3 text-text-secondary" />
                </div>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                    <Zap className="w-4 h-4 text-text-secondary group-hover:text-accent-purple" />
                  </div>
                  <span className="text-xs font-bold text-white">Speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-accent-purple">{playbackSpeed}</span>
                  <ChevronRight className="w-3 h-3 text-text-secondary" />
                </div>
              </button>
              
              <div className="mt-2 pt-2 border-t border-white/5 px-3 pb-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">AI Subtitles</span>
                  <div className="w-8 h-4 bg-accent-purple rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl glass-panel flex items-center gap-2 border border-accent-purple/30 ai-glow">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">AI Intelligence Active</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-xl transition-all border border-white/5 ${showSettings ? 'bg-accent-purple/20 border-accent-purple/30 text-accent-purple' : 'hover:bg-white/10 text-white'}`}
            >
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={onToggleCinemaMode}
              className={`p-2 rounded-xl transition-all border border-white/5 ${isCinemaMode ? 'bg-accent-purple/20 border-accent-purple/30 text-accent-purple' : 'hover:bg-white/10 text-white'}`}
              title="Cinema Mode"
            >
              <Monitor className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleFullscreen}
              className="p-2 rounded-xl hover:bg-white/10 transition-all border border-white/5"
            >
              <Maximize className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Timeline */}
          <div 
            className="relative h-2 group/timeline cursor-pointer"
            onClick={handleSeek}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full gradient-bg transition-all duration-150 relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-xl scale-0 group-hover/timeline:scale-100 transition-transform"></div>
              </div>
            </div>
            
            {/* AI Key Moments */}
            <div className="absolute inset-0 pointer-events-none">
              {[15, 45, 72, 88].map((pos) => (
                <div 
                  key={pos}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_15px_rgba(139,92,246,1)] border border-white/20"
                  style={{ left: `${pos}%` }}
                ></div>
              ))}
            </div>

            {/* Hover Preview */}
            <div className="absolute -top-16 left-[45%] -translate-x-1/2 glass-panel p-1.5 rounded-xl opacity-0 group-hover/timeline:opacity-100 transition-all border border-white/10 shadow-2xl">
              <div className="w-32 aspect-video rounded-lg bg-surface overflow-hidden relative">
                <div className="absolute inset-0 bg-accent-purple/20 animate-pulse"></div>
              </div>
              <p className="text-[10px] font-black text-center mt-1.5 text-white">{formatTime(currentTime)}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-accent-purple transition-colors"><SkipBack className="w-5 h-5" /></button>
              <button 
                onClick={togglePlay}
                className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center ai-glow hover:scale-110 transition-all shadow-xl"
              >
                {isPlaying ? <Pause className="w-7 h-7 text-white fill-white" /> : <Play className="w-7 h-7 text-white fill-white ml-1" />}
              </button>
              <button className="text-white hover:text-accent-purple transition-colors"><SkipForward className="w-5 h-5" /></button>
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-white" />
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                  <div className="w-full h-full bg-white"></div>
                </div>
              </div>
              <span className="text-xs font-black text-white/90 tracking-widest">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={onClipClick}
                title="Create AI Clip"
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-accent-purple/50"
              >
                <Zap className="w-5 h-5" />
              </button>
              <button 
                onClick={onWatchPartyClick}
                title="Watch Party"
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-accent-blue/50"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent-purple/20 text-accent-purple border border-accent-purple/30 hover:bg-accent-purple/30 transition-all ai-glow group/ask">
                <Brain className="w-5 h-5 group-hover/ask:scale-110 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest">Ask AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideoInfo = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="flex items-center gap-2 relative">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${isLiked ? 'bg-accent-purple/20 border-accent-purple/30 text-accent-purple ai-glow' : 'bg-white/5 border-white/5 hover:bg-white/10 text-white'}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-accent-purple' : ''}`} />
            <span className="text-sm font-medium">{isLiked ? '42.1K' : '42K'}</span>
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowShare(!showShare)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${showShare ? 'bg-accent-blue/20 border-accent-blue/30 text-accent-blue' : 'bg-white/5 border-white/5 hover:bg-white/10 text-white'}`}
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>

            <AnimatePresence>
              {showShare && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-72 glass-panel border border-white/10 rounded-2xl p-4 z-[70] shadow-2xl"
                >
                  <h4 className="text-sm font-bold text-white mb-4">Share Intelligence</h4>
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                        <Globe className="w-4 h-4 text-text-secondary" />
                      </div>
                    ))}
                  </div>
                  <div className="relative flex items-center bg-black/40 rounded-xl p-2 border border-white/5">
                    <input 
                      type="text" 
                      readOnly 
                      value="nexvibe.io/v/neural-future" 
                      className="bg-transparent border-none focus:ring-0 text-[10px] text-text-secondary w-full truncate"
                    />
                    <button 
                      onClick={handleCopy}
                      className="p-1.5 rounded-lg bg-accent-purple/20 text-accent-purple border border-accent-purple/30 hover:bg-accent-purple/30 transition-all"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-white/5">
        <div className="flex items-center gap-4">
          <Link href="/creator/neural-frontier" className="flex items-center gap-4 group/creator">
            <div className="w-12 h-12 rounded-full gradient-bg p-[1px] group-hover/creator:scale-110 transition-transform">
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
              <h3 className="text-base font-bold text-white group-hover/creator:text-accent-purple transition-colors">Neural Frontier</h3>
              <p className="text-xs text-text-secondary">2.4M Subscribers</p>
            </div>
          </Link>
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
