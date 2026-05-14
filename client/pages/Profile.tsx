import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { Edit, Save, X, BookOpen, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
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
      };

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState(initialProfile);

  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    if (
      newInterest.trim() &&
      !formData.interests.includes(newInterest)
    ) {
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
      interests: formData.interests.filter(
        (i) => i !== interest
      ),
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "userProfile",
      JSON.stringify(formData)
    );

    alert("Alterações salvas com sucesso!");

    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`}
                alt={formData.name}
                className="w-24 h-24 rounded-full border-4 border-primary-500"
              />

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {formData.name}
                </h1>

                <p className="text-muted-foreground mb-4">
                  {formData.email}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{formData.course}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formData.semester}º semestre
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setIsEditing(!isEditing)}
              className={
                isEditing
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-primary-500 hover:bg-primary-600"
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

        {/* Edit Form */}
        {isEditing && (
          <Card className="p-6 mb-8 bg-primary-50 border-primary-200">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Editar Perfil
            </h3>

            <div className="space-y-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        semester: parseInt(
                          e.target.value
                        ),
                      })
                    }
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <Save className="mr-2 w-4 h-4" />
                Salvar Alterações
              </Button>
            </div>
          </Card>
        )}

        {/* Interests Section */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Interesses Acadêmicos e Culturais
          </h3>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <Input
                placeholder="Adicione seus interesses..."
                value={newInterest}
                onChange={(e) =>
                  setNewInterest(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleAddInterest()
                }
              />

              <Button
                onClick={handleAddInterest}
                className="bg-primary-500 hover:bg-primary-600"
              >
                Adicionar
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.interests.map((interest) => (
                <Badge
                  key={interest}
                  className="bg-primary-100 text-primary-700 border-primary-200 cursor-pointer hover:bg-primary-200 flex items-center gap-2"
                  onClick={() =>
                    handleRemoveInterest(interest)
                  }
                >
                  {interest}

                  <X className="w-3 h-3" />
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              12
            </div>

            <p className="text-sm text-muted-foreground">
              Eventos Participando
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-accent-200 mb-2">
              8
            </div>

            <p className="text-sm text-muted-foreground">
              Grupos Ingressados
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              47
            </div>

            <p className="text-sm text-muted-foreground">
              Interações no Mural
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}