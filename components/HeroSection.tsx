'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4B9EDC 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#4B9EDC] text-sm font-medium border border-blue-100">
            ✨ Next-Generation AI Platform
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
          Transform Your Business with{' '}
          <span className="text-[#4B9EDC]">Intelligent AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
          Enterprise-grade artificial intelligence solutions that deliver lightning-fast compute, 
          unrivaled throughput, and seamless integration for modern businesses.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-[#4B9EDC] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#3a8bc4] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group flex items-center text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-3 group-hover:shadow-xl transition-shadow">
              <Play className="w-5 h-5 text-[#4B9EDC] ml-1" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10x</div>
            <div className="text-gray-600 text-sm">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}