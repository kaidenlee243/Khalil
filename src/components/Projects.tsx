import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Plus, Code, Terminal, Sparkles, AlertCircle, Eye, Image as ImageIcon, X } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onOpenSetupGuide: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenSetupGuide }) => {
  const [projects, setProjects] = useState<ProjectItem[]>(PORTFOLIO_DATA.placeholderProjects);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newTags, setNewTags] = useState('Python, Excel, Automation');
  const [newGithub, setNewGithub] = useState('');
  const [newDemo, setNewDemo] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) return;

    const newProject: ProjectItem = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim(),
      tags: newTags.split(',').map((t) => t.trim()).filter(Boolean),
      githubUrl: newGithub.trim() || undefined,
      demoUrl: newDemo.trim() || undefined,
      imageUrl: '/src/assets/images/data_automation_project_1793095152647.jpg',
      isPlaceholder: false
    };

    setProjects([newProject, ...projects]);
    setNewTitle('');
    setNewDesc('');
    setNewTags('Python, Excel, Automation');
    setNewGithub('');
    setNewDemo('');
    setIsAdding(false);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Projects &amp; Technical Work
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Clean visual project cards ready for your academic coursework and independent software initiatives.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-xl hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md shadow-cyan-400/20 whitespace-nowrap active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>{isAdding ? 'Close Form' : 'Add Project Card'}</span>
            </button>
            <button
              onClick={onOpenSetupGuide}
              className="text-xs font-medium text-slate-400 hover:text-slate-200 py-2 transition-colors whitespace-nowrap"
            >
              How to edit in code?
            </button>
          </div>
        </div>

        {/* Informational Transparency Banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-300 shadow-md">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-white">
              Transparent Portfolio Structure
            </p>
            <p className="text-slate-400 leading-relaxed">
              These initial project cards are curated design templates with realistic UI mockups ready for your live links, source code repositories, and real-world project updates.
            </p>
          </div>
        </div>

        {/* Add Project Form */}
        {isAdding && (
          <form
            onSubmit={handleAddProject}
            className="mb-12 p-6 rounded-2xl bg-slate-900 border border-cyan-500/50 shadow-2xl space-y-4 animate-in fade-in"
          >
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-cyan-400" />
              <span>Add a New Project Card to Preview</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Student Grade Database Automation"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Technologies / Tools (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. C++, Algorithms, File I/O"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Short Description *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Explain what the software accomplishes, problem solved, and key features..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  GitHub Repository URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/your-username/repo"
                  value={newGithub}
                  onChange={(e) => setNewGithub(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Live Demo URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://your-demo-url.com"
                  value={newDemo}
                  onChange={(e) => setNewDemo(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Save Project Card
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* High-Fidelity Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden group shadow-xl"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                {proj.imageUrl ? (
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(proj.imageUrl || null)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {proj.isPlaceholder ? (
                    <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-amber-300 bg-slate-950/90 border border-amber-500/40 px-2 py-0.5 rounded backdrop-blur-md">
                      Template
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-emerald-400 bg-slate-950/90 border border-emerald-500/40 px-2 py-0.5 rounded backdrop-blur-md">
                      Active
                    </span>
                  )}
                </div>

                {/* Inspect Image Overlay Icon */}
                {proj.imageUrl && (
                  <button
                    onClick={() => setSelectedImage(proj.imageUrl || null)}
                    className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/80 transition-colors backdrop-blur-md"
                    title="View Full Screenshot"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] text-cyan-300/90 font-medium bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {proj.description}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  )}

                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      onClick={(e) => {
                        if (proj.demoUrl === '#') {
                          e.preventDefault();
                          alert('This is a placeholder demo link. Add your live demo URL when your project is ready.');
                        }
                      }}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors ml-auto"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Screenshot Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-950/80 text-white hover:bg-slate-800 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Project preview high resolution"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
