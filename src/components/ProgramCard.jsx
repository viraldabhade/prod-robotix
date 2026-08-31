import React from "react";
import { COLORS, F_DISPLAY, F_BODY, F_MONO } from "../theme";
import { iconFor } from "../utils/icons";
import PriceStat from "./PriceStat";
import StatusPill from "./StatusPill";

export default function ProgramCard({ item, big = false }) {
  const Icon = iconFor(item.category, item.program);
  const isOpen = item.status !== "Coming Soon";

  return (
    <div
      className="program-card"
      style={{
        background: "#fff",
        border: `1px solid ${COLORS.line}`,
        borderRadius: 16,
        padding: big ? "26px" : "20px",
        display: "flex",
        flexDirection: "column",
        gap: big ? 16 : 14,
        height: "100%",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        boxShadow: "0 1px 3px rgba(16,24,40,0.04), 0 1px 2px rgba(16,24,40,0.02)",
        transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 12px 24px -8px rgba(16,24,40,0.12), 0 4px 8px -4px rgba(16,24,40,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(16,24,40,0.04), 0 1px 2px rgba(16,24,40,0.02)";
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: isOpen
            ? `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.teal}dd)`
            : `linear-gradient(90deg, ${COLORS.orangeDeep}, ${COLORS.orange})`,
          opacity: 0.85,
        }}
      />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, paddingTop: 2 }}>
        <div
          style={{
            width: big ? 48 : 42,
            height: big ? 48 : 42,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${COLORS.ink} 0%, ${COLORS.ink}ee 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 2px 8px rgba(16,24,40,0.12)",
          }}
        >
          <Icon size={big ? 22 : 20} color={COLORS.orange} strokeWidth={1.8} />
        </div>
        <StatusPill status={item.status} />
      </div>

      {/* Title & meta */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h4
          style={{
            fontFamily: F_DISPLAY,
            fontSize: big ? 20 : 17,
            color: COLORS.ink,
            margin: 0,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          {item.program}
        </h4>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: F_MONO,
            fontSize: 11.5,
            color: COLORS.orangeDeep,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: COLORS.orangeDeep,
              opacity: 0.6,
            }}
          />
          {item.ageGroup}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: F_BODY,
          fontSize: big ? 14.5 : 13.5,
          color: COLORS.slate,
          lineHeight: 1.6,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {item.description}
      </p>

      {/* Stats grid — always 2×2 for visual consistency */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          paddingTop: 16,
          borderTop: `1px solid ${COLORS.line}`,
        }}
      >
        <PriceStat label="Free trial" value={item.freeTrial} />
        <PriceStat label="Sign-up fee" value={item.oneTimeFee} />
        <PriceStat
          label="Tuition"
          value={item.recurringFee === "-" ? "-" : `${item.recurringFee} / ${item.billingCycle || "cycle"}`}
        />
        <PriceStat
          label="Class"
          value={`${item.frequency}${item.classLength && item.classLength !== "-" ? ", " + item.classLength : ""}`}
        />
      </div>
    </div>
  );
}