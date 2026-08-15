"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { WaitlistSurvey } from "./WaitlistSurvey";
import { WAITLIST_COUNT_LABEL } from "@/lib/survey";

const AVATARS = [{ src: "/images/portrait-alex.jpg", alt: "Waitlist member" }];

export function WaitlistForm({
  id = "waitlist",
  centered = false,
}: {
  id?: string;
  centered?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not join the waitlist.");
        return;
      }
      setUserId(data.user.id);
      setOpen(true);
    } catch {
      setError("Could not join the waitlist. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div
      id={id}
      className={`mt-2 w-full max-w-[520px] scroll-mt-[96px] ${centered ? "mx-auto text-center" : ""}`}
    >
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-2">
        <label className="sr-only" htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          id={`${id}-email`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="box-border h-12 w-full rounded-xl border border-[#d8d4d0] bg-white px-4 text-[15px] text-wakka-ink outline-none placeholder:text-[#b0aba6] focus:border-[#E98E6E]"
        />
        <button
          type="submit"
          disabled={pending}
          className="box-border h-12 w-full rounded-xl bg-[#E98E6E] px-5 text-[15px] font-bold text-white transition hover:bg-[#de7d5b] disabled:opacity-60"
        >
          {pending ? "Saving…" : "Join waitlist"}
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-wakka-red">{error}</p> : null}

      <div className={`mt-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <div className="flex shrink-0 -space-x-2">
          {AVATARS.map((avatar) => (
            <img
              key={avatar.src}
              src={avatar.src}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
            />
          ))}
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#f3c7a8] text-[11px] font-bold text-wakka-ink">
            +
          </span>
        </div>
        <p className="min-w-0 text-[13px] leading-5 text-[#6b6663] sm:text-[14px]">
          <span className="font-bold text-wakka-ink">{WAITLIST_COUNT_LABEL}</span> people already
          waiting
        </p>
      </div>
      <p className="mt-3 text-[13px] leading-5 text-[#8a8581]">
        Early members get lifetime premium features and help shape what Wodoo becomes. No spam,
        unsubscribe anytime.
      </p>

      {open && userId ? (
        <WaitlistSurvey
          userId={userId}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}
