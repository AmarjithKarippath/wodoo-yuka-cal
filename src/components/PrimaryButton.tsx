import type { ReactNode } from "react";
import Link from "next/link";

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-primary ${className}`}>
      {children}
    </Link>
  );
}
