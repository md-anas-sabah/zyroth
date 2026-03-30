'use client';

import React from 'react';
import { 
  Terminal as TerminalIcon, 
  Search, 
  ChevronRight, 
  Filter, 
  Download, 
  Play, 
  Clock, 
  Activity,
  AlertCircle
} from 'lucide-react';

export default function ExecutionLogs() {
  const logs = [
    { id: 'TR-9284-LX', workflow: 'Process Refund', step: 'RefundCalculator', status: 'Success', time: '14:32:15', latency: '342ms', cost: '$0.004' },
    { id: 'TR-9283-PZ', workflow: 'Lead Scoring', step: 'EmailParser', status: 'Warning', time: '14:31:02', latency: '1.2s', cost: '$0.120' },
    { id: 'TR-9282-TR', workflow: 'Data Ingest', step: 'S3_Uploader', status: 'Success', time: '14:28:45', latency: '89ms', cost: '$0.001' },
    { id: 'TR-9281-ER', workflow: 'Policy Check', step: 'Validator', status: 'Error', time: '14:25:30', latency: '45ms', cost: '$0.000' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-2">Execution Logs</h1>
            <p className="text-[#9a9798] text-sm uppercase tracking-widest font-bold">Real-time Distributed Tracing</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1b1c] border border-[#584047]/15 rounded-sm text-[#9a9798] hover:text-[#e5e2e3] transition-colors font-bold text-[10px] uppercase tracking-widest">
              <Download className="w-4 h-4" /> Export Logs
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1b1c] border border-[#c11f68]/30 rounded-sm text-[#ffdce4] transition-colors font-bold text-[10px] uppercase tracking-widest">
              <Play className="w-4 h-4 text-[#c11f68]" /> Live Stream
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#584047]" />
            <input 
              type="text" 
              placeholder="Filter by Trace ID, Workflow, or Error Code..." 
              className="w-full bg-[#1c1b1c] border border-[#584047]/15 rounded-sm py-3 pl-12 pr-4 text-sm outline-none focus:border-[#c11f68]/40 transition-colors"
            />
          </div>
          <button className="px-4 py-2 bg-[#1c1b1c] border border-[#584047]/15 rounded-sm text-[#9a9798] hover:text-[#e5e2e3] flex items-center gap-2 transition-colors">
            <Filter className="w-4 h-4" /> Complexity
          </button>
        </div>

        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="bg-[#1c1b1c]/40 backdrop-blur-md border border-[#584047]/15 rounded-sm p-5 hover:border-[#c11f68]/30 transition-all group">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className={`p-2 rounded-full ${
                    log.status === 'Success' ? 'bg-[#00eefc]/10 text-[#00eefc]' : 
                    log.status === 'Warning' ? 'bg-[#ff944d]/10 text-[#ff944d]' : 'bg-[#c11f68]/10 text-[#c11f68]'
                  }`}>
                    {log.status === 'Error' ? <AlertCircle className="w-4 h-4" /> : <TerminalIcon className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-sm tracking-tighter text-[#e5e2e3] font-bold">{log.id}</span>
                      <span className="text-[10px] text-[#584047] uppercase tracking-widest font-bold font-headline">{log.workflow}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-[#9a9798] uppercase tracking-widest font-bold">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {log.time}</span>
                      <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> {log.latency}</span>
                      <span className="text-[#c11f68]/80">{log.cost}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                      log.status === 'Success' ? 'text-[#00eefc]' : 
                      log.status === 'Warning' ? 'text-[#ff944d]' : 'text-[#c11f68]'
                    }`}>
                      {log.status}
                    </div>
                    <div className="text-[9px] text-[#584047] uppercase font-bold tracking-tighter">{log.step}</div>
                  </div>
                  <button className="p-2 text-[#584047] hover:text-[#e5e2e3] transition-colors"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
