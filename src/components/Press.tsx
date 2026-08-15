const outlets = [
  { name: "TODAY", href: "https://www.today.com/" },
  { name: "THE WALL STREET JOURNAL", href: "https://www.wsj.com/" },
  { name: "The New York Times", href: "https://www.nytimes.com/" },
  { name: "FOX NEWS", href: "https://www.foxnews.com/" },
];

export function Press() {
  return (
    <section className="py-16">
      <div className="page-wrap text-center">
        <h2 className="title-2 mb-10">Wakka in the press</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {outlets.map((outlet) => (
            <a
              key={outlet.name}
              href={outlet.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] md:text-[22px] font-serif font-bold tracking-tight text-[#3a3a3a] opacity-80 hover:opacity-100"
            >
              {outlet.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
