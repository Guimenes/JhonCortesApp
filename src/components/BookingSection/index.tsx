import React, { useState } from "react";
import { Button } from "../Button";
import {
  Container,
  SectionTitle,
  BookingCard,
  CalendarSection,
  FormSection,
  CalendarHeader,
  CalendarNavButton,
  CalendarGrid,
  CalendarDay,
  CalendarDayButton,
  FormGroup,
  FormLabel,
  FormSelect,
  MonthTitle,
} from "./styles.ts";

export const BookingSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    "Corte de Cabelo",
    "Barba & Bigode",
    "Tratamentos Capilares",
    "Corte + Barba",
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleBooking = () => {
    if (selectedService && selectedTime) {
      alert(
        `Agendamento confirmado para o dia ${selectedDay} às ${selectedTime} - ${selectedService}`
      );
    } else {
      alert("Por favor, selecione um serviço e horário");
    }
  };

  return (
    <Container id="booking">
      <SectionTitle>Agende seu Horário</SectionTitle>
      <BookingCard>
        <CalendarSection>
          <CalendarHeader>
            <CalendarNavButton>
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 256 256"
                width="18"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </CalendarNavButton>
            <MonthTitle>Outubro 2025</MonthTitle>
            <CalendarNavButton>
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 256 256"
                width="18"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </CalendarNavButton>
          </CalendarHeader>

          <CalendarGrid>
            <CalendarDay>D</CalendarDay>
            <CalendarDay>S</CalendarDay>
            <CalendarDay>T</CalendarDay>
            <CalendarDay>Q</CalendarDay>
            <CalendarDay>Q</CalendarDay>
            <CalendarDay>S</CalendarDay>
            <CalendarDay>S</CalendarDay>

            {daysInMonth.map((day) => (
              <CalendarDayButton
                key={day}
                $isSelected={day === selectedDay}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </CalendarDayButton>
            ))}
          </CalendarGrid>
        </CalendarSection>

        <FormSection>
          <FormGroup>
            <FormLabel>Serviço</FormLabel>
            <FormSelect
              value={selectedService}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedService(e.target.value)
              }
            >
              <option value="">Selecione um serviço</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </FormSelect>
          </FormGroup>

          <FormGroup>
            <FormLabel>Horário</FormLabel>
            <FormSelect
              value={selectedTime}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedTime(e.target.value)
              }
            >
              <option value="">Selecione um horário</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </FormSelect>
          </FormGroup>

          <Button variant="primary" size="large" onClick={handleBooking}>
            Confirmar Agendamento
          </Button>
        </FormSection>
      </BookingCard>
    </Container>
  );
};
