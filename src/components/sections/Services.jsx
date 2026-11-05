import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { services } from '../../data/portfolioData';
import { Layers, Layout, Server, Zap, ArrowRight } from 'lucide-react';

export const Services = () => {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-teal-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="What I Offer"
          title="Services & Capabilities"
          subtitle="From concept to production release, I provide end-to-end engineering tailored to your requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-semibold text-teal-400">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

