# JhonCortesApp

Uma aplicação React moderna construída com Vite, TypeScript e seguindo as melhores práticas de desenvolvimento.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server extremamente rápido
- **CSS-in-JS** - Estilização usando objetos TypeScript

## 📁 Estrutura do Projeto

```text
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/
│   │   ├── index.tsx   # Componente principal
│   │   └── styles.ts   # Estilos do componente
│   ├── Button/
│   ├── Card/
│   └── index.ts        # Barrel exports
├── pages/              # Páginas da aplicação
│   ├── Home/
│   └── index.ts
├── hooks/              # Hooks customizados
│   ├── useLocalStorage.ts
│   └── index.ts
├── services/           # Serviços e APIs
│   ├── api.ts
│   └── index.ts
├── types/              # Definições de tipos TypeScript
│   ├── global.ts
│   └── index.ts
├── utils/              # Funções utilitárias
│   ├── helpers.ts
│   └── index.ts
├── styles/             # Estilos globais
│   └── global.css
├── assets/             # Recursos estáticos
├── App.tsx            # Componente raiz
└── main.tsx           # Ponto de entrada
```

## 🎯 Padrões Utilizados

### Componentes

- **Estrutura**: Cada componente possui seu próprio diretório
- **Arquivos**: `index.tsx` (componente) + `styles.ts` (estilos)
- **Tipagem**: Interfaces TypeScript para todas as props
- **Estilos**: CSS-in-JS usando `CSSProperties`

### Organização

- **Barrel Exports**: Arquivos `index.ts` para facilitar imports
- **Tipagem Forte**: TypeScript em todos os arquivos
- **Hooks Customizados**: Reutilização de lógica entre componentes
- **Serviços**: Camada dedicada para chamadas de API

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Lint do código
npm run lint
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3001/api
```

### ESLint e TypeScript

O projeto está configurado com:

- ESLint para análise de código
- TypeScript com modo estrito
- Regras de qualidade de código

## 📦 Componentes Disponíveis

### Header

```tsx
<Header title="Meu App" />
```

### Button

```tsx
<Button variant="primary" onClick={handleClick}>
  Clique aqui
</Button>
```

### Card

```tsx
<Card
  title="Título do Card"
  subtitle="Subtítulo"
  footer={<Button>Ação</Button>}
>
  Conteúdo do card
</Card>
```

## 🎨 Customização

### Cores

As cores estão definidas em `src/styles/global.css` usando variáveis CSS:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* ... outras cores */
}
```

### Estilos de Componentes

Os estilos são definidos em arquivos `styles.ts` usando o tipo `CSSProperties`:

```typescript
export const myStyle: CSSProperties = {
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "8px",
};
```

## 🚀 Próximos Passos

1. **Routing**: Adicionar React Router para navegação
2. **Estado Global**: Implementar Context API ou Zustand
3. **Formulários**: Adicionar validação e gerenciamento de forms
4. **Testes**: Configurar Jest e React Testing Library
5. **Storybook**: Documentação visual dos componentes

## 📝 Contribuição

1. Siga os padrões estabelecidos
2. Use TypeScript para tipagem
3. Documente novos componentes
4. Mantenha a estrutura de pastas organizada

## 📄 Licença

Este projeto está sob a licença MIT.
