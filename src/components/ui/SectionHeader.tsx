import React from 'react';

interface SectionHeaderProps {
  number: string;
  badge: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  badge,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`mb-6 md:mb-8 ${className}`}>
      {/* Technical Number & Badge */}
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/50 tracking-wider">
          {number} // {badge.toUpperCase()}
        </span>
        <div className="h-px w-10 bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>

      {/* Main Section Headline */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-sans max-w-3xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm sm:text-base text-slate-400 font-sans max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
