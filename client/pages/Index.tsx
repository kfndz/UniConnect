import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, Users, Calendar, Zap, ArrowRight, Globe, Heart, MessageSquare } from "lucide-react";

export default function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-background to-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-200 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">UniConnect</h1>
          </Link>
          <div className="flex gap-4">
            {user ? (
              <Link to="/dashboard">
                <Button className="bg-primary-500 hover:bg-primary-600">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary-500 hover:bg-primary-600">Cadastro</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Sua comunidade acadêmica
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-200">
              conectada e colaborativa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            UniConnect fortalece a comunicação entre estudantes, promove atividades culturais e aumenta o sentimento de pertencimento dentro da comunidade universitária.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-lg">
                Acessar plataforma <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card rounded-2xl mx-6 mb-20 border border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground text-center mb-16">
            Funcionalidades Principais
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-primary-50 border border-primary-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-500 text-white flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Eventos Culturais</h4>
              <p className="text-muted-foreground">Descubra e participe de apresentações artísticas, teatro, música, exposições e muito mais.</p>
            </div>

            <div className="p-8 rounded-xl bg-accent-50 border border-accent-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent-200 text-accent-700 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Grupos Temáticos</h4>
              <p className="text-muted-foreground">Encontre grupos de interesse em tecnologia, artes, esportes, estudos acadêmicos e mais.</p>
            </div>

            <div className="p-8 rounded-xl bg-primary-100/30 border border-primary-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-400 text-white flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Mural Comunitário</h4>
              <p className="text-muted-foreground">Compartilhe avisos, convites, divulgue eventos e oportunidades com a comunidade.</p>
            </div>

            <div className="p-8 rounded-xl bg-primary-50 border border-primary-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Busca de Estudantes</h4>
              <p className="text-muted-foreground">Conecte-se com colegas por nome, curso, semestre e interesses comuns.</p>
            </div>

            <div className="p-8 rounded-xl bg-accent-50 border border-accent-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent-200 text-accent-700 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Perfil Personalizado</h4>
              <p className="text-muted-foreground">Crie seu perfil com informações acadêmicas e interesses culturais únicos.</p>
            </div>

            <div className="p-8 rounded-xl bg-primary-100/30 border border-primary-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-500 text-white flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Notificações</h4>
              <p className="text-muted-foreground">Receba lembretes de eventos, novos grupos e interações importantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-primary-500 to-accent-200 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para conectar?</h3>
          <p className="text-xl opacity-90 mb-8">Faça parte de uma comunidade acadêmica vibrante e colaborativa.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 border border-primary-200 shadow-md hover:shadow-lg transition-all duration-300">Criar Conta<ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-muted-foreground">
          <p>&copy; 2024 UniConnect. Conectando comunidades acadêmicas.</p>
        </div>
      </footer>
    </div>
  );
}
