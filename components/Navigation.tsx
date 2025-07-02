'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Data Hub', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm border-b border-gray-200' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center space-x-2 select-none">
              <img src="/CoPointlogo.svg" alt="Copoint Logo" className="h-12 w-12 object-contain" />
              <span className="text-xl font-semibold tracking-tight text-gray-900"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium px-2 py-1 relative"
              >
                <span className="inline-block border-b-2 border-transparent hover:border-black transition-all duration-200">{item.name}</span>
              </a>
            ))}
            <button className="ml-4 px-5 py-2 border border-gray-300 rounded-full text-gray-900 font-medium bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 px-5 py-2 border border-gray-300 rounded-full text-gray-900 font-medium bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}