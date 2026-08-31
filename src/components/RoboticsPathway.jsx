import React from "react";
import { ArrowRight } from "lucide-react";
import { COLORS, F_DISPLAY, F_BODY, F_MONO } from "../theme";
import ProgramCard from "./ProgramCard";

export default function RoboticsPathway({ items }) {
  const general = items.find((i) => i.program.toLowerCase().includes("general"));
  const tracks = items.filter((i) => !i.program.toLowerCase().includes("general"));

  return (
    <div style={{ marginBottom: 56 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 6,
        }}
      >
        <h3 style={{ fontFamily: F_DISPLAY, fontSize: 26, color: COLORS.ink, margin: 0, fontWeight: 700 }}>
          Robotics
        </h3>
        <span style={{ fontFamily: F_MONO, fontSize: 12.5, color: COLORS.orangeDeep, fontWeight: 600 }}>
          $149 every 4 weeks · 1 class / week
        </span>
      </div>
      <p style={{ fontFamily: F_BODY, color: COLORS.slate, fontSize: 14.5, marginTop: 4, marginBottom: 26, maxWidth: 680 }}>
        Every robotics track runs on the same simple plan: a 30-minute free trial, a one-time $49
        sign-up, then $149 every 4 weeks for one class a week. Builders typically move left to
        right as skills grow.
      </p>

      {general && (
        <div style={{ marginBottom: 22 }}>
          <ProgramCard item={general} big />
        </div>
      )}

      {tracks.length > 0 && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: F_MONO,
              fontSize: 11,
              color: COLORS.slate,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 14,
            }}
          >
            Skill tracks
            <span style={{ flexGrow: 1, height: 1, background: COLORS.line }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 16,
              position: "relative",
            }}
          >
            {tracks.map((t, idx) => (
              <div key={t.program} style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
                {idx > 0 && (
                  <div
                    className="hide-mobile-arrow"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: COLORS.line,
                      marginRight: -8,
                    }}
                  >
                    <ArrowRight size={16} />
                  </div>
                )}
                <div style={{ flexGrow: 1 }}>
                  <ProgramCard item={t} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
