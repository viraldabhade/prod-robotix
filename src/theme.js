import { useEffect } from "react";

export const COLORS = {
  ink: "#12203D",
  inkSoft: "#28375B",
  paper: "#FBF8F2",
  paperDim: "#F1ECE0",
  orange: "#EE5F28",
  orangeDeep: "#C74417",
  teal: "#0E9C93",
  slate: "#4A5169",
  line: "#DDD5C2",
};

export const F_DISPLAY = "'Space Grotesk', system-ui, sans-serif";
export const F_BODY = "'Inter', system-ui, sans-serif";
export const F_MONO = "'JetBrains Mono', monospace";

const FONT_LINK_ID = "gt-fonts";

/**
 * Injects the Google Fonts used throughout the site. Call once from the
 * top-level App component.
 */
export function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}
