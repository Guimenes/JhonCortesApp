import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border-bottom: 1px solid rgba(236, 182, 19, 0.2);
  padding: 1rem 2.5rem;
  font-family: "Noto Serif", serif;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: rgba(236, 182, 19, 0.3);
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #1c1917;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const BrandIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  color: #ecb613;
`;

export const BrandTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

export const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ecb613;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  /* Temporariamente sempre visível para teste */
  /* @media (min-width: 768px) {
    display: none;
  } */

  span {
    width: 2rem;
    height: 0.25rem;
    background: #ecb613;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (prefers-color-scheme: dark) {
      background: #ecb613;
    }
  }
`;

export const SideMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: visibility 0.3s ease;
`;

export const SideMenuOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const SideMenuContent = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 400px;
  height: 100%;
  background: #fafaf9;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (prefers-color-scheme: dark) {
    background: #1c1917;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  }
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(236, 182, 19, 0.2);
`;

export const SideMenuClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #1c1917;
  transition: color 0.2s ease;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }

  &:hover {
    color: #ecb613;
  }
`;

export const SideMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  flex: 1;
`;

export const SideMenuLink = styled.a`
  padding: 1rem 1.5rem;
  color: #1c1917;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }

  &:hover {
    background: rgba(236, 182, 19, 0.1);
    border-left-color: #ecb613;
    color: #ecb613;
  }
`;
