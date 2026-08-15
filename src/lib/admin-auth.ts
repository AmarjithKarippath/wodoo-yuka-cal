import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE = "wodoo_admin";
const WEEK = 7 * 24 * 60 * 60 * 1000;

function secret() {
  const user = process.env.ADMIN_USERNAME;
  const pass = process.env.ADMIN_PASSWORD;
  if (!user || !pass) {
    throw new Error("ADMIN_USERNAME and ADMIN_PASSWORD must be set");
  }
  return `${user}:${pass}`;
}

export function signAdminToken() {
  const exp = Date.now() + WEEK;
  const payload = String(exp);
  const sig = createHmac("sha256", secret()).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifyAdminToken(token: string | undefined) {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const exp = Number(payload);
  if (!Number.isFinite(exp) || exp < Date.now()) return false;
  const expected = createHmac("sha256", secret()).update(payload).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function checkAdminCredentials(username: string, password: string) {
  const expectedUser = process.env.ADMIN_USERNAME ?? "";
  const expectedPass = process.env.ADMIN_PASSWORD ?? "";
  if (!expectedUser || !expectedPass) return false;
  try {
    const userOk =
      username.length === expectedUser.length &&
      timingSafeEqual(Buffer.from(username), Buffer.from(expectedUser));
    const passOk =
      password.length === expectedPass.length &&
      timingSafeEqual(Buffer.from(password), Buffer.from(expectedPass));
    return userOk && passOk;
  } catch {
    return false;
  }
}

export async function isAdminSession() {
  const jar = await cookies();
  return verifyAdminToken(jar.get(COOKIE)?.value);
}

export async function setAdminCookie() {
  const jar = await cookies();
  jar.set(COOKIE, signAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: WEEK / 1000,
  });
}

export async function clearAdminCookie() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
