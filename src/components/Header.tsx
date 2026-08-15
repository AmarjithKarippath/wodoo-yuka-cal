"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="page-wrap flex h-[72px] items-center justify-between">
        <Logo />
        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger-icon ${open ? "open" : ""}`}>
            <span />
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav
          className={`${
            open
              ? "flex absolute top-[72px] left-0 right-0 flex-col bg-white px-6 pb-8 pt-4 shadow-sm"
              : "hidden"
          } lg:flex lg:static lg:flex-row lg:items-center lg:gap-9 lg:p-0 lg:shadow-none`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-[16px] font-medium text-wakka-ink hover:text-wakka-green lg:py-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.appStoreUrl}
            className="btn-primary mt-2 lg:hidden"
            onClick={() => setOpen(false)}
          >
            Download the app
          </a>
        </nav>
      </div>
    </header>
  );
}
