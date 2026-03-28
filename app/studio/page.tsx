'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, Sidebar } from '@/components/Navigation';
import { CreatorDashboard } from '@/components/CreatorDashboard';
import { UploadFlow } from '@/components/UploadFlow';
import { AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function CreatorStudioPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen bg-background">
      <Navbar onUploadClick={() => setShowUpload(true)} />
      <Sidebar activeView="dashboard" setView={() => {}} />

      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="max-w-[1600px] mx-auto">
          <CreatorDashboard />
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showUpload && <UploadFlow onClose={() => setShowUpload(false)} />}
      </AnimatePresence>
    </div>
  );
}
