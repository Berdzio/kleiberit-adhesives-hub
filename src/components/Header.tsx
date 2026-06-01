import klejberLogo from "@/assets/Klejber_logo.png";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import ProductSearch from "@/components/ProductSearch";
import { productCategories } from "@/data/productCategories";
import { sectors } from "@/data/sectors";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavClick = (hash: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    if (window.location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${hash}`;
    }
  };

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const navItems = [
    { label: "O nas", hash: "#about" },
    { label: "Kontakt", hash: "#contact" },
  ];

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
          <a href="/" className="flex items-center">
            <img src={klejberLogo.src} alt="Klejber" className="max-h-14 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {/* Produkty dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick("#products")}
                className="text-muted-foreground font-medium hover:text-foreground transition-colors cursor-pointer"
              >
                Produkty
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                    {productCategories.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                      >
                        {cat.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Branże dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick("#industries")}
                className="text-muted-foreground font-medium hover:text-foreground transition-colors cursor-pointer"
              >
                Branże
              </button>
              {openDropdown === "industries" && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                    {sectors.map((sector) => (
                      <a
                        key={sector.slug}
                        href={`/sector/${sector.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                      >
                        <img src={sector.icon} alt="" className="h-5 w-5 object-contain" loading="lazy" />
                        {sector.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.hash)}
                className="text-muted-foreground font-medium hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <ProductSearch />

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
          <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-1">
            <button
              onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
              className="block w-full text-left text-muted-foreground font-medium hover:text-foreground cursor-pointer py-2"
            >
              Produkty
            </button>
            {openDropdown === "products" && (
              <div className="pl-4 space-y-1">
                {productCategories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1.5"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            )}

            <button
              onClick={() => setOpenDropdown(openDropdown === "industries" ? null : "industries")}
              className="block w-full text-left text-muted-foreground font-medium hover:text-foreground cursor-pointer py-2"
            >
              Branże
            </button>
            {openDropdown === "industries" && (
              <div className="pl-4 space-y-1">
                {sectors.map((sector) => (
                  <a
                    key={sector.slug}
                    href={`/sector/${sector.slug}`}
                    onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1.5"
                  >
                    {sector.name}
                  </a>
                ))}
              </div>
            )}

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.hash)}
                className="block text-muted-foreground font-medium hover:text-foreground cursor-pointer py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
