import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/resumeData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-[#05070b] relative z-10 text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Focus */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-wide font-sans text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">Software Engineer</span>
          </div>
          <p className="text-slate-400 text-[11px] font-sans">
            Backend Systems • Distributed Systems • Applied AI
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-[11px] text-slate-600">
          © {currentYear} Vyankatesh Kulkarni. Built with precision.
        </div>
      </div>
    </footer>
  );
};
