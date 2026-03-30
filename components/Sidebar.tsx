import React from 'react';
import {
  LayoutDashboard,
  Bot,
  Network,
  Terminal,
  Settings,
  Activity,
  Database
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen fixed left-0 top-0 z-40 w-64 border-r border-[#584047]/15 bg-[#1c1b1c]">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo.png" alt="Zyroth Logo" className="w-8 h-8 rounded-sm" />
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-[#e5e2e3] font-headline">Zyroth</h1>
            <p className="font-body text-[10px] uppercase tracking-widest text-[#9a9798]">AI Orchestration</p>
          </div>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-[#c11f68] bg-[#c11f68]/10 border-r-2 border-[#c11f68] transition-all duration-200" href="/dashboard">
            <LayoutDashboard className="w-4 h-4 fill-[#c11f68]" />
            <span className="font-medium text-sm tracking-wide">Overview</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-all duration-200" href="/dashboard/agents">
            <Bot className="w-4 h-4" />
            <span className="font-medium text-sm tracking-wide">Agents</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-all duration-200" href="/dashboard/workflows">
            <Network className="w-4 h-4" />
            <span className="font-medium text-sm tracking-wide">Workflows</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-all duration-200" href="/dashboard/executions">
            <Terminal className="w-4 h-4" />
            <span className="font-medium text-sm tracking-wide">Executions</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-all duration-200" href="/dashboard/analytics">
            <Activity className="w-4 h-4" />
            <span className="font-medium text-sm tracking-wide">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-all duration-200" href="/dashboard/governance">
            <Database className="w-4 h-4" />
            <span className="font-medium text-sm tracking-wide">Governance</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-all duration-200" href="/dashboard/settings">
            <Settings className="w-4 h-4" />
            <span className="font-medium text-sm tracking-wide">Settings</span>
          </a>
        </nav>
      </div>
      <div className="mt-auto p-6">
        <button className="w-full py-3 bg-linear-to-r from-[#c11f68] to-[#8e0048] rounded-sm text-[#ffdce4] font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
          New Agent
        </button>
      </div>
    </aside>
  );
}
