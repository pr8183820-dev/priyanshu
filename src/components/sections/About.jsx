import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { aboutData, personalInfo } from '../../data/portfolioData';
import { GraduationCap, Award, Compass, Sparkles, MapPin, Mail, Calendar, UserCheck } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader 
          badge="About Me"
          title="Transforming Ideas Into Seamless Code"
          subtitle={aboutData.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Story & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                My Journey & Philosophy
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.bioParagraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Quick Details Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Based in: <strong className="text-white">{personalInfo.location}</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Experience: <strong className="text-white">{personalInfo.yearsOfExperience}</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Email: <strong className="text-white">{personalInfo.email}</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <UserCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Status: <strong className="text-teal-400">Available for hire</strong></span>
                </div>
              </div>
            </div>

            {/* Education Box */}
            {aboutData.education && aboutData.education.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  Education & Background
                </h4>
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="font-semibold text-white">{edu.degree}</span>
                      <span className="text-xs text-teal-400 font-mono">{edu.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">{edu.institution}</p>
                    {edu.score && (
                      <p className="text-xs text-slate-500 font-medium pt-1">Academic Score: {edu.score}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutData.highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/30 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

