import React, { useState } from 'react';
import { Monitor, FileSpreadsheet, Code2, Terminal, Database, Cpu, Check, Layers, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'technical'>('all');

  const getSkillIcon = (iconType: string) => {
    switch (iconType) {
      case 'Monitor':
        return Monitor;
      case 'FileSpreadsheet':
        return FileSpreadsheet;
      case 'Code2':
        return Code2;
      case 'Terminal':
        return Terminal;
      case 'Database':
        return Database;
      case 'Cpu':
        return Cpu;
      default:
        return Layers;
    }
  };

  const filteredSkills = PORTFOLIO_DATA.skills.filter(skill => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Competencies &amp; Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technical Capabilities
            </h2>
            <div className="mt-2 text-sm text-slate-400 max-w-xl">
              Documented proficiencies in computer operations, software tools, and programming foundations.
            </div>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl w-fit">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({PORTFOLIO_DATA.skills.length})
            </button>
            <button
              onClick={() => setActiveFilter('core')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'core'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Core Operations
            </button>
            <button
              onClick={() => setActiveFilter('technical')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'technical'
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Programming &amp; CS
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = getSkillIcon(skill.iconType);
            const hasProficiency = Boolean(skill.level);

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-950/40 group-hover:border-cyan-500/40 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Proficiency Indicator strictly where provided */}
                    {hasProficiency ? (
                      <div className="text-right">
                        <span className="text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md inline-block">
                          {skill.level}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                          Verified Rating
                        </span>
                      </div>
                    ) : (
                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700 px-2.5 py-1 rounded-md inline-block">
                          Active Practice
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                          Foundation
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  {skill.description && (
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Bottom Status Indicator (Unboxed, clean text) */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="capitalize text-slate-400">
                    {skill.category === 'core' ? 'Data & Systems' : 'Software & Theory'}
                  </span>
                  <span className="text-slate-300 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    Practical Fluency
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Transparency & Accuracy */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
          <span>
            <strong className="text-slate-200 font-semibold">Strict Profile Integrity:</strong> Proficiency ratings are displayed strictly for verified competencies. No unverified percentages or fabricated claims are used.
          </span>
          <span className="text-cyan-400 font-mono text-[11px] shrink-0 font-medium">
            Truth-in-Resume Standard
          </span>
        </div>

      </div>
    </section>
  );
};
