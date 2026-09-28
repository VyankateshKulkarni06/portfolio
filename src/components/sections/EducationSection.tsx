import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { EDUCATION, CERTIFICATIONS } from '../../data/resumeData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="10"
          badge="Academic Foundations"
          title="Education & Continuous Learning"
          description="Rigorous computer science curriculum combined with specialized domain study in deep learning, system design, and production engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: PICT Degree & GPA */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-slate-400">
                  {EDUCATION.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-sans tracking-tight mb-1">
                {EDUCATION.institution}
              </h3>
              <p className="text-sm font-mono text-cyan-300 mb-4">
                {EDUCATION.degree}
              </p>

              {/* GPA & SGPA Highlight Cards */}
              <div className="grid grid-cols-2 gap-3 my-6 font-mono">
                <div className="p-4 rounded-xl bg-[#080d18] border border-cyan-500/30">
                  <span className="text-[10px] text-slate-500 uppercase block">CUMULATIVE GPA</span>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-300 mt-1">
                    {EDUCATION.gpa}
                  </div>
                  <span className="text-[10px] text-slate-400">Top Tier Cohort</span>
                </div>

                <div className="p-4 rounded-xl bg-[#080d18] border border-indigo-500/30">
                  <span className="text-[10px] text-slate-500 uppercase block">SEMESTER EXCELLENCE</span>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-300 mt-1">
                    9.80+
                  </div>
                  <span className="text-[10px] text-slate-400">In 5 of 6 Semesters</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {EDUCATION.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Certifications Grid */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              SPECIALIZED CERTIFICATIONS & STUDY
            </h4>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h5 className="text-base font-bold text-white font-sans">
                    {cert.title}
                  </h5>
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40 shrink-0">
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mt-1">
                  {cert.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
