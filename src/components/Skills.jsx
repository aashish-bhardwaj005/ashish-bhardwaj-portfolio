import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, ShoppingBag, Palette, Server, Check, Layers, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap = {
    Code2: Code2,
    ShoppingBag: ShoppingBag,
    Figma: Palette,
    Server: Server,
  };

  const coreCompetencies = [
    "Responsive Web Design",
    "Shopify Theme Development",
    "WordPress Development",
    "WooCommerce Customization",
    "Shopify Liquid Coding",
    "HTML5 & CSS3 / SCSS",
    "JavaScript (ES6+)",
    "React (Foundational)",
    "Tailwind CSS & Bootstrap",
    "Cross-Browser Compatibility",
    "Mobile-First Development",
    "Core Web Vitals Optimization",
    "Technical SEO Best Practices",
    "Figma & Photoshop to HTML",
    "REST API Integration",
    "Bug Fixing & Debugging"
  ];

  const filteredCategories = activeCategory === "all" 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-[var(--bg-secondary)]/50">
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-pill mb-3">Skills & Technologies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] mb-4">
            Tools & Technologies I <span className="gradient-text">Work With Daily</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-muted)]">
            A clear look at my core strengths in frontend development, custom Shopify & WordPress themes, and design-to-code execution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all border ${
              activeCategory === "all"
                ? "bg-[var(--accent-cyan)] text-white border-[var(--accent-cyan)] shadow-lg shadow-cyan-500/30"
                : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--accent-cyan)]"
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Cpu;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all border ${
                  activeCategory === cat.id
                    ? "bg-[var(--accent-cyan)] text-white border-[var(--accent-cyan)] shadow-lg shadow-cyan-500/30"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--accent-cyan)]"
                }`}
              >
                <IconComponent size={16} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCategories.map((category) => {
            const IconComp = iconMap[category.icon] || Cpu;
            return (
              <div key={category.id} className="glass-panel p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[var(--accent-cyan)] shadow-sm">
                      <IconComp size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-main)]">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Progress List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center text-sm font-semibold text-[var(--text-main)] mb-1.5">
                          <span>{skill.name}</span>
                          <span className="mono-font text-xs text-[var(--accent-cyan)]">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800/60 rounded-full overflow-hidden p-0.5 border border-[var(--border-color)]">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Matrix */}
        <div className="glass-panel p-8 border border-[var(--border-color)]">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-[var(--accent-cyan)]" size={24} />
            <h3 className="text-2xl font-bold text-[var(--text-main)]">
              Core Technical Competencies
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {coreCompetencies.map((comp, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)] hover:border-[var(--accent-cyan)] transition-colors">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check size={12} />
                </div>
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
