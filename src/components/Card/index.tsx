import {
  cardContainer,
  cardHeader,
  cardTitle,
  cardSubtitle,
  cardContent,
  cardFooter,
} from "./styles.js";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card = ({
  title,
  subtitle,
  children,
  footer,
  style,
}: CardProps) => {
  return (
    <div style={{ ...cardContainer, ...style }}>
      {(title || subtitle) && (
        <div style={cardHeader}>
          {title && <h3 style={cardTitle}>{title}</h3>}
          {subtitle && <p style={cardSubtitle}>{subtitle}</p>}
        </div>
      )}

      <div style={cardContent}>{children}</div>

      {footer && <div style={cardFooter}>{footer}</div>}
    </div>
  );
};
