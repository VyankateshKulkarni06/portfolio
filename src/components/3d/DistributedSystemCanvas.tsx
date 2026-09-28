import React, { useState } from 'react';
import {
  Server,
  Brain,
  Terminal,
  Eye,
  Network,
  CheckCircle2,
  Code2,
  Cpu,
} from 'lucide-react';

interface DomainPillar {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  color: string;
  glowColor: string;
  badgeBg: string;
  icon: React.ReactNode;
  summary: string;
  coreConcepts: string[];
  techStack: string[];
  verifiedMetric: string;
  appliedWork: string;
}

const DOMAIN_CIRCLES: DomainPillar[] = [
  {
    id: 'backend',
    name: 'Backend Systems',
    shortName: 'Backend',
    subtitle: 'Go • Spring • Microservices',
    color: '#38bdf8', // Cyan
    glowColor: 'rgba(56, 189, 248, 0.4)',
    badgeBg: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50',
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    summary: 'High-throughput microservices, dynamic schema abstraction layers, and API orchestration.',
    coreConcepts: [
      'Microservices Orchestration',
      'Dynamic Schema Transformations',
      'REST & Swagger / OpenAPI Specs',
      'Public-to-Private Field Mapping',
      'Stateless Ingress Routing',
    ],
    techStack: ['Go', 'Spring Boot', 'FastAPI', 'Node.js', 'REST APIs', 'Swagger', 'Docker'],
    verifiedMetric: '220+ Config Abstractions • Go Workflow Backend',
    appliedWork: 'Engineered unified Spring Boot API abstraction layer for 220+ source/destination configs with dynamic Swagger schemas at Databahn.ai.',
  },
  {
    id: 'distributed',
    name: 'Distributed Systems',
    shortName: 'Distributed',
    subtitle: 'Redis • S3 • SSE Streaming',
    color: '#818cf8', // Indigo
    glowColor: 'rgba(129, 140, 248, 0.4)',
    badgeBg: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50',
    icon: <Network className="w-6 h-6 text-indigo-400" />,
    summary: 'Decoupled state management, memory optimization, and real-time streaming interfaces.',
    coreConcepts: [
      'Memory Decoupling (S3 + Redis)',
      'Server-Sent Events (SSE) Streaming',
      'Adaptive Polling (10s → 45s, 3× cut)',
      'Shared Infra Test Chaining (5-6 min saved)',
      'High Concurrency & Fault Tolerance',
    ],
    techStack: ['Redis', 'Amazon S3', 'Server-Sent Events (SSE)', 'Kafka / Async', 'Microservices'],
    verifiedMetric: 'Zero Heap Spikes • ~3× Request Cut',
    appliedWork: 'Designed presigned S3 + Redis case caching avoiding backend OOM crashes on high-res photos, streaming real-time SSE progress.',
  },
  {
    id: 'agentic',
    name: 'Agentic AI Systems',
    shortName: 'Agentic AI',
    subtitle: 'Multi-Agent • 10K+ Vectors',
    color: '#c084fc', // Purple
    glowColor: 'rgba(192, 132, 252, 0.4)',
    badgeBg: 'bg-purple-950/60 text-purple-300 border-purple-800/50',
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    summary: 'Multi-agent decision loops, vector semantic search over embeddings, and autonomous workflows.',
    coreConcepts: [
      'Two-Agent Legal Reasoning Loops',
      'Dense Vector Embeddings & Similarity',
      'Top-5 Nearest Neighbor Retrieval',
      'Autonomous Ticket Classification Agent',
      'Context Budgeting & Anti-Hallucination',
    ],
    techStack: ['Agentic AI', 'Vector Search', 'Cosine Similarity', 'FastAPI', 'External APIs'],
    verifiedMetric: '10K+ Vector Case Corpus • 270+ Tickets Classified',
    appliedWork: 'Built NyayaGPT two-agent legal query reasoning system over 10K+ case records and an agentic classifier triaging TestRail backend cases.',
  },
  {
    id: 'vision',
    name: 'Deep Learning & CV',
    shortName: 'Vision / DL',
    subtitle: 'MobileNet • YOLO • 8 VLMs',
    color: '#34d399', // Emerald
    glowColor: 'rgba(52, 211, 153, 0.4)',
    badgeBg: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50',
    icon: <Eye className="w-6 h-6 text-emerald-400" />,
    summary: 'Multistage neural network pipelines: CNN view verification, YOLO spatial segmentation, and 8 parallel VLM ensembles.',
    coreConcepts: [
      'MobileNet Transfer Learning',
      'YOLO Spatial Tooth Segmentation',
      '8 Parallel Specialized VLM Ensembles',
      'Automated DMFT Scoring Parser',
      'Clinical Odontogram Vector Reports',
    ],
    techStack: ['MobileNet', 'YOLOv8', 'VLM Agents', 'PyTorch', 'TensorFlow', 'OpenCV'],
    verifiedMetric: '~98% View Acc • ~95% Tooth Acc • ~85% Disease Acc',
    appliedWork: 'Architected and deployed CarieCheck live AI diagnosis platform processing 8 photos + 14 questions into automated tooth-wise medical reports.',
  },
  {
    id: 'swe',
    name: 'Algorithms & DSA',
    shortName: 'DSA / SWE',
    subtitle: '550+ Solved • LeetCode 1671',
    color: '#fbbf24', // Amber
    glowColor: 'rgba(251, 191, 36, 0.4)',
    badgeBg: 'bg-amber-950/60 text-amber-300 border-amber-800/50',
    icon: <Terminal className="w-6 h-6 text-amber-400" />,
    summary: 'Competitive programming rigor, asymptotic complexity optimization, graph algorithms, and clean system design.',
    coreConcepts: [
      'Graph Traversal & DAG Scheduling',
      'Dynamic Programming State Spaces',
      'Tree Traversals & Priority Heaps',
      'Asymptotic Complexity Optimization',
      'Concurrency & Operating Systems',
    ],
    techStack: ['C++', 'Competitive DSA', 'System Design', 'Operating Systems', 'DBMS', 'OOP'],
    verifiedMetric: '550+ Problems Solved • 1671 Peak LeetCode Rating',
    appliedWork: '550+ DSA problems solved in C++ with 1671 contest rating, applying graph dependency and caching algorithms to production workflows.',
  },
];

export const DistributedSystemCanvas: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('backend');
  const activeData =
    DOMAIN_CIRCLES.find((d) => d.id === selectedId) || DOMAIN_CIRCLES[0];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#070b14]/90 overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col font-sans">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-white/10 bg-[#090f1e]/90 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-white font-bold tracking-wider">
            CORE ENGINEERING DOMAINS
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="text-cyan-400 font-semibold">5 STANDALONE PILLARS</span>
          <span className="text-slate-600">•</span>
          <span>ALL EQUAL DEPTH</span>
        </div>
      </div>

      {/* Standalone Circular Nodes (No Connecting Lines) */}
      <div className="p-6 sm:p-8 flex items-center justify-center tech-grid-bg">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-2xl justify-items-center">
          {DOMAIN_CIRCLES.map((d) => {
            const isSelected = selectedId === d.id;

            return (
              <div
                key={d.id}
                onClick={() => setSelectedId(d.id)}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                {/* Independent Glowing Circle */}
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center p-3 text-center transition-all duration-300 ${
                    isSelected
                      ? 'scale-105 ring-2 ring-white/60 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                      : 'hover:scale-105 border border-white/10 hover:border-white/30'
                  }`}
                  style={{
                    backgroundColor: isSelected ? 'rgba(15, 23, 42, 0.95)' : 'rgba(11, 16, 27, 0.7)',
                    borderColor: isSelected ? d.color : undefined,
                    boxShadow: isSelected ? `0 0 25px ${d.glowColor}` : undefined,
                  }}
                >
                  {/* Subtle inner pulse ring */}
                  {isSelected && (
                    <div
                      className="absolute inset-1 rounded-full border border-dashed animate-spin pointer-events-none"
                      style={{
                        borderColor: d.color,
                        animationDuration: '10s',
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div className="mb-1">{d.icon}</div>

                  {/* Domain Title */}
                  <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight">
                    {d.shortName}
                  </span>
                </div>

                {/* Subtitle tag below circle */}
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-all text-center max-w-[110px] truncate ${
                    isSelected
                      ? d.badgeBg
                      : 'bg-slate-900/60 text-slate-400 border-white/5'
                  }`}
                >
                  {d.techStack[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Domain Breakdown Drawer */}
      <div className="border-t border-white/10 bg-[#060a12] p-4 sm:p-5 font-sans space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: activeData.color }}
            />
            <h4 className="text-sm font-bold text-white tracking-wide">
              {activeData.name}
            </h4>
          </div>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40">
            {activeData.verifiedMetric}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {activeData.summary}
        </p>

        {/* Mastered Concepts Badges */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
            CONCEPTS & ARCHITECTURAL PATTERNS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeData.coreConcepts.map((concept) => (
              <span
                key={concept}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-white/10 text-slate-200"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Applied Engineering Evidence */}
        <div className="pt-2 border-t border-white/5 flex items-start gap-2 text-xs font-mono text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
          <span>
            <strong className="text-slate-200 font-sans">Applied in Practice:</strong>{' '}
            {activeData.appliedWork}
          </span>
        </div>
      </div>
    </div>
  );
};
