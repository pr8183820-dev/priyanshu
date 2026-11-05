import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo, socialLinks } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'Twitter':
        return <TwitterIcon className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <GithubIcon className="w-5 h-5" />;
    }
  };

  return (
    <footer className="relative bg-[#090d15] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-lg">
                {personalInfo.name.charAt(0)}
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 ${social.color} hover:border-slate-700 transition-all hover:scale-110`}
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400 transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="text-slate-300 font-medium">{personalInfo.location}</p>
              <p className="hover:text-teal-400 transition-colors">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </p>
              <p className="text-teal-400/90 text-xs font-medium pt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                {personalInfo.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & React
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-400 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
