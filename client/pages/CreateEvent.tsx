import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Tag,
} from "lucide-react";

import { LOCATIONS } from "@/lib/events-data";

const CATEGORIES = [
  "Administração",
  "Agronomia",
  "Análise e Desenvolvimento de Sistemas",
  "Arquitetura e Urbanismo",
  "Biomedicina",
  "Ciência da Computação",
  "Ciência de Dados",
  "Ciências Contábeis",
  "Design Gráfico",
  "Direito",
  "Educação Física",
  "Enfermagem",
  "Engenharia Civil",
  "Engenharia da Computação",
  "Engenharia de Produção",
  "Engenharia Elétrica",
  "Engenharia Mecânica",
  "Engenharia de Software",
  "Farmácia",
  "Fisioterapia",
  "Gastronomia",
  "História",
  "Jornalismo",
  "Marketing",
  "Matemática",
  "Medicina",
  "Medicina Veterinária",
  "Música",
  "Nutrição",
  "Odontologia",
  "Pedagogia",
  "Psicologia",
  "Publicidade e Propaganda",
  "Relações Internacionais",
  "Sistemas de Informação",
  "Terapia Ocupacional",
  "Turismo",
  "Zootecnia",
];

const CATEGORY_IMAGES: Record<string, string> = {
  Administração:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",

  Agronomia:
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",

  "Análise e Desenvolvimento de Sistemas":
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",

  "Arquitetura e Urbanismo":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",

  Biomedicina:
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",

  "Ciência da Computação":
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",

  "Ciência de Dados":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

  "Ciências Contábeis":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",

  "Design Gráfico":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

  Direito:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",

  "Educação Física":
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",

  Enfermagem:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",

  "Engenharia Civil":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",

  "Engenharia da Computação":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

  "Engenharia de Produção":
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",

  "Engenharia Elétrica":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

  "Engenharia Mecânica":
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop",

  "Engenharia de Software":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

  Farmácia:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",

  Fisioterapia:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",

  Gastronomia:
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",

  História:
    "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200&auto=format&fit=crop",

  Jornalismo:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",

  Marketing:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

  Matemática:
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",

  Medicina:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",

  "Medicina Veterinária":
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1200&auto=format&fit=crop",

  Música:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",

  Nutrição:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",

  Odontologia:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",

  Pedagogia:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

  Psicologia:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",

  "Publicidade e Propaganda":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",

  "Relações Internacionais":
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",

  "Sistemas de Informação":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

  "Terapia Ocupacional":
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",

  Turismo:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",

  Zootecnia:
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200&auto=format&fit=crop",
};

export default function CreateEvent() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (
      !title.trim() ||
      !description.trim() ||
      !date ||
      !time ||
      !location ||
      !category
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (description.length < 20) {
      setError("A descrição deve ter pelo menos 20 caracteres.");
      return;
    }

    setIsSubmitting(true);

    const profile = JSON.parse(localStorage.getItem("userProfile") || "null");

    const newEvent = {
      id: Date.now(),

      title: title.trim(),

      description: description.trim(),

      date,

      time,

      location,

      category,

      organizer: profile?.name || "Usuário",

      participants: 0,

      createdAt: new Date().toISOString(),

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
      <div className="max-w-2xl mx-auto pb-10">
        <Button
          variant="outline"
          onClick={() => navigate("/events")}
          className="mb-6 hover:bg-primary-50 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar aos Eventos
        </Button>

        <Card className="p-8 shadow-sm border-border">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Criar Novo Evento
          </h1>

          <p className="text-muted-foreground mb-8">
            Compartilhe um evento cultural com a comunidade universitária
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />

              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Título */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Título do Evento *
              </label>

              <Input
                placeholder="Ex: Festival Cultural Universitário"
                maxLength={80}
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />

              <p className="text-xs text-muted-foreground mt-1">
                {formData.title.length}/80
              </p>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Descrição *
              </label>

              <textarea
                rows={5}
                maxLength={300}
                placeholder="Descreva o evento..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />

              <div className="flex justify-between mt-1">
                <p className="text-xs text-muted-foreground">
                  Mínimo de 20 caracteres
                </p>

                <p className="text-xs text-muted-foreground">
                  {formData.description.length}/300
                </p>
              </div>
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Data *
                </label>

                <Input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
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
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
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

            {/* Local e Categoria */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
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
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
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

                  {CATEGORIES.sort().map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-4 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white transition-all"
              >
                {isSubmitting ? "Criando evento..." : "Criar Evento"}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/events")}
                className="hover:bg-muted transition-colors"
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
