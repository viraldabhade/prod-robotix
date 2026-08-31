import React from "react";

export default function CircuitField({ className = "", opacity = 0.16 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity }}
    >
      <defs>
        <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 H30 M50 40 H80 M40 0 V30 M40 50 V80" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <circle cx="40" cy="40" r="4" fill="currentColor" />
          <circle cx="30" cy="40" r="2" fill="currentColor" />
          <circle cx="50" cy="40" r="2" fill="currentColor" />
          <circle cx="40" cy="30" r="2" fill="currentColor" />
          <circle cx="40" cy="50" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#circuit)" />
    </svg>
  );
}
