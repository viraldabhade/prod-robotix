import React from "react";
import { COLORS, F_BODY, F_MONO } from "../theme";

export default function PriceStat({ label, value, mono = true }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: COLORS.slate,
          fontFamily: F_BODY,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: mono ? F_MONO : F_BODY,
          fontWeight: 600,
          color: COLORS.ink,
          fontSize: 14,
          marginTop: 2,
        }}
      >
        {value}
      </div>
    </div>
  );
}
