"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-72 md:h-80 overflow-hidden flex items-center justify-center">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-125">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a1209]/85" />
        <div className="absolute inset-0 bg-[#c4622d]/8" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-8 max-w-3xl"
      >
        {/* Italian flag micro-accent */}
        <div className="flex justify-center gap-0.5 mb-6">
          <span className="block w-8 h-0.5 bg-[#009246]" />
          <span className="block w-8 h-0.5 bg-[#f5f0e8]" />
          <span className="block w-8 h-0.5 bg-[#ce2b37]" />
        </div>
        <blockquote className="font-cormorant text-2xl md:text-4xl font-light italic text-[#f5f0e8] leading-relaxed">
          &ldquo;Gotowanie to miłość, sztuka i wyobraźnia&nbsp;— na jednym talerzu.&rdquo;
        </blockquote>
        <div className="mt-5 font-inter text-[10px] tracking-[0.35em] uppercase text-[#c4622d]">
          — Kuchnia Włoska
        </div>
      </motion.div>
    </section>
  );
}
