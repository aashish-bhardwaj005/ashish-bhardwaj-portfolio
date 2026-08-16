import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, ArrowRight, Download, CheckCircle2, ShoppingCart, Layout, Code, Globe, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenResume, onOpenContact, showToast }) {
  const metrics = [
    { label: "Years Experience", value: PERSONAL_INFO.experienceYears, sub: "10+ Yrs Professional Exp" },
    { label: "Websites & Stores", value: PERSONAL_INFO.websitesDelivered, sub: "Shopify & WordPress" },
    { label: "Live Client Sites", value: PERSONAL_INFO.liveProjectsCount, sub: "Featured International" },
    { label: "Mobile-First UX", value: "100%", sub: "Core Web Vitals Ready" },
  ];

  const techBadges = [
    { name: "Shopify Liquid", icon: ShoppingCart, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
    { name: "WordPress CMS", icon: Layout, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
    { name: "React (Modern)", icon: Code, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" },
    { name: "Tailwind & SCSS", icon: Sparkles, color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
    { name: "Figma to Code", icon: Globe, color: "text-pink-400 bg-pink-500/10 border-pink-500/30" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0b0f19] via-slate-950 to-[#0b0f19]">
      {/* Radial Background Accent Lights */}
      <div className="absolute top-10 -left-20 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-[550px] h-[550px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for Senior Frontend Roles & Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Building Fast, Beautiful <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shopify, WordPress & React
              </span> Websites
            </h1>

            {/* Sub-text Summary */}
            <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>—a Senior Frontend Developer with <strong>10+ years of experience</strong> turning design mockups into fast, reliable, and high-converting websites for international clients.
            </p>

            {/* Tech Stack Floating Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {techBadges.map((tech) => {
                const IconComp = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border ${tech.color} shadow-sm hover:scale-105 transition-transform`}
                  >
                    <IconComp size={14} />
                    {tech.name}
                  </span>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-decoration-none"
              >
                <span>Explore Live Projects</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2 shadow-lg"
              >
                <Download size={18} />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL_INFO.email);
                  showToast("Email copied: ashishsharma00345@gmail.com");
                }}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-sm flex items-center gap-2"
                title="Copy Email Address"
              >
                <span className="text-xs font-mono font-bold">ashishsharma00345@gmail.com</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Graphic Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 relative overflow-hidden shadow-2xl backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-500">
              
              {/* Graphic Banner Header */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 mb-6 group">
                <img
                  src="/hero_avatar.png"
                  alt="Ashish Bhardwaj Senior Developer 3D Visual"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-cyan-300 bg-black/60 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Senior Frontend Specialist
                  </span>
                  <span>10+ Yrs Experience</span>
                </div>
              </div>

              {/* Developer Spec Highlights */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span className="text-xs font-bold text-white">Shopify & Liquid Theme Development</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">Expert</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400" />
                    <span className="text-xs font-bold text-white">Figma & Adobe XD to Pixel-Perfect Code</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/30">100% Match</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-purple-400" />
                    <span className="text-xs font-bold text-white">WordPress & WooCommerce Customization</span>
                  </div>
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/30">Bespoke</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Metrics Grid Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-800/80">
          {metrics.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-lg">
              <span className="block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {item.value}
              </span>
              <span className="block text-sm font-bold text-white">
                {item.label}
              </span>
              <span className="block text-xs text-slate-400 mt-0.5 font-medium">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
