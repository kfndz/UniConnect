import { Layout } from "@/components/Layout";
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Groups() {
  const groups = [
    {
      id: 1,
      name: "Clube de Fotografia",
      category: "Arte",
      description: "Grupo dedicado à fotografia, compartilhando técnicas, experiências e saídas fotográficas.",
      members: 347,
      image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop",
      joined: false,
    },
    {
      id: 2,
      name: "Banda Universitária",
      category: "Música",
      description: "Banda oficial da universidade, apresentando-se em eventos culturais e festivais.",
      members: 89,
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      joined: true,
    },
    {
      id: 3,
      name: "Teatro Experimental",
      category: "Artes Cênicas",
      description: "Grupo de teatro focado em experimentações e novas formas de expressão artística.",
      members: 156,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      joined: false,
    },
    {
      id: 4,
      name: "Clube de Programação",
      category: "Tecnologia",
      description: "Desenvolvedores se reunindo para aprender, colaborar e trabalhar em projetos juntos.",
      members: 523,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      joined: true,
    },
    {
      id: 5,
      name: "Grupo de Dança",
      category: "Dança",
      description: "Apresentações de dança clássica, contemporânea e outros estilos em eventos da universidade.",
      members: 203,
      image: "https://images.unsplash.com/photo-1508700115892-5e266fcd6bac?w=400&h=300&fit=crop",
      joined: false,
    },
    {
      id: 6,
      name: "Clube de Literatura",
      category: "Literatura",
      description: "Discussões sobre livros, autores e criação literária em um ambiente acolhedor e colaborativo.",
      members: 178,
      image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop",
      joined: false,
    },
    {
      id: 7,
      name: "Cineclube",
      category: "Cinema",
      description: "Sessões de filmes clássicos, independentes e contemporâneos com discussão posterior.",
      members: 267,
      image: "https://images.unsplash.com/photo-1489599849228-ed4dc3ee49b9?w=400&h=300&fit=crop",
      joined: true,
    },
    {
      id: 8,
      name: "Grupo de Estudos",
      category: "Acadêmico",
      description: "Reuniões para estudar em grupo, trocar materiais e preparar para provas.",
      members: 412,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      joined: false,
    },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Grupos de Interesse</h1>
            <p className="text-muted-foreground text-lg mt-2">Encontre seu grupo e conecte com pessoas com interesses similares</p>
          </div>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 w-fit">
            <Plus className="mr-2 w-5 h-5" /> Criar Grupo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <img src={group.image} alt={group.name} className="w-full h-48 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <Badge className="w-fit mb-3 bg-primary-100 text-primary-700 border-primary-200">{group.category}</Badge>
              <h3 className="text-lg font-bold text-foreground mb-2">{group.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{group.description}</p>
              
              <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{group.members} membros</span>
              </div>

              <Button 
                className={`w-full ${group.joined ? 'bg-gray-200 text-foreground hover:bg-gray-300' : 'bg-primary-500 hover:bg-primary-600'}`}
              >
                {group.joined ? 'Membro ✓' : 'Entrar no Grupo'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
