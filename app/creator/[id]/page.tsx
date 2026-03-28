'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Play, 
  ListVideo, 
  Brain, 
  TrendingUp, 
  Users, 
  Share2, 
  MoreHorizontal,
  ArrowLeft,
  Search,
  Filter,
  Sparkles,
  ChevronRight,
  Globe,
  Twitter,
  Github,
  MessageSquare
} from 'lucide-react';

const TABS = [
  { id: 'home', label: 'Home', icon: Globe },
  { id: 'videos', label: 'Videos', icon: Play },
  { id: 'playlists', label: 'Playlists', icon: ListVideo },
  { id: 'assets', label: 'Neural Assets', icon: Brain },
  { id: 'economy', label: 'Economy', icon: TrendingUp },
];

export default function CreatorProfile() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background text-white pb-20">
      {/* Header / Banner */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image 
          src="https://picsum.photos/seed/neural-banner/1920/600" 
          alt="Banner" 
          fill 
          className="object-cover opacity-50 blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        
        <Link 
          href="/"
          className="absolute top-8 left-8 p-3 rounded-2xl glass-panel border border-white/10 hover:bg-white/10 transition-all z-10"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-7xl mx-auto px-8 -mt-24 relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-8">
          <div className="w-48 h-48 rounded-[40px] gradient-bg p-[2px] shadow-2xl">
            <div className="w-full h-full rounded-[38px] bg-surface overflow-hidden relative">
              <Image 
                src="https://picsum.photos/seed/tech/400/400" 
                alt="Creator" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="flex-1 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tighter">Neural Frontier</h1>
              <div className="px-2 py-0.5 rounded-full bg-accent-purple/20 border border-accent-purple/30 text-[10px] font-black text-accent-purple uppercase tracking-widest">
                Verified AI Architect
              </div>
            </div>
            <p className="text-text-secondary text-lg font-medium mb-6 max-w-2xl">
              Exploring the convergence of biological intelligence and neural networks. 
              Building the future of interactive media through AI.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-purple" />
                <span className="text-sm font-bold">2.4M <span className="text-text-secondary font-medium">Subscribers</span></span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-sm font-bold">$VIBE 12.42 <span className="text-text-secondary font-medium">Value</span></span>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 rounded-2xl gradient-bg font-black text-sm uppercase tracking-widest ai-glow hover:scale-105 transition-all">
                  Subscribe
                </button>
                <button className="px-8 py-3 rounded-2xl bg-accent-purple/20 border border-accent-purple/30 text-accent-purple font-black text-sm uppercase tracking-widest hover:bg-accent-purple/30 transition-all">
                  Invest
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-12 flex items-center gap-2 p-1.5 glass-panel border border-white/10 rounded-3xl w-fit">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-accent-purple text-white shadow-lg ai-glow' 
                : 'text-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Featured Content */}
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-accent-purple" />
                        Featured Neural Stream
                      </h2>
                    </div>
                    <div className="aspect-video rounded-[32px] overflow-hidden relative group border border-white/10 shadow-2xl">
                      <Image 
                        src="https://picsum.photos/seed/featured/1200/675" 
                        alt="Featured" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl font-bold mb-2">The Architecture of Dreams: AI in 2026</h3>
                        <p className="text-text-secondary text-sm line-clamp-2 mb-4">A deep dive into how neural networks are reshaping our perception of reality and creativity.</p>
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg font-bold text-sm">
                          <Play className="w-4 h-4 fill-white" /> Watch Now
                        </button>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-black uppercase tracking-widest mb-6">Recent Neural Clips</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all group cursor-pointer">
                          <div className="w-32 aspect-video rounded-xl overflow-hidden relative flex-shrink-0">
                            <Image src={`https://picsum.photos/seed/clip-${i}/300/200`} alt="Clip" fill className="object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm line-clamp-2 group-hover:text-accent-purple transition-colors">Neural Sync Moment #{i}</h4>
                            <p className="text-[10px] text-text-secondary mt-1 uppercase tracking-widest">2.4M Views • AI Curated</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                  <div className="p-6 rounded-[32px] glass-panel border border-white/10">
                    <h3 className="text-sm font-black uppercase tracking-widest text-accent-purple mb-4">Neural Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-text-secondary">Total Neural Syncs</span>
                        <span className="text-sm font-bold">142.8M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-text-secondary">AI Model Efficiency</span>
                        <span className="text-sm font-bold text-success">98.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-text-secondary">Community Sentiment</span>
                        <span className="text-sm font-bold text-accent-blue">Positive (88%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-[32px] glass-panel border border-white/10">
                    <h3 className="text-sm font-black uppercase tracking-widest text-accent-purple mb-4">Connect</h3>
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple/20 hover:border-accent-purple/30 transition-all">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple/20 hover:border-accent-purple/30 transition-all">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple/20 hover:border-accent-purple/30 transition-all">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div 
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-video rounded-2xl overflow-hidden relative border border-white/5 group-hover:border-accent-purple/50 transition-all">
                      <Image src={`https://picsum.photos/seed/vid-${i}/600/400`} alt="Video" fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold">12:42</div>
                    </div>
                    <h3 className="mt-3 font-bold text-sm line-clamp-2 group-hover:text-accent-purple transition-colors">Neural Network Evolution: Part {i}</h3>
                    <p className="text-[10px] text-text-secondary mt-1 uppercase tracking-widest">1.2M views • 2 days ago</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'playlists' && (
              <motion.div 
                key="playlists"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {[
                  { title: 'Neural Architecture 101', count: 12, thumbnail: 'https://picsum.photos/seed/p1/600/400' },
                  { title: 'Quantum Computing Series', count: 8, thumbnail: 'https://picsum.photos/seed/p2/600/400' },
                  { title: 'AI Ethics & Future', count: 15, thumbnail: 'https://picsum.photos/seed/p3/600/400' },
                  { title: 'Generative Art Masterclass', count: 24, thumbnail: 'https://picsum.photos/seed/p4/600/400' },
                ].map((playlist, i) => (
                  <Link 
                    key={i} 
                    href={`/?view=watch&playlist=true`}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden relative border border-white/5 group-hover:border-accent-purple/50 transition-all">
                      <Image src={playlist.thumbnail} alt={playlist.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute inset-y-0 right-0 w-1/3 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center border-l border-white/10">
                        <ListVideo className="w-6 h-6 text-white mb-1" />
                        <span className="text-sm font-bold text-white">{playlist.count}</span>
                        <span className="text-[10px] text-white/60 uppercase tracking-widest">Videos</span>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                          <Play className="w-4 h-4 fill-white" /> Play All
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 font-bold text-sm line-clamp-2 group-hover:text-accent-purple transition-colors">{playlist.title}</h3>
                    <p className="text-[10px] text-text-secondary mt-1 uppercase tracking-widest">View Full Playlist</p>
                  </Link>
                ))}
              </motion.div>
            )}

            {activeTab === 'assets' && (
              <motion.div 
                key="assets"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  { name: 'DreamWeaver V4', type: 'Image Model', efficiency: '99.2%' },
                  { name: 'NeuralSync Agent', type: 'Assistant', efficiency: '94.5%' },
                  { name: 'VibeFlow Engine', type: 'Audio Synthesis', efficiency: '97.8%' },
                ].map((asset, i) => (
                  <div key={i} className="p-6 rounded-[32px] glass-panel border border-white/10 hover:border-accent-purple/50 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6 text-accent-purple" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{asset.name}</h3>
                    <p className="text-xs text-text-secondary mb-4 uppercase tracking-widest">{asset.type}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[10px] font-bold text-text-secondary uppercase">Efficiency</span>
                      <span className="text-sm font-bold text-success">{asset.efficiency}</span>
                    </div>
                    <button className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all">
                      Deploy Asset
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'economy' && (
              <motion.div 
                key="economy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-8 rounded-[32px] gradient-bg ai-glow">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-2">Token Price</p>
                    <h3 className="text-4xl font-black">$VIBE 12.42</h3>
                    <p className="text-sm font-bold text-white/90 mt-2 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> +14.2% <span className="font-medium opacity-70">this week</span>
                    </p>
                  </div>
                  <div className="p-8 rounded-[32px] glass-panel border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-2">Market Cap</p>
                    <h3 className="text-4xl font-black">$29.8M</h3>
                    <p className="text-sm font-bold text-text-secondary mt-2">Circulating: 2.4M VIBE</p>
                  </div>
                  <div className="p-8 rounded-[32px] glass-panel border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-2">Total Holders</p>
                    <h3 className="text-4xl font-black">42,102</h3>
                    <p className="text-sm font-bold text-text-secondary mt-2">Active Stakers: 12.4K</p>
                  </div>
                </div>

                <div className="p-8 rounded-[32px] glass-panel border border-white/10">
                  <h3 className="text-xl font-black uppercase tracking-widest mb-6">Holder Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Exclusive Neural Assets access',
                      'Priority AI processing queue',
                      'Governance voting on future streams',
                      'Revenue share from AI Clips',
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-success" />
                        </div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
