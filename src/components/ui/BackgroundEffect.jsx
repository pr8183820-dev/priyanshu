import React from 'react';

export const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Glow Orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-teal-500/15 via-emerald-500/10 to-transparent rounded-full blur-3xl" />
      
      {/* Side Ambient Accent Orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-2/3 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]" />

      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
};

