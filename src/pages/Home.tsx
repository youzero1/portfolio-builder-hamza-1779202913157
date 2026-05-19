import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Star } from 'lucide-react';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import Avatar from '@/components/Avatar';
import { projects, stack, experiences } from '@/lib/data';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--color-accent-2)]/10 blur-3xl animate-float pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32">
          <div className="flex items-center gap-4 mb-8">
            <Avatar size={56} status="online" />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 backdrop-blur text-xs text-[var(--color-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Available for new projects · Q3 2025
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            Designing & building{' '}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-transparent">
              thoughtful
            </span>{' '}
            digital products.
          </h1>

          <p className="mt-6 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
            I'm Alex — a product engineer based in Lisbon. I help startups turn ambitious ideas into
            elegant interfaces, resilient systems, and delightful user experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
            >
              View selected work <ArrowRight size={16} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-card)] transition"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden border border-[var(--color-border)]">
            {[
              { k: '7+', v: 'Years experience' },
              { k: '40+', v: 'Projects shipped' },
              { k: '12', v: 'Happy clients' },
              { k: '8k', v: 'OSS users' },
            ].map((s) => (
              <div key={s.v} className="bg-[var(--color-card)] px-6 py-6">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight">{s.k}</div>
                <div className="text-xs text-[var(--color-muted)] mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)] py-5 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
            {[...stack, ...stack].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                <Star size={14} className="text-[var(--color-accent)]" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <Section
        eyebrow="Selected work"
        title="Recent projects I'm proud of"
        description="A small selection of products I've designed and built — from analytics dashboards to mobile apps and open-source tools."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-accent)] transition"
          >
            See all projects <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* EXPERIENCE PREVIEW */}
      <Section
        eyebrow="Experience"
        title="Building products at fast-moving teams"
        description="From agency days to senior product engineering, here's a quick look at where I've spent my time."
      >
        <div className="space-y-3">
          {experiences.map((e) => (
            <div
              key={e.role + e.company}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/40 transition"
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                  <Sparkles size={14} className="text-[var(--color-accent)]" />
                  {e.period}
                </div>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">
                  {e.role} · <span className="text-[var(--color-muted)] font-normal">{e.company}</span>
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
                  {e.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-xs">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-1 rounded-md bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-surface)] p-10 md:p-16">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Have a project in mind? Let's build it together.
            </h3>
            <p className="mt-3 text-[var(--color-muted)]">
              I'm open to freelance collaborations, full-time roles, and friendly chats.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-card)] transition"
              >
                More about me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
