import type { ReactNode } from "react";

export function InnerPage({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <article className="pt-[110px] pb-20">
      <div className="page-wrap max-w-[760px]">
        {kicker ? <p className="title-5 mb-3">{kicker}</p> : null}
        <h1 className="title-1 mb-8">{title}</h1>
        <div className="space-y-5 text-[16px] leading-7 text-wakka-muted">{children}</div>
      </div>
    </article>
  );
}
