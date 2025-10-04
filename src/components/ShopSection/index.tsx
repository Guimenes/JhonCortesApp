import React from "react";
import { Button } from "../Button";
import {
  Container,
  SectionTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "./styles.ts";

const products = [
  {
    id: 1,
    title: "Óleo para Barba Premium",
    description:
      "Hidrata e amacia os fios, com fragrância amadeirada exclusiva.",
    price: "R$ 45,00",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Pomada Modeladora",
    description: "Fixação forte e efeito natural para o seu penteado.",
    price: "R$ 55,00",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Shampoo Especial",
    description: "Limpeza profunda sem ressecar, ideal para uso diário.",
    price: "R$ 40,00",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Kit Cuidados Masculinos",
    description: "Kit completo para cuidados diários do cabelo e barba.",
    price: "R$ 120,00",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const ShopSection: React.FC = () => {
  return (
    <Container id="shop">
      <SectionTitle>Nossa Loja</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductContent>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <Button variant="primary" size="small">
                Adicionar ao Carrinho
              </Button>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsGrid>
    </Container>
  );
};
