import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export default function TopAppBar() {
  return (
    <header className="flex justify-between items-center w-full pl-72 pr-8 h-16 fixed top-0 z-30 bg-[#0e0e0f]/80 backdrop-blur-xl border-b border-[#584047]/15">
      <div className="flex items-center w-1/3">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a78990] w-4 h-4" />
          <input className="w-full bg-[#353436]/30 border-none focus:ring-1 focus:ring-[#c11f68] text-xs font-body tracking-widest py-2 pl-10 placeholder:text-[#a78990]/50 rounded-sm text-[#e5e2e3] outline-none" placeholder="SEARCH AGENTS, LOGS, OR MODELS..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-[#584047]/30 pr-6">
          <button className="text-[#a78990] hover:text-[#ffb1c7] transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="text-[#a78990] hover:text-[#ffb1c7] transition-colors">
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-widest text-[#e5e2e3] uppercase">System Admin</p>
            <p className="text-[9px] text-[#a78990] tracking-wider uppercase">Tier 04 Access</p>
          </div>
          <img alt="User Avatar" className="w-8 h-8 rounded-sm object-cover grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIjPBTG5-S-Sg35G6vjnyQV62JSuWPMg_vbK2IJAU7TlmgVTNo_5VXAXL35Hqi_IPyZEQL2cwI2RZU4GLnNShzOx9XXz30FGvEKstEYGj4NqP66kumtwz3bIATrdzMwUpXvt2zlNzE0T2fkWHnHH90LGuO43gdL5tmB8eL4Md4JLEgErFrtuy_GzVQ42P46ABAzAXNgCrcLs_jKVtRPheLVAfR4GWtlqx7ImNK-Kw-DxhWOplKtgiBBoaAy7V-4AD8iYoHk_eZrX7m" />
        </div>
      </div>
    </header>
  );
}
