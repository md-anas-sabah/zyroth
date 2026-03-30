'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Bot,
  Network,
  Terminal,
  Settings,
  Activity,
  Database
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Agents', href: '/dashboard/agents', icon: Bot },
    { name: 'Workflows', href: '/dashboard/workflows', icon: Network },
    { name: 'Executions', href: '/dashboard/executions', icon: Terminal },
    { name: 'Analytics', href: '/dashboard/analytics', icon: Activity },
    { name: 'Governance', href: '/dashboard/governance', icon: Database },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="flex flex-col h-screen fixed left-0 top-0 z-40 w-64 border-r border-[#584047]/15 bg-[#1c1b1c]">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo.png" alt="Zyroth Logo" className="w-8 h-8 rounded-sm" />
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-[#e5e2e3] font-headline">Zyroth</h1>
            <p className="font-body text-[10px] uppercase tracking-widest text-[#9a9798]">AI Orchestration</p>
          </div>
        </div>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                  isActive 
                    ? 'text-[#c11f68] bg-[#c11f68]/10 border-r-2 border-[#c11f68]' 
                    : 'text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'fill-[#c11f68]' : ''}`} />
                <span className="font-medium text-sm tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto pt-6">
          <button className="w-full py-3 bg-linear-to-r from-[#c11f68] to-[#8e0048] rounded-sm text-[#ffdce4] font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer">
            New Agent
          </button>
        </div>
      </div>
    </aside>
  );
}
