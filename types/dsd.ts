export type CaseStatus =
  | "Active"
  | "Review"
  | "Patient approval"
  | "Completed"
  | "Draft";
export type MetricStatus =
  | "Excellent"
  | "Good"
  | "Needs correction"
  | "Critical";
export type StepStatus = "Planned" | "In progress" | "Completed" | "Skipped";
export type PhotoStatus = "Missing" | "Uploaded" | "Approved" | "Retake needed";

export interface Doctor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  contact: string;
  avatar: string;
  membership: string;
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
  description: string;
  status: PhotoStatus;
  checklist: string;
}
export interface CaseTimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  state: "done" | "current" | "upcoming";
}
export interface ExportReport {
  id: string;
  caseId: string;
  type: string;
  status: "Ready" | "Draft" | "Queued";
  updatedAt: string;
}
export interface DSDCase {
  id: string;
  patient: Patient;
  doctor: Doctor;
  status: CaseStatus;
  phase: string;
  treatmentType: string;
  progress: number;
  createdAt: string;
  revenue: string;
  priority: "Standard" | "High" | "Concierge";
  summary: string;
  metrics: DSDMetric[];
  treatmentPlan: TreatmentStep[];
  photos: PhotoProtocolItem[];
  timeline: CaseTimelineEvent[];
  exports: ExportReport[];
  notes: string[];
}
