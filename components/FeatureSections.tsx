'use client';

import { useEffect, useRef, useState } from 'react';
import { Zap, BarChart3, Code, CheckCircle } from 'lucide-react';
import Lottie from 'lottie-react';

export default function FeatureSections() {
  const [isVisible, setIsVisible] = useState({ compute: false, throughput: false, sdk: false });
  const [animationData, setAnimationData] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);
  const [animationData3, setAnimationData3] = useState(null);
  const computeRef = useRef<HTMLDivElement>(null);
  const throughputRef = useRef<HTMLDivElement>(null);
  const sdkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/lotties/hero_animation.json')
      .then((res) => res.json())
      .then(setAnimationData);
    fetch('/lotties/heri_animation2.json')
      .then((res) => res.json())
      .then(setAnimationData2);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              setIsVisible(prev => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    [computeRef, throughputRef, sdkRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch('/lotties/hero_animation3.json')
      .then((res) => res.json())
      .then(setAnimationData3);
  }, []);

  const codeSnippet = `import { AIClient } from '@ai-solutions/sdk';

const client = new AIClient({
  apiKey: process.env.AI_SOLUTIONS_API_KEY
});

// Deploy ML model with single line
const model = await client.models.deploy({
  name: 'custom-nlp-model',
  framework: 'pytorch',
  compute: 'gpu-cluster'
});

// Real-time inference
const result = await model.predict({
  input: "Transform this text with AI"
});`;

  return (
    <>
      {/* Lightning-Fast Compute */}
      <section 
        ref={computeRef}
        data-section="compute"
        className="bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[480px]">
            <div className={`transition-all duration-1000 ${isVisible.compute ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} flex flex-col justify-center h-full`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-[#4B9EDC]" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900"> Accelerate Innovation through Data & AI </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              We craft bespoke AI roadmaps that align with your unique business objectives—so you move forward with clarity, confidence, and a clear path to value. 
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Your AI Blueprint',
                  'Blueprint to Success',
                  'Stratergised, Simplified, Scalable'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-[#4B9EDC] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3a8bc4] transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.compute ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex items-center justify-center h-full`}>
              <div className="flex items-center justify-center w-full h-full">
                {animationData && (
                  <Lottie animationData={animationData} loop={true} className="w-full max-w-lg h-auto" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unrivaled Throughput */}
      <section 
        ref={throughputRef}
        data-section="throughput"
        className="bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[480px]">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible.throughput ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} flex items-center justify-center h-full`}>
              <div className="flex items-center justify-center w-full h-full">
                {animationData2 && (
                  <Lottie animationData={animationData2} loop={true} className="w-full max-w-lg h-auto" />
                )}
              </div>
            </div>

            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible.throughput ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex flex-col justify-center h-full`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-[#4B9EDC]" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Deliver Tangible AI Wins</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              We deliver tangible AI wins that drive measurable business impact. From predictive analytics to intelligent automation, our solutions are designed to deliver results that matter.
              </p>
              <button className="bg-[#123D6A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0f2d56] transition-all duration-200 hover:scale-105 hover:shadow-lg">
                View Performance Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OpenAI-Compatible SDK */}
      <section 
        ref={sdkRef}
        data-section="sdk"
        className="bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[480px]">
            <div className={`transition-all duration-1000 ${isVisible.sdk ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} flex flex-col justify-center h-full`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-[#4B9EDC]" />
                </div>
                <h2 className="text-2xl md:text-2xl font-bold text-gray-900   ">AI Ecosystem Experts</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              We are AI ecosystem experts, with a deep understanding of the latest AI technologies and how to apply them to your business.
              </p>
              <button className="bg-[#123D6A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0f2d56] transition-all duration-200 hover:scale-105 hover:shadow-lg">
                View API Docs
              </button>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.sdk ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex items-center justify-center h-full`}>
              <div className="flex items-center justify-center w-full h-full">
                {animationData3 && (
                  <Lottie 
                    animationData={animationData3} 
                    loop={true} 
                    className="w-full max-w-[400px] h-auto max-h-[400px] mx-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}