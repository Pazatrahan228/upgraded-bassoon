import { Brain, ClipboardCheck, MessageCircle } from 'lucide-react';
import { DSDMetric } from '@/types/dsd';
import { DSDMetricCard } from './MetricCard';

export function DSDAnalysisPanel({ metrics }: { metrics: DSDMetric[] }) {
  return (
    <aside className="space-y-4">
      <div className="premium-card p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">AI-style planning</p>
        <h2 className="mt-1 font-serif text-3xl font-semibold">Analysis panel</h2>
        <p className="mt-2 text-sm text-taupe">Mock recommendations for doctor review only. Not a diagnosis.</p>
      </div>
      <div className="grid gap-3">{metrics.map((metric) => <DSDMetricCard key={metric.id} metric={metric} />)}</div>
      <div className="premium-card space-y-3 p-5">
        {[['Recommended correction', 'Prioritize midline verification, incisal edge refinement, and additive width calibration.'], ['Clinical note', 'Validate DSD findings with exam, radiographs, occlusion, periodontal health, and patient consent.'], ['Patient-friendly explanation', 'The proposed design makes the smile appear broader, smoother, and more balanced while preserving a natural look.']].map(([title, text], i) => {
          const Icon = [Brain, ClipboardCheck, MessageCircle][i];
          return <div key={title} className="rounded-2xl bg-white/70 p-4"><div className="mb-2 flex items-center gap-2 font-semibold"><Icon size={16} className="text-gold" />{title}</div><p className="text-sm text-taupe">{text}</p></div>;
        })}
      </div>
    </aside>
  );
}
