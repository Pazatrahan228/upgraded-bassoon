import Link from 'next/link';
import { ArrowUpRight, Download, FolderPlus, ImagePlus, Sparkles } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { PatientAvatar } from '@/components/dsd/Avatar';
import { dsdCases, getDoctor, getPatient } from '@/data/mock-dsd';
import { statusClass } from '@/lib/utils';

export default function DashboardPage() {
  const stats = [
    ['Active DSD cases', dsdCases.filter(c=>c.status==='Active').length, '+18%'],
    ['Waiting for review', dsdCases.filter(c=>c.status==='Waiting review').length, '3 today'],
    ['Patient approvals', dsdCases.filter(c=>c.status==='Patient approval').length, '2 sent'],
    ['Completed cases', dsdCases.filter(c=>c.status==='Completed').length, '96%'],
    ['Monthly DSD revenue', '$48.7k', 'placeholder']
  ];
  return <AppShell title="DSD Dashboard" subtitle="Luxury clinical command center for smile design cases."><div className="space-y-6"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{stats.map(([label,value,meta])=><div key={label} className="premium-card p-5"><p className="text-sm text-taupe">{label}</p><div className="mt-3 flex items-end justify-between"><b className="font-serif text-4xl">{value}</b><span className="text-xs font-bold text-gold">{meta}</span></div></div>)}</div><div className="grid gap-6 xl:grid-cols-[1.5fr_.8fr]"><section className="premium-card p-5"><div className="mb-5 flex items-center justify-between"><h2 className="section-title">Recent DSD cases</h2><Link className="ghost-button" href="/cases">View all</Link></div><div className="space-y-3">{dsdCases.slice(0,6).map(c=>{const p=getPatient(c.patientId), d=getDoctor(c.doctorId);return <Link href={`/cases/${c.id}`} key={c.id} className="flex items-center gap-4 rounded-3xl border border-cream/70 bg-white/65 p-4 transition hover:-translate-y-0.5 hover:shadow-card"><PatientAvatar name={p.name} tone={p.avatarTone}/><div className="min-w-0 flex-1"><h3 className="font-semibold">{p.name}</h3><p className="text-sm text-taupe">{c.treatmentType} · {d.name}</p></div><span className={`status-pill ${statusClass(c.status)}`}>{c.status}</span><span className="hidden text-sm font-bold text-gold md:block">{c.progress}%</span><ArrowUpRight size={18}/></Link>})}</div></section><aside className="space-y-4"><div className="premium-card p-5"><h2 className="section-title">Quick actions</h2><div className="mt-5 grid gap-3">{[['New DSD case',FolderPlus],['Upload photos',ImagePlus],['Open workspace',Sparkles],['Export report',Download]].map(([label,Icon])=><Link href="/workspace/case-001" key={String(label)} className="flex items-center justify-between rounded-2xl bg-white p-4 font-semibold shadow-sm transition hover:bg-charcoal hover:text-white"><span className="flex items-center gap-3"><Icon size={18} className="text-gold"/>{String(label)}</span><ArrowUpRight size={16}/></Link>)}</div></div><div className="premium-card p-5"><h2 className="section-title">Analytics</h2><div className="mt-6 flex h-44 items-end gap-3">{[52,78,61,88,72,96,84].map((h,i)=><div key={i} className="flex-1 rounded-t-full bg-gradient-to-t from-gold to-champagne" style={{height:`${h}%`}} />)}</div><p className="mt-4 text-sm text-taupe">Case acceptance, export velocity, and planned production revenue placeholders.</p></div></aside></div></div></AppShell>;
}
