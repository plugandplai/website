import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const navLinks = [
  { path: "enterprise", labelKey: "nav.enterprise" },
  { path: "white-label", labelKey: "nav.whiteLabel" },
  { path: "developers", labelKey: "nav.developers" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  // Get current language from URL or default to 'en'
  const currentLang = lang || 'en';

  // Helper to build language-prefixed paths
  const buildPath = (path: string) => `/${currentLang}${path ? `/${path}` : ''}`;

  // Check if current path matches
  const isActive = (path: string) => {
    const fullPath = buildPath(path);
    return location.pathname === fullPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/40 animate-fade-in" style={{ animationDelay: '0ms' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={buildPath('enterprise')} className="flex items-center gap-2 group">
            <span className="text-lg font-semibold text-foreground tracking-tight group-hover:opacity-80 smooth-transition">
              plugandpl<span className="text-accent">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={buildPath(link.path)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full text-smooth bg-smooth",
                  isActive(link.path)
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 smooth-transition"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="relative w-5 h-5">
                <Sun className={cn(
                  "h-5 w-5 absolute inset-0 smooth-transition",
                  theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                )} />
                <Moon className={cn(
                  "h-5 w-5 absolute inset-0 smooth-transition",
                  theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
                )} />
              </div>
            </button>
            <Button variant="outline" size="sm" className="btn-scale" asChild>
              <a href="mailto:support@plugandpl.ai">
                {t('nav.contactSales')}
              </a>
            </Button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 smooth-transition"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="relative w-5 h-5">
                <Sun className={cn(
                  "h-5 w-5 absolute inset-0 smooth-transition",
                  theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                )} />
                <Moon className={cn(
                  "h-5 w-5 absolute inset-0 smooth-transition",
                  theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
                )} />
              </div>
            </button>
            <button
              className="p-2 text-foreground smooth-transition hover:opacity-70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            <div className="relative w-5 h-5">
              <Menu className={cn(
                "h-5 w-5 absolute inset-0 smooth-transition",
                mobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
              )} />
              <X className={cn(
                "h-5 w-5 absolute inset-0 smooth-transition",
                mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
              )} />
            </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden smooth-transition",
          mobileMenuOpen ? "max-h-96 opacity-100 py-4 border-t border-border/40" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={buildPath(link.path)}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm rounded-lg text-smooth bg-smooth",
                  mobileMenuOpen ? "animate-fade-up" : "",
                  isActive(link.path)
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
                style={mobileMenuOpen ? { animationDelay: `${index * 50}ms` } : {}}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div 
              className={cn("mt-4", mobileMenuOpen ? "animate-fade-up" : "")}
              style={mobileMenuOpen ? { animationDelay: '200ms' } : {}}
            >
              <Button variant="outline" className="w-full btn-scale" asChild>
                <a href="mailto:support@plugandpl.ai">
                  {t('nav.contactSales')}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
