import React from 'react';
import { VERIFIED_METRICS } from '../../data/resumeData';
import { SectionHeader } from '../ui/SectionHeader';
import { MetricCounter } from '../ui/MetricCounter';

export const ImpactMetricsSection: React.FC = () => {
  return (
    <section id="impact" className="py-24 relative z-10 border-t border-white/5 tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          badge="Verified Metrics"
          title="Measured Impact & System Performance"
          description="Concrete metrics gathered directly from production-oriented engineering projects, internships, and algorithmic problem solving."
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_METRICS.map((metric) => (
            <MetricCounter
              key={metric.id}
              value={metric.value}
              numericValue={metric.numericValue}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
              context={metric.context}
              highlight={metric.highlight}
            />
          ))}
        </div>

        {/* Engineering Reliability Guarantee Note */}
        <div className="mt-8 flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-white/5 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>AUDITED SYSTEM DATA • 100% SOURCED FROM ACTIVE RESUME WORK</span>
          </div>
          <span className="hidden sm:inline text-slate-500">
            NO ESTIMATES • NO FABRICATIONS
          </span>
        </div>
      </div>
    </section>
  );
};
