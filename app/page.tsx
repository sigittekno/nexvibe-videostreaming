'use client';

import React, { useState } from 'react';
import { Navbar, Sidebar } from '@/components/Navigation';
import { VideoCard, MoodSelector } from '@/components/VideoCard';
import { CustomVideoPlayer, VideoInfo } from '@/components/VideoPlayer';
import { AIPilotPanel } from '@/components/AIPilot';
import { UploadFlow } from '@/components/UploadFlow';
import { ClipShare } from '@/components/ClipShare';
import { WatchParty } from '@/components/WatchParty';
import { InvestmentPanel } from '@/components/InvestmentPanel';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  Sparkles, 
  Brain, 
  TrendingUp, 
  Clock, 
  ChevronRight,
  Play,
  PlayCircle,
  Home as HomeIcon,
  LayoutDashboard,
  User as UserIcon,
  Search
} from 'lucide-react';

import Image from 'next/image';

export default function NexVibeApp() {
  const [view, setView] = useState<'home' | 'watch' | 'profile' | 'trending'>('home');
  const [isMounted, setIsMounted] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showClipShare, setShowClipShare] = useState(false);
  const [isWatchParty, setIsWatchParty] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const recommendedVideos = [
    { title: "The Future of Neural Interfaces: Bridging Human Intelligence", creator: "Neural Frontier", views: "1.2M", time: "2 days ago", thumbnail: "https://picsum.photos/seed/neural/800/450", aiScore: 98, isLearning: true },
    { title: "Quantum Computing Explained for Visual Learners", creator: "Quantum Lab", views: "850K", time: "5 hours ago", thumbnail: "https://picsum.photos/seed/quantum/800/450", aiScore: 92 },
    { title: "Sustainable Cities: AI-Driven Urban Planning", creator: "EcoTech", views: "420K", time: "1 week ago", thumbnail: "https://picsum.photos/seed/city/800/450", aiScore: 85, isLearning: true },
    { title: "The Art of Generative Design in 2026", creator: "Design Theory", views: "2.1M", time: "3 days ago", thumbnail: "https://picsum.photos/seed/design/800/450", aiScore: 95 },
    { title: "Blockchain Beyond Crypto: Supply Chain Revolution", creator: "Web3 Insider", views: "150K", time: "12 hours ago", thumbnail: "https://picsum.photos/seed/chain/800/450", aiScore: 88 },
    { title: "Deep Sea Exploration with Autonomous AI Drones", creator: "Oceanic", views: "3.4M", time: "1 month ago", thumbnail: "https://picsum.photos/seed/ocean/800/450", aiScore: 91 },
    { title: "Space Colonization: The First 100 Years", creator: "Galactic", views: "5.6M", time: "2 weeks ago", thumbnail: "https://picsum.photos/seed/space/800/450", aiScore: 97, isLearning: true },
    { title: "Bio-Engineering: Designing Life from Scratch", creator: "BioLab", views: "920K", time: "4 days ago", thumbnail: "https://picsum.photos/seed/bio/800/450", aiScore: 89 },
    { title: "The Philosophy of Digital Consciousness", creator: "Mindscape", views: "1.1M", time: "6 days ago", thumbnail: "https://picsum.photos/seed/mind/800/450", aiScore: 94 },
    { title: "Robotics in Everyday Life: 2026 Edition", creator: "RoboTech", views: "2.8M", time: "1 day ago", thumbnail: "https://picsum.photos/seed/robot/800/450", aiScore: 90 },
    { title: "Climate Engineering: Can We Save the Planet?", creator: "EarthWatch", views: "740K", time: "3 weeks ago", thumbnail: "https://picsum.photos/seed/earth/800/450", aiScore: 86, isLearning: true },
    { title: "The Evolution of Virtual Reality Interfaces", creator: "VR World", views: "1.5M", time: "5 days ago", thumbnail: "https://picsum.photos/seed/vr/800/450", aiScore: 93 },
  ];

  const trendingCategories = [
    { label: 'Now', icon: TrendingUp, active: true },
    { label: 'Music', icon: PlayCircle },
    { label: 'Gaming', icon: Play },
    { label: 'Movies', icon: PlayCircle },
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center ai-glow animate-pulse">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar 
        onUploadClick={() => setShowUpload(true)} 
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <Sidebar 
        activeView={view} 
        setView={setView} 
        isCollapsed={isSidebarCollapsed}
      />

      <main className={`${isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'} pt-16 min-h-screen transition-all duration-300`}>
        <div className="max-w-[1800px] mx-auto">
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col"
              >
                {/* Sticky Category Bar */}
                <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl px-6 py-4 border-b border-white/5">
                  <MoodSelector />
                </div>

                <div className="p-6 space-y-10">
                  {/* Featured Hero Section */}
                  <section>
                    <div className="relative h-[450px] rounded-[40px] overflow-hidden group border border-white/10 shadow-2xl">
                      <Image 
                        src="https://picsum.photos/seed/futuristic-hero/1920/1080" 
                        alt="Featured" 
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 p-10 md:p-16 space-y-6 max-w-3xl">
                        <div className="flex items-center gap-3">
                          <div className="px-4 py-1.5 rounded-full glass-panel flex items-center gap-2 border border-accent-purple/50 ai-glow">
                            <Sparkles className="w-4 h-4 text-accent-purple" />
                            <span className="text-xs font-black text-white uppercase tracking-[0.2em]">AI MASTERCLASS</span>
                          </div>
                          <div className="px-4 py-1.5 rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/30 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
                            TRENDING NOW
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                            The Neural <span className="gradient-text">Revolution</span>
                          </h1>
                          <p className="text-text-secondary text-xl font-medium line-clamp-2 max-w-2xl">
                            How synthetic intelligence is merging with biological systems to create the next stage of human evolution.
                          </p>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                          <button 
                            onClick={() => setView('watch')}
                            className="px-10 py-4 rounded-2xl gradient-bg text-white font-black text-sm uppercase tracking-widest ai-glow hover:scale-105 transition-all flex items-center gap-3"
                          >
                            <Play className="w-5 h-5 fill-white" />
                            Watch Now
                          </button>
                          <button className="px-10 py-4 rounded-2xl glass-panel text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl">
                            Save to Path
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Intelligence Feed Grid */}
                  <section className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center ai-glow">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-black text-white tracking-tighter">Intelligence Feed</h2>
                          <p className="text-text-secondary text-sm font-medium">Curated by your personal AI Pilot</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white transition-all">
                          <ChevronRight className="w-5 h-5 rotate-180" />
                        </button>
                        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white transition-all">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10">
                      {recommendedVideos.map((video, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => setView('watch')}
                        >
                          <VideoCard {...video} />
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* Learning Progress Banner */}
                  <section className="relative p-12 rounded-[48px] glass-panel border border-white/10 overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/20 blur-[120px] rounded-full group-hover:bg-accent-purple/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full"></div>
                    
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                      <div className="space-y-6 flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/30 text-[10px] font-black uppercase tracking-widest">
                          Learning Path Active
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">
                          You&apos;re crushing your <br /> <span className="gradient-text">AI Fundamentals</span> path!
                        </h2>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm font-bold">
                            <span className="text-text-secondary">Overall Progress</span>
                            <span className="text-accent-purple">65%</span>
                          </div>
                          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '65%' }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="h-full gradient-bg ai-glow relative"
                            >
                              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]"></div>
                            </motion.div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent-purple ai-glow"></div>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">12 Modules Left</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent-blue ai-glow"></div>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">4h 20m Remaining</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-12 py-5 rounded-2xl gradient-bg text-white font-black text-sm uppercase tracking-widest ai-glow hover:scale-105 transition-all">
                          Resume Learning
                        </button>
                        <button className="px-12 py-5 rounded-2xl glass-panel text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10">
                          View Curriculum
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {view === 'trending' && (
              <motion.div 
                key="trending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 space-y-10"
              >
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[28px] gradient-bg flex items-center justify-center ai-glow shadow-2xl">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black text-white tracking-tighter">Trending Now</h1>
                    <p className="text-text-secondary font-medium">The most watched and discussed intelligence in the last 24 hours.</p>
                  </div>
                </div>

                {/* Trending Categories */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                  {trendingCategories.map((cat) => (
                    <button 
                      key={cat.label}
                      className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl transition-all border font-black text-xs uppercase tracking-widest ${
                        cat.active 
                          ? 'bg-white text-black border-white' 
                          : 'bg-white/5 border-white/5 text-text-secondary hover:bg-white/10'
                      }`}
                    >
                      <cat.icon className="w-4 h-4" />
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-8">
                  {recommendedVideos.slice(0, 8).map((video, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col md:flex-row gap-6 group cursor-pointer"
                      onClick={() => setView('watch')}
                    >
                      <div className="relative w-full md:w-[360px] aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-accent-purple/50 transition-all shadow-xl">
                        <Image 
                          src={video.thumbnail} 
                          alt={video.title} 
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-black text-white border border-white/5">
                          12:45
                        </div>
                        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-2xl glass-panel flex items-center gap-2 border border-white/10 backdrop-blur-xl">
                          <span className="text-[14px] font-black text-white">#{i + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 py-2">
                        <h3 className="text-2xl font-black text-white leading-tight group-hover:text-accent-purple transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-bold text-text-secondary">
                          <span>{video.creator}</span>
                          <span className="w-1 h-1 rounded-full bg-white/10"></span>
                          <span>{video.views} views</span>
                          <span className="w-1 h-1 rounded-full bg-white/10"></span>
                          <span>{video.time}</span>
                        </div>
                        <p className="text-text-secondary text-sm line-clamp-2 max-w-2xl font-medium">
                          Explore the cutting edge of {video.title.split(':')[0]} and how it&apos;s impacting the global landscape in 2026.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                          <div className="px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20 text-[10px] font-black uppercase tracking-widest">
                            {video.aiScore}% Match
                          </div>
                          {video.isLearning && (
                            <div className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 text-[10px] font-black uppercase tracking-widest">
                              Learning Path
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {view === 'watch' && (
              <motion.div 
                key="watch"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 md:p-6 lg:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8"
              >
                {/* Main Content */}
                <div className="xl:col-span-8 space-y-6">
                  <CustomVideoPlayer 
                    onClipClick={() => setShowClipShare(true)} 
                    onWatchPartyClick={() => setIsWatchParty(!isWatchParty)}
                  />
                  <VideoInfo />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InvestmentPanel />
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-accent-purple" />
                        AI Recommended Next
                      </h3>
                      {recommendedVideos.slice(0, 3).map((video, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer">
                          <div className="w-32 aspect-video rounded-xl overflow-hidden relative flex-shrink-0">
                            <Image 
                              src={video.thumbnail} 
                              alt={video.title} 
                              fill
                              className="object-cover group-hover:scale-110 transition-transform"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-accent-purple transition-colors">{video.title}</h4>
                            <p className="text-xs text-text-secondary">{video.creator}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar / AI Panel */}
                <div className="xl:col-span-4 space-y-6">
                  <div className="h-[600px]">
                    {isWatchParty ? <WatchParty /> : <AIPilotPanel />}
                  </div>
                  {!isWatchParty && (
                    <div className="p-6 glass-panel rounded-3xl border border-white/10">
                      <h4 className="text-sm font-bold text-white mb-4">Video Intelligence Score</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-4 border-accent-purple flex items-center justify-center text-lg font-bold text-white ai-glow">
                          98
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-text-secondary">High educational value detected. AI recommends this for your &quot;Quantum Physics&quot; goal.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {view === 'profile' && (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 max-w-4xl mx-auto space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full gradient-bg p-[2px]">
                    <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center">
                      <UserIcon className="w-12 h-12 text-text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Sigit Tekno</h1>
                    <p className="text-text-secondary">AI Intelligence Enthusiast • 12.4K $VIBE</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Learning Progress', value: '65%', icon: Brain },
                    { label: 'Saved Moments', value: '124', icon: Sparkles },
                    { label: 'Creators Supported', value: '12', icon: TrendingUp },
                  ].map((stat) => (
                    <div key={stat.label} className="p-6 rounded-3xl glass-panel border border-white/5 space-y-2">
                      <stat.icon className="w-5 h-5 text-accent-purple" />
                      <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-surface overflow-hidden relative">
                            <Image 
                              src={`https://picsum.photos/seed/${i}/100/100`} 
                              alt="Activity" 
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">Completed &quot;Neural Networks Part {i}&quot;</p>
                            <p className="text-xs text-text-secondary">Earned 25 $VIBE • 2h ago</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-text-secondary" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-panel h-16 md:hidden flex items-center justify-around px-4 border-t border-white/5">
        <button onClick={() => setView('home')} className={`p-2 rounded-xl transition-all ${view === 'home' ? 'text-accent-purple' : 'text-text-secondary'}`}>
          <HomeIcon className="w-6 h-6" />
        </button>
        <button onClick={() => setView('watch')} className={`p-2 rounded-xl transition-all ${view === 'watch' ? 'text-accent-purple' : 'text-text-secondary'}`}>
          <PlayCircle className="w-6 h-6" />
        </button>
        <Link href="/studio" className="p-2 rounded-xl transition-all text-text-secondary hover:text-accent-purple">
          <LayoutDashboard className="w-6 h-6" />
        </Link>
        <button onClick={() => setView('profile')} className={`p-2 rounded-xl transition-all ${view === 'profile' ? 'text-accent-purple' : 'text-text-secondary'}`}>
          <UserIcon className="w-6 h-6" />
        </button>
      </nav>

      {/* AI Floating Button (Mobile Only) */}
      <button className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center ai-glow md:hidden">
        <Sparkles className="w-6 h-6 text-white" />
      </button>
      {/* Modals */}
      <AnimatePresence>
        {showUpload && <UploadFlow onClose={() => setShowUpload(false)} />}
        {showClipShare && <ClipShare onClose={() => setShowClipShare(false)} />}
      </AnimatePresence>
    </div>
  );
}
