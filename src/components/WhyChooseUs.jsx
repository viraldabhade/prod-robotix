import React from "react";
import { Sparkles, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { COLORS, F_DISPLAY, F_BODY, F_MONO } from "../theme";

const ITEMS = [
  [Sparkles, "Engaging, project-based learning", "Every class builds toward something real your child can show off."],
  [Users, "Small group instruction", "Low student-to-instructor ratios mean real attention, every session."],
  [GraduationCap, "Experienced STEM educators", "Instructors who know how to make robotics, code, and math click."],
  [ShieldCheck, "Safe, supportive environment", "A welcoming space where kids feel comfortable trying, failing, and trying again."],
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "72px 20px", maxWidth: 1080, margin: "0 auto" }}>
      <span style={{ fontFamily: F_MONO, fontSize: 12, color: COLORS.teal, fontWeight: 600, letterSpacing: "0.08em" }}>
        WHY CHOOSE US
      </span>
      <h2 style={{ fontFamily: F_DISPLAY, fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)", color: COLORS.ink, margin: "8px 0 30px", fontWeight: 700 }}>
        Built for kids who like to build
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {ITEMS.map(([Icon, title, body]) => (
          <div key={title}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: COLORS.ink,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Icon size={20} color={COLORS.orange} strokeWidth={1.8} />
            </div>
            <h4 style={{ fontFamily: F_DISPLAY, fontSize: 16.5, color: COLORS.ink, margin: "0 0 6px", fontWeight: 600 }}>
              {title}
            </h4>
            <p style={{ fontFamily: F_BODY, fontSize: 13.5, color: COLORS.slate, lineHeight: 1.55, margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
