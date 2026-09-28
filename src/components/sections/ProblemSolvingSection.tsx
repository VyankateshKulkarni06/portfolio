import React from 'react';
import { Terminal, Award, Cpu, Network } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ProblemSolvingSection: React.FC = () => {
  return (
    <section id="problem-solving" className="py-14 relative z-10 border-t border-white/5 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          badge="Algorithmic Engineering"
          title="Problem Solving & Data Structures"
          description="Competitive algorithmic foundation applied to systems design, graph topologies, and asymptotic optimization."
        />

        {/* Verified Stats HUD Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl glass-card border border-cyan-500/30">
            <span className="font-mono text-xs text-slate-400 block mb-1">TOTAL PROBLEMS SOLVED</span>
            <div className="text-3xl font-mono font-bold text-white">550+</div>
            <p className="text-xs text-cyan-400 mt-2 font-mono">LeetCode • C++ • Asymptotic Optimization</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-indigo-500/30">
            <span className="font-mono text-xs text-slate-400 block mb-1">PEAK LEETCODE RATING</span>
            <div className="text-3xl font-mono font-bold text-indigo-300">1671</div>
            <p className="text-xs text-indigo-400 mt-2 font-mono">Verified Contest Performance</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <span className="font-mono text-xs text-slate-400 block mb-1">CORE TOPICS & ALGORITHMS</span>
            <div className="text-base font-sans font-bold text-white mt-1">Graphs, DP, Trees & Heaps</div>
            <p className="text-xs text-slate-400 mt-2 font-mono">State transitions, BFS/DFS, memoization</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <span className="font-mono text-xs text-slate-400 block mb-1">SYSTEMS RELEVANCE</span>
            <div className="text-base font-sans font-bold text-emerald-400 mt-1">DAG & Workflow Scheduling</div>
            <p className="text-xs text-slate-400 mt-2 font-mono">Dependency resolution & cache algorithms</p>
          </div>
        </div>
      </div>
    </section>
  );
};
