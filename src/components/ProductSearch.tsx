import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { sectors } from "@/data/sectors";
import { standaloneProducts } from "@/data/productCategories";
import type { Product } from "@/data/sectors";

const seen = new Set<string>();
const allProducts: (Product & { href: string })[] = [];

for (const sector of sectors) {
  for (const p of sector.products) {
    if (!seen.has(p.code)) {
      seen.add(p.code);
      allProducts.push({ ...p, href: `/product/${p.code}` });
    }
  }
}
for (const { product: p } of standaloneProducts) {
  if (!seen.has(p.code)) {
    seen.add(p.code);
    allProducts.push({ ...p, href: `/product/${p.code}` });
  }
}

const sectorItems = sectors.map((s) => ({
  name: s.name,
  href: `/sector/${s.slug}`,
  icon: s.icon,
}));

export default function ProductSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    window.location.href = href;
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        aria-label="Szukaj produktów"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline text-sm">Szukaj</span>
        <kbd className="hidden lg:inline pointer-events-none select-none rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Szukaj produktów i branż..." />
        <CommandList>
          <CommandEmpty>Brak wyników dla podanej frazy.</CommandEmpty>

          <CommandGroup heading="Produkty">
            {allProducts.map((p) => (
              <CommandItem
                key={p.code}
                value={`${p.name} ${p.code} ${p.type}`}
                onSelect={() => navigate(p.href)}
                className="cursor-pointer gap-3"
              >
                <img
                  src="/small_logo.svg"
                  alt=""
                  className="h-6 w-6 shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium text-sm leading-tight">{p.name}</span>
                  <span className="text-xs text-muted-foreground leading-tight">{p.type}</span>
                </div>
                <span className="ml-auto font-mono text-xs text-muted-foreground shrink-0">
                  {p.code}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Branże">
            {sectorItems.map((s) => (
              <CommandItem
                key={s.href}
                value={s.name}
                onSelect={() => navigate(s.href)}
                className="cursor-pointer gap-3"
              >
                <img
                  src={s.icon}
                  alt=""
                  className="h-5 w-5 shrink-0 object-contain"
                  loading="lazy"
                />
                <span className="text-sm">{s.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
