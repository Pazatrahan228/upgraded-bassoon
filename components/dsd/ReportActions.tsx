'use client';

import { Download, Printer, Share2 } from 'lucide-react';

export function ReportActions() {
  return (
    <div className="flex gap-2">
      <button onClick={() => window.print()} className="ghost-button inline-flex items-center gap-2"><Printer size={15} /> Print</button>
      <button className="ghost-button inline-flex items-center gap-2"><Download size={15} /> Export PDF</button>
      <button className="gold-button inline-flex items-center gap-2"><Share2 size={15} /> Share with patient</button>
    </div>
  );
}
