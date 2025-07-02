'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AI Solutions transformed our data processing capabilities. We're now processing 10x more data with 90% fewer resources. The ROI has been incredible.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "TechCorp",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    quote: "The implementation was seamless and the performance gains were immediate. Our ML models now train in minutes instead of hours. Outstanding support throughout.",
    author: "Michael Rodriguez",
    role: "Head of AI, DataFlow Inc",
    company: "DataFlow Inc",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    quote: "Outstanding technology and cutting-edge solutions. AI Solutions helped us achieve our digital transformation goals ahead of schedule and under budget.",
    author: "Emily Johnson",
    role: "VP of Engineering, InnovateLab",
    company: "InnovateLab",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#4B9EDC] text-sm font-medium border border-blue-100">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover how leading companies are transforming their businesses with our AI solutions.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 md:p-12 mx-4 shadow-sm border border-gray-100">
                    <div className="text-center">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-2xl md:text-3xl text-gray-900 font-light mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                        />
                        <div className="text-left">
                          <div className="text-gray-900 font-semibold text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-[#4B9EDC] text-sm font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg border border-gray-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-[#4B9EDC] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}