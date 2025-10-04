import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1rem;
  max-width: 80rem;
  margin: 0 auto;

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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: #f8f8f6;
  border: 1px solid rgba(236, 182, 19, 0.2);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background-color: #221d10;
    border-color: rgba(236, 182, 19, 0.3);
  }
`;

export const ServiceIcon = styled.div`
  color: #ecb613;
  margin-bottom: 1rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1c1917;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 0.875rem;
  color: #57534e;
  line-height: 1.6;

  @media (prefers-color-scheme: dark) {
    color: #a8a29e;
  }
`;
