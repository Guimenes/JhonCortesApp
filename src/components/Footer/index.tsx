import React from "react";
import {
  Container,
  FooterContent,
  ContactTitle,
  ContactInfo,
  SocialLinks,
  SocialLink,
  Copyright,
} from "./styles.ts";

export const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContent>
        <ContactTitle>Contato</ContactTitle>
        <ContactInfo>
          Rua dos Cabeleireiros, 456, Centro, São Paulo, SP
        </ContactInfo>
        <ContactInfo>(11) 98765-4321</ContactInfo>
        <ContactInfo>jhoncortes@email.com</ContactInfo>

        <SocialLinks>
          <SocialLink href="#" aria-label="Instagram">
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </SocialLink>

          <SocialLink href="#" aria-label="Facebook">
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
            </svg>
          </SocialLink>

          <SocialLink href="#" aria-label="WhatsApp">
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
            >
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5L128,143.72a5.94,5.94,0,0,1-5.26.54c-5.62-2.05-9.44-4.44-12.18-7.18s-5.13-6.56-7.18-12.18a5.94,5.94,0,0,1,.54-5.26L118.34,99.6a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,96,56a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,168a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,73.46l11.48,23L101,118a8,8,0,0,0-.73,7.51c1.17,5.27,4.64,11.28,8.46,15.1s9.83,7.29,15.1,8.46a8,8,0,0,0,7.51-.73L153,138.23l23,11.48A24,24,0,0,1,152,168Z"></path>
            </svg>
          </SocialLink>
        </SocialLinks>

        <Copyright>© 2025 Jhon Cortes. Todos os direitos reservados.</Copyright>
      </FooterContent>
    </Container>
  );
};
