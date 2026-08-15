import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} - ${site.tagline}`;
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
          justifyContent: "center",
          padding: 80,
          background: "#ffffff",
          color: "#302c2e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div
            style={{
              width: 56,
              height: 64,
              background: "#ff8a1f",
              borderRadius: "28px 28px 30px 30px",
            }}
          />
          <div style={{ fontSize: 56, fontWeight: 700 }}>Wakka</div>
        </div>
        <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.15, maxWidth: 900 }}>
          Make the right choices for your health
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#5c5759", maxWidth: 820 }}>
          Scan food and cosmetics to understand their impact on your health.
        </div>
      </div>
    ),
    size,
  );
}
