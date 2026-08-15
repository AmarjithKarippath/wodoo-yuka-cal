import { ImageResponse } from "next/og";
import { CarrotMark, IconFrame } from "@/lib/brand-art";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <IconFrame size={180}>
        <CarrotMark size={180} />
      </IconFrame>
    ),
    size,
  );
}
