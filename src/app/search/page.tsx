'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { searchKnowledge } from '@/lib/mock-ai';

export default function SearchPage() {
  const [query, setQuery] = useState('Firebase projects');
  const results = useMemo(() => searchKnowledge(query), [query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Semantic search</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Search your knowledge graph intelligently</h1>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for documents, concepts, topics, projects..."
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {results.map((result) => (
          <div key={`${result.type}-${result.title}`} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200">
                {result.type}
              </span>
              <span className="text-sm font-medium text-emerald-300">Relevance: {result.relevance}%</span>
            </div>
            <div className="text-xl font-semibold text-white">{result.title}</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
