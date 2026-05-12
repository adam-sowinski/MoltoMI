"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80",
    alt: "Wnętrze restauracji",
    span: "lg:col-span-2 lg:row-span-2",
    label: "Wnętrze",
  },
  {
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    alt: "Risotto",
    span: "",
    label: "Risotto",
  },
  {
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
    alt: "Gnocchi",
    span: "",
    label: "Gnocchi",
  },
  {
    src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
    alt: "Owoce morza",
    span: "",
    label: "Owoce morza",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    alt: "Pizza napoletana",
    span: "lg:col-span-2",
    label: "Pizza napoletana",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="galeria" ref={ref} className="py-32 px-6 bg-[#1a1209]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-[11px] tracking-[0.45em] uppercase text-[#c4622d] mb-4">
            Atmosfera
          </p>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-[#f5f0e8] mb-4">
            Galeria
          </h2>
          <div className="italian-divider max-w-xs mx-auto">
            <span className="font-cormorant text-[#c4622d] px-2">✦</span>
          </div>
        </motion.div>

        {/* Mosaic */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px] lg:auto-rows-[230px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
              </motion.div>
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-[#1a1209]/35 group-hover:bg-[#1a1209]/10 transition-all duration-500" />
              <div className="absolute inset-0 border border-[#c4622d]/0 group-hover:border-[#c4622d]/40 transition-all duration-500" />

              {/* Label on hover */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-3 left-3 font-inter text-[9px] tracking-[0.25em] uppercase text-[#f5f0e8] bg-[#c4622d]/90 px-3 py-1"
              >
                {img.label}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 font-inter text-[10px] tracking-[0.3em] uppercase text-[#d4c9b0]/50"
        >
          Galeria zdjęć restauracji
        </motion.p>
      </div>
    </section>
  );
}
