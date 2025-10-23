const HeroSecundaria = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="aspect-[4/3] relative">
              <img
                src="/assets/img/prateleira.jpeg"
                alt="Prateleira com armações de óculos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                      <i className="bi bi-shield-check text-4xl"></i>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                        Garantia total
                      </h3>
                      <p className="font-body text-lg md:text-xl opacity-90">
                        Qualidade e confiança em cada detalhe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecundaria;
