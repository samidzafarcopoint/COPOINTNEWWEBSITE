'use client';

import { useEffect, useRef, useState } from 'react';
import { Zap, BarChart3, Code, CheckCircle } from 'lucide-react';

export default function FeatureSections() {
  const [isVisible, setIsVisible] = useState({ compute: false, throughput: false, sdk: false });
  const computeRef = useRef<HTMLDivElement>(null);
  const throughputRef = useRef<HTMLDivElement>(null);
  const sdkRef = useRef<HTMLDivElement>(null);

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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.compute ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-[#4B9EDC]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Lightning-Fast Compute</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Experience unprecedented speed with our distributed GPU clusters. 
                Process massive datasets and train complex models in minutes, not hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '10x faster model training',
                  'Auto-scaling infrastructure',
                  '99.9% uptime guarantee'
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
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.compute ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 h-20 shadow-sm border border-gray-100 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-full h-2 bg-blue-200 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible.throughput ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold mb-6 text-gray-900">Performance Metrics</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Requests/Second', value: 98, color: '#4B9EDC' },
                    { label: 'Data Processing', value: 85, color: '#123D6A' },
                    { label: 'Model Accuracy', value: 94, color: '#4B9EDC' },
                    { label: 'Response Time', value: 78, color: '#123D6A' }
                  ].map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className="text-sm font-bold text-gray-900">{metric.value}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 delay-${index * 200}`}
                          style={{
                            backgroundColor: metric.color,
                            width: isVisible.throughput ? `${metric.value}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible.throughput ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-[#4B9EDC]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Unrivaled Throughput</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Handle millions of concurrent requests with our optimized infrastructure. 
                Scale seamlessly from startup to enterprise without missing a beat.
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.sdk ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-[#4B9EDC]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Developer-First SDK</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Integrate seamlessly with our developer-friendly SDK. 
                Drop-in replacement for existing OpenAI implementations with enhanced performance.
              </p>
              <button className="bg-[#123D6A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0f2d56] transition-all duration-200 hover:scale-105 hover:shadow-lg">
                View API Docs
              </button>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.sdk ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm">ai-solutions-sdk.js</span>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code className="language-javascript">
                    {codeSnippet}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}