export default function GlobalResponsiveStyles() {
  return (
    <style>{`
      /* ─── Responsive container ─── */
      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        max-width: 1080px;
      }
      @media (min-width: 1280px) {
        .container {
          max-width: 1240px;
          padding-left: 32px;
          padding-right: 32px;
        }
      }
      @media (min-width: 1536px) {
        .container {
          max-width: 1440px;
          padding-left: 40px;
          padding-right: 40px;
        }
      }

      /* ─── Mobile (<= 640px) ─── */
      @media (max-width: 640px) {
        .after-school-grid {
          grid-template-columns: 1fr !important;
          gap: 28px !important;
        }
        .hero-header {
          padding: 56px 0 64px !important;
        }
        .hero-orb {
          width: 260px !important;
          height: 260px !important;
          top: -8% !important;
          right: -25% !important;
        }
        .hero-contact {
          gap: 14px 28px !important;
          margin-top: 32px !important;
        }
        .hide-mobile-arrow {
          display: none !important;
        }
        input[type="text"] {
          font-size: 16px !important;
        }
        .section-pad {
          padding: 52px 0 !important;
        }
      }
      @media (max-width: 480px) {
        .hero-title {
          font-size: clamp(2rem, 10vw, 2.6rem) !important;
        }
        .hero-subtitle {
          font-size: 1rem !important;
        }
      }
    `}</style>
  );
}