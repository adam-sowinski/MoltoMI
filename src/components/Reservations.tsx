"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 71 000 00 00",
    href: "tel:+48710000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "rezerwacje@moltomi.pl",
    href: "mailto:rezerwacje@moltomi.pl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Brylantowa 16\n52-214 Wrocław",
    href: "https://maps.google.com/?q=Brylantowa+16+Wroclaw",
  },
  {
    icon: Clock,
    label: "Godziny",
    value: "Pon – Nd: 12:00 – 20:00",
    href: undefined,
  },
];

export default function Reservations() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      guests: (form.elements.namedItem("guests") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem("honeypot") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Wystąpił błąd. Spróbuj ponownie.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Brak połączenia. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rezerwacje" ref={ref} className="py-32 px-6 bg-[#1e1509]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-[11px] tracking-[0.45em] uppercase text-[#c4622d] mb-4">
            Rezerwacje
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#f5f0e8] mb-8 leading-tight">
            Zarezerwuj<br />
            <em className="text-[#c4622d] not-italic">swój stolik</em>
          </h2>
          <div className="w-10 h-px bg-[#c4622d] mb-10" />

          <p className="font-inter text-sm text-[#d4c9b0] leading-loose mb-12">
            Każdy gość jest dla nas wyjątkowy. Zapraszamy na lunch i kolację
            przy Brylantowej 16 — a jeśli masz specjalne życzenia lub
            planujesz przyjęcie, napisz do nas zawczasu.
          </p>

          <div className="space-y-7">
            {contactDetails.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 border border-[#c4622d]/35 flex items-center justify-center flex-shrink-0 hover:border-[#c4622d] hover:bg-[#c4622d]/10 transition-all duration-300">
                  <d.icon size={15} className="text-[#c4622d]" />
                </div>
                <div>
                  <p className="font-inter text-[9px] tracking-[0.3em] uppercase text-[#c4622d] mb-0.5">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("https://maps") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-inter text-sm text-[#f5f0e8] hover:text-[#c4622d] transition-colors duration-300 whitespace-pre-line"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-inter text-sm text-[#f5f0e8] whitespace-pre-line">
                      {d.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#c4622d]/30 pointer-events-none" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-24 border border-[#2e2114]"
            >
              <div className="w-14 h-14 border border-[#c4622d] flex items-center justify-center mb-6">
                <span className="text-[#c4622d] font-cormorant text-2xl">✓</span>
              </div>
              <h3 className="font-cormorant text-3xl text-[#f5f0e8] mb-4">Dziękujemy!</h3>
              <p className="font-inter text-xs text-[#d4c9b0] max-w-xs leading-relaxed">
                Potwierdzenie rezerwacji wyślemy na podany adres e-mail.
                Do zobaczenia!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-[#2e2114] p-8 md:p-10 space-y-5">
              {/* Honeypot — ukryte przed ludźmi, wypełniane przez boty */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 pointer-events-none w-0 h-0"
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-[9px] tracking-[0.28em] uppercase text-[#c4622d] mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={80}
                    placeholder="Jan Kowalski"
                    className="w-full bg-[#1a1209] border border-[#2e2114] focus:border-[#c4622d] text-[#f5f0e8] font-inter text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-[#4a3520]"
                  />
                </div>
                <div>
                  <label className="block font-inter text-[9px] tracking-[0.28em] uppercase text-[#c4622d] mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+48 000 000 000"
                    className="w-full bg-[#1a1209] border border-[#2e2114] focus:border-[#c4622d] text-[#f5f0e8] font-inter text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-[#4a3520]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-[9px] tracking-[0.28em] uppercase text-[#c4622d] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jan@email.pl"
                  className="w-full bg-[#1a1209] border border-[#2e2114] focus:border-[#c4622d] text-[#f5f0e8] font-inter text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-[#4a3520]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-[9px] tracking-[0.28em] uppercase text-[#c4622d] mb-2">
                    Data
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={today}
                    className="w-full bg-[#1a1209] border border-[#2e2114] focus:border-[#c4622d] text-[#f5f0e8] font-inter text-sm px-4 py-3 outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-inter text-[9px] tracking-[0.28em] uppercase text-[#c4622d] mb-2">
                    Liczba osób
                  </label>
                  <select
                    name="guests"
                    required
                    className="w-full bg-[#1a1209] border border-[#2e2114] focus:border-[#c4622d] text-[#f5f0e8] font-inter text-sm px-4 py-3 outline-none transition-colors duration-300"
                  >
                    <option value="">Wybierz</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-inter text-[9px] tracking-[0.28em] uppercase text-[#c4622d] mb-2">
                  Życzenia specjalne (opcjonalnie)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={500}
                  placeholder="Alergie, urodziny, preferowany stolik..."
                  className="w-full bg-[#1a1209] border border-[#2e2114] focus:border-[#c4622d] text-[#f5f0e8] font-inter text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-[#4a3520] resize-none"
                />
              </div>

              {error && (
                <p className="font-inter text-xs text-[#ce4a4a] border border-[#ce4a4a]/30 px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c4622d] text-[#f5f0e8] font-inter text-xs tracking-[0.3em] uppercase py-4 hover:bg-[#d4794a] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
              </button>

              <p className="text-center font-inter text-[10px] text-[#d4c9b0]/50 tracking-wider">
                Odpowiadamy w ciągu 2 godzin
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
