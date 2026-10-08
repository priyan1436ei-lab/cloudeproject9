import { adminStats, knowledgeAreas } from '@/lib/demo-data';

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-red-300">Admin dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Platform overview</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
            <div className="mt-4 text-3xl font-black text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="mb-5 text-sm uppercase tracking-[0.2em] text-slate-400">Knowledge area analytics</div>
        <div className="space-y-4">
          {knowledgeAreas.map((area) => (
            <div key={area.name}>
              <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                <span>{area.name}</span>
                <span>{area.score}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500" style={{ width: `${area.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
