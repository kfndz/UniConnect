import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Users,
  Plus,
  Heart,
  MapPin,
  Clock,
  MessageSquare,
  Share2,
  Check,
  Send,
  Pencil,
  Trash2,
  X,
  Save,
} from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/lib/events-data";
import { useParticipations } from "@/hooks/useParticipations";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { isParticipating, toggleParticipation } =
    useParticipations("dashboard-events");

  const { participations: likes, toggleParticipation: toggleLike } =
    useParticipations("dashboard-likes");

  const [newPost, setNewPost] = useState("");
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState("");

  const userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");

  const userAvatar =
    userProfile.avatar ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${
      userProfile.name || "User"
    }`;

  const defaultPosts = [
    {
      id: 1,
      author: "João Silva",
      role: "Estudante de Artes",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      content:
        "Alguém quer participar do festival de artes? Estou formando um grupo para ir junto!",
      date: "Há 2 horas",
      likeCount: 45,
      commentCount: 12,
      isUserPost: false,
    },
    {
      id: 2,
      author: "Maria Santos",
      role: "Organizadora de Eventos",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      content:
        "🎉 Inscrições abertas para o workshop de inovação! Vagas limitadas - inscrevam-se já",
      date: "Há 5 horas",
      likeCount: 234,
      commentCount: 67,
      isUserPost: false,
    },
    {
      id: 3,
      author: "Clube de Literatura",
      role: "Grupo Cultural",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      content:
        "Nossa próxima leitura será 'Memórias Póstumas de Brás Cubas'. Todos podem participar da discussão!",
      date: "Há 8 horas",
      likeCount: 156,
      commentCount: 34,
      isUserPost: false,
    },
  ];

  const [communityPosts, setCommunityPosts] = useState(() => {
    const savedPosts = localStorage.getItem("community-posts");

    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  });

  useEffect(() => {
    localStorage.setItem("community-posts", JSON.stringify(communityPosts));
  }, [communityPosts]);

  const handleNewPost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      author: userProfile.name || "Você",
      role: userProfile.course || "Estudante",
      avatar: userAvatar,
      content: newPost,
      date: "Agora",
      likeCount: 0,
      commentCount: 0,
      isUserPost: true,
    };

    setCommunityPosts([post, ...communityPosts]);
    setNewPost("");
  };

  const handleDeletePost = (id: number) => {
    setCommunityPosts((prevPosts: any[]) =>
      prevPosts.filter((post) => post.id !== id),
    );
  };

  const handleEditPost = (id: number, content: string) => {
    setEditingPostId(id);
    setEditedContent(content);
  };

  const handleSaveEdit = (id: number) => {
    if (!editedContent.trim()) return;

    setCommunityPosts((prevPosts: any[]) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              content: editedContent,
            }
          : post,
      ),
    );

    setEditingPostId(null);
    setEditedContent("");
  };

  const featuredEvents = events.slice(0, 3).map((event) => ({
    ...event,
    description: `Evento de ${event.course}. Confira detalhes completos na página de eventos.`,
  }));

  const popularGroups = [
    {
      id: 1,
      name: "Clube de Fotografia",
      category: "Arte",
      members: 347,
      image: "images/clube-fotografia.jpg",
    },
    {
      id: 2,
      name: "Banda Universitária",
      category: "Música",
      members: 89,
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Teatro Experimental",
      category: "Artes Cênicas",
      members: 156,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Clube de Programação",
      category: "Tecnologia",
      members: 523,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop&q=80",
    },
  ];

  return (
    <Layout>
      {/* Welcome Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Bem-vindo de volta! 👋
            </h1>

            <p className="text-muted-foreground text-lg mt-2">
              Confira os eventos em destaque e grupos populares
            </p>
          </div>

          <Link to="/create-event">
            <Button
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 w-fit"
            >
              <Plus className="mr-2 w-5 h-5" />
              Criar Evento
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-br from-primary-100/80 to-primary-200/40 dark:from-primary-500/15 dark:to-primary-700/10 rounded-xl p-6 border border-primary-200 dark:border-primary-500/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-500 text-white flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Eventos este mês</p>

              <p className="text-3xl font-bold text-foreground">12</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent/10 dark:to-accent/5 rounded-xl p-6 border border-accent-200 dark:border-accent/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent-200 text-accent-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Grupos que participa
              </p>

              <p className="text-3xl font-bold text-foreground">8</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-100/40 to-primary-50 dark:from-primary-500/10 dark:to-primary-700/5 rounded-xl p-6 border border-primary-200 dark:border-primary-500/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-400 text-white flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Interações</p>

              <p className="text-3xl font-bold text-foreground">47</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Eventos em Destaque
          </h2>

          <Link to="/events">
            <Button variant="outline">Ver Todos</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative overflow-hidden bg-gray-200 h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                <Badge className="absolute top-3 right-3 bg-primary-500 z-10">
                  {event.category}
                </Badge>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />

                    <span>
                      {event.date} às {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />

                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />

                    <span>
                      {event.participants +
                        (isParticipating(`event-${event.id}`) ? 1 : 0)}{" "}
                      participantes
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => toggleParticipation(`event-${event.id}`)}
                  className={`w-full ${
                    isParticipating(`event-${event.id}`)
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-primary-500 hover:bg-primary-600"
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
      </section>

      {/* Popular Groups */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Grupos Populares
          </h2>

          <Link to="/groups">
            <Button variant="outline">Explorar Grupos</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGroups.map((group) => (
            <Card
              key={group.id}
              className="text-center hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {group.name}
                </h3>

                <Badge variant="outline" className="mx-auto mb-4">
                  {group.category}
                </Badge>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {group.members +
                    (isParticipating(`popular-group-${group.id}`) ? 1 : 0)}{" "}
                  membros
                </p>

                <Button
                  onClick={() =>
                    toggleParticipation(`popular-group-${group.id}`)
                  }
                  className={`w-full ${
                    isParticipating(`popular-group-${group.id}`)
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-primary-500 hover:bg-primary-600"
                  }`}
                >
                  {isParticipating(`popular-group-${group.id}`) ? (
                    <>
                      <Check className="mr-2 w-4 h-4" />
                      Membro
                    </>
                  ) : (
                    "Entrar"
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Wall */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Mural da Comunidade
        </h2>

        {/* New Post */}
        <Card className="p-6 mb-6">
          <div className="flex gap-4">
            <img
              src={userAvatar}
              alt="Seu avatar"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1 flex gap-2">
              <Input
                placeholder="O que você gostaria de compartilhar?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNewPost();
                  }
                }}
              />

              <Button
                onClick={handleNewPost}
                disabled={!newPost.trim()}
                className="bg-primary-500 hover:bg-primary-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Posts */}
        <div className="space-y-4">
          {communityPosts.map((post: any) => (
            <Card
              key={post.id}
              className="p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-foreground">
                        {post.author}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {post.role} • {post.date}
                      </p>
                    </div>

                    {post.isUserPost && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditPost(post.id, post.content)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {editingPostId === post.id ? (
                <div className="mb-4">
                  <Input
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />

                  <div className="flex gap-2 mt-3">
                    <Button size="sm" onClick={() => handleSaveEdit(post.id)}>
                      <Save className="w-4 h-4 mr-1" />
                      Salvar
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingPostId(null);
                        setEditedContent("");
                      }}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-foreground mb-4">{post.content}</p>
              )}

              <div className="flex gap-6 text-muted-foreground text-sm border-t border-border pt-4">
                <button
                  onClick={() => toggleLike(`post-${post.id}`)}
                  className={`flex items-center gap-2 transition-colors ${
                    likes[`post-${post.id}`]
                      ? "text-red-500"
                      : "hover:text-primary-500"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likes[`post-${post.id}`] ? "fill-red-500" : ""
                    }`}
                  />

                  {post.likeCount + (likes[`post-${post.id}`] ? 1 : 0)}
                </button>

                <button className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  {post.commentCount}
                </button>

                <button className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
