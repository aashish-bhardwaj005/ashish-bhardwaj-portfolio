import React from 'react';
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[var(--bg-secondary)]/40">
      <div className="container relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pill mb-3">Work History</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] mb-4">
            10+ Years of Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-muted)]">
            A progressive career journey from junior web designer to senior frontend developer and team lead, delivering reliable web solutions for international brands.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative mb-20">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)] flex items-center justify-center text-[var(--accent-cyan)] shadow-lg shadow-cyan-500/30 z-20 hidden md:flex">
                    <Briefcase size={18} />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="glass-panel p-6 md:p-8 hover:border-[var(--accent-cyan)] transition-all">
                      
                      {/* Period Badge & Current Tag */}
                      <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.current && (
                          <span className="badge-pill py-0.5 px-2.5 text-[11px] bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                            Present Role
                          </span>
                        )}
                        <span className="text-xs font-mono font-semibold text-[var(--accent-cyan)] flex items-center gap-1 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl md:text-2xl font-extrabold text-[var(--text-main)] mb-1">
                        {exp.role}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <Building2 size={15} className="text-purple-400" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <MapPin size={13} className="text-pink-400" />
                        <span className="text-xs">{exp.location}</span>
                      </div>

                      <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Bullet Achievements */}
                      <div className="space-y-2 mb-5 text-left">
                        {exp.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-[var(--text-main)]">
                            <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Education Block */}
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">Education</h3>
                <p className="text-xs text-[var(--text-muted)]">Academic Qualifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-[var(--text-main)]">{edu.degree}</h4>
                    <span className="text-xs font-mono font-bold text-[var(--accent-cyan)]">{edu.year}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">{edu.institution}</p>
                  <p className="text-[11px] text-[var(--text-dim)] mt-0.5">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Professional Training */}
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">Certifications & Training</h3>
                <p className="text-xs text-[var(--text-muted)]">Industrial Training & Skill Validation</p>
              </div>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <h4 className="text-sm font-bold text-[var(--text-main)] mb-1">{cert.title}</h4>
                  <p className="text-xs text-[var(--accent-cyan)] font-medium">{cert.provider}</p>
                  <p className="text-[11px] text-[var(--text-dim)] mt-0.5">{cert.location}</p>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border border-cyan-500/30 mt-4">
                <h4 className="text-xs font-bold text-white mb-1">Figma to Pixel-Perfect Code Expertise</h4>
                <p className="text-[11px] text-slate-300">
                  Specialized in converting Figma, Photoshop, and Adobe XD files directly into cross-browser clean HTML, CSS, Liquid, and React components.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
