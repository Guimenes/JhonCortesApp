import React from "react";
import { Container, SectionTitle, GalleryGrid, GalleryImage } from "./styles.ts";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Corte masculino moderno",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Barba bem cuidada",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Corte clássico",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Estilização profissional",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Corte degradê",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1581210091904-ac5b6b9c8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Acabamento perfeito",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Trabalho artístico",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Resultado final",
  },
];

export const GallerySection: React.FC = () => {
  return (
    <Container id="gallery">
      <SectionTitle>Galeria de Trabalhos</SectionTitle>
      <GalleryGrid>
        {galleryImages.map((image) => (
          <GalleryImage key={image.id} src={image.src} alt={image.alt} />
        ))}
      </GalleryGrid>
    </Container>
  );
};
