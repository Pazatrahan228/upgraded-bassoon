import { AppShell } from '@/components/layout/AppShell';
import { DSDWorkspace } from '@/components/dsd/Workspace';
import { getCase, getPatient } from '@/data/mock-dsd';
export default async function WorkspacePage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const c=getCase(id), p=getPatient(c.patientId); return <AppShell title="DSD Workspace" subtitle={`${p.name} · Professional smile blueprint editor`}><DSDWorkspace dsdCase={c}/></AppShell> }
