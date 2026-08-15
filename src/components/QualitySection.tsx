import type { ReactNode } from "react";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import {
  IconAdditives,
  IconAllergen,
  IconCalories,
  IconFlask,
  IconIrritant,
  IconSweet,
} from "./illustrations";

export function QualitySection() {
  return (
    <section className="py-8 md:py-16">
      <div className="space-y-16 md:space-y-24">
        <div className="page-wrap">
          <h2 className="title-2 mb-6 md:hidden">
            Evaluate the quality
            <br />
            of your <span className="title-3">foods</span>
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <ProductPanel
              image="/images/cookies.jpg"
              imageAlt="Breakfast biscuits"
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
                Do you really know what you&apos;re buying? Wakka scans and analyzes labels in the
                blink of an eye so you can learn at a glance which products are good for you and
                which ones you could avoid.
              </p>
            </div>
          </div>
        </div>

        <div className="page-wrap">
          <h2 className="title-2 mb-6 md:hidden">
            You can also check the quality of your <span className="title-3">cosmetics!</span>
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="md:order-1">
              <h2 className="title-2 hidden md:block">
                Also, check the
                <br />
                quality of your
                <br />
                <span className="title-3">cosmetics!</span>
              </h2>
              <p className="mt-4 max-w-[448px] text-[16px] leading-6 text-wakka-muted">
                Endocrine disruptors, carcinogens, allergens or irritants: cosmetic products, too,
                contain ingredients that hold unpleasant surprises. With Wakka, you can discover
                the health impact of all your personal care products.
              </p>
            </div>
            <ProductPanel
              className="md:order-2"
              image="/images/shampoo.jpg"
              imageAlt="Natural shampoo bottle"
              imageClass="max-h-[260px] w-auto object-contain"
              score="Poor - 35/100"
              scoreTone="orange"
              badges={[
                { icon: <IconFlask />, label: "2 potential endocrine disruptors" },
                { icon: <IconIrritant />, label: "3 Irritants" },
                { icon: <IconAllergen />, label: "5 Allergens" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <PrimaryButton href="/app">Explore</PrimaryButton>
      </div>
    </section>
  );
}

function ProductPanel({
  image,
  imageAlt,
  imageClass = "max-h-[220px] w-auto object-contain drop-shadow-lg",
  score,
  scoreTone,
  badges,
  className = "",
}: {
  image: string;
  imageAlt: string;
  imageClass?: string;
  score: string;
  scoreTone: "red" | "orange";
  badges: { icon: ReactNode; label: string }[];
  className?: string;
}) {
  return (
    <div className={`relative flex items-end md:items-center justify-center min-h-[320px] ${className}`}>
      <div className="flex items-end md:items-center gap-4">
        <div className="flex h-[260px] w-[220px] items-center justify-center overflow-hidden rounded-[28px] bg-[#f6f3ee]">
          <Image src={image} alt={imageAlt} width={280} height={280} className={imageClass} />
        </div>
        <div className="flex flex-col items-start gap-2 pb-10">
          {badges.map((badge) => (
            <div key={badge.label} className="badge-pill">
              <span className="icon">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="badge-score absolute bottom-2 left-1/2 -translate-x-1/2">
        <span className={`round ${scoreTone}`} />
        {score}
      </div>
    </div>
  );
}
