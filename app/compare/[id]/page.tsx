import { AppShell } from '@/components/layout/AppShell';
import { BeforeAfterSlider } from '@/components/dsd/BeforeAfterSlider';
import { getCase, getPatient } from '@/data/mock-dsd';
export default async function ComparePage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const c=getCase(id), p=getPatient(c.patientId); return <AppShell title="Before / After Comparison" subtitle={`${p.name} · Original smile vs planned DSD preview`}><BeforeAfterSlider/></AppShell> }
