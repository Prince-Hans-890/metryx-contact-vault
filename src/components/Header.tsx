import { useState, useEffect, forwardRef } from "react";
import { Link, useLocation, NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface HeaderProps {
  onGetInTouch: () => void;
}

export const Header = ({ onGetInTouch }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  // Mounted check to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-glass backdrop-blur-xl border-b border-border/50 shadow-sm dark:bg-slate-950/80 dark:border-slate-800 transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* FIX: Pointing to the file with the double extension .png.png */}
            <img 
              src="/metryx-full-logo.png.png" 
              alt="Metryx Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* Text alongside the image */}
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent dark:text-white dark:bg-none">
              Metryx
            </span>
          </Link>
          {/* ------------------- */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative",
                  isActive(item.path)
                    ? "text-primary bg-primary/10 shadow-sm dark:text-white dark:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
                )}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full dark:bg-purple-500" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="dark:text-slate-400 dark:hover:text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              onClick={onGetInTouch}
              variant="gradient"
              size="default"
              className="dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700 dark:border-0"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-secondary/60 transition-all duration-300 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-foreground dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in bg-gradient-glass backdrop-blur-xl dark:bg-slate-950/95 dark:border-slate-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-5 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300",
                    isActive(item.path)
                      ? "text-primary bg-primary/10 shadow-sm dark:bg-purple-500/10 dark:text-purple-400"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  onGetInTouch();
                  setMobileMenuOpen(false);
                }}
                variant="gradient"
                className="mt-2 dark:bg-purple-600 dark:text-white"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// --- NavLink Component (Required for your setup) ---
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };