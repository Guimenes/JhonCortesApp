import styled from "styled-components";

export const Container = styled.footer`
  background-color: #f8f8f6;
  border-top: 1px solid rgba(236, 182, 19, 0.2);

  @media (prefers-color-scheme: dark) {
    background-color: #221d10;
    border-top-color: rgba(236, 182, 19, 0.3);
  }
`;

export const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  text-align: center;
  color: #57534e;

  @media (prefers-color-scheme: dark) {
    color: #a8a29e;
  }

  @media (min-width: 640px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1c1917;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const ContactInfo = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const SocialLink = styled.a`
  color: #78716c;
  transition: color 0.2s ease;

  &:hover {
    color: #ecb613;
  }

  @media (prefers-color-scheme: dark) {
    color: #a8a29e;

    &:hover {
      color: #ecb613;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(120, 113, 108, 0.2);

  @media (prefers-color-scheme: dark) {
    border-top-color: rgba(168, 162, 158, 0.2);
  }
`;
