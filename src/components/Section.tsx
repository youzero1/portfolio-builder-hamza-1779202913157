import clsx from 'clsx';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={clsx('max-w-6xl mx-auto px-6 py-20', className)}>
      {(eyebrow || title || description) && (
        <div className="max-w-2xl mb-12">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
              <span className="w-6 h-px bg-[var(--color-accent)]" />
              {eyebrow}
            </div>
          )}
          {title && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>}
          {description && (
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
