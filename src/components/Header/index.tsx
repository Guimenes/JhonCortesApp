import { Button } from "../Button";
import {
  HeaderContainer,
  Brand,
  BrandIcon,
  BrandTitle,
  Navigation,
  NavLink,
  Actions,
  ProfileImage,
} from "./styles";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title: titleText = "Jhon Cortes" }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Brand>
        <BrandIcon>
          <svg height="24" width="24" fill="currentColor" viewBox="0 0 48 48">
            <path
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </BrandIcon>
        <BrandTitle>{titleText}</BrandTitle>
      </Brand>

      <Navigation>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#shop">Loja</NavLink>
        <NavLink href="#gallery">Galeria</NavLink>
        <NavLink href="#booking">Agendamento</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Navigation>

      <Actions>
        <Button variant="primary" size="small">
          Agendar
        </Button>
        <ProfileImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
          alt="Jhon Cortes"
        />
      </Actions>
    </HeaderContainer>
  );
};
