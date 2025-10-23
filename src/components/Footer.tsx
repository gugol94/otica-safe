const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/img/logo.jpeg"
                alt="Óticas Safe Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-bold text-lg text-primary">
                  Óticas Safe
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  © 2025 Óticas Safe. Todos os direitos reservados.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5511989531046"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="bi bi-whatsapp text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/oticasafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Óticas-Safe/61581609264513"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="bi bi-facebook text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
