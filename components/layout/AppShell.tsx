import Link from 'next/link';
import { BarChart3, FileText, Gem, LayoutDashboard, Search, Smile, Sparkles, Stethoscope, Users } from 'lucide-react';

const nav = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/cases', label: 'DSD Cases', icon: Smile },
  { href: '/workspace/case-001', label: 'Workspace', icon: Sparkles },
  { href: '/compare/case-001', label: 'Compare', icon: BarChart3 },
  { href: '/treatment/case-001', label: 'Treatment', icon: Stethoscope },
  { href: '/report/case-001', label: 'Report', icon: FileText }
];

export function AppShell({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="min-h-screen p-4 lg:p-6">
      <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="premium-card sticky top-6 hidden h-[calc(100vh-48px)] flex-col p-5 lg:flex">
          <Link href="/dashboard" className="mb-8 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-charcoal text-champagne shadow-card"><Gem size={23} /></span>
            <span>
              <span className="block font-serif text-2xl font-semibold leading-6">Fresh Vibes</span>
              <span className="text-xs uppercase tracking-[0.24em] text-taupe">DSD Studio</span>
            </span>
          </Link>
          <nav className="space-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-taupe transition hover:bg-white hover:text-charcoal hover:shadow-card">
                <item.icon size={18} className="text-gold" /> {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto rounded-[24px] border border-champagne/25 bg-gradient-to-br from-charcoal to-[#4a3c2a] p-5 text-white shadow-premium">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-champagne">Demo ready</p>
            <h3 className="font-serif text-2xl">Premium smile planning</h3>
            <p className="mt-2 text-sm text-white/70">Mock AI and report architecture prepared for Supabase and real imaging.</p>
          </div>
        </aside>
        <main>
          <header className="premium-card mb-6 flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-gold">Fresh Vibes Dental</p>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-charcoal">{title}</h1>
              {subtitle ? <p className="mt-1 text-sm text-taupe">{subtitle}</p> : null}
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-cream bg-white/80 px-4 py-3 md:flex">
                <Search size={16} className="text-taupe" /><span className="text-sm text-taupe">Search cases, patients...</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white bg-white/80 p-2 pr-4 shadow-card">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#f3d7b3] to-gold text-sm font-bold text-white">AM</span>
                <span className="hidden text-sm font-semibold md:block">Dr. Ava</span>
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
