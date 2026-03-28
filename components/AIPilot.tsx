'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Sparkles, 
  Brain, 
  MessageSquare, 
  List, 
  FileText,
  ChevronRight,
  Zap,
  Bot,
  Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });

export const AIPilotPanel = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'summary' | 'key-points' | 'transcript'>('chat');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Hello! I've analyzed this video. You can ask me to summarize, explain complex concepts, or find specific moments." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `Context: This is a video about Neural Interfaces and AI. Video Title: "The Future of Neural Interfaces: Bridging Human Intelligence". \n\nUser Question: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are NexVibe AI, a video intelligence assistant. Your goal is to help users understand video content deeply. Be concise, futuristic, and helpful.",
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that request.";
      setChatHistory(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Error connecting to AI intelligence. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'chat', icon: MessageSquare, label: 'Ask AI' },
    { id: 'summary', icon: FileText, label: 'Summary' },
    { id: 'key-points', icon: Zap, label: 'Key Points' },
    { id: 'transcript', icon: List, label: 'Transcript' },
  ];

  return (
    <div className="flex flex-col h-full glass-panel rounded-3xl overflow-hidden border border-white/10">
      {/* Tabs */}
      <div className="flex items-center p-2 gap-1 border-b border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${
              activeTab === tab.id 
                ? 'bg-accent-purple/10 text-accent-purple' 
                : 'text-text-secondary hover:bg-white/5 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {activeTab === 'chat' && (
          <div className="space-y-4">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`flex gap-3 ${chat.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${chat.role === 'model' ? 'gradient-bg ai-glow' : 'bg-white/10'}`}>
                  {chat.role === 'model' ? <Bot className="w-5 h-5 text-white" /> : <MessageSquare className="w-4 h-4 text-white" />}
                </div>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed border ${
                  chat.role === 'model' 
                    ? 'bg-white/5 rounded-tl-none border-white/5' 
                    : 'bg-accent-purple/10 rounded-tr-none border-accent-purple/20 text-white'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 ai-glow">
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm border border-white/5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'summary' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="p-4 rounded-2xl bg-accent-purple/5 border border-accent-purple/10">
              <h4 className="text-sm font-bold text-accent-purple mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Executive Summary
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                This video explores the intersection of AI and creative workflows. It covers how generative models are reshaping the way we think about content production, focusing on three main pillars: efficiency, creativity, and accessibility.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Main Topics</h4>
              {[
                'The Evolution of Generative AI',
                'Human-AI Collaboration Models',
                'The Future of Digital Ownership'
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="w-6 h-6 rounded bg-surface flex items-center justify-center text-[10px] font-bold text-accent-purple">0{i+1}</div>
                  <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{topic}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'key-points' && (
          <div className="space-y-3">
            {[
              { time: '02:14', text: 'Introduction to Neural Networks' },
              { time: '05:45', text: 'The Transformer Architecture Explained' },
              { time: '08:12', text: 'Real-world Applications in Design' },
              { time: '12:30', text: 'Ethical Considerations & Bias' }
            ].map((point, i) => (
              <button key={i} className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left group">
                <span className="text-xs font-mono text-accent-purple bg-accent-purple/10 px-1.5 py-0.5 rounded">{point.time}</span>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{point.text}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5 bg-surface/50">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask anything about this video..."
            className="w-full bg-background border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-accent-purple/50 focus:border-transparent transition-all outline-none"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl gradient-bg text-white hover:opacity-90 transition-all ai-glow disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
