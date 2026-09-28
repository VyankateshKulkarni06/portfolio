import React from 'react';
import { ArrowDown, FileText, Cpu, Database, Network, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/resumeData';
import { DistributedSystemCanvas } from '../3d/DistributedSystemCanvas';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden tech-grid-bg"
    >
      {/* Radial depth light behind the hero content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Engineer Profile & Statement */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">


            {/* Engineer Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
              Vyankatesh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Kulkarni
              </span>
            </h1>

            {/* Role & Headline */}
            <h2 className="mt-3 sm:mt-4 text-lg sm:text-2xl font-semibold text-slate-200 tracking-tight leading-snug">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Supporting Statement */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-400 leading-relaxed font-sans max-w-xl">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Micro Telemetry Strip */}
            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-white/10 max-w-xl font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-slate-500 text-[9px] sm:text-[10px]">COVERAGE SURGE</span>
                <span className="text-cyan-300 font-bold text-xs sm:text-sm">8% → 47%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-[9px] sm:text-[10px]">API REDUCTION</span>
                <span className="text-cyan-300 font-bold text-xs sm:text-sm">~3× Less Load</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-[9px] sm:text-[10px]">LEETCODE</span>
                <span className="text-cyan-300 font-bold text-xs sm:text-sm">550+ (1671)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-semibold text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] cursor-pointer"
              >
                <span>View Engineering Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Vyankatesh_Kulkarni_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0e1626] hover:bg-[#152037] text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 font-mono text-xs font-semibold transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-slate-500 text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Living Distributed System Visual */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <DistributedSystemCanvas />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="w-full flex justify-center mt-10 z-10">
        <a
          href="#identity"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">
            SCROLL TO EXPLORE ARCHITECTURE
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400/80 group-hover:text-cyan-400" />
        </a>
      </div>
    </section>
  );
};
