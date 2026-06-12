# Rob Photography — Astro Website

A vintage Japanese retro photography portfolio and shop, built with **AstroJS** + **DaisyUI** + **TailwindCSS v4**.

## 🗂 Project Structure

```
src/
├── components/
│   ├── Nav.astro          # Sticky responsive navigation
│   ├── Footer.astro       # Footer with vertical Japanese text
│   ├── PhotoCard.astro    # Reusable photo card with hover overlay
│   ├── ShopCard.astro     # Shop item card with add-to-cart button
│   └── SectionHeader.astro # Reusable section title with divider
├── data/
│   └── photos.ts          # ← REPLACE with your own photos here
├── layouts/
│   └── BaseLayout.astro   # Base HTML layout with nav + footer
├── pages/
│   ├── index.astro        # Homepage (hero, featured, collections)
│   ├── gallery.astro      # Gallery with collection tabs
│   ├── shop.astro         # Shop with filterable prints
│   └── about.astro        # Bio, philosophy, contact form
└── styles/
    └── global.css         # Custom vintage theme tokens + utilities
```

## 🚀 Getting Started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # Output to dist/
npm run preview   # Preview the build
```

## 🖼 Adding Your Photos

Edit `src/data/photos.ts` — replace placeholder Unsplash URLs with your own images. Upload photos to `public/photos/` and reference them as `/photos/filename.jpg`.

Each photo supports:
- `title`, `collection` (street | landscape | life | others)
- `src`, `price`, `description`, `location`, `year`
- `featured: true` — appears on the homepage grid

## 🛒 Backend / Payments

The shop UI is frontend-only. When you're ready to add real payments, let me know — I can integrate:
- **Stripe** (recommended) — checkout sessions
- **Snipcart** — drop-in cart with no backend needed
- **Shopify Storefront API** — if you want a full store

