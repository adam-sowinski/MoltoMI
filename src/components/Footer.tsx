"use client";

import { Share2, Globe } from "lucide-react";

const footerLinks = [
  { href: "#o-nas", label: "O Nas" },
  { href: "#menu", label: "Menu" },
  { href: "#galeria", label: "Galeria" },
  { href: "#rezerwacje", label: "Rezerwacje" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#120e06] border-t border-[#2e2114]">
      {/* Top terracotta strip */}
      <div className="bg-[#c4622d] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#f5f0e8] font-medium">
            Rezerwacje · +48 12 345 67 89
          </p>
          <div className="flex items-center gap-3">
            <span className="block w-4 h-px bg-[#f5f0e8]/40" />
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#f5f0e8]/80">
              Pon – Nd · 12:00 – 22:00
            </p>
            <span className="block w-4 h-px bg-[#f5f0e8]/40" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-full bg-[#c4622d]/20 border border-[#c4622d]/40 flex items-center justify-center text-3xl flex-shrink-0">
                🍕
              </div>
            </div>
            <p className="font-inter text-xs text-[#d4c9b0] leading-loose max-w-xs mb-4">
              Kuchnia włoska — prosta, autentyczna,
              pełna kulinarnych doznań.
            </p>
            <div className="flex gap-0.5">
              <span className="block w-5 h-1 bg-[#009246]" />
              <span className="block w-5 h-1 bg-[#f5f0e8]" />
              <span className="block w-5 h-1 bg-[#ce2b37]" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#c4622d] mb-6">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 font-inter text-sm text-[#d4c9b0] hover:text-[#f5f0e8] transition-colors duration-300"
                  >
                    <span className="block w-3 h-px bg-[#c4622d]/0 group-hover:bg-[#c4622d] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#c4622d] mb-6">
              Znajdź nas
            </h4>
            <address className="not-italic space-y-2 mb-8">
              <p className="font-inter text-sm text-[#d4c9b0]">ul. Przykładowa 1</p>
              <p className="font-inter text-sm text-[#d4c9b0]">00-001 Warszawa</p>
              <p className="font-inter text-sm text-[#d4c9b0] mt-4">
                <a href="tel:+48123456789" className="hover:text-[#c4622d] transition-colors">
                  +48 12 345 67 89
                </a>
              </p>
              <p className="font-inter text-sm text-[#d4c9b0]">
                <a href="mailto:rezerwacje@restauracja.pl" className="hover:text-[#c4622d] transition-colors">
                  rezerwacje@restauracja.pl
                </a>
              </p>
            </address>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-[#2e2114] hover:border-[#c4622d] flex items-center justify-center text-[#d4c9b0] hover:text-[#c4622d] transition-all duration-300"
              >
                <Share2 size={14} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-[#2e2114] hover:border-[#c4622d] flex items-center justify-center text-[#d4c9b0] hover:text-[#c4622d] transition-all duration-300"
              >
                <Globe size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2e2114] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[10px] text-[#4a3520]">
            © {new Date().getFullYear()} Restauracja · Wszelkie prawa zastrzeżone
          </p>
          <p className="font-inter text-[11px] text-[#d4c9b0]/50 tracking-[0.2em] uppercase text-center">
            Pon–Nd · 12:00 – 22:00
          </p>
          <p className="font-inter text-[10px] text-[#4a3520]">
            Warszawa, Polska
          </p>
        </div>
      </div>
    </footer>
  );
}
