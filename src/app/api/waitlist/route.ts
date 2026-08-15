import { NextResponse } from "next/server";
import { updateWaitlistUser, upsertWaitlistEmail } from "@/lib/db";

function normalizeEmail(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = normalizeEmail(body.email);
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    const user = await upsertWaitlistEmail(email);
    return NextResponse.json({ user });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save email.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const id = typeof body.id === "string" ? body.id : "";
    if (!id) {
      return NextResponse.json({ error: "Missing waitlist user." }, { status: 400 });
    }

    const answers =
      body.answers && typeof body.answers === "object" && !Array.isArray(body.answers)
        ? (body.answers as Record<string, unknown>)
        : undefined;

    const user = await updateWaitlistUser(id, {
      current_step: typeof body.current_step === "string" ? body.current_step : undefined,
      answers,
      name: typeof body.name === "string" ? body.name.trim() || null : undefined,
      dob: typeof body.dob === "string" && body.dob ? body.dob : undefined,
      completed: body.completed === true,
    });

    if (!user) {
      return NextResponse.json({ error: "Waitlist user not found." }, { status: 404 });
    }
    return NextResponse.json({ user });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save answers.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
