import {
  Header,
  HeroSection,
  ServicesSection,
  ShopSection,
  GallerySection,
  Footer,
} from "../../components/index.js";

export const Home = () => {
  return (
    <div>
      <Header title="Jhon Cortes" />
      <main>
        <HeroSection />
        <ServicesSection />
        <ShopSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};
