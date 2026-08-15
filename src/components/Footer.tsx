import { Logo } from "./Logo";
import { WaitlistForm } from "./WaitlistForm";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-10 pb-0">
      <div className="page-wrap relative z-10">
        <div className="text-center">
          <Logo className="justify-center mb-6" />
          <WaitlistForm id="waitlist-footer" centered />
        </div>
      </div>
      <svg
        className="block w-full mt-6"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#EDF8FB"
          d="M0 90c120 40 240-20 360 10s240 70 360 50 240-80 360-50 240 70 360 40v80H0z"
        />
        <path
          fill="#D7EEF5"
          d="M0 140c180 30 280-40 430-10s250 80 400 50 280-90 430-40 180 50 180 50v70H0z"
        />
        <ellipse cx="220" cy="170" rx="28" ry="14" fill="#c5e6ef" />
        <ellipse cx="1180" cy="150" rx="40" ry="18" fill="#c5e6ef" />
      </svg>
    </footer>
  );
}
