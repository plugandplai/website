"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";
import { useTheme } from "next-themes";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const navLinks = [
  { path: "/", labelKey: "nav.enterprise" },
  { path: "/white-label", labelKey: "nav.whiteLabel" },
  { path: "/developers", labelKey: "nav.developers" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  // useEffect only runs on the client, so now we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Check if current path matches
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/40 animate-fade-in" style={{ animationDelay: '0ms' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-semibold text-foreground tracking-tight group-hover:opacity-80 smooth-transition">
              plugandpl<span className="text-accent">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
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
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 smooth-transition"
                aria-label="Toggle theme"
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
            )}
            {!mounted && (
              <div className="w-9 h-9" />
            )}
            <Button variant="outline" size="sm" className="btn-scale" asChild>
              <a href="mailto:support@plugandpl.ai">
                {t('nav.contactSales')}
              </a>
            </Button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 smooth-transition"
                aria-label="Toggle theme"
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
            )}
            {!mounted && (
              <div className="w-9 h-9" />
            )}
            <button
              className="p-2 text-foreground smooth-transition hover:opacity-70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
                href={link.path}
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
