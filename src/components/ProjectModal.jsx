import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Globe, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  ShieldCheck, 
  Image as ImageIcon, 
  Compass, 
  RotateCw,
  Maximize2,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [deviceView, setDeviceView] = useState('desktop'); // 'desktop' or 'mobile'
  const [previewMode, setPreviewMode] = useState('snapshot'); // 'snapshot' or 'live'
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!project) return null;

  const isLiveUrl = project.url && project.url !== '#';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-5xl max-h-[92vh] overflow-y-auto p-5 sm:p-7 md:p-8 border border-[var(--border-color)] relative shadow-2xl rounded-2xl bg-slate-900/95 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all z-20"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
              {project.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
              <Globe size={13} className="text-cyan-400" />
              {project.region}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
              <Layers size={13} />
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>

          {isLiveUrl ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 hover:underline mt-1.5 transition-colors"
            >
              <span>{project.url}</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500 italic block mt-1">
              Private Enterprise Project (Protected under Client NDA)
            </span>
          )}
        </div>

        {/* Device Preview Controls Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/80 p-2.5 sm:p-3 rounded-2xl border border-slate-800">
            
            {/* View Mode: Snapshot vs Live Embed */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setPreviewMode('snapshot')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  previewMode === 'snapshot'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon size={14} />
                <span>Visual Preview</span>
              </button>

              {isLiveUrl && (
                <button
                  onClick={() => {
                    setPreviewMode('live');
                    setIframeLoaded(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    previewMode === 'live'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Compass size={14} />
                  <span>Live Interactive Embed</span>
                </button>
              )}
            </div>

            {/* Viewport: Desktop vs Mobile */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  deviceView === 'desktop'
                    ? 'bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor size={14} />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  deviceView === 'mobile'
                    ? 'bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone size={14} />
                <span>Mobile</span>
              </button>
            </div>

          </div>
        </div>

        {/* Realistic Browser & Device Frame */}
        <div className="mb-8">
          <div className={`mx-auto transition-all duration-300 ${
            deviceView === 'mobile' ? 'max-w-[340px]' : 'w-full'
          }`}>
            <div className={`rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl ${
              deviceView === 'mobile' ? 'border-4 border-slate-800 ring-2 ring-slate-700/50' : ''
            }`}>
              
              {/* Browser Bar Frame */}
              <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                <div className="flex-1 max-w-md mx-3 bg-slate-950 px-3 py-1 rounded-lg text-[11px] font-mono text-slate-300 truncate text-center border border-slate-800/80 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={12} className="text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{isLiveUrl ? project.url : `https://${project.id}.com`}</span>
                </div>

                {isLiveUrl ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in new window"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="w-3"></div>
                )}
              </div>

              {/* Viewport Content */}
              <div className={`relative overflow-hidden bg-slate-950 ${
                deviceView === 'mobile' ? 'h-[500px]' : 'h-[360px] sm:h-[450px] md:h-[500px]'
              }`}>

                {/* SNAPSHOT MODE */}
                {previewMode === 'snapshot' && (
                  <div className="relative w-full h-full group overflow-y-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Gradient Overlay with Live Launch Card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-5 sm:p-6 opacity-95 group-hover:opacity-100 transition-opacity">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 shadow-2xl">
                        <div>
                          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                            {project.badge}
                          </span>
                          <h4 className="text-base sm:text-lg font-extrabold text-white">
                            {project.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          {isLiveUrl && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/25 transition-all w-full sm:w-auto text-decoration-none"
                            >
                              <span>Launch Site</span>
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* LIVE EMBED IFRAME MODE */}
                {previewMode === 'live' && isLiveUrl && (
                  <div className="relative w-full h-full bg-slate-900 flex flex-col">
                    {!iframeLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 z-10">
                        <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xs text-slate-400 font-mono">Loading live site embed...</p>
                      </div>
                    )}

                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-full h-full border-0 bg-white"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      onLoad={() => setIframeLoaded(true)}
                    />

                    {/* Note for sites blocking iframes */}
                    <div className="bg-slate-950 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>💡 Some external hosts restrict live framing (X-Frame-Options).</span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>Open Directly</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
          
          {/* Key Deliverables */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span>Key Features & Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="space-y-2">
              {project.highlights && project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                  <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers size={16} className="text-purple-400" />
              <span>Tech Stack & Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-950 text-cyan-300 border border-slate-800 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Quick Actions Card */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-white block">Want to see more details?</span>
                <span className="text-[11px] text-slate-400">Explore the live deployment or request code walk.</span>
              </div>

              {isLiveUrl ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center gap-1.5 whitespace-nowrap shadow-md shadow-cyan-500/20 text-decoration-none"
                >
                  <span>Visit Live</span>
                  <ExternalLink size={13} />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500 italic">NDA Client</span>
              )}
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors border border-slate-700"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
