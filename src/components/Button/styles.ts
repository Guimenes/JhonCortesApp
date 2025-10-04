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

const sizeStyles = {
  small: { padding: "8px 16px", fontSize: "0.875rem" },
  medium: { padding: "12px 24px", fontSize: "1rem" },
  large: { padding: "16px 32px", fontSize: "1.125rem" },
};

export const getButtonStyle = (
  variant: "primary" | "secondary" | "success" | "danger" = "primary",
  size: "small" | "medium" | "large" = "medium",
  disabled: boolean = false
): CSSProperties => {
  let variantStyle: CSSProperties = {};

  if (disabled) {
    variantStyle = {
      backgroundColor: "#e9ecef",
      color: "#6c757d",
      cursor: "not-allowed",
    };
  } else {
    switch (variant) {
      case "secondary":
        variantStyle = {
          backgroundColor: "#6c757d",
          color: "#ffffff",
        };
        break;
      case "success":
        variantStyle = {
          backgroundColor: "#28a745",
          color: "#ffffff",
        };
        break;
      case "danger":
        variantStyle = {
          backgroundColor: "#dc3545",
          color: "#ffffff",
        };
        break;
      default:
        variantStyle = {
          backgroundColor: "#ecb613",
          color: "#221d10",
        };
    }
  }

  return {
    ...baseButton,
    ...sizeStyles[size],
    ...variantStyle,
  };
};
