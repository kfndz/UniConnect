import { Layout } from "@/components/Layout";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { AlertCircle, ArrowLeft, CalendarPlus } from "lucide-react";

import { LOCATIONS } from "@/lib/events-data";

const CATEGORIES = [
  "Ciência da Computação",
  "Engenharia Civil",
  "Engenharia Elétrica",
  "Medicina",
  "Enfermagem",
  "Psicologia",
  "Direito",
  "Pedagogia",
  "Publicidade e Propaganda",
  "Agronomia",
  "Design Gráfico",
  "Artes Visuais",
  "Música",
  "Teatro",
  "Dança",
];

export default function CreateEvent() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const { title, description, date, time, location, category } = formData;

    if (!title || !description || !date || !time || !location || !category) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const existingEvents = JSON.parse(
      localStorage.getItem("customEvents") || "[]",
    );

    const newEvent = {
      id: Date.now(),
      ...formData,
      participants: 0,
      image: "/img/default-event.jpg",
    };

    localStorage.setItem(
      "customEvents",
      JSON.stringify([newEvent, ...existingEvents]),
    );

    navigate("/events");
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/events")}
          className="mb-6 hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar aos Eventos
        </Button>

        <Card className="p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <CalendarPlus className="w-6 h-6 text-primary-500" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Criar Novo Evento
              </h1>

              <p className="text-muted-foreground">
                Compartilhe um evento com a comunidade universitária
              </p>
            </div>
          </div>

          {error && (
            <div className="mt-6 mb-6 p-4 rounded-xl border border-red-200 bg-red-50 flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />

              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                Título do Evento *
              </label>

              <Input
                placeholder="Ex: Workshop de React"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Descrição *
              </label>

              <textarea
                rows={5}
                placeholder="Descreva os detalhes do evento..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Data *</label>

                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Hora *</label>

                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      time: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Localização *
                </label>

                <select
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-input rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Selecione um local</option>

                  {LOCATIONS.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Categoria *
                </label>

                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-input rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Selecione uma categoria</option>

                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-primary-500 hover:bg-primary-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Criar Evento
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/events")}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
