import styled from "styled-components";

export const Container = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(rgba(34, 29, 16, 0.7), rgba(34, 29, 16, 0.9)),
    url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80");
  background-size: cover;
  background-position: center;
  color: white;
  font-family: "Noto Serif", serif;
`;

export const HeroContent = styled.div`
  max-width: 32rem;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  color: #ecb613;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #d6d3d1;
  line-height: 1.75;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
