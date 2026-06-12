# Development Guidelines

## Core Principles
- **No summarize files** — Don't create explanatory .md files documenting what already exists
- **Respect the design** — The vintage Japanese aesthetic and existing structure are intentional
- **Always improve** — Make changes that enhance, not complicate
- **Keep it simple** — Straightforward code over clever tricks
- **Reusable components** — Extract common patterns into Astro components
- **Design differentiation** — Seek unique visual approaches while maintaining cohesion

## Current Design Language
- **Aesthetic:** Vintage Japanese retro with minimal, elegant simplicity
- **Color Tokens:** Sumi (#1A1A1A), Washi (#F5F0E8), Hanko (#C41E3A), Wood (#8B7355), Fog (#9B9589)
- **Typography:** Display font for headers, clean sans-serif for body
- **Patterns:** Hanko stamps, vertical text, sepia filters, subtle ornaments

## Architecture
- **Framework:** Astro 6 + TailwindCSS v4 + DaisyUI
- **Structure:** Pages, Layouts, Components, Data, Styles
- **Styling:** CSS variables in global.css + Tailwind utilities
- **Components:** PhotoCard, ShopCard, SectionHeader, Nav, Footer

## When Making Changes
1. Check if a reusable component would prevent duplication
2. Maintain visual consistency with the Japanese aesthetic
3. Consider mobile responsiveness from the start
4. Use existing design tokens (CSS variables)
5. Test the build: `npm run build`
6. Keep modifications surgical and minimal

## What NOT to Do
- Don't create documentation files unless explicitly requested by filename
- Don't break existing functionality
- Don't add unnecessary dependencies
- Don't deviate significantly from the design system without intention
