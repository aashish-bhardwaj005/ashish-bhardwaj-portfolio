import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, Send, Sparkles } from 'lucide-react';

export default function Header({ theme, toggleTheme, onOpenResume, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-2xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-[2px] shadow-lg group-hover:shadow-cyan-500/50 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-cyan-400 group-hover:text-white transition-colors">
              AB
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg leading-none tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-400 font-semibold mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Sr. Frontend Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-cyan-500/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white hover:border-cyan-500/50 hover:text-cyan-400 transition-all shadow-sm"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-white text-xs font-bold transition-all flex items-center gap-2"
          >
            <FileText size={15} />
            <span>Resume PDF</span>
          </button>

          {/* Hire Me / Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <Send size={15} />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                <span>View Resume PDF</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={18} />
                <span>Hire Me / Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
