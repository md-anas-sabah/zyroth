'use client';

import React from 'react';
import { 
  Network, 
  Code, 
  RefreshCcw, 
  ShieldAlert, 
  Zap, 
  MoreVertical,
  Plus
} from 'lucide-react';

export default function LogicRegistry() {
  const logicBlocks = [
    { name: 'Schema Validator', type: 'Condition', category: 'Security', reliability: '99.9%', state: 'Active' },
    { name: '3-Retry Policy', type: 'Loop', category: 'Error Handling', reliability: '100%', state: 'Global' },
    { name: 'Parallel Aggregator', type: 'Parallel', category: 'Orchestration', reliability: '98.5%', state: 'Active' },
    { name: 'Token Redactor', type: 'Gate', category: 'Compliance', reliability: '100%', state: 'Locked' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-2">Logic Registry</h1>
            <p className="text-[#9a9798] text-sm uppercase tracking-widest font-bold">Reusable Orchestration Blocks</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-[#c11f68] to-[#8e0048] rounded-sm text-[#ffdce4] font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Create Logic Block
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest mb-4 block">Total Blocks</span>
            <div className="text-4xl font-headline font-bold text-[#c11f68]">142</div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest mb-4 block">Global States</span>
            <div className="text-4xl font-headline font-bold text-[#00eefc]">12</div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest mb-4 block">Avg Complexity</span>
            <div className="text-4xl font-headline font-bold text-[#ffdce4]">2.4x</div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest mb-4 block">Execution Depth</span>
            <div className="text-4xl font-headline font-bold text-white">O(log n)</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logicBlocks.map(block => (
            <div key={block.name} className="group relative bg-[#1c1b1c]/40 backdrop-blur-md border border-[#584047]/15 p-6 rounded-sm hover:border-[#c11f68]/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#584047]/10 flex items-center justify-center group-hover:bg-[#c11f68]/10 transition-colors">
                    {block.type === 'Condition' && <Code className="w-5 h-5 text-[#c11f68]" />}
                    {block.type === 'Loop' && <RefreshCcw className="w-5 h-5 text-[#c11f68]" />}
                    {block.type === 'Parallel' && <Zap className="w-5 h-5 text-[#c11f68]" />}
                    {block.type === 'Gate' && <ShieldAlert className="w-5 h-5 text-[#c11f68]" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{block.name}</h3>
                    <span className="text-[10px] text-[#9a9798] uppercase tracking-widest font-bold">{block.type}</span>
                  </div>
                </div>
                <button className="text-[#584047] hover:text-[#e5e2e3] transition-colors"><MoreVertical className="w-5 h-5" /></button>
              </div>

              <div className="grid grid-cols-3 gap-4 font-mono text-[10px] text-[#9a9798]">
                <div className="flex flex-col">
                  <span>Category</span>
                  <span className="text-[#e5e2e3] font-bold mt-1">{block.category}</span>
                </div>
                <div className="flex flex-col">
                  <span>Reliability</span>
                  <span className="text-[#00eefc] font-bold mt-1">{block.reliability}</span>
                </div>
                <div className="flex flex-col">
                  <span>State</span>
                  <span className="text-[#c11f68] font-bold mt-1">{block.state}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 bg-[#c11f68] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
