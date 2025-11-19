import Link from "next/link";
import type { Project } from "../lib/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="group relative flex flex-col gap-3 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-950/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-500/70 hover:shadow-[0_18px_45px_rgba(15,23,42,0.75)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            <Link href={`/projects/${project.slug}`}>
              <span className="absolute inset-0" aria-hidden="true" />
              {project.name}
            </Link>
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {project.shortTagline}
          </p>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
          Featured
        </span>
      </div>

      <p className="text-sm text-slate-300 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-900/80 px-2 py-0.5 text-xs text-slate-300 ring-1 ring-slate-700/80"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-xs text-slate-400 ring-1 ring-slate-700/80">
            +{project.techStack.length - 4} more
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <div className="flex gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-indigo-400"
          >
            <span>View code</span>
            <span aria-hidden="true">↗</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-indigo-400"
            >
              <span>Live demo</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <span className="text-[11px] uppercase tracking-wide text-slate-500">
          Case study →
        </span>
      </div>
    </article>
  );
}
