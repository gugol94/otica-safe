import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-light">
      <div className="text-center max-w-2xl px-4 animate-fade-in">
        <div className="bg-card rounded-3xl p-12 shadow-2xl">
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="bi bi-exclamation-triangle-fill text-6xl text-primary"></i>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">404</h1>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Oops! Página não encontrada
          </p>
          
          <Button variant="hero" size="lg" onClick={() => navigate("/")}>
            <i className="bi bi-house-door mr-2"></i>
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
