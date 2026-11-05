import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from '../common/ProjectModal';
import { GithubIcon } from '../common/SocialIcons';
import { projects, projectCategories } from '../../data/portfolioData';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Portfolio"
          title="Featured Projects & Work"
          subtitle="Explore selected applications and engineering projects demonstrating full-stack problem solving."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden hover:border-teal-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-slate-950/80 backdrop-blur-md text-teal-400 border border-teal-500/30">
                  {project.category}
                </span>

                {/* Overlay on hover to inspect details */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-semibold text-xs shadow-lg">
                    <Eye className="w-4 h-4" /> Quick View
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/40 text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-semibold">
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      Details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
