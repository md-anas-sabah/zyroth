'use client';

import React, { useState } from 'react';
import { 
  Activity, 
  List, 
  GitBranch, 
  Database, 
  Settings, 
  ChevronRight, 
  Cpu, 
  Zap, 
  Clock, 
  AlertCircle,
  Copy,
  Terminal,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ExecutionFlightRecorder() {
  const params = useParams();
  const id = params?.id as string || 'EX-9821';
  const [activeTab, setActiveTab] = useState('trace');

  const tabs = [
    { id: 'live', label: 'Live Stream', icon: Activity },
    { id: 'logs', label: 'Logs', icon: List },
    { id: 'trace', label: 'Trace', icon: GitBranch },
    { id: 'state', label: 'State', icon: Database },
    { id: 'env', label: 'Environment', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs & Navigation */}
      <div className="mb-8 flex items-center gap-3">
        <Link 
          href="/dashboard" 
          className="p-2 bg-[#1c1b1c] hover:bg-[#2a2a2b] border border-[#584047]/20 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 text-[#a78990] group-hover:text-[#e5e2e3]" />
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.2em] text-[#a78990] uppercase">
            <span>Executions</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#ffdce4] font-bold">Flight Recorder</span>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-[#e5e2e3]">
            {id}
          </h2>
        </div>
      </div>

      {/* Primary Info Header */}
      <div className="glass-card mb-8 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 border-l-[#c11f68]">
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c11f68]/10 flex items-center justify-center border border-[#c11f68]/20">
                  <Activity className="w-6 h-6 text-[#ffb1c7]" />
              </div>
              <div>
                  <p className="font-body text-[10px] tracking-[0.2em] text-[#a78990] uppercase mb-1">Instance Identifier</p>
                  <p className="font-headline text-xl font-bold text-[#e5e2e3]">Flight-8829</p>
              </div>
          </div>
          <div className="flex gap-4">
              <div className="h-10 px-4 flex items-center gap-2 border border-[#584047]/20 bg-[#151415]">
                  <div className="w-2 h-2 rounded-full bg-[#ffb1c7] animate-pulse"></div>
                  <span className="font-body text-[10px] tracking-widest text-[#e5e2e3] uppercase font-bold">Live Monitoring</span>
              </div>
              <button className="h-10 px-6 bg-[#c11f68] hover:bg-[#a01a56] transition-colors text-[10px] font-bold tracking-widest text-white uppercase whitespace-nowrap">
                  Relaunch Run
              </button>
          </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-[#584047]/15 mb-8">
          {tabs.map((tab) => (
              <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative ${
                      activeTab === tab.id 
                          ? 'text-[#ffb1c7]' 
                          : 'text-[#a78990] hover:text-[#e5e2e3]'
                  }`}
              >
                  <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-[#ffb1c7]' : 'text-[#a78990]'}`} />
                  {tab.label}
                  {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c11f68] shadow-[0_-4px_8px_rgba(193,31,104,0.4)]"></div>
                  )}
              </button>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
            {/* Trace Timeline */}
            <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border border-[#c11f68] bg-[#0e0e0f] flex items-center justify-center z-10">
                            <div className="w-2 h-2 rounded-full bg-[#ffb1c7]"></div>
                        </div>
                        <div className="w-px h-full bg-[#584047]/30 my-1 group-last:hidden"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <div className="glass-card p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-headline text-lg font-bold text-[#e5e2e3]">Routing Agent</h3>
                                <span className="text-[10px] font-mono text-[#a78990]">14:02:11.402</span>
                            </div>
                            <p className="text-xs text-[#a78990] font-body mb-4">Analyzing intent and selecting downstream toolchain based on session context.</p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-[#c11f68]/10 border border-[#c11f68]/20 text-[9px] font-bold text-[#ffb1c7] uppercase tracking-wider">Context Loaded</span>
                                <span className="px-2 py-1 bg-[#1c1b1c] border border-[#584047]/20 text-[9px] font-bold text-[#a78990] uppercase tracking-wider">intent: data_gen</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border border-[#c11f68] bg-[#0e0e0f] flex items-center justify-center z-10">
                            <div className="w-2 h-2 rounded-full bg-[#ffb1c7]"></div>
                        </div>
                        <div className="w-px h-full bg-[#584047]/30 my-1 group-last:hidden"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <div className="glass-card p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-headline text-lg font-bold text-[#e5e2e3]">Model Call: GPT-4o</h3>
                                <span className="text-[10px] font-mono text-[#a78990]">14:02:12.854</span>
                            </div>
                            <p className="text-xs text-[#a78990] font-body mb-4">Synthesizing response based on documentation context and system constraints.</p>
                            <div className="bg-black/40 border border-[#584047]/20 p-3 rounded-sm font-mono text-[11px] text-[#dfbec6] mb-4">
                                prompt_hash: 8f2a...91bc (32.1kb)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 - Error State */}
                <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border border-red-500/50 bg-[#0e0e0f] flex items-center justify-center z-10 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                            <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <div className="w-px h-full bg-[#584047]/30 my-1 group-last:hidden"></div>
                    </div>
                    <div className="flex-1 pb-8">
                        <div className="bg-red-500/5 border border-red-500/20 rounded-sm p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-headline text-lg font-bold text-white">Output Validation</h3>
                                    <p className="text-xs text-red-400 font-body">Verifying output against schema security constraints.</p>
                                </div>
                                <span className="text-[10px] font-mono text-red-400/70 tracking-widest uppercase font-bold">Critical Failure</span>
                            </div>
                            
                            {/* Validation Error */}
                            <div className="glass-card bg-black/60! border-red-500/20 p-4 mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="w-3.5 h-3.5 text-red-400" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Error Log: Schema Mismatch</span>
                                    </div>
                                    <button className="p-1.5 hover:bg-white/5 rounded-sm transition-colors">
                                        <Copy className="w-3 h-3 text-[#a78990]" />
                                    </button>
                                </div>
                                <pre className="font-mono text-[11px] text-red-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`[14:02:13.104] FATAL: Validation failed for field 'security_token'. 
Expected: UUID_V4 
Received: "undefined" 
Traceback: zyroth.internal.validators.schema.validate_output()`}
                                </pre>
                            </div>

                            {/* Recommended Fix */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-[#79dc7c]">
                                    <Zap className="w-3.5 h-3.5" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Recommended AI Fix</span>
                                </div>
                                <div className="p-4 bg-[#0a0a0b] border border-[#79dc7c]/20 rounded-sm">
                                    <p className="text-xs text-[#a78990] mb-4">The agent failed to extract the security token from the LLM response. Update the system prompt to enforce explicit JSON key mapping.</p>
                                    <pre className="font-mono text-[11px] text-[#79dc7c] overflow-x-auto">
{`{
  "execution_id": "EX-9821",
  "agent_config": {
    "version": "7.0.4-stable",
    "tools": ["vector_search", "api_executor"]
  },
  "constraints": {
    "security_level": "strict"
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Sidebar Metrics Area */}
        <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6">
                <h4 className="font-headline text-sm font-bold text-[#e5e2e3] uppercase tracking-widest mb-6 pb-4 border-b border-[#584047]/15">Runtime Performance</h4>
                <div className="space-y-6">
                    <div>
                        <p className="text-[9px] font-body text-[#a78990] uppercase tracking-[0.2em] mb-2">LLM Model</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-black border border-[#584047]/30 rounded-sm flex items-center justify-center font-bold text-white text-[10px]">GP</div>
                            <div>
                                <p className="text-xs font-bold text-[#e5e2e3]">GPT-4o</p>
                                <p className="text-[10px] text-[#a78990]">Provider: OpenAI</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[9px] font-body text-[#a78990] uppercase tracking-[0.2em] mb-1">Tokens Used</p>
                            <div className="flex items-center gap-2">
                                <Cpu className="w-3.5 h-3.5 text-[#ffb1c7]" />
                                <p className="text-lg font-headline font-bold text-[#e5e2e3]">2,419</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[9px] font-body text-[#a78990] uppercase tracking-[0.2em] mb-1">Latency</p>
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-[#ffb1c7]" />
                                <p className="text-lg font-headline font-bold text-[#e5e2e3]">1,842ms</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-[#584047]/10">
                        <div className="flex justify-between items-center text-[10px] font-bold text-[#a78990] uppercase tracking-widest mb-2">
                            <span>Percentile Ranking</span>
                            <span className="text-[#ffb1c7]">98th</span>
                        </div>
                        <div className="h-1 w-full bg-[#1c1b1c] rounded-full overflow-hidden">
                            <div className="h-full bg-[#c11f68] w-[98%] shadow-[0_0_8px_rgba(193,31,104,0.4)]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6">
                <h4 className="font-headline text-sm font-bold text-[#e5e2e3] uppercase tracking-widest mb-6 pb-4 border-b border-[#584047]/15">Operational Tools</h4>
                <div className="space-y-2">
                    <button className="w-full h-10 px-4 flex justify-between items-center text-[10px] font-bold tracking-widest text-[#a78990] hover:text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all uppercase border border-transparent hover:border-[#584047]/20 group">
                        Export Execution Artifacts
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full h-10 px-4 flex justify-between items-center text-[10px] font-bold tracking-widest text-[#a78990] hover:text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all uppercase border border-transparent hover:border-[#584047]/20 group">
                        Inspect Vector Embeddings
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full h-10 px-4 flex justify-between items-center text-[10px] font-bold tracking-widest text-[#a78990] hover:text-[#e5e2e3] hover:bg-[#1c1b1c] transition-all uppercase border border-transparent hover:border-[#584047]/20 group">
                        System Configuration Patch
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
