import { NextResponse } from "next/server";
import { checkAdminCredentials, setAdminCookie } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = typeof body.username === "string" ? body.username : "";
    const password = typeof body.password === "string" ? body.password : "";
    if (!checkAdminCredentials(username, password)) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }
    await setAdminCookie();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}
