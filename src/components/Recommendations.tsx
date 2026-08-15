"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, StatusBad, StatusGood } from "./illustrations";

const pairs = [
  [
    {
      name: "Tortilla chips",
      image: "/images/tortilla-chips.png",
      status: "Poor",
      tone: "bad" as const,
    },
    {
      name: "Crispy tortilla",
      image: "/images/crispy-tortilla.png",
      status: "Excellent",
      tone: "good" as const,
    },
  ],
  [
    {
      name: "Chemical Handwash",
      image: "/images/chemical-handwash.png",
      status: "Bad",
      tone: "worse" as const,
    },
    {
      name: "Organic Handwash",
      image: "/images/organic-handwash.png",
      status: "Excellent",
      tone: "good" as const,
    },
  ],
];

export function Recommendations() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="relative py-12 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 hidden md:block h-32 bg-gradient-to-b from-white to-wakka-blue/40" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5">
        <h2 className="title-2 text-center md:!text-[46px] md:!leading-[54px]">
          Get recommendations
          <br />
          for healthier products
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[16px] leading-7 text-wakka-muted lg:text-[20px]">
          Find a better choice for your family.
          <br />
          Compare ingredients, nutrition, and product quality, then discover alternatives that may
          be a safer or more suitable option.
        </p>

        <div className="md:hidden pt-10">
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

        <div className="hidden md:block pt-16 space-y-24">
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
    <div className="flex justify-center items-center gap-2 md:gap-14 my-6 md:my-10">
      <ProductCard product={pair[0]} rotate="left" />
      <div className="px-1 scale-90 md:scale-150 md:px-2">
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
          width={520}
          height={520}
          className="mx-auto h-[110px] w-[96px] md:h-[320px] md:w-[280px] object-contain"
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
