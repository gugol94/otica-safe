import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Agradecimento = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light">
      <div className="max-w-2xl mx-auto px-4 text-center animate-fade-in">
        <div className="bg-card rounded-3xl p-12 shadow-2xl">
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="bi bi-check-circle-fill text-6xl text-primary"></i>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Obrigado! Recebemos sua mensagem.
          </h1>

          <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
            Nossa equipe vai responder em breve pelo WhatsApp ou e-mail
            informado. Aguarde nosso contato!
          </p>

          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate("/")}
            className="mx-auto"
          >
            <i className="bi bi-house-door mr-2"></i>
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Agradecimento;
