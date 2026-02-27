import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Produkty", hash: "#products" },
    { label: "O nas", hash: "#about" },
    { label: "Branże", hash: "#industries" },
    { label: "Kontakt", hash: "#contact" },
  ];

  const handleNavClick = (hash: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const NavAnchor = ({ item, className }: { item: typeof navItems[0]; className?: string }) => (
    <button onClick={() => handleNavClick(item.hash)} className={className}>
      {item.label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-end gap-6 py-2 px-4 text-sm">
          <a href="tel:+48512825215" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Phone className="h-3.5 w-3.5" /> +48 512-825-215
          </a>
          <a href="mailto:info@klejeme.pl" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Mail className="h-3.5 w-3.5" /> info@klejeme.pl
          </a>
        </div>
      </div>
      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <button onClick={() => isHome ? undefined : navigate("/")} className="flex items-center">
            <img
              src="/src/assets/Klejber_logo.png"
              alt="Klejber"
              className="max-h-14 w-auto"
            />
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavAnchor
                key={item.label}
                item={item}
                className="text-muted-foreground font-medium hover:text-foreground transition-colors cursor-pointer"
              />
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="gradient-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Zapytaj o ofertę
            </button>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <NavAnchor
                key={item.label}
                item={item}
                className="block text-muted-foreground font-medium hover:text-foreground cursor-pointer"
              />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
