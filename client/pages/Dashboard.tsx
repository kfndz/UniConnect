import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Plus, Heart, MapPin, Clock, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const featuredEvents = [
    {
      id: 1,
      title: "Festival de Artes Cênicas 2024",
      description: "Uma noite mágica com apresentações de teatro, dança e performances artísticas.",
      date: "15 de Junho",
      time: "19:00",
      location: "Teatro Universitário",
      category: "Teatro",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      participants: 245,
      joinedByUser: false,
    },
    {
      id: 2,
      title: "Mostra de Fotografias Contemporânea",
      description: "Exposição com trabalhos de fotógrafos universitários e convidados especiais.",
      date: "20 de Junho",
      time: "14:00",
      location: "Galeria de Arte Central",
      category: "Exposição",
      image: "https://images.unsplash.com/photo-1532909114669-2b92b7cb9def?w=600&h=400&fit=crop",
      participants: 128,
      joinedByUser: true,
    },
    {
      id: 3,
      title: "Show da Banda Universitária",
      description: "Apresentação ao vivo da banda oficial da universidade com convidados.",
      date: "22 de Junho",
      time: "20:00",
      location: "Auditório Principal",
      category: "Música",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
      participants: 512,
      joinedByUser: false,
    },
  ];

  const popularGroups = [
    {
      id: 1,
      name: "Clube de Fotografia",
      category: "Arte",
      members: 347,
      image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=300&h=300&fit=crop",
      joined: false,
    },
    {
      id: 2,
      name: "Banda Universitária",
      category: "Música",
      members: 89,
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
      joined: true,
    },
    {
      id: 3,
      name: "Teatro Experimental",
      category: "Artes Cênicas",
      members: 156,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
      joined: false,
    },
    {
      id: 4,
      name: "Clube de Programação",
      category: "Tecnologia",
      members: 523,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop",
      joined: true,
    },
  ];

  const communityPosts = [
    {
      id: 1,
      author: "João Silva",
      role: "Estudante de Artes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content: "Alguém quer participar do festival de artes? Estou formando um grupo para ir junto!",
      date: "Há 2 horas",
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      author: "Maria Santos",
      role: "Organizadora de Eventos",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content: "🎉 Inscrições abertas para o workshop de inovação! Vagas limitadas - inscrevam-se já: bit.ly/workshop2024",
      date: "Há 5 horas",
      likes: 234,
      comments: 67,
    },
    {
      id: 3,
      author: "Clube de Literatura",
      role: "Grupo Cultural",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "Nossa próxima leitura será 'Memórias Póstumas de Brás Cubas'. Todos podem participar da discussão no próximo encontro!",
      date: "Há 8 horas",
      likes: 156,
      comments: 34,
    },
  ];

  return (
    <Layout>
      {/* Welcome Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Bem-vindo de volta! 👋</h1>
            <p className="text-muted-foreground text-lg mt-2">Confira os eventos em destaque e grupos populares</p>
          </div>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 w-fit">
            <Plus className="mr-2 w-5 h-5" /> Criar Evento
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Stats */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-6 border border-primary-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-500 text-white flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Eventos este mês</p>
              <p className="text-3xl font-bold text-foreground">12</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-xl p-6 border border-accent-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent-200 text-accent-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Grupos que participa</p>
              <p className="text-3xl font-bold text-foreground">8</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-100/30 to-primary-50 rounded-xl p-6 border border-primary-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-400 text-white flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Interações</p>
              <p className="text-3xl font-bold text-foreground">47</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Eventos em Destaque</h2>
          <Link to="/events">
            <Button variant="outline">Ver Todos</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-3 right-3 bg-primary-500">{event.category}</Badge>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.date} às {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.participants} participantes</span>
                  </div>
                </div>

                <Button 
                  className={`w-full ${event.joinedByUser ? 'bg-gray-200 text-foreground' : 'bg-primary-500 hover:bg-primary-600'}`}
                >
                  {event.joinedByUser ? 'Inscrito ✓' : 'Participar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Groups */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Grupos Populares</h2>
          <Link to="/groups">
            <Button variant="outline">Explorar Grupos</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGroups.map((group) => (
            <Card key={group.id} className="text-center hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <img src={group.image} alt={group.name} className="w-full h-32 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-1">{group.name}</h3>
                <Badge variant="outline" className="mx-auto mb-4">{group.category}</Badge>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{group.members} membros</p>
                <Button 
                  variant={group.joined ? "outline" : "default"}
                  className={group.joined ? '' : 'bg-primary-500 hover:bg-primary-600'}
                >
                  {group.joined ? 'Membro ✓' : 'Entrar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Wall */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Mural da Comunidade</h2>
          <Button className="bg-primary-500 hover:bg-primary-600">
            <Plus className="mr-2 w-5 h-5" /> Nova Postagem
          </Button>
        </div>
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <Card key={post.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4 mb-4">
                <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{post.author}</h4>
                  <p className="text-sm text-muted-foreground">{post.role} • {post.date}</p>
                </div>
              </div>
              <p className="text-foreground mb-4">{post.content}</p>
              <div className="flex gap-6 text-muted-foreground text-sm">
                <button className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <Heart className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <Share2 className="w-4 h-4" /> Compartilhar
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
