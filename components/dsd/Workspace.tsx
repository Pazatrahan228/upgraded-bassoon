'use client';
import { useState } from 'react';
import { Download, Eye, Grid3X3, LineChart, RotateCcw, ScanFace, Smile, Upload } from 'lucide-react';
import { DSDCase } from '@/types/dsd';
import { DSDAnalysisPanel } from './AnalysisPanel';
import { SmileVisual } from './SmileVisual';

const tools = [Upload, Eye, Smile, Grid3X3, ScanFace, LineChart, RotateCcw, Download];
export function DSDWorkspace({ dsdCase }: { dsdCase: DSDCase }) {
  const [overlay, setOverlay] = useState(true);
  return <div className="grid gap-5 xl:grid-cols-[86px_1fr_390px]"><aside className="premium-card flex flex-row gap-2 p-3 xl:flex-col">{tools.map((Icon, i)=><button key={i} onClick={()=>i===1 && setOverlay(!overlay)} className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-gold shadow-sm transition hover:-translate-y-0.5 hover:bg-charcoal hover:text-champagne"><Icon size={20}/></button>)}</aside><section className="space-y-4"><div className="premium-card flex flex-wrap items-center justify-between gap-3 p-4"><div className="flex flex-wrap gap-2">{['Upload photo','Add midline','Smile curve','Golden ratio','Tooth grid','Facial symmetry','Incisal edge','Lower lip'].map((t)=><button key={t} className="ghost-button">{t}</button>)}</div><button className="gold-button">Export design</button></div><div className="premium-card dsd-grid-bg p-4"><SmileVisual overlay={overlay} className="h-[640px] shadow-premium" /></div><div className="premium-card flex flex-wrap items-center justify-between gap-3 p-4"><span className="text-sm text-taupe">Case {dsdCase.id} · Overlay blueprint v2.4 · Real AI hooks prepared</span><div className="flex gap-2"><button className="ghost-button">Reset</button><button className="gold-button">Save mockup</button></div></div></section><DSDAnalysisPanel metrics={dsdCase.metrics}/></div>;
}
