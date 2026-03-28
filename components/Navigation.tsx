'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  Sparkles, 
  LayoutDashboard, 
  History, 
  Bookmark, 
  Settings,
  Plus,
  Compass,
  Home as HomeIcon,
  PlayCircle,
  TrendingUp,
  BrainCircuit,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = ({ 
  onUploadClick, 
  onToggleSidebar 
}: { 
  onUploadClick?: () => void,
  onToggleSidebar?: () => void
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] glass-panel h-16 px-4 md:px-6 flex items-center justify-between border-b border-white/5">
      <div className="flex items-center gap-4 md:gap-8">
        <button 
          onClick={onToggleSidebar}
          className="p-2 rounded-xl hover:bg-white/5 text-text-secondary hover:text-white transition-all hidden lg:block"
        >
          <Menu className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center ai-glow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter group-hover:gradient-text transition-all hidden sm:block">NexVibe</span>
        </Link>
      </div>
      
      <div className="flex-1 max-w-2xl px-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-accent-purple/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center bg-surface/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 focus-within:border-accent-purple/50 focus-within:bg-surface transition-all">
            <Search className="w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search intelligence feed..." 
              className="bg-transparent border-none focus:ring-0 text-sm ml-3 w-full placeholder:text-text-secondary text-white"
            />
            <div className="flex items-center gap-2">
              <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-white/10 px-1.5 font-mono text-[10px] font-medium text-text-secondary opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={onUploadClick}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all text-sm font-bold border border-white/5 text-white"
        >
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </button>
        <button className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent-purple rounded-full border-2 border-background"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue p-[1px] cursor-pointer hover:scale-105 transition-transform">
          <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-text-secondary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Sidebar = ({ 
  activeView, 
  setView,
  isCollapsed 
}: { 
  activeView: string, 
  setView: (v: any) => void,
  isCollapsed?: boolean
}) => {
  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home', href: '/' },
    { id: 'trending', icon: TrendingUp, label: 'Trending' },
    { id: 'subs', icon: PlayCircle, label: 'Subscriptions' },
    { id: 'learning', icon: BrainCircuit, label: 'AI Learning' },
  ];

  const libraryItems = [
    { id: 'history', icon: History, label: 'History' },
    { id: 'clips', icon: Bookmark, label: 'Saved Clips' },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Creator Studio', href: '/studio' },
    { id: 'investments', icon: TrendingUp, label: 'Investments' },
  ];

  const renderItem = (item: any) => {
    const content = (
      <>
        <item.icon className={`w-5 h-5 flex-shrink-0 ${activeView === item.id ? 'text-accent-purple' : ''}`} />
        {!isCollapsed && <span className="text-sm truncate">{item.label}</span>}
      </>
    );
    
    const className = `w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-xl transition-all ${
      activeView === item.id 
        ? 'bg-white/10 text-white font-bold' 
        : 'text-text-secondary hover:bg-white/5 hover:text-white'
    }`;

    if (item.href) {
      return (
        <Link key={item.id} href={item.href} title={isCollapsed ? item.label : ''} className={className}>
          {content}
        </Link>
      );
    }

    return (
      <button 
        key={item.id}
        onClick={() => setView(item.id)}
        title={isCollapsed ? item.label : ''}
        className={className}
      >
        {content}
      </button>
    );
  };

  return (
    <aside className={`fixed left-0 top-16 bottom-0 ${isCollapsed ? 'w-20' : 'w-64'} hidden lg:flex flex-col p-3 border-r border-white/5 bg-background overflow-y-auto no-scrollbar transition-all duration-300`}>
      <div className="space-y-1">
        {menuItems.map(renderItem)}
      </div>

      <div className="mt-6 pt-6 border-t border-white/5">
        {!isCollapsed && <h3 className="px-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">Library</h3>}
        <div className="space-y-1">
          {libraryItems.map(renderItem)}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5">
        {!isCollapsed && <h3 className="px-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-3">Subscriptions</h3>}
        <div className={`space-y-2 ${isCollapsed ? 'px-0' : 'px-2'}`}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} title={isCollapsed ? `Neural Frontier ${i}` : ''} className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-2'} py-1.5 rounded-xl hover:bg-white/5 cursor-pointer group`}>
              <div className="w-8 h-8 rounded-full bg-surface border border-white/10 overflow-hidden flex-shrink-0">
                <Image 
                  src={`https://picsum.photos/seed/creator${i}/100/100`} 
                  alt="Creator" 
                  width={32} 
                  height={32}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {!isCollapsed && (
                <>
                  <span className="text-sm text-text-secondary group-hover:text-white transition-colors truncate">Neural Frontier {i}</span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-purple"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-white/5">
        <button 
          title={isCollapsed ? 'Sign Out' : ''}
          className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-4'} py-2.5 rounded-xl text-text-secondary hover:bg-destructive/10 hover:text-destructive transition-all`}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">Sign Out</span>}
        </button>
      </div>
    </aside>
  );
};
