"use client";

import { Share2, Globe } from "lucide-react";
import Image from "next/image";

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
            Rezerwacje · +48 71 000 00 00
          </p>
          <div className="flex items-center gap-3">
            <span className="block w-4 h-px bg-[#f5f0e8]/40" />
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#f5f0e8]/80">
              Pon – Nd · 12:00 – 20:00
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
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="MOLTO Mi logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-12 w-[160px]">
                <Image
                  src="/drugielogo-removebg-preview.png"
                  alt="Molto Mi – Kuchnia Włoska"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="font-inter text-xs text-[#d4c9b0] leading-loose max-w-xs mb-4">
              Kuchnia włoska — prosta, autentyczna,
              pełna kulinarnych doznań. Od 2023 · Wrocław.
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
              <p className="font-inter text-sm text-[#d4c9b0]">ul. Brylantowa 16</p>
              <p className="font-inter text-sm text-[#d4c9b0]">52-214 Wrocław</p>
              <p className="font-inter text-sm text-[#d4c9b0] mt-4">
                <a href="tel:+48710000000" className="hover:text-[#c4622d] transition-colors">
                  +48 71 000 00 00
                </a>
              </p>
              <p className="font-inter text-sm text-[#d4c9b0]">
                <a href="mailto:rezerwacje@moltomi.pl" className="hover:text-[#c4622d] transition-colors">
                  rezerwacje@moltomi.pl
                </a>
              </p>
            </address>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/moltomiwro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MOLTO Mi"
                className="w-10 h-10 border border-[#2e2114] hover:border-[#c4622d] flex items-center justify-center text-[#d4c9b0] hover:text-[#c4622d] transition-all duration-300"
              >
                <Share2 size={14} />
              </a>
              <a
                href="https://www.facebook.com/MOLTOMIWRO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook MOLTO Mi"
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
            © {new Date().getFullYear()} MOLTO Mi · Wszelkie prawa zastrzeżone
          </p>
          <p className="font-inter text-[10px] text-[#4a3520]">
            Wrocław, Polska
          </p>
        </div>
      </div>
    </footer>
  );
}
