import { StoreBadges } from "./StoreBadges";
import { PhoneMockup } from "./PhoneMockup";
import { BlobHero, CarrotMascot } from "./illustrations";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[96px] md:pt-[120px] pb-6 md:pb-16">
      <div className="page-wrap grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative z-10 max-w-[560px]">
          <h1 className="title-1">
            Make the right choices
            <br />
            for your health
          </h1>
          <p className="mt-4 mb-6 max-w-[420px] text-[16px] leading-6 text-wakka-muted lg:max-w-[520px] lg:text-[18px]">
            Wakka deciphers product labels and analyzes the health impact of food products and
            cosmetics.
          </p>
          <StoreBadges className="hidden md:flex" />
        </div>
        <div className="relative mx-auto h-[500px] w-full max-w-[640px] md:h-[560px]">
          <BlobHero className="absolute left-0 top-6 h-[92%] w-[92%]" />
          <div className="absolute left-[8%] top-[42px] md:left-[12%] md:top-[36px]">
            <PhoneMockup />
          </div>
          <CarrotMascot className="absolute right-[2%] bottom-[18px] w-[150px] md:right-[6%] md:w-[190px]" />
        </div>
      </div>
    </section>
  );
}
