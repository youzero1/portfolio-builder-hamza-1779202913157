import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Avatar from '@/components/Avatar';

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Avatar size={36} ring={false} />
          <span className="font-semibold tracking-tight">Alex Morgan</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'px-3 py-2 rounded-md text-sm transition-colors',
                  isActive
                    ? 'text-[var(--color-text)] bg-[var(--color-card)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-card)]/60',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-accent)] text-black hover:opacity-90 transition"
          >
            Let's talk
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-[var(--color-card)] transition"
          onClick={() => setOpen((v: boolean) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'px-3 py-2 rounded-md text-sm',
                    isActive
                      ? 'text-[var(--color-text)] bg-[var(--color-card)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-accent)] text-black"
            >
              Let's talk
            </Link>
          </div>
        </div>
      )}

      {/* Hide unused location to satisfy noUnused* if enabled */}
      <span className="hidden" aria-hidden>{loc.pathname}</span>
    </header>
  );
}
