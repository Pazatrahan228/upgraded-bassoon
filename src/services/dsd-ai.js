import { getCase, metrics, treatment } from "../data.js";

export async function analyzeSmilePhoto(caseId) {
  return getCase(caseId).metrics.map((metric) => ({
    ...metric,
    doctorExplanation: `${metric.doctorExplanation} Mock AI confidence: ${(metric.score / 100).toFixed(2)}.`,
  }));
}

export async function detectDentalMidline() {
  return {
    deviationMm: 1.2,
    direction: "right",
    confidence: 0.84,
    note: "Mock midline detection only; confirm with calibrated clinical records.",
  };
}

export async function calculateToothProportions() {
  return {
    centralRatio: "1.00",
    lateralRatio: "0.72",
    canineRatio: "0.61",
    recommendation: "Refine lateral incisor emergence profile in preview.",
  };
}

export async function generateTreatmentSuggestions() {
  return treatment.map((step) => ({
    ...step,
    doctorNote: `${step.doctorNote} Generated as planning support, not an autonomous diagnosis.`,
  }));
}

export function createPatientFriendlyExplanation(metric = metrics[0]) {
  return `${metric.patientExplanation} The Fresh Vibes team will review this visually and clinically before recommending care.`;
}

export async function generateDSDReport(caseId) {
  return {
    id: `report-${caseId}`,
    caseId,
    type: "Premium DSD presentation",
    status: "Ready",
    updatedAt: new Date().toISOString().slice(0, 10),
  };
}
