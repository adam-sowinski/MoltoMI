"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Wheat, Heart } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Semplicità",
    sub: "Prostota",
    description:
      "Wierzymy, że najlepsze smaki rodzą się z kilku doskonałych składników. Żadnych sztuczek — tylko świeże produkty i miłość do gotowania.",
  },
  {
    icon: Wheat,
    title: "Autenticità",
    sub: "Autentyczność",
    description:
      "Przepisy prosto z regionów Włoch: Toskania, Sycylia, Emilia-Romania. Mąka z Neapolu, oliwa extra vergine, świeże pomidory San Marzano.",
  },
  {
    icon: Heart,
    title: "Passione",
    sub: "Pasja",
    description:
      "Otwarta kuchnia, otwarci ludzie. Każdy talerz to wyraz pasji, którą czujemy do kuchni włoskiej od chwili, gdy po raz pierwszy odwiedziliśmy Toskanię.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="o-nas" ref={ref} className="py-32 px-6 bg-[#1e1509]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-inter text-[11px] tracking-[0.45em] uppercase text-[#c4622d] mb-4">
            Nasza historia
          </p>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-[#f5f0e8] mb-4 leading-tight">
            O nas
          </h2>
          <div className="italian-divider max-w-xs mx-auto">
            <span className="font-cormorant text-[#c4622d] text-lg px-2">✦</span>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: real restaurant photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main image — MOLTO Mi interior */}
            <div className="relative overflow-hidden">
              <div
                className="h-[480px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1209]/60 to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#c4622d] p-7 hidden md:block"
            >
              <div className="font-cormorant text-4xl font-light text-[#f5f0e8]">4.6</div>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? (i < 4 ? "text-[#f5f0e8]" : "text-[#f5f0e8]/50") : ""}`}>★</span>
                ))}
              </div>
              <div className="font-inter text-[9px] tracking-[0.2em] uppercase text-[#f5f0e8]/70 mt-1">
                Opinie gości
              </div>
            </motion.div>

            {/* Italian border accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#c4622d]/50 pointer-events-none" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pt-4"
          >
            <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-[#c4622d] mb-4">
              Nasza kuchnia
            </p>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light text-[#f5f0e8] leading-tight mb-6">
              Inspiracja Włochami<br />
              <em className="text-[#c4622d] not-italic">na każdym talerzu</em>
            </h3>
            <div className="w-10 h-px bg-[#c4622d] mb-8" />

            <p className="font-inter text-sm text-[#d4c9b0] leading-loose mb-5">
              Nasza restauracja zainspirowana jest kuchnią włoską — prostą, ale
              dostarczającą bogatych kulinarnych doznań. Wierzymy, że najlepsze
              smaki rodzą się z kilku doskonałych składników.
            </p>
            <p className="font-inter text-sm text-[#d4c9b0] leading-loose mb-10">
              Oferujemy lunche i kolacje — prawdziwą włoską
              pizzę, makarony, risotto i gnocchi, przygotowywane każdego
              dnia ze świeżych składników.
            </p>

            {/* Cuisine flags */}
            <div className="flex flex-wrap gap-3">
              {["Pizza napoletana", "Pasta fresca", "Risotto", "Gnocchi", "Focaccia", "Dolci"].map((item) => (
                <span
                  key={item}
                  className="font-inter text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-[#c4622d]/35 text-[#d4c9b0] hover:border-[#c4622d] hover:text-[#f5f0e8] transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
              className="group border border-[#2e2114] hover:border-[#c4622d]/40 p-8 transition-all duration-400 relative overflow-hidden"
            >
              {/* Hover warm glow */}
              <div className="absolute inset-0 bg-[#c4622d]/0 group-hover:bg-[#c4622d]/5 transition-all duration-500" />

              <div className="relative">
                <div className="w-12 h-12 border border-[#c4622d]/40 group-hover:border-[#c4622d] flex items-center justify-center mb-5 transition-colors duration-300">
                  <p.icon size={18} className="text-[#c4622d]" />
                </div>
                <div className="font-cormorant text-2xl text-[#f5f0e8] mb-0.5">{p.sub}</div>
                <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#c4622d]/60 mb-4 italic font-cormorant normal-case">{p.title}</div>
                <p className="font-inter text-xs text-[#d4c9b0] leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
