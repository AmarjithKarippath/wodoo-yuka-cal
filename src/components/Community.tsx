"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloudSmall, Plants, QuoteMark, Star } from "./illustrations";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Camilla",
    image: "/images/portrait-camilla.jpg",
    quote:
      "I'm a HUGE FAN of the app! I used to spend an insane amount of time analyzing labels, and this is a lifesaver.",
  },
  {
    name: "John",
    image: "/images/portrait-john.jpg",
    quote:
      "Wakka is great: quick, accurate, and perfectly functional. I love this app. It helps us eat healthy, eat well, and have a balanced diet.",
  },
  {
    name: "Chloe",
    image: "/images/portrait-chloe.jpg",
    quote: "I think this app is fantastic - the most useful app on my phone! It's awesome!",
  },
];

export function Community() {
  const [index, setIndex] = useState(0);
  const digits = site.users.split("");

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);

  const groups = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 8)];

  return (
    <section className="relative py-16 overflow-hidden bg-wakka-beige/60">
      <CloudSmall className="absolute -left-20 top-10 w-[280px] opacity-80" fill="#F6EDE0" />
      <Plants className="absolute left-2 bottom-0 w-16 md:w-24 opacity-90" />
      <Plants className="absolute right-8 bottom-8 w-12 rotate-12 hidden md:block" />
      <div className="page-wrap relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <div className="title-2">Join a community of</div>
            <div className="installs-count flex my-3 justify-center md:justify-start">
              {groups.map((group, gi) => (
                <div key={gi} className="flex">
                  {group.map((d, di) => (
                    <div className="digit" key={`${gi}-${di}`}>
                      <span>{d}</span>
                    </div>
                  ))}
                  {gi < groups.length - 1 ? <div className="w-2" /> : null}
                </div>
              ))}
            </div>
            <div className="title-2">users</div>
            <div className="stars my-3 flex justify-center md:justify-start gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star half />
            </div>
            <div className="text-[22px] md:text-[25px] font-medium">
              {site.rating} <span className="text-[20px]">●</span> {site.reviews}
            </div>
          </div>
          <div className="relative py-6">
            <CloudSmall className="absolute -right-10 -top-6 w-48 opacity-70" fill="#F6EDE0" />
            {reviews.map((review, i) => (
              <article
                key={review.name}
                className={`${i === index ? "block" : "hidden"} text-center`}
              >
                <div className="mx-auto h-[92px] w-[92px] overflow-hidden rounded-full">
                  <Image
                    src={review.image}
                    alt={`${review.name}, Wakka user`}
                    width={92}
                    height={92}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="quote mx-auto mt-4 max-w-[420px] p-3 text-[16px] leading-6">
                  <QuoteMark /> {review.quote} <QuoteMark end />
                </p>
                <div className="firstname font-heart text-[34px] mt-1">{review.name}</div>
              </article>
            ))}
            <div className="flex justify-center gap-2 mt-4">
              {reviews.map((review, i) => (
                <button
                  key={review.name}
                  aria-label={`Show review from ${review.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-wakka-green" : "bg-[#d9d4cf]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
