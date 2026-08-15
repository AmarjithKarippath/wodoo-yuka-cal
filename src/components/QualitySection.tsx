import type { ReactNode } from "react";
import Image from "next/image";
import { IconAdditives, IconCalories, IconSweet } from "./illustrations";

export function QualitySection() {
  return (
    <section className="py-8 md:py-16">
      <div className="page-wrap">
        <h2 className="title-2 mb-6 md:hidden">
          Evaluate the quality
          <br />
          of your <span className="title-3">foods</span>
        </h2>
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <ProductPanel
            image="/images/juice-quality.png"
            imageAlt="Fruit juice bottle and carton"
            score="Bad - 21/100"
            scoreTone="red"
            badges={[
              { icon: <IconAdditives />, label: "6 additives" },
              { icon: <IconSweet />, label: "Too sweet" },
              { icon: <IconCalories />, label: "Too caloric" },
            ]}
          />
          <div>
            <h2 className="title-2 hidden md:block">
              Evaluate the
              <br />
              quality of your
              <br />
              <span className="title-3">foods</span>
            </h2>
            <p className="description mt-4 max-w-[444px] text-[16px] leading-6 text-wakka-muted">
              Do you really know what you&apos;re buying? Wodoo scans and analyzes labels in the
              blink of an eye so you can learn at a glance which products are good for you and
              which ones you could avoid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPanel({
  image,
  imageAlt,
  score,
  scoreTone,
  badges,
}: {
  image: string;
  imageAlt: string;
  score: string;
  scoreTone: "red" | "orange";
  badges: { icon: ReactNode; label: string }[];
}) {
  return (
    <div className="relative w-full">
      <div className="relative h-[260px] w-full overflow-hidden rounded-[22px] bg-[#f6f3ee] md:h-[480px] md:rounded-[28px] lg:h-[520px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 55vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 top-0 z-10 flex h-[30%] min-h-[132px] items-center justify-end pr-2 md:pr-5">
          <div className="flex flex-col items-end gap-1.5 md:gap-2">
            {badges.map((badge) => (
              <div key={badge.label} className="badge-pill scale-[0.92] origin-right md:scale-100">
                <span className="icon">{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="badge-score absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-[14px] md:bottom-4 md:text-[16px]">
          <span className={`round ${scoreTone}`} />
          {score}
        </div>
      </div>
    </div>
  );
}
