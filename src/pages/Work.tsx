import { useMemo, useState } from 'react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import type { Project } from '@/types';
import clsx from 'clsx';

const categories: Array<Project['category'] | 'All'> = ['All', 'Web', 'Mobile', 'Design', 'Open Source'];

export default function Work() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Section
      eyebrow="Work"
      title="A catalog of recent projects"
      description="Filter by category to explore the kind of work I love most."
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={clsx(
              'px-3.5 py-1.5 rounded-full text-sm border transition',
              filter === c
                ? 'bg-[var(--color-accent)] text-black border-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-card)]',
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[var(--color-muted)] border border-dashed border-[var(--color-border)] rounded-2xl">
          No projects in this category yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </Section>
  );
}
