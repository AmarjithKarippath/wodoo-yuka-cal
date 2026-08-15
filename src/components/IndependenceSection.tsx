import { IconFinancing, IconNoAds, IconNoInfluence } from "./illustrations";

const items = [
  {
    title: "Free From Brand Influence",
    body: "No brand or manufacturer can influence the scores or recommendations offered.",
    icon: IconNoInfluence,
  },
  {
    title: "100% ads free",
    body: "Brands cannot pay Wodoo to advertise their products on the app.",
    icon: IconNoAds,
  },
  {
    title: "Ethically Funded",
    body: "Wodoo relies on a responsible funding model designed to ensure objective analyses free from conflicts of interest.",
    icon: IconFinancing,
  },
];

export function IndependenceSection() {
  return (
    <section className="relative pt-8 pb-12 md:pb-16">
      <div className="page-wrap relative z-10">
        <h2 className="title-2 text-center">
          Built Independently,
          <br />
          With Your Family in Mind
        </h2>
        <div className="mt-2 grid gap-2 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.body} className="mx-auto mt-8 max-w-[310px] md:max-w-[248px]">
              <div className="flex items-center justify-between gap-3 md:flex-col md:items-center">
                <div className="shrink-0 scale-75 origin-left md:scale-100 md:origin-center">
                  <item.icon />
                </div>
                <h3 className="title-4 my-4 text-right md:text-center">{item.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-5 text-wakka-muted md:text-center">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
