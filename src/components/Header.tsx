import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-end gap-6 py-2 px-4 text-sm">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Phone className="h-3.5 w-3.5" /> +1 (234) 567-890
          </a>
          <a href="mailto:info@adhesivepro.com" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Mail className="h-3.5 w-3.5" /> info@adhesivepro.com
          </a>
        </div>
      </div>
      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Adhesive<span className="text-secondary">Pro</span>
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
