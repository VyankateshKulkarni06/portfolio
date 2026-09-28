import React, { useState } from 'react';
import {
  Server,
  Brain,
  Terminal,
  Eye,
  Sparkles,
  CheckCircle2,
  Layers,
  Cpu,
} from 'lucide-react';

interface DomainSection {
  id: string;
  name: string;
  shortName: string;
  color: string;
  cx: number;
  cy: number;
  r: number;
  icon: React.ReactNode;
  summary: string;
  technologies: string[];
  keyWork: string;
  metrics: string;
}

const DOMAINS: DomainSection[] = [
  {
    id: 'backend',
    name: 'Backend & Distributed Systems',
    shortName: 'Backend & Systems',
    color: '#38bdf8', // Cyan
    cx: 140,
    cy: 140,
    r: 95,
    icon: <Server className="w-4 h-4 text-cyan-400" />,
    summary: 'High-throughput microservices, dynamic API abstraction, event-driven pipelines, and decoupled binary storage.',
    technologies: ['Go', 'Spring Boot', 'FastAPI', 'Node.js', 'Redis', 'Amazon S3', 'REST', 'SSE', 'Docker'],
    keyWork: 'Spring Boot 220+ Config Abstraction at Databahn • SSE Streaming at Bharti Hospitals',
    metrics: '220+ Configurations • ~3× Polling Reduction',
  },
  {
    id: 'agentic',
    name: 'Agentic AI & Reasoning Systems',
    shortName: 'Agentic AI',
    color: '#818cf8', // Indigo
    cx: 260,
    cy: 140,
    r: 95,
    icon: <Brain className="w-4 h-4 text-indigo-400" />,
    summary: 'Multi-agent decision loops, vector semantic search over embeddings, and automated test classification.',
    technologies: ['Agent Workflows', 'Vector Embeddings', 'Cosine Similarity', 'FastAPI', 'LangChain/Agentic', 'TestRail Classifier'],
    keyWork: 'NyayaGPT Two-Agent Legal Reasoner • Databahn Agentic Test Classifier',
    metrics: '10K+ Vector Corpus • 270+ TestRail Cases Triage',
  },
  {
    id: 'vision',
    name: 'Deep Learning & Computer Vision',
    shortName: 'Deep Learning & CV',
    color: '#34d399', // Emerald
    cx: 140,
    cy: 260,
    r: 95,
    icon: <Eye className="w-4 h-4 text-emerald-400" />,
    summary: 'Multistage neural network pipelines: CNN view verification, YOLO spatial segmentation, and 8 parallel VLM ensembles.',
    technologies: ['MobileNet', 'YOLOv8', 'VLM Agents', 'Transfer Learning', 'Image Preprocessing', 'DMFT Parsing'],
    keyWork: 'CarieCheck Clinical Dental Diagnostic Platform for Bharti Hospitals',
    metrics: '~98% View Acc • ~95% Tooth Acc • ~85% Disease Acc',
  },
  {
    id: 'swe',
    name: 'Core Software Eng & Algorithms',
    shortName: 'Algorithms & SWE',
    color: '#fbbf24', // Amber
    cx: 260,
    cy: 260,
    r: 95,
    icon: <Terminal className="w-4 h-4 text-amber-400" />,
    summary: 'Competitive programming rigor, asymptotic complexity optimization, memory profiling, and clean system design.',
    technologies: ['C++', 'DSA', 'System Design', 'Operating Systems', 'DBMS', 'OOP', 'Pytest E2E Chaining'],
    keyWork: '550+ Problems Solved • 1671 Peak LeetCode Rating • Shared Test Infra Optimization',
    metrics: '550+ Problems • 1671 Rating • ~5–6 min Saved / Test',
  },
];

const INTERSECTION_CORE = {
  id: 'core',
  name: 'System Design & Architectural Synthesis',
  shortName: 'System Design',
  color: '#c084fc',
  summary: 'Architecting scalable, resilient systems where backend services, distributed caching, decoupled storage, and production AI pipelines operate seamlessly together.',
  technologies: ['System Design', 'High Availability', 'Decoupled Caching (Redis)', 'Distributed S3 Storage', 'Event Streaming (SSE)', 'Microservices Architecture'],
  keyWork: 'Architecture of CarieCheck Multistage AI Diagnostic Platform & Databahn.ai Go Workflow Backend',
  metrics: 'Production-Deployed Systems • End-to-End Delivery',
};

export const DistributedSystemCanvas: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('core');

  const selectedData =
    selectedId === 'core'
      ? INTERSECTION_CORE
      : DOMAINS.find((d) => d.id === selectedId) || DOMAINS[0];

  return (
    <div className="relative w-full rounded-3xl border border-white/10 bg-[#070b14]/90 overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-white/10 bg-[#090f1e]/90 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-white font-bold tracking-wider">
            CAPABILITY CONVERGENCE MATRIX
          </span>
        </div>
        <span className="text-slate-400 text-[11px] hidden sm:inline">
          INTERACTIVE VENN ARCHITECTURE
        </span>
      </div>

      {/* Domain Quick Selectors */}
      <div className="p-2.5 bg-[#060a12] border-b border-white/5 flex flex-wrap gap-1.5 justify-center">
        <button
          onClick={() => setSelectedId('core')}
          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedId === 'core'
              ? 'bg-purple-500/25 text-purple-300 border border-purple-500/50 shadow-[0_0_12px_rgba(192,132,252,0.35)]'
              : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>SYSTEM DESIGN (CORE)</span>
        </button>

        {DOMAINS.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedId(d.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedId === d.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
            <span>{d.shortName}</span>
          </button>
        ))}
      </div>

      {/* Responsive SVG Venn Diagram Canvas */}
      <div className="relative p-4 sm:p-6 flex items-center justify-center min-h-[320px] tech-grid-bg overflow-hidden">
        {/* Ambient radial blur */}
        <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-[380px] aspect-square">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full drop-shadow-2xl"
          >
            <defs>
              <radialGradient id="grad-backend" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-agentic" cx="60%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-vision" cx="40%" cy="60%" r="60%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-swe" cx="60%" cy="60%" r="60%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.5" />
              </radialGradient>
            </defs>

            {/* 4 Overlapping Circles */}
            {DOMAINS.map((d) => {
              const isSelected = selectedId === d.id;
              return (
                <g
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <circle
                    cx={d.cx}
                    cy={d.cy}
                    r={d.r}
                    fill={`url(#grad-${d.id})`}
                    stroke={isSelected ? d.color : 'rgba(255,255,255,0.2)'}
                    strokeWidth={isSelected ? '3' : '1.5'}
                    strokeDasharray={isSelected ? 'none' : '4,3'}
                    className="hover:stroke-white transition-all"
                  />
                </g>
              );
            })}

            {/* Central Convergence Intersection (Core Circle) */}
            <g
              onClick={() => setSelectedId('core')}
              className="cursor-pointer transition-all duration-300 group"
            >
              <circle
                cx={200}
                cy={200}
                r={44}
                fill="url(#grad-core)"
                stroke={selectedId === 'core' ? '#f3e8ff' : '#c084fc'}
                strokeWidth={selectedId === 'core' ? '3' : '2'}
                className="group-hover:scale-105 transition-all"
              />
              <text
                x={200}
                y={196}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="800"
                fontFamily="sans-serif"
                letterSpacing="0.05em"
              >
                SYSTEM DESIGN
              </text>
              <text
                x={200}
                y={212}
                textAnchor="middle"
                fill="#f3e8ff"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="600"
              >
                & ARCHITECTURE
              </text>
            </g>

            {/* Domain Labels on Circles */}
            {/* Top-Left: Backend */}
            <text x={95} y={115} fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="sans-serif">
              Backend Systems
            </text>
            <text x={95} y={130} fill="#7dd3fc" fontSize="9" fontFamily="monospace">
              Go • Spring • S3 • Redis
            </text>

            {/* Top-Right: Agentic */}
            <text x={235} y={115} fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="sans-serif">
              Agentic AI
            </text>
            <text x={235} y={130} fill="#a5b4fc" fontSize="9" fontFamily="monospace">
              10K+ Vectors • LLMs
            </text>

            {/* Bottom-Left: Vision */}
            <text x={85} y={290} fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="sans-serif">
              Deep Learning & CV
            </text>
            <text x={85} y={305} fill="#6ee7b7" fontSize="9" fontFamily="monospace">
              YOLO • MobileNet • VLMs
            </text>

            {/* Bottom-Right: SWE */}
            <text x={235} y={290} fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="sans-serif">
              Algorithms & SWE
            </text>
            <text x={235} y={305} fill="#fde68a" fontSize="9" fontFamily="monospace">
              550+ DSA • LeetCode 1671
            </text>
          </svg>
        </div>
      </div>

      {/* Selected Domain / Synthesis Inspection Drawer */}
      <div className="border-t border-white/10 bg-[#060a12] p-4 sm:p-5 font-sans space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selectedData.color }}
            />
            <h4 className="text-sm font-bold text-white tracking-wide">
              {selectedData.name}
            </h4>
          </div>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40">
            {selectedData.metrics}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {selectedData.summary}
        </p>

        {/* Technologies Pills */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
            TECHNOLOGIES & TOOLCHAIN
          </span>
          <div className="flex flex-wrap gap-1.5">
            {selectedData.technologies.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-white/10 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Applied Engineering Evidence */}
        <div className="pt-2 border-t border-white/5 flex items-start gap-2 text-xs font-mono text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
          <span>
            <strong className="text-slate-200 font-sans">Applied in Production:</strong>{' '}
            {selectedData.keyWork}
          </span>
        </div>
      </div>
    </div>
  );
};
