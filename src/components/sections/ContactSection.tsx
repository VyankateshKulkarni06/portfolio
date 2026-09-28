import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PERSONAL_INFO } from '../../data/resumeData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Direct mailto trigger
    const subject = encodeURIComponent(`Engineering Inquiry from ${formState.name || 'Recruiter / Engineer'}`);
    const body = encodeURIComponent(
      `Hello Vyankatesh,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="12"
          badge="Initiate Transmission"
          title="Let’s build something worth shipping."
          description="Available for software engineering roles focusing on backend systems, distributed architectures, and applied AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct verified channels */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-sans">
                Direct Contact Channels
              </h3>

              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      VERIFIED EMAIL
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-mono text-white hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all cursor-pointer self-start sm:self-center"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>

              {/* Profiles: LinkedIn, GitHub, Resume */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between text-slate-400 group-hover:text-cyan-400">
                    <LinkedinIcon className="w-5 h-5" />
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-white block">LinkedIn</span>
                    <span className="text-[11px] font-mono text-slate-400">Connect</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
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
                  download="Vyankatesh_Kulkarni_Resume.pdf"
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

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex items-center gap-3 text-xs font-mono text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>STATUS: Actively interviewing for SWE backend & distributed systems roles.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-card border border-white/10">
            <h3 className="text-xl font-bold text-white font-sans mb-2">
              Send a Transmission
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6">
              Reaches my primary inbox with instant dispatch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  NAME / RECRUITER
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (Engineering Recruiter)"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="s.jenkins@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  ENGINEERING OPPORTUNITY / MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Vyankatesh, we loved your distributed systems & AI work and would like to discuss..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-semibold text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{sent ? 'DISPATCHING EMAIL...' : 'DISPATCH MESSAGE'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
