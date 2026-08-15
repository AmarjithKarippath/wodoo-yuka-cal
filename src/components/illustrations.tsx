import type { ReactNode } from "react";

export function BlobHero({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 520" className={className} aria-hidden="true">
      <path
        fill="#EAF6FA"
        d="M90 280c-20-90 40-210 180-240 150-32 250 40 320 90 80 56 140 40 150 120 12 90-70 180-210 210-130 28-250-10-330-70-70-52-90-70-110-110z"
      />
      <g fill="none" stroke="#c5dbe4" strokeWidth="2.2" strokeLinecap="round">
        <rect x="210" y="150" width="70" height="90" rx="8" />
        <path d="M220 165h50M220 178h40" />
        <rect x="310" y="130" width="55" height="80" rx="10" />
        <path d="M318 145h40M318 158h28" />
        <ellipse cx="430" cy="200" rx="38" ry="28" />
        <path d="M400 200h60" />
        <path d="M500 160c20 0 40 18 40 40v70h-80v-70c0-22 20-40 40-40z" />
        <circle cx="250" cy="300" r="22" />
        <path d="M250 278v44M232 300h36" />
        <rect x="330" y="280" width="90" height="55" rx="8" />
        <path d="M345 298h60M345 312h40" />
        <path d="M480 270l40 12v70l-40 12-40-12v-70z" />
      </g>
    </svg>
  );
}

export function CarrotMascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 280" className={className} aria-hidden="true">
      <ellipse cx="118" cy="248" rx="28" ry="8" fill="#e6e1db" />
      <path d="M78 70c40 28 58 78 50 128-6 36-34 58-58 58s-52-22-58-58C4 148 22 98 62 70z" fill="#ff8a1f" />
      <path d="M78 82c30 22 44 66 38 108-4 28-24 46-38 46" fill="#ff9d3d" />
      <path d="M58 42c8 22 14 30 20 36 4-8 12-16 20-36-12 6-20 6-40 0z" fill="#2bb24a" />
      <path d="M48 48c14 14 24 20 34 24-14-4-28-8-34-24z" fill="#37c55a" />
      <path d="M98 46c-12 14-20 22-28 26 12-2 26-6 28-26z" fill="#249a42" />
      <circle cx="58" cy="148" r="6" fill="#302c2e" />
      <circle cx="90" cy="148" r="6" fill="#302c2e" />
      <path d="M62 168c8 8 18 8 26 0" fill="none" stroke="#302c2e" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 188c-18 10-28 34-16 42 10 6 22-8 28-22" fill="none" stroke="#302c2e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M108 190c22 4 42 24 36 40-6 12-24 4-34-10" fill="none" stroke="#302c2e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M118 198h46l8 38H126z" fill="#cfd6dc" />
      <path d="M126 198v38" stroke="#b4bcc3" strokeWidth="2" />
      <path d="M141 198v38" stroke="#b4bcc3" strokeWidth="2" />
      <ellipse cx="141" cy="198" rx="24" ry="7" fill="#dfe4e8" />
    </svg>
  );
}

export function CloudSmall({ className = "", fill = "#EDF8FB" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 640 280" className={className} aria-hidden="true">
      <path
        fill={fill}
        d="M40 160c20-70 90-120 180-110 50 6 80 30 120 20 70-16 120 30 170 20 80-16 140 40 110 100-20 40-80 50-160 46-70-4-90 16-160 10S20 220 40 160z"
      />
    </svg>
  );
}

function IconBlob({ children }: { children: ReactNode }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" aria-hidden="true">
      <path
        fill="#EAF6FA"
        d="M28 78c-8-28 10-58 42-64 34-6 62 16 70 42 10 32-8 58-38 66-28 8-58-4-68-20-8-12-10-16-6-24z"
      />
      {children}
    </svg>
  );
}

export function IconNoInfluence() {
  return (
    <IconBlob>
      <path
        d="M62 88c0-10 6-16 14-16s14 6 14 16v18H62V88z"
        fill="#f3c7a8"
      />
      <path d="M58 78c-8 0-12 8-8 16l8 12h8V78H58z" fill="#e8b392" />
      <path d="M70 62c6-14 22-16 28-6 4 8-2 14-10 16" fill="#f3c7a8" />
      <circle cx="86" cy="58" r="7" fill="#f3c7a8" />
    </IconBlob>
  );
}

export function IconNoAds() {
  return (
    <IconBlob>
      <path d="M48 70l44-18v52L48 86v-16z" fill="#7ad13f" />
      <path d="M92 52l18-8v68l-18-8V52z" fill="#ff8a1f" />
      <circle cx="58" cy="78" r="10" fill="#5bb82a" />
      <path d="M54 78h8M58 74v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </IconBlob>
  );
}

export function IconFinancing() {
  return (
    <IconBlob>
      <path d="M55 70c0-16 18-28 34-18 6-10 22-8 26 4 14 2 22 18 14 30-4 18-28 28-50 22-18-4-28-20-24-38z" fill="#7ad13f" />
      <path d="M78 62c8-2 16 0 20 6" fill="none" stroke="#5bb82a" strokeWidth="4" strokeLinecap="round" />
      <path d="M72 78h20M82 70v22" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </IconBlob>
  );
}

export function IconAdditives() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="12" fill="#f3c7a8" />
      <path d="M10 18c2 2 6 2 8 0" stroke="#302c2e" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="10" cy="12" r="1.4" fill="#302c2e" />
      <circle cx="18" cy="12" r="1.4" fill="#302c2e" />
    </svg>
  );
}

export function IconSweet() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect x="6" y="11" width="16" height="8" rx="4" fill="#ff8a9a" transform="rotate(-20 14 15)" />
      <rect x="11" y="6" width="6" height="6" rx="1" fill="#7ad13f" />
    </svg>
  );
}

export function IconCalories() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M14 5c6 7 9 11 9 16a9 9 0 1 1-18 0c0-5 3-9 9-16z" fill="#ffb03a" />
    </svg>
  );
}

export function IconFlask() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M11 4h6v8l5 10a4 4 0 0 1-4 6H10a4 4 0 0 1-4-6l5-10V4z" fill="#7ad13f" />
      <circle cx="14" cy="18" r="2" fill="#fff" />
    </svg>
  );
}

export function IconIrritant() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="10" fill="#ffb03a" />
      <path d="M14 8v7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="14" cy="19" r="1.4" fill="#fff" />
    </svg>
  );
}

export function IconAllergen() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M14 5l2 7h7l-6 4 2 7-7-4-7 4 2-7-6-4h7z" fill="#ff8a1f" />
    </svg>
  );
}

export function StatusBad() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#ff8519" />
      <path d="M9 9l10 10M19 9L9 19" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function StatusGood() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#00db5f" />
      <path d="M8 14l4 4 8-8" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg width="56" height="28" viewBox="0 0 56 28" aria-hidden="true">
      <path d="M4 14h40" stroke="#302c2e" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 6l12 8-12 8" fill="none" stroke="#302c2e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteMark({ end = false }: { end?: boolean }) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      className={`inline-block mx-1 align-middle ${end ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path fill="#00db5f" d="M0 18V8C0 3 3 0 8 0h2v5H8c-2 0-3 1-3 3v10H0zm12 0V8c0-5 3-8 8-8h2v5h-2c-2 0-3 1-3 3v10h-5z" />
    </svg>
  );
}

export function Star({ half = false }: { half?: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <defs>
        {half ? (
          <linearGradient id="half">
            <stop offset="50%" stopColor="#ffc107" />
            <stop offset="50%" stopColor="#e6e1db" />
          </linearGradient>
        ) : null}
      </defs>
      <path
        fill={half ? "url(#half)" : "#ffc107"}
        d="M14 2l3.2 7.4 8 0.8-6 5.4 1.7 7.8L14 19.6 7.1 23.4 8.8 15.6 2.8 10.2l8-0.8z"
      />
    </svg>
  );
}

export function Plants({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <path d="M60 160V70" stroke="#2bb24a" strokeWidth="3" />
      <path d="M60 110c-24-10-34-34-28-54 18 8 28 24 28 40z" fill="#7ad13f" />
      <path d="M60 96c24-8 36-30 30-50-18 8-28 22-30 40z" fill="#2bb24a" />
      <path d="M60 80c-16-18-14-40 2-52 4 18 6 34-2 52z" fill="#37c55a" />
    </svg>
  );
}
