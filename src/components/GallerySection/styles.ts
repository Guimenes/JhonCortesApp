import styled from "styled-components";

export const Container = styled.section`
  background-color: #f8f8f6;
  padding: 5rem 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #221d10;
  }

  @media (min-width: 640px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1c1917;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 112rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
