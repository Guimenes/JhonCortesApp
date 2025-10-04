import type { CSSProperties } from "react";

const baseButton: CSSProperties = {
  padding: "12px 24px",
  borderRadius: "6px",
  border: "none",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
};

export const primaryButton: CSSProperties = {
  ...baseButton,
  backgroundColor: "#007bff",
  color: "#ffffff",
};

export const secondaryButton: CSSProperties = {
  ...baseButton,
  backgroundColor: "#6c757d",
  color: "#ffffff",
};

export const successButton: CSSProperties = {
  ...baseButton,
  backgroundColor: "#28a745",
  color: "#ffffff",
};

export const dangerButton: CSSProperties = {
  ...baseButton,
  backgroundColor: "#dc3545",
  color: "#ffffff",
};

export const disabledButton: CSSProperties = {
  ...baseButton,
  backgroundColor: "#e9ecef",
  color: "#6c757d",
  cursor: "not-allowed",
};
