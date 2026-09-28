import React, { useState } from 'react';
import {
  Server,
  Brain,
  Terminal,
  Eye,
  Network,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';

interface DomainItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  color: string;
  accentBg: string;
  borderHover: string;
  icon: React.ReactNode;
  concepts: string[];
  techStack: string[];
  evidence: string;
}

const DOMAINS: DomainItem[] = [
  {
    id: 'backend',
    title: 'Backend Systems',
    category: 'MICROSERVICES & APIS',
    metric: '220+ Config Abstractions',
    color: '#38bdf8',
    accentBg: 'from-cyan-950/40 to-slate-900/40',
    borderHover: 'hover:border-cyan-400/60',
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    concepts: [
      'Microservices Architecture & Ingress',
      'Dynamic Schema Transformation Engine',
      'Swagger / OpenAPI Automated Contracts',
      'Public-to-Private Model Mapping',
    ],
    techStack: ['Go', 'Spring Boot', 'FastAPI', 'Node.js', 'Docker', 'REST'],
    evidence: 'Engineered unified Spring Boot API layer for 220+ source/destination configs at Databahn.ai.',
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    category: 'CLOUD & ARCHITECTURE',
    metric: '~3× Request Cut • Zero OOM',
    color: '#818cf8',
    accentBg: 'from-indigo-950/40 to-slate-900/40',
    borderHover: 'hover:border-indigo-400/60',
    icon: <Network className="w-5 h-5 text-indigo-400" />,
    concepts: [
      'Memory Decoupling (Amazon S3 + Redis)',
      'Server-Sent Events (SSE) Progress Streaming',
      'Adaptive Polling Optimization (10s → 45s)',
      'Shared Infra Chaining (~5-6 min saved)',
    ],
    techStack: ['Redis', 'Amazon S3', 'Server-Sent Events', 'Kafka/Async', 'PostgreSQL'],
    evidence: 'Presigned S3 URLs + Redis metadata keys eliminated memory heap crashes on multi-image uploads.',
  },
  {
    id: 'agentic',
    title: 'Agentic AI Systems',
    category: 'REASONING & VECTORS',
    metric: '10K+ Vector Corpus • Top-5',
    color: '#c084fc',
    accentBg: 'from-purple-950/40 to-slate-900/40',
    borderHover: 'hover:border-purple-400/60',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    concepts: [
      'Two-Agent Legal Reasoning Pipeline',
      'Dense Embeddings & Cosine Similarity',
      'Autonomous Ticket Classification Agent',
      'Context Budgeting & Anti-Hallucination',
    ],
    techStack: ['Agentic AI', 'Vector Search', 'Cosine Similarity', 'FastAPI', 'External APIs'],
    evidence: 'Built NyayaGPT 2-agent legal search over 10K+ cases and autonomous TestRail test triaging.',
  },
  {
    id: 'vision',
    title: 'Deep Learning & CV',
    category: 'COMPUTER VISION',
    metric: '~98% / ~95% / ~85% Acc',
    color: '#34d399',
    accentBg: 'from-emerald-950/40 to-slate-900/40',
    borderHover: 'hover:border-emerald-400/60',
    icon: <Eye className="w-5 h-5 text-emerald-400" />,
    concepts: [
      'MobileNet Multi-Angle View Validation',
      'YOLO Spatial Tooth Segmentation',
      '8 Parallel Specialized VLM Ensembles',
      'Automated Clinical DMFT Scoring & SVG',
    ],
    techStack: ['MobileNet', 'YOLOv8', 'VLM Agents', 'PyTorch', 'OpenCV'],
    evidence: 'Delivered CarieCheck clinical dental platform processing 8 photos + 14 questions for Bharti Hospitals.',
  },
  {
    id: 'dsa',
    title: 'Algorithms & SWE',
    category: 'COMPETITIVE PROBLEM SOLVING',
    metric: '550+ Solved • Peak LC 1671',
    color: '#fbbf24',
    accentBg: 'from-amber-950/40 to-slate-900/40',
    borderHover: 'hover:border-amber-400/60',
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    concepts: [
      'Graph Theory & DAG Scheduling',
      'Dynamic Programming State Spaces',
      'Tree Traversals & Priority Heaps',
      'Asymptotic Complexity Optimization',
    ],
    techStack: ['C++', 'Competitive DSA', 'System Design', 'Operating Systems', 'DBMS'],
    evidence: '550+ problems solved with peak 1671 contest rating, applying graph and caching algorithms to systems.',
  },
];

export const DistributedSystemCanvas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('backend');
  const activeDomain = DOMAINS.find((d) => d.id === activeTab) || DOMAINS[0];

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
            CORE ENGINEERING COMPETENCIES
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="text-cyan-400 font-semibold">ALL 5 DISCIPLINES VERIFIED</span>
        </div>
      </div>

      {/* Visual Navigation Nodes (Circular Pods) */}
      <div className="p-4 sm:p-5 border-b border-white/5 bg-[#060a12] tech-grid-bg">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DOMAINS.map((domain) => {
            const isSelected = activeTab === domain.id;

            return (
              <div
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-2 relative ${
                  isSelected
                    ? 'bg-[#0f172a] border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-[1.02]'
                    : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/70'
                }`}
              >
                {/* Glowing Circular Icon Pod */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border transition-all"
                  style={{
                    backgroundColor: isSelected ? 'rgba(15, 23, 42, 0.9)' : 'rgba(11, 16, 27, 0.6)',
                    borderColor: isSelected ? domain.color : 'rgba(255,255,255,0.1)',
                    boxShadow: isSelected ? `0 0 16px ${domain.color}40` : undefined,
                  }}
                >
                  {domain.icon}
                </div>

                {/* Title */}
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">
                    {domain.title}
                  </h4>
                  <span
                    className="font-mono text-[10px] block mt-0.5"
                    style={{ color: domain.color }}
                  >
                    {domain.metric.split('•')[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rich Detailed Conceptual Breakdown of Selected Domain */}
      <div className="p-5 sm:p-6 bg-gradient-to-b from-[#070c18] to-[#050810] space-y-4 font-sans">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div className="flex items-center gap-3">
            <div
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 shrink-0"
              style={{ color: activeDomain.color }}
            >
              {activeDomain.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  {activeDomain.title}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300">
                  {activeDomain.category}
                </span>
              </div>
              <span className="font-mono text-xs text-cyan-300">
                {activeDomain.metric}
              </span>
            </div>
          </div>
        </div>

        {/* Mastered Concepts Grid */}
        <div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            // MASTERED ARCHITECTURAL CONCEPTS & PATTERNS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {activeDomain.concepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-slate-900/70 border border-white/5 flex items-center gap-2 text-slate-200"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: activeDomain.color }}
                />
                <span className="font-medium">{concept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applied Engineering Evidence */}
        <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // PRODUCTION EVIDENCE
          </span>
          <p className="text-slate-300 leading-relaxed font-sans">
            {activeDomain.evidence}
          </p>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">
            TOOLCHAIN:
          </span>
          {activeDomain.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
