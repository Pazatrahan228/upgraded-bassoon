import { AppShell } from '@/components/layout/AppShell';
import { TreatmentPlanBuilder } from '@/components/dsd/TreatmentPlanBuilder';
import { getCase, getPatient } from '@/data/mock-dsd';
export default async function TreatmentPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const c=getCase(id), p=getPatient(c.patientId); return <AppShell title="Treatment Plan Builder" subtitle={`${p.name} · staged aesthetic dentistry proposal`}><TreatmentPlanBuilder steps={c.treatmentPlan}/></AppShell> }
