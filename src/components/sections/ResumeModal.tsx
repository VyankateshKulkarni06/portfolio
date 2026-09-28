import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Building2, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, VERIFIED_METRICS } from '../../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0c121e] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080d18]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40">
              RESUME • AUDITED REVISION 2026
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Vyankatesh Kulkarni — Software Engineer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-slate-600 transition-all cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 font-sans text-slate-200">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-extrabold text-white font-sans">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-cyan-400 font-mono mt-1 font-semibold">
              Software Engineer — Backend Systems, Distributed Software & Applied AI
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-white">
                  {EDUCATION.institution}
                </h3>
                <p className="text-xs text-slate-300 font-mono">{EDUCATION.degree}</p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs">
                <span className="text-cyan-400 font-bold block">GPA: {EDUCATION.gpa}</span>
                <span className="text-slate-400">{EDUCATION.achievement}</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              ENGINEERING EXPERIENCE
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-5 rounded-xl bg-slate-900/50 border border-white/5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.company}</h3>
                      <p className="text-xs font-mono text-cyan-300">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
                    {exp.bulletPoints.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics Summary */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              VERIFIED IMPACT SUMMARY
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-500 block text-[10px]">DSA PROBLEMS</span>
                <span className="text-cyan-300 font-bold text-sm">550+ (LC 1671)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-500 block text-[10px]">COVERAGE SURGE</span>
                <span className="text-cyan-300 font-bold text-sm">8% → 47%</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-500 block text-[10px]">API LOAD CUT</span>
                <span className="text-cyan-300 font-bold text-sm">~3× Less Requests</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                <span className="text-slate-500 block text-[10px]">VISION ACCURACY</span>
                <span className="text-cyan-300 font-bold text-sm">~98% / ~95% / ~85%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-[#080d18] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>PICT IT • Class of 2027</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
