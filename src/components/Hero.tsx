"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background — real MOLTO Mi dish photo */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')",
          }}
        />
        {/* Warm overlay — image is cream so overlay is stronger to keep luxury dark mood */}
        <div className="absolute inset-0 bg-[#1a1209]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1209]/30 via-transparent to-[#1a1209]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
      >
        {/* Italian flag micro-accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex gap-0.5 mb-8"
        >
          <span className="block w-6 h-0.5 bg-[#009246]" />
          <span className="block w-6 h-0.5 bg-[#f5f0e8]" />
          <span className="block w-6 h-0.5 bg-[#ce2b37]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.7em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="font-inter text-[11px] uppercase tracking-[0.45em] text-[#c4622d] mb-5"
        >
          Kuchnia Włoska
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-cormorant font-light text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.88] tracking-tight text-[#f5f0e8] mb-8 max-w-4xl"
        >
          Sztuka smaku<br />
          <em className="text-[#c4622d] not-italic">na Twoim talerzu</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-cormorant text-xl md:text-2xl font-light italic text-[#d4c9b0] mb-10 max-w-lg"
        >
          Prosta, autentyczna kuchnia włoska,<br className="hidden md:block" />
          bogata w kulinarnych doznaniach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#rezerwacje"
            className="px-10 py-4 bg-[#c4622d] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase font-inter hover:bg-[#d4794a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
          >
            Zarezerwuj stolik
          </a>
          <a
            href="#menu"
            className="px-10 py-4 border border-[#f5f0e8]/40 text-[#f5f0e8] text-xs tracking-[0.3em] uppercase font-inter hover:border-[#f5f0e8] hover:bg-[#f5f0e8]/8 transition-all duration-300"
          >
            Zobacz menu
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#c4622d]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
