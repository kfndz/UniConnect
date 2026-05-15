import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Users, Clock, Plus, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { events } from "@/lib/events-data";
import { useParticipations } from "@/hooks/useParticipations";

import { Link } from "react-router-dom";

export default function Events() {
  const { isParticipating, toggleParticipation, getCount } =
    useParticipations("events-page");

  const savedEvents = JSON.parse(localStorage.getItem("customEvents") || "[]");

  const eventsList = [...savedEvents, ...events];

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Eventos Culturais
            </h1>

            <p className="text-muted-foreground text-lg mt-2">
              Descubra atividades incríveis acontecendo na universidade
            </p>
          </div>

          <Link to="/create-event">
            <Button
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-fit"
            >
              <Plus className="mr-2 w-5 h-5" />
              Criar Evento
            </Button>
          </Link>
        </div>
      </div>

      {eventsList.length === 0 ? (
        <Card className="p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Nenhum evento encontrado
          </h2>

          <p className="text-muted-foreground">
            Crie o primeiro evento da comunidade.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {eventsList.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-muted h-52">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <Badge className="absolute top-3 right-3 bg-primary-500 text-white">
                  {event.category}
                </Badge>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {event.title}
                </h3>

                {event.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>
                )}

                <div className="space-y-3 text-sm text-muted-foreground flex-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />

                    <span>
                      {event.date} às {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />

                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 flex-shrink-0" />

                    <span>
                      {getCount(`event-${event.id}`, event.participants || 0)}{" "}
                      participantes
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() =>
                    toggleParticipation(
                      `event-${event.id}`,
                      event.participants || 0,
                    )
                  }
                  className={`w-full mt-6 transition-all duration-300 ${
                    isParticipating(`event-${event.id}`)
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-primary-500 hover:bg-primary-600 text-white"
                  }`}
                >
                  {isParticipating(`event-${event.id}`) ? (
                    <>
                      <Check className="mr-2 w-4 h-4" />
                      Inscrito
                    </>
                  ) : (
                    "Participar"
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
}
