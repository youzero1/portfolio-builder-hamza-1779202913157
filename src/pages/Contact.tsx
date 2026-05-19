import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Section from '@/components/Section';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email and a short message.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('That email doesn\u2019t look quite right.');
      return;
    }
    // Persist locally so refresh keeps the success state for a moment.
    try {
      const stored = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      stored.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem('contact_messages', JSON.stringify(stored));
    } catch (err: any) {
      // ignore storage errors
    }
    setSent(true);
    setForm(initial);
  }

  return (
    <Section
      eyebrow="Contact"
      title="Let's start something great"
      description="Have a project, role, or idea you'd like to discuss? Drop a line — I usually reply within a day."
    >
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-5">
          <InfoCard icon={<Mail size={16} />} label="Email" value="hello@alexmorgan.dev" href="mailto:hello@alexmorgan.dev" />
          <InfoCard icon={<MapPin size={16} />} label="Location" value="Lisbon, Portugal" />
          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
            <div className="text-sm font-semibold mb-2">Currently</div>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Booking new freelance engagements for Q3 2025. Open to small, focused teams shipping
              ambitious products.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] space-y-5">
          {sent ? (
            <div className="flex flex-col items-start gap-3 py-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-semibold">Message received — thank you!</h3>
              <p className="text-sm text-[var(--color-muted)]">
                I'll get back to you soon. In the meantime, feel free to keep browsing.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => update('name', e.target.value)}
                    placeholder="Jane Doe"
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => update('email', e.target.value)}
                    placeholder="jane@studio.com"
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Subject">
                <input
                  value={form.subject}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => update('subject', e.target.value)}
                  placeholder="New project · Mobile app"
                  className="input"
                />
              </Field>
              <Field label="Message" required>
                <textarea
                  value={form.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => update('message', e.target.value)}
                  placeholder="Tell me a little about your project, timeline and goals..."
                  rows={6}
                  className="input resize-none"
                />
              </Field>

              {error && (
                <div className="text-sm text-red-400 border border-red-500/30 bg-red-500/10 rounded-md px-3 py-2">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
              >
                Send message <Send size={16} />
              </button>
            </>
          )}
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text);
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input::placeholder { color: #5a5a6a; }
        .input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(163, 230, 53, 0.15);
        }
      `}</style>
    </Section>
  );
}

type FieldProps = { label: string; required?: boolean; children: React.ReactNode };
function Field({ label, required, children }: FieldProps) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-[var(--color-muted)] mb-1.5">
        {label} {required && <span className="text-[var(--color-accent)]">*</span>}
      </div>
      {children}
    </label>
  );
}

type InfoCardProps = { icon: React.ReactNode; label: string; value: string; href?: string };
function InfoCard({ icon, label, value, href }: InfoCardProps) {
  const inner = (
    <div className="flex items-center gap-3 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/40 transition">
      <div className="w-9 h-9 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)]">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
