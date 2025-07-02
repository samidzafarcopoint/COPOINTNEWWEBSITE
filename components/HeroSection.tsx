'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  const [animationData, setAnimationData] = useState(null);
  const [animationError, setAnimationError] = useState(false);

  useEffect(() => {
    fetch('/lotties/hero_animation1.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load');
        return res.json();
      })
      .then(setAnimationData)
      .catch(() => setAnimationError(true));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white pt-32">
      {/* Subtle background pattern */}
      {/* Optional: Remove or keep background pattern for extra cleanliness */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#4B9EDC] text-sm font-medium border border-blue-100">
              ✨ Next-Generation AI Platform
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#13294b] mb-8 leading-tight tracking-tight max-w-4xl mx-auto md:mx-0"
            style={{ wordBreak: 'keep-all', whiteSpace: 'pre-line' }}
          >
            Unlock<br />
            <span className="whitespace-nowrap">Business Value with</span><br />
            <span className="text-[#7bafd4]">
              <Typewriter
                words={['Data + AI']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4f758b] mb-12 leading-relaxed max-w-2xl font-light">
            At CoPoint, we help organizations turn data into decisions and AI into action—delivering measurable outcomes that matter
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-16">
            <button className="group bg-[#7bafd4] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#4f758b] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center text-[#13294b] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-3 group-hover:shadow-xl transition-shadow">
                <Mail className="w-5 h-5 text-[#7bafd4] ml-1" />
              </div>
              Contact Us
            </button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto md:mx-0">
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
        {/* Right: Lottie Animation */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto min-h-[320px]">
          {animationData && !animationError && (
            <Lottie animationData={animationData} loop={true} className="w-full max-w-md h-auto" />
          )}
          {animationError && (
            <div className="text-gray-400 text-center">Animation failed to load.</div>
          )}
          {!animationData && !animationError && (
            <div className="text-gray-300 text-center">Loading animation...</div>
          )}
        </div>
      </div>
    </section>
  );
}