import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroLanding() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-xenteck-dark">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient opacity-40"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="speed-line speed-line-1"></div>
        <div className="speed-line speed-line-2"></div>
        <div className="speed-line speed-line-3"></div>
        <div className="speed-line speed-line-4"></div>
        <div className="speed-line speed-line-5"></div>
      </div>
      
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-xenteck-blue/20 blur-[120px] animate-pulse-slow"></div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">AI That Never Sleeps</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="text-white">EVERY LEAD.</span>
          <br />
          <span className="gradient-text">EVERY TIME.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto font-light">
          5-second response. 24/7 coverage. Zero missed opportunities.
        </p>
        
        {/* Speed stat callout */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-xenteck-blue">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold">391% higher conversion when you respond first</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/services" className="group relative inline-flex items-center gap-3 bg-xenteck-blue hover:bg-blue-500 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)]">
          <span>START HERE</span>
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="stat-card">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">&lt;5s</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Response</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">24/7</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Coverage</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">391%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Conversion Lift</div>
          </div>
          <div className="stat-card">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">78%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">First Wins</div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
