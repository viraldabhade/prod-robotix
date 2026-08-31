import React from "react";
import { COLORS, F_MONO } from "../theme";

export default function StatusPill({ status }) {
  const active = status !== "Coming Soon";
  return (
    <span
      style={{
        fontFamily: F_MONO,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.05em",
        padding: "3px 9px",
        borderRadius: 999,
        background: active ? "rgba(14,156,147,0.12)" : "rgba(238,95,40,0.12)",
        color: active ? COLORS.teal : COLORS.orangeDeep,
        border: `1px solid ${active ? "rgba(14,156,147,0.35)" : "rgba(238,95,40,0.35)"}`,
      }}
    >
      {active ? "OPEN" : "COMING SOON"}
    </span>
  );
}
