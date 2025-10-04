import { headerContainer, title } from "./styles.js";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title: titleText = "JhonCortesApp" }: HeaderProps) => {
  return (
    <header style={headerContainer}>
      <h1 style={title}>{titleText}</h1>
    </header>
  );
};
