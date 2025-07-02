'use client';

import { useEffect, useRef } from 'react';

const logos = [
  {
    name: 'CVS',
    src: '/logos/csv.png',
  },
  {
    name: 'Kaiser Permanente',
    src: '/logos/kaiser.png',
  },
  {
    name: 'Wells Fargo',
    src: '/logos/wellsfargo.png',
  },
  {
    name: 'Goldman Sachs',
    src: '/logos/goldman.png',
  },
  {
    name: 'Franklin Templeton',
    src: '/logos/franklin.png',
  },
  {
    name: 'Discover',
    src: '/logos/discover.jpg',
  },
  {
    name: 'Bon Secours Mercy Health',
    src: '/logos/bonsecours.svg',
  },
  {
    name: 'Singtel',
    src: '/logos/singtel.svg',
  },
  {
    name: 'Mastercard',
    src: '/logos/mastercard.png',
  },
  {
    name: 'AT&T',
    src: '/logos/att.svg',
  },
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5; // slightly faster for a premium feel
      if (scrollPos >= scrollWidth) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-[#13294b] text-lg font-semibold uppercase tracking-wider mb-12">
          Trusted by Industry Leaders
        </h3>
        <div
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="inline-flex space-x-12 md:space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center bg-white rounded-xl shadow-sm p-6 h-28 w-[180px] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group mx-2"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 max-w-[120px] group-hover:scale-105 transition-all duration-300"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}