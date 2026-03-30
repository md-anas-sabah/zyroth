'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Bot,
  Network,
  Terminal,
  Settings,
  Activity,
  Database,
  ChevronDown,
  ChevronRight,
  Monitor,
  ShieldCheck,
  Package,
  Layers,
  History
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const pathname = usePathname();
  const [isWorkflowsOpen, setIsWorkflowsOpen] = useState(false);

  // Automatically open workflows if we are on a workflow-related sub-page (optional, for UX)
  useEffect(() => {
    if (pathname.includes('/dashboard/workflows')) {
      setIsWorkflowsOpen(true);
    }
  }, [pathname]);

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Agents', href: '/dashboard/agents', icon: Bot },
    { 
      name: 'Workflows', 
      href: '/dashboard/workflows', 
      icon: Network,
      hasSubmenu: true,
      subItems: [
        { name: 'Agents Library', icon: Bot, href: '/dashboard/workflows#agents' },
        { name: 'Logic', icon: Network, href: '/dashboard/workflows#logic' },
        { name: 'Gates', icon: ShieldCheck, href: '/dashboard/workflows#gates' },
        { name: 'Assets', icon: Package, href: '/dashboard/workflows#assets' },
        { name: 'Logs', icon: Monitor, href: '/dashboard/workflows#logs' },
        { name: 'History', icon: History, href: '/dashboard/workflows#history' },
      ]
    },
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
        <nav className="space-y-1 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            if (item.hasSubmenu) {
              return (
                <div key={item.name} className="flex flex-col">
                  <div 
                    onClick={() => setIsWorkflowsOpen(!isWorkflowsOpen)}
                    className={`flex items-center justify-between gap-3 px-4 py-3 transition-all duration-200 cursor-pointer rounded-sm ${
                      isActive 
                        ? 'text-[#c11f68] bg-[#c11f68]/10' 
                        : 'text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'fill-[#c11f68]' : ''}`} />
                      <span className="font-medium text-sm tracking-wide">{item.name}</span>
                    </div>
                    {isWorkflowsOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  </div>
                  
                  {isWorkflowsOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-[#584047]/15 pl-4">
                      {item.subItems?.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center gap-3 px-3 py-2 text-[#9a9798] hover:text-[#e5e2e3] hover:bg-[#201f20] transition-colors rounded-sm text-[11px] font-bold uppercase tracking-widest"
                          >
                            <SubIcon className="w-3.5 h-3.5" />
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 rounded-sm ${
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
