'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Plus
} from 'lucide-react';

export default function SecurityGates() {
  const policies = [
    { name: 'PII Redaction', type: 'Data Scanner', status: 'Active', monitored: '14.2 GB', threats: 0 },
    { name: 'Financial Guard', type: 'Rule Engine', status: 'Active', monitored: 'Payments', threats: 12 },
    { name: 'GDPR Compliance', type: 'Audit Log', status: 'Warning', monitored: 'User Data', threats: 2 },
    { name: 'HIPAA Shield', type: 'Encryption', status: 'Active', monitored: 'Health Records', threats: 0 },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-2">Security Gates & Compliance</h1>
            <p className="text-[#9a9798] text-sm uppercase tracking-widest font-bold">Policy Governance & PII Redaction</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-[#c11f68] to-[#8e0048] rounded-sm text-[#ffdce4] font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Add Security Policy
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {policies.map(policy => (
              <div key={policy.name} className="bg-[#1c1b1c]/40 border border-[#584047]/15 p-6 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                    policy.status === 'Active' ? 'bg-[#00eefc]/10 text-[#00eefc]' : 'bg-[#ffdce4]/10 text-[#c11f68]'
                  }`}>
                    {policy.name.includes('PII') && <EyeOff className="w-6 h-6" />}
                    {policy.name.includes('Financial') && <Lock className="w-6 h-6" />}
                    {policy.name.includes('GDPR') && <ShieldCheck className="w-6 h-6" />}
                    {policy.name.includes('HIPAA') && <FileText className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{policy.name}</h3>
                    <div className="flex items-center gap-3 text-[10px] text-[#9a9798] uppercase tracking-widest font-bold">
                      <span>{policy.type}</span>
                      <span className="w-1 h-1 rounded-full bg-[#584047]"></span>
                      <span>Target: {policy.monitored}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] mb-1 ${
                    policy.status === 'Active' ? 'text-[#00eefc]' : 'text-[#c11f68]'
                  }`}>
                    {policy.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {policy.status}
                  </div>
                  <div className="text-[10px] text-[#584047] uppercase tracking-widest font-bold">
                    {policy.threats} Anomalies Detected
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1c1b1c]/80 border border-[#c11f68]/20 p-8 rounded-sm">
            <h3 className="font-headline font-bold text-lg mb-6 border-b border-[#584047]/20 pb-4">Real-Time Threat Intelligence</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-[#c11f68]"></div>
                <div>
                  <div className="text-[10px] text-[#c11f68] font-bold uppercase tracking-widest">Immediate Action Required</div>
                  <p className="text-xs text-[#e5e2e3]/70 font-bold mt-1 tracking-tight italic leading-relaxed">
                    Detected unauthorized SSN access attempt on LangChain Agent-772. Access throttled.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-[#00eefc]"></div>
                <div>
                  <div className="text-[10px] text-[#00eefc] font-bold uppercase tracking-widest">Compliance Update</div>
                  <p className="text-xs text-[#e5e2e3]/70 font-bold mt-1 tracking-tight italic leading-relaxed">
                    GDPR 'Right to Explanation' report successfully generated for Execution #TR-9284.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-[#9a9798]"></div>
                <div>
                  <div className="text-[10px] text-[#9a9798] font-bold uppercase tracking-widest">System Scan</div>
                  <p className="text-xs text-[#e5e2e3]/70 font-bold mt-1 tracking-tight italic leading-relaxed">
                    Weekly PII surface scan completed. No new vulnerabilities found in 2.4TB of logs.
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 py-3 bg-[#c11f68]/10 hover:bg-[#c11f68]/20 text-[#c11f68] font-headline font-bold text-xs uppercase tracking-widest rounded-sm border border-[#c11f68]/30 transition-all">
              View Audit History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
