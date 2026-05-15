import {
  BookOpen,
  Home,
  Users,
  Calendar,
  Search,
  LogOut,
  Bell,
  User,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

export function Navigation() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const savedProfile = JSON.parse(
    localStorage.getItem("userProfile") || "null",
  );

  const profileData = savedProfile || user;

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItemClass = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      isActive(path)
        ? "bg-primary-500 text-white shadow-lg"
        : "text-sidebar-foreground hover:bg-primary-500/15 hover:text-primary-500 hover:translate-x-1"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-200 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
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
          <Link to="/" className={navItemClass("/")}>
            <Home className="w-5 h-5" />
            <span>Início</span>
          </Link>

          <Link to="/dashboard" className={navItemClass("/dashboard")}>
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link to="/events" className={navItemClass("/events")}>
            <Calendar className="w-5 h-5" />
            <span>Eventos</span>
          </Link>

          <Link to="/groups" className={navItemClass("/groups")}>
            <Users className="w-5 h-5" />
            <span>Grupos</span>
          </Link>

          <Link to="/search" className={navItemClass("/search")}>
            <Search className="w-5 h-5" />
            <span>Buscar</span>
          </Link>
        </div>

        {/* User Info */}
        {profileData && (
          <Link to="/profile">
            <div className="mx-4 mb-4 p-4 border border-sidebar-border rounded-xl hover:bg-primary-500/10 hover:border-primary-300 transition-all duration-300 cursor-pointer hover:shadow-md">
              <p className="font-semibold text-sidebar-foreground text-sm">
                {profileData.name}
              </p>

              <p className="text-xs text-sidebar-accent-foreground mt-1">
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
              className="w-full justify-start gap-3 rounded-xl text-sidebar-foreground hover:bg-primary-500/15 hover:text-primary-500 hover:translate-x-1 transition-all duration-300"
            >
              <User className="w-5 h-5" />
              <span>Meu Perfil</span>
            </Button>
          </Link>

          <Link to="/notifications">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl text-sidebar-foreground hover:bg-primary-500/15 hover:text-primary-500 hover:translate-x-1 transition-all duration-300"
            >
              <Bell className="w-5 h-5" />
              <span>Notificações</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="w-full justify-start gap-3 rounded-xl text-sidebar-foreground hover:bg-primary-500/15 hover:text-primary-500 hover:translate-x-1 transition-all duration-300"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-5 h-5" />
                <span>Tema Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                <span>Tema Escuro</span>
              </>
            )}
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 rounded-xl text-sidebar-foreground hover:bg-red-500/15 hover:text-red-500 hover:translate-x-1 transition-all duration-300"
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
