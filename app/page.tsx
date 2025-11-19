import Link from "next/link";
import { projects } from "../lib/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function HomePage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <main className="flex flex-1 flex-col gap-10 pb-10">
      {/* Top header */}
      <header className="space-y-4 border-b border-slate-800 pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Portfolio
        </p>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Jay Keaze
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
              Self-taught builder working across{" "}
              <span className="text-slate-100">
                backend, UI, and systems
              </span>
              . I like shipping small tools that feel fast, local, and
              practical—things people can actually use today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a
              href="mailto:jay@keaze.example" 
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium hover:border-indigo-500 hover:text-indigo-300"
            >
              Email
            </a>
            <a
              href="https://github.com/jkz1one"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium hover:border-indigo-500 hover:text-indigo-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Projects section */}
      <section aria-labelledby="projects-heading" className="space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2
              id="projects-heading"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Real things I’ve shipped: desktop apps, Raspberry Pi dashboard,
              stock screener, and my own artist site.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-xs font-medium text-slate-400 underline-offset-4 hover:text-indigo-300 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="mt-2 grid gap-4 md:grid-cols-2">
          {sorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
