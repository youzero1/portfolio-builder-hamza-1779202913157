import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/types';

type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/40 transition-all duration-300">
      <div className="aspect-[16/10] overflow-hidden bg-[var(--color-surface)]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-[var(--color-muted)] mb-3">
          <span className="px-2 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)]">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-1 rounded-md bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
            >
              Live <ArrowUpRight size={14} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition ml-auto"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
