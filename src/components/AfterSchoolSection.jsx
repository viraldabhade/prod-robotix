import React, { useMemo, useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import { COLORS, F_DISPLAY, F_BODY, F_MONO } from "../theme";
import PriceStat from "./PriceStat";

export default function AfterSchoolSection({ pickup, schools = [] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!Array.isArray(schools)) return [];
    if (!query.trim()) return schools;

    const q = query.toLowerCase();
    return schools.filter((s) =>
      // Use optional chaining s?.schoolName and fallback to empty string ""
      (s?.schoolName || "").toLowerCase().includes(q)
    );
  }, [query, schools]);

  return (
    <section style={{ background: COLORS.paperDim, padding: "72px 20px" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) minmax(280px, 1.1fr)",
          gap: 40,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: F_MONO,
              fontSize: 12,
              color: COLORS.teal,
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            AFTER SCHOOL PICK UP
          </span>
          <h2
            style={{
              fontFamily: F_DISPLAY,
              fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)",
              color: COLORS.ink,
              margin: "8px 0 16px",
              fontWeight: 700,
            }}
          >
            Afterschool Pickup
          </h2>
          <p
            style={{
              fontFamily: F_BODY,
              fontSize: 14.5,
              color: COLORS.slate,
              lineHeight: 1.6,
              marginBottom: 22,
            }}
          >
            We'll pick your child up directly from select schools and help with
            homework until you're able to pick them up from us. Check the school
            list to see if your child's school is covered.
          </p>

          {pickup && (
            <div
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.line}`,
                borderRadius: 14,
                padding: 20,
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <PriceStat
                label="Cost"
                value={`${pickup.recurringFee} / ${pickup.billingCycle}`}
              />
              <PriceStat
                label="Includes"
                value="Homework help only"
                mono={false}
              />
              <PriceStat
                label="Availability"
                value={pickup.frequency}
                mono={false}
              />
            </div>
          )}
        </div>

        <div
          style={{
            background: "#fff",
            border: `1px solid ${COLORS.line}`,
            borderRadius: 14,
            padding: 22,
          }}
        >
          <div
            style={{
              fontFamily: F_MONO,
              fontSize: 11,
              color: COLORS.slate,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            Check your school
          </div>
          <div style={{ position: "relative", marginBottom: 16 }}>
            <Search
              size={16}
              color={COLORS.slate}
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Start typing a school name..."
              style={{
                width: "100%",
                fontFamily: F_BODY,
                fontSize: 14,
                padding: "10px 12px 10px 36px",
                borderRadius: 9,
                border: `1px solid ${COLORS.line}`,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              maxHeight: 260,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {filtered.length === 0 && (
              <p
                style={{
                  fontFamily: F_BODY,
                  fontSize: 13.5,
                  color: COLORS.slate,
                }}
              >
                No matching schools. Call or text Ms V to ask about your school.
              </p>
            )}
            {filtered.map((s, idx) => {
              const eligible = String(s?.eligible || "")
                .toLowerCase()
                .startsWith("y");
              return (
                <div
                  key={s?.schoolName || idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                    padding: "9px 12px",
                    borderRadius: 9,
                    background: eligible
                      ? "rgba(14,156,147,0.07)"
                      : COLORS.paperDim,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: F_BODY,
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: COLORS.ink,
                      }}
                    >
                      {s?.schoolName || "Unknown School"}
                    </div>
                    <div
                      style={{
                        fontFamily: F_BODY,
                        fontSize: 11.5,
                        color: COLORS.slate,
                      }}
                    >
                      {s?.district || ""}
                    </div>
                  </div>
                  {eligible ? (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        color: COLORS.teal,
                        fontFamily: F_MONO,
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={14} /> LISTED
                    </span>
                  ) : (
                    <span
                      style={{
                        color: COLORS.slate,
                        fontFamily: F_MONO,
                        fontSize: 11,
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      NOT LISTED
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}