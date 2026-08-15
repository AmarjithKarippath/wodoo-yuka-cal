import { IconFinancing, IconNoAds, IconNoInfluence } from "./illustrations";
import { PrimaryButton } from "./PrimaryButton";

const items = [
  {
    title: "No influence from brands",
    body: "No brand or manufacturer can influence the scores or recommendations offered.",
    icon: IconNoInfluence,
  },
  {
    title: "No ads",
    body: "Brands cannot pay Wakka to advertise their products on the app.",
    icon: IconNoAds,
  },
  {
    title: "Responsible financing",
    body: "Wakka relies on a responsible funding model designed to ensure objective analyses free from conflicts of interest.",
    icon: IconFinancing,
  },
];

export function IndependenceSection() {
  return (
    <section className="relative pt-8 pb-16">
      <div className="page-wrap relative z-10">
        <h2 className="title-2 text-center">
          A 100%
          <br className="sm:hidden" /> independent project
        </h2>
        <div className="mt-2 grid gap-2 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.body} className="mx-auto mt-8 max-w-[310px] md:max-w-[248px]">
              <div className="flex items-center justify-between md:flex-col md:items-center">
                <item.icon />
                <h3 className="title-4 my-4 text-right md:text-center">{item.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-5 text-wakka-muted md:text-center">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <PrimaryButton href="/independence" className="mt-8 mb-4">
            Learn more
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
