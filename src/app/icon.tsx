import { ImageResponse } from "next/og";
import { CarrotMark, IconFrame } from "@/lib/brand-art";

export function generateImageMetadata() {
  return [
    { contentType: "image/png", size: { width: 32, height: 32 }, id: "32" },
    { contentType: "image/png", size: { width: 192, height: 192 }, id: "192" },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const resolvedId = await id;
  const size = resolvedId === "192" ? 192 : 32;
  return new ImageResponse(
    (
      <IconFrame size={size}>
        <CarrotMark size={size} />
      </IconFrame>
    ),
    { width: size, height: size },
  );
}
