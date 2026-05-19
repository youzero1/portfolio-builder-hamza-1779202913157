import clsx from 'clsx';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  ring?: boolean;
  status?: 'online' | 'offline' | 'busy' | null;
};

const AVATAR_URL =
  'https://lftz3v8pir.ufs.sh/f/NoZTNYowGyU83YkbCmEyzZXMRm0xS7Y8sJrLifphvuCnPa9c';

export default function Avatar({
  src = AVATAR_URL,
  alt = 'Alex Morgan',
  size = 56,
  className,
  ring = true,
  status = null,
}: AvatarProps) {
  const statusColor: Record<NonNullable<AvatarProps['status']>, string> = {
    online: 'bg-[var(--color-accent)]',
    offline: 'bg-[var(--color-muted)]',
    busy: 'bg-red-500',
  };

  return (
    <div
      className={clsx('relative inline-block shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <div
        className={clsx(
          'relative w-full h-full rounded-full overflow-hidden bg-[var(--color-card)]',
          ring && 'ring-2 ring-[var(--color-accent)]/40 ring-offset-2 ring-offset-[var(--color-bg)]',
        )}
      >
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {status && (
        <span
          aria-label={status}
          className={clsx(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-[var(--color-bg)]',
            statusColor[status],
          )}
          style={{ width: Math.max(8, size * 0.22), height: Math.max(8, size * 0.22) }}
        />
      )}
    </div>
  );
}
