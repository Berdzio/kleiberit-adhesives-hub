const industries = [
  { name: "Woodworking & Furniture", emoji: "🪵" },
  { name: "Packaging", emoji: "📦" },
  { name: "Automotive", emoji: "🚗" },
  { name: "Construction", emoji: "🏗️" },
  { name: "Textiles", emoji: "🧵" },
  { name: "Electronics", emoji: "🔌" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Industries We Serve
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
          Bonding Solutions Across Sectors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10"
            >
              <span className="text-4xl mb-3 block">{ind.emoji}</span>
              <p className="text-primary-foreground font-heading font-semibold text-sm">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
