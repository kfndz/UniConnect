import { Layout } from "@/components/Layout";
import { Users, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { groups } from "@/lib/groups-data";
import { useParticipations } from "@/hooks/useParticipations";

export default function Groups() {
  const { isParticipating, toggleParticipation } =
    useParticipations("groups-page");
  const groupsList = groups;

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Grupos de Interesse
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
              Encontre seu grupo e conecte com pessoas com interesses similares
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary-500 hover:bg-primary-600 w-fit"
          >
            <Plus className="mr-2 w-5 h-5" /> Criar Grupo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupsList.map((group) => (
          <Card
            key={group.id}
            className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-gray-200 h-48 flex items-center justify-center">
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <Badge className="w-fit mb-3 bg-primary-100 text-primary-700 border-primary-200">
                {group.category}
              </Badge>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {group.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {group.description}
              </p>

              <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>
                  {group.members +
                    (isParticipating(`group-${group.id}`) ? 1 : 0)}{" "}
                  membros
                </span>
              </div>

              <Button
                onClick={() => toggleParticipation(`group-${group.id}`)}
                className={`w-full transition-all ${
                  isParticipating(`group-${group.id}`)
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-primary-500 hover:bg-primary-600 text-white"
                }`}
              >
                {isParticipating(`group-${group.id}`) ? (
                  <>
                    <Check className="mr-2 w-4 h-4" /> Membro
                  </>
                ) : (
                  "Entrar no Grupo"
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
