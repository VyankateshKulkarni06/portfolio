import React, { useState } from 'react';
import {
  BrainCircuit,
  Eye,
  Crosshair,
  FileSpreadsheet,
  Activity,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
  Server,
  Zap,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { TechBadge } from '../ui/TechBadge';
import { PROJECTS } from '../../data/resumeData';

export const FeaturedCarieCheck: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'cariecheck') || PROJECTS[0];
  const [activeStage, setActiveStage] = useState(0);

  const STAGES = [
    {
      step: '01',
      title: 'Payload Ingest & Decoupling',
      model: 'Amazon S3 + Redis',
      desc: 'Ingests 8 multi-angle intraoral photos and 14 clinical questions. Bypasses backend RAM by writing binaries to S3 and caching case state in Redis by case ID.',
      metric: 'Zero Server Heap Spike',
      icon: <Server className="w-5 h-5 text-amber-400" />,
    },
    {
      step: '02',
      title: 'View Validation',
      model: 'MobileNet Classifier',
      desc: 'Verifies correct clinical angles (maxillary, mandibular, occlusal, anterior). Rejects misaligned or blurry submissions before expensive downstream processing.',
      metric: '~98% Accuracy',
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '03',
      title: 'Spatial Tooth Detection',
      model: 'YOLO Localization',
      desc: 'Predicts high-precision 2D bounding boxes and identifies individual tooth boundaries across varying oral illumination conditions.',
      metric: '~95% Accuracy',
      icon: <Crosshair className="w-5 h-5 text-emerald-400" />,
    },
    {
      step: '04',
      title: 'Tooth-Level Disease Inference',
      model: '8 Specialized VLM Agents',
      desc: 'Orchestrates 8 parallel Vision-Language Model agents evaluating caries, restoration integrity, enamel decay, and periodontal risk.',
      metric: '~85% Accuracy',
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
    },
    {
      step: '05',
      title: 'DMFT Scoring & Odontogram',
      model: 'Deterministic Report Engine',
      desc: 'Aggregates tooth findings into standardized clinical DMFT (Decayed, Missing, Filled Teeth) indices and generates interactive visual odontograms.',
      metric: 'Clinical Grade',
      icon: <FileSpreadsheet className="w-5 h-5 text-purple-400" />,
    },
    {
      step: '06',
      title: 'Real-Time SSE Streaming',
      model: 'Server-Sent Events (SSE)',
      desc: 'Streams progressive inference events to the client interface so camp clinicians see live diagnosis progress as each tooth model resolves.',
      metric: '<100ms Event Latency',
      icon: <Activity className="w-5 h-5 text-sky-400" />,
    },
  ];

  return (
    <section id="cariecheck" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          badge="Featured Deep Dive"
          title="CarieCheck — AI Dental Diagnosis Platform"
          description="A multi-model computer vision and VLM pipeline delivering tooth-level pathology mapping and automated clinical reporting."
        />

        {/* Hero Card with System Stats */}
        <div className="p-8 md:p-10 rounded-3xl glass-card border border-cyan-500/30 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-700/50">
                  PRODUCTION AI SYSTEM
                </span>
                <span className="font-mono text-xs text-slate-400">
                  BHARTI HOSPITALS DEPLOYMENT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-sans tracking-tight mb-4">
                Multimodal Computer Vision & VLM Diagnostics
              </h3>

              <p className="text-base text-slate-300 leading-relaxed font-sans max-w-3xl mb-6">
                CarieCheck solves high-volume screening constraints in medical camps by orchestrating an 8-image intake pipeline with 14 clinical questionnaire markers. It runs view validation, localized tooth bounding, and 8 parallel VLM agents, pushing progress via Server-Sent Events (SSE).
              </p>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10 font-mono">
                <div>
                  <div className="text-[10px] text-slate-500">VIEW VALIDATION</div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-300">~98%</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">TOOTH DETECTION</div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-300">~95%</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">DISEASE CLASSIFICATION</div>
                  <div className="text-xl sm:text-2xl font-bold text-indigo-300">~85%</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">INPUT PAYLOAD</div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-300">8 Img + 14 Qs</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <TechBadge key={s} label={s} variant="accent" />
                ))}
              </div>
            </div>

            {/* Architecture Concept Mock Diagram */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#080d18] border border-cyan-500/20 flex flex-col justify-center">
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                SYSTEM ARCHITECTURE FLOW
              </h4>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-slate-900/90 text-slate-300 border border-white/5">
                  Client: 8 Images + 14 Qs
                </div>
                <div className="text-center text-slate-600">↓ Presigned URLs</div>
                <div className="p-2.5 rounded bg-amber-950/30 text-amber-300 border border-amber-800/30">
                  Amazon S3 & Redis Key State
                </div>
                <div className="text-center text-slate-600">↓ Case ID Pointer</div>
                <div className="p-2.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-700/40">
                  FastAPI Inference Pipeline
                </div>
                <div className="text-center text-slate-600">↓ SSE Push Updates</div>
                <div className="p-2.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-700/40">
                  DMFT Score & Odontogram
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stage-by-Stage Inspector */}
        <div className="p-7 md:p-9 rounded-3xl glass-card border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white font-sans">
                Interactive Pipeline Explorer
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Select a stage below to examine model selection, memory trade-offs, and throughput metrics.
              </p>
            </div>
            <span className="font-mono text-xs text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/40 w-fit">
              STAGE {STAGES[activeStage].step} OF 06
            </span>
          </div>

          {/* Step Pill Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {STAGES.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-xl font-mono text-xs flex flex-col items-start gap-1 transition-all cursor-pointer ${
                  activeStage === idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md'
                    : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:border-slate-600 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-500">{stage.step}</span>
                  <span className="font-semibold text-white">{stage.model.split(' ')[0]}</span>
                </div>
                <span className="text-[11px] truncate w-full text-left opacity-80">
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Deep Dive Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#090f1d] border border-cyan-500/20 flex flex-col md:flex-row gap-6 items-start justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-white/10">
                  {STAGES[activeStage].icon}
                </div>
                <div>
                  <h5 className="text-lg font-bold text-white font-sans">
                    {STAGES[activeStage].title}
                  </h5>
                  <span className="text-xs font-mono text-cyan-400">
                    Engineered with: {STAGES[activeStage].model}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans pt-2">
                {STAGES[activeStage].desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 shrink-0 w-full md:w-64 font-mono">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                BENCHMARK / CRITERION
              </span>
              <span className="text-xl font-bold text-cyan-300 block mt-1">
                {STAGES[activeStage].metric}
              </span>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-1.5 text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified in Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
