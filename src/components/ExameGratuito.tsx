import { Button } from "@/components/ui/button";

const ExameGratuito = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="promocao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 animate-fade-in">
              <i className="bi bi-stars text-2xl"></i>
              <span className="font-heading font-bold text-lg">
                PROJETO EXAME DE VISTA GRATUITO – ÓTICAS SAFE
              </span>
              <i className="bi bi-eyeglasses text-2xl"></i>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="font-body text-lg text-foreground leading-relaxed">
                A Óticas Safe tem o prazer de trazer até você um exame de vista
                totalmente gratuito, realizado por um especialista formado e com
                muitos anos de experiência na área da saúde visual. Nossa missão
                é cuidar da visão dos moradores do condomínio com conforto,
                confiança e qualidade.
              </p>

              <p className="font-body text-lg text-foreground leading-relaxed">
                Durante o evento, você poderá realizar sua avaliação visual sem
                custo e, caso precise de óculos, oferecemos uma armação
                totalmente cortesia na compra das lentes corretivas. 💚
              </p>

              <p className="font-body text-lg text-foreground leading-relaxed">
                Além disso, garantimos preços muito mais acessíveis que nas
                óticas convencionais, sem abrir mão da qualidade. Todos os
                nossos produtos contam com garantia total, porque acreditamos
                que cuidar bem da sua visão é o que realmente importa.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <p className="font-heading font-semibold text-xl text-primary flex items-center gap-2">
                  <i className="bi bi-eye"></i>
                  Venha participar!
                </p>
                <p className="font-body text-foreground mt-2">
                  Cuide da sua visão com quem entende do assunto. Óticas Safe –
                  Saúde visual com confiança e economia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => scrollToSection("contato")}
                >
                  <i className="bi bi-hand-thumbs-up mr-2"></i>
                  Quero participar
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("galeria")}
                >
                  <i className="bi bi-images mr-2"></i>
                  Ver fotos
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/img/exame.jpeg"
                  alt="Exame de vista sendo realizado"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExameGratuito;
