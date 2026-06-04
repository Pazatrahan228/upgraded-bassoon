export type CaseStatus = 'Active' | 'Waiting review' | 'Patient approval' | 'Completed' | 'Draft';
export type MetricStatus = 'Excellent' | 'Good' | 'Needs correction' | 'Critical';
export type StepStatus = 'Planned' | 'In progress' | 'Completed' | 'Skipped';
export type PhotoStatus = 'Missing' | 'Uploaded' | 'Approved' | 'Retake needed';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  email: string;
  avatarTone: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  contact: string;
  avatarTone: string;
  goals: string;
}

export interface DSDMetric {
  id: string;
  name: string;
  score: number;
  status: MetricStatus;
  doctorExplanation: string;
  patientExplanation: string;
  recommendedCorrection: string;
}

export interface TreatmentStep {
  id: string;
  title: string;
  description: string;
  doctorNote: string;
  patientNote: string;
  duration: string;
  visits: number;
  price: string;
  status: StepStatus;
}

export interface PhotoProtocolItem {
  id: string;
  title: string;
  angle: string;
  status: PhotoStatus;
  checklist: string;
}

export interface CaseTimelineEvent {
  id: string;
  label: string;
  date: string;
  detail: string;
}

export interface ExportReport {
  id: string;
  caseId: string;
  type: string;
  status: 'Ready' | 'Draft' | 'Needs update';
  updatedAt: string;
}

export interface DSDCase {
  id: string;
  patientId: string;
  doctorId: string;
  status: CaseStatus;
  createdAt: string;
  currentPhase: string;
  treatmentType: string;
  progress: number;
  revenue: string;
  priority: 'Standard' | 'High' | 'VIP';
  summary: string;
  clinicalNotes: string;
  metrics: DSDMetric[];
  treatmentPlan: TreatmentStep[];
  photos: PhotoProtocolItem[];
  timeline: CaseTimelineEvent[];
  exports: ExportReport[];
}
