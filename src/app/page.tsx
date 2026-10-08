import Link from 'next/link';
import { ArrowRight, BrainCircuit, Database, FileText, GraphIcon, Search, ShieldCheck } from 'lucide-react';
import { documents, knowledgeAreas, knowledgeGaps } from '@/lib/demo-data';

const features = [
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Upload PDFs, notes, research papers, presentations, and project reports.',
  },
  {
    icon: GraphIcon,
    title: 'Knowledge Graph',
    description: 'Turn topics into connected concepts with relationship-aware discovery.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    description: 'Find answers even when your query is phrased differently from the source text.',
  },
  {
    icon: BrainCircuit,
    title: 'RAG Assistant',
    description: 'Ask grounded questions and get answers with source citations and confidence.',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
              <BrainCircuit className="h-3.5 w-3.5" />
              Cloud-Based Personal Knowledge Graph
            </div>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white lg:text-6xl">
              Your Documents Are More Than Files.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              CloudMemory AI transforms scattered academic and personal documents into a connected,
              searchable personal knowledge graph.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-glow transition hover:bg-blue-400">
                Build My Knowledge Cloud
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/search" className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-slate-100 transition hover:border-slate-500">
                Explore Demo
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                <div className="text-2xl font-bold text-white">{documents.length}</div>
                <div>Documents indexed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{knowledgeAreas.length}</div>
                <div>Knowledge areas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{knowledgeGaps.length}</div>
                <div>Possible gaps</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Knowledge flow</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-300">
                  Active
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                {['PDF', 'DOCX', 'PPT', 'Notes', 'Certificates'].map((item) => (
                  <div key={item} className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>

              <div className="my-5 flex justify-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              </div>

              <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 via-slate-900 to-violet-500/10 p-5 text-center">
                <div className="text-lg font-semibold text-white">CLOUDMEMORY AI</div>
                <div className="mt-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-300">
                  <span>extract</span>
                  <span>•</span>
                  <span>connect</span>
                  <span>•</span>
                  <span>reason</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Knowledge graph</div>
                <div className="mt-4 grid grid-cols-4 gap-3 text-center text-xs text-slate-200">
                  {['DBMS', 'SQL', 'AI', 'Next.js'].map((topic) => (
                    <div key={topic} className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-3">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">How it works</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Turn every document into understanding.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30">
              <div className="mb-5 inline-flex rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 text-blue-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-300">Knowledge areas</p>
            <h2 className="mt-4 text-3xl font-bold text-white">A connected learning system</h2>
          </div>
          <Link href="/dashboard" className="text-sm font-medium text-blue-300 hover:text-blue-200">
            View dashboard →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {knowledgeAreas.map((area) => (
            <div key={area.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-white">{area.name}</span>
                <span className="rounded-full bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-200">
                  {area.score}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${area.score}%` }} />
              </div>
              <div className="mt-4 text-sm text-slate-300">{area.topics.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">AI Assistant</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Ask grounded questions from your own knowledge base.</h2>
            </div>
            <Link href="/assistant" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400">
              Open assistant
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
              <div className="text-sm text-slate-400">Example question</div>
              <div className="mt-3 text-lg text-white">“Explain how ACID properties relate to transaction management.”</div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
              <div className="text-sm text-slate-400">Answer</div>
              <div className="mt-3 text-lg text-white">
                ACID properties ensure transactions remain atomic, consistent, isolated, and durable, which is essential for reliable transaction processing in DBMS.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-300">Knowledge gaps</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Possible learning gaps, clearly surfaced.</h2>
            <div className="mt-6 space-y-4">
              {knowledgeGaps.slice(0, 3).map((gap) => (
                <div key={gap.topic} className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-amber-200">{gap.topic}</span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-xs text-amber-200">
                      Possible gap
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{gap.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">Security & privacy</h3>
              <ShieldCheck className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="space-y-4 text-slate-300">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                Firebase auth and Firestore rules isolate each user’s knowledge graph.
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                Document uploads are validated, scanned for supported types, and processed in a modular pipeline.
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                Demo mode runs without external AI credentials while still showing the real product workflow.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">Build your full knowledge cloud</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Ready to connect your learning?</h2>
          <Link href="/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
            Start building my knowledge cloud
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
