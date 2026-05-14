import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";
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

const CATEGORY_IMAGES: Record<string, string> = {
  "Ciência da Computação":
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  "Engenharia Civil":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  "Engenharia Elétrica":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  Medicina:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  Enfermagem:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  Psicologia:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  Direito:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
  Pedagogia:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  "Publicidade e Propaganda":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  Agronomia:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
  "Design Gráfico":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  "Artes Visuais":
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
  Música:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
  Teatro:
    "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200&auto=format&fit=crop",
  Dança:
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
};

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

    const {
      title,
      description,
      date,
      time,
      location,
      category,
    } = formData;

    if (
      !title ||
      !description ||
      !date ||
      !time ||
      !location ||
      !category
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      description,
      date,
      time,
      location,
      category,
      participants: 0,
      image:
        CATEGORY_IMAGES[category] ||
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    };

    const existingEvents = JSON.parse(
      localStorage.getItem("customEvents") || "[]",
    );

    localStorage.setItem(
      "customEvents",
      JSON.stringify([newEvent, ...existingEvents]),
    );

    navigate("/events");
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/events")}
          className="mb-6 hover:bg-primary-50"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar aos Eventos
        </Button>

        <Card className="p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Criar Novo Evento
          </h1>

          <p className="text-muted-foreground mb-8">
            Compartilhe um evento cultural com a comunidade universitária
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Título do Evento *
              </label>

              <Input
                placeholder="Ex: Festival de Artes 2026"
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
                placeholder="Descreva o evento..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Data *
                </label>

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
                <label className="block text-sm font-medium mb-2">
                  Hora *
                </label>

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
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary-500"
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

            <div className="flex flex-col md:flex-row gap-4 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white"
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