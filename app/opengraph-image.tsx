import { ImageResponse } from "next/og";

export const alt = "Mehndi invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden", background: "#111" }}>
      <img src="https://mehndi-navy.vercel.app/mehndi-botanical-backdrop.png" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
    </div>,
    { ...size }
  );
}