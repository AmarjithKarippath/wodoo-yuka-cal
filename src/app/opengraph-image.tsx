import { ImageResponse } from "next/og";
import { CarrotMark } from "@/lib/brand-art";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#EDF8FB",
          color: "#302c2e",
        }}
      >
        <div style={{ height: 12, width: "100%", background: "#00DB5F" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}>
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 22,
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(48, 44, 46, 0.08)",
              }}
            >
              <CarrotMark size={72} />
            </div>
            <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.12, maxWidth: 980, letterSpacing: -1.5 }}>
            Scan it before you buy it.
          </div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#5c5759", maxWidth: 860, lineHeight: 1.4 }}>
            {site.description}
          </div>
          <div style={{ fontSize: 22, marginTop: 40, color: "#00a34a", fontWeight: 600 }}>wodoo.app</div>
        </div>
      </div>
    ),
    size,
  );
}
