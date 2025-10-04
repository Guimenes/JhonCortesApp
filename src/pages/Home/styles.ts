import type { CSSProperties } from "react";

export const homeContainer: CSSProperties = {
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

export const heroSection: CSSProperties = {
  textAlign: "center",
  marginBottom: "48px",
};

export const heroTitle: CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#333333",
  marginBottom: "16px",
};

export const heroSubtitle: CSSProperties = {
  fontSize: "1.125rem",
  color: "#666666",
  marginBottom: "32px",
  lineHeight: "1.6",
};

export const cardsSection: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
  marginBottom: "48px",
};

export const actionsSection: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  flexWrap: "wrap",
};
