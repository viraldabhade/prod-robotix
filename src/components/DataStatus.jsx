import React from "react";
import { COLORS, F_BODY, F_MONO } from "../theme";

export function LoadingScreen() {
  return (
    <div style={{ padding: "120px 20px", textAlign: "center" }}>
      <div style={{ fontFamily: F_MONO, fontSize: 13, color: COLORS.slate }}>
        Loading programs and school list…
      </div>
    </div>
  );
}

export function ErrorScreen({ message }) {
  return (
    <div style={{ padding: "80px 20px", maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          fontFamily: F_MONO,
          fontSize: 12,
          fontWeight: 600,
          color: COLORS.orangeDeep,
          letterSpacing: "0.06em",
          marginBottom: 10,
        }}
      >
        COULDN'T LOAD SITE DATA
      </div>
      <p style={{ fontFamily: F_BODY, fontSize: 14, color: COLORS.slate, lineHeight: 1.6 }}>
        {message}
      </p>
      <p style={{ fontFamily: F_BODY, fontSize: 13, color: COLORS.slate, lineHeight: 1.6 }}>
        Check that <code>CLASSES_XLSX_URL</code> and <code>SCHOOLS_XLSX_URL</code> in{" "}
        <code>src/utils/excelData.js</code> point to publicly accessible, CORS-enabled .xlsx
        files.
      </p>
    </div>
  );
}
