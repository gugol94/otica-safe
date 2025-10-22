import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useBlurToFocus } from "@/hooks/useBlurToFocus";

const Hero = () => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const imageRef = useRef<HTMLDivElement>(null);
  const { ref: titleRef, isInView: titleInView } = useBlurToFocus(0.2);
  const { ref: subtitleRef, isInView: subtitleInView } = useBlurToFocus(0.2);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / rect.width) * 20;
    const rotateX = -(mouseY / rect.height) * 20;

    setTransform({ rotateX, rotateY, scale: 1.05 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-light via-background to-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className={`font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground blur-to-focus ${
                titleInView ? "in-view" : ""
              }`}
            >
              Cuidamos da sua visão com{" "}
              <span className="text-primary">carinho e qualidade</span>
            </h1>

            <p
              ref={subtitleRef}
              className={`font-body text-xl md:text-2xl text-muted-foreground leading-relaxed blur-to-focus ${
                subtitleInView ? "in-view" : ""
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Exame de vista gratuito, armação cortesia na compra das lentes
              corretivas e preços que cabem no seu bolso
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contato")}
              >
                <i className="bi bi-calendar-check mr-2"></i>
                Agendar avaliação
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("promocao")}
              >
                <i className="bi bi-arrow-down mr-2"></i>
                Saiba mais
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in perspective-1000">
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-out cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="/assets/img/otica-atendimento.jpeg"
                alt="Interior moderno da Óticas Safe"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              style={{
                transform: `translateZ(40px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <i className="bi bi-shield-check text-4xl mb-2"></i>
              <p className="font-heading font-bold text-sm">
                Garantia total em
                <br />
                todos os produtos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
