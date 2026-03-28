'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  X, 
  Send, 
  Smile,
  Mic,
  MicOff,
  Video,
  VideoOff
} from 'lucide-react';

export const WatchParty = () => {
  const [message, setMessage] = useState('');

  const participants = [
    { name: 'Alex', color: 'bg-accent-purple', active: true },
    { name: 'Sarah', color: 'bg-accent-blue', active: true },
    { name: 'Mike', color: 'bg-warning', active: false },
    { name: 'Elena', color: 'bg-success', active: true },
  ];

  return (
    <div className="flex flex-col h-full glass-panel rounded-3xl overflow-hidden border border-white/10">
      <div className="p-4 border-b border-white/5 flex items-center justify-between bg-surface/50">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {participants.map((p, i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-background ${p.color} flex items-center justify-center text-[10px] font-bold text-white relative`}>
                {p.name[0]}
                {p.active && <span className="absolute bottom-0 right-0 w-2 h-2 bg-success rounded-full border border-background"></span>}
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-white">Watch Party (4)</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-all"><Mic className="w-4 h-4" /></button>
          <button className="p-2 rounded-lg hover:bg-white/5 text-text-secondary hover:text-white transition-all"><Video className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {[
          { user: 'Alex', text: 'This part is amazing! 🚀', time: '12:45' },
          { user: 'Sarah', text: 'Wait, did he just say neural sync?', time: '12:46' },
          { user: 'Elena', text: 'Look at the object marker on the left!', time: '12:47' },
        ].map((msg, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest">{msg.user}</span>
              <span className="text-[10px] text-text-secondary">{msg.time}</span>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 text-sm text-text-secondary border border-white/5">
              {msg.text}
            </div>
          </div>
        ))}
        
        {/* Floating Reactions */}
        <div className="absolute bottom-24 right-4 flex flex-col gap-2 pointer-events-none">
          {[
            { icon: '🔥', delay: 0 },
            { icon: '❤️', delay: 0.5 },
            { icon: '🚀', delay: 1 },
          ].map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: [0, 1, 0], y: -100, x: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: emoji.delay }}
              className="text-2xl"
            >
              {emoji.icon}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-white/5 bg-surface/50">
        <div className="flex items-center gap-2 mb-3">
          {['❤️', '🔥', '👏', '😮', '🚀'].map((emoji) => (
            <button key={emoji} className="text-lg hover:scale-125 transition-transform">{emoji}</button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Say something..."
            className="w-full bg-background border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-accent-purple/50 outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl text-accent-purple hover:bg-accent-purple/10 transition-all">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
