import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Request a Quote
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your project and we'll recommend the perfect KLEIBERIT adhesive solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: "Address", value: "123 Industrial Blvd, Suite 400\nManufacturing City, MC 12345" },
              { icon: Phone, label: "Phone", value: "+1 (234) 567-890" },
              { icon: Mail, label: "Email", value: "info@adhesivepro.com" },
              { icon: Clock, label: "Hours", value: "Mon–Fri: 8AM – 6PM" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="lg:col-span-3 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Tell us about your adhesive requirements..."
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-accent text-accent-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity text-lg"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
