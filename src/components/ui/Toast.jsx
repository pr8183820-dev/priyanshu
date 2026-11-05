import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-teal-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl shadow-teal-500/10 transition-all duration-300 animate-bounce">
      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-white transition-colors ml-2 p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

