import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { isAdminSession } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isAdminSession()) {
    redirect("/admin");
  }

  return (
    <article className="pt-[110px] pb-20">
      <div className="page-wrap">
        <h1 className="title-1 text-center">Waitlist admin</h1>
        <AdminLoginForm />
      </div>
    </article>
  );
}
