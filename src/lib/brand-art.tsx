import type { ReactNode } from "react";

export function CarrotMark({ size }: { size: number }) {
  const bodyW = Math.round(size * 0.42);
  const bodyH = Math.round(size * 0.52);
  const leaf = Math.round(size * 0.14);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end", marginBottom: -Math.round(size * 0.02) }}>
        <div
          style={{
            width: leaf,
            height: Math.round(leaf * 1.4),
            background: "#2bb24a",
            borderRadius: leaf,
            transform: "rotate(-25deg)",
          }}
        />
        <div
          style={{
            width: leaf,
            height: Math.round(leaf * 1.7),
            background: "#37c55a",
            borderRadius: leaf,
            margin: `0 ${Math.round(size * 0.02)}px`,
          }}
        />
        <div
          style={{
            width: leaf,
            height: Math.round(leaf * 1.4),
            background: "#249a42",
            borderRadius: leaf,
            transform: "rotate(25deg)",
          }}
        />
      </div>
      <div
        style={{
          width: bodyW,
          height: bodyH,
          background: "#ff8a1f",
          borderRadius: `${Math.round(bodyW / 2)}px ${Math.round(bodyW / 2)}px ${Math.round(bodyW * 0.42)}px ${Math.round(bodyW * 0.42)}px`,
        }}
      />
    </div>
  );
}

export function IconFrame({
  size,
  children,
}: {
  size: number;
  children: ReactNode;
}) {
  const radius = Math.round(size * 0.22);
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
}
