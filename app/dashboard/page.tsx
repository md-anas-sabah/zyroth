'use client';

import {
  Zap,
  Database,
  DollarSign,
  Cpu,
  CheckCircle,
  Filter
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
        {/* Header Section */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-[#e5e2e3] mb-1">Operational Overview</h2>
            <p className="font-body text-xs tracking-[0.2em] text-[#a78990] uppercase">Cluster: us-east-monolith-01</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#1c1b1c] hover:bg-[#2a2a2b] transition-colors text-[10px] font-bold tracking-widest text-[#e5e2e3] uppercase border border-[#584047]/20">Last 24 Hours</button>
            <button className="px-4 py-2 bg-[#1c1b1c] hover:bg-[#2a2a2b] transition-colors text-[10px] font-bold tracking-widest text-[#e5e2e3] uppercase border border-[#584047]/20">Export Data</button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Metric 1 */}
          <div className="glass-card p-6 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase">Total Requests</p>
              <Database className="w-4 h-4 text-[#ffb1c7]" />
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline text-3xl font-bold text-[#e5e2e3]">1.28M</h3>
              <span className="text-[#79dc7c] text-[10px] font-bold">+12.4%</span>
            </div>
            <div className="h-8 w-full mt-2 overflow-hidden">
              <svg className="w-full h-full opacity-50" preserveAspectRatio="none" viewBox="0 0 100 20">
                <path d="M0,15 Q10,5 20,12 T40,8 T60,18 T80,5 L100,10" fill="none" stroke="#ffb1c7" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          {/* Metric 2 */}
          <div className="glass-card p-6 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase">Cost Saved</p>
              <DollarSign className="w-4 h-4 text-[#ffb1c7]" />
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline text-3xl font-bold text-[#e5e2e3]">$14,202</h3>
              <span className="text-[#79dc7c] text-[10px] font-bold">+8.1%</span>
            </div>
            <div className="h-8 w-full mt-2 overflow-hidden">
              <svg className="w-full h-full opacity-50" preserveAspectRatio="none" viewBox="0 0 100 20">
                <path d="M0,18 L20,15 L40,16 L60,10 L80,12 L100,2" fill="none" stroke="#79dc7c" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          {/* Metric 3 */}
          <div className="glass-card p-6 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase">Models Used</p>
              <Cpu className="w-4 h-4 text-[#ffb1c7]" />
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline text-3xl font-bold text-[#e5e2e3]">18</h3>
              <span className="text-[#a78990] text-[10px] font-bold">STABLE</span>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="h-1 w-full bg-[#c11f68]"></div>
              <div className="h-1 w-full bg-[#c11f68]"></div>
              <div className="h-1 w-full bg-[#c11f68]"></div>
              <div className="h-1 w-full bg-[#584047]/30"></div>
            </div>
          </div>
          {/* Metric 4 */}
          <div className="glass-card p-6 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase">Success Rate</p>
              <CheckCircle className="w-4 h-4 text-[#ffb1c7]" />
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline text-3xl font-bold text-[#e5e2e3]">99.98%</h3>
              <span className="text-[#79dc7c] text-[10px] font-bold">+0.02%</span>
            </div>
            <div className="bg-[#2a2a2b] h-1 w-full rounded-full mt-2">
              <div className="bg-[#79dc7c] h-1 rounded-full w-[99%] shadow-[0_0_8px_rgba(121,220,124,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Large Request Chart */}
          <div className="lg:col-span-2 glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-headline text-lg font-bold tracking-tight text-[#e5e2e3]">Requests Over Time</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ffb1c7]"></span>
                  <span className="text-[10px] font-body uppercase text-[#a78990] tracking-widest">Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#584047]"></span>
                  <span className="text-[10px] font-body uppercase text-[#a78990] tracking-widest">Legacy</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 border-b border-[#584047]/20 relative">
              <div className="absolute inset-0 flex justify-between pointer-events-none">
                <div className="h-full w-px bg-[#584047]/5"></div>
                <div className="h-full w-px bg-[#584047]/5"></div>
                <div className="h-full w-px bg-[#584047]/5"></div>
                <div className="h-full w-px bg-[#584047]/5"></div>
                <div className="h-full w-px bg-[#584047]/10"></div>
              </div>
              <div className="flex-1 flex items-end gap-1.5 h-full z-10">
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[55%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[45%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[85%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7] h-[95%] rounded-t-sm shadow-[0_-4px_12px_rgba(193,31,104,0.3)]"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[50%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-[#ffb1c7]/20 hover:bg-[#ffb1c7]/40 transition-colors h-[80%] rounded-t-sm"></div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-[9px] font-body text-[#a78990] tracking-[0.2em] uppercase">00:00</span>
              <span className="text-[9px] font-body text-[#a78990] tracking-[0.2em] uppercase">06:00</span>
              <span className="text-[9px] font-body text-[#a78990] tracking-[0.2em] uppercase">12:00</span>
              <span className="text-[9px] font-body text-[#a78990] tracking-[0.2em] uppercase">18:00</span>
              <span className="text-[9px] font-body text-[#ffb1c7] font-bold tracking-[0.2em] uppercase">NOW</span>
            </div>
          </div>

          {/* Model Distribution */}
          <div className="glass-card p-8">
            <h4 className="font-headline text-lg font-bold tracking-tight text-[#e5e2e3] mb-8">Model Distribution</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-body tracking-widest uppercase">
                  <span className="text-[#e5e2e3]">GPT-4o</span>
                  <span className="text-[#a78990]">45%</span>
                </div>
                <div className="h-1.5 w-full bg-[#2a2a2b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c11f68] w-[45%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-body tracking-widest uppercase">
                  <span className="text-[#e5e2e3]">Claude 3.5 Sonnet</span>
                  <span className="text-[#a78990]">32%</span>
                </div>
                <div className="h-1.5 w-full bg-[#2a2a2b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c11f68]/80 w-[32%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-body tracking-widest uppercase">
                  <span className="text-[#e5e2e3]">Gemini 1.5 Pro</span>
                  <span className="text-[#a78990]">15%</span>
                </div>
                <div className="h-1.5 w-full bg-[#2a2a2b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c11f68]/60 w-[15%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-body tracking-widest uppercase">
                  <span className="text-[#e5e2e3]">Llama 3 70B</span>
                  <span className="text-[#a78990]">8%</span>
                </div>
                <div className="h-1.5 w-full bg-[#2a2a2b] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c11f68]/40 w-[8%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#584047]/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#c11f68]/10 rounded-sm">
                  <Zap className="w-3.5 h-3.5 text-[#ffb1c7]" />
                </div>
                <p className="text-[9px] font-body text-[#a78990] tracking-wider leading-relaxed">System is currently routing 12% more traffic to <span className="text-[#e5e2e3] font-bold">GPT-4o</span> based on latency optimization rules.</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Logs */}
        <div className="glass-card overflow-hidden">
          <div className="px-8 py-6 border-b border-[#584047]/10 flex justify-between items-center">
            <h4 className="font-headline text-lg font-bold tracking-tight text-[#e5e2e3]">System Logs</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#79dc7c]"></div>
                <span className="text-[10px] font-body text-[#a78990] uppercase tracking-widest">Streaming</span>
              </div>
              <button className="text-[#a78990] hover:text-[#e5e2e3] transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#201f20]/50 border-b border-[#584047]/10">
                  <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Agent Run ID</th>
                  <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Model</th>
                  <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium">Status</th>
                  <th className="px-8 py-4 font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase font-medium text-right">Latency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#584047]/5">
                <tr className="hover:bg-[#201f20]/50 transition-colors group cursor-pointer" onClick={() => window.location.href='/dashboard/executions/RID-9284-AXQ'}>
                  <td className="px-8 py-4 font-mono text-xs text-[#dfbec6] tracking-wider">
                    <Link href="/dashboard/executions/RID-9284-AXQ" className="hover:text-[#ffb1c7] transition-colors">RID-9284-AXQ</Link>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center text-[10px] font-bold text-white">OA</div>
                      <span className="text-xs font-medium text-[#e5e2e3]">GPT-4o-Turbo</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#007725]/20 text-[#79dc7c]">Optimized</span>
                  </td>
                  <td className="px-8 py-4 text-right font-mono text-xs text-[#e5e2e3]">142ms</td>
                </tr>
                <tr className="hover:bg-[#201f20]/50 transition-colors group cursor-pointer" onClick={() => window.location.href='/dashboard/executions/RID-9283-ZLM'}>
                  <td className="px-8 py-4 font-mono text-xs text-[#dfbec6] tracking-wider">
                    <Link href="/dashboard/executions/RID-9283-ZLM" className="hover:text-[#ffb1c7] transition-colors">RID-9283-ZLM</Link>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#7044e3] rounded-sm flex items-center justify-center text-[10px] font-bold text-white">AN</div>
                      <span className="text-xs font-medium text-[#e5e2e3]">Claude 3.5 Sonnet</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#c11f68]/20 text-[#ffb1c7]">Bypass</span>
                  </td>
                  <td className="px-8 py-4 text-right font-mono text-xs text-[#e5e2e3]">289ms</td>
                </tr>
                <tr className="hover:bg-[#201f20]/50 transition-colors group cursor-pointer" onClick={() => window.location.href='/dashboard/executions/RID-9282-YPT'}>
                  <td className="px-8 py-4 font-mono text-xs text-[#dfbec6] tracking-wider">
                    <Link href="/dashboard/executions/RID-9282-YPT" className="hover:text-[#ffb1c7] transition-colors">RID-9282-YPT</Link>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#4285F4] rounded-sm flex items-center justify-center text-[10px] font-bold text-white">GE</div>
                      <span className="text-xs font-medium text-[#e5e2e3]">Gemini 1.5 Pro</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#007725]/20 text-[#79dc7c]">Optimized</span>
                  </td>
                  <td className="px-8 py-4 text-right font-mono text-xs text-[#e5e2e3]">114ms</td>
                </tr>
                <tr className="hover:bg-[#201f20]/50 transition-colors group cursor-pointer" onClick={() => window.location.href='/dashboard/executions/RID-9281-WVB'}>
                  <td className="px-8 py-4 font-mono text-xs text-[#dfbec6] tracking-wider">
                    <Link href="/dashboard/executions/RID-9281-WVB" className="hover:text-[#ffb1c7] transition-colors">RID-9281-WVB</Link>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center text-[10px] font-bold text-white">OA</div>
                      <span className="text-xs font-medium text-[#e5e2e3]">GPT-3.5-Turbo</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#93000a]/20 text-[#ffb4ab]">Failed</span>
                  </td>
                  <td className="px-8 py-4 text-right font-mono text-xs text-[#e5e2e3]">--ms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-8 py-4 bg-[#201f20]/50 flex justify-center">
            <button className="text-[10px] font-bold tracking-widest uppercase text-[#a78990] hover:text-[#ffb1c7] transition-colors">View All Runtime Logs</button>
          </div>
        </div>
    </>
  );
}
