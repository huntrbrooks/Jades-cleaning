# Agent Guide — Total Reset Services

Marketing website for **Total Reset Services**, a Melbourne-based deep-cleaning, decluttering, and home-reorganisation business. Built with Next.js (App Router), TypeScript, and CSS Modules.

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.1.x |
| Language | TypeScript (strict) | 5.x |
| UI library | React | 19.x |
| Styling | CSS Modules + global CSS variables | — |
| Fonts | DM Sans (headings), Inter (body) via `next/font/google` | — |
| Testing | Vitest + React Testing Library + jsdom | 4.x / 16.x |
| Linting | ESLint 9 flat config (core-web-vitals + typescript) | — |
| Deployment | GitHub Pages via static export (`next export`) | GitHub Actions |

## Quick Commands

```bash
npm run dev          # Local dev server
npm run build        # Production build (static export when GITHUB_ACTIONS=true)
npm run lint         # ESLint
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, MobileStickyCTA)
│   ├── page.tsx            # Home landing page
│   ├── page.module.css     # Home page styles
│   ├── page.test.tsx       # Smoke tests for home page
│   ├── globals.css         # CSS variables, resets, utility classes
│   ├── shared.module.css   # Shared page-level CSS modules
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── not-found.tsx       # Custom 404 page
│   ├── about/              # About Jade / founder page
│   ├── before-after/       # Gallery of transformations
│   ├── blog/               # Blog listing + [slug] dynamic route
│   ├── contact/            # Contact form (placeholder)
│   ├── faqs/               # FAQ accordion page
│   ├── how-it-works/       # Step-by-step process page
│   ├── packages/           # Pricing tiers page
│   ├── privacy/            # Privacy policy (placeholder)
│   ├── reviews/            # Testimonials page
│   ├── service-areas/      # Melbourne area coverage
│   ├── services/           # Full service menu + JSON-LD
│   ├── terms/              # Terms & conditions (placeholder)
│   └── thank-you/          # Post-form-submission confirmation
├── components/             # Reusable UI components
│   ├── BeforeAfterSlider   # Interactive image slider ("use client")
│   ├── Button              # Polymorphic button/link (primary/outline/ghost)
│   ├── FaqAccordion        # Details/summary accordion
│   ├── Footer              # Site footer
│   ├── GalleryCard         # Before/after gallery item card
│   ├── GalleryFilter       # Category filter + gallery grid ("use client")
│   ├── Header              # Top nav bar
│   ├── MobileStickyCTA     # Sticky call/text/book bar for mobile
│   ├── PackageCard         # Pricing tier card
│   ├── ReviewCard          # Testimonial card
│   ├── ServiceCard         # Service detail card
│   └── TrustBadgeStrip     # Horizontal badge strip
├── content/
│   └── site.ts             # ALL site content, config, and typed data
└── test/
    └── setup.ts            # Vitest setup: jest-dom matchers, Link mock
```

## Architecture & Conventions

### Content Layer
All business copy, navigation, services, packages, reviews, FAQs, and config live in a **single content file**: `src/content/site.ts`. Every page and component pulls data from this file via typed exports (`siteConfig`, `services`, `packages`, `reviews`, `faqs`, `galleryItems`, `blogPosts`, `serviceAreas`, etc.). To change copy or add new services/reviews, edit this file — not individual pages.

### Component Patterns
- **Server components by default.** Only two client components exist:
  - `GalleryFilter` — uses `useState` for category filtering
  - `BeforeAfterSlider` — uses `useState` for slider position
- **CSS Modules** for all component and page styles. Each component has a matching `.module.css` file.
- **Polymorphic `Button`** — renders `<button>`, `<Link>`, or `<a>` based on `href` prop. Supports `variant` (primary/secondary/outline/ghost) and `size` (sm/md/lg).
- **No external UI library** — everything is hand-rolled.

### Styling System
All design tokens are defined as CSS custom properties in `globals.css`:
- **Colours**: `--color-jade` (#1b7f79), `--color-off-white`, `--color-charcoal`, `--color-beige`, `--color-gold`, `--color-aqua`, `--color-muted`
- **Spacing scale**: `--space-2xs` (4px) through `--space-4xl` (96px)
- **Radii**: `--radius-sm` through `--radius-xl`
- **Shadows**: `--shadow-soft`, `--shadow-card`
- **Fonts**: `--font-heading` (DM Sans), `--font-body` (Inter)
- **Breakpoints**: 1080px, 980px, 900px, 760px (mobile-first grids collapse)
- Utility classes: `.container`, `.section`, `.eyebrow`, `.kicker`, `.badge`, `.card`, `.grid`, `.grid-2`, `.grid-3`
- `prefers-reduced-motion` media query disables animations globally.

### Page Layout Pattern
Every page follows a consistent structure:
1. **Page header** section with `eyebrow` > `h1` (`.pageTitle`) > subtitle > action buttons
2. **Content sections** using `.section` + `.container` wrappers
3. **Section headers** with `eyebrow` > `h2` > optional `.kicker` subtitle
4. **Card grids** using `.cardGrid` + `.cardGridTwo`/`.cardGridThree`
5. **CTA card** at the bottom of most pages

### SEO
- Every page exports a `Metadata` object with title (using template `%s | Total Reset Services`) and description.
- `services/page.tsx` and `page.tsx` include JSON-LD structured data (`LocalBusiness`, `Service`).
- `sitemap.ts` and `robots.ts` are auto-generated (force-static).
- `robots.ts` disallows `/thank-you`.
- OpenGraph locale is `en_AU`.
- Canonical domain: `https://totalresetservices.com`

### Path Alias
`@/*` maps to `./src/*` (configured in both `tsconfig.json` and `vitest.config.ts`).

### Deployment
- **GitHub Actions** workflow (`.github/workflows/deploy-pages.yml`) triggers on push to `main`.
- `next.config.ts` conditionally enables `output: "export"`, `trailingSlash`, and `basePath`/`assetPrefix` when `GITHUB_ACTIONS=true`.
- Images are unoptimized (`images.unoptimized: true`) for static export compatibility.
- ESLint has `@next/next/no-img-element` turned off (static export uses native `<img>`).

### Testing
- **Vitest** with jsdom environment and `@vitejs/plugin-react`.
- Test setup (`src/test/setup.ts`) mocks `next/link` as a plain `<a>` tag and registers `jest-dom` matchers.
- Existing tests in `page.test.tsx` cover: anchor nav links, section targets, CTA rendering, and console error detection.
- Run `npm run test` before committing.

## Key Files to Know

| What | Where |
|------|-------|
| All site content & config | `src/content/site.ts` |
| Design tokens & global styles | `src/app/globals.css` |
| Shared page CSS modules | `src/app/shared.module.css` |
| Root layout (shell) | `src/app/layout.tsx` |
| Home page | `src/app/page.tsx` |
| Button component | `src/components/Button.tsx` |
| Deploy workflow | `.github/workflows/deploy-pages.yml` |
| Next.js config | `next.config.ts` |
| ESLint config | `eslint.config.mjs` |
| Vitest config | `vitest.config.ts` |

## Placeholder / Incomplete Items

- **Contact form** (`contact/page.tsx`): Uses `method="get"` redirecting to `/thank-you`. Needs a real form provider (e.g., Formspree, Netlify Forms).
- **Blog posts** (`blog/[slug]/page.tsx`): Dynamic route exists but post bodies are placeholder outlines.
- **Gallery images**: All before/after images use SVG placeholders (`/images/before-placeholder.svg`, `/images/after-placeholder.svg`).
- **Privacy & Terms**: Contain placeholder template text.
- **Phone number**: Uses placeholder `+61 4 0000 0000`.
- **External links**: Calendly, Google Reviews, WhatsApp, and social links use placeholder URLs.
