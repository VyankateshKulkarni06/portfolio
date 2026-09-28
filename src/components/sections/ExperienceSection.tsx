import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  Layers,
  Zap,
  TrendingUp,
  Cpu,
  Database,
  Radio,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Activity,
  Play,
} from 'lucide-react';
import { EXPERIENCES } from '../../data/resumeData';
import { SectionHeader } from '../ui/SectionHeader';
import { TechBadge } from '../ui/TechBadge';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>('databahn');

  // Databahn interactive tab
  const [databahnVisualTab, setDatabahnVisualTab] = useState<'coverage' | 'abstraction' | 'polling' | 'agent'>(
    'coverage'
  );

  // Bharti Hospitals interactive SSE playback simulation state
  const [simulatingSSE, setSimulatingSSE] = useState(false);
  const [sseStep, setSseStep] = useState(0);

  const startSseSimulation = () => {
    if (simulatingSSE) return;
    setSimulatingSSE(true);
    setSseStep(1);

    const timeouts = [
      setTimeout(() => setSseStep(2), 700),
      setTimeout(() => setSseStep(3), 1400),
      setTimeout(() => setSseStep(4), 2100),
      setTimeout(() => setSseStep(5), 2800),
      setTimeout(() => {
        setSseStep(6);
        setSimulatingSSE(false);
      }, 3500),
    ];

    return () => timeouts.forEach((t) => clearTimeout(t));
  };

  const activeExp = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          badge="Engineering Timeline"
          title="Interactive Engineering Case Studies"
          description="Production systems engineering, test infrastructure acceleration, and multi-stage computer vision platforms."
        />

        {/* Experience Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-white/10 pb-4">
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExpId(exp.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                activeExpId === exp.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                  : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4 text-cyan-400" />
              <div className="text-left">
                <div className="font-bold text-white text-sm font-sans">{exp.company}</div>
                <div className="text-[11px] text-slate-400">{exp.role} • {exp.period}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Experience Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context, Verified Facts, Bullet Points */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-7 rounded-2xl glass-card border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/40">
                  {activeExp.type}
                </span>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {activeExp.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-sans tracking-tight mb-2">
                {activeExp.company}
              </h3>
              <p className="text-sm font-mono text-cyan-300/90 mb-4">
                {activeExp.headline}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-sans mb-6">
                {activeExp.summary}
              </p>

              {/* Verified Facts & Architectural Contributions */}
              <div className="space-y-3.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                  VERIFIED ENGINEERING CONTRIBUTIONS
                </h4>
                {activeExp.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {activeExp.tags.map((t) => (
                  <TechBadge key={t} label={t} variant="accent" />
                ))}
              </div>
            </div>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-2 gap-4">
              {activeExp.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0c121e]/90 border border-white/5 flex flex-col justify-between"
                >
                  <span className="font-mono text-xs text-slate-400">{m.label}</span>
                  <span className="text-2xl font-bold font-mono text-cyan-300 mt-1">
                    {m.value}
                  </span>
                  <span className="text-xs text-slate-500 font-sans mt-0.5">{m.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Architectural Case Study Visualization */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {activeExp.id === 'databahn' ? (
              /* Databahn.ai Interactive Visual Case Study */
              <div className="p-7 rounded-2xl glass-card border border-cyan-500/20 shadow-xl flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-semibold text-white tracking-wider">
                      DATABAHN.AI ARCHITECTURE LAB
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">INTERACTIVE</span>
                </div>

                {/* Case Study Sub-Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => setDatabahnVisualTab('coverage')}
                    className={`p-2 rounded-lg text-xs font-mono transition-all ${
                      databahnVisualTab === 'coverage'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Coverage Surge
                  </button>
                  <button
                    onClick={() => setDatabahnVisualTab('abstraction')}
                    className={`p-2 rounded-lg text-xs font-mono transition-all ${
                      databahnVisualTab === 'abstraction'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    API Abstraction
                  </button>
                  <button
                    onClick={() => setDatabahnVisualTab('polling')}
                    className={`p-2 rounded-lg text-xs font-mono transition-all ${
                      databahnVisualTab === 'polling'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Polling ~3×
                  </button>
                  <button
                    onClick={() => setDatabahnVisualTab('agent')}
                    className={`p-2 rounded-lg text-xs font-mono transition-all ${
                      databahnVisualTab === 'agent'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Test Classifier
                  </button>
                </div>

                {/* Visual Tab 1: Coverage Surge */}
                {databahnVisualTab === 'coverage' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400 font-sans">
                      Automated 270+ TestRail scenarios in 3 weeks via Pytest API & E2E suite with shared infra reuse:
                    </p>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-4">
                      {/* Before Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-slate-400">Initial Coverage</span>
                          <span className="text-slate-400 font-bold">8%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-600 rounded-full w-[8%]" />
                        </div>
                      </div>

                      {/* After Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-cyan-300 font-semibold">After 3 Weeks (Pytest Automation)</span>
                          <span className="text-cyan-400 font-bold">47%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full w-[47%] transition-all duration-1000 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs font-mono text-cyan-300">
                      ⚡ IMPACT: 270+ TestRail cases automated • ~5–6 minutes saved per test case by eliminating redundant resource creation and activation waits.
                    </div>
                  </div>
                )}

                {/* Visual Tab 2: 220+ Config API Abstraction */}
                {databahnVisualTab === 'abstraction' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400 font-sans">
                      Architected Spring Boot layer unifying 220+ heterogeneous source & destination configurations:
                    </p>

                    {/* Flow diagram */}
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 flex items-center justify-between">
                        <span>220+ Source & Destination Configurations</span>
                        <span className="text-amber-400">HETEROGENEOUS</span>
                      </div>
                      <div className="flex justify-center text-slate-500">↓</div>
                      <div className="p-3.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 flex items-center justify-between">
                        <span>Spring Boot Unified Abstraction Layer</span>
                        <span className="text-cyan-400 font-bold">TRANSFORMATION</span>
                      </div>
                      <div className="flex justify-center text-slate-500">↓</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300">
                          <span className="text-slate-400 block text-[10px]">SCHEMA</span>
                          <span>Dynamic Swagger</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300">
                          <span className="text-slate-400 block text-[10px]">MAPPING</span>
                          <span>Public-to-Private</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tab 3: Polling Optimization */}
                {databahnVisualTab === 'polling' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400 font-sans">
                      Increased polling interval from 10s to 45s during API test execution, cutting redundant network overhead:
                    </p>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                        <span className="text-red-400 font-bold block mb-1">BEFORE (10s Polling)</span>
                        <p className="text-slate-300 text-xs font-sans">
                          Frequent polling caused ~25,000 requests per test cycle, choking API ingress.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                        <span className="text-emerald-400 font-bold block mb-1">AFTER (45s Polling)</span>
                        <p className="text-slate-300 text-xs font-sans">
                          ~3× reduction in API requests with zero loss in test assertion reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tab 4: Agentic Test Classifier */}
                {databahnVisualTab === 'agent' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400 font-sans">
                      Built an agentic LLM workflow parsing unmapped TestRail tickets:
                    </p>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2.5 font-mono text-xs">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>INPUT: TestRail Description + Expected Results + Steps</span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-300 pl-4 border-l border-indigo-500/30">
                        <span>→ Agentic Classification Reasoning</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 pl-4 border-l border-emerald-500/30">
                        <span>→ Categorized as Backend/API Automatable</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300 pl-4 border-l border-cyan-500/30">
                        <span>→ Fed directly into Pytest Automation Queue</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Bharti Hospitals Interactive AI Systems Case Study */
              <div className="p-7 rounded-2xl glass-card border border-cyan-500/20 shadow-xl flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-white tracking-wider">
                      BHARTI AI PIPELINE & SSE STREAM
                    </span>
                  </div>
                  <button
                    onClick={startSseSimulation}
                    disabled={simulatingSSE}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className="w-3 h-3" />
                    <span>{simulatingSSE ? 'STREAMING...' : 'SIMULATE SSE'}</span>
                  </button>
                </div>

                {/* Multistage AI Diagnostic Pipeline Interactive Flow */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-slate-400 text-xs font-sans mb-1">
                    Live inference stages streaming progress via Server-Sent Events (SSE):
                  </div>

                  {/* Stage 1 */}
                  <div
                    className={`p-3 rounded-lg border transition-all ${
                      sseStep >= 1
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                        : 'bg-slate-900/60 border-white/5 text-slate-400'
                    } flex items-center justify-between`}
                  >
                    <span>1. Ingest: 8 Intraoral Images + 14 Questions</span>
                    <span className="text-[10px] text-slate-400">S3 + Redis Keys</span>
                  </div>

                  {/* Stage 2 */}
                  <div
                    className={`p-3 rounded-lg border transition-all ${
                      sseStep >= 2
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                        : 'bg-slate-900/60 border-white/5 text-slate-400'
                    } flex items-center justify-between`}
                  >
                    <span>2. MobileNet View Validation</span>
                    <span className="text-emerald-400 font-bold">~98% Accuracy</span>
                  </div>

                  {/* Stage 3 */}
                  <div
                    className={`p-3 rounded-lg border transition-all ${
                      sseStep >= 3
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                        : 'bg-slate-900/60 border-white/5 text-slate-400'
                    } flex items-center justify-between`}
                  >
                    <span>3. YOLO Tooth Detection</span>
                    <span className="text-emerald-400 font-bold">~95% Accuracy</span>
                  </div>

                  {/* Stage 4 */}
                  <div
                    className={`p-3 rounded-lg border transition-all ${
                      sseStep >= 4
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                        : 'bg-slate-900/60 border-white/5 text-slate-400'
                    } flex items-center justify-between`}
                  >
                    <span>4. 8 Specialized VLM Agents</span>
                    <span className="text-emerald-400 font-bold">~85% Accuracy</span>
                  </div>

                  {/* Stage 5 */}
                  <div
                    className={`p-3 rounded-lg border transition-all ${
                      sseStep >= 5
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                        : 'bg-slate-900/60 border-white/5 text-slate-400'
                    } flex items-center justify-between`}
                  >
                    <span>5. DMFT Score & Odontogram Mapping</span>
                    <span className="text-indigo-400 font-bold">CLINICAL REPORT</span>
                  </div>
                </div>

                {/* S3 & Redis Decoupled Architecture Callout */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-300">
                    <Database className="w-3.5 h-3.5" />
                    <span>MEMORY MANAGEMENT ARCHITECTURE</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Designed image and questionnaire handling using Amazon S3 presigned references and Redis state keys, storing only case ID pointers in backend memory to completely eliminate OOM heap crashes on high-res photos.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
