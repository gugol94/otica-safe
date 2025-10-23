import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useBlurToFocus } from "@/hooks/useBlurToFocus";

const imagens = [
  { src: "/assets/img/otica-atendimento.jpeg", alt: "Atendimento especializado na Óticas Safe" },
  { src: "/assets/img/prateleira.jpeg", alt: "Variedade de armações disponíveis" },
  { src: "/assets/img/exame.jpeg", alt: "Exame de vista gratuito com especialista" },
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierImage, setMagnifierImage] = useState<string | null>(null);
  const { ref: titleRef, isInView: titleInView } = useBlurToFocus(0.1);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, imgSrc: string) => {
    const elem = e.currentTarget;
    const { top, left, width, height } = elem.getBoundingClientRect();

    const x = ((e.pageX - left - window.pageXOffset) / width) * 100;
    const y = ((e.pageY - top - window.pageYOffset) / height) * 100;

    setMagnifierPos({ x, y });
    setMagnifierImage(imgSrc);
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
    setMagnifierImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Nossa Galeria
              </span>
            </div>
            <h2
              ref={titleRef}
              className={`font-heading font-bold text-4xl md:text-6xl text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent blur-to-focus ${
                titleInView ? "in-view" : ""
              }`}
            >
              Momentos que Transformam
            </h2>
            <p
              className={`font-body text-xl text-muted-foreground max-w-2xl mx-auto blur-to-focus ${
                titleInView ? "in-view" : ""
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              Conheça nosso espaço acolhedor e veja como cuidamos da sua visão com carinho e profissionalismo
            </p>
          </div>

          {/* Carrossel Principal */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Carousel
              setApi={setApi}
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent>
                {imagens.map((imagem, index) => (
                  <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4">
                    <div className="p-2">
                      <div
                        className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
                        onClick={() => setSelectedImage(index)}
                      >
                        {/* Overlay com gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Imagem */}
                        <img
                          src={imagem.src}
                          alt={imagem.alt}
                          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Ícone de zoom */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-primary/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <i className="bi bi-zoom-in text-white text-3xl"></i>
                          </div>
                        </div>

                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white font-semibold text-lg">{imagem.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Botões de navegação customizados */}
              <CarouselPrevious className="left-4 md:-left-12 h-12 w-12 border-2 border-primary bg-white/90 hover:bg-primary hover:text-white shadow-lg transition-all duration-300" />
              <CarouselNext className="right-4 md:-right-12 h-12 w-12 border-2 border-primary bg-white/90 hover:bg-primary hover:text-white shadow-lg transition-all duration-300" />
            </Carousel>

            {/* Indicadores (Dots) */}
            <div className="flex justify-center gap-2 mt-8">
              {imagens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? "w-12 h-3 bg-primary"
                      : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails com Lente de Aumento */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
            {imagens.map((imagem, index) => (
              <div
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                }}
                onMouseMove={(e) => handleMouseMove(e, imagem.src)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 ${
                  index === current
                    ? "ring-4 ring-primary shadow-lg scale-105"
                    : "ring-2 ring-transparent hover:ring-primary/50 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={imagem.src}
                  alt={imagem.alt}
                  className="w-full h-20 md:h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    index === current ? "bg-primary/20" : "bg-black/0 group-hover:bg-black/10"
                  }`}
                ></div>

                {/* Lente de Aumento */}
                {showMagnifier && magnifierImage === imagem.src && (
                  <div
                    className="absolute pointer-events-none rounded-full border-4 border-primary shadow-2xl z-50"
                    style={{
                      width: "150px",
                      height: "150px",
                      top: `calc(${magnifierPos.y}% - 75px)`,
                      left: `calc(${magnifierPos.x}% - 75px)`,
                      backgroundImage: `url('${imagem.src}')`,
                      backgroundSize: "300%",
                      backgroundPosition: `${magnifierPos.x}% ${magnifierPos.y}%`,
                      backgroundRepeat: "no-repeat",
                      transition: "opacity 0.2s",
                      boxShadow: "0 0 20px rgba(22, 160, 133, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full ring-2 ring-white/50 ring-inset"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Zoom */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            {/* Botão fechar */}
            <button
              className="absolute -top-2 -right-2 md:top-4 md:right-4 text-white bg-primary hover:bg-primary/90 rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-xl z-10 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <i className="bi bi-x-lg text-3xl"></i>
            </button>

            {/* Navegação no modal */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-primary/80 hover:bg-primary rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : imagens.length - 1));
              }}
            >
              <i className="bi bi-chevron-left text-2xl"></i>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-primary/80 hover:bg-primary rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < imagens.length - 1 ? prev! + 1 : 0));
              }}
            >
              <i className="bi bi-chevron-right text-2xl"></i>
            </button>

            {/* Imagem */}
            <div className="relative">
              <img
                src={imagens[selectedImage].src}
                alt={imagens[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-xl font-semibold">{imagens[selectedImage].alt}</p>
                <p className="text-white/70 text-sm mt-1">
                  {selectedImage + 1} / {imagens.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
