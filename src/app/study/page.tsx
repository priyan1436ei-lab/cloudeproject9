import { flashcards, quiz, studyPath } from '@/lib/demo-data';

export default function StudyModePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Study mode</p>
        <h1 className="mt-2 text-3xl font-bold text-white">DBMS learning path</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Learning order</div>
          <div className="mt-5 space-y-4">
            {studyPath.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-sm font-semibold text-blue-200">
                  {index + 1}
                </div>
                <div className="text-slate-200">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">Flashcards</div>
            <div className="space-y-4">
              {flashcards.map((card) => (
                <div key={card.question} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Question</div>
                  <div className="mt-2 text-lg text-white">{card.question}</div>
                  <div className="mt-3 text-sm text-slate-300">Answer: {card.answer}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">Quiz preview</div>
            <div className="space-y-3">
              {quiz.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <div className="font-medium text-white">{item.question}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.options.join(' • ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
