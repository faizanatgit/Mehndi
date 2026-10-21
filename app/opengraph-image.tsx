import { ImageResponse } from "next/og";

export const alt = "Mehndi invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#111" }}>
      <img src="https://mehndi-navy.vercel.app/mehndi-botanical-backdrop.png" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", background: "rgba(0, 0, 0, .55)", color: "#fffaf0", fontFamily: "serif", padding: "60px" }}>
        <div style={{ color: "#f3d583", fontSize: 24, letterSpacing: 10, textTransform: "uppercase", display: "flex" }}>Mehndi</div>
        <div style={{ marginTop: 28, fontSize: 21, letterSpacing: 2, display: "flex" }}>MR. AND MRS. MUHAMMAD AZHER BASHIR</div>
        <div style={{ marginTop: 25, fontSize: 68, fontWeight: 600, lineHeight: 1, display: "flex" }}>Muhammad Zeeshan Azhar Malik</div>
        <div style={{ marginTop: 16, color: "#f2dfad", fontSize: 23, fontStyle: "italic", display: "flex" }}>You are warmly invited</div>
        <div style={{ marginTop: 28, width: 140, height: 2, background: "#f3d583", display: "flex" }} />
        <div style={{ marginTop: 18, color: "#f3d583", fontSize: 24, letterSpacing: 2, display: "flex" }}>FRIDAY, 6TH NOVEMBER 2026</div>
      </div>
    </div>,
    { ...size }
  );
}