import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1rem;
  background-color: rgba(248, 248, 246, 0.5);

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

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const BookingCard = styled.div`
  background-color: #f8f8f6;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(236, 182, 19, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  max-width: 64rem;
  margin: 0 auto;

  @media (prefers-color-scheme: dark) {
    background-color: #221d10;
    border-color: rgba(236, 182, 19, 0.3);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CalendarSection = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CalendarNavButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #57534e;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(236, 182, 19, 0.2);
  }

  @media (prefers-color-scheme: dark) {
    color: #a8a29e;

    &:hover {
      background-color: rgba(236, 182, 19, 0.3);
    }
  }
`;

export const MonthTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  color: #1c1917;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f4;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 0.875rem;
`;

export const CalendarDay = styled.div`
  padding: 0.5rem;
  font-weight: 700;
  color: #78716c;

  @media (prefers-color-scheme: dark) {
    color: #a8a29e;
  }
`;

export const CalendarDayButton = styled.button<{ $isSelected: boolean }>`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.$isSelected ? "#ecb613" : "transparent"};
  color: ${(props) => (props.$isSelected ? "#221d10" : "inherit")};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? "#ecb613" : "rgba(236, 182, 19, 0.2)"};
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: ${(props) =>
        props.$isSelected ? "#ecb613" : "rgba(236, 182, 19, 0.3)"};
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(236, 182, 19, 0.3);
  background-color: #f8f8f6;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #374151;

  &:focus {
    outline: none;
    border-color: #ecb613;
    box-shadow: 0 0 0 3px rgba(236, 182, 19, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #221d10;
    color: #f5f5f4;
    border-color: rgba(236, 182, 19, 0.3);

    &:focus {
      box-shadow: 0 0 0 3px rgba(236, 182, 19, 0.2);
    }
  }
`;
