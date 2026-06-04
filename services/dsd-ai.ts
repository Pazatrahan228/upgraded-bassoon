import { analysisMetrics, treatmentPlans } from '@/data/mock-dsd';
import { DSDMetric, TreatmentStep } from '@/types/dsd';

export async function analyzeSmilePhoto(caseId: string): Promise<DSDMetric[]> {
  return analysisMetrics.map((metric, index) => ({ ...metric, score: Math.min(98, metric.score + (caseId.length + index) % 4) }));
}

export async function detectDentalMidline() {
  return { offsetMm: 0.8, confidence: 0.91, note: 'Mock midline detection aligned to facial vertical reference.' };
}

export async function calculateToothProportions() {
  return { centralWidthRatio: 1, lateralWidthRatio: 0.63, canineVisibleRatio: 0.39, confidence: 0.88 };
}

export async function generateTreatmentSuggestions(): Promise<TreatmentStep[]> {
  return treatmentPlans;
}

export async function createPatientFriendlyExplanation(metricName: string) {
  return `This ${metricName.toLowerCase()} item is described in patient-friendly terms for presentation and consent discussion.`;
}

export async function generateDSDReport(caseId: string) {
  return {
    caseId,
    title: 'Fresh Vibes Digital Smile Design Report',
    generatedAt: new Date().toISOString(),
    disclaimer: 'Mock planning report. Clinical decisions require dentist review, records, and informed consent.'
  };
}
