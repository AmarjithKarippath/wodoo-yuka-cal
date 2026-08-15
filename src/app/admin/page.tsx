import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLogoutButton } from "@/components/AdminLogoutButton";
import { isAdminSession } from "@/lib/admin-auth";
import { listWaitlistUsers, type WaitlistUser } from "@/lib/db";

export const metadata: Metadata = {
  title: "Waitlist users",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminSession())) {
    redirect("/admin/login");
  }

  let users: WaitlistUser[] = [];
  let error = "";
  try {
    users = await listWaitlistUsers();
  } catch (err) {
    users = [];
    error = err instanceof Error ? err.message : "Could not load waitlist.";
  }

  return (
    <article className="pt-[110px] pb-20">
      <div className="page-wrap max-w-[1100px]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="title-1">Waitlist users</h1>
            <p className="mt-1 text-sm text-wakka-muted">{users.length} enrolled</p>
          </div>
          <AdminLogoutButton />
        </div>
        {error ? <p className="mb-4 text-wakka-red">{error}</p> : null}
        <div className="overflow-x-auto rounded-2xl border border-[#ece8e4]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#faf7f4] text-[#6b6663]">
              <tr>
                <th className="px-3 py-3 font-medium">Joined</th>
                <th className="px-3 py-3 font-medium">Email</th>
                <th className="px-3 py-3 font-medium">Name</th>
                <th className="px-3 py-3 font-medium">DOB</th>
                <th className="px-3 py-3 font-medium">Step</th>
                <th className="px-3 py-3 font-medium">Answers</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-wakka-muted">
                    No waitlist users yet.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="border-t border-[#f0ece8] align-top">
                    <td className="whitespace-nowrap px-3 py-3">
                      {new Date(user.created_at).toLocaleString()}
                    </td>
                    <td className="px-3 py-3 font-medium">{user.email}</td>
                    <td className="px-3 py-3">{user.name || "—"}</td>
                    <td className="px-3 py-3">{user.dob || "—"}</td>
                    <td className="px-3 py-3">{user.completed_at ? "done" : user.current_step}</td>
                    <td className="px-3 py-3 max-w-[360px]">
                      <pre className="whitespace-pre-wrap break-words text-xs text-wakka-muted">
                        {JSON.stringify(user.answers, null, 2)}
                      </pre>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
