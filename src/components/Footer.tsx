import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { StoreBadges } from "./StoreBadges";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-10 pb-0">
      <div className="page-wrap relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Logo className="justify-center lg:justify-start mb-4" />
            <div className="flex justify-center lg:justify-start">
              <StoreBadges />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 my-10 lg:my-0 lg:ml-10">
            <div>
              <h4 className="title-5 mb-3">Project</h4>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/independence">Independence</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </div>
            <div>
              <h4 className="title-5 mb-3">Application</h4>
              <FooterLink href="/app">Features</FooterLink>
              <FooterLink href="/premium">Premium version</FooterLink>
              <FooterLink href="/contact">Questions?</FooterLink>
            </div>
            <div>
              <h4 className="title-5 mb-3">Useful links</h4>
              <FooterLink href="/contact">Contact us</FooterLink>
              <FooterLink href="/press">Press</FooterLink>
              <FooterLink href="/legal">Legal notice</FooterLink>
            </div>
            <div>
              <div className="title-5 mb-3">en</div>
              <a
                href="https://www.bcorporation.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-2"
                aria-label="Certified B Corporation"
              >
                <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="36" cy="36" r="34" fill="none" stroke="#302c2e" strokeWidth="2" />
                  <text
                    x="36"
                    y="32"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fontFamily="Georgia, serif"
                    fill="#302c2e"
                  >
                    B
                  </text>
                  <text
                    x="36"
                    y="48"
                    textAnchor="middle"
                    fontSize="7"
                    letterSpacing="1.2"
                    fontFamily="Montserrat, sans-serif"
                    fill="#302c2e"
                  >
                    CORP
                  </text>
                </svg>
              </a>
            </div>
          </div>
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

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="block mb-1 text-[15px] text-wakka-ink hover:text-wakka-green">
      {children}
    </Link>
  );
}
