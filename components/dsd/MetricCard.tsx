import { statusClass } from '@/lib/utils';
import { DSDMetric } from '@/types/dsd';

export function DSDMetricCard({ metric }: { metric: DSDMetric }) {
  return (
    <article className="rounded-3xl border border-cream/80 bg-white/75 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-semibold text-charcoal">{metric.name}</h3>
        <span className={`status-pill ${statusClass(metric.status)}`}>{metric.status}</span>
      </div>
      <div className="mb-3 h-2 rounded-full bg-cream"><div className="h-2 rounded-full bg-gradient-to-r from-champagne to-gold" style={{ width: `${metric.score}%` }} /></div>
      <p className="text-xs font-bold text-gold">Score {metric.score}/100</p>
      <p className="mt-3 text-sm text-taupe">{metric.doctorExplanation}</p>
      <div className="mt-3 rounded-2xl bg-ivory/80 p-3 text-xs text-taupe"><b className="text-charcoal">Recommended correction:</b> {metric.recommendedCorrection}</div>
    </article>
  );
}
