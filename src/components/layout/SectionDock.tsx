import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', name: 'Hero' },
  { id: 'identity', name: 'Identity' },
  { id: 'impact', name: 'Impact' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'how-i-build', name: 'Methodology' },
  { id: 'skills', name: 'Skills' },
  { id: 'problem-solving', name: 'Problem Solving' },
  { id: 'education', name: 'Education' },
  { id: 'contact', name: 'Contact' },
];

export const SectionDock: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (index: number) => {
    const targetIdx = Math.max(0, Math.min(SECTIONS.length - 1, index));
    const targetEl = document.getElementById(SECTIONS[targetIdx].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 p-2 rounded-2xl bg-[#090e1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
      {/* Up Button */}
      <button
        onClick={() => navigateTo(activeIndex - 1)}
        disabled={activeIndex === 0}
        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 transition-all cursor-pointer"
        title="Previous Section"
        aria-label="Previous Section"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="flex flex-col items-center gap-2 py-1">
        {SECTIONS.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => navigateTo(idx)}
            className="group relative flex items-center justify-center p-1 cursor-pointer"
            aria-label={`Jump to ${sec.name}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                  : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-slate-300'
              }`}
            />
            {/* Tooltip on hover */}
            <span className="absolute right-7 px-2.5 py-1 rounded bg-[#0b1220] border border-white/10 text-[10px] font-mono text-slate-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg">
              {sec.name}
            </span>
          </button>
        ))}
      </div>

      {/* Down Button */}
      <button
        onClick={() => navigateTo(activeIndex + 1)}
        disabled={activeIndex === SECTIONS.length - 1}
        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 transition-all cursor-pointer"
        title="Next Section"
        aria-label="Next Section"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};
