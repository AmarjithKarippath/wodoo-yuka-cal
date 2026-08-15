import { site } from "@/lib/site";

export function MobileDownloadBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#eee] bg-white p-3 lg:hidden">
      <a href={site.appStoreUrl} className="btn-primary w-full">
        Download the app
      </a>
    </div>
  );
}
