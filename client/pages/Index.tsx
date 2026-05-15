import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

import {
  BookOpen,
  Users,
  Calendar,
  Zap,
  ArrowRight,
  Globe,
  Heart,
  MessageSquare,
} from "lucide-react";

export default function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary-50 dark:from-[#070b14] dark:via-[#0b1120] dark:to-[#111827] transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-200 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-2xl font-bold text-foreground">UniConnect</h1>
          </Link>

          <div className="flex flex-col sm:flex-row gap-3">
            {user ? (
              <Link to="/dashboard">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>

                <Link to="/signup">
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                    Cadastro
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sua comunidade acadêmica
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-200">
              conectada e colaborativa
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            UniConnect fortalece a comunicação entre estudantes, promove
            atividades culturais e aumenta o sentimento de pertencimento dentro
            da comunidade universitária.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-lg"
              >
                Acessar plataforma
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="text-lg hover:-translate-y-1 transition-all duration-300"
              onClick={() => {
                document.getElementById("features-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features-section"
        className="py-20 mx-6 mb-20 rounded-3xl border border-border bg-card/70 backdrop-blur"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground text-center mb-16">
            Funcionalidades Principais
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                Eventos Culturais
              </h4>

              <p className="text-muted-foreground">
                Descubra e participe de apresentações artísticas, teatro,
                música, exposições e muito mais.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-accent-200 dark:border-accent-900 bg-accent-50 dark:bg-accent-950/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-200 text-accent-700 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                Grupos Temáticos
              </h4>

              <p className="text-muted-foreground">
                Encontre grupos de interesse em tecnologia, artes, esportes e
                estudos acadêmicos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-primary-200 dark:border-primary-900 bg-primary-100/40 dark:bg-primary-950/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-400 text-white flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                Mural Comunitário
              </h4>

              <p className="text-muted-foreground">
                Compartilhe avisos, convites e oportunidades com toda a
                comunidade acadêmica.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl border border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-950/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                Busca de Estudantes
              </h4>

              <p className="text-muted-foreground">
                Conecte-se com colegas por nome, curso, semestre e interesses.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl border border-accent-200 dark:border-accent-900 bg-accent-50 dark:bg-accent-950/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-200 text-accent-700 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                Perfil Personalizado
              </h4>

              <p className="text-muted-foreground">
                Crie um perfil acadêmico personalizado com interesses culturais
                únicos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl border border-primary-200 dark:border-primary-900 bg-primary-100/40 dark:bg-primary-950/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                Notificações
              </h4>

              <p className="text-muted-foreground">
                Receba lembretes importantes, eventos e interações em tempo
                real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-3xl p-12 text-center bg-gradient-to-r from-primary-500 to-accent-200 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Pronto para conectar?</h3>

          <p className="text-xl opacity-90 mb-8">
            Faça parte de uma comunidade acadêmica vibrante, moderna e
            colaborativa.
          </p>

          <Link to="/signup">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              Criar Conta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-muted-foreground">
          <p>&copy; 2026 UniConnect. Conectando comunidades acadêmicas.</p>
        </div>
      </footer>
    </div>
  );
}
