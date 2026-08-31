import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { COLORS, F_DISPLAY, F_BODY, F_MONO } from "../theme";
import CircuitField from "./CircuitField";

export default function Hero() {
  return (
    <header
      style={{
        position: "relative",
        background: COLORS.ink,
        color: COLORS.paper,
        overflow: "hidden",
        padding: "76px 20px 96px",
      }}
    >
      <div style={{ color: COLORS.orange }}>
        <CircuitField opacity={0.14} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(238,95,40,0.25), transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: F_MONO,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: COLORS.teal,
            background: "rgba(14,156,147,0.12)",
            border: "1px solid rgba(14,156,147,0.35)",
            padding: "6px 12px",
            borderRadius: 999,
            marginBottom: 26,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.teal }} />
          FREE TRIAL CLASSES OPEN NOW
        </div>

        <h1
          style={{
            fontFamily: F_DISPLAY,
            fontWeight: 700,
            fontSize: "clamp(2.6rem, 7vw, 5rem)",
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Robotics at
          <br />
          <span style={{ color: COLORS.orange }}>Murfreesboro</span>
        </h1>
{/* 
        <p
          style={{
            fontFamily: F_BODY,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#C7CEE0",
            maxWidth: 560,
            marginTop: 22,
            lineHeight: 1.6,
          }}
        >
          Small-group STEM classes in robotics, coding, chess, and math &amp; reading —
          built by hand, one working part at a time. Right here in Murfreesboro, TN.
        </p> */}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
          <a
            href="tel:6155878475"
            style={{
              fontFamily: F_BODY,
              fontWeight: 600,
              fontSize: 14.5,
              color: "#fff",
              background: COLORS.orange,
              padding: "13px 22px",
              borderRadius: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <Phone size={17} /> Call or Text Ms V
          </a>
          {/* <a
            href="#programs"
            style={{
              fontFamily: F_BODY,
              fontWeight: 600,
              fontSize: 14.5,
              color: COLORS.paper,
              background: "transparent",
              border: "1px solid rgba(251,248,242,0.35)",
              padding: "13px 22px",
              borderRadius: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            See all programs <ArrowRight size={16} />
          </a> */}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 40px", marginTop: 48 }}>
          {[
            ["615-587-8475", "Call or text Ms V"],
            ["gotechsboro@gmail.com", "Email"],
            ["1630 S Church St, #103", "Murfreesboro, TN 37130"],
          ].map(([a, b]) => (
            <div key={a}>
              <div style={{ fontFamily: F_MONO, fontSize: 14, fontWeight: 600, color: COLORS.paper }}>{a}</div>
              <div style={{ fontFamily: F_BODY, fontSize: 12.5, color: "#8D96B3", marginTop: 2 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
