import React, { useEffect, useRef, useState } from 'react';

interface MetricCounterProps {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  highlight?: boolean;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({
  value,
  numericValue,
  prefix = '',
  suffix = '',
  label,
  context,
  highlight = false,
}) => {
  const [displayValue, setDisplayValue] = useState<number | string>(
    numericValue !== undefined ? 0 : value
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);

          if (numericValue !== undefined) {
            let start = 0;
            const end = numericValue;
            const duration = 1400; // ms
            const startTime = performance.now();

            const step = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeProgress * (end - start) + start);

              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(end);
              }
            };

            requestAnimationFrame(step);
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, numericValue, value]);

  return (
    <div
      ref={containerRef}
      className={`relative p-6 rounded-2xl transition-all duration-300 glass-card glass-card-hover ${
        highlight
          ? 'border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-slate-900/40'
          : 'border-white/5'
      }`}
    >
      {highlight && (
        <div className="absolute top-3 right-3 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </div>
      )}

      {/* Main Metric Value */}
      <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 flex items-baseline gap-1">
        {prefix && <span className="text-cyan-400 text-2xl sm:text-3xl font-normal">{prefix}</span>}
        <span className={highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300' : 'text-white'}>
          {numericValue !== undefined && hasAnimated ? displayValue : value}
        </span>
        {suffix && <span className="text-cyan-400 text-2xl sm:text-3xl font-normal">{suffix}</span>}
      </div>

      {/* Label */}
      <h3 className="text-sm font-semibold text-slate-200 tracking-wide font-sans mb-1.5">
        {label}
      </h3>

      {/* Contextual verification detail */}
      <p className="text-xs text-slate-400 leading-relaxed font-sans">
        {context}
      </p>
    </div>
  );
};
