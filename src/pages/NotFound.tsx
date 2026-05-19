import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <div className="text-7xl md:text-8xl font-semibold tracking-tight bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-transparent">
        404
      </div>
      <h1 className="mt-4 text-2xl font-semibold">This page wandered off</h1>
      <p className="mt-2 text-[var(--color-muted)]">It might have been moved, renamed, or never existed.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
      >
        <ArrowLeft size={16} /> Back home
      </Link>
    </div>
  );
}
