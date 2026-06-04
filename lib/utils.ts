type ClassValue = string | number | false | null | undefined | Record<string, boolean> | ClassValue[];

export function cn(...inputs: ClassValue[]) {
  return inputs.flatMap((input): string[] => {
    if (!input) return [];
    if (Array.isArray(input)) return [cn(...input)];
    if (typeof input === 'object') return Object.entries(input).filter(([, value]) => value).map(([key]) => key);
    return [String(input)];
  }).join(' ');
}

export function statusClass(status: string) {
  const map: Record<string, string> = {
    Active: 'border-sage/25 bg-sage/10 text-[#55745b]',
    'Waiting review': 'border-amber-300/40 bg-amber-100/50 text-amber-800',
    'Patient approval': 'border-champagne/35 bg-champagne/10 text-gold',
    Completed: 'border-emerald-300/40 bg-emerald-100/50 text-emerald-800',
    Draft: 'border-taupe/25 bg-taupe/10 text-taupe',
    Excellent: 'border-emerald-300/50 bg-emerald-50 text-emerald-800',
    Good: 'border-sage/35 bg-sage/10 text-[#55745b]',
    'Needs correction': 'border-amber-300/50 bg-amber-50 text-amber-800',
    Critical: 'border-rose/35 bg-rose/10 text-rose',
    Missing: 'border-taupe/25 bg-taupe/10 text-taupe',
    Uploaded: 'border-blue-300/40 bg-blue-50 text-blue-700',
    Approved: 'border-emerald-300/50 bg-emerald-50 text-emerald-800',
    'Retake needed': 'border-rose/35 bg-rose/10 text-rose',
    Planned: 'border-champagne/35 bg-champagne/10 text-gold',
    'In progress': 'border-blue-300/40 bg-blue-50 text-blue-700',
    Skipped: 'border-taupe/25 bg-taupe/10 text-taupe'
  };
  return map[status] ?? 'border-cream bg-white text-taupe';
}
