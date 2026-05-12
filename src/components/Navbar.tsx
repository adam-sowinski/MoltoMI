"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#o-nas", label: "O Nas" },
  { href: "#menu", label: "Menu" },
  { href: "#galeria", label: "Galeria" },
  { href: "#rezerwacje", label: "Rezerwacje" },
  { href: "#kontakt", label: "Kontakt" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a1209]/96 backdrop-blur-md border-b border-[#c4622d]/25 py-2"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo: circle mark + wordmark PNG side by side */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c4622d]/20 border border-[#c4622d]/40 flex items-center justify-center flex-shrink-0 text-2xl">
              🍕
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-inter text-[11px] tracking-[0.22em] uppercase text-[#d4c9b0] hover:text-[#f5f0e8] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c4622d] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#rezerwacje"
              className="ml-2 px-6 py-2.5 bg-[#c4622d] text-[#f5f0e8] text-[11px] tracking-[0.22em] uppercase font-inter hover:bg-[#d4794a] transition-all duration-300 hover:scale-[1.03]"
            >
              Rezerwuj stolik
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#f5f0e8] p-2 hover:text-[#c4622d] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#1a1209]/98 backdrop-blur-lg lg:hidden flex flex-col"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#c4622d] blur-[100px]" />
            </div>

            <div className="relative flex-1 flex flex-col items-center justify-center gap-7 px-8">
              {/* Logo in mobile — circle + wordmark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 }}
                className="flex flex-col items-center gap-3 mb-2"
              >
                <div className="w-16 h-16 rounded-full bg-[#c4622d]/20 border border-[#c4622d]/40 flex items-center justify-center text-4xl">
                  🍕
                </div>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-cormorant text-[2rem] font-light tracking-wider text-[#f5f0e8] hover:text-[#c4622d] transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#rezerwacje"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-10 py-3 bg-[#c4622d] text-[#f5f0e8] text-xs tracking-[0.3em] uppercase font-inter hover:bg-[#d4794a] transition-all duration-300"
              >
                Rezerwuj stolik
              </motion.a>
            </div>

            <div className="relative pb-10 text-center font-inter text-[10px] tracking-widest text-[#d4c9b0]/60 uppercase">
              Brylantowa 16 · Wrocław
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
