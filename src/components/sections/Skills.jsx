import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { skillCategories } from '../../data/portfolioData';
import { 
  Code2, 
  FileCode2, 
  FileCode, 
  Globe, 
  Palette, 
  Layout, 
  Cpu, 
  Server, 
  Layers, 
  Network, 
  Share2, 
  Database, 
  DatabaseBackup, 
  ShieldCheck, 
  GitBranch, 
  Box, 
  Send, 
  Zap, 
  Cloud, 
  Terminal,
  CheckCircle2
} from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Mapping string to Lucide icon component
  const getSkillIcon = (iconName) => {
    const iconMap = {
      Code2: <Code2 className="w-4 h-4 text-teal-400" />,
      FileCode2: <FileCode2 className="w-4 h-4 text-amber-400" />,
      FileCode: <FileCode className="w-4 h-4 text-blue-400" />,
      Globe: <Globe className="w-4 h-4 text-cyan-400" />,
      Palette: <Palette className="w-4 h-4 text-teal-400" />,
      Layout: <Layout className="w-4 h-4 text-orange-400" />,
      Cpu: <Cpu className="w-4 h-4 text-purple-400" />,
      Server: <Server className="w-4 h-4 text-emerald-400" />,
      Layers: <Layers className="w-4 h-4 text-teal-400" />,
      Network: <Network className="w-4 h-4 text-sky-400" />,
      Share2: <Share2 className="w-4 h-4 text-pink-400" />,
      Database: <Database className="w-4 h-4 text-emerald-500" />,
      DatabaseBackup: <DatabaseBackup className="w-4 h-4 text-blue-500" />,
      ShieldCheck: <ShieldCheck className="w-4 h-4 text-rose-400" />,
      GitBranch: <GitBranch className="w-4 h-4 text-orange-500" />,
      Box: <Box className="w-4 h-4 text-blue-400" />,
      Send: <Send className="w-4 h-4 text-orange-400" />,
      Zap: <Zap className="w-4 h-4 text-yellow-400" />,
      Cloud: <Cloud className="w-4 h-4 text-cyan-400" />,
      Terminal: <Terminal className="w-4 h-4 text-green-400" />,
    };

    return iconMap[iconName] || <CheckCircle2 className="w-4 h-4 text-teal-400" />;
  };

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Master':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Advanced':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Tech Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit I leverage to construct robust, resilient, and performant web products."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-teal-500/40 transition-all duration-300 group shadow-lg"
            >
              {/* Category Heading */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <h3 className="font-bold text-lg text-white group-hover:text-teal-400 transition-colors">
                  {cat.category}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Skills List in Category */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:bg-slate-800/40 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Highlights Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-950/30 via-slate-900/40 to-indigo-950/30 border border-slate-800/80 text-center">
          <p className="text-sm text-slate-400">
            <strong className="text-teal-400 font-semibold">Continuous Learning:</strong> Always exploring cutting-edge tools, libraries, and frameworks to deliver better software.
          </p>
        </div>

      </div>
    </section>
  );
};

