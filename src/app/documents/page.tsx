import Link from 'next/link';
import { ArrowUpRight, FileText, Filter, Search, Sparkles } from 'lucide-react';
import { documents } from '@/lib/demo-data';

export default function DocumentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Document library</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Your knowledge assets</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">
            <Search className="h-4 w-4" />
            Search documents
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">
            <Filter className="h-4 w-4" />
            Filter
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((doc) => (
          <div key={doc.id} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-2 text-blue-200">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">{doc.title}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{doc.category}</div>
                </div>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                {doc.status}
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-300">{doc.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {doc.topics.slice(0, 4).map((topic) => (
                <span key={topic} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
              <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-2">
                <div className="text-base font-bold text-white">{doc.concepts}</div>
                <div>Concepts</div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-2">
                <div className="text-base font-bold text-white">{doc.connections}</div>
                <div>Links</div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-2">
                <div className="text-base font-bold text-white">{doc.priority}</div>
                <div>Priority</div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                AI summary ready
              </div>
              <Link href={`/documents/${doc.id}`} className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-400">
                Open
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
