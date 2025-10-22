import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contatos = [
  {
    icon: "bi-geo-alt-fill",
    title: "Local",
    info: "R. Euclídes da Cunha, 257",
    subInfo: "Centro, Osasco - SP, 06016-030",
    link: "https://maps.app.goo.gl/5xwZmmWSwm5G9bkm6",
  },
  {
    icon: "bi-telephone-fill",
    title: "Telefone",
    info: "+55 11 98953-1046",
    subInfo: "WhatsApp disponível",
    link: "https://wa.me/5511989531046",
  },
  {
    icon: "bi-whatsapp",
    title: "WhatsApp",
    info: "Enviar mensagem",
    subInfo: "Resposta rápida",
    link: "https://wa.me/5511989531046",
  },
  {
    icon: "bi-instagram",
    title: "Instagram",
    info: "@oticasafe",
    subInfo: "Siga-nos nas redes",
    link: "https://www.instagram.com/oticasafe/",
  },
];

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Contato e Agendamento
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Entre em contato e agende seu exame gratuito
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-up">
              <div className="grid sm:grid-cols-2 gap-6">
                {contatos.map((contato, index) => (
                  <a
                    key={index}
                    href={contato.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 transition-colors w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className={`bi ${contato.icon} text-2xl text-primary`}></i>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-muted-foreground mb-1">
                          {contato.title}
                        </h4>
                        <p className="font-body font-semibold text-foreground mb-1">
                          {contato.info}
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          {contato.subInfo}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl animate-slide-up">
              <form
                action="https://formsubmit.co/Luminlab01@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Novo contato — Óticas Safe"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${window.location.origin}/agradecimento`}
                />

                <div>
                  <label className="font-body font-medium text-foreground mb-2 block">
                    Nome completo
                  </label>
                  <Input
                    type="text"
                    name="nome"
                    required
                    placeholder="Seu nome"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="font-body font-medium text-foreground mb-2 block">
                    Telefone / WhatsApp
                  </label>
                  <Input
                    type="tel"
                    name="telefone"
                    required
                    placeholder="(11) 98765-4321"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="font-body font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    name="mensagem"
                    required
                    placeholder="Quero agendar meu exame gratuito"
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <i className="bi bi-send mr-2"></i>
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
