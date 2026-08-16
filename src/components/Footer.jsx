import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Globe, Mail, Phone, Heart } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12 relative">
      <div className="container">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          {/* Left Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center font-bold text-cyan-400">
                AB
              </div>
            </div>
            <div>
              <span className="font-bold text-base text-[var(--text-main)] block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                Senior Frontend & eCommerce Developer (10+ Yrs Exp)
              </span>
            </div>
          </div>

          {/* Quick Links & Resume PDF CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-[var(--text-muted)]">
            <a href="#hero" className="hover:text-[var(--accent-cyan)] transition-colors">Overview</a>
            <a href="#skills" className="hover:text-[var(--accent-cyan)] transition-colors">Skills</a>
            <a href="#workflow" className="hover:text-[var(--accent-cyan)] transition-colors">Workflow</a>
            <a href="#projects" className="hover:text-[var(--accent-cyan)] transition-colors">Projects (30+)</a>
            <a href="#experience" className="hover:text-[var(--accent-cyan)] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[var(--accent-cyan)] transition-colors">Contact</a>
            
            {/* Prominent Resume PDF Button */}
            <button 
              onClick={onOpenResume} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all font-bold"
              title="Preview & Download Resume PDF"
            >
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all shadow-sm flex items-center gap-2 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Copyright Footer Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-dim)] gap-4">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind CSS & Liquid Expertise
          </p>
        </div>

      </div>
    </footer>
  );
}
