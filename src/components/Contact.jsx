import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Copy, 
  Briefcase, 
  Clock, 
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
  Code2
} from 'lucide-react';

export default function Contact({ showToast }) {
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard: ${text}`);
  };

  const engagementModels = [
    {
      title: "Senior / Lead Frontend Roles",
      badge: "Full-Time / Contract",
      description: "Available for Senior Frontend, Shopify Lead, and UI Engineering positions (Remote / Hybrid).",
      icon: Briefcase
    },
    {
      title: "Custom Shopify & Liquid Architecture",
      badge: "E-Commerce",
      description: "Bespoke Shopify theme development, Store 2.0 refactoring, custom app integrations, and checkout optimization.",
      icon: Zap
    },
    {
      title: "Core Web Vitals & Speed Optimization",
      badge: "Performance",
      description: "Auditing and elevating slow stores to 90+ Lighthouse scores with sub-1.5s LCP loading speeds.",
      icon: Sparkles
    },
    {
      title: "Figma to Pixel-Perfect Production UI",
      badge: "Design Systems",
      description: "100% pixel-perfect conversion of complex Figma / Adobe XD designs into responsive, accessible code.",
      icon: Code2
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950/70">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="container relative z-10 max-w-6xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Connect & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Build High-Impact Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Reach out directly for senior developer roles, architecture consultations, custom Shopify & WordPress engineering, or long-term international contracts.
          </p>
        </div>

        {/* Main Grid: Direct Contact Channels & Engagement Models */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Direct Fast-Action Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Primary Action Card: WhatsApp Direct */}
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hi%20Ashish,%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/40 text-emerald-300 flex items-center justify-between hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all text-decoration-none group shadow-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Direct WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <span className="text-xs text-emerald-300 font-mono block mt-0.5">{PERSONAL_INFO.phonePrimary}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">Chat Now →</span>
            </a>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-bold block">Primary Email</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors block mt-0.5"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy email to clipboard"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-bold block">Direct Call</span>
                  <div className="flex flex-col text-xs sm:text-sm font-bold text-white space-y-0.5 mt-0.5">
                    <a href={`tel:${PERSONAL_INFO.phonePrimary}`} className="hover:text-purple-400 transition-colors">
                      {PERSONAL_INFO.phonePrimary}
                    </a>
                    <a href={`tel:${PERSONAL_INFO.phoneSecondary}`} className="hover:text-purple-400 transition-colors text-xs text-slate-400 font-normal">
                      {PERSONAL_INFO.phoneSecondary} (Alternate)
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phonePrimary, 'Primary Phone')}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy primary phone"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* Location & LinkedIn Bar */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-pink-400 flex-shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold text-decoration-none"
              >
                <Globe size={14} />
                <span>LinkedIn Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

          {/* Right Column: Senior Engagement & Working Models */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Engagement & Collaboration Options
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available Now
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  With 10+ years of end-to-end frontend experience, I collaborate flexibly with agencies, enterprise businesses, and international startups across several formats:
                </p>

                {/* Engagement Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {engagementModels.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                            <IconComp size={16} />
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Senior SLA & Timezone Strip */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>Timezone: India (IST / UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck size={15} className="flex-shrink-0" />
                  <span>Sub-24h Response SLA</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
