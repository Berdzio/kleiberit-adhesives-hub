import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Building, Send, CheckCircle, AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const schema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  company: z.string().optional(),
  email: z.string().email("Podaj prawidłowy adres email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 disabled:opacity-50";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@klejeme.pl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Zapytanie od ${data.name}${data.company ? ` (${data.company})` : ""}`,
          name: data.name,
          company: data.company || "—",
          email: data.email,
          phone: data.phone || "—",
          message: data.message,
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Skontaktuj się
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Zapytaj o ofertę
          </h2>
          <p className="text-muted-foreground text-lg">
            Opisz nad czym pracujesz a my dobierzemy produkt KLEIBERIT®
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: "Adres", value: "Bukowiecka 92/155\n03-893 Warszawa" },
              { icon: Phone, label: "Telefon", value: "+48 512-825-215" },
              { icon: Mail, label: "Email", value: "info@klejeme.pl" },
              { icon: Clock, label: "Godziny", value: "Pon–Pt: 8 – 16" },
              { icon: Building, label: "NIP", value: "5273148477" },
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
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle className="h-14 w-14 text-green-500" />
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Wiadomość wysłana!
                </h3>
                <p className="text-muted-foreground">
                  Dziękujemy za zapytanie. Odezwiemy się wkrótce.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-secondary underline underline-offset-4 text-sm hover:opacity-80"
                >
                  Wyślij kolejne zapytanie
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Imię i Nazwisko *"
                      className={inputClass}
                      disabled={status === "sending"}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("company")}
                      type="text"
                      placeholder="Firma"
                      className={inputClass}
                      disabled={status === "sending"}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Adres Email *"
                      className={inputClass}
                      disabled={status === "sending"}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Numer telefonu"
                      className={inputClass}
                      disabled={status === "sending"}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Napisz nam o swoich wymaganiach dla naszego kleju... *"
                    className={`${inputClass} resize-none`}
                    disabled={status === "sending"}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na info@klejeme.pl
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full gradient-accent text-accent-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity text-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-5 w-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Wysyłanie…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Wyślij zapytanie
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
