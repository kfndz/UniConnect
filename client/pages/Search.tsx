import { Layout } from "@/components/Layout";
import { Search as SearchIcon, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"students" | "groups">("students");

  const students = [
    {
      id: 1,
      name: "João Silva",
      course: "Engenharia de Software",
      semester: "6º semestre",
      interests: ["Programação", "Web Development", "Games"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Maria Santos",
      course: "Design Gráfico",
      semester: "5º semestre",
      interests: ["Design", "Ilustração", "Fotografia"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      course: "Música",
      semester: "4º semestre",
      interests: ["Composição", "Produção", "Guitarra"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Ana Costa",
      course: "Administração",
      semester: "7º semestre",
      interests: ["Empreendedorismo", "Inovação", "Gestão"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Lucas Ferreira",
      course: "Engenharia de Software",
      semester: "3º semestre",
      interests: ["AI/ML", "Data Science", "Python"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Beatriz Martins",
      course: "Artes Visuais",
      semester: "6º semestre",
      interests: ["Pintura", "Escultura", "Arte Digital"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
  ];

  const groups = [
    {
      id: 1,
      name: "Clube de Fotografia",
      category: "Arte",
      members: 347,
      avatar: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Banda Universitária",
      category: "Música",
      members: 89,
      avatar: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Teatro Experimental",
      category: "Artes Cênicas",
      members: 156,
      avatar: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Clube de Programação",
      category: "Tecnologia",
      members: 523,
      avatar: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop",
    },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-6">Buscar</h1>
        
        {/* Search Tabs */}
        <div className="flex gap-4 mb-6">
          <Button 
            onClick={() => setSearchType("students")}
            className={searchType === "students" ? "bg-primary-500 hover:bg-primary-600" : ""}
            variant={searchType === "students" ? "default" : "outline"}
          >
            <Users className="mr-2 w-4 h-4" /> Estudantes
          </Button>
          <Button 
            onClick={() => setSearchType("groups")}
            className={searchType === "groups" ? "bg-primary-500 hover:bg-primary-600" : ""}
            variant={searchType === "groups" ? "default" : "outline"}
          >
            <BookOpen className="mr-2 w-4 h-4" /> Grupos
          </Button>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder={searchType === "students" ? "Buscar estudantes..." : "Buscar grupos..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      {/* Students Results */}
      {searchType === "students" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <Card key={student.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-foreground text-center mb-1">{student.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-1">{student.course}</p>
                <p className="text-xs text-muted-foreground text-center mb-4">{student.semester}</p>
                
                <div className="mb-6 flex-1">
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">Interesses:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {student.interests.map((interest, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary-500 hover:bg-primary-600">
                  Conectar
                </Button>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">Nenhum estudante encontrado</p>
            </div>
          )}
        </div>
      )}

      {/* Groups Results */}
      {searchType === "groups" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <img src={group.avatar} alt={group.name} className="w-full h-32 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <Badge className="w-fit mb-3 bg-primary-100 text-primary-700 border-primary-200">{group.category}</Badge>
                  <h3 className="text-lg font-bold text-foreground mb-2">{group.name}</h3>
                  <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground flex-1">
                    <Users className="w-4 h-4" />
                    <span>{group.members} membros</span>
                  </div>
                  <Button className="w-full bg-primary-500 hover:bg-primary-600">
                    Entrar no Grupo
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">Nenhum grupo encontrado</p>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}
