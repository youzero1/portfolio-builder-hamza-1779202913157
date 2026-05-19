import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-[var(--color-muted)]">
          © {year} Alex Morgan. Crafted with care.
        </div>
        <div className="flex items-center gap-2">
          <SocialButton href="https://github.com" label="GitHub"><Github size={16} /></SocialButton>
          <SocialButton href="https://linkedin.com" label="LinkedIn"><Linkedin size={16} /></SocialButton>
          <SocialButton href="https://twitter.com" label="Twitter"><Twitter size={16} /></SocialButton>
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-[var(--color-border)] hover:bg-[var(--color-card)] transition"
          >
            <Mail size={14} /> hello@alexmorgan.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}

type SocialButtonProps = { href: string; label: string; children: React.ReactNode };
function SocialButton({ href, label, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-card)] transition"
    >
      {children}
    </a>
  );
}
