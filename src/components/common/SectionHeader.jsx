import React from 'react';

export const SectionHeader = ({ badge, title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-500/10 border border-teal-500/30 text-teal-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

