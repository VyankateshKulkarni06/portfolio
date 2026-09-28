import React, { useState } from 'react';
import {
  Server,
  Brain,
  Cpu,
  Layers,
  Terminal,
  Eye,
  CheckCircle2,
  Zap,
  Network,
  Database,
  ArrowRight,
  Code2,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

interface ConceptPillar {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  badgeBg: string;
  borderColor: string;
  tagline: string;
  coreConcepts: string[];
  techStack: string[];
  verifiedImpact: string;
  practicalApplication: string;
}

const CONCEPT_PILLARS: ConceptPillar[] = [
  {
    id: 'backend',
    name: 'Backend & Microservices',
    category: 'CORE SYSTEMS',
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    color: '#38bdf8',
    badgeBg: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50',
    borderColor: 'hover:border-cyan-500/50',
    tagline: 'High-throughput APIs, dynamic schema abstractions, and microservices logic.',
    coreConcepts: [
      'Microservices Orchestration',
      'Dynamic Schema Transformation',
      'REST & Swagger / OpenAPI Specs',
      'Public-to-Private Field Mapping',
      'Stateless Ingress Routing',
    ],
    techStack: ['Go', 'Spring Boot', 'FastAPI', 'Node.js', 'REST APIs', 'Swagger', 'Docker'],
    verifiedImpact: '220+ Config Abstractions • Go Workflow Backend',
    practicalApplication: 'Engineered unified Spring Boot API abstraction layer for 220+ source/destination configs with dynamic Swagger schemas at Databahn.ai.',
  },
  {
    id: 'system-design',
    name: 'Distributed Systems & Architecture',
    category: 'ARCHITECTURE',
    icon: <Network className="w-5 h-5 text-indigo-400" />,
    color: '#818cf8',
    badgeBg: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50',
    borderColor: 'hover:border-indigo-500/50',
    tagline: 'Decoupled state management, memory optimization, and event streaming.',
    coreConcepts: [
      'Memory Decoupling (S3 + Redis)',
      'Server-Sent Events (SSE) Streaming',
      'Adaptive Polling (10s → 45s)',
      'Shared Infra Chaining (5-6 min saved)',
      'High Concurrency & Fault Tolerance',
    ],
    techStack: ['Redis', 'Amazon S3', 'Server-Sent Events', 'Kafka/Async', 'PostgreSQL'],
    verifiedImpact: '~3× Request Reduction • Zero Server Heap Spikes',
    practicalApplication: 'Designed presigned S3 + Redis case caching avoiding backend OOM crashes on high-res dental photos, streaming real-time SSE progress.',
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI & Reasoning Pipelines',
    category: 'APPLIED AI',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    color: '#c084fc',
    badgeBg: 'bg-purple-950/60 text-purple-300 border-purple-800/50',
    borderColor: 'hover:border-purple-500/50',
    tagline: 'Multi-agent decision loops, vector semantic search, and autonomous workflows.',
    coreConcepts: [
      'Two-Agent Legal Reasoning Loops',
      'Dense Vector Embeddings',
      'Cosine-Similarity Search (Top-5)',
      'Automated Ticket Classification',
      'Context Budgeting & Anti-Hallucination',
    ],
    techStack: ['Agentic AI', 'Vector Search', 'Cosine Similarity', 'FastAPI', 'External APIs'],
    verifiedImpact: '10K+ Vector Case Corpus • 270+ Tickets Classified',
    practicalApplication: 'Built NyayaGPT 2-agent legal search over 10K+ case records and an agentic classifier parsing TestRail tickets for automated test triaging.',
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning & Computer Vision',
    category: 'MACHINE LEARNING',
    icon: <Eye className="w-5 h-5 text-emerald-400" />,
    color: '#34d399',
    badgeBg: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50',
    borderColor: 'hover:border-emerald-500/50',
    tagline: 'Multi-model computer vision: angle classification, spatial detection, and VLMs.',
    coreConcepts: [
      'MobileNet Transfer Learning',
      'YOLO Spatial Bounding & Segmentation',
      '8 Parallel Specialized VLM Ensembles',
      'Automated DMFT Scoring Parser',
      'Clinical Vector Odontogram Mapping',
    ],
    techStack: ['MobileNet', 'YOLOv8', 'VLM Agents', 'PyTorch/TF', 'OpenCV'],
    verifiedImpact: '~98% View Acc • ~95% Tooth Acc • ~85% Disease Acc',
    practicalApplication: 'Architected and deployed CarieCheck live AI diagnosis platform processing 8 photos + 14 questions into automated tooth-wise medical reports.',
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'COMPUTER SCIENCE',
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: '#fbbf24',
    badgeBg: 'bg-amber-950/60 text-amber-300 border-amber-800/50',
    borderColor: 'hover:border-amber-500/50',
    tagline: 'Competitive programming rigor, asymptotic complexity, and graph theory.',
    coreConcepts: [
      'Graph Traversal & DAG Scheduling',
      'Dynamic Programming State Spaces',
      'Tree Structures & Heaps',
      'Asymptotic Complexity Optimization',
      'Operating Systems & Concurrency',
    ],
    techStack: ['C++', 'Competitive DSA', 'System Design', 'Operating Systems', 'DBMS', 'OOP'],
    verifiedImpact: '550+ Problems Solved • 1671 Peak LeetCode Rating',
    practicalApplication: 'Consistently ranked top-tier with 550+ problems solved and 1671 contest rating, applying graph and caching theory to production system architectures.',
  },
];

export const DistributedSystemCanvas: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('backend');
  const activePillar =
    CONCEPT_PILLARS.find((p) => p.id === activePillarId) || CONCEPT_PILLARS[0];

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
            FULL-SPECTRUM ENGINEERING MATRIX
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="text-emerald-400 font-semibold">5 / 5 DOMAINS ACTIVE</span>
          <span className="text-slate-600">•</span>
          <span>100% PRODUCTION VERIFIED</span>
        </div>
      </div>

      {/* Main Concept Pillars List */}
      <div className="p-3 sm:p-4 space-y-2">
        {CONCEPT_PILLARS.map((pillar) => {
          const isSelected = activePillar.id === pillar.id;

          return (
            <div
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-[#0d1627] border-cyan-500/70 shadow-[0_0_20px_rgba(56,189,248,0.2)] ring-1 ring-cyan-500/40'
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/70'
              }`}
            >
              {/* Left: Icon, Category & Name */}
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg bg-slate-900/80 border border-white/10 shrink-0"
                  style={{ color: pillar.color }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white font-sans tracking-wide">
                      {pillar.name}
                    </h4>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase ${pillar.badgeBg}`}
                    >
                      {pillar.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans mt-0.5 line-clamp-1">
                    {pillar.tagline}
                  </p>
                </div>
              </div>

              {/* Right: Key Verified Stats */}
              <div className="text-left sm:text-right shrink-0 font-mono text-xs">
                <span className="text-cyan-300 font-semibold block">
                  {pillar.verifiedImpact.split('•')[0]}
                </span>
                <span className="text-[10px] text-slate-500">
                  {pillar.techStack.slice(0, 3).join(' • ')}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Live Concept Inspector Drawer */}
      <div className="border-t border-white/10 bg-[#060a12] p-4 sm:p-5 font-sans space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              DEEP APPLICATION: {activePillar.name}
            </h4>
          </div>
          <span className="font-mono text-xs text-emerald-400">
            {activePillar.verifiedImpact}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {activePillar.practicalApplication}
        </p>

        {/* Core Concepts Badges */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
            MASTERED ARCHITECTURAL CONCEPTS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activePillar.coreConcepts.map((concept) => (
              <span
                key={concept}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/30 border border-cyan-800/40 text-cyan-200"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
          <span className="text-[10px] text-slate-500 uppercase">TOOLCHAIN:</span>
          {activePillar.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
