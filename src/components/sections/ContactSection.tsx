import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PERSONAL_INFO } from '../../data/resumeData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative z-10 border-t border-white/5 tech-grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <SectionHeader
          number="11"
          badge="Direct Contact"
          title="Let's build something worth shipping."
          description="Available for software engineering opportunities across backend systems, distributed architectures, and applied AI."
          className="items-center sm:items-start"
        />

        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6">
          {/* Email Card with Copy Action */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  VERIFIED DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono font-medium text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all cursor-pointer w-full sm:w-auto"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Quick Action Profile Cards: LinkedIn, GitHub, Resume */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/40 transition-all flex flex-col justify-between group text-left"
            >
              <div className="flex items-center justify-between text-slate-400 group-hover:text-cyan-400">
                <LinkedinIcon className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-white block">LinkedIn</span>
                <span className="text-[11px] font-mono text-slate-400">Connect Profile</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group text-left"
            >
              <div className="flex items-center justify-between text-slate-400 group-hover:text-white">
                <GithubIcon className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-white block">GitHub</span>
                <span className="text-[11px] font-mono text-slate-400">Repositories</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Vyankatesh_Kulkarni_Resume_SDE.pdf"
              className="p-4 rounded-xl bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-800/40 hover:border-cyan-500 transition-all flex flex-col justify-between group cursor-pointer text-left"
            >
              <div className="flex items-center justify-between text-cyan-400 group-hover:text-cyan-300">
                <FileText className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-white block">Download Resume</span>
                <span className="text-[11px] font-mono text-cyan-300">PDF Document</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
