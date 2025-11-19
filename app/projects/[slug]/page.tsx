import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "../../../lib/projects";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-8 pb-10">
      <header className="space-y-3 border-b border-slate-800 pb-5">
        <Link
          href="/"
          className="text-xs text-slate-400 hover:text-indigo-300"
        >
          ← Back to overview
        </Link>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.name}
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            {project.shortTagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-medium hover:border-indigo-500 hover:text-indigo-300"
          >
            <span>View repository</span>
            <span aria-hidden="true">↗</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-medium hover:border-indigo-500 hover:text-indigo-300"
            >
              <span>Live site</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Overview
        </h2>
        <p className="text-sm text-slate-200">{project.description}</p>
        <p className="text-sm text-slate-300">{project.role}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Highlights
          </h2>
          <ul className="space-y-2 text-sm text-slate-200">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Stack
          </h2>
          <ul className="flex flex-wrap gap-1.5 text-xs text-slate-200">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-slate-900/80 px-2.5 py-1 ring-1 ring-slate-700/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
