import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { testimonials, faqs } from '../../data/portfolioData';
import { Quote, ChevronDown, ChevronUp, Star } from 'lucide-react';

export const Testimonials = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <div className="mb-20">
            <SectionHeader 
              badge="Endorsements"
              title="What Colleagues & Clients Say"
              subtitle="Kind words from developers, founders, and engineering managers I've worked alongside."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl relative flex flex-col justify-between"
                >
                  <Quote className="w-8 h-8 text-teal-500/20 absolute top-5 right-5" />
                  
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
                      "{item.comment}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-10 h-10 rounded-full object-cover border border-teal-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <div className="max-w-3xl mx-auto pt-6">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-500/10 border border-teal-500/30 text-teal-400 mb-3">
                Questions
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-teal-300 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-teal-400 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

