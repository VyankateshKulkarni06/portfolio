import React, { useState } from 'react';
import {
  Vote,
  Scale,
  Brain,
  Search,
  ExternalLink,
  ChevronRight,
  Database,
  ArrowRight,
  GitBranch,
  Shield,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { TechBadge } from '../ui/TechBadge';
import { PROJECTS, ProjectItem } from '../../data/resumeData';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter out CarieCheck since it has its own dedicated featured deep dive
  const otherProjects = PROJECTS.filter((p) => p.id !== 'cariecheck');

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          badge="Systems Engineering"
          title="Interactive Project Case Studies"
          description="Decentralized governance architectures with configurable schemas and agentic legal reasoning workflows."
        />

        <div className="space-y-12">
          {/* Project 2: Chainvote */}
          <div className="p-8 md:p-10 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-indigo-400 bg-indigo-950/40 px-3 py-1 rounded-md border border-indigo-800/40">
                    DISTRIBUTED SYSTEMS • BLOCKCHAIN
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    DYNAMIC SCHEMA ENGINE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                  Chainvote — Blockchain-Based Voting Platform
                </h3>

                <p className="text-sm text-cyan-300 font-mono">
                  Configurable Community Schemas & Dynamic Eligibility Validation Logic
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Built the backend infrastructure supporting multi-tenant community creation, custom member attributes, and automated voter eligibility evaluation. Administrators configure dynamic registration fields and election constraints evaluated at runtime.
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    KEY ARCHITECTURAL ACHIEVEMENTS
                  </h4>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Configurable community schemas allowing administrators to define custom registration fields and validation rules.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Dynamic eligibility filtering algorithms selecting voters and candidates based on custom multi-attribute constraints.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>End-to-end election lifecycle management from member onboarding to immutable ballot verification.</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {['Node.js', 'PostgreSQL', 'REST APIs', 'JWT', 'System Architecture', 'Blockchain Protocols'].map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </div>

              {/* Chainvote Lifecycle Flow Diagram */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090e1c] border border-white/10 flex flex-col justify-center">
                <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Vote className="w-4 h-4" />
                  ELECTION LIFECYCLE TOPOLOGY
                </span>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-slate-900/90 text-slate-300 border border-white/5 flex items-center justify-between">
                    <span>1. Community Creation</span>
                    <span className="text-slate-500">Schema Def</span>
                  </div>
                  <div className="text-center text-slate-600">↓</div>
                  <div className="p-2.5 rounded bg-slate-900/90 text-slate-300 border border-white/5 flex items-center justify-between">
                    <span>2. Member Onboarding</span>
                    <span className="text-slate-500">Custom Fields</span>
                  </div>
                  <div className="text-center text-slate-600">↓</div>
                  <div className="p-2.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-700/40 flex items-center justify-between">
                    <span>3. Dynamic Eligibility Filter</span>
                    <span className="text-indigo-400">Rules Engine</span>
                  </div>
                  <div className="text-center text-slate-600">↓</div>
                  <div className="p-2.5 rounded bg-slate-900/90 text-slate-300 border border-white/5 flex items-center justify-between">
                    <span>4. Election & Voting Session</span>
                    <span className="text-slate-500">Active Ballot</span>
                  </div>
                  <div className="text-center text-slate-600">↓</div>
                  <div className="p-2.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-700/40 flex items-center justify-between">
                    <span>5. Cryptographic Verification</span>
                    <span className="text-emerald-400">Auditable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: NyayaGPT */}
          <div className="p-8 md:p-10 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/40">
                    AGENTIC AI • LEGAL REASONING
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    10K+ VECTOR CORPUS SEARCH
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                  NyayaGPT — Agentic Legal Reasoning System
                </h3>

                <p className="text-sm text-cyan-300 font-mono">
                  Two-Agent Pipeline with Cosine-Similarity Case Search & Live API Augmentation
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Designed a dual-agent architecture separating retrieval formulation from response synthesis. Agent 1 analyzes legal intent and triggers Case Law Mode, ranking top-5 precedents across 10,000+ vector records and synthesizing them with external case-law APIs.
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    KEY ARCHITECTURAL ACHIEVEMENTS
                  </h4>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Two-agent pipeline preventing legal hallucination by isolating query intent from context generation.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Vector search over 10K+ legal records using dense embeddings and cosine similarity to fetch top-5 precedents.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>Hybrid external API retrieval merging live case records with local semantic context.</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {['Python', 'Agentic AI', 'Vector Embeddings', 'Cosine Similarity', 'FastAPI', 'External Legal APIs'].map((t) => (
                    <TechBadge key={t} label={t} variant="accent" />
                  ))}
                </div>
              </div>

              {/* NyayaGPT Two-Agent Reasoning Architecture Visualization */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090e1c] border border-white/10 flex flex-col justify-center">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  TWO-AGENT REASONING PIPELINE
                </span>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-slate-900/90 text-slate-300 border border-white/5">
                    User Query (Legal Problem)
                  </div>
                  <div className="text-center text-slate-600">↓</div>
                  <div className="p-2.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-700/40 flex items-center justify-between">
                    <span>Agent 1: Query Analysis</span>
                    <span className="text-[10px]">Retrieval Router</span>
                  </div>
                  <div className="text-center text-slate-600">↓ Determines Need</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded bg-indigo-950/30 text-indigo-300 border border-indigo-800/30 text-[11px]">
                      <div className="font-bold">Vector Search</div>
                      <div className="text-[10px] text-slate-400">10K+ Cases (Top 5)</div>
                    </div>
                    <div className="p-2 rounded bg-purple-950/30 text-purple-300 border border-purple-800/30 text-[11px]">
                      <div className="font-bold">External API</div>
                      <div className="text-[10px] text-slate-400">Live Case Law</div>
                    </div>
                  </div>
                  <div className="text-center text-slate-600">↓ Context Assembly</div>
                  <div className="p-2.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-700/40 flex items-center justify-between">
                    <span>Agent 2: Synthesis Engine</span>
                    <span className="text-[10px]">Context-Aware Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
