'use client';

import React from 'react';
import { 
  Plus, 
  Search, 
  File, 
  Image as ImageIcon, 
  Video, 
  Music, 
  HardDrive, 
  Download, 
  Trash2, 
  MoreHorizontal 
} from 'lucide-react';

export default function AssetManager() {
  const assets = [
    { name: 'Invoice_Q4_2025.pdf', type: 'PDF', size: '2.4 MB', modified: '2h ago', status: 'Ready' },
    { name: 'Training_Data_v2.csv', type: 'DATA', size: '158 MB', modified: '1d ago', status: 'In Use' },
    { name: 'Banner_Asset_01.png', type: 'IMG', size: '1.1 MB', modified: '4h ago', status: 'Ready' },
    { name: 'Voice_Memo_7.mp3', type: 'AUDIO', size: '8.4 MB', modified: '3d ago', status: 'Ready' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight mb-2">Asset Manager</h1>
            <p className="text-[#9a9798] text-sm uppercase tracking-widest font-bold">Multi-Modal Orchestration Storage</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1c1b1c] border border-[#584047]/15 rounded-sm text-[#e5e2e3] font-headline font-bold text-xs uppercase tracking-widest hover:bg-[#201f20] transition-colors">
              <Download className="w-4 h-4 text-[#c11f68]" /> Batch Import
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-[#c11f68] to-[#8e0048] rounded-sm text-[#ffdce4] font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" /> Upload Asset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#c11f68]/10 flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-[#c11f68]" />
            </div>
            <div>
              <div className="text-[10px] text-[#584047] font-bold uppercase tracking-widest mb-1">Total Storage</div>
              <div className="text-xl font-headline font-bold">4.2 / 10 TB</div>
            </div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#00eefc]/10 flex items-center justify-center">
              <File className="w-5 h-5 text-[#00eefc]" />
            </div>
            <div>
              <div className="text-[10px] text-[#584047] font-bold uppercase tracking-widest mb-1">Total Assets</div>
              <div className="text-xl font-headline font-bold">12,402</div>
            </div>
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm flex items-center gap-4 text-[#ffdce4]/50">
            <Plus className="w-8 h-8 m-auto opacity-20" />
          </div>
          <div className="bg-[#1c1b1c] border border-[#584047]/15 p-6 rounded-sm flex items-center gap-4 text-[#ffdce4]/50">
            <Plus className="w-8 h-8 m-auto opacity-20" />
          </div>
        </div>

        <div className="bg-[#1c1b1c]/40 border border-[#584047]/15 rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#584047]/15 bg-[#171617]/50">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Asset Name</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Type</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Size</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Status</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]">Last Modified</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-[#584047]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#584047]/10">
              {assets.map((asset) => (
                <tr key={asset.name} className="hover:bg-[#c11f68]/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-[#584047]/10 flex items-center justify-center">
                        {asset.type === 'PDF' && <File className="w-4 h-4 text-[#c11f68]" />}
                        {asset.type === 'DATA' && <HardDrive className="w-4 h-4 text-[#c11f68]" />}
                        {asset.type === 'IMG' && <ImageIcon className="w-4 h-4 text-[#c11f68]" />}
                        {asset.type === 'AUDIO' && <Music className="w-4 h-4 text-[#c11f68]" />}
                      </div>
                      <span className="font-bold text-sm tracking-tight">{asset.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded-sm bg-[#584047]/20 text-[#a78990] font-bold uppercase tracking-widest">{asset.type}</span>
                  </td>
                  <td className="px-6 py-5 text-sm font-mono">{asset.size}</td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      asset.status === 'Ready' ? 'text-[#00eefc]' : 'text-[#c11f68]'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[10px] uppercase font-bold text-[#584047]">{asset.modified}</td>
                  <td className="px-6 py-5 text-right font-bold uppercase">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#a78990] hover:text-[#e5e2e3] transition-colors"><Trash2 className="w-4 h-4" /></button>
                      <button className="text-[#a78990] hover:text-[#e5e2e3] transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
