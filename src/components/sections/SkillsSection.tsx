import React, { useState } from 'react';
import { Search, Info, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SKILLS_DATA, SKILL_CATEGORIES, SkillItem } from '../../data/skillsData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem>(SKILLS_DATA[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          badge="Technical Competencies"
          title="Interactive Engineering Skill Matrix"
          description="Contextual engineering capabilities mapped to production projects, distributed systems, and algorithmic development."
        />

        {/* Search and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:border-slate-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
            />
          </div>
        </div>

        {/* Skill Matrix and Active Context Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Interactive Skill Pills */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {filteredSkills.map((skill) => {
              const isSelected = hoveredSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onClick={() => setHoveredSkill(skill)}
                  className={`p-3 rounded-xl border text-xs font-mono transition-all cursor-pointer flex flex-col justify-between h-20 ${
                    isSelected
                      ? 'bg-cyan-950/60 border-cyan-500/70 text-cyan-200 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : skill.highlight
                      ? 'bg-slate-900/90 border-cyan-500/20 text-slate-200 hover:border-cyan-500/40'
                      : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span className="font-semibold text-white tracking-wide truncate">
                    {skill.name}
                  </span>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span className="truncate">{skill.category}</span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Contextual Inspector Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl glass-card border border-cyan-500/30 shadow-xl sticky top-24">
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs">
              <Info className="w-4 h-4" />
              <span>PRACTICAL APPLICATION CONTEXT</span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-xl font-bold text-white font-sans">
                  {hoveredSkill.name}
                </h4>
                <span className="font-mono text-xs text-indigo-400">
                  {hoveredSkill.category}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {hoveredSkill.context}
                </p>
              </div>

              <p className="text-[11px] font-mono text-slate-500 italic">
                * Evaluated by concrete implementation in projects & systems rather than abstract checklists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
