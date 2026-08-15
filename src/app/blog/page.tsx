import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, nutrition tips, and product insights from the Wakka team.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "How to read a food label in 30 seconds",
    excerpt: "Sugar, additives, and calories: the three signals Wakka looks at first.",
  },
  {
    title: "What’s really in your shampoo?",
    excerpt: "A practical guide to irritants, allergens, and endocrine disruptors.",
  },
  {
    title: "Why independence matters in product scoring",
    excerpt: "How funding models can quietly change the advice you receive.",
  },
];

export default function BlogPage() {
  return (
    <InnerPage kicker="Blog" title="Insights for healthier everyday choices">
      {posts.map((post) => (
        <article key={post.title} className="border-b border-[#eee] pb-5">
          <h2 className="title-2 !text-[24px] !text-wakka-ink">{post.title}</h2>
          <p className="mt-2">{post.excerpt}</p>
        </article>
      ))}
    </InnerPage>
  );
}
