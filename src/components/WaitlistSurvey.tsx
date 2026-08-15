"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  CONFIDENCE_MESSAGE,
  CONFIDENCE_OPTIONS,
  LEARN_OPTIONS,
  PRODUCT_OPTIONS,
  SURPRISE_OPTIONS,
  SURVEY_ORDER,
  TEACH_OPTIONS,
  type SurveyStepId,
} from "@/lib/survey";

type Props = {
  userId: string;
  onClose: () => void;
};

const QUESTIONS: Record<Exclude<SurveyStepId, "done">, string> = {
  products: "What products do you worry about most when buying for yourself or your family?",
  confidence: "When you look at a product label, how confident are you that you understand what you're buying?",
  surprise: "Have you ever bought something and later discovered an ingredient or nutrition fact you wish you'd known about beforehand?",
  surprise_story: "What happened?",
  learn: "If you could instantly learn ONE thing about any product before buying it, what would it be?",
  teach: "Would you like us to teach you how to spot better products before the app launches?",
  teach_first: "What should we teach you first?",
  profile: "A couple of details so we can serve you better",
};

export function WaitlistSurvey({ userId, onClose }: Props) {
  const [step, setStep] = useState<SurveyStepId>("products");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<string[]>([]);
  const [productsOther, setProductsOther] = useState("");
  const [confidence, setConfidence] = useState<number | null>(null);
  const [showConfidenceNote, setShowConfidenceNote] = useState(false);
  const [surprise, setSurprise] = useState("");
  const [surpriseStory, setSurpriseStory] = useState("");
  const [learn, setLearn] = useState("");
  const [learnOther, setLearnOther] = useState("");
  const [teach, setTeach] = useState("");
  const [teachFirst, setTeachFirst] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const stepIndex = SURVEY_ORDER.indexOf(step);
  const total = SURVEY_ORDER.length - 1;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const videos = Array.from(document.querySelectorAll("video"));
    videos.forEach((video) => video.pause());
    return () => {
      document.body.style.overflow = previous;
      videos.forEach((video) => {
        video.play().catch(() => {
          /* Autoplay can be blocked until the next user gesture. */
        });
      });
    };
  }, []);

  const title = useMemo(() => {
    if (step === "done") return "You're on the list";
    return QUESTIONS[step];
  }, [step]);

  async function save(payload: Record<string, unknown>, next: SurveyStepId, extra: Record<string, unknown> = {}) {
    setSaving(true);
    setError("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userId,
          current_step: next,
          answers: payload,
          completed: next === "done",
          ...extra,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Could not save your answer.");
        return false;
      }
      setStep(next);
      return true;
    } catch {
      setError("Could not save your answer. Please try again.");
      return false;
    } finally {
      setSaving(false);
    }
  }

  function toggleProduct(id: string) {
    setProducts((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function continueProducts() {
    if (products.length === 0) {
      setError("Pick at least one option.");
      return;
    }
    if (products.includes("other") && !productsOther.trim()) {
      setError("Tell us what other products you worry about.");
      return;
    }
    await save(
      { products, products_other: products.includes("other") ? productsOther.trim() : "" },
      "confidence",
    );
  }

  async function continueConfidence() {
    if (confidence == null) {
      setError("Choose a number from 1 to 5.");
      return;
    }
    if (!showConfidenceNote) {
      const ok = await save({ label_confidence: confidence }, "confidence");
      if (ok) setShowConfidenceNote(true);
      return;
    }
    await save({ label_confidence: confidence }, "surprise");
  }

  async function continueSurprise() {
    if (!surprise) {
      setError("Choose an option.");
      return;
    }
    await save({ surprise }, "surprise_story");
  }

  async function continueStory() {
    await save({ surprise_story: surpriseStory.trim() }, "learn");
  }

  async function continueLearn() {
    if (!learn) {
      setError("Choose an option.");
      return;
    }
    if (learn === "other" && !learnOther.trim()) {
      setError("Tell us what you'd want to learn.");
      return;
    }
    await save(
      { learn_one_thing: learn, learn_other: learn === "other" ? learnOther.trim() : "" },
      "teach",
    );
  }

  async function continueTeach() {
    if (!teach) {
      setError("Choose an option.");
      return;
    }
    await save({ teach_before_launch: teach }, teach === "no" ? "profile" : "teach_first");
  }

  async function continueTeachFirst() {
    await save({ teach_first: teachFirst.trim() }, "profile");
  }

  async function continueProfile() {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    await save({ name: name.trim(), dob: dob || null }, "done", {
      name: name.trim(),
      dob: dob || null,
    });
  }

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-6 isolate">
      <div className="flex max-h-[92vh] w-full max-w-[560px] flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <p className="text-sm font-medium text-[#8a8581]">
            {step === "done" ? "Done" : `Question ${Math.min(stepIndex + 1, total)} of ${total}`}
          </p>
          <button type="button" onClick={onClose} className="text-sm text-[#8a8581] hover:text-wakka-ink">
            Close
          </button>
        </div>
        <div className="h-1 mx-5 rounded-full bg-[#f1eeea]">
          <div
            className="h-1 rounded-full bg-[#E98E6E] transition-all"
            style={{ width: `${Math.round(((stepIndex + 1) / SURVEY_ORDER.length) * 100)}%` }}
          />
        </div>
        <div className="overflow-y-auto px-5 py-5">
          <h2 className="title-2 !text-[24px] !leading-8 mb-4">{title}</h2>

          {step === "products" ? (
            <OptionList>
              {PRODUCT_OPTIONS.map((option) => (
                <Choice
                  key={option.id}
                  active={products.includes(option.id)}
                  onClick={() => toggleProduct(option.id)}
                >
                  {option.emoji} {option.label}
                </Choice>
              ))}
              {products.includes("other") ? (
                <input
                  value={productsOther}
                  onChange={(e) => setProductsOther(e.target.value)}
                  placeholder="Other: tell us more"
                  className="mt-1 h-11 w-full rounded-xl border border-[#d8d4d0] px-3"
                />
              ) : null}
              <Primary onClick={continueProducts} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "confidence" ? (
            <OptionList>
              {CONFIDENCE_OPTIONS.map((option) => (
                <Choice
                  key={option.id}
                  active={confidence === option.id}
                  onClick={() => setConfidence(option.id)}
                >
                  {option.id} — {option.label}
                </Choice>
              ))}
              {showConfidenceNote ? (
                <p className="mt-2 rounded-2xl bg-[#fff6f1] p-4 text-[15px] leading-6 text-wakka-muted">
                  {CONFIDENCE_MESSAGE}
                </p>
              ) : null}
              <Primary onClick={continueConfidence} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "surprise" ? (
            <OptionList>
              {SURPRISE_OPTIONS.map((option) => (
                <Choice
                  key={option.id}
                  active={surprise === option.id}
                  onClick={() => setSurprise(option.id)}
                >
                  {option.emoji} {option.label}
                </Choice>
              ))}
              <Primary onClick={continueSurprise} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "surprise_story" ? (
            <OptionList>
              <p className="text-sm text-wakka-muted">
                Example: “I didn&apos;t realize how much sugar was in my child&apos;s cereal.”
              </p>
              <textarea
                value={surpriseStory}
                onChange={(e) => setSurpriseStory(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-[#d8d4d0] p-3"
                placeholder="What happened?"
              />
              <Primary onClick={continueStory} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "learn" ? (
            <OptionList>
              {LEARN_OPTIONS.map((option) => (
                <Choice
                  key={option.id}
                  active={learn === option.id}
                  onClick={() => setLearn(option.id)}
                >
                  {option.label}
                </Choice>
              ))}
              {learn === "other" ? (
                <input
                  value={learnOther}
                  onChange={(e) => setLearnOther(e.target.value)}
                  placeholder="Something else: ___"
                  className="h-11 w-full rounded-xl border border-[#d8d4d0] px-3"
                />
              ) : null}
              <Primary onClick={continueLearn} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "teach" ? (
            <OptionList>
              {TEACH_OPTIONS.map((option) => (
                <Choice
                  key={option.id}
                  active={teach === option.id}
                  onClick={() => setTeach(option.id)}
                >
                  {option.emoji} {option.label}
                </Choice>
              ))}
              <Primary onClick={continueTeach} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "teach_first" ? (
            <OptionList>
              <textarea
                value={teachFirst}
                onChange={(e) => setTeachFirst(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-[#d8d4d0] p-3"
                placeholder="What should we teach you first?"
              />
              <Primary onClick={continueTeachFirst} disabled={saving}>
                Continue
              </Primary>
            </OptionList>
          ) : null}

          {step === "profile" ? (
            <OptionList>
              <label className="text-sm font-medium">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 w-full rounded-xl border border-[#d8d4d0] px-3"
                placeholder="Your name"
              />
              <label className="text-sm font-medium">Date of birth (optional)</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="h-11 w-full rounded-xl border border-[#d8d4d0] px-3"
              />
              <Primary onClick={continueProfile} disabled={saving}>
                Finish
              </Primary>
            </OptionList>
          ) : null}

          {step === "done" ? (
            <div>
              <p className="text-wakka-muted">
                Thanks for helping shape Wodoo. We&apos;ll be in touch when early access is ready.
              </p>
              <Primary onClick={onClose}>Close</Primary>
            </div>
          ) : null}

          {error ? <p className="mt-3 text-sm text-wakka-red">{error}</p> : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function OptionList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-left text-[15px] transition ${
        active
          ? "border-[#E98E6E] bg-[#fff6f1] font-medium"
          : "border-[#ece8e4] hover:border-[#E98E6E]/60"
      }`}
    >
      {children}
    </button>
  );
}

function Primary({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="mt-3 h-12 w-full rounded-xl bg-[#E98E6E] font-bold text-white hover:bg-[#de7d5b] disabled:opacity-60"
    >
      {children}
    </button>
  );
}
