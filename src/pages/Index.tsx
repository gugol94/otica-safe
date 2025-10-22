import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExameGratuito from "@/components/ExameGratuito";
import ExamesVista from "@/components/ExamesVista";
import HeroSecundaria from "@/components/HeroSecundaria";
import Galeria from "@/components/Galeria";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExameGratuito />
      <ExamesVista />
      <HeroSecundaria />
      <Galeria />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
