import { ImageResponse } from "next/og";

export const alt = "Mehndi Night invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#0b3b2b", color: "#fff9e8", fontFamily: "serif" }}>
      <div style={{ position: "absolute", inset: 24, border: "2px solid #d9ae55", display: "flex" }} />
      <div style={{ position: "absolute", left: -90, top: -95, width: 310, height: 310, borderRadius: "50%", border: "2px solid #d9ae55", opacity: .45, display: "flex" }} />
      <div style={{ position: "absolute", right: -90, bottom: -95, width: 310, height: 310, borderRadius: "50%", border: "2px solid #d9ae55", opacity: .45, display: "flex" }} />
      <div style={{ width: "100%", padding: "48px 78px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ color: "#e4ba63", fontSize: 22, letterSpacing: 9, textTransform: "uppercase", display: "flex" }}>Mehndi Night</div>
        <div style={{ marginTop: 14, fontSize: 22, letterSpacing: 2, display: "flex" }}>MR. AND MRS. AZHAR BASHIR</div>
        <div style={{ marginTop: 18, fontSize: 58, fontWeight: 600, lineHeight: 1.02, display: "flex" }}>Muhammad Zeeshan Azhar Malik</div>
        <div style={{ marginTop: 18, width: "100%", height: 1, background: "#d9ae55", display: "flex" }} />
        <div style={{ marginTop: 18, color: "#f1d899", fontSize: 26, letterSpacing: 2, display: "flex" }}>FRIDAY, 6TH NOVEMBER 2026 | 7:00 PM ONWARDS</div>
        <div style={{ marginTop: 10, color: "#f1d899", fontSize: 22, letterSpacing: 1, display: "flex" }}>WEST CANAL ROAD, FAROOQABAD, MANSOORABAD</div>
        <div style={{ marginTop: 20, color: "#fff0c1", fontSize: 15, letterSpacing: 1, display: "flex" }}>RSVP: SHAHID MALIK (UK) | ALI IMRAN BAJWA | ENGR FARMAN AZHAR MALIK | IMRAN AZHAR MALIK | MUHAMMAD RAYYAN MALIK</div>
      </div>
    </div>,
    { ...size }
  );
}