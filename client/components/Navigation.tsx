import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Home,
  Users,
  Calendar,
  Search,
  LogOut,
  Bell,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function Navigation() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const savedProfile = JSON.parse(
    localStorage.getItem("userProfile") || "null",
  );

  const profileData = savedProfile || user;

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-200 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">
                UniConnect
              </h1>

              <p className="text-xs text-sidebar-accent-foreground">
                Sua comunidade acadêmica
              </p>
            </div>
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 px-4 py-8 space-y-2">
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/")
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Início</span>
          </Link>

          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/dashboard")
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/events"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/events")
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Eventos</span>
          </Link>

          <Link
            to="/groups"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/groups")
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Grupos</span>
          </Link>

          <Link
            to="/search"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/search")
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Search className="w-5 h-5" />
            <span>Buscar</span>
          </Link>
        </div>

        {/* User Info */}
        {profileData && (
          <Link to="/profile">
            <div className="px-4 py-4 border-t border-sidebar-border mb-4 hover:bg-sidebar-accent rounded-lg transition-colors cursor-pointer">
              <p className="font-semibold text-sidebar-foreground text-sm">
                {profileData.name}
              </p>

              <p className="text-xs text-sidebar-accent-foreground">
                {profileData.course}
              </p>

              <p className="text-xs text-sidebar-accent-foreground">
                {profileData.semester}º semestre
              </p>
            </div>
          </Link>
        )}

        {/* Bottom Actions */}
        <div className="px-4 py-4 border-t border-sidebar-border space-y-2">
          <Link to="/profile">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <User className="w-5 h-5" />
              <span>Meu Perfil</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Bell className="w-5 h-5" />
            <span>Notificações</span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
