import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Wakka home">
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="58" rx="10" ry="3" fill="#e8e4df" />
        <path
          d="M32 14c11 8 16 22 14 34-1.2 7.2-7.8 12-14 12s-12.8-4.8-14-12C16 36 21 22 32 14z"
          fill="#ff8a1f"
        />
        <path
          d="M32 18c8.5 6.5 12.5 19 11 30.5-1 6-6.4 10-11 10"
          fill="#ff9d3d"
        />
        <path d="M27 8c2 6 4 8 5 10 1-2 3-4 5-10-3 1.5-5 1.5-10 0z" fill="#2bb24a" />
        <path d="M22 10c4 4 7 6 10 7-4-1-8-2-10-7z" fill="#37c55a" />
        <path d="M42 10c-4 4-7 6-10 7 4-1 8-2 10-7z" fill="#249a42" />
        <circle cx="26" cy="36" r="2.1" fill="#302c2e" />
        <circle cx="38" cy="36" r="2.1" fill="#302c2e" />
        <path d="M28 43c2.4 2.4 5.6 2.4 8 0" fill="none" stroke="#302c2e" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="font-[family-name:var(--font-logo)] text-[32px] leading-none text-wakka-ink tracking-tight">
        Wakka
      </span>
    </Link>
  );
}
