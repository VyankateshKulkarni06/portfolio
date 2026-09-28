import React from 'react';
import { Server, Network, BrainCircuit, Terminal, ArrowUpRight } from 'lucide-react';
import { IDENTITY_PILLARS, PERSONAL_INFO } from '../../data/resumeData';
import { SectionHeader } from '../ui/SectionHeader';
import { TechBadge } from '../ui/TechBadge';

export const IdentitySection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-6 h-6 text-cyan-400" />;
      case 'distributed':
        return <Network className="w-6 h-6 text-indigo-400" />;
      case 'ai':
        return <BrainCircuit className="w-6 h-6 text-emerald-400" />;
      case 'dsa':
        return <Terminal className="w-6 h-6 text-amber-400" />;
      default:
        return <Server className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="identity" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          badge="Engineer Identity"
          title="Where software, data, infrastructure, and intelligence meet."
          description="A unified profile focused on reliable backend foundations, decoupled distributed workflows, and production-tested applied AI pipelines."
        />

        {/* Large Statement Callout */}
        <div className="mb-14 p-8 rounded-2xl bg-gradient-to-r from-[#0b1220]/90 via-[#0f172a]/80 to-[#0b1220]/90 border border-cyan-500/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            CORE THESIS
          </p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 font-sans leading-snug">
            "{PERSONAL_INFO.anchorStatement}"
          </blockquote>
        </div>

        {/* 4 Interconnected Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IDENTITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-7 rounded-2xl glass-card glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400/80 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-900/40">
                    {pillar.stats}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide font-sans mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-cyan-300/80 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Technologies in this pillar */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {pillar.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
