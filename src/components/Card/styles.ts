import type { CSSProperties } from "react";

export const cardContainer: CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  padding: "24px",
  border: "1px solid #e0e0e0",
  transition: "box-shadow 0.2s ease",
};

export const cardHeader: CSSProperties = {
  marginBottom: "16px",
  paddingBottom: "12px",
  borderBottom: "1px solid #f0f0f0",
};

export const cardTitle: CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#333333",
  margin: "0 0 8px 0",
};

export const cardSubtitle: CSSProperties = {
  fontSize: "0.875rem",
  color: "#666666",
  margin: "0",
};

export const cardContent: CSSProperties = {
  color: "#333333",
  lineHeight: "1.6",
};

export const cardFooter: CSSProperties = {
  marginTop: "16px",
  paddingTop: "12px",
  borderTop: "1px solid #f0f0f0",
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
};
