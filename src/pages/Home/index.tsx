import { Header, Button, Card } from "../../components/index.js";
import {
  homeContainer,
  heroSection,
  heroTitle,
  heroSubtitle,
  cardsSection,
  actionsSection,
} from "./styles.js";

export const Home = () => {
  const handleButtonClick = (action: string) => {
    console.log(`Ação: ${action}`);
  };

  return (
    <div>
      <Header title="JhonCortesApp" />

      <main style={homeContainer}>
        <section style={heroSection}>
          <h1 style={heroTitle}>Bem-vindo ao JhonCortesApp</h1>
          <p style={heroSubtitle}>
            Uma aplicação React moderna construída com Vite e TypeScript.
            Organizada com componentes reutilizáveis e seguindo as melhores
            práticas.
          </p>
        </section>

        <section style={cardsSection}>
          <Card
            title="Componentes"
            subtitle="Biblioteca de componentes"
            footer={
              <Button
                variant="primary"
                onClick={() => handleButtonClick("componentes")}
              >
                Ver Componentes
              </Button>
            }
          >
            <p>
              Coleção de componentes reutilizáveis seguindo o padrão index.tsx +
              styles.ts. Cada componente é tipado com TypeScript para melhor
              experiência de desenvolvimento.
            </p>
          </Card>

          <Card
            title="Estrutura"
            subtitle="Organização do projeto"
            footer={
              <Button
                variant="secondary"
                onClick={() => handleButtonClick("estrutura")}
              >
                Explorar
              </Button>
            }
          >
            <p>
              Projeto organizado com separação clara entre componentes, páginas,
              utilitários, hooks e serviços para facilitar a manutenção e
              escalabilidade.
            </p>
          </Card>

          <Card
            title="TypeScript"
            subtitle="Tipagem estática"
            footer={
              <Button
                variant="success"
                onClick={() => handleButtonClick("typescript")}
              >
                Saiba Mais
              </Button>
            }
          >
            <p>
              Desenvolvido com TypeScript para garantir maior segurança de
              tipos, melhor IntelliSense e facilitar a detecção de erros durante
              o desenvolvimento.
            </p>
          </Card>
        </section>

        <section style={actionsSection}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick("começar")}
          >
            Começar Desenvolvimento
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleButtonClick("documentação")}
          >
            Ver Documentação
          </Button>
        </section>
      </main>
    </div>
  );
};
