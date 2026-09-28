import React from 'react';

interface TechBadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'emerald' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-slate-600',
    accent: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/50 hover:border-cyan-600',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50 hover:border-emerald-600',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-800/50 hover:border-amber-600',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-1',
    md: 'text-xs px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {label}
    </span>
  );
};
