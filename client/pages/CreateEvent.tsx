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

    if (!formData.title || !formData.description || !formData.date || !formData.time || !formData.location || !formData.category) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    // Aqui você adicionaria a lógica para salvar o evento
    console.log("Novo evento criado:", formData);
    navigate("/events");
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate("/events")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar aos Eventos
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Criar Novo Evento</h1>
          <p className="text-muted-foreground mb-8">Compartilhe um evento cultural com a comunidade universitária</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Título do Evento *</label>
              <Input
                placeholder="Ex: Festival de Artes 2024"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Descrição *</label>
              <textarea
                placeholder="Descreva o evento em detalhes..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Data *</label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Hora *</label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Localização *</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
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
                <label className="block text-sm font-medium text-foreground mb-2">Categoria *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
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

            <div className="flex gap-4">
              <Button 
                type="submit" 
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-lg"
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
