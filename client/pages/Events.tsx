import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Users, Clock, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/events-data";
import { useParticipations } from "@/hooks/useParticipations";
import { Link } from "react-router-dom";

export default function Events() {
  const { isParticipating, toggleParticipation } = useParticipations("events-page");
  const eventsList = events;

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Eventos Culturais</h1>
            <p className="text-muted-foreground text-lg mt-2">Descubra atividades incríveis acontecendo na universidade</p>
          </div>
          <Link to="/create-event">
            <Button size="lg" className="bg-primary-500 hover:bg-primary-600 w-fit">
              <Plus className="mr-2 w-5 h-5" /> Criar Evento
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsList.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-200 h-48 flex items-center justify-center">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <Badge className="absolute top-3 right-3 bg-primary-500 z-10">{event.category}</Badge>
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
                onClick={() => toggleParticipation(`event-${event.id}`)}
                className={`w-full transition-all ${
                  isParticipating(`event-${event.id}`)
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-primary-500 hover:bg-primary-600 text-white'
                }`}
              >
                {isParticipating(`event-${event.id}`) ? (
                  <>
                    <Check className="mr-2 w-4 h-4" /> Inscrito
                  </>
                ) : (
                  'Participar'
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
