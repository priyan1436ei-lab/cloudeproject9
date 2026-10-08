'use client';

import { useState } from 'react';
import { askAssistant } from '@/lib/mock-ai';

export default function AssistantPage() {
  const [question, setQuestion] = useState('Explain how ACID properties relate to transaction management.');
  const [answer, setAnswer] = useState(() => askAssistant('Explain how ACID properties relate to transaction management.'));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAnswer(askAssistant(question));
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">AI assistant</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Ask questions from your uploaded knowledge</h1>
      </div>

      <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="min-h-[120px] w-full rounded-2xl border border-slate-700 bg-slate-950/70 p-4 text-white outline-none placeholder:text-slate-500"
          placeholder="Ask a question about your documents..."
        />
        <div className="mt-4 flex justify-end">
          <button type="submit" className="rounded-xl bg-emerald-500 px-5 py-2.5 font-semibold text-slate-950 hover:bg-emerald-400">
            Ask CloudMemory AI
          </button>
        </div>
      </form>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Answer</div>
          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
            Confidence: {answer.confidence}
          </div>
        </div>

        <p className="text-lg leading-8 text-slate-100">{answer.answer}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <div className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-400">Sources</div>
            <ul className="space-y-2 text-sm text-slate-300">
              {answer.sources.map((source) => (
                <li key={source} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2">
                  {source}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <div className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-400">Related concepts</div>
            <div className="flex flex-wrap gap-2">
              {answer.relatedConcepts.map((concept) => (
                <span key={concept} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
