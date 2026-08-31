import React, { useMemo } from "react";
import { COLORS, F_DISPLAY, F_MONO } from "../theme";
import RoboticsPathway from "./RoboticsPathway";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection({ classes }) {
  const grouped = useMemo(() => {
    const map = {};
    classes.forEach((c) => {
      if (c.category === "After School") return;
      if (!map[c.category]) map[c.category] = [];
      map[c.category].push(c);
    });
    return map;
  }, [classes]);

  const otherCategories = Object.keys(grouped).filter((c) => c !== "Robotics");

  return (
    <section id="programs" style={{ padding: "72px 20px", maxWidth: 1080, margin: "0 auto" }}>
      <div style={{ marginBottom: 44 }}>
        <span style={{ fontFamily: F_MONO, fontSize: 12, color: COLORS.teal, fontWeight: 600, letterSpacing: "0.08em" }}>
          PROGRAMS OFFERED
        </span>
        <h2 style={{ fontFamily: F_DISPLAY, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: COLORS.ink, margin: "8px 0 0", fontWeight: 700 }}>
          Something to build, every week
        </h2>
      </div>

      {grouped["Robotics"] && <RoboticsPathway items={grouped["Robotics"]} />}

      {otherCategories.map((cat) => (
        <div key={cat} style={{ marginBottom: 48 }}>
          <h3 style={{ fontFamily: F_DISPLAY, fontSize: 22, color: COLORS.ink, margin: "0 0 16px", fontWeight: 700 }}>
            {cat}
          </h3>
<div 
  style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", 
    gap: 16 
  }}
>
  {grouped[cat].map((item) => (
    <ProgramCard key={item.program} item={item} />
  ))}
</div>
        </div>
      ))}
    </section>
  );
}