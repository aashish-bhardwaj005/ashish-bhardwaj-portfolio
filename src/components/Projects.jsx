import React, { useState } from 'react';
import { PROJECTS_LIST, PROJECT_CATEGORIES } from '../data/portfolioData';
import { ExternalLink, Eye, Search, Globe, CheckCircle2, Sparkles, FolderCode } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Shopify', 'WordPress', 'Laravel', 'React', 'Others'];

  const filteredProjects = PROJECTS_LIST.filter((project) => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.region.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-950/60">
      {/* Radial Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="container relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>Featured Client Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Live Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            International client websites & web applications built across Shopify, WordPress, Laravel, and modern web platforms.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-6 mb-12 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? PROJECTS_LIST.length 
                : PROJECTS_LIST.filter(p => p.category === cat).length;

              const isSelected = activeFilter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                      : 'bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:text-white hover:border-cyan-500/50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-950 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search by name, tech stack, country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Visual Image Banner Frame */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Dark Gradient Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/30"></div>

                  {/* Top Banner Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/90 text-white shadow-md backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/60 text-slate-200 backdrop-blur-md border border-white/10 flex items-center gap-1">
                      <Globe size={11} className="text-cyan-400" />
                      {project.region}
                    </span>
                  </div>

                  {/* Overlay Title */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors drop-shadow-md">
                      {project.title}
                    </h3>
                    {project.url !== '#' && (
                      <span className="text-xs font-mono text-cyan-300 opacity-90 truncate block mt-0.5 drop-shadow">
                        {project.url.replace('https://', '').replace('/', '')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Deliverables List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1.5 mb-5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                          <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  <Eye size={14} />
                  <span>Quick View</span>
                </button>

                {project.url !== '#' ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5 text-decoration-none"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500 italic px-3 py-2.5 bg-slate-950 rounded-xl border border-slate-800 text-center flex-1">
                    Client NDA
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <FolderCode size={28} />
            </div>
            <p className="text-lg font-bold text-white mb-2">
              {searchQuery ? 'No matching projects found' : `${activeFilter} Projects Coming Soon`}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {searchQuery 
                ? 'Try adjusting your search terms or selecting a different tab.'
                : `Projects under the "${activeFilter}" category are currently being linked. Check out the Shopify tab in the meantime or share the URLs to update!`}
            </p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-opacity"
            >
              View All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
