'use client';

import React from 'react';
import { 
  History as HistoryIcon, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Zap, 
  BarChart2, 
  MoreVertical,
  Activity
} from 'lucide-react';

export default function WorkflowHistory() {
  const history = [
    { name: 'Customer Refund Pipeline', executions: '1,420', success: '98%', avgCost: '$0.82', trend: 'up' },
    { name: 'Lead Enrichment V2', executions: '850', success: '94%', avgCost: '$1.24', trend: 'down' },
    { name: 'Data Ingestion Grid', executions: '5,200', success: '99.9%', avgCost: '$0.04', trend: 'up' },
    { name: 'Security Audit Scan', executions: '124', success: '100%', avgCost: '$4.50', trend: 'stable' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-2">Workflow History</h1>
            <p className="text-[#9a9798] text-sm uppercase tracking-widest font-bold font-headline">Performance & ROI Metrics</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1c1b1c] border border-[#584047]/15 rounded-sm text-[#e5e2e3] font-headline font-bold text-xs uppercase tracking-widest hover:bg-[#201f20] transition-colors">
              <BarChart2 className="w-4 h-4 text-[#c11f68]" /> Full Performance Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-4 h-4 text-[#00eefc]" />
              <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest">Total Executions</span>
            </div>
            <div className="text-4xl font-headline font-bold">128,490</div>
            <div className="mt-2 text-[10px] text-[#00eefc] font-bold uppercase tracking-tighter">↑ 12.4% vs last week</div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-4 h-4 text-[#c11f68]" />
              <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest">Estimated ROI</span>
            </div>
            <div className="text-4xl font-headline font-bold text-[#c11f68]">$24,842.10</div>
            <div className="mt-2 text-[10px] text-[#c11f68] font-bold uppercase tracking-tighter">Savings via Optimization</div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-4 h-4 text-[#9a9798]" />
              <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest">Avg Duration</span>
            </div>
            <div className="text-4xl font-headline font-bold text-[#e5e2e3]">3.2s</div>
            <div className="mt-2 text-[10px] text-[#9a9798] font-bold uppercase tracking-tighter">↓ 0.8s optimization</div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-4 h-4 text-[#00eefc]" />
              <span className="text-[10px] text-[#584047] font-bold uppercase tracking-widest">System Health</span>
            </div>
            <div className="text-4xl font-headline font-bold text-[#e5e2e3]">99.98%</div>
            <div className="mt-2 text-[10px] text-[#00eefc] font-bold uppercase tracking-tighter">14 Days uptime</div>
          </div>
        </div>

        <div className="bg-[#1c1b1c]/40 border border-[#584047]/15 rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#584047]/15 bg-[#171617]/50">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Workflow Name</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Executions</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Success Rate</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Avg Cost</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Efficiency</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#584047]/10">
              {history.map((h) => (
                <tr key={h.name} className="hover:bg-[#c11f68]/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-[#584047]/10 flex items-center justify-center">
                        <HistoryIcon className="w-4 h-4 text-[#c11f68]" />
                      </div>
                      <span className="font-bold text-sm tracking-tight">{h.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-mono font-bold">{h.executions}</span>
                  </td>
                  <td className="px-6 py-5 font-bold text-xs">
                    <span className="text-[#00eefc]">{h.success}</span>
                  </td>
                  <td className="px-6 py-5 font-bold text-xs">
                    <span className="text-[#c11f68]/80">{h.avgCost}</span>
                  </td>
                  <td className="px-6 py-5">
                    {h.trend === 'up' ? <TrendingUp className="w-4 h-4 text-[#00eefc]" /> : 
                     h.trend === 'down' ? <TrendingDown className="w-4 h-4 text-[#c11f68]" /> : 
                     <Activity className="w-4 h-4 text-[#9a9798]" />}
                  </td>
                  <td className="px-6 py-5 text-right font-bold uppercase">
                    <button className="text-[#584047] hover:text-[#e5e2e3] transition-colors"><MoreVertical className="w-4 h-4" /></button>
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
