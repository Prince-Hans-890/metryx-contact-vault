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
    <header className="fixed top-0 md:top-6 left-0 right-0 md:left-1/2 md:-translate-x-1/2 z-50 md:w-[90%] md:max-w-5xl md:rounded-full bg-background/80 backdrop-blur-md border-b md:border border-border/50 shadow-sm dark:bg-slate-950/80 transition-all duration-300">
      <nav className="px-4 sm:px-6">
        {/* Compact height: h-16 on mobile, h-14 on desktop */}
        <div className="flex items-center justify-between h-16 md:h-14">
          
          {/* Logo Section - Scaled for mobile */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Metryx<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  isActive(item.path)
                    ? "text-foreground bg-secondary/80"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              onClick={onGetInTouch}
              size="sm"
              className="rounded-full font-medium shadow-none hover:shadow-md transition-shadow"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Actions - Minimized padding and icon sizes */}
          <div className="md:hidden flex items-center gap-1">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="h-9 w-9 text-muted-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:bg-secondary/60 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in bg-background/95 backdrop-blur-xl absolute left-0 right-0 top-full shadow-lg">
            <div className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                    isActive(item.path)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => {
                    onGetInTouch();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full rounded-xl"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Reusable NavLink Component
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