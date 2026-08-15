import { site } from "@/lib/site";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <a href={site.appStoreUrl} aria-label="Download on the App Store">
        <AppStoreBadge />
      </a>
      <a href={site.playStoreUrl} aria-label="Get it on Google Play">
        <GooglePlayBadge />
      </a>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <svg width="148" height="46" viewBox="0 0 148 46" aria-hidden="true">
      <rect width="148" height="46" rx="8" fill="#111" />
      <path
        fill="#fff"
        d="M26.4 22.7c0-3.4 2.8-5.1 2.9-5.2-1.6-2.3-4.1-2.6-5-2.6-2.1-.2-4.1 1.3-5.2 1.3-1.1 0-2.8-1.2-4.6-1.2-2.4 0-4.5 1.4-5.8 3.5-2.5 4.3-.6 10.6 1.8 14.1 1.2 1.7 2.6 3.6 4.4 3.5 1.8-.1 2.4-1.1 4.6-1.1s2.7 1.1 4.6 1.1c1.9 0 3.1-1.7 4.3-3.4 1.3-1.9 1.9-3.8 1.9-3.9-.1 0-3.6-1.4-3.6-5.4zM23.7 12.8c1-.1 2.1-.8 2.8-1.8.6-.9 1.1-2.1.9-3.3-1 .1-2.1.7-2.8 1.6-.6.8-1.2 2.1-.9 3.5z"
      />
      <text x="42" y="17" fill="#fff" fontSize="8" fontFamily="Arial, sans-serif">
        Download on the
      </text>
      <text x="42" y="33" fill="#fff" fontSize="15" fontFamily="Arial, sans-serif" fontWeight="600">
        App Store
      </text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg width="156" height="46" viewBox="0 0 156 46" aria-hidden="true">
      <rect width="156" height="46" rx="8" fill="#111" />
      <path d="M18 12.5l12.5 10.8L18 34.2V12.5z" fill="#4285F4" />
      <path d="M18 12.5l12.5 10.8 3.8-3.3L18 9.2v3.3z" fill="#EA4335" />
      <path d="M18 34.2l12.5-10.9 3.8 3.3L18 37.5v-3.3z" fill="#34A853" />
      <path d="M30.5 23.3L18 12.5v21.7l12.5-10.9z" fill="#FBBC04" />
      <text x="46" y="17" fill="#fff" fontSize="8" fontFamily="Arial, sans-serif">
        GET IT ON
      </text>
      <text x="46" y="33" fill="#fff" fontSize="15" fontFamily="Arial, sans-serif" fontWeight="600">
        Google Play
      </text>
    </svg>
  );
}
