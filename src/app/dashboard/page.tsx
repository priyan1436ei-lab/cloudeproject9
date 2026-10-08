import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, Database, FileText, Orbit, Search, Sparkles } from 'lucide-react';
import { dashboardStats, documents, knowledgeAreas, knowledgeGaps } from '@/lib/demo-data';

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-glow lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">Your knowledge cloud</p>
            <h1 className="mt-4 text-4xl font-black text-white">Everything you&apos;ve learned, connected.</h1>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: 'Documents', value: dashboardStats.documents },
                { label: 'Concepts', value: dashboardStats.concepts },
                { label: 'Connections', value: dashboardStats.connections },
                { label: 'Knowledge areas', value: dashboardStats.knowledgeAreas },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Knowledge map</span>
              <Sparkles className="h-4 w-4 text-violet-300" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-200">
              {['DBMS', 'AI', 'Cloud', 'SQL', 'Next.js', 'Firebase'].map((node) => (
                <div key={node} className="rounded-xl border border-slate-700 bg-slate-900 px-2 py-3">
                  {node}
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
              <span>Growth</span>
              <span className="font-semibold text-emerald-300">+18.4% this month</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Coverage</span>
            <BrainCircuit className="h-4 w-4 text-blue-300" />
          </div>
          <div className="mt-5 space-y-4">
            {knowledgeAreas.map((area) => (
              <div key={area.name}>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                  <span>{area.name}</span>
                  <span>{area.score}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${area.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Knowledge gaps</span>
            <Search className="h-4 w-4 text-amber-300" />
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {knowledgeGaps.map((gap) => (
              <div key={gap.topic} className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
                <div className="font-medium text-amber-200">{gap.topic}</div>
                <div className="mt-1 text-xs text-slate-300">{gap.reason}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Recent discoveries</span>
            <Orbit className="h-4 w-4 text-emerald-300" />
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {documents.slice(0, 4).map((doc) => (
              <div key={doc.id} className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <div>
                  <div className="font-medium text-white">{doc.title}</div>
                  <div className="text-xs text-slate-400">{doc.category}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-blue-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Document library</h2>
          <Link href="/documents" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:border-slate-500">
            Open library
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {documents.map((doc) => (
            <div key={doc.id} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-2 text-blue-200">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">{doc.title}</div>
                  <div className="text-xs text-slate-400">{doc.category}</div>
                </div>
              </div>
              <div className="text-sm text-slate-300">{doc.summary}</div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>{doc.topics.length} topics</span>
                <span>{doc.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
