import { ArrowLeft, ArrowRight, Bot, Menu, Sparkles } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/documents', label: 'Documents' },
  { href: '/knowledge-graph', label: 'Knowledge Graph' },
  { href: '/assistant', label: 'AI Assistant' },
  { href: '/search', label: 'Search' },
  { href: '/study', label: 'Study Mode' },
  { href: '/admin', label: 'Admin' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">CloudMemory AI</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Turn your documents into knowledge</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/assistant" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 hover:border-slate-500">
            <Sparkles className="h-4 w-4 text-violet-300" />
            Ask AI
          </Link>
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-400">
            Launch app
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 lg:hidden">
          <Menu className="h-4 w-4 text-slate-200" />
        </div>
      </div>
    </header>
  );
}
