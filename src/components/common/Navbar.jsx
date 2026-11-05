import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Code2, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detector
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b0f17]/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              {personalInfo.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-teal-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase font-semibold text-teal-400/90 tracking-widest">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Resume Button */}
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all bg-slate-900/50"
              >
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                Resume
              </a>
            )}

            {/* Hire / Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold"
                >
                  <FileText className="w-4 h-4 text-teal-400" />
                  Download Resume
                </a>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-md"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

