import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a className="flex items-center">
            <img
              src="/src/assets/Klejber_logo.png"
              alt="Klejber"
              className="max-h-14 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["Products", "About", "Industries", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground font-medium hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="gradient-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </a>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
            {["Products", "About", "Industries", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-muted-foreground font-medium hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
