import React from "react";
import {
  Container,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from "./styles.ts";

const services = [
  {
    id: 1,
    title: "Corte Masculino",
    description:
      "Cortes modernos e clássicos adaptados ao seu estilo e formato de rosto.",
    icon: (
      <svg
        fill="currentColor"
        height="48"
        viewBox="0 0 256 256"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M157.73,113.13A8,8,0,0,1,159.82,102L227.48,55.7a8,8,0,0,1,9,13.21l-67.67,46.3a7.92,7.92,0,0,1-4.51,1.4A8,8,0,0,1,157.73,113.13Zm80.87,85.09a8,8,0,0,1-11.12,2.08L136,137.7,93.49,166.78a36,36,0,1,1-9-13.19L121.83,128,84.44,102.41a35.86,35.86,0,1,1,9-13.19l143,97.87A8,8,0,0,1,238.6,198.22ZM80,180a20,20,0,1,0-5.86,14.14A19.85,19.85,0,0,0,80,180ZM74.14,90.13a20,20,0,1,0-28.28,0A19.85,19.85,0,0,0,74.14,90.13Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Barba & Bigode",
    description:
      "Modelagem, aparo e cuidados especiais para uma barba impecável.",
    icon: (
      <svg
        fill="currentColor"
        height="48"
        viewBox="0 0 256 256"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-39.18,42a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l30.12-32.27,60.78,66.86ZM108.66,71a8,8,0,0,1-.39-11.31l45.88-49.16a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95l-22.3,23.89a8,8,0,0,1-11.7-10.91L194,123.29l-52.8-19.8a8,8,0,0,1-5-9.06l10.47-52.38L120,70.62A8,8,0,0,1,108.66,71Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Tratamentos Capilares",
    description:
      "Hidratação, reconstrução e tratamentos para cabelos saudáveis.",
    icon: (
      <svg
        fill="currentColor"
        height="48"
        viewBox="0 0 256 256"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"></path>
      </svg>
    ),
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Container id="services">
      <SectionTitle>Nossos Serviços</SectionTitle>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  );
};
