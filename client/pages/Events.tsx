import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Users, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Festival de Artes Cênicas 2024",
      date: "15 de Junho",
      time: "19:00",
      location: "Teatro Universitário",
      category: "Teatro",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      participants: 245,
      joined: false,
    },
    {
      id: 2,
      title: "Workshop de Inovação Digital",
      date: "18 de Junho",
      time: "14:00",
      location: "Laboratório de Tecnologia",
      category: "Oficina",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      participants: 89,
      joined: true,
    },
    {
      id: 3,
      title: "Mostra de Fotografias Contemporânea",
      date: "20 de Junho",
      time: "14:00",
      location: "Galeria de Arte Central",
      category: "Exposição",
      image: "https://images.unsplash.com/photo-1532909114669-2b92b7cb9def?w=600&h=400&fit=crop",
      participants: 128,
      joined: true,
    },
    {
      id: 4,
      title: "Show da Banda Universitária",
      date: "22 de Junho",
      time: "20:00",
      location: "Auditório Principal",
      category: "Música",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
      participants: 512,
      joined: false,
    },
    {
      id: 5,
      title: "Palestra sobre Sustentabilidade",
      date: "25 de Junho",
      time: "16:00",
      location: "Auditório 2",
      category: "Palestra",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      participants: 167,
      joined: false,
    },
    {
      id: 6,
      title: "Festival de Filmes Universitários",
      date: "28 de Junho",
      time: "18:00",
      location: "Sala de Cinema",
      category: "Cinema",
      image: "https://images.unsplash.com/photo-1485579149c0-123123123123?w=600&h=400&fit=crop",
      participants: 234,
      joined: false,
    },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Eventos Culturais</h1>
            <p className="text-muted-foreground text-lg mt-2">Descubra atividades incríveis acontecendo na universidade</p>
          </div>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600 w-fit">
            <Plus className="mr-2 w-5 h-5" /> Criar Evento
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <div className="relative">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <Badge className="absolute top-3 right-3 bg-primary-500">{event.category}</Badge>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-foreground mb-4">{event.title}</h3>
              
              <div className="space-y-2 mb-6 text-sm text-muted-foreground flex-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{event.date} às {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span>{event.participants} participantes</span>
                </div>
              </div>

              <Button 
                className={`w-full ${event.joined ? 'bg-gray-200 text-foreground hover:bg-gray-300' : 'bg-primary-500 hover:bg-primary-600'}`}
              >
                {event.joined ? 'Inscrito ✓' : 'Participar'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
