import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-60 sm:h-80 w-full overflow-hidden rounded-xl mb-6 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/90 text-slate-950 uppercase tracking-wider">
            {project.category}
          </div>
        </div>

        {/* Modal Content */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="mb-6">
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-teal-300 border border-teal-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
