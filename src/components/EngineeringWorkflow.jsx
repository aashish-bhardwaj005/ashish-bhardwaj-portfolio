import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Code2, 
  Globe2, 
  Users, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function EngineeringWorkflow() {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);

  const workflowSteps = [
    {
      step: "01",
      title: "Pixel-Perfect Design Conversion",
      subtitle: "Turning Figma & XD Mockups into Real Web Pages",
      icon: Layers,
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-500/10 border-cyan-500/30",
      description: "I convert design files from Figma, Adobe XD, or Photoshop into clean, responsive web pages that look and feel exactly as designed across all screen sizes.",
      points: [
        "100% visual match to the designer's original vision",
        "Fluid responsive layouts for mobile phones, tablets, laptops, and wide screens",
        "Accessible, well-structured HTML and clean styling"
      ]
    },
    {
      step: "02",
      title: "Clean & Maintainable Code",
      subtitle: "Shopify Liquid, WordPress & React Expertise",
      icon: Code2,
      color: "from-purple-500 to-pink-600",
      accent: "text-purple-400",
      bgAccent: "bg-purple-500/10 border-purple-500/30",
      description: "I write clean, modular code that is easy for other developers to read and simple for non-technical team members or clients to manage.",
      points: [
        "Custom Shopify 2.0 sections that store managers can easily edit",
        "Clean WordPress themes built without slow, unnecessary plugins",
        "Modular React component structures that scale effortlessly as features grow"
      ]
    },
    {
      step: "03",
      title: "Speed & Performance Optimization",
      subtitle: "Fast-Loading Stores That Convert Better",
      icon: Gauge,
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-500/10 border-emerald-500/30",
      description: "A fast website keeps visitors engaged. I optimize code, images, and scripts so pages load quickly and rank higher on Google search results.",
      points: [
        "Consistent 90+ Google PageSpeed scores with sub-2 second load times",
        "Optimized images, deferred scripts, and clean asset loading",
        "Smooth navigation and checkout flows that minimize cart drop-offs"
      ]
    },
    {
      step: "04",
      title: "Testing, Launch & Team Support",
      subtitle: "Reliable Deliveries & Friendly Collaboration",
      icon: ShieldCheck,
      color: "from-amber-500 to-orange-600",
      accent: "text-amber-400",
      bgAccent: "bg-amber-500/10 border-amber-500/30",
      description: "Before any project goes live, I test thoroughly across all major browsers and devices, while providing clear communication and support to the team.",
      points: [
        "Tested and verified across Safari, Chrome, Firefox, iOS, and Android",
        "Collaborative team player experienced in code reviews and mentoring junior developers",
        "Clear communication, regular progress updates, and dependable delivery on time"
      ]
    }
  ];

  const metrics = [
    { value: "10+", label: "Years of Experience", desc: "Hands-on web & eCommerce development", icon: Clock },
    { value: "100+", label: "Websites Delivered", desc: "For clients in US, UK, Europe, Australia & India", icon: Globe2 },
    { value: "95+", label: "Avg PageSpeed Score", desc: "Fast-loading, optimized web pages", icon: Zap },
    { value: "99%", label: "Client Satisfaction", desc: "Reliable delivery & long-term client trust", icon: Users }
  ];

  return (
    <section id="workflow" className="py-24 relative bg-slate-950/80 border-y border-slate-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>Work Approach & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            How I Work & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Deliver Value</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Over the last 10 years, I've developed a dependable, structured workflow that ensures projects launch smoothly, run fast, and stay easy to maintain.
          </p>
        </div>

        {/* 10+ Years Impact Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group shadow-xl hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComp size={20} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {m.value}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {m.label}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4-Step Senior Engineering Workflow Interactive Tabs & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-3">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeWorkflowTab === idx;
              const IconComp = step.icon;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveWorkflowTab(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${
                    isSelected 
                      ? 'bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-md' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}>
                    {step.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs sm:text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </h4>
                      <IconComp size={16} className={isSelected ? step.accent : 'text-slate-600'} />
                    </div>
                    <span className="text-[11px] text-slate-400 truncate block mt-0.5">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Active Step Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = workflowSteps[activeWorkflowTab];
              const IconComp = current.icon;

              return (
                <div className="h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${current.color}`}></div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${current.bgAccent} ${current.accent}`}>
                        Phase {current.step} Workflow
                      </span>
                      <div className={`w-10 h-10 rounded-xl ${current.bgAccent} ${current.accent} flex items-center justify-center`}>
                        <IconComp size={20} />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                      {current.title}
                    </h3>
                    <h5 className="text-xs sm:text-sm font-medium text-cyan-400 mb-4">
                      {current.subtitle}
                    </h5>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {current.description}
                    </p>

                    {/* Key Technical Deliverables */}
                    <div className="space-y-3">
                      {current.points.map((p, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-200 font-medium">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Assurance Note */}
                  <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-mono text-[11px]">
                      <ShieldCheck size={14} className="text-cyan-400" />
                      100% Production Grade Standard
                    </span>
                    <span className="text-cyan-400 font-bold">10+ Years Tested Workflow</span>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

        {/* Speed & Optimization Proof Spotlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10">
                <TrendingUp size={28} />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  eCommerce Speed Impact
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-white">
                  Faster Stores. Higher Conversion Rates. Better Search Rankings.
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Every millisecond matters. I engineer Shopify & WordPress sites to pass Google Core Web Vitals with flying colors, driving quantifiable conversion growth.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-lg font-extrabold text-emerald-400 font-mono block">90+</span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Mobile PageSpeed</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-lg font-extrabold text-cyan-400 font-mono block">&lt; 1.5s</span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Avg LCP Render</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-lg font-extrabold text-purple-400 font-mono block">0.00</span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">CLS Layout Shift</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
