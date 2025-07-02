'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#4B9EDC] rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium">Services</a>
            <a href="#blog" className="text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium">Resources</a>
            <a href="#about" className="text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium">Contact</a>
            <button className="bg-[#4B9EDC] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a8bc4] transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium py-2">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium py-2">Services</a>
              <a href="#blog" className="block text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium py-2">Resources</a>
              <a href="#about" className="block text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium py-2">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-[#4B9EDC] transition-colors duration-200 font-medium py-2">Contact</a>
              <button className="w-full mt-4 bg-[#4B9EDC] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a8bc4] transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}