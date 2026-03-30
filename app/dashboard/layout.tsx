import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopAppBar from '@/components/TopAppBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0e0e0f] text-[#e5e2e3] font-inter min-h-screen">
      <style>{`
        .infrastructure-grid {
            background-image: radial-gradient(circle at 1px 1px, rgba(193, 31, 104, 0.05) 1px, transparent 0);
            background-size: 32px 32px;
        }
        .glass-card {
            background: rgba(32, 31, 32, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(88, 64, 71, 0.15);
        }
      `}</style>

      <Sidebar />
      <TopAppBar />

      {/* Main Content */}
      <main className="pl-72 pr-8 pt-24 pb-12 min-h-screen infrastructure-grid selection:bg-[#c11f68] selection:text-[#ffdce4]">
        {children}
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center pl-72 pr-8 w-full mt-auto py-4 border-t border-[#584047]/15 bg-[#0e0e0f]">
        <div className="flex gap-6">
          <a className="font-body text-[10px] uppercase tracking-widest text-[#9a9798] hover:text-[#e5e2e3] transition-colors" href="#">System Status</a>
          <a className="font-body text-[10px] uppercase tracking-widest text-[#9a9798] hover:text-[#e5e2e3] transition-colors" href="#">API Docs</a>
          <a className="font-body text-[10px] uppercase tracking-widest text-[#9a9798] hover:text-[#e5e2e3] transition-colors" href="#">Support</a>
        </div>
        <p className="font-body text-[10px] uppercase tracking-widest text-[#9a9798]">v2.4.0-stable | infrastructure-chic</p>
      </footer>
    </div>
  );
}
