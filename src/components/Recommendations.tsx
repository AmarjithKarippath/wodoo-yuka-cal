"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, StatusBad, StatusGood } from "./illustrations";

const pairs = [
  [
    {
      name: "Tortilla chips",
      image: "/images/chips-poor.jpg",
      status: "Poor",
      tone: "bad" as const,
    },
    {
      name: "Crispy tortilla",
      image: "/images/chips-good.jpg",
      status: "Excellent",
      tone: "good" as const,
    },
  ],
  [
    {
      name: "Lip balm",
      image: "/images/lipbalm-poor.jpg",
      status: "Bad",
      tone: "worse" as const,
    },
    {
      name: "Plant balm",
      image: "/images/lipbalm-good.jpg",
      status: "Excellent",
      tone: "good" as const,
    },
  ],
];

export function Recommendations() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 hidden md:block h-24 bg-gradient-to-b from-white to-wakka-blue/40" />
      <div className="page-wrap relative z-10">
        <h2 className="title-2 text-center">
          Get recommendations
          <br />
          for healthier products
        </h2>

        <div className="md:hidden pt-8">
          <Pair pair={pairs[slide]} />
          <div className="flex justify-center gap-2 mt-6">
            {pairs.map((_, i) => (
              <button
                key={i}
                aria-label={`Show recommendation ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2.5 w-2.5 rounded-full ${slide === i ? "bg-wakka-green" : "bg-[#d9d4cf]"}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block pt-10 space-y-16">
          {pairs.map((pair) => (
            <Pair key={pair[0].name} pair={pair} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pair({
  pair,
}: {
  pair: { name: string; image: string; status: string; tone: "bad" | "worse" | "good" }[];
}) {
  return (
    <div className="flex justify-around items-center my-8">
      <ProductCard product={pair[0]} rotate="left" />
      <div className="px-2">
        <ArrowRight />
      </div>
      <ProductCard product={pair[1]} rotate="right" />
    </div>
  );
}

function ProductCard({
  product,
  rotate,
}: {
  product: { name: string; image: string; status: string; tone: "bad" | "worse" | "good" };
  rotate: "left" | "right";
}) {
  return (
    <div className="product-card">
      <div className={`product rotate-${rotate} mb-4`}>
        <div className="absolute -top-3 -right-3">
          {product.tone === "good" ? <StatusGood /> : <StatusBad />}
        </div>
        <Image
          src={product.image}
          alt={product.name}
          width={140}
          height={140}
          className="mx-auto h-[120px] w-[120px] object-cover rounded-xl"
        />
        <div className="name">{product.name}</div>
        <div className={`status ${product.tone}`}>
          <span className={`round ${product.tone === "good" ? "green" : product.tone === "worse" ? "red" : "orange"}`} />
          {product.status}
        </div>
      </div>
    </div>
  );
}
