'use client';

import React from 'react';
import { 
  BarChart3, 
  TrendingDown, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Database, 
  ArrowRight, 
  AlertTriangle,
  Info,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  CloudLightning
} from 'lucide-react';

const ledgerData = [
  { node: 'p4d.24xlarge', region: 'us-east-1', status: 'Active', utilization: '94%', cost: '$32.77/hr' },
  { node: 'g5.12xlarge', region: 'us-east-1', status: 'Spot', utilization: '82%', cost: '$1.84/hr' },
  { node: 'p4d.24xlarge', region: 'ap-southeast-2', status: 'Idle', utilization: '2%', cost: '$32.77/hr' },
  { node: 'c6g.4xlarge', region: 'us-east-1', status: 'Warm', utilization: '45%', cost: '$0.54/hr' },
  { node: 'm7g.large', region: 'eu-central-1', status: 'Active', utilization: '88%', cost: '$0.12/hr' },
];

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.2em] text-[#a78990] uppercase mb-1">
          <BarChart3 className="w-3 h-3" />
          <span>Operational Insights</span>
        </div>
        <h2 className="font-headline text-4xl font-bold tracking-tighter text-[#e5e2e3]">Cost & Performance Analytics</h2>
        <p className="font-body text-xs text-[#a78990] mt-2 max-w-2xl leading-relaxed">
          Deep-dive into infrastructure expenditure, model efficiency, and automated budget optimizations for the current billing cycle.
        </p>
      </div>

      {/* Primary Alert Banner */}
      <div className="glass-card mb-10 p-4 border-l-4 border-[#79dc7c] bg-[#79dc7c]/5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#79dc7c]/10 flex items-center justify-center border border-[#79dc7c]/20 rounded-sm">
            <TrendingDown className="w-5 h-5 text-[#79dc7c]" />
          </div>
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] text-[#79dc7c] uppercase font-bold">Scaling Optimization</p>
            <p className="font-body text-xs text-[#e5e2e3]">Infrastructure scaling optimizations in <span className="font-bold">US-East-1</span> resulted in 12% lower compute costs compared to forecast.</p>
          </div>
        </div>
        <button className="px-4 py-2 border border-[#79dc7c]/30 text-[9px] font-bold text-[#79dc7c] uppercase tracking-widest hover:bg-[#79dc7c]/10 transition-colors">
          View Detailed Log
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Metric Cards Row */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 h-full flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] font-body uppercase tracking-[0.2em] text-[#a78990]">Model Efficiency Heatmap</p>
                <h3 className="text-xl font-headline font-bold text-[#e5e2e3] mt-1">Cross-Region Performance</h3>
              </div>
              <Info className="w-4 h-4 text-[#a78990] opacity-50" />
            </div>
            
            {/* Visual Heatmap Grid Placeholder */}
            <div className="grid grid-cols-8 gap-1.5 mb-6">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-sm border border-[#584047]/10 transition-all hover:scale-110 ${
                    i % 7 === 0 ? 'bg-[#c11f68]' : 
                    i % 5 === 0 ? 'bg-[#ffb1c7]' : 
                    i % 3 === 0 ? 'bg-[#c11f68]/40' : 
                    'bg-[#201f20]'
                  }`}
                  style={{ opacity: 0.4 + (Math.random() * 0.6) }}
                ></div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#584047]/10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#c11f68]"></div>
                    <span className="text-[9px] font-body text-[#a78990] uppercase tracking-widest font-bold">Optimized</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#201f20]"></div>
                    <span className="text-[9px] font-body text-[#a78990] uppercase tracking-widest font-bold">Stable</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#ffdce4] flex items-center gap-1">
                +14.2% Efficiency <TrendingUp className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div className="glass-card p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] font-body uppercase tracking-[0.2em] text-[#a78990]">Model Usage Split</p>
                <h3 className="text-xl font-headline font-bold text-[#e5e2e3] mt-1">Compute Distribution</h3>
              </div>
              <Zap className="w-4 h-4 text-[#ffb1c7]" />
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-[#a78990]">
                  <span>GPT-4o</span>
                  <span className="text-[#e5e2e3]">42.5%</span>
                </div>
                <div className="h-1.5 w-full bg-[#1c1b1c] rounded-full overflow-hidden">
                    <div className="h-full bg-[#c11f68] w-[42.5%] shadow-[0_0_8px_rgba(193,31,104,0.4)]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-[#a78990]">
                  <span>Claude 3.5 Sonnet</span>
                  <span className="text-[#e5e2e3]">38.2%</span>
                </div>
                <div className="h-1.5 w-full bg-[#1c1b1c] rounded-full overflow-hidden">
                    <div className="h-full bg-[#ffb1c7] w-[38.2%]"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-[#a78990]">
                  <span>Llama 3 70B</span>
                  <span className="text-[#e5e2e3]">19.3%</span>
                </div>
                <div className="h-1.5 w-full bg-[#1c1b1c] rounded-full overflow-hidden">
                    <div className="h-full bg-[#584047] w-[19.3%]"></div>
                </div>
              </div>
            </div>

            <button className="w-full h-10 bg-[#1c1b1c] border border-[#584047]/20 text-[9px] font-bold text-[#e5e2e3] uppercase tracking-widest hover:border-[#c11f68]/40 transition-colors">
              Export Distribution Data
            </button>
          </div>
        </div>

        {/* Throttling Sidebar */}
        <div className="lg:col-span-4 h-full">
            <div className="glass-card p-6 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                    <div className="w-2 h-2 rounded-full bg-[#ffb1c7] animate-pulse"></div>
                </div>
                <div className="w-16 h-16 bg-[#c11f68]/10 rounded-full flex items-center justify-center mb-6 border border-[#c11f68]/20 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-[#ffb1c7]" />
                </div>
                <h4 className="font-headline text-lg font-bold text-white mb-2 uppercase tracking-tight">Smart Threshold Active</h4>
                <p className="text-xs text-[#a78990] font-body max-w-[200px] leading-relaxed mb-6">
                    Automatic throttling engaged for non-critical API keys above $200 daily spend.
                </p>
                <div className="flex gap-2 w-full">
                    <button className="flex-1 px-4 py-2 bg-[#c11f68] text-white text-[9px] font-bold uppercase tracking-widest hover:bg-[#a01a56] transition-colors">Adjust Limits</button>
                    <button className="px-4 py-2 bg-[#1c1b1c] border border-[#584047]/20 text-[9px] font-bold text-[#e5e2e3] uppercase tracking-widest hover:border-[#c11f68]/40">Disable</button>
                </div>
            </div>
        </div>
      </div>

      {/* AI Optimizer Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <CloudLightning className="w-5 h-5 text-[#c11f68]" />
          <h3 className="font-headline text-2xl font-bold tracking-tight text-[#e5e2e3]">AI Infrastructure Optimizer</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-l-2 border-l-[#c11f68] hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-[#c11f68]/10 rounded-sm">
                        <ArrowRight className="w-4 h-4 text-[#ffb1c7]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#ffb1c7] uppercase px-2 py-0.5 bg-[#c11f68]/10 rounded-full tracking-widest">High Impact</span>
                </div>
                <h5 className="font-headline font-bold text-[#e5e2e3] mb-2">Switch Translation to Haiku</h5>
                <p className="text-xs text-[#a78990] font-body leading-relaxed mb-4">
                    System detected redundant use of Opus for basic text translation. Claude 3 Haiku maintains 98.4% accuracy at 1/15th the cost.
                </p>
                <button className="text-[10px] font-bold text-[#ffdce4] flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                    Implement Patch <ArrowRight className="w-3 h-3" />
                </button>
            </div>

            <div className="glass-card p-6 border-l-2 border-l-[#79dc7c] hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-[#79dc7c]/10 rounded-sm">
                        <Database className="w-4 h-4 text-[#79dc7c]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#79dc7c] uppercase px-2 py-0.5 bg-[#79dc7c]/10 rounded-full tracking-widest">Medium Impact</span>
                </div>
                <h5 className="font-headline font-bold text-[#e5e2e3] mb-2">Enable Prompt Caching</h5>
                <p className="text-xs text-[#a78990] font-body leading-relaxed mb-4">
                    42% of context windows share a static system prompt of 4k+ tokens. Enabling Anthropic caching reduces repetitive input billing.
                </p>
                <button className="text-[10px] font-bold text-[#79dc7c] flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                    Enable Caching <ArrowRight className="w-3 h-3" />
                </button>
            </div>

            <div className="glass-card p-6 border-l-2 border-l-orange-400 hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-orange-400/10 rounded-sm">
                        <AlertTriangle className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-[9px] font-bold text-orange-400 uppercase px-2 py-0.5 bg-orange-400/10 rounded-full tracking-widest">Alert</span>
                </div>
                <h5 className="font-headline font-bold text-[#e5e2e3] mb-2">Idle Node Shutdown</h5>
                <p className="text-xs text-[#a78990] font-body leading-relaxed mb-4">
                    3x GPU-accelerated instances (p4d.24xlarge) in ap-southeast-2 have been at 2% utilization for 72 hours.
                </p>
                <button className="text-[10px] font-bold text-orange-400 flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                    Decommission Nodes <ArrowRight className="w-3 h-3" />
                </button>
            </div>
        </div>
      </div>

      {/* Infrastructure Ledger */}
      <div className="glass-card overflow-hidden">
        <div className="px-8 py-6 border-b border-[#584047]/10 flex justify-between items-center">
            <h4 className="font-headline text-lg font-bold tracking-tight text-[#e5e2e3]">Infrastructure Ledger</h4>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#a78990]" />
                    <span className="text-[10px] font-body text-[#a78990] uppercase tracking-[0.2em]">Updated 4m ago</span>
                </div>
                <button className="text-[#a78990] hover:text-[#e5e2e3] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#201f20]/50 border-b border-[#584047]/10">
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Node Type / Specs</th>
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Region</th>
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Status / Load</th>
                <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium text-right">Running Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#584047]/5">
              {ledgerData.map((node, i) => (
                <tr key={i} className="hover:bg-[#201f20]/30 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-black border border-[#584047]/30 rounded-sm">
                        <Cpu className="w-3.5 h-3.5 text-[#ffb1c7]" />
                      </div>
                      <span className="text-xs font-mono text-[#e5e2e3]">{node.node}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-xs font-body text-[#a78990] uppercase tracking-widest">{node.region}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase ${
                            node.status === 'Active' ? 'bg-[#79dc7c]/10 text-[#79dc7c]' :
                            node.status === 'Spot' ? 'bg-[#ffb1c7]/10 text-[#ffb1c7]' :
                            node.status === 'Warm' ? 'bg-orange-400/10 text-orange-400' :
                            'bg-red-500/10 text-red-500'
                        }`}>
                            {node.status}
                        </span>
                        <div className="flex items-center gap-2">
                             <div className="h-1 w-20 bg-[#1c1b1c] rounded-full overflow-hidden">
                                <div className={`h-full ${parseInt(node.utilization) > 80 ? 'bg-[#c11f68]' : 'bg-[#79dc7c]'}!`} style={{ width: node.utilization }}></div>
                             </div>
                             <span className="text-[10px] font-mono text-[#a78990]">{node.utilization}</span>
                        </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right font-mono text-xs text-[#e5e2e3]">{node.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
