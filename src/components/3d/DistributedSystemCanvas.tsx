import React, { useState, useEffect } from 'react';
import {
  Server,
  Brain,
  Terminal,
  Eye,
  Network,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

interface DomainNode {
  id: string;
  name: string;
  shortName: string;
  color: string;
  glowColor: string;
  cx: number;
  cy: number;
  r: number;
  icon: React.ReactNode;
  tagline: string;
  coreConcepts: string[];
  techStack: string[];
  verifiedMetric: string;
  appliedWork: string;
}

const DOMAIN_NODES: DomainNode[] = [
  {
    id: 'backend',
    name: 'Backend & Microservices',
    shortName: 'Backend Systems',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    cx: 95,
    cy: 85,
    r: 58,
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    tagline: 'High-throughput microservices, dynamic schema abstraction & API orchestration.',
    coreConcepts: [
      'Microservices Orchestration',
      'Dynamic Schema Transformations',
      'REST & Swagger / OpenAPI Contracts',
      'Public-to-Private Field Mapping',
      'Stateless Ingress Routing',
    ],
    techStack: ['Go', 'Spring Boot', 'FastAPI', 'Node.js', 'REST APIs', 'Swagger', 'Docker'],
    verifiedMetric: '220+ Config Abstractions • Go Workflow Backend',
    appliedWork: 'Engineered unified Spring Boot API abstraction layer for 220+ source/destination configs with dynamic Swagger schemas at Databahn.ai.',
  },
  {
    id: 'agentic',
    name: 'Agentic AI & Reasoning Systems',
    shortName: 'Agentic AI',
    color: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.4)',
    cx: 365,
    cy: 85,
    r: 58,
    icon: <Brain className="w-5 h-5 text-indigo-400" />,
    tagline: 'Multi-agent decision loops, vector semantic search over embeddings & reasoning.',
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
    name: 'Deep Learning & Computer Vision',
    shortName: 'Deep Learning & CV',
    color: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    cx: 95,
    cy: 285,
    r: 58,
    icon: <Eye className="w-5 h-5 text-emerald-400" />,
    tagline: 'Multistage neural network pipelines: CNN view verification, YOLO & VLMs.',
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
    name: 'Data Structures & Algorithms',
    shortName: 'Algorithms & SWE',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    cx: 365,
    cy: 285,
    r: 58,
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    tagline: 'Competitive programming rigor, asymptotic complexity, graphs & DP.',
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

const CENTER_HUB = {
  id: 'system-design',
  name: 'System Design & Architecture',
  shortName: 'System Design Hub',
  color: '#c084fc',
  glowColor: 'rgba(192, 132, 252, 0.5)',
  cx: 230,
  cy: 185,
  r: 54,
  tagline: 'Architecting high availability, decoupled storage, caching tiers, and event streaming.',
  coreConcepts: [
    'Memory Decoupling (S3 + Redis)',
    'Real-time Server-Sent Events (SSE)',
    'Adaptive Polling (10s → 45s, 3× cut)',
    'Shared Infra Test Chaining (5-6 min saved)',
    'High Concurrency & Fault Tolerance',
  ],
  techStack: ['Redis', 'Amazon S3', 'Server-Sent Events (SSE)', 'Kafka / Async', 'Microservices'],
  verifiedMetric: 'Zero Heap Spikes • ~3× Request Cut • Real-Time SSE',
  appliedWork: 'Engineered presigned S3 + Redis case caching avoiding backend OOM crashes on high-res photos, streaming real-time SSE progress.',
};

export const DistributedSystemCanvas: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('system-design');
  const [pulseStep, setPulseStep] = useState(0);

  // Pulse animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseStep((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const activeData =
    selectedId === 'system-design'
      ? CENTER_HUB
      : DOMAIN_NODES.find((n) => n.id === selectedId) || CENTER_HUB;

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
            SYSTEMS ARCHITECTURE & CAPABILITY RADAR
          </span>
        </div>
        <span className="text-slate-400 text-[11px] hidden sm:inline">
          5 CONNECTED DOMAINS
        </span>
      </div>

      {/* Visual Orbital SVG Diagram */}
      <div className="relative p-3 sm:p-5 flex items-center justify-center min-h-[300px] tech-grid-bg overflow-hidden">
        {/* Glow backdrop behind center */}
        <div className="absolute w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-[460px] aspect-[460/370]">
          <svg viewBox="0 0 460 370" className="w-full h-full drop-shadow-2xl">
            <defs>
              {/* Gradients for Nodes */}
              <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.15" />
              </radialGradient>
              <radialGradient id="grad-backend" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-agentic" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#4338ca" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-vision" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="grad-swe" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#b45309" stopOpacity="0.1" />
              </radialGradient>
            </defs>

            {/* Connecting Geometric Lines between Center and Satellites */}
            {DOMAIN_NODES.map((d) => {
              const isSelected = selectedId === d.id || selectedId === 'system-design';
              return (
                <g key={`line-${d.id}`}>
                  {/* Base connection line */}
                  <line
                    x1={CENTER_HUB.cx}
                    y1={CENTER_HUB.cy}
                    x2={d.cx}
                    y2={d.cy}
                    stroke={isSelected ? d.color : 'rgba(255,255,255,0.15)'}
                    strokeWidth={isSelected ? '2' : '1'}
                    strokeDasharray={isSelected ? 'none' : '4,4'}
                  />

                  {/* Flowing packet pulse along the line */}
                  <circle
                    cx={CENTER_HUB.cx + ((d.cx - CENTER_HUB.cx) * (pulseStep % 100)) / 100}
                    cy={CENTER_HUB.cy + ((d.cy - CENTER_HUB.cy) * (pulseStep % 100)) / 100}
                    r={2.5}
                    fill={d.color}
                    className="drop-shadow-[0_0_6px_currentColor]"
                  />
                </g>
              );
            })}

            {/* Satellite Circles */}
            {DOMAIN_NODES.map((d) => {
              const isSelected = selectedId === d.id;

              return (
                <g
                  key={d.id}
                  onClick={() => setSelectedId(d.id)}
                  className="cursor-pointer transition-all duration-300 group"
                >
                  {/* Outer pulse ring on select */}
                  {isSelected && (
                    <circle
                      cx={d.cx}
                      cy={d.cy}
                      r={d.r + 6}
                      fill="none"
                      stroke={d.color}
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                      className="animate-spin"
                      style={{ transformOrigin: `${d.cx}px ${d.cy}px`, animationDuration: '8s' }}
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    cx={d.cx}
                    cy={d.cy}
                    r={d.r}
                    fill={`url(#grad-${d.id})`}
                    stroke={isSelected ? d.color : 'rgba(255,255,255,0.25)'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    className="group-hover:stroke-white transition-all"
                  />

                  {/* Node Title */}
                  <text
                    x={d.cx}
                    y={d.cy - 12}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    {d.shortName.split(' ')[0]}
                  </text>
                  <text
                    x={d.cx}
                    y={d.cy + 3}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    {d.shortName.split(' ').slice(1).join(' ')}
                  </text>

                  {/* Micro subtext */}
                  <text
                    x={d.cx}
                    y={d.cy + 22}
                    textAnchor="middle"
                    fill={d.color}
                    fontSize="8.5"
                    fontFamily="monospace"
                  >
                    {d.techStack[0]} • {d.techStack[1]}
                  </text>
                </g>
              );
            })}

            {/* Center Hub: SYSTEM DESIGN & ARCHITECTURE */}
            <g
              onClick={() => setSelectedId('system-design')}
              className="cursor-pointer transition-all duration-300 group"
            >
              {/* Outer rotating dash ring */}
              <circle
                cx={CENTER_HUB.cx}
                cy={CENTER_HUB.cy}
                r={CENTER_HUB.r + 7}
                fill="none"
                stroke={selectedId === 'system-design' ? '#c084fc' : 'rgba(192, 132, 252, 0.4)'}
                strokeWidth={selectedId === 'system-design' ? '2' : '1'}
                strokeDasharray="6,4"
                className="animate-spin"
                style={{
                  transformOrigin: `${CENTER_HUB.cx}px ${CENTER_HUB.cy}px`,
                  animationDuration: '12s',
                }}
              />

              {/* Center Main Circle */}
              <circle
                cx={CENTER_HUB.cx}
                cy={CENTER_HUB.cy}
                r={CENTER_HUB.r}
                fill="url(#grad-center)"
                stroke={selectedId === 'system-design' ? '#e9d5ff' : '#c084fc'}
                strokeWidth={selectedId === 'system-design' ? '3' : '2'}
                className="group-hover:scale-105 transition-all shadow-xl"
              />

              {/* Center Hub Text */}
              <text
                x={CENTER_HUB.cx}
                y={CENTER_HUB.cy - 12}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="800"
                fontFamily="sans-serif"
                letterSpacing="0.06em"
              >
                SYSTEM DESIGN
              </text>
              <text
                x={CENTER_HUB.cx}
                y={CENTER_HUB.cy + 3}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                & ARCHITECTURE
              </text>
              <text
                x={CENTER_HUB.cx}
                y={CENTER_HUB.cy + 19}
                textAnchor="middle"
                fill="#c084fc"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="600"
              >
                [CENTRAL HUB]
              </text>
            </g>
          </svg>
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

        <p className="text-xs text-slate-300 leading-relaxed">
          {activeData.tagline}
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
