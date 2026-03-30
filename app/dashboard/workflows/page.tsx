'use client';

import React, { useState } from 'react';
import { 
  Undo2, 
  Redo2, 
  Settings, 
  Bot, 
  Network, 
  Terminal as TerminalIcon, 
  History as HistoryIcon, 
  Plus, 
  ChevronRight as ChevronRightIcon,
  ZoomIn as ZoomInIcon, 
  ZoomOut as ZoomOutIcon, 
  Focus,
  MoreVertical,
  CheckCircle2,
  X,
  ChevronDown
} from 'lucide-react';

export default function WorkflowsCanvas() {
  const [selectedNode, setSelectedNode] = useState('Data Ingestor v1');

  const nodes = [
    {
      id: 'AGNT-7729-LX',
      type: 'Agent',
      name: 'Data Ingestor v1',
      status: 'Running',
      progress: 82,
      latency: 124,
      position: { left: '15%', top: '45%' },
      color: '#c11f68'
    },
    {
      id: 'GATE-4432-PZ',
      type: 'Gate',
      name: 'Validate Schema',
      status: 'Idle',
      condition: "if (payload.type === 'auth')",
      lastCheck: '2m ago',
      position: { left: '42%', top: '32%' }, // Slightly closer to center
      color: '#a78990'
    },
    {
      id: 'LOOP-8812-TR',
      type: 'Iterator',
      name: 'Batch Processor',
      status: 'Nominal',
      limit: 100,
      position: { left: '68%', top: '15%' },
      color: '#c11f68'
    },
    {
      id: 'MAN-1190-ER',
      type: 'Manual Action',
      name: 'Edge Review',
      status: 'Error',
      description: 'Awaiting supervisor approval for token override.',
      position: { left: '68%', top: '65%' },
      color: '#ffb4ab'
    }
  ];

  return (
    <div className="fixed inset-0 pl-64 pt-16 flex flex-col bg-[#0e0e0f] text-[#e5e2e3] font-body overflow-hidden">
      <style>{`
        .canvas-grid {
          background-image: radial-gradient(rgba(193, 31, 104, 0.08) 0.5px, transparent 0.5px);
          background-size: 24px 24px;
        }
        .node-active {
          box-shadow: 0 0 25px -5px rgba(193, 31, 104, 0.4);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s infinite ease-in-out;
        }
      `}</style>
      
      {/* Sub Top Navigation (Workflow Specific) */}
      <div className="h-14 border-b border-[#584047]/15 bg-[#0e0e0f]/80 backdrop-blur-md flex justify-between items-center px-6 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#a78990] uppercase tracking-widest font-bold">Canvas</span>
            <ChevronRightIcon className="w-3 h-3 text-[#a78990]/40" />
            <span className="text-sm font-bold text-[#e5e2e3] tracking-tight">Main_Flow_Production</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-[#e5e2e3]/40 hover:text-[#e5e2e3] font-medium text-[11px] uppercase tracking-widest transition-colors" href="#">Nodes</a>
            <a className="text-[#c11f68] border-b border-[#c11f68] pb-1 font-bold text-[11px] uppercase tracking-widest" href="#">Workflows</a>
            <a className="text-[#e5e2e3]/40 hover:text-[#e5e2e3] font-medium text-[11px] uppercase tracking-widest transition-colors" href="#">Deployments</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 mr-4 border-r border-[#584047]/15 pr-4">
            <button className="p-2 text-[#a78990] hover:text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all rounded-sm" title="Undo"><Undo2 className="w-4 h-4" /></button>
            <button className="p-2 text-[#a78990] hover:text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all rounded-sm" title="Redo"><Redo2 className="w-4 h-4" /></button>
            <button className="p-2 text-[#a78990] hover:text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all rounded-sm" title="Workflow Stats"><Network className="w-4 h-4" /></button>
          </div>
          <button className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all rounded-sm border border-[#584047]/20">Test Run</button>
          <button className="px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest bg-linear-to-r from-[#c11f68] to-[#8e0048] text-[#ffdce4] rounded-sm transition-transform active:scale-95 shadow-lg shadow-[#c11f68]/20">Deploy</button>
        </div>
      </div>

      <div className="flex-1 flex relative">
        {/* Central Canvas - expanded to fill workspace */}
        <main className="flex-1 bg-surface-container-low relative overflow-hidden canvas-grid">
          
          {/* Draggable Node Sidebar/Toolbox - Now Floating Button */}
          <div className="absolute top-6 left-6 z-10">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1b1c] hover:bg-[#2a2a2b] text-[#e5e2e3] text-[10px] font-bold uppercase tracking-widest rounded-sm border border-[#584047]/30 shadow-2xl transition-colors pointer-events-auto">
              <Plus className="w-3.5 h-3.5 text-[#c11f68]" />
              Add Node
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 bg-[#1c1b1c]/90 backdrop-blur-md px-4 py-2 rounded-sm border border-[#584047]/30 shadow-2xl">
            <button className="p-1 text-[#a78990] hover:text-[#c11f68] transition-colors"><ZoomInIcon className="w-4 h-4" /></button>
            <span className="text-[10px] font-mono text-[#a78990] border-x border-[#584047]/30 px-4">84%</span>
            <button className="p-1 text-[#a78990] hover:text-[#c11f68] transition-colors"><ZoomOutIcon className="w-4 h-4" /></button>
            <button className="ml-2 p-1 text-[#a78990] hover:text-[#c11f68] transition-colors"><Focus className="w-4 h-4" /></button>
          </div>

          {/* Canvas Workspace */}
          <div className="absolute inset-0 p-20 flex items-center justify-center">
            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#c11f68', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ffb1c7', stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>
              <path className="opacity-80 drop-shadow-[0_0_8px_rgba(193,31,104,0.3)]" d="M 420 380 C 500 380, 500 280, 580 280" fill="none" stroke="url(#grad1)" strokeWidth="2" />
              <circle cx="580" cy="280" fill="#c11f68" r="3" className="animate-pulse" />
              <path className="opacity-40" d="M 820 280 C 870 280, 890 450, 950 450" fill="none" stroke="#584047" strokeDasharray="4" strokeWidth="2" />
              <path className="opacity-80" d="M 820 280 C 870 280, 890 150, 950 150" fill="none" stroke="#c11f68" strokeWidth="2" />
            </svg>

            {/* Nodes */}
            {nodes.map((node) => (
              <div 
                key={node.id} 
                onClick={() => setSelectedNode(node.name)}
                className={`absolute w-60 p-4 rounded-sm border cursor-move transition-all duration-300 ${
                  selectedNode === node.name ? 'node-active border-[#c11f68]/60 bg-[#1c1b1c]/90' : 'border-[#584047]/30 bg-[#1c1b1c]/70'
                } backdrop-blur-md`}
                style={{ left: node.position.left, top: node.position.top }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <span className={`text-[8px] font-bold uppercase tracking-[0.2em] mb-1 ${node.status === 'Error' ? 'text-[#ffb4ab]' : 'text-[#c11f68]/80'}`}>
                      {node.type}
                    </span>
                    <h3 className="font-headline text-[13px] font-bold text-[#e5e2e3] tracking-tight">{node.name}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                    node.status === 'Running' ? 'bg-[#007725]/20 text-[#79dc7c]' : 
                    node.status === 'Error' ? 'bg-[#93000a]/20 text-[#ffb4ab]' :
                    'bg-[#2a2a2b] text-[#a78990]'
                  }`}>
                    {node.status === 'Running' && <span className="w-1 h-1 rounded-full bg-[#79dc7c] animate-pulse-dot"></span>}
                    {node.status}
                  </span>
                </div>

                {node.type === 'Agent' && (
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-[8px] text-[#a78990] uppercase tracking-widest font-bold">
                      <span>Buffer Load</span>
                      <span className="text-[#e5e2e3]/70">{node.progress}%</span>
                    </div>
                    <div className="w-full bg-[#2a2a2b] h-1 rounded-full overflow-hidden">
                      <div className="bg-[#c11f68] h-full shadow-[0_0_10px_rgba(193,31,104,0.6)]" style={{ width: `${node.progress}%` }}></div>
                    </div>
                    <div className="pt-3 border-t border-[#584047]/15 flex justify-between items-center text-[9px] font-mono text-[#a78990]">
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full border border-surface-container-low bg-[#c11f68]/20 flex items-center justify-center">
                          <Bot className="w-3 h-3 text-[#ffb1c7]" />
                        </div>
                        <div className="w-5 h-5 rounded-full border border-surface-container-low bg-[#2a2a2b] flex items-center justify-center">
                          <Plus className="w-3 h-3 text-[#a78990]" />
                        </div>
                      </div>
                      <span>latency: {node.latency}ms</span>
                    </div>
                  </div>
                )}

                {node.type === 'Gate' && (
                  <div className="mt-4 space-y-3">
                    <div className="bg-surface-container-low/50 p-2 rounded-sm border border-[#584047]/20">
                      <code className="text-[10px] text-[#ffb1c7]/70 font-mono tracking-tighter block truncate">{node.condition}</code>
                    </div>
                    <div className="flex justify-between items-center text-[8px] text-[#a78990] font-bold uppercase tracking-widest">
                      <span>Sync check: {node.lastCheck}</span>
                      <MoreVertical className="w-3 h-3" />
                    </div>
                  </div>
                )}

                {node.type === 'Iterator' && (
                  <div className="mt-4 flex gap-1">
                    <div className="w-full h-8 bg-surface-container-low/50 flex items-center justify-center rounded-sm border border-[#584047]/20">
                      <span className="text-[10px] font-mono text-[#a78990] tracking-widest uppercase">Limit: {node.limit}</span>
                    </div>
                  </div>
                )}

                {node.type === 'Manual Action' && (
                  <div className="mt-4 space-y-3">
                    <p className="text-[10px] text-[#a78990] leading-relaxed italic">{node.description}</p>
                    <button className="w-full py-1.5 bg-[#ffb4ab] text-[#690005] text-[10px] font-bold rounded-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                      Resolve Error
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Toast Notification */}
          <div className="absolute bottom-6 right-6 pointer-events-none">
            <div className="pointer-events-auto bg-[#1c1b1c] text-[#a78990] px-4 py-2 rounded-sm border border-[#584047]/30 flex items-center gap-3 shadow-2xl">
              <CheckCircle2 className="w-4 h-4 text-[#79dc7c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Cloud Synchronized</span>
            </div>
          </div>
        </main>

        {/* Configuration Panel (Right Sidebar) */}
        <aside className="w-80 bg-[#1c1b1c] border-l border-[#584047]/15 flex flex-col z-10">
          <div className="p-5 border-b border-[#584047]/15">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-lg font-bold text-[#e5e2e3]">Configuration</h2>
              <button className="text-[#a78990] hover:text-[#e5e2e3] transition-colors"><X className="w-4 h-4" /></button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#2a2a2b] rounded-sm border border-[#c11f68]/30">
              <div className="w-10 h-10 rounded-sm bg-[#c11f68]/20 flex items-center justify-center border border-[#c11f68]/40">
                <Bot className="w-5 h-5 text-[#ffb1c7]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#e5e2e3]">{selectedNode}</h4>
                <span className="text-[9px] text-[#a78990] font-mono uppercase tracking-widest">ID: {nodes.find(n => n.name === selectedNode)?.id}</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-8 custom-scrollbar">
            <section>
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a78990]/50 block mb-4">Model Settings</label>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#a78990] mb-2 block tracking-wider">Base Model</span>
                  <div className="relative">
                    <select className="w-full bg-[#2a2a2b] border-b border-[#584047]/40 focus:border-[#c11f68] text-xs py-2 px-3 outline-none appearance-none cursor-pointer text-[#e5e2e3]">
                      <option>GPT-4o Production</option>
                      <option>Claude 3.5 Sonnet</option>
                      <option>Llama 3 70B (Local)</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2 text-[#a78990] w-4 h-4 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase font-bold text-[#a78990] tracking-wider">Temperature</span>
                    <span className="text-[10px] font-mono text-[#c11f68]">0.74</span>
                  </div>
                  <input className="w-full accent-[#c11f68] h-[3px] bg-[#2a2a2b] rounded-full appearance-none cursor-pointer" type="range" min="0" max="100" defaultValue="74" />
                </div>
              </div>
            </section>

            <section>
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a78990]/50 block mb-4">Identity & Intent</label>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#a78990] mb-2 block tracking-wider">System Prompt</span>
                  <textarea className="w-full bg-surface-container-low border border-[#584047]/30 rounded-sm text-xs p-3 h-32 outline-none focus:border-[#c11f68]/50 transition-colors text-[#e5e2e3] placeholder:text-[#a78990]/30" placeholder="Define the agent behavior..."></textarea>
                </div>
              </div>
            </section>

            <section>
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a78990]/50 block mb-4">Runtime Logic</label>
              <div className="flex items-center justify-between p-3 bg-surface-container-low/40 border border-[#584047]/10 rounded-sm">
                <span className="text-[11px] text-[#e5e2e3]/80 uppercase font-bold tracking-tighter">Parallel Processing</span>
                <div className="w-8 h-4 bg-[#c11f68]/30 rounded-full relative flex items-center border border-[#c11f68]/50">
                  <div className="w-2.5 h-2.5 bg-[#ffb1c7] rounded-full absolute right-0.5 shadow-[0_0_8px_rgba(193,31,104,1)]"></div>
                </div>
              </div>
            </section>
          </div>

          <div className="p-5 bg-[#1c1b1c] border-t border-[#584047]/15">
            <div className="flex gap-3">
              <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest bg-[#2a2a2b] hover:bg-[#353436] text-[#e5e2e3] rounded-sm transition-colors border border-[#584047]/20">Reset</button>
              <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest bg-linear-to-r from-[#c11f68] to-[#8e0048] text-[#ffdce4] rounded-sm shadow-lg shadow-[#c11f68]/20 transition-transform active:scale-95">Apply</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
