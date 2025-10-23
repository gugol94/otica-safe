import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-lg"
          : "bg-gradient-to-b from-primary-light to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/img/logo.jpeg"
              alt="Óticas Safe Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-xl text-primary">
              Óticas Safe
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("promocao")}
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("exames")}
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Exames
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          <Button
            variant="hero"
            size="default"
            onClick={() => scrollToSection("contato")}
          >
            Agendar exame
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
