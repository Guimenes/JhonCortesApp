import {
  primaryButton,
  secondaryButton,
  successButton,
  dangerButton,
  disabledButton,
} from "./styles.js";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const getButtonStyle = () => {
    if (disabled) return disabledButton;

    switch (variant) {
      case "secondary":
        return secondaryButton;
      case "success":
        return successButton;
      case "danger":
        return dangerButton;
      default:
        return primaryButton;
    }
  };

  return (
    <button
      type={type}
      style={getButtonStyle()}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
