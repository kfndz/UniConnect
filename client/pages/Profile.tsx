import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

import { Edit, Save, X, BookOpen, Calendar, Camera } from "lucide-react";

import { useState } from "react";

export default function Profile() {
  const { user } = useAuth();

  const savedProfile = localStorage.getItem("userProfile");

  const initialProfile = savedProfile
    ? JSON.parse(savedProfile)
    : {
        name: user?.name || "",
        email: user?.email || "",
        course: user?.course || "",
        semester: user?.semester || 1,
        interests: user?.interests || [],
        avatar: "",
      };

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState(initialProfile);

  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest)) {
      setFormData({
        ...formData,
        interests: [...formData.interests, newInterest],
      });

      setNewInterest("");
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((i: string) => i !== interest),
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Selecione uma imagem válida.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        avatar: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(formData));

    alert("Alterações salvas com sucesso!");

    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* HEADER */}
        <Card className="p-8 border border-border bg-card shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              {/* Avatar */}
              <div className="relative w-fit">
                <img
                  src={
                    formData.avatar ||
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
                  }
                  alt={formData.name}
                  className="w-28 h-28 rounded-full border-4 border-primary object-cover shadow-lg"
                />

                {isEditing && (
                  <>
                    <label
                      htmlFor="avatar-upload"
                      className="absolute bottom-0 right-0 p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors cursor-pointer shadow-md"
                    >
                      <Camera className="w-4 h-4 text-white" />
                    </label>

                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </>
                )}
              </div>

              {/* Infos */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {formData.name}
                </h1>

                <p className="text-muted-foreground mb-5">{formData.email}</p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>{formData.course}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formData.semester}º semestre</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão */}
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className={
                isEditing
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-primary hover:bg-primary/90 text-white"
              }
            >
              {isEditing ? (
                <>
                  <X className="mr-2 w-4 h-4" />
                  Cancelar
                </>
              ) : (
                <>
                  <Edit className="mr-2 w-4 h-4" />
                  Editar
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* FORM */}
        {isEditing && (
          <Card className="p-6 border border-border bg-card shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Editar Perfil
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>

                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>

                <Input
                  type="email"
                  value={formData.email}
                  disabled
                  className="bg-muted"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Curso
                  </label>

                  <Input
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        course: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Semestre
                  </label>

                  <select
                    value={formData.semester}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        semester: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                      <option key={s} value={s}>
                        {s}º semestre
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                onClick={handleSave}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <Save className="mr-2 w-4 h-4" />
                Salvar Alterações
              </Button>
            </div>
          </Card>
        )}

        {/* INTERESSES */}
        <Card className="p-6 border border-border bg-card shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-5">
            Interesses Acadêmicos e Culturais
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <Input
              placeholder="Adicione seus interesses..."
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddInterest()}
            />

            <Button
              onClick={handleAddInterest}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Adicionar
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {formData.interests.map((interest: string) => (
              <Badge
                key={interest}
                onClick={() => handleRemoveInterest(interest)}
                className="cursor-pointer px-3 py-1.5 bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25 transition-colors flex items-center gap-2"
              >
                {interest}

                <X className="w-3 h-3" />
              </Badge>
            ))}
          </div>
        </Card>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Card className="p-6 text-center border border-border bg-card">
            <div className="text-3xl font-bold text-primary mb-2">12</div>

            <p className="text-sm text-muted-foreground">
              Eventos Participando
            </p>
          </Card>

          <Card className="p-6 text-center border border-border bg-card">
            <div className="text-3xl font-bold text-accent mb-2">8</div>

            <p className="text-sm text-muted-foreground">Grupos Ingressados</p>
          </Card>

          <Card className="p-6 text-center border border-border bg-card">
            <div className="text-3xl font-bold text-primary mb-2">47</div>

            <p className="text-sm text-muted-foreground">Interações no Mural</p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
