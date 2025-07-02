'use client';

import { useEffect, useRef } from 'react';

const logos = [
  'OpenTable', 'Vimeo', 'Amazon', 'NVIDIA', 'Microsoft', 'Google', 'Tesla', 'Meta'
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.3;
      if (scrollPos >= scrollWidth) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-12">
          Trusted by Industry Leaders
        </h3>
        
        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="inline-flex space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center min-w-[180px] h-12 text-gray-400 text-lg font-semibold hover:text-gray-600 transition-colors duration-300"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}