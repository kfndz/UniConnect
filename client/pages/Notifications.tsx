import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Notificações
          </h1>

          <p className="text-muted-foreground">
            Acompanhe avisos, eventos e atualizações da comunidade.
          </p>
        </div>

        <div className="space-y-4">
          <Card className="p-5 flex items-start gap-4 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary-500" />
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                Novo evento disponível
              </h3>

              <p className="text-muted-foreground text-sm">
                Workshop de Desenvolvimento Mobile foi adicionado aos eventos.
              </p>
            </div>
          </Card>

          <Card className="p-5 flex items-start gap-4 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent-200/20 flex items-center justify-center">
              <Bell className="w-6 h-6 text-accent-200" />
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                Novo grupo criado
              </h3>

              <p className="text-muted-foreground text-sm">
                O grupo "UI/UX Designers" agora está disponível.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}