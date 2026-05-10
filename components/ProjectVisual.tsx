import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  const Icon = project.icon;

  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 ${compact ? "h-36" : "h-48"}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
      <div className="absolute left-5 right-5 top-5 rounded-lg border border-white/10 bg-black/30 p-3 shadow-card backdrop-blur">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="font-mono text-[10px] uppercase text-slate-400">{project.category}</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-4/5 rounded bg-white/60" />
          <div className="h-2 w-2/3 rounded bg-white/30" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-10 rounded border border-white/10 bg-white/10" />
            <div className="h-10 rounded border border-white/10 bg-white/10" />
            <div className="h-10 rounded border border-white/10 bg-white/10" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-lg border border-white/15 bg-white/10 backdrop-blur">
        <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
      </div>
    </div>
  );
}
