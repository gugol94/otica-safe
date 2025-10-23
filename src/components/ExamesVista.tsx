const exames = [
  {
    icon: "bi-eye",
    title: "Acuidade Visual",
    description:
      "Verificação da nitidez e capacidade de leitura a diferentes distâncias",
  },
  {
    icon: "bi-binoculars",
    title: "Refração",
    description:
      "Determinação do grau ideal para lentes corretivas com precisão",
  },
  {
    icon: "bi-sunglasses",
    title: "Adequação de armações",
    description: "Conforto e encaixe perfeito para o seu formato de rosto",
  },
  {
    icon: "bi-heart-pulse",
    title: "Cuidados preventivos",
    description: "Orientações para manter a saúde dos olhos em dia",
  },
];

const ExamesVista = () => {
  return (
    <section id="exames" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Exames de Vista
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Avaliação completa realizada por especialista formado e
              experiente. Orientação humanizada e recomendações personalizadas
              para o seu dia a dia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exames.map((exame, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <i className={`bi ${exame.icon} text-3xl text-primary`}></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {exame.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {exame.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamesVista;
