import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { COLORS, F_DISPLAY, F_BODY, F_MONO } from "../theme";
import CircuitField from "./CircuitField";
import InstagramQR from "/instagram-qr.svg";

export default function ContactFooter() {
  return (
    <footer style={{ background: COLORS.ink, color: COLORS.paper, padding: "64px 20px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ color: COLORS.teal }}>
        <CircuitField opacity={0.08} />
      </div>
      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40 }}>
          <div style={{ maxWidth: 380 }}>
            <h3 style={{ fontFamily: F_DISPLAY, fontSize: 26, fontWeight: 700, margin: "0 0 10px" }}>
              Questions? Call or text Ms V.
            </h3>
            <p style={{ fontFamily: F_BODY, fontSize: 14, color: "#B7BFDA", lineHeight: 1.6 }}>
              We're happy to help you find the right program, check your school, or set up a
              free trial class.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              [Phone, "615-587-8475", "tel:6155878475"],
              [Mail, "gotechsboro@gmail.com", "mailto:gotechsboro@gmail.com"],
              [MapPin, "1630 S Church St, #103, Murfreesboro, TN 37130", null],
            ].map(([Icon, text, href]) => {
              const content = (
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon size={17} color={COLORS.orange} />
                  <span style={{ fontFamily: F_BODY, fontSize: 14.5, color: COLORS.paper }}>{text}</span>
                </div>
              );
              return href ? (
                <a key={text} href={href} style={{ textDecoration: "none" }}>
                  {content}
                </a>
              ) : (
                <div key={text}>{content}</div>
              );
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ background: COLORS.paper, padding: 10, borderRadius: 10, lineHeight: 0 }}>
              <img src={InstagramQR} alt="QR code linking to Robotix of Murfreesboro on Instagram" width={110} height={110} />
            </div>
            <a
              href="https://www.instagram.com/robotix_of_murfreesboro?utm_source=qr"
              style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}
            >
              <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.orange}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill={COLORS.orange} stroke="none" />
            </svg>
              <span style={{ fontFamily: F_MONO, fontSize: 11, color: "#8D96B3", letterSpacing: "0.04em" }}>
                FOLLOW US ON IG
              </span>
            </a>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 20, borderTop: "1px solid rgba(251,248,242,0.12)", fontFamily: F_BODY, fontSize: 12, color: "#7B84A3" }}>
          Robotics at Murfreesboro · Pricing and program details are updated regularly by our team.
        </div>
      </div>
    </footer>
  );
}