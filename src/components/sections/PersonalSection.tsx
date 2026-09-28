import React from 'react';
import { Crown, Sparkles, Brain } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { EXTRACURRICULAR } from '../../data/resumeData';

export const PersonalSection: React.FC = () => {
  return (
    <section id="personal" className="py-14 relative z-10 border-t border-white/5 tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="10"
          badge="Perspective"
          title="Strategic Thinking & Systems Instinct"
          description="How competitive chess calculation and deep curiosity inform engineering trade-offs under constraints."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Engineering Perspective */}
          <div className="md:col-span-7 p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white font-sans">
                Curiosity, Calculation, and Production Discipline
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                I gravitate toward systems with real constraints: where latency spikes matter, where memory can't be taken for granted, and where multi-model AI pipelines must be composed into dependable software.
              </p>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Whether diagnosing 220+ API configuration schemas or tuning polling intervals to eliminate 25,000 redundant requests, I believe the best engineering is rooted in empirical observation, clean boundaries, and steady execution.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
              <span className="bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/40">
                // FIRST-PRINCIPLES THINKING
              </span>
              <span className="bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/40">
                // ARCHITECTURAL DISCIPLINE
              </span>
            </div>
          </div>

          {/* Chess Background */}
          <div className="md:col-span-5 p-6 rounded-2xl glass-card border border-amber-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-amber-400">
                  <Crown className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-800/40">
                  EXTRACURRICULAR
                </span>
              </div>
              <h4 className="text-lg font-bold text-white font-sans mb-1">
                {EXTRACURRICULAR.achievement}
              </h4>
              <p className="text-xs text-slate-400 font-mono mb-3">
                Competitive Chess • Calculation & Branch Evaluation
              </p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                "{EXTRACURRICULAR.insight}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
