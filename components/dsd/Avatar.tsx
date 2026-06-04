export function PatientAvatar({ name, tone, className = 'h-12 w-12' }: { name: string; tone: string; className?: string }) {
  return <div className={`${className} grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tone} font-serif text-xl font-bold text-white shadow-card`}>{name.split(' ').map((p) => p[0]).join('')}</div>;
}
