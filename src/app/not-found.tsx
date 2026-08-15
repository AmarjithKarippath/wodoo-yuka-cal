import Link from "next/link";

export default function NotFound() {
  return (
    <article className="pt-[110px] pb-20">
      <div className="page-wrap max-w-[760px] text-center">
        <h1 className="title-1 mb-6">Page not found</h1>
        <p className="mb-6 text-wakka-muted">This page does not exist.</p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </article>
  );
}
