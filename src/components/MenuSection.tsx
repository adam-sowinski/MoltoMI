"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
};

type MenuCategory = {
  id: string;
  label: string;
  labelIt: string;
  items: MenuItem[];
};

const categories: MenuCategory[] = [
  {
    id: "przystawki",
    label: "Przystawki",
    labelIt: "Antipasti",
    items: [
      {
        name: "Focaccia z Ricottą",
        description: "Ricotta · por duszony w białym winie · orzechy włoskie w miodzie · rozmaryn",
        price: "30 zł",
        image: "https://images.unsplash.com/photo-1571197119738-c4271b2f9091?w=600&q=80",
      },
      {
        name: "Focaccia z Kozim Serem",
        description: "Kozi ser · karmelizowana czerwona cebula · orzechy pekan · świeży tymianek",
        price: "36 zł",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
      },
      {
        name: "Focaccia z Boczkiem",
        description: "Boczek Pancetta · cebulki w occie balsamicznym · sos śmietanowy · szczypiorek",
        price: "36 zł",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80",
      },
      {
        name: "Focaccia z Borowikami",
        description: "Mascarpone · borowiki · czosnek · bazylia · oliwa truflowa",
        price: "36 zł",
        tag: "Polecamy",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&q=80",
      },
      {
        name: "Burrata z Pesto",
        description: "Pesto z suszonych pomidorów · zielone oliwki · rukola · grzanki z ciabatty",
        price: "36 zł",
        image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80",
      },
      {
        name: "Burrata z Gruszką",
        description: "Karmelizowane gruszki · sos miodowy z Ndują · bazylia · pistacje · grzanki z ciabatty",
        price: "36 zł",
        tag: "Polecamy",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
      },
      {
        name: "Paluchy Pizzowe z Gorgonzolą",
        description: "Sos śmietanowy z gorgonzolą i pistacjami · sałatka z rukoli z pestkami dyni i orzechami",
        price: "34 zł",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
      },
      {
        name: "Paluchy Pizzowe z Ricottą",
        description: "Ricotta z suszonymi pomidorami · sałatka z rukoli z gruszką i orzechami włoskimi",
        price: "34 zł",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
      },
    ],
  },
  {
    id: "zupy",
    label: "Zupy",
    labelIt: "Zuppe",
    items: [
      {
        name: "Tortellini in Brodo",
        description: "Rosół drobiowy · tortellini z farszem wołowo-wieprzowym · natka pietruszki · marchewka",
        price: "26 zł",
        tag: "Klasyk",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
      },
      {
        name: "Krem Pomidorowy",
        description: "Krem pomidorowy · stracciatella · bazylia · oliwa z oliwek",
        price: "26 zł",
        image: "https://images.unsplash.com/photo-1627735072586-60e93af51fca?w=600&q=80",
      },
    ],
  },
  {
    id: "risotto",
    label: "Risotto",
    labelIt: "Risotto",
    items: [
      {
        name: "Risotto z Łososiem",
        description: "Grillowany filet z łososia · cytryna · młode brokuły · koperek · czosnek · Parmigiano Reggiano",
        price: "58 zł",
        tag: "Polecamy",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
      },
      {
        name: "Risotto z Kurczakiem",
        description: "Grillowany filet z kurczaka · cukinia · suszone pomidory · szpinak · czosnek · Pecorino Romano",
        price: "50 zł",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
      },
      {
        name: "Risotto z Owocami Morza",
        description: "Kalmary · krewetki · mule · ośmiorniczki · sos pomidorowy · kapary · czerwone wino · czosnek · Pecorino Romano",
        price: "52 zł",
        tag: "Bestseller",
        image: "https://img02.restaurantguru.com/c6ff-Restaurant-MOLTO-Mi-mussels.jpg",
      },
      {
        name: "Risotto z Kozim Serem",
        description: "Grillowany kozi ser · kurki · rozmaryn · szalotka · białe wino · Pecorino Romano",
        price: "50 zł",
        image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7cd?w=600&q=80",
      },
    ],
  },
  {
    id: "makarony",
    label: "Makarony",
    labelIt: "Pasta",
    items: [
      {
        name: "Fettuccine Carbonara",
        description: "Pancetta · żółtko · Parmigiano Reggiano · pieprz",
        price: "42 zł",
        tag: "Klasyk",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
      },
      {
        name: "Spaghetti Ragù",
        description: "Mielone mięso wołowe · Pancetta · czosnek · cebula · marchewka · seler · sos pomidorowy · czerwone wino",
        price: "44 zł",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
      },
      {
        name: "Spaghetti z Pistacjami",
        description: "Pesto bazyliowe · burrata · cukinia · Pecorino Romano · pistacje",
        price: "44 zł",
        tag: "Polecamy",
        image: "https://images.unsplash.com/photo-1551183053-bf91798d9e5c?w=600&q=80",
      },
      {
        name: "Pappardelle z Grzybami",
        description: "Grzyby leśne · czosnek · szalotka · masło · białe wino · żółtko · Pecorino Romano · tymianek",
        price: "46 zł",
        image: "https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?w=600&q=80",
      },
      {
        name: "Pappardelle z Krewetkami",
        description: "Krewetki · czerwona cebula · czosnek · pomidorki · tymianek · chili · miód · masło · białe wino",
        price: "46 zł",
        tag: "Polecamy",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
      },
      {
        name: "Pappardelle z Rozmarynem",
        description: "Rozmaryn · ricotta · masło · białe wino · Parmigiano Reggiano · pieprz · cytryna",
        price: "42 zł",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
      },
      {
        name: "Linguine z Kurczakiem",
        description: "Kurczak · pieczarki · czosnek · sos śmietanowy · Pecorino Romano · bazylia",
        price: "44 zł",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
      },
      {
        name: "Penne z Wędzonym Łososiem",
        description: "Wędzony łosoś · suszone pomidory · szpinak · mascarpone · czosnek · bazylia",
        price: "46 zł",
        image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=600&q=80",
      },
    ],
  },
  {
    id: "gnocchi",
    label: "Gnocchi",
    labelIt: "Gnocchi",
    items: [
      {
        name: "Gnocchi z Borowikami",
        description: "Borowiki · burrata · czosnek · natka pietruszki · prażone migdały · Parmigiano Reggiano",
        price: "46 zł",
        tag: "Polecamy",
        image: "https://img02.restaurantguru.com/c5bb-Restaurant-MOLTO-Mi-gnocchi.jpg",
      },
      {
        name: "Gnocchi z Polędwiczką",
        description: "Grillowana polędwiczka wieprzowa · dynia · pieczarki · bakłażan · sos śmietanowy · czosnek · Parmigiano",
        price: "46 zł",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
      },
      {
        name: "Gnocchi z Kaczką",
        description: "Pieczona pierś z kaczki · karmelizowana marchewka · konfitura malinowa z rozmarynem · rukola · orzechy",
        price: "48 zł",
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      },
    ],
  },
  {
    id: "salatki",
    label: "Sałatki",
    labelIt: "Insalate",
    items: [
      {
        name: "Sałatka z Kurczakiem",
        description: "Grillowany filet z kurczaka · awokado · ogórek · pomidorki · sos miodowo-musztardowy · sałata · Pecorino",
        price: "44 zł",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      },
      {
        name: "Sałatka z Crudo",
        description: "Szynka Crudo · grillowana brzoskwinia · maliny · cytrynowa stracciatella · bazylia · pistacje · oliwa miodowa",
        price: "44 zł",
        tag: "Polecamy",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
      },
      {
        name: "Sałatka z Wędzonym Łososiem",
        description: "Wędzony łosoś · pomarańcza · oliwki · kapary · pomidorki · płatki migdałów · koperek · oliwa cytrynowo-miodowa",
        price: "44 zł",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
      },
    ],
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-[#1e1509] border border-[#2e2114] hover:border-[#c4622d]/50 transition-all duration-300 overflow-hidden cursor-default"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1509] via-[#1e1509]/10 to-transparent" />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-[#c4622d] text-[#f5f0e8] text-[9px] tracking-[0.25em] uppercase font-inter font-semibold px-3 py-1">
            {item.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-cormorant text-[18px] font-medium italic text-[#f5f0e8] group-hover:text-[#c4622d] transition-colors duration-300 leading-snug">
            {item.name}
          </h3>
          <span className="font-cormorant text-lg text-[#c4622d] whitespace-nowrap font-medium">
            {item.price}
          </span>
        </div>
        <p className="font-inter text-[11px] text-[#d4c9b0] leading-relaxed">
          {item.description}
        </p>
        <div className="mt-4 h-px bg-[#c4622d]/0 group-hover:bg-[#c4622d]/20 transition-all duration-400" />
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState("makarony");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" ref={ref} className="py-32 px-6 bg-[#1a1209]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-[11px] tracking-[0.45em] uppercase text-[#c4622d] mb-4">
            Nasze propozycje
          </p>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-[#f5f0e8] mb-3">
            Menu
          </h2>
          <p className="font-cormorant text-xl italic text-[#d4c9b0] mb-8">
            — kuchnia inspirowana Włochami
          </p>
          <div className="italian-divider max-w-xs mx-auto">
            <span className="font-cormorant text-[#c4622d] px-2">✦</span>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center gap-2 mb-14 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-3 transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#c4622d] text-[#f5f0e8]"
                  : "border border-[#2e2114] text-[#d4c9b0] hover:border-[#c4622d]/50 hover:text-[#f5f0e8]"
              }`}
            >
              <div className="font-inter text-[10px] tracking-[0.2em] uppercase">
                {cat.label}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {current.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Download / view full menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 text-center space-y-4"
        >
          <p className="font-inter text-[10px] tracking-widest uppercase text-[#d4c9b0]/50">
            Wszystkie składniki świeże i sezonowe · poinformuj nas o alergiach
          </p>
          <a
            href="/menu.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 border border-[#c4622d]/50 text-[#c4622d] text-[11px] tracking-[0.25em] uppercase font-inter px-10 py-4 hover:bg-[#c4622d]/10 hover:border-[#c4622d] transition-all duration-300"
          >
            Zobacz pełną kartę menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
