import React, { useState, useEffect, useRef } from 'react';
import {
  Server,
  Brain,
  Database,
  Network,
  Radio,
  Layers,
  Cpu,
  CheckCircle2,
  Terminal,
  Activity,
  Zap,
  Play,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';

interface ServiceNode {
  id: string;
  name: string;
  subtitle: string;
  protocol: string;
  metric: string;
  status: 'ACTIVE' | 'STREAMING' | 'OPTIMIZED' | 'NOMINAL';
  color: string;
  tech: string;
  details: {
    role: string;
    throughput: string;
    latency: string;
    memoryProfile: string;
    rationale: string;
  };
}

type SystemMode = 'bharti' | 'databahn' | 'nyaya';

const MODES: { id: SystemMode; label: string; badge: string }[] = [
  { id: 'bharti', label: 'AI Diagnostic Pipeline', badge: 'CarieCheck Multistage' },
  { id: 'databahn', label: 'Backend Abstraction', badge: '220+ Config Engine' },
  { id: 'nyaya', label: 'Agentic Legal Pipeline', badge: '10K+ Vector Search' },
];

const NODES_BY_MODE: Record<SystemMode, ServiceNode[]> = {
  bharti: [
    {
      id: 'ingest',
      name: 'Client Intake & S3',
      subtitle: '8 Images + 14 Questions',
      protocol: 'HTTPS / Presigned S3',
      metric: 'Zero Heap Spike',
      status: 'ACTIVE',
      color: '#38bdf8',
      tech: 'Amazon S3 + Redis',
      details: {
        role: 'Ingests high-resolution photos and diagnostic answers using presigned S3 URLs to bypass backend heap memory.',
        throughput: '8 Photo Blobs / Case',
        latency: '<120ms Ingest',
        memoryProfile: 'Decoupled (Pointers only in RAM)',
        rationale: 'Prevented Out-Of-Memory (OOM) crashes in backend during high-concurrency medical camps.',
      },
    },
    {
      id: 'validation',
      name: 'View Validation',
      subtitle: 'MobileNet Angle Verifier',
      protocol: 'TensorFlow / PyTorch',
      metric: '~98% Accuracy',
      status: 'ACTIVE',
      color: '#34d399',
      tech: 'MobileNet v2',
      details: {
        role: 'Verifies correct clinical angles (maxillary, mandibular, occlusal, anterior) before inference.',
        throughput: '8 Views Analyzed',
        latency: '45ms / Image',
        memoryProfile: 'GPU Tensor Float16',
        rationale: 'Filters blurry or misaligned submissions before expensive downstream VLM evaluation.',
      },
    },
    {
      id: 'detection',
      name: 'Tooth Boundary Locator',
      subtitle: 'YOLO Spatial Segmentation',
      protocol: 'YOLOv8 Inference',
      metric: '~95% Accuracy',
      status: 'ACTIVE',
      color: '#818cf8',
      tech: 'YOLO Custom Head',
      details: {
        role: 'Predicts high-precision 2D bounding boxes and segments individual teeth across lighting conditions.',
        throughput: '32 Teeth Bounded',
        latency: '68ms / View',
        memoryProfile: '128MB Dedicated VRAM',
        rationale: 'Isolates tooth coordinates so specialized VLM agents can evaluate pathology per tooth.',
      },
    },
    {
      id: 'vlm',
      name: '8 Specialized VLM Agents',
      subtitle: 'Tooth Pathology Evaluation',
      protocol: 'Parallel Vision-Language',
      metric: '~85% Accuracy',
      status: 'STREAMING',
      color: '#a855f7',
      tech: '8× VLM Ensemble',
      details: {
        role: '8 parallel agents classify caries, restoration integrity, enamel decay, and periodontal risk.',
        throughput: '8 Models in Parallel',
        latency: '340ms Inference',
        memoryProfile: 'Dynamic GPU Batching',
        rationale: 'Ensemble specialization beats generalist vision models on granular dental pathologies.',
      },
    },
    {
      id: 'sse',
      name: 'SSE Progress Streamer',
      subtitle: 'Real-time Diagnostic Push',
      protocol: 'Server-Sent Events (SSE)',
      metric: '<40ms Stream Latency',
      status: 'STREAMING',
      color: '#06b6d4',
      tech: 'FastAPI / Asyncio',
      details: {
        role: 'Pushes step-by-step progress telemetry and tooth-by-tooth diagnoses directly to camp clinicians.',
        throughput: 'Sub-second event dispatch',
        latency: '15ms Dispatch',
        memoryProfile: 'Lightweight Async Generator',
        rationale: 'Eliminated polling and provided immediate visual feedback during long multi-model evaluation.',
      },
    },
    {
      id: 'dmft',
      name: 'Report & DMFT Engine',
      subtitle: 'Odontogram Generator',
      protocol: 'Deterministic Parser',
      metric: 'Clinical Grade',
      status: 'NOMINAL',
      color: '#f59e0b',
      tech: 'SVG Odontogram + PDF',
      details: {
        role: 'Aggregates tooth findings into standardized clinical DMFT indices and renders vector odontograms.',
        throughput: '100% Deterministic',
        latency: '22ms Compile',
        memoryProfile: 'Minimal RAM footprint',
        rationale: 'Generates medical camp records ready for diagnostic triage and severity filtering.',
      },
    },
  ],
  databahn: [
    {
      id: 'configs',
      name: '220+ Source/Dest Configs',
      subtitle: 'Heterogeneous Schemas',
      protocol: 'Multi-Tenant Models',
      metric: '220+ Formats',
      status: 'ACTIVE',
      color: '#38bdf8',
      tech: 'Spring Boot Unified Core',
      details: {
        role: 'Standardizes 220+ distinct source and destination pipeline configurations.',
        throughput: '220+ Integrated Specs',
        latency: '<10ms Schema Resolution',
        memoryProfile: 'Cached Schema Registry',
        rationale: 'Replaced brittle per-connector code with a dynamic, unified abstraction layer.',
      },
    },
    {
      id: 'swagger',
      name: 'Dynamic Swagger & Validator',
      subtitle: 'Runtime Schema Validation',
      protocol: 'OpenAPI 3.0 / JSON Schema',
      metric: 'Zero Manual Drift',
      status: 'NOMINAL',
      color: '#34d399',
      tech: 'Spring Boot + Swagger',
      details: {
        role: 'Validates payload structures and handles public-to-private field transformations on the fly.',
        throughput: 'Dynamic Schema Gen',
        latency: '8ms Validation',
        memoryProfile: 'In-Memory Reflection Cache',
        rationale: 'Ensured total API contract consistency across hundreds of client variations.',
      },
    },
    {
      id: 'engine',
      name: 'Go Workflow Engine',
      subtitle: 'Component Definitions & Logic',
      protocol: 'gRPC / Concurrent Bus',
      metric: 'High Throughput',
      status: 'ACTIVE',
      color: '#00add8',
      tech: 'Go (Golang)',
      details: {
        role: 'Core backend orchestration engine running component workflows and state synchronization.',
        throughput: '4,500 ops/s',
        latency: '4ms Execution',
        memoryProfile: 'Goroutine Multiplexing',
        rationale: 'Go concurrency primitives provided low-overhead worker scheduling for AI pipelines.',
      },
    },
    {
      id: 'agent',
      name: 'Agentic Test Classifier',
      subtitle: 'TestRail Auto-Classification',
      protocol: 'LLM Agent Pipeline',
      metric: '270+ Cases Categorized',
      status: 'OPTIMIZED',
      color: '#a855f7',
      tech: 'Agentic Workflow',
      details: {
        role: 'Parsed test descriptions and reproduction steps to classify miscategorized backend test targets.',
        throughput: '270+ TestRail Tickets',
        latency: 'Automated Triaging',
        memoryProfile: 'Batch Execution',
        rationale: 'Unblocked engineering from manual test triage, enabling immediate automation.',
      },
    },
    {
      id: 'pytest',
      name: 'Pytest E2E Automation Suite',
      subtitle: 'Coverage: 8% → 47% in 3 Weeks',
      protocol: 'Pytest Distributed Runner',
      metric: '8% → 47% Surge',
      status: 'OPTIMIZED',
      color: '#10b981',
      tech: 'Pytest + Shared Infra',
      details: {
        role: 'Automated 270+ TestRail scenarios; chained tests and reused infrastructure across scenarios.',
        throughput: '270+ Automated Tests',
        latency: '~5–6 min saved / test',
        memoryProfile: 'Pooled Test Resources',
        rationale: 'Eliminated redundant environment teardown/bringup, saving hours of CI runtime.',
      },
    },
    {
      id: 'polling',
      name: 'Polling Rate Optimizer',
      subtitle: '10s → 45s Adaptive Poller',
      protocol: 'Async Backoff Polling',
      metric: '~3× Request Reduction',
      status: 'OPTIMIZED',
      color: '#f59e0b',
      tech: 'Adaptive Interval Tuning',
      details: {
        role: 'Increased test polling interval from 10s to 45s during long-running async test runs.',
        throughput: 'Eliminated 25k requests',
        latency: 'Deterministic Check',
        memoryProfile: 'Zero Network Flooding',
        rationale: 'Cut backend API request volume by ~3X without any loss in test verification speed.',
      },
    },
  ],
  nyaya: [
    {
      id: 'query',
      name: 'User Legal Query',
      subtitle: 'Colloquial Case Query',
      protocol: 'HTTPS Ingress',
      metric: 'Real-time NLP',
      status: 'ACTIVE',
      color: '#38bdf8',
      tech: 'FastAPI Router',
      details: {
        role: 'Ingests user legal questions regarding jurisprudence, citations, and constitutional matters.',
        throughput: 'Live User Sessions',
        latency: '12ms Ingress',
        memoryProfile: 'Stateless Stream',
        rationale: 'Provides instant entrypoint for complex multi-modal legal research queries.',
      },
    },
    {
      id: 'agent1',
      name: 'Agent 1: Retrieval Router',
      subtitle: 'Intent & Need Formulation',
      protocol: 'Agentic Decision Loop',
      metric: 'Precision Querying',
      status: 'ACTIVE',
      color: '#818cf8',
      tech: 'Reasoning Agent',
      details: {
        role: 'Analyzes legal intent, determines retrieval requirements, and formulates formal legal queries.',
        throughput: 'Semantic Parsing',
        latency: '180ms Decision',
        memoryProfile: 'Isolated Context Buffer',
        rationale: 'Isolating query intent from response formulation eliminates hallucinated precedents.',
      },
    },
    {
      id: 'vector',
      name: 'Vector Search Engine',
      subtitle: '10K+ Legal Case Records',
      protocol: 'Cosine Similarity / Top-5',
      metric: 'Top-5 Precedents',
      status: 'STREAMING',
      color: '#34d399',
      tech: 'Dense Embeddings',
      details: {
        role: 'Executes cosine-similarity search over embeddings of 10,000+ Indian legal case judgements.',
        throughput: '10,000+ Case Records',
        latency: '35ms Vector Match',
        memoryProfile: 'Indexed Embedding Space',
        rationale: 'Retrieves relevant historic judgments based on semantic legal doctrine.',
      },
    },
    {
      id: 'api',
      name: 'External Case-Law API',
      subtitle: 'Live Statute & Citation Fetch',
      protocol: 'REST / OAuth2',
      metric: 'Active Law Corpus',
      status: 'ACTIVE',
      color: '#f59e0b',
      tech: 'External Legal API',
      details: {
        role: 'Fetches active statutory amendments, live precedent statuses, and case validation citations.',
        throughput: 'Dynamic API Gateway',
        latency: '190ms External Call',
        memoryProfile: 'Payload Cache',
        rationale: 'Augments local vector corpus with real-time legal updates.',
      },
    },
    {
      id: 'agent2',
      name: 'Agent 2: Legal Synthesizer',
      subtitle: 'Context-Aware Legal Analyst',
      protocol: 'Constrained Context LLM',
      metric: 'Zero Hallucination',
      status: 'STREAMING',
      color: '#a855f7',
      tech: 'Synthesis Reasoning Agent',
      details: {
        role: 'Merges top-5 retrieved cases with external live case law to generate citation-grounded analysis.',
        throughput: 'Structured Legal Memo',
        latency: '420ms Generation',
        memoryProfile: 'Context-Budgeted Window',
        rationale: 'Forces every legal proposition to map directly to an auditable case law citation.',
      },
    },
  ],
};

export const DistributedSystemCanvas: React.FC = () => {
  const [activeMode, setActiveMode] = useState<SystemMode>('bharti');
  const nodes = NODES_BY_MODE[activeMode];
  const [selectedNode, setSelectedNode] = useState<ServiceNode>(nodes[0]);
  const [activePacketIndex, setActivePacketIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Auto-cycle data packet stream animation
  useEffect(() => {
    setSelectedNode(NODES_BY_MODE[activeMode][0]);
    const timer = setInterval(() => {
      setActivePacketIndex((prev) => (prev + 1) % NODES_BY_MODE[activeMode].length);
    }, 1200);
    return () => clearInterval(timer);
  }, [activeMode]);

  const triggerSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < nodes.length) {
        setSelectedNode(nodes[step]);
        setActivePacketIndex(step);
        step++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 600);
  };

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#070b14]/90 overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col font-sans">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-white/10 bg-[#090f1d]/90 z-10 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-white font-bold tracking-wider">
            ARCHITECTURE TELEMETRY CONSOLE
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">STATE: OBSERVABLE</span>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-white/10">
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeMode === mode.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {mode.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Mode Sub-banner */}
      <div className="px-5 py-2 bg-[#060a12] border-b border-white/5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">
            {MODES.find((m) => m.id === activeMode)?.badge}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 text-[11px]">
            {nodes.length} Connected Services • End-to-End Tracing
          </span>
        </div>

        <button
          onClick={triggerSimulation}
          disabled={isSimulating}
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 hover:bg-cyan-900/40 transition-all cursor-pointer disabled:opacity-40"
        >
          <Play className="w-3 h-3" />
          <span>{isSimulating ? 'SIMULATING...' : 'TRIGGER TRACE'}</span>
        </button>
      </div>

      {/* Main Architecture Flow Canvas */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nodes.map((node, idx) => {
          const isSelected = selectedNode.id === node.id;
          const isPacketActive = activePacketIndex === idx;

          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'bg-[#0d1627] border-cyan-500/70 shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-cyan-500/40'
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/70'
              }`}
            >
              {/* Active data packet laser line */}
              {isPacketActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                />
              )}

              <div>
                {/* Node Status & Protocol Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: node.color }}
                    />
                    <span className="text-[10px] font-mono text-slate-400">
                      STEP 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/70 border border-white/5 text-slate-300">
                    {node.status}
                  </span>
                </div>

                {/* Service Name */}
                <h4 className="text-sm font-bold text-white font-sans tracking-wide">
                  {node.name}
                </h4>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {node.subtitle}
                </p>
              </div>

              {/* Metric Badge */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-300/80">
                  {node.tech}
                </span>
                <span className="font-mono text-xs font-bold text-cyan-300">
                  {node.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Live Telemetry Inspector Drawer */}
      {selectedNode && (
        <div className="border-t border-white/10 bg-[#060a12] p-4 sm:p-5 font-mono text-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white tracking-wide">
                SERVICE INSPECTOR: {selectedNode.name}
              </span>
              <span className="text-slate-500 hidden sm:inline">[{selectedNode.protocol}]</span>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-slate-400">LATENCY: <strong className="text-cyan-300">{selectedNode.details.latency}</strong></span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">LOAD: <strong className="text-emerald-300">{selectedNode.details.throughput}</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-slate-300 font-sans text-xs">
            <div className="md:col-span-8 space-y-1.5">
              <p className="leading-relaxed text-slate-200">
                {selectedNode.details.role}
              </p>
              <p className="text-[11px] text-cyan-400/90 font-mono">
                // ARCHITECTURAL RATIONALE: {selectedNode.details.rationale}
              </p>
            </div>

            <div className="md:col-span-4 p-2.5 rounded-lg bg-slate-900/90 border border-white/10 font-mono text-[11px] flex flex-col justify-between">
              <span className="text-[10px] text-slate-500 uppercase">MEMORY PROFILE</span>
              <span className="text-cyan-300 font-semibold mt-0.5">{selectedNode.details.memoryProfile}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
