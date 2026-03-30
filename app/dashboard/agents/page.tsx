import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  MoreVertical, 
  Plus, 
  Search, 
  Filter, 
  Terminal,
  Cpu,
  Database,
  Activity,
  Zap,
  Box
} from 'lucide-react';

export default function AgentRegistry() {
  const agents = [
    {
      id: 'CORTEX-X1',
      name: 'Agent Alpha',
      framework: 'LangChain',
      status: 'nominal',
      efficiency: '$0.0021',
      unit: '/1k tkn',
      tags: ['DATA_MINING', 'SQL_EXEC'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8NQ7bBhP_BtwvUR6C2sro0p5U351MmNLQ3eS7lbRT-3cbMYoIZTIntI5E4uPNiG3UYXHnUM1rG2gsz03IO3dNVRhEm5mYTMTyq7IWkmriLcdEW8vH7XcHXzN81pVA_P5pLEXHZC1sKJm5EiFLzE67EviwqqXVb7pMS5WzDgGvWtM2Ds-M0WDZ3EPFGZ2vzZs_mgMIGZW3rnehX5B7gar5qke0m1vIjiQyrEF0JU0GKwvlm_OOZDxsvR-zjgWq8UhZ7ALYiFEx5aD',
      trend: [2, 4, 3, 5, 4]
    },
    {
      id: 'KINETIC-GRID',
      name: 'Agent Beta',
      framework: 'CrewAI',
      status: 'nominal',
      efficiency: '$0.0084',
      unit: '/1k tkn',
      tags: ['TEXT_GENERATION', 'SEO_OPS'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLUCql9s8nJ72NWi4Ay-KOPLwlO6F2u1LzpNtYn_8BcD5Nbx7Pj_mihKPH9Qf7-n68nA1kIExqdASwnzh7d8kKSv4uHuUcl7T6l1iuCf_6kITecAxpqUGF2fZrcLVinEzTeDuysXQY8V68bfkVUR5hyMmr3q1DP8MfkdTWIHo6r6AWBzLism90nLzhfbmp-jZ-p5PAaDUSuVg6CxDm06TFGEfWdT8s--UEvZ1uBcFR9aOJlaFHAmUoz1sWcM4r4g1aE4XajG1nx1Ul',
      trend: [1, 2, 4, 3, 5]
    },
    {
      id: 'AUTO-CODE-V3',
      name: 'Agent Gamma',
      framework: 'AutoGPT',
      status: 'error',
      efficiency: '$0.0120',
      unit: '/1k tkn',
      tags: ['CODE_ANALYSIS', 'REFACTOR'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnDzWFByqoDTGctx4oAwSiUju2fJekWJVMxjfLyMYRd0mRZpR6vfv01xDWbVFOe14RiNTzZaxp1G4DMQ8SmkwNKLdYTJAhLXxbgc-JCiKLwRp4b3n_aSY5kONlsLpPvhAOMAubLkVVOmAifi5Hld5L_18xPfSgysZ5geS3mkKnUaAc4ERk7vxzVp2PFvLRvQUZbm1yV-Hm6b2jIOHZL6Q2RL7PGzzKSrBsJRlj9zPVo8hg3uNinTx0i00cZ71D5zddQ2s676yVeKS7',
      trend: [5, 4, 6, 5, 4]
    },
    {
      id: 'LOGIC-STREAM',
      name: 'Agent Delta',
      framework: 'LangChain',
      status: 'nominal',
      efficiency: '$0.0009',
      unit: '/1k tkn',
      tags: ['VALIDATION'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvPAiITDtPGJBThkIEyCE7-bIo0NrlT9ZyCewsd2FOnlLjO3ZCO8YCDBV8LMqIiWiffFg09D5k2ofPnRE3BuBXbpAwowONECnOmZuVvFUssh4O8TTWGjEg0AZqEXRCX6W9cYF6u1j5gO1bVxlVWYJ2fbtXruAwREWRIAJv5K_ktrDinQA8knCxnPTuU9NqxNGt-aEdfEIDe8iPLYodX3WPTmsQX1nci3m3q4C0eXI6zWnpcDYVtIaMeKHFgqhgEaF6c1nzFznrMhTX',
      trend: [1, 1, 2, 1, 1.5]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <style>{`
        .infrastructure-gradient {
          background: linear-gradient(135deg, #ffb1c7 0%, #c11f68 100%);
        }
        .ghost-border {
          border: 1px solid rgba(88, 64, 71, 0.15);
        }
      `}</style>

      {/* Hero Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="glass-card p-6 ghost-border">
          <div className="text-[10px] font-medium text-[#a78990] uppercase tracking-widest mb-2 font-body">Total Agents</div>
          <div className="text-4xl font-light font-headline text-[#e5e2e3]">1,284</div>
          <div className="text-[10px] text-[#79dc7c] mt-2 flex items-center gap-1 font-body">
            <TrendingUp className="w-3 h-3" />
            +12.4% VS LAST PERIOD
          </div>
        </div>
        <div className="glass-card p-6 ghost-border">
          <div className="text-[10px] font-medium text-[#a78990] uppercase tracking-widest mb-2 font-body">Avg. Latency</div>
          <div className="text-4xl font-light font-headline text-[#e5e2e3]">142<span className="text-lg ml-1 opacity-40">ms</span></div>
          <div className="text-[10px] text-[#ffb4ab] mt-2 flex items-center gap-1 font-body">
            <TrendingDown className="w-3 h-3" />
            -4MS DEVIATION
          </div>
        </div>
        <div className="glass-card p-6 ghost-border">
          <div className="text-[10px] font-medium text-[#a78990] uppercase tracking-widest mb-2 font-body">Network Load</div>
          <div className="text-4xl font-light font-headline text-[#e5e2e3]">84.2<span className="text-lg ml-1 opacity-40">%</span></div>
          <div className="w-full bg-[#353436] h-1 mt-4 rounded-full overflow-hidden">
            <div className="bg-[#c11f68] h-full w-[84%] shadow-[0_0_8px_rgba(193,31,104,0.4)]"></div>
          </div>
        </div>
        <div className="glass-card p-6 ghost-border">
          <div className="text-[10px] font-medium text-[#a78990] uppercase tracking-widest mb-2 font-body">Registry Status</div>
          <div className="text-4xl font-light font-headline text-[#79dc7c] flex items-center gap-3">
            NOMINAL
            <span className="w-3 h-3 rounded-full bg-[#79dc7c] animate-pulse"></span>
          </div>
          <div className="text-[10px] text-[#a78990] mt-2 tracking-tight font-body">Sync active across 14 clusters</div>
        </div>
      </div>

      {/* Agent Grid Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold font-headline tracking-tight text-[#e5e2e3]">Active Registrations</h2>
          <p className="text-[10px] text-[#a78990] uppercase tracking-[0.2em] mt-1 font-body">Node: ZY-ALPHA-4 | Cluster: us-east-monolith-01</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1c1b1c] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#e5e2e3] border border-[#584047]/20 hover:bg-[#2a2a2b] transition-colors">Sort: Recent</button>
          <button className="bg-[#1c1b1c] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#e5e2e3] border border-[#584047]/20 hover:bg-[#2a2a2b] transition-colors">View: Compressed</button>
        </div>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className={`glass-card p-5 group hover:bg-[#2a2a2b]/60 transition-all cursor-pointer relative overflow-hidden border-l-2 ${agent.status === 'error' ? 'border-l-[#ffb4ab]' : 'border-l-transparent hover:border-l-[#c11f68]'}`}>
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4 text-[#c11f68]" />
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#353436] flex items-center justify-center rounded-sm ghost-border overflow-hidden">
                <img alt={agent.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={agent.image} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#e5e2e3] font-headline tracking-tight">{agent.id}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-[#1c1b1c] px-2 py-0.5 text-[9px] font-bold text-[#a78990] uppercase tracking-widest ghost-border group-hover:text-[#ffb1c7] group-hover:border-[#c11f68]/30 transition-colors">
                    {agent.framework}
                  </span>
                  <span className={`flex h-1.5 w-1.5 rounded-full ${agent.status === 'error' ? 'bg-[#ffb4ab]' : 'bg-[#79dc7c]'}`}></span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-[#a78990] mb-1 font-body">Efficiency Score</div>
                  <div className="text-xl font-bold text-[#e5e2e3] font-headline">
                    {agent.efficiency}
                    <span className="text-[10px] text-[#a78990] ml-1 font-body lowercase tracking-normal">{agent.unit}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-body uppercase tracking-widest text-[#a78990] mb-2">Latency Trend</div>
                  <div className="flex items-end gap-1 h-6">
                    {agent.trend.map((val, i) => (
                      <div 
                        key={i} 
                        className={`w-1 rounded-t-[1px] transition-all duration-300 ${agent.status === 'error' ? 'bg-[#ffb4ab]' : 'bg-[#c11f68]'} group-hover:opacity-100`} 
                        style={{ height: `${val * 20}%`, opacity: 0.4 + (i * 0.15) }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {agent.tags.map(tag => (
                  <span key={tag} className="text-[9px] bg-[#353436]/40 px-2 py-1 text-[#a78990] border border-[#584047]/10 uppercase tracking-tighter font-body group-hover:border-[#c11f68]/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {agent.status === 'error' && (
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ffb4ab]"></div>
            )}
          </div>
        ))}

        {/* Registration CTA Card */}
        <div className="border border-dashed border-[#584047]/30 flex flex-col items-center justify-center p-8 group hover:border-[#c11f68]/50 transition-all cursor-pointer bg-[#1c1b1c]/10 hover:bg-[#c11f68]/5">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1c1b1c] mb-4 group-hover:scale-110 transition-transform ghost-border group-hover:border-[#c11f68]/50">
            <Plus className="w-6 h-6 text-[#c11f68]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a78990] group-hover:text-[#e5e2e3] transition-colors font-body">Register New Entity</span>
        </div>
      </div>

      {/* Technical Footer Overlay (Content Internal) */}
      <div className="mt-12 pt-6 border-t border-[#584047]/15 flex items-center justify-between text-[9px] font-mono text-[#a78990] uppercase tracking-widest">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#79dc7c]"></span> 
            NODE: ZY-ALPHA-4
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#79dc7c]"></span> 
            API: v4.21.0
          </span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#a78990]/60">LATENCY: 42ms</span>
          <span className="text-[#a78990]/60">REGISTRY_SIG: 0x82f..e41</span>
        </div>
      </div>
    </div>
  );
}
