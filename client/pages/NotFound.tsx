import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-background">
      <div className="text-center max-w-md px-6">
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-200 mb-4">
            404
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Página não encontrada</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
            <Home className="mr-2 w-5 h-5" /> Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
