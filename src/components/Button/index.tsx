import { getButtonStyle } from "./styles.js";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  size = "medium",
}: ButtonProps) => {
  return (
    <button
      type={type}
      style={getButtonStyle(variant, size, disabled)}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
