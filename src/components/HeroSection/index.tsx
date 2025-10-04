import React from "react";
import { Button } from "../Button";
import {
  Container,
  HeroContent,
  HeroTitle,
  HeroDescription,
} from "./styles.ts";

export const HeroSection: React.FC = () => {
  return (
    <Container>
      <HeroContent>
        <HeroTitle>Jhon Cortes</HeroTitle>
        <HeroDescription>
          Especialista em cortes masculinos e estilização. Transformando visual
          com técnica, criatividade e paixão pela arte de cortar cabelo.
        </HeroDescription>
        <Button variant="primary" size="large">
          Agende seu Horário
        </Button>
      </HeroContent>
    </Container>
  );
};
