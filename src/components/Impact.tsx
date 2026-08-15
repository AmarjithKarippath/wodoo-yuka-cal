import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";

export function Impact() {
  return (
    <section className="relative overflow-hidden bg-wakka-blue py-20">
      <Image
        src="/images/cactus.jpg"
        alt=""
        width={120}
        height={160}
        className="absolute left-4 bottom-4 w-[90px] md:w-[120px] object-contain mix-blend-multiply opacity-90"
      />
      <Image
        src="/images/kitchen.jpg"
        alt=""
        width={180}
        height={140}
        className="absolute left-[18%] bottom-2 hidden md:block w-[150px] object-contain mix-blend-multiply"
      />
      <Image
        src="/images/spices.jpg"
        alt=""
        width={140}
        height={140}
        className="absolute right-[22%] bottom-4 hidden md:block w-[120px] rounded-full object-cover"
      />
      <Image
        src="/images/vegetables.jpg"
        alt=""
        width={220}
        height={160}
        className="absolute right-2 bottom-0 w-[140px] md:w-[200px] object-contain"
      />
      <div className="page-wrap relative z-10">
        <h2 className="title-2 text-center">
          Thanks to Wakka,
          <br />
          95% of all users say they are now
          <br className="hidden md:block" /> eating{" "}
          <span className="title-3 text-wakka-green">healthier</span>
        </h2>
        <div className="text-center mt-8">
          <PrimaryButton href="/social-impact">
            Learn more<span className="hidden sm:inline">&nbsp;about Wakka’s impact</span>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
