'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  DollarSign, 
  BarChart3, 
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  LayoutDashboard,
  Video,
  Settings,
  ShieldCheck,
  Brain,
  Scissors,
  MessageSquare,
  Wallet,
  ChevronRight,
  MoreVertical,
  Search,
  Filter,
  Plus,
  Copyright,
  Handshake,
  Globe,
  Languages,
  Heart,
  ShieldAlert,
  FileCheck,
  Award,
  BarChart,
  Target
} from 'lucide-react';
import Image from 'next/image';

const MOCK_CHART_DATA = Array.from({ length: 24 }).map((_, i) => ({
  height: [65, 45, 78, 32, 89, 54, 76, 43, 98, 67, 45, 87, 34, 56, 78, 90, 45, 67, 89, 23, 56, 78, 90, 45][i] || 50,
  value: [88, 42, 95, 30, 92, 50, 70, 40, 99, 60, 40, 85, 30, 50, 75, 88, 40, 60, 85, 20, 50, 75, 88, 40][i] || 50
}));

export const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'analytics' | 'ai-tools' | 'knowledge' | 'community' | 'monetization' | 'copyright'>('overview');
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const stats = [
    { label: 'Total Views', value: '2.4M', change: '+12.5%', positive: true, icon: Eye },
    { label: 'Active Learners', value: '42.8K', change: '+8.2%', positive: true, icon: Users },
    { label: 'AI Engagement', value: '88%', change: '+4.1%', positive: true, icon: Zap },
    { label: 'Revenue ($VIBE)', value: '12.4K', change: '-2.1%', positive: false, icon: DollarSign },
  ];

  const tabs = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'content', icon: Video, label: 'Content' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'ai-tools', icon: Brain, label: 'AI Studio' },
    { id: 'knowledge', icon: Globe, label: 'Knowledge' },
    { id: 'community', icon: MessageSquare, label: 'Community' },
    { id: 'monetization', icon: Wallet, label: 'Monetization' },
    { id: 'copyright', icon: Copyright, label: 'Copyright' },
  ];

  const renderDetailModal = () => {
    if (!selectedDetail) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDetail(null)}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6">
            <button 
              onClick={() => setSelectedDetail(null)}
              className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all"
            >
              <Plus className="w-6 h-6 rotate-45" />
            </button>
          </div>

          {selectedDetail === 'Thumbnail A/B Predictor' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">Thumbnail A/B Intelligence</h3>
              </div>
              <p className="text-text-secondary">AI analysis of your visual assets based on 1.2M top-performing thumbnails in your niche.</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Variation A', score: '62%', status: 'Low Contrast' },
                  { label: 'Variation B', score: '85%', status: 'Optimal', active: true },
                  { label: 'Variation C', score: '45%', status: 'Too Busy' },
                ].map((v) => (
                  <div key={v.label} className={`p-4 rounded-2xl border transition-all ${v.active ? 'bg-accent-purple/10 border-accent-purple' : 'bg-white/5 border-white/5'}`}>
                    <div className="aspect-video rounded-lg bg-white/5 mb-3 relative overflow-hidden">
                      <Image src={`https://picsum.photos/seed/${v.label}/200/120`} alt={v.label} fill className="object-cover opacity-50" referrerPolicy="no-referrer" />
                      {v.active && <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-accent-purple text-[8px] font-bold text-white">WINNER</div>}
                    </div>
                    <p className="text-xs font-bold text-white mb-1">{v.label}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black text-white">{v.score}</span>
                      <span className={`text-[8px] font-bold uppercase ${v.active ? 'text-accent-purple' : 'text-text-secondary'}`}>{v.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl bg-accent-purple/5 border border-accent-purple/10">
                <p className="text-xs font-bold text-accent-purple mb-1">AI Recommendation:</p>
                <p className="text-sm text-text-secondary italic">&quot;Variation B uses high-contrast typography and clear facial expressions which historically leads to 24% higher retention in the Neural Tech category.&quot;</p>
              </div>
            </div>
          )}

          {selectedDetail === 'Auto-Subtitle & Translation' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Languages className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">Global Reach Engine</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">ES</div>
                    <div>
                      <p className="text-sm font-bold text-white">Spanish (Neutral)</p>
                      <p className="text-xs text-text-secondary">Lip-sync: 98% Accuracy</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-success">Active</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">JP</div>
                    <div>
                      <p className="text-sm font-bold text-white">Japanese</p>
                      <p className="text-xs text-text-secondary">Lip-sync: 94% Accuracy</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-success">Active</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between opacity-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-text-secondary">RU</div>
                    <div>
                      <p className="text-sm font-bold text-white">Russian</p>
                      <p className="text-xs text-text-secondary">Processing...</p>
                    </div>
                  </div>
                  <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-purple w-1/2 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <button className="w-full py-4 rounded-2xl gradient-bg text-sm font-bold text-white ai-glow">
                Add New Language
              </button>
            </div>
          )}

          {selectedDetail === 'AI Persona Trainer' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">AI Persona Training</h3>
              </div>
              <p className="text-text-secondary">Fine-tune your AI Twin&apos;s personality, voice, and knowledge base to interact with your audience autonomously.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Voice Synthesis</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-8 bg-accent-purple/10 rounded-lg flex items-center px-3 gap-1">
                      {[0.2, 0.5, 0.8, 0.4, 0.6, 0.9, 0.3].map((h, i) => (
                        <div key={i} className="flex-1 bg-accent-purple rounded-full" style={{ height: `${h * 100}%` }}></div>
                      ))}
                    </div>
                    <button className="p-2 rounded-lg bg-accent-purple text-white"><Zap className="w-4 h-4" /></button>
                  </div>
                  <p className="text-[10px] text-text-secondary">92% Match with your natural timber.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Writing Style</p>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent-purple w-[85%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-text-secondary">
                      <span>Casual/Friendly</span>
                      <span>85% Sync</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold text-white uppercase tracking-widest">Knowledge Sources</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Video Transcripts', 'Personal Blog', 'Research Papers', 'Community Q&A'].map(source => (
                    <div key={source} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-xs text-white">{source}</span>
                      <ShieldCheck className="w-3 h-3 text-success" />
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 rounded-2xl gradient-bg text-sm font-bold text-white ai-glow">
                Start Training Session
              </button>
            </div>
          )}

          {selectedDetail === 'Sponsorship Marketplace' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Handshake className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">Brand Brief: NeuralLink</h3>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-white">Q2 Awareness Campaign</h4>
                    <p className="text-xs text-text-secondary">Match Score: 98% (Highly Relevant)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-success">$VIBE 2,500</p>
                    <p className="text-[10px] text-text-secondary uppercase">Fixed Payout</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Requirements:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-purple"></div> 60s Integrated segment</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-purple"></div> AI Pilot context injection</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-purple"></div> Link in description</li>
                  </ul>
                </div>
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 py-3 rounded-xl gradient-bg text-xs font-bold text-white">Accept Offer</button>
                  <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">Negotiate</button>
                </div>
              </div>
            </div>
          )}

          {selectedDetail === 'Audience Gap Analysis' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <BarChart className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">Audience Gap Intelligence</h3>
              </div>
              <p className="text-text-secondary">AI identified 4 high-demand topics your audience is searching for that aren&apos;t covered in your current library.</p>
              <div className="space-y-4">
                {[
                  { topic: 'Neural Link API Security', demand: 'High', potential: '250K+ Views' },
                  { topic: 'Quantum Cryptography for Beginners', demand: 'Medium', potential: '120K+ Views' },
                  { topic: 'AI Ethics in Smart Cities', demand: 'High', potential: '180K+ Views' },
                ].map((gap, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">{gap.topic}</p>
                      <p className="text-[10px] text-text-secondary uppercase tracking-widest">Potential: {gap.potential}</p>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-accent-purple/10 text-accent-purple text-[10px] font-bold">{gap.demand} Demand</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
                Generate Script Outlines
              </button>
            </div>
          )}

          {selectedDetail === 'Knowledge Graph Explorer' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">Knowledge Ecosystem</h3>
              </div>
              <p className="text-text-secondary">Your content has been indexed into 1,242 unique intelligence nodes across the global NexVibe network.</p>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">Top Knowledge Nodes</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Neural Architecture', weight: '85%' },
                      { name: 'Quantum Logic', weight: '72%' },
                      { name: 'Ethical AI Frameworks', weight: '94%' },
                    ].map((node, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-text-secondary">{node.name}</span>
                          <span className="text-accent-purple font-bold">{node.weight} Authority</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-accent-purple" style={{ width: node.weight }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <p className="text-2xl font-black text-white">4.2K</p>
                  <p className="text-[10px] text-text-secondary uppercase">Cross-References</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <p className="text-2xl font-black text-white">12</p>
                  <p className="text-[10px] text-text-secondary uppercase">Patent Citations</p>
                </div>
              </div>
            </div>
          )}

          {selectedDetail === 'AI Plagiarism Check' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <ShieldAlert className="w-8 h-8 text-accent-purple" />
                <h3 className="text-2xl font-bold text-white">Plagiarism Deep Scan</h3>
              </div>
              <div className="p-6 rounded-3xl bg-success/5 border border-success/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">100% Original Content</p>
                  <p className="text-xs text-text-secondary">No matches found across 4.2B indexed videos and papers.</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold text-white uppercase tracking-widest">Scan Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Visual Fingerprinting</span>
                    <span className="text-success">Passed</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Audio/Script Matching</span>
                    <span className="text-success">Passed</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">AI Generation Signature</span>
                    <span className="text-success">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fallback for other details */}
          {!['Thumbnail A/B Predictor', 'Auto-Subtitle & Translation', 'Sponsorship Marketplace', 'AI Persona Trainer', 'Audience Gap Analysis', 'AI Plagiarism Check', 'Knowledge Graph Explorer'].includes(selectedDetail) && (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-accent-purple animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white">Detailing {selectedDetail}...</h3>
              <p className="text-text-secondary max-w-xs mx-auto">AI is generating the deep-dive report for this module. Please wait a moment.</p>
            </div>
          )}
        </motion.div>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 space-y-8">
      <AnimatePresence>
        {renderDetailModal()}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-accent-purple ai-glow" />
            Creator Studio
          </h1>
          <p className="text-text-secondary mt-1">Manage your intelligence ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
            View Channel
          </button>
          <button className="px-6 py-2.5 rounded-xl gradient-bg text-sm font-bold text-white ai-glow hover:opacity-90 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 bg-surface rounded-2xl border border-white/5 w-fit overflow-x-auto max-w-full custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-accent-purple/10 text-accent-purple' 
                : 'text-text-secondary hover:bg-white/5 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-3xl glass-panel border border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-white/5">
                      <stat.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${stat.positive ? 'text-success' : 'text-warning'}`}>
                      {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Engagement Heatmap */}
              <div className="lg:col-span-2 p-6 rounded-3xl glass-panel border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-accent-purple" />
                    Retention Intelligence
                  </h3>
                  <select className="bg-surface border border-white/10 rounded-lg text-xs font-bold px-3 py-1.5 text-text-secondary outline-none">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                  </select>
                </div>
                <div className="aspect-[2/1] relative bg-white/5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-end gap-1 p-4">
                    {MOCK_CHART_DATA.map((data, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-accent-purple/20 rounded-t-sm hover:bg-accent-purple transition-all group relative"
                        style={{ height: `${data.height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                          {data.value}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent-purple"></div>
                    <span className="text-xs text-text-secondary">High Replay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent-purple/20"></div>
                    <span className="text-xs text-text-secondary">Standard View</span>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="p-6 rounded-3xl glass-panel border border-white/5 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-purple" />
                  AI Insights
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Audience Peak', desc: 'Users are replaying the segment at 05:42. Consider creating a short clip from this.', type: 'action' },
                    { title: 'Content Gap', desc: 'Your audience is asking about &quot;Quantum Ethics&quot;. This could be your next video topic.', type: 'insight' },
                    { title: 'Revenue Boost', desc: 'Adding interactive commerce markers at 08:15 could increase yield by 12%.', type: 'revenue' }
                  ].map((insight, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-purple/30 transition-all cursor-pointer group">
                      <h4 className="text-xs font-bold text-accent-purple uppercase tracking-widest mb-1">{insight.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed group-hover:text-white transition-colors">
                        {insight.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
                  View Full Report
                </button>
              </div>

              {/* Real-time AI Activity Feed */}
              <div className="lg:col-span-3 p-6 rounded-3xl glass-panel border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent-purple animate-pulse" />
                    Live Intelligence Feed
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-ping"></span>
                    <span className="text-[10px] font-bold text-success uppercase tracking-widest">Live Analysis</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { time: '2m ago', event: 'AI indexed &quot;Neural Interfaces&quot;', detail: '12 new knowledge nodes added' },
                    { time: '5m ago', event: 'Sentiment Shift detected', detail: 'Positive spike in &quot;Quantum Computing&quot;' },
                    { time: '12m ago', event: 'Auto-Clip generated', detail: 'Segment 04:20 reached viral threshold' },
                    { time: '18m ago', event: 'Staking Reward distributed', detail: '12.4 $VIBE added to your wallet' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-purple/20 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-accent-purple">{item.time}</span>
                      </div>
                      <p className="text-sm font-bold text-white mb-1">{item.event}</p>
                      <p className="text-xs text-text-secondary">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'content' && (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4 bg-surface rounded-xl px-4 py-2 border border-white/5 w-full md:w-96">
                <Search className="w-4 h-4 text-text-secondary" />
                <input type="text" placeholder="Search your content..." className="bg-transparent border-none focus:ring-0 text-sm w-full" />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-bold text-text-secondary hover:text-white transition-all">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Video</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Visibility</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">AI Status</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Views</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Revenue</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { title: 'The Future of Neural Interfaces', date: 'Mar 24, 2026', views: '1.2M', revenue: '$VIBE 420', aiStatus: 'Complete', visibility: 'Public', thumb: 'https://picsum.photos/seed/neural/160/90' },
                      { title: 'Quantum Computing Explained', date: 'Mar 20, 2026', views: '850K', revenue: '$VIBE 280', aiStatus: 'Complete', visibility: 'Public', thumb: 'https://picsum.photos/seed/quantum/160/90' },
                      { title: 'Sustainable Cities AI', date: 'Mar 15, 2026', views: '420K', revenue: '$VIBE 150', aiStatus: 'Processing', visibility: 'Draft', thumb: 'https://picsum.photos/seed/city/160/90' },
                    ].map((video, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-24 aspect-video rounded-lg overflow-hidden relative flex-shrink-0">
                              <Image src={video.thumb} alt={video.title} fill className="object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white line-clamp-1">{video.title}</p>
                              <p className="text-[10px] text-text-secondary mt-1">{video.date}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${
                            video.visibility === 'Public' ? 'bg-success/10 text-success border-success/20' : 'bg-white/5 text-text-secondary border-white/10'
                          }`}>
                            {video.visibility}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${video.aiStatus === 'Complete' ? 'bg-success' : 'bg-accent-purple animate-pulse'}`}></div>
                            <span className="text-xs text-white">{video.aiStatus}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-white">{video.views}</td>
                        <td className="px-6 py-4 text-sm font-bold text-success">{video.revenue}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 rounded-lg hover:bg-white/10 text-text-secondary hover:text-white transition-all">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Global Content Ranking */}
            <div className="p-6 rounded-3xl glass-panel border border-white/5">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent-purple" />
                Global Intelligence Ranking
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { rank: '#1', category: 'Neural Tech', score: '98.5', change: '+2.1%' },
                  { rank: '#12', category: 'Quantum Physics', score: '92.1', change: '+5.4%' },
                  { rank: '#45', category: 'Sustainable AI', score: '88.4', change: '-1.2%' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-accent-purple/50">{item.rank}</span>
                      <div>
                        <p className="text-sm font-bold text-white">{item.category}</p>
                        <p className="text-[10px] text-text-secondary">AI Score: {item.score}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${item.change.startsWith('+') ? 'text-success' : 'text-warning'}`}>
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div 
            key="analytics"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Audience Demographics */}
              <div className="p-6 rounded-3xl glass-panel border border-white/5">
                <h3 className="text-lg font-bold text-white mb-6">Audience Intelligence</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Gen Z (18-24)', value: 45, color: 'bg-accent-purple' },
                    { label: 'Millennials (25-34)', value: 35, color: 'bg-accent-blue' },
                    { label: 'Gen X (35-44)', value: 15, color: 'bg-white/20' },
                    { label: 'Others', value: 5, color: 'bg-white/10' },
                  ].map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-text-secondary">{item.label}</span>
                        <span className="text-white">{item.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="p-6 rounded-3xl glass-panel border border-white/5">
                <h3 className="text-lg font-bold text-white mb-6">Traffic Intelligence</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'AI Search', value: '42%', icon: Search },
                    { label: 'Direct', value: '28%', icon: ChevronRight },
                    { label: 'Social', value: '18%', icon: Users },
                    { label: 'Others', value: '12%', icon: MoreVertical },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center space-y-2">
                      <item.icon className="w-6 h-6 text-accent-purple" />
                      <p className="text-xl font-black text-white">{item.value}</p>
                      <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'ai-tools' && (
          <motion.div 
            key="ai-tools"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* AI Content Optimizer Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-6 h-6 text-accent-purple" />
                AI Persona & Training
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Brain, title: 'AI Persona Trainer', desc: 'Fine-tune your AI Twin&apos;s voice and personality for autonomous interaction.', status: '92% Sync' },
                  { icon: Globe, title: 'Knowledge Graph Explorer', desc: 'Visualize your content as a map of intelligence nodes.', status: '1.2K Nodes' },
                  { icon: BarChart, title: 'Audience Gap Analysis', desc: 'AI identifies topics your audience is searching for but you haven&apos;t covered.', status: '4 New Topics' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedDetail(item.title)}
                    className="p-6 rounded-3xl glass-panel border border-white/5 hover:border-accent-purple/30 transition-all group cursor-pointer"
                  >
                    <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple w-fit mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-text-secondary mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">{item.status}</span>
                      <button className="text-xs font-bold text-white hover:text-accent-purple transition-colors flex items-center gap-1">
                        {item.title === 'Knowledge Graph Explorer' ? 'Explore' : 'Train'} <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Content Optimizer Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-accent-purple" />
                AI Content Optimizer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Eye, title: 'Thumbnail A/B Predictor', desc: 'AI predicts CTR for 3 thumbnail variations. Variation B has 85% success probability.', score: '85%' },
                  { icon: Search, title: 'Smart SEO & Tagging', desc: 'Optimizing for AI Search Engines. Generated 12 high-intent tags for your latest video.', status: 'Optimized' },
                  { icon: Sparkles, title: 'Title Generator', desc: '5 variations generated based on &quot;Curiosity&quot; and &quot;Educational&quot; emotional triggers.', count: '5 Titles' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedDetail(item.title)}
                    className="p-6 rounded-3xl glass-panel border border-white/5 hover:border-accent-purple/30 transition-all group cursor-pointer"
                  >
                    <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple w-fit mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-text-secondary mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">{item.score || item.status || item.count}</span>
                      <button className="text-xs font-bold text-white hover:text-accent-purple transition-colors flex items-center gap-1">
                        Configure <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced AI Editor Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-6 h-6 text-accent-purple" />
                AI Persona & Training
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Brain, title: 'AI Persona Trainer', desc: 'Fine-tune your AI Twin&apos;s voice and personality for autonomous interaction.', status: '92% Sync' },
                  { icon: Globe, title: 'Knowledge Graph Explorer', desc: 'Visualize your content as a map of intelligence nodes.', status: '1.2K Nodes' },
                  { icon: BarChart, title: 'Audience Gap Analysis', desc: 'AI identifies topics your audience is searching for but you haven&apos;t covered.', status: '4 New Topics' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedDetail(item.title)}
                    className="p-6 rounded-3xl glass-panel border border-white/5 hover:border-accent-purple/30 transition-all group cursor-pointer"
                  >
                    <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple w-fit mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-text-secondary mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">{item.status}</span>
                      <button className="text-xs font-bold text-white hover:text-accent-purple transition-colors flex items-center gap-1">
                        {item.title === 'Knowledge Graph Explorer' ? 'Explore' : 'Train'} <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced AI Editor Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Scissors className="w-6 h-6 text-accent-purple" />
                Advanced AI Editor
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[40px] glass-panel border border-white/5 flex flex-col justify-between">
                  <div onClick={() => setSelectedDetail('Auto-Subtitle & Translation')} className="cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <Languages className="w-8 h-8 text-accent-purple" />
                      <h4 className="text-xl font-bold text-white">Auto-Subtitle & Translation</h4>
                    </div>
                    <p className="text-text-secondary mb-6">Translate your video into 50+ languages with AI Lip-sync. Your latest video is now available in Spanish, Japanese, and German.</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['English', 'Spanish', 'Japanese', 'German', 'French'].map(lang => (
                        <span key={lang} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white">{lang}</span>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedDetail('Auto-Subtitle & Translation')}
                    className="w-full py-4 rounded-2xl gradient-bg text-sm font-bold text-white ai-glow"
                  >
                    Manage Translations
                  </button>
                </div>
                <div className="p-8 rounded-[40px] glass-panel border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Video className="w-8 h-8 text-accent-purple" />
                      <h4 className="text-xl font-bold text-white">B-Roll Suggester</h4>
                    </div>
                    <p className="text-text-secondary mb-6">AI detected 4 &quot;slow&quot; segments in your video. Suggested 12 relevant stock clips to maintain high audience retention.</p>
                    <div className="grid grid-cols-3 gap-2 mb-8">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="aspect-video rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
                          <Image src={`https://picsum.photos/seed/broll${i}/100/60`} alt="B-roll" fill className="object-cover opacity-50" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Plus className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 transition-all">
                    Review Suggestions
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'knowledge' && (
          <motion.div 
            key="knowledge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-[40px] glass-panel border border-white/5 relative overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 opacity-20">
                {/* Simulated Knowledge Graph Background */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-accent-purple blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-accent-blue blur-sm"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent-purple blur-sm"></div>
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="75%" y2="33%" stroke="white" strokeWidth="0.5" strokeDasharray="4" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Knowledge Graph Explorer</h3>
                    <p className="text-text-secondary">Mapping your content into the global intelligence ecosystem.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                      1,242 Total Nodes
                    </div>
                    <button className="px-4 py-2 rounded-xl gradient-bg text-xs font-bold text-white ai-glow">
                      Expand Graph
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Neural Interfaces', nodes: 420, mastery: '85%', trend: 'up' },
                    { title: 'Quantum Computing', nodes: 280, mastery: '62%', trend: 'up' },
                    { title: 'Sustainable AI', nodes: 542, mastery: '94%', trend: 'stable' },
                  ].map((topic, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-surface/50 backdrop-blur-md border border-white/10 hover:border-accent-purple/30 transition-all group cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">{topic.title}</h4>
                        <ArrowUpRight className={`w-4 h-4 ${topic.trend === 'up' ? 'text-success' : 'text-text-secondary'}`} />
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between text-xs">
                          <span className="text-text-secondary">Nodes</span>
                          <span className="text-white font-bold">{topic.nodes}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                            <span className="text-text-secondary">Audience Mastery</span>
                            <span className="text-accent-purple">{topic.mastery}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent-purple" style={{ width: topic.mastery }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'community' && (
          <motion.div 
            key="community"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* AI Moderation */}
              <div className="lg:col-span-2 p-6 rounded-3xl glass-panel border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-purple" />
                    AI Moderation & Smart Replies
                  </h3>
                  <span className="text-[10px] font-bold text-success uppercase tracking-widest bg-success/10 px-2 py-1 rounded border border-success/20">Active</span>
                </div>
                <div className="space-y-4">
                  {[
                    { user: 'Alex Rivers', comment: 'This neural interface explanation is mind-blowing! How does it handle latency?', sentiment: 'Positive', reply: 'AI suggests: "Latency is managed via edge-computing nodes. Check 08:15!"' },
                    { user: 'Sarah Chen', comment: 'Great visuals, but I missed the part about quantum decoherence.', sentiment: 'Neutral', reply: 'AI suggests: "I have a dedicated video on Decoherence coming next week!"' },
                    { user: 'Bot_992', comment: 'Click here for free crypto rewards!!!', sentiment: 'Spam', status: 'Auto-Blocked' },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-2xl border transition-all ${item.sentiment === 'Spam' ? 'bg-warning/5 border-warning/20 opacity-60' : 'bg-white/5 border-white/5 hover:border-accent-purple/30'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-white">{item.user}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${item.sentiment === 'Positive' ? 'text-success' : item.sentiment === 'Spam' ? 'text-warning' : 'text-text-secondary'}`}>
                          {item.sentiment}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mb-3">{item.comment}</p>
                      {item.reply && (
                        <div className="p-3 rounded-xl bg-accent-purple/5 border border-accent-purple/10 flex items-start gap-3">
                          <Brain className="w-4 h-4 text-accent-purple mt-0.5" />
                          <p className="text-xs italic text-accent-purple">{item.reply}</p>
                        </div>
                      )}
                      {item.status && (
                        <p className="text-xs font-bold text-warning flex items-center gap-1">
                          <ShieldAlert className="w-3 h-3" /> {item.status}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Fans */}
              <div className="p-6 rounded-3xl glass-panel border border-white/5">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent-purple" />
                  Top Fans Insights
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'David K.', level: 'Diamond', engagement: '98%', reward: 'Badge Sent' },
                    { name: 'Elena M.', level: 'Gold', engagement: '92%', reward: '10 $VIBE Sent' },
                    { name: 'Marcus T.', level: 'Gold', engagement: '89%', reward: 'Badge Sent' },
                  ].map((fan, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center font-bold text-accent-purple">
                          {fan.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{fan.name}</p>
                          <p className="text-[10px] text-text-secondary">{fan.level} Fan</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-success">{fan.engagement}</p>
                        <p className="text-[10px] text-accent-purple">{fan.reward}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-all">
                  Manage Rewards
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'monetization' && (
          <motion.div 
            key="monetization"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-8 rounded-[40px] gradient-bg ai-glow text-white space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Total Balance</p>
                    <h2 className="text-4xl font-black">$VIBE 12,420.50</h2>
                  </div>
                  <Wallet className="w-12 h-12 opacity-20" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Staking', val: '4.2K' },
                    { label: 'Ad Yield', val: '2.1K' },
                    { label: 'Tips', val: '850' },
                    { label: 'Sponsorships', val: '5.2K' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{item.label}</p>
                      <p className="text-lg font-bold mt-1">{item.val}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 rounded-2xl bg-white text-accent-purple font-bold hover:bg-white/90 transition-all">
                    Withdraw
                  </button>
                  <button className="flex-1 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 font-bold hover:bg-white/30 transition-all">
                    Stake More
                  </button>
                </div>
              </div>

              {/* Sponsorship Marketplace */}
              <div 
                onClick={() => setSelectedDetail('Sponsorship Marketplace')}
                className="p-6 rounded-[32px] glass-panel border border-white/5 space-y-6 cursor-pointer hover:border-accent-purple/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-accent-purple" />
                  Sponsorship Marketplace
                </h3>
                <div className="space-y-4">
                  {[
                    { brand: 'NeuralLink', match: '98%', offer: '$VIBE 2.5K' },
                    { brand: 'QuantumX', match: '92%', offer: '$VIBE 1.8K' },
                    { brand: 'EcoFuture', match: '85%', offer: '$VIBE 1.2K' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-purple/30 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">{item.brand}</span>
                        <span className="text-xs font-bold text-success">{item.match} Match</span>
                      </div>
                      <p className="text-[10px] text-text-secondary">Estimated Yield: {item.offer}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-text-secondary">Revenue Projection (6mo)</span>
                    <span className="text-xs font-bold text-white">$VIBE 45K</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-success w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'copyright' && (
          <motion.div 
            key="copyright"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Plagiarism Check */}
              <div className="p-8 rounded-[40px] glass-panel border border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-8 h-8 text-accent-purple" />
                    <h3 className="text-xl font-bold text-white">AI Plagiarism & IP Check</h3>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-accent-purple/10 text-accent-purple text-xs font-bold">Scan All Content</button>
                </div>
                <div className="space-y-6">
                  {[
                    { video: 'The Future of Neural Interfaces', status: 'Clean', match: '0%', detail: 'No matches found in global database.' },
                    { video: 'Quantum Computing Explained', status: 'Warning', match: '12%', detail: 'Similar segment found in &quot;Physics 101&quot; (Fair Use detected).' },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white">{item.video}</h4>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${item.status === 'Clean' ? 'text-success' : 'text-warning'}`}>
                          {item.status} ({item.match})
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NFT Ownership Dashboard */}
              <div className="p-8 rounded-[40px] glass-panel border border-white/5">
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-8 h-8 text-accent-purple" />
                  <h3 className="text-xl font-bold text-white">NFT Ownership Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-3xl bg-accent-purple/5 border border-accent-purple/10">
                    <p className="text-xs font-bold text-accent-purple uppercase tracking-widest mb-4">Ownership Distribution</p>
                    <div className="flex items-end gap-1 h-24 mb-4">
                      {[40, 20, 15, 10, 15].map((h, i) => (
                        <div key={i} className="flex-1 bg-accent-purple/20 rounded-t-lg" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-text-secondary">
                      <span>Creator (60%)</span>
                      <span>Investors (40%)</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <p className="text-2xl font-black text-white">12</p>
                      <p className="text-[10px] font-bold text-text-secondary uppercase">Active NFTs</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <p className="text-2xl font-black text-white">156</p>
                      <p className="text-[10px] font-bold text-text-secondary uppercase">Total Holders</p>
                    </div>
                  </div>
                  <button className="w-full py-4 rounded-2xl gradient-bg text-sm font-bold text-white ai-glow">
                    Mint New Content NFT
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
