# SYGNS Landing Page — Next.js

A production-ready Next.js landing page for the SYGNS app by Denmark+Winter.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **react-slick** (image carousel)
- **lucide-react** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sygns-landing/
├── app/
│   ├── globals.css       # Starfield animations, module grid borders, Tailwind
│   ├── layout.tsx        # Root layout with metadata & Google Fonts
│   └── page.tsx          # Main landing page (7 sections)
├── components/
│   ├── Starfield.tsx     # Animated star background
│   ├── ModuleIcons.tsx   # Hero icon row
│   ├── ModuleGrid.tsx    # Interactive 3×3 module grid (click to reveal descriptions)
│   ├── ImageCarousel.tsx # App screenshot carousel (react-slick)
│   └── PricingCards.tsx  # Gold & Diamond pricing tiers
├── public/
│   └── assets/           # All PNG assets (30 images from Figma export)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Sections

1. **Hero** — SYGNS banner, headline, App Store / Google Play CTAs, module icons
2. **What It Is** — Copy about SYGNS philosophy + app screenshot carousel
3. **All The Sygns™ Modules** — Interactive 3×3 grid (tap to reveal module descriptions)
4. **Signal Over Noise** — How it works copy
5. **Activate Your System** — Gold & Diamond pricing cards
6. **Get Your Deck** — Oracle Tarot Re:Imagined deck CTA linking to Shopify store
7. **Final CTA** — Closing statement with SYGNS logo

## Notes

- All assets are served locally from `public/assets/`
- `framer-motion` is used instead of `motion/react` (Next.js compatible)
- `ImageCarousel` uses `react-slick` with custom prev/next buttons
- Module grid is interactive: click any tile to toggle between icon view and description view
