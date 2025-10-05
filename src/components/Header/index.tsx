import { useState } from "react";
import {
  HeaderContainer,
  Brand,
  BrandIcon,
  BrandTitle,
  Navigation,
  NavLink,
  Actions,
  HamburgerButton,
  SideMenu,
  SideMenuOverlay,
  SideMenuContent,
  SideMenuHeader,
  SideMenuClose,
  SideMenuNav,
  SideMenuLink,
} from "./styles";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title: titleText = "Jhon Cortes" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Brand>
          <BrandIcon>
            <svg height="24" width="24" fill="currentColor" viewBox="0 0 48 48">
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </BrandIcon>
          <BrandTitle>{titleText}</BrandTitle>
        </Brand>

        <Navigation>
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#shop">Loja</NavLink>
          <NavLink href="#gallery">Galeria</NavLink>
          <NavLink href="#booking">Agendamento</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Navigation>

        <Actions>
          <HamburgerButton onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </Actions>
      </HeaderContainer>

      {/* Menu Lateral */}
      <SideMenu $isOpen={isMenuOpen}>
        <SideMenuOverlay onClick={closeMenu} />
        <SideMenuContent $isOpen={isMenuOpen}>
          <SideMenuHeader>
            <Brand>
              <BrandIcon>
                <svg
                  height="24"
                  width="24"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </BrandIcon>
              <BrandTitle>{titleText}</BrandTitle>
            </Brand>
            <SideMenuClose onClick={closeMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SideMenuClose>
          </SideMenuHeader>

          <SideMenuNav>
            <SideMenuLink href="#services" onClick={closeMenu}>
              Serviços
            </SideMenuLink>
            <SideMenuLink href="#shop" onClick={closeMenu}>
              Loja
            </SideMenuLink>
            <SideMenuLink href="#gallery" onClick={closeMenu}>
              Galeria
            </SideMenuLink>
            <SideMenuLink href="#booking" onClick={closeMenu}>
              Agendamento
            </SideMenuLink>
            <SideMenuLink href="#contact" onClick={closeMenu}>
              Contato
            </SideMenuLink>
          </SideMenuNav>
        </SideMenuContent>
      </SideMenu>
    </>
  );
};
