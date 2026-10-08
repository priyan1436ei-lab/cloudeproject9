import { graphEdges, graphNodes } from '@/lib/demo-data';

export default function KnowledgeGraphPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Knowledge graph</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Your connected learning universe</h1>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-300">
          {['Technology', 'Topic', 'Project', 'Skill', 'Course', 'Document', 'Certificate'].map((label) => (
            <span key={label} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5">
              {label}
            </span>
          ))}
        </div>

        <div className="relative h-[620px] overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
          <svg viewBox="0 0 1000 620" className="h-full w-full">
            {graphEdges.map((edge) => {
              const source = graphNodes.find((node) => node.id === edge.source);
              const target = graphNodes.find((node) => node.id === edge.target);

              if (!source || !target) return null;

              return (
                <line
                  key={`${edge.source}-${edge.target}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="rgba(96, 165, 250, 0.55)"
                  strokeWidth="2"
                />
              );
            })}

            {graphNodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="38"
                  fill={node.color}
                  opacity="0.9"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
