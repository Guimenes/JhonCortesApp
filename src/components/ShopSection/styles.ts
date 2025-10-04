import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(248, 248, 246, 0.5);
  padding: 5rem 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(34, 29, 16, 0.5);
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
  max-width: 112rem;
  margin-left: auto;
  margin-right: auto;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 112rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductCard = styled.div`
  background-color: #f8f8f6;
  border: 1px solid rgba(236, 182, 19, 0.2);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #221d10;
    border-color: rgba(236, 182, 19, 0.3);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
`;

export const ProductContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1c1917;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: #57534e;
  flex: 1;
  margin-bottom: 1rem;
  line-height: 1.6;

  @media (prefers-color-scheme: dark) {
    color: #a8a29e;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: #ecb613;
  margin-bottom: 1rem;
`;
