import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "/poland-voivodeships.geojson";

interface Distributor {
  name: string;
  fullName: string;
  address: string;
  phones: string[];
  email: string;
  regions: string[];
  highlight: boolean;
  color: string;
  markerCoords: [number, number];
}

const distributors: Distributor[] = [
  {
    name: "KLEJBER Kleje Przemysłowe S.C.",
    fullName: "",
    address: "ul. Bukowiecka 92/155, 03-893 Warszawa",
    phones: ["+48 512 825 215"],
    email: "info@klejeme.pl",
    regions: ["mazowieckie", "podlaskie", "kujawsko-pomorskie"],
    highlight: true,
    color: "#e07b1a",
    markerCoords: [21.01, 52.23],
  },
  {
    name: "KLEJ-DREW",
    fullName: "Mariusz Królak",
    address: "ul. Domańskiego 3, 77-430 Krajenka",
    phones: ["+48 67 263 86 32", "+48 604 504 962"],
    email: "info@klejdrew.pl",
    regions: ["zachodniopomorskie"],
    highlight: false,
    color: "#2e7d32",
    markerCoords: [17.0, 53.3],
  },
  {
    name: "F.P.H. WEKTOR",
    fullName: "",
    address: "ul. Budowlanych 2D, 84-200 Wejherowo",
    phones: ["+48 58 677 10 77", "+48 501 397 873"],
    email: "biuro@fphwektor.com.pl",
    regions: ["pomorskie", "warmińsko-mazurskie"],
    highlight: false,
    color: "#1565c0",
    markerCoords: [18.23, 54.6],
  },
  {
    name: "KLEJSTOL",
    fullName: "Dariusz Chojnacki",
    address: "ul. Niedźwiady 2, 62-800 Kalisz",
    phones: ["+48 62 760 32 46", "+48 605 310 785"],
    email: "info@klejstol.pl",
    regions: ["wielkopolskie", "łódzkie"],
    highlight: false,
    color: "#6a1fb5",
    markerCoords: [18.08, 51.76],
  },
  {
    name: "KLEJDOM Sp. Jawna",
    fullName: "Leszek Kwiatkowski",
    address: "ul. Starojaworska 29B, 59-400 Jawor",
    phones: ["+48 76 870 22 19", "+48 602 496 208"],
    email: "leszek.klejdom@interia.pl",
    regions: ["dolnośląskie", "lubuskie"],
    highlight: false,
    color: "#00838f",
    markerCoords: [16.2, 51.05],
  },
  {
    name: "KLEJMEB-STOLMAT S.C.",
    fullName: "Radosław Kowal, Magdalena Kałużna",
    address: "ul. Wspólna 9, 45-831 Opole",
    phones: ["+48 77 474 28 97", "+48 601 966 101"],
    email: "klejmeb@op.pl",
    regions: ["opolskie", "śląskie"],
    highlight: false,
    color: "#c62828",
    markerCoords: [17.92, 50.67],
  },
  {
    name: "KLEJTECH",
    fullName: "Dariusz Stanaszek",
    address: "Świnna Poręba 124, 34-106 Mucharz k. Wadowic",
    phones: ["+48 33 876 12 28", "+48 600 417 523"],
    email: "info@klejtech.pl",
    regions: ["małopolskie", "podkarpackie"],
    highlight: false,
    color: "#283593",
    markerCoords: [19.55, 49.85],
  },
  {
    name: "KLEJBER",
    fullName: "Wojciech Bernaszuk",
    address: "ul. Gardzienicka 32, 21-050 Piaski k. Lublina",
    phones: ["+48 81 582 28 64", "+48 501 049 598"],
    email: "klejber@provider.pl",
    regions: ["lubelskie", "świętokrzyskie"],
    highlight: false,
    color: "#f57c00",
    markerCoords: [22.85, 51.15],
  },
];

const regionToDistributor: Record<string, Distributor> = {};
distributors.forEach((d) => {
  d.regions.forEach((r) => {
    regionToDistributor[r] = d;
  });
});

const PolandDistributorMap = () => {
  const [tooltip, setTooltip] = useState<{
    distributor: Distributor;
    x: number;
    y: number;
  } | null>(null);
  const [activeDistributor, setActiveDistributor] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="relative w-full max-w-3xl mx-auto select-none">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [19.4, 52.1], scale: 3400 }}
          width={800}
          height={700}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const nazwa = geo.properties.nazwa as string;
                const dist = regionToDistributor[nazwa];
                const isActive = activeDistributor === null || activeDistributor === dist?.name;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={dist ? dist.color : "#d1d5db"}
                    fillOpacity={isActive ? 1 : 0.25}
                    stroke="#fff"
                    strokeWidth={1.5}
                    style={{
                      default: { outline: "none", cursor: "pointer", transition: "fill-opacity 0.2s" },
                      hover: { outline: "none", fillOpacity: 1 },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={(e) => {
                      if (dist) {
                        setTooltip({ distributor: dist, x: e.clientX, y: e.clientY });
                        setActiveDistributor(dist.name);
                      }
                    }}
                    onMouseMove={(e) => {
                      if (dist) setTooltip((t) => t ? { ...t, x: e.clientX, y: e.clientY } : t);
                    }}
                    onMouseLeave={() => {
                      setTooltip(null);
                      setActiveDistributor(null);
                    }}
                  />
                );
              })
            }
          </Geographies>

          {distributors.map((d) => (
            <Marker key={d.name} coordinates={d.markerCoords}>
              <circle
                r={6}
                fill={d.highlight ? "#fff" : "#fff"}
                stroke={d.color}
                strokeWidth={d.highlight ? 3 : 2}
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  setTooltip({ distributor: d, x: e.clientX, y: e.clientY });
                  setActiveDistributor(d.name);
                }}
                onMouseLeave={() => {
                  setTooltip(null);
                  setActiveDistributor(null);
                }}
              />
              {d.highlight && (
                <circle r={3} fill={d.color} style={{ pointerEvents: "none" }} />
              )}
            </Marker>
          ))}
        </ComposableMap>

        {tooltip && (
          <div
            className="fixed z-50 pointer-events-none bg-card border border-border rounded-lg shadow-lg p-3 text-sm max-w-xs"
            style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}
          >
            <p className="font-heading font-bold text-foreground leading-tight mb-1">
              {tooltip.distributor.name}
            </p>
            {tooltip.distributor.fullName && (
              <p className="text-muted-foreground text-xs mb-1">{tooltip.distributor.fullName}</p>
            )}
            <p className="text-muted-foreground text-xs">{tooltip.distributor.address}</p>
            <div className="mt-1.5 flex flex-col gap-0.5">
              {tooltip.distributor.phones.map((p) => (
                <p key={p} className="text-xs text-foreground">{p}</p>
              ))}
              <p className="text-xs text-foreground">{tooltip.distributor.email}</p>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 px-4">
        {distributors.map((d) => (
          <button
            key={d.name}
            className="flex items-center gap-2 text-sm transition-opacity"
            style={{ opacity: activeDistributor && activeDistributor !== d.name ? 0.35 : 1 }}
            onMouseEnter={() => setActiveDistributor(d.name)}
            onMouseLeave={() => setActiveDistributor(null)}
          >
            <span
              className="inline-block w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-muted-foreground text-xs">{d.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PolandDistributorMap;
