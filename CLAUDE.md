# MOLTO Mi — Restaurant Website

## Project Overview
Business showcase website for **MOLTO Mi** — Italian cuisine restaurant in Wrocław, Poland.
Location: ul. Brylantowa 16, 52-214 Wrocław | Hours: Mon–Sun 12:00–20:00 | Rating: 4.6/5 (148 reviews)

## Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` — no config file)
- **Animations**: Framer Motion (parallax, reveal-on-scroll via `useInView`, `AnimatePresence`)
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (headings) + Inter (body) via `next/font/google`

## Design Language
- **Language**: Polish throughout — no Italian UI text. Italian words only in dish names (e.g. "Fettuccine Carbonara").
- **Palette** (defined as CSS vars in `globals.css`):
  - `--terracotta: #c4622d` — primary accent
  - `--espresso: #1a1209` — main background
  - `--cream: #f5f0e8` — primary text
  - `--parchment: #d4c9b0` — secondary text
- **Divider pattern**: `.italian-divider` utility class with `✦` ornament
- **Cards**: hover `y: -5px` lift + image scale via Framer Motion `whileHover`

## File Structure
```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, dark body
│   ├── globals.css       # CSS vars, @import tailwindcss, custom scrollbar
│   └── page.tsx          # Assembles all sections
└── components/
    ├── Navbar.tsx         # Fixed, scroll-aware, hamburger mobile + logo
    ├── Hero.tsx           # Parallax bg (/bg.jpg), Polish headings, CTA buttons
    ├── About.tsx          # Split layout, interior photo, 4.6 star stat card, 3 pillars
    ├── MenuSection.tsx    # 6 category tabs, real menu data, cards with hover
    ├── QuoteSection.tsx   # Parallax strip with quote
    ├── Gallery.tsx        # Mosaic grid — real MOLTO Mi photos from restaurantguru
    ├── Reservations.tsx   # Contact info + reservation form with success state
    └── Footer.tsx         # Brand, nav, address, social links

public/
├── logo.jpg   # Circular "mi" logo (from Facebook)
├── bg.jpg     # Brand cover — cream background with "Molto Mi · Kuchnia Wloska"
└── menu.jpg   # Full menu card (linked from MenuSection "Zobacz pelna karte")
```

## Real Restaurant Data
- **Address**: ul. Brylantowa 16, 52-214 Wroclaw
- **Hours**: Pon-Nd 12:00-20:00
- **Social**: facebook.com/MOLTOMIWRO · instagram.com/moltomiwro
- **Menu categories**: Przystawki, Zupy, Risotto, Makarony, Gnocchi, Salatki
- **Gallery photos**: restaurantguru.com (interior, risotto, gnocchi, mussels)

## Key Conventions
- All section headings and UI copy: **Polish only**
- Dish names stay in their original form (e.g. "Fettuccine Carbonara", "Risotto z Lososiem")
- Every component has `"use client"` (all use hooks or animations)
- Images from `public/` use Next.js `<Image>` with `fill` + `object-cover`
- External photos (Unsplash, restaurantguru) used as CSS `background-image` strings
- No pizza category — not on the current printed menu

## Dev Commands
```bash
npm run dev       # http://localhost:3000
npm run build     # production build check
npx tsc --noEmit  # type check only
```
