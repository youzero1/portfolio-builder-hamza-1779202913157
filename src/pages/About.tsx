import { Coffee, Globe, Heart, Zap } from 'lucide-react';
import Section from '@/components/Section';
import { skillGroups, experiences } from '@/lib/data';

export default function About() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A product engineer who cares about the details"
        description="I've spent the last seven years working across startups and agencies, sitting between design and engineering. I believe great products are made of thousands of tiny good decisions."
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              I grew up tinkering with PCs and writing small games in BASIC. Today I focus on
              building polished web and mobile experiences — with a soft spot for typography,
              motion, and developer experience.
            </p>
            <p>
              When I'm not coding you'll find me brewing pour-overs, sketching in a Moleskine,
              or hiking around the cliffs of Sintra.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Zap size={18} />, k: 'Speed', v: 'Ship weekly' },
              { icon: <Heart size={18} />, k: 'Craft', v: 'Pixel-perfect' },
              { icon: <Globe size={18} />, k: 'Remote', v: 'GMT ± 4h' },
              { icon: <Coffee size={18} />, k: 'Fuel', v: '∞ coffee' },
            ].map((c) => (
              <div
                key={c.k}
                className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]"
              >
                <div className="w-9 h-9 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] mb-3">
                  {c.icon}
                </div>
                <div className="text-sm font-semibold">{c.k}</div>
                <div className="text-xs text-[var(--color-muted)] mt-0.5">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Tools & areas I work in">
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]"
            >
              <h3 className="font-semibold mb-5">{g.title}</h3>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{s.name}</span>
                      <span className="text-[var(--color-muted)]">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--color-surface)] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] rounded-full"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Timeline" title="Where I've worked">
        <ol className="relative border-l border-[var(--color-border)] ml-3 space-y-10">
          {experiences.map((e) => (
            <li key={e.role + e.company} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />
              <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{e.period}</div>
              <h3 className="mt-1 text-lg font-semibold">
                {e.role} <span className="text-[var(--color-muted)] font-normal">— {e.company}</span>
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">{e.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-1 rounded-md bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
