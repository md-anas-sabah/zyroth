'use client';

import React from 'react';
import { 
  Bot, 
  Search, 
  Plus, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Activity,
  Filter
} from 'lucide-react';

export default function AgentsLibrary() {
  const agents = [
    { name: 'Data Analyzer', framework: 'CrewAI', caps: ['Data Processing', 'Analytics'], status: 'Registered', latency: '450ms', price: '$0.02' },
    { name: 'Email Parser', framework: 'LangChain', caps: ['Natural Language', 'Extraction'], status: 'UAP Active', latency: '220ms', price: '$0.005' },
    { name: 'Policy Checker', framework: 'AutoGPT', caps: ['Compliance', 'Rule Engine'], status: 'Registered', latency: '890ms', price: '$0.04' },
    { name: 'Coded Reviewer', framework: 'Custom', caps: ['Static Analysis', 'TS/JS'], status: 'Registered', latency: '1.2s', price: '$0.12' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-2">Agents Library</h1>
            <p className="text-[#9a9798] text-sm uppercase tracking-widest font-bold">Universal Agent Protocol v1.4</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-[#c11f68] to-[#8e0048] rounded-sm text-[#ffdce4] font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Register New Agent
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#584047]" />
            <input 
              type="text" 
              placeholder="Search by Agent ID, Capability, or Framework..." 
              className="w-full bg-[#1c1b1c] border border-[#584047]/15 rounded-sm py-3 pl-12 pr-4 text-sm outline-none focus:border-[#c11f68]/40 transition-colors"
            />
          </div>
          <button className="px-4 py-2 bg-[#1c1b1c] border border-[#584047]/15 rounded-sm text-[#9a9798] hover:text-[#e5e2e3] flex items-center gap-2 transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Registry Table */}
        <div className="bg-[#1c1b1c]/40 backdrop-blur-md border border-[#584047]/15 rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#584047]/15 bg-[#171617]/50">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Agent Name</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Framework</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Capabilities</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Status</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Performance</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#584047]/10">
              {agents.map((agent) => (
                <tr key={agent.name} className="hover:bg-[#c11f68]/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-surface-container-highest flex items-center justify-center border border-[#584047]/20">
                        <Bot className="w-4 h-4 text-[#c11f68]" />
                      </div>
                      <span className="font-bold text-sm">{agent.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm bg-[#584047]/20 text-[#9a9798] font-bold uppercase tracking-wider">{agent.framework}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1">
                      {agent.caps.map(cap => (
                        <span key={cap} className="text-[9px] px-2 py-0.5 rounded-full border border-[#584047]/30 text-[#9a9798]">{cap}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00eefc] animate-pulse"></div>
                      <span className="text-xs text-[#00eefc] font-bold">{agent.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-mono">{agent.latency}</span>
                      <span className="text-[9px] text-[#584047] uppercase tracking-widest font-bold">{agent.price} / 1k tokens</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-bold uppercase">
                    <button className="text-[#c11f68] hover:text-[#ffb1c7] transition-colors text-[10px] tracking-widest flex items-center gap-1">
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
