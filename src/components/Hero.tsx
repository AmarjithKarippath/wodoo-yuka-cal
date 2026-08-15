import { WaitlistForm } from "./WaitlistForm";
import { PhoneMockup } from "./PhoneMockup";
import { BlobHero, CarrotMascot } from "./illustrations";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[88px] md:pt-[120px] pb-6 md:pb-16">
      <div className="page-wrap grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative z-10 w-full max-w-[560px]">
          <h1 className="title-1">
            Wodoo: Scan it
            <br />
            before you buy it.
          </h1>
          <p className="mt-4 w-full max-w-[520px] text-[16px] leading-6 text-wakka-muted lg:text-[18px]">
            You might be buying food products you would never choose knowingly.
          </p>
          <p className="mt-5 mb-6 w-full max-w-[520px] text-[16px] leading-6 text-wakka-muted lg:text-[18px]">
            Our AI powered app scan the product to validate its health score and safer alternatives instantly.
          </p>
          <WaitlistForm />
        </div>
        <div className="relative mx-auto w-full max-w-full overflow-hidden">
          <BlobHero className="pointer-events-none absolute left-[-6%] top-2 h-[96%] w-[108%]" />
          <div className="relative z-10 flex items-end justify-center gap-2 pt-4 min-[400px]:gap-4 md:gap-8 md:pt-4">
            <div className="relative z-20 shrink-0">
              <PhoneMockup />
            </div>
            <CarrotMascot className="relative z-10 mb-6 w-[56px] shrink-0 min-[400px]:w-[72px] md:mb-14 md:w-[168px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
