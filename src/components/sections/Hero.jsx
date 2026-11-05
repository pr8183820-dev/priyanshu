import React from 'react';
import { ArrowDown, Mail, FileText, Sparkles, Terminal, Code2, CheckCircle2 } from 'lucide-react';
import { personalInfo, heroStats } from '../../data/portfolioData';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span>{personalInfo.statusBadge || personalInfo.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
              <br />
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                {personalInfo.role}
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-500 text-slate-950 hover:brightness-110 shadow-xl shadow-teal-500/25 transition-all hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </a>

              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/60 border border-teal-500/20 text-teal-300 hover:bg-slate-900 hover:border-teal-500/50 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Quick Tech Ticker */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider font-semibold mr-1">Stack:</span>
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code & Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Background Ambient Glow Behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* IDE / Terminal Style Card */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    <span>developer.json</span>
                  </div>
                  <span className="w-8" />
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto">
                  <p className="text-slate-500">// Welcome to my developer portfolio</p>
                  <p>
                    <span className="text-teal-400 font-semibold">const</span>{' '}
                    <span className="text-indigo-300">developer</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-amber-300">"{personalInfo.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">title:</span>{' '}
                    <span className="text-amber-300">"{personalInfo.role}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-amber-300">"{personalInfo.location}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">lovesCoding:</span>{' '}
                    <span className="text-teal-400">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">coffeePowered:</span>{' '}
                    <span className="text-teal-400">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">primarySkills:</span> [
                  </p>
                  <p className="pl-8 text-emerald-300">
                    "React", "Node.js", "Express", "Tailwind"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">currentlyBuilding:</span>{' '}
                    <span className="text-cyan-300">"Next-gen web products"</span>
                  </p>
                  <p>{'};'}</p>
                </div>

                {/* Card Footer Badge */}
                <div className="px-5 py-3 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-teal-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for deployment
                  </span>
                  <span className="text-slate-500 font-mono">UTF-8</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Hero Bottom Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {heroStats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-teal-500/30 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

