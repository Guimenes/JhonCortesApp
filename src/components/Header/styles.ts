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
