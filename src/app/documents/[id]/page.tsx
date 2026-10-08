import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, Link2, Sparkles, Tags } from 'lucide-react';
import { notFound } from 'next/navigation';
import { documents } from '@/lib/demo-data';

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  const document = documents.find((item) => item.id === params.id);

  if (!document) {
    notFound();
  }

  const relatedDocuments = documents.filter((item) => item.id !== document.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <Link href="/documents" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Back to documents
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-3 text-blue-200">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{document.title}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{document.category}</div>
              </div>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
              {document.status}
            </span>
          </div>

          <div className="space-y-6 text-slate-300">
            <div>
              <div className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-400">Summary</div>
              <p className="leading-7">{document.summary}</p>
            </div>

            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">Topics</div>
              <div className="flex flex-wrap gap-2">
                {document.topics.map((topic) => (
                  <span key={topic} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">{topic}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">AI-generated summary</div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4 text-slate-200">
                This document covers the core principles of {document.topics[0]}, connecting them to related concepts such as {document.topics.slice(1, 3).join(', ')} and emphasizing practical application in real-world academic and project workflows.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-slate-400">
              <Tags className="h-4 w-4" />
              Metadata
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <span>Concepts</span>
                <span className="font-semibold text-white">{document.concepts}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <span>Connections</span>
                <span className="font-semibold text-white">{document.connections}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <span>Priority</span>
                <span className="font-semibold text-white">{document.priority}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-slate-400">
              <BookOpen className="h-4 w-4" />
              Related documents
            </div>
            <div className="space-y-3">
              {relatedDocuments.map((item) => (
                <Link key={item.id} href={`/documents/${item.id}`} className="block rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-200 transition hover:border-slate-500">
                  <div className="font-medium text-white">{item.title}</div>
                  <div className="mt-1 text-xs text-slate-400">{item.category}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-slate-400">
              <Sparkles className="h-4 w-4" />
              Actions
            </div>
            <div className="grid gap-3">
              <Link href="/assistant" className="rounded-xl bg-blue-500 px-3 py-2 text-center font-medium text-white hover:bg-blue-400">Ask AI</Link>
              <Link href="/knowledge-graph" className="rounded-xl border border-slate-700 px-3 py-2 text-center font-medium text-slate-200 hover:border-slate-500">View graph</Link>
              <button className="rounded-xl border border-slate-700 px-3 py-2 text-center font-medium text-slate-200 hover:border-slate-500">Generate summary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
