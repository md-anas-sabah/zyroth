'use client';

import React from 'react';
import { 
  History, 
  Search, 
  Filter, 
  ChevronRight, 
  ArrowUpRight,
  Database,
  Cpu,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const executions = [
  { id: 'RID-9284-AXQ', agent: 'Routing Agent', model: 'GPT-4o', status: 'optimized', latency: '142ms', timestamp: '2 mins ago' },
  { id: 'RID-9283-ZLM', agent: 'Analyzer Agent', model: 'Claude 3.5', status: 'bypass', latency: '289ms', timestamp: '1 hour ago' },
  { id: 'RID-9282-YPT', agent: 'Collector Agent', model: 'Gemini 1.5 Pro', status: 'optimized', latency: '114ms', timestamp: '3 hours ago' },
  { id: 'RID-9281-WVB', agent: 'Validator Agent', model: 'GPT-3.5', status: 'failed', latency: '--ms', timestamp: '5 hours ago' },
  { id: 'RID-9280-KLS', agent: 'Routing Agent', model: 'GPT-4o', status: 'optimized', latency: '198ms', timestamp: 'Yesterday' },
  { id: 'RID-9279-PQM', agent: 'Llama 3 Parser', model: 'Llama 3 70B', status: 'optimized', latency: '342ms', timestamp: 'Yesterday' },
];

export default function ExecutionsHistory() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.2em] text-[#a78990] uppercase mb-1">
            <History className="w-3 h-3" />
            <span>Archive</span>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-[#e5e2e3]">Execution History</h2>
          <p className="font-body text-xs text-[#a78990] mt-2 opacity-70">Showing all recent agent runs across your monolith cluster.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a78990]" />
            <input 
              type="text" 
              placeholder="Filter by ID or Agent..." 
              className="w-full h-10 pl-10 pr-4 bg-[#1c1b1c] border border-[#584047]/20 text-xs text-[#e5e2e3] focus:outline-none focus:border-[#c11f68]/50 transition-colors"
            />
          </div>
          <button className="h-10 px-4 bg-[#1c1b1c] border border-[#584047]/20 flex items-center gap-2 hover:bg-[#2a2a2b] transition-colors">
            <Filter className="w-4 h-4 text-[#a78990]" />
            <span className="text-[10px] font-bold text-[#e5e2e3] uppercase tracking-widest">Filter</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="glass-card p-4 border-l-2 border-l-[#ffb1c7]">
              <p className="text-[9px] font-body text-[#a78990] uppercase tracking-widest mb-1">Total Runs (24h)</p>
              <h4 className="text-xl font-headline font-bold text-[#e5e2e3]">1,282</h4>
          </div>
          <div className="glass-card p-4 border-l-2 border-l-[#79dc7c]">
              <p className="text-[9px] font-body text-[#a78990] uppercase tracking-widest mb-1">Success Rate</p>
              <h4 className="text-xl font-headline font-bold text-[#e5e2e3]">99.8%</h4>
          </div>
          <div className="glass-card p-4 border-l-2 border-l-[#c11f68]">
              <p className="text-[9px] font-body text-[#a78990] uppercase tracking-widest mb-1">Active Flights</p>
              <h4 className="text-xl font-headline font-bold text-[#e5e2e3]">14</h4>
          </div>
          <div className="glass-card p-4 border-l-2 border-l-[#ffb1c7]">
              <p className="text-[9px] font-body text-[#a78990] uppercase tracking-widest mb-1">Avg Latency</p>
              <h4 className="text-xl font-headline font-bold text-[#e5e2e3]">182ms</h4>
          </div>
      </div>

      {/* Main List */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#201f20]/50 border-b border-[#584047]/10">
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Flight ID</th>
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Agent / Model</th>
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Status / Latency</th>
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Timestamp</th>
                <th className="px-8 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#584047]/5">
              {executions.map((exe) => (
                <tr 
                  key={exe.id} 
                  className="hover:bg-[#201f20]/50 transition-colors group cursor-pointer"
                  onClick={() => window.location.href = `/dashboard/executions/${exe.id}`}
                >
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#ffb1c7] font-bold group-hover:text-white transition-colors">{exe.id}</span>
                      <span className="text-[9px] text-[#a78990]/50 font-mono">NODE_9921_US_EAST</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-black border border-[#584047]/30 rounded-sm flex items-center justify-center text-[9px] font-bold text-white">
                        {exe.model.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#e5e2e3]">{exe.agent}</p>
                        <p className="text-[10px] text-[#a78990]">{exe.model}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase ${
                        exe.status === 'failed' ? 'bg-red-500/10 text-red-400' : 
                        exe.status === 'optimized' ? 'bg-green-500/10 text-[#79dc7c]' : 
                        'bg-[#c11f68]/10 text-[#ffb1c7]'
                      }`}>
                        {exe.status}
                      </span>
                      <span className="font-mono text-xs text-[#a78990]">{exe.latency}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-xs text-[#a78990] font-body">
                    {exe.timestamp}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <Link 
                        href={`/dashboard/executions/${exe.id}`} 
                        className="p-2 border border-[#584047]/10 hover:border-[#c11f68] hover:bg-[#c11f68]/10 rounded-sm inline-flex items-center justify-center transition-all group"
                    >
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#a78990] group-hover:text-[#ffb1c7]" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-4 bg-[#201f20]/30 flex items-center justify-between border-t border-[#584047]/10">
          <p className="text-[10px] text-[#a78990] font-body uppercase tracking-widest">Page 1 of 124</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#1c1b1c] border border-[#584047]/20 text-[9px] font-bold text-[#a78990] uppercase tracking-widest opacity-50 cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 bg-[#1c1b1c] border border-[#584047]/20 text-[9px] font-bold text-[#e5e2e3] uppercase tracking-widest hover:bg-[#2a2a2b] transition-colors">Next Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}
