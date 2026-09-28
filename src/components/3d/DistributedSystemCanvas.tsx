import React, { useState, useEffect } from 'react';
import {
  Server,
  Brain,
  Terminal,
  Eye,
  Network,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

interface DomainNode {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  color: string;
  cx: number;
  cy: number;
  r: number;
  icon: React.ReactNode;
  summary: string;
  coreConcepts: string[];
  techStack: string[];
  verifiedMetric: string;
  appliedWork: string;
}

// 5 Equal nodes in a symmetrical pentagonal mesh: ViewBox 440 x 340, Center (220, 165), Radius 120
const EQUAL_DOMAINS: DomainNode[] = [
  {
    id: 'backend',
    name: 'Backend Systems',
    shortName: 'Backend',
    subtitle: 'Go • Spring • Microservices',
    color: '#38bdf8', // Cyan
    cx: 220,
    cy: 48,
    r: 45,
    icon: <Server className="w-4 h-4 text-cyan-400" />,
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
    cx: 334,
    cy: 130,
    r: 45,
    icon: <Network className="w-4 h-4 text-indigo-400" />,
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
    cx: 290,
    cy: 260,
    r: 45,
    icon: <Brain className="w-4 h-4 text-purple-400" />,
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
    cx: 150,
    cy: 260,
    r: 45,
    icon: <Eye className="w-4 h-4 text-emerald-400" />,
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
    cx: 106,
    cy: 130,
    r: 45,
    icon: <Terminal className="w-4 h-4 text-amber-400" />,
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

// Complete graph connections (all equal pairs connected)
const CONNECTIONS: [number, number][] = [
  // Outer perimeter loop
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  // Cross mesh connections
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 4],
];

export const DistributedSystemCanvas: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('backend');
  const [pulseProgress, setPulseProgress] = useState(0);

  // Smooth pulse loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseProgress((prev) => (prev + 1) % 100);
    }, 45);
    return () => clearInterval(timer);
  }, []);

  const activeData =
    EQUAL_DOMAINS.find((d) => d.id === selectedId) || EQUAL_DOMAINS[0];

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
            EQUAL ENGINEERING COMPETENCY MESH
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="text-cyan-400 font-semibold">5 / 5 CORE PILLARS</span>
          <span className="text-slate-600">•</span>
          <span>FULLY INTERCONNECTED</span>
        </div>
      </div>

      {/* Symmetrical Equal Peer Mesh Visual */}
      <div className="relative p-3 sm:p-5 flex items-center justify-center min-h-[300px] tech-grid-bg overflow-hidden">
        {/* Ambient radial depth glow */}
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-[440px] aspect-[440/340]">
          <svg viewBox="0 0 440 340" className="w-full h-full drop-shadow-2xl">
            <defs>
              {EQUAL_DOMAINS.map((d) => (
                <radialGradient key={`grad-${d.id}`} id={`grad-${d.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={d.color} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={d.color} stopOpacity="0.08" />
                </radialGradient>
              ))}
            </defs>

            {/* Complete Interconnecting Network Mesh Lines */}
            {CONNECTIONS.map(([i, j], idx) => {
              const d1 = EQUAL_DOMAINS[i];
              const d2 = EQUAL_DOMAINS[j];
              const isHighlighted = selectedId === d1.id || selectedId === d2.id;

              return (
                <g key={`edge-${idx}`}>
                  <line
                    x1={d1.cx}
                    y1={d1.cy}
                    x2={d2.cx}
                    y2={d2.cy}
                    stroke={isHighlighted ? d1.color : 'rgba(255,255,255,0.12)'}
                    strokeWidth={isHighlighted ? '1.8' : '0.8'}
                    strokeDasharray={isHighlighted ? 'none' : '3,3'}
                    opacity={isHighlighted ? 0.8 : 0.4}
                  />

                  {/* Flowing signal packet along the edge */}
                  {isHighlighted && (
                    <circle
                      cx={d1.cx + ((d2.cx - d1.cx) * (pulseProgress % 100)) / 100}
                      cy={d1.cy + ((d2.cy - d1.cy) * (pulseProgress % 100)) / 100}
                      r={2}
                      fill={d1.color}
                      className="drop-shadow-[0_0_6px_currentColor]"
                    />
                  )}
                </g>
              );
            })}

            {/* 5 Equal Circular Nodes */}
            {EQUAL_DOMAINS.map((d) => {
              const isSelected = selectedId === d.id;

              return (
                <g
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className="cursor-pointer transition-all duration-300 group"
                >
                  {/* Outer selection ring */}
                  {isSelected && (
                    <circle
                      cx={d.cx}
                      cy={d.cy}
                      r={d.r + 5}
                      fill="none"
                      stroke={d.color}
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      className="animate-spin"
                      style={{ transformOrigin: `${d.cx}px ${d.cy}px`, animationDuration: '8s' }}
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={d.cx}
                    cy={d.cy}
                    r={d.r}
                    fill={`url(#grad-${d.id})`}
                    stroke={isSelected ? d.color : 'rgba(255,255,255,0.25)'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    className="group-hover:stroke-white transition-all shadow-xl"
                  />

                  {/* Domain Name */}
                  <text
                    x={d.cx}
                    y={d.cy - 7}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="800"
                    fontFamily="sans-serif"
                    letterSpacing="0.02em"
                  >
                    {d.shortName}
                  </text>

                  {/* Micro Tech Pill */}
                  <text
                    x={d.cx}
                    y={d.cy + 10}
                    textAnchor="middle"
                    fill={d.color}
                    fontSize="8"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {d.techStack[0]} • {d.techStack[1]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Domain Quick-Select Filter Tabs */}
      <div className="px-3 py-2 bg-[#060a12] border-t border-b border-white/5 flex flex-wrap gap-1.5 justify-center">
        {EQUAL_DOMAINS.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedId(d.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedId === d.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'bg-slate-900/50 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
            <span>{d.name}</span>
          </button>
        ))}
      </div>

      {/* Selected Domain Breakdown Drawer */}
      <div className="bg-[#05080f] p-4 sm:p-5 font-sans space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2">
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

        <p className="text-xs text-slate-300 leading-relaxed">
          {activeData.summary}
        </p>

        {/* Mastered Concepts Badges */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
            MASTERED ARCHITECTURAL CONCEPTS
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
