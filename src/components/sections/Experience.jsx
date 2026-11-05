import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { experience } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Career Journey"
          title="Work Experience"
          subtitle="A track record of shipping production features, collaborating with cross-functional teams, and driving business value."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 mt-1">
                      <span className="font-semibold text-teal-400 flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {item.company}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 w-fit">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements Bullet points */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Key Contributions</h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

