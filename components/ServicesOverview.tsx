'use client';

import { Brain, Database, Lightbulb, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      icon: Brain,
      title: "Custom ML Models & MLOps",
      description: "End-to-end machine learning solutions tailored to your business needs with automated deployment pipelines.",
      features: ["Custom Model Development", "MLOps Pipeline", "Performance Monitoring"],
      link: "#"
    },
    {
      icon: Database,
      title: "Data Engineering & Pipelines",
      description: "Robust data infrastructure and ETL pipelines that transform raw data into actionable business intelligence.",
      features: ["Data Pipeline Design", "Real-time Processing", "Data Quality Assurance"],
      link: "#"
    },
    {
      icon: Lightbulb,
      title: "AI Strategy & Consulting",
      description: "Strategic guidance to identify AI opportunities and develop comprehensive implementation roadmaps.",
      features: ["AI Readiness Assessment", "Implementation Strategy", "ROI Optimization"],
      link: "#"
    }
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#4B9EDC] text-sm font-medium border border-blue-100">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            End-to-end artificial intelligence services designed to accelerate your digital transformation 
            and unlock the full potential of your data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer hover:border-[#4B9EDC]"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-[#4B9EDC] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#4B9EDC] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4B9EDC] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#4B9EDC] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={service.link}
                className="inline-flex items-center text-[#4B9EDC] font-semibold hover:text-[#123D6A] transition-colors duration-200 group-hover:translate-x-2 transform transition-transform duration-300"
              >
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}