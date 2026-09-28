import React from 'react';
import {
  Search,
  FileCode,
  Network,
  Cpu,
  BarChart3,
  Zap,
  Rocket,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { HOW_I_BUILD_STEPS } from '../../data/resumeData';

export const HowIBuildSection: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <FileCode className="w-4 h-4 text-sky-400" />;
      case 2:
        return <Network className="w-4 h-4 text-indigo-400" />;
      case 3:
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 4:
        return <BarChart3 className="w-4 h-4 text-emerald-400" />;
      case 5:
        return <Zap className="w-4 h-4 text-amber-400" />;
      case 6:
        return <Rocket className="w-4 h-4 text-rose-400" />;
      default:
        return <Search className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="how-i-build" className="py-14 relative z-10 border-t border-white/5 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          badge="Methodology"
          title="How I Build: Practical Engineering Workflow"
          description="A systematic methodology: constraint discovery, interface contracts, empirical measurement, and automated optimization."
        />

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {HOW_I_BUILD_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="p-4 rounded-xl glass-card glass-card-hover border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    {getStepIcon(idx)}
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {item.step}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    PHASE
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white font-sans mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-cyan-300/80 bg-slate-900/50 p-2 rounded-lg">
                <span className="text-[9px] text-slate-500 uppercase block mb-0.5">
                  RESUME EVIDENCE
                </span>
                <p className="text-slate-300 font-sans text-[11px] leading-snug line-clamp-2">
                  {item.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
