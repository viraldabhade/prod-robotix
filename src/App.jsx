import React from "react";
import { COLORS, useGoogleFonts } from "./theme";
import { useSiteData } from "./utils/useSiteData";

import Hero from "./components/Hero";
import ProgramsSection from "./components/ProgramsSection";
import AfterSchoolSection from "./components/AfterSchoolSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactFooter from "./components/ContactFooter";
import { LoadingScreen, ErrorScreen } from "./components/DataStatus";

export default function App() {
  useGoogleFonts();

  const { classes, schools, loading, error } = useSiteData();
  const pickup = classes.find((c) => c.category === "After School");

  return (
    <div
      style={{
        background: COLORS.paper,
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden", // Prevents horizontal scroll/cut-off issues
      }}
    >
      <Hero />

      {loading && <LoadingScreen />}
      {!loading && error && <ErrorScreen message={error} />}

      {!loading && !error && (
        <>
          {/* <ProgramsSection classes={classes} /> */}
          <AfterSchoolSection pickup={pickup} schools={schools} />
        </>
      )}

      {/* <WhyChooseUs /> */}
      <ContactFooter />
    </div>
  );
}