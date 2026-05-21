# B&K North — Website

A luxury minimalist site for **B&K North**, a modern web design agency.
Built with Vite + React + TypeScript + Tailwind, with motion choreographed
in Framer Motion (scroll-driven reveals, parallax, sticky-stage transitions).

> Websites. Built to elevate.

---

## Stack

- **React 19** + **TypeScript** — UI
- **Vite 8** — dev server & build
- **Tailwind CSS 3** — design tokens & utilities
- **Framer Motion 12** — scroll, reveal & hover motion
- **Lucide React** — iconography (when needed)

---

## Quick start

```bash
# 1. Install
npm install

# 2. Configure environment (optional, for the contact form endpoint)
cp .env.example .env.local
# then edit .env.local

# 3. Run dev server
npm run dev

# 4. Production build
npm run build
npm run preview
```

The dev server runs on `http://localhost:5173` by default.

---

## Project structure

```
.
├── index.html                  # SEO meta, fonts, theme color
├── public/
│   ├── favicon.svg             # Brand mark favicon
│   └── bk-north-logo.svg       # Full lockup (for OG / external use)
├── src/
│   ├── main.tsx                # React entry
│   ├── App.tsx                 # Composes Nav + sections + Footer
│   ├── index.css               # Tailwind layers + base + components
│   ├── data/
│   │   └── site.ts             # All copy, services, pricing, nav
│   ├── components/
│   │   ├── Nav.tsx             # Sticky nav + mobile menu
│   │   ├── Logo.tsx            # Inline SVG brand mark + wordmark
│   │   ├── Footer.tsx          # Closing CTA + contact info
│   │   ├── ScrollProgress.tsx  # Top scroll progress bar
│   │   ├── MountainBackdrop.tsx# Parallax mountain layers (hero)
│   │   ├── ContactForm.tsx     # Form with validation + honeypot
│   │   └── Reveal.tsx          # Reveal & RevealLines primitives
│   └── sections/
│       ├── Hero.tsx            # Hero with logo + tagline + CTA
│       ├── Intro.tsx           # Scroll-fade fragment copy
│       ├── About.tsx           # About Us page content
│       ├── Approach.tsx        # Sticky 4-step process (Apple-style)
│       ├── Services.tsx        # Pricing tiers + flexibility note
│       ├── Guarantee.tsx       # 24-hour guarantee
│       └── Contact.tsx         # Phone, email, form
└── tailwind.config.js          # Palette (ink/bone), typography, easings
```

---

## Where to place the logo

Two places, depending on the format you have:

1. **Brand mark used in the UI (Nav / Hero / Footer):**
   `src/components/Logo.tsx` currently renders an inline SVG so it
   inherits `currentColor` and scales perfectly. If you have the agency's
   own SVG, paste its path data into the `<svg>` block, or import it as
   a React component using [`vite-plugin-svgr`](https://github.com/pd4d10/vite-plugin-svgr).

2. **Static asset (for OG images, downloads, emails):**
   Drop the file into `/public/` (e.g. `/public/bk-north-logo.svg`) and
   reference it as `/bk-north-logo.svg` in markup.

| Asset             | Path                              |
|-------------------|-----------------------------------|
| Favicon           | `public/favicon.svg`              |
| Brand lockup SVG  | `public/bk-north-logo.svg`        |
| Inline UI logo    | `src/components/Logo.tsx`         |

---

## Environment variables & security

All configuration lives in `.env.local` (gitignored). `.env.example`
documents the available variables.

| Variable                | Visibility | Purpose                                          |
|-------------------------|------------|--------------------------------------------------|
| `VITE_CONTACT_ENDPOINT` | **Public** | URL the contact form POSTs JSON to. Falls back to `mailto:` if blank. |

**Rules:**

- Only variables prefixed `VITE_` are inlined into the client bundle.
  Anything else is server-side only.
- **Never** put API keys (mail providers, Turnstile/reCAPTCHA secrets,
  database URLs) into a `VITE_*` variable. They will be visible to
  anyone who views source.
- Sensitive secrets belong on your hosting provider's runtime env
  (Vercel/Netlify/Cloudflare Pages "Environment Variables" panel, or an
  edge function's secret store).
- Server-side endpoints should:
  - validate & sanitise all input again (the client validation in
    `ContactForm.tsx` is a UX layer, not a security boundary),
  - rate-limit by IP (e.g. Cloudflare Turnstile, Upstash Ratelimit),
  - reject the request if the `company` honeypot field is populated.

### Recommended response headers

Configure these at your host (Vercel/Netlify/Cloudflare Pages all support
a `_headers` or `vercel.json` file):

```
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self' https://YOUR_ENDPOINT; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

(Replace `YOUR_ENDPOINT` with whatever host `VITE_CONTACT_ENDPOINT` points at.)

### Dependency hygiene

- `npm audit` before each release; resolve high/critical findings.
- Keep `framer-motion`, `react`, `react-dom` and `vite` on supported majors.
- Pin transitive dependencies via `package-lock.json` (committed).

---

## Deployment

Any static host works. Recommended:

### Vercel
```bash
npm i -g vercel
vercel
```
Set `VITE_CONTACT_ENDPOINT` in the project's Environment Variables panel.

### Netlify
Build command: `npm run build`
Publish directory: `dist`
Add headers via `public/_headers` (Netlify auto-copies it).

### Cloudflare Pages
Build command: `npm run build`
Build output: `dist`
Wrangler / Pages Functions can host the contact-form backend on the same
domain — recommended for `connect-src 'self'` simplicity.

### Manual / VPS
```bash
npm run build
# serve /dist behind nginx with the headers above
```

---

## Editing copy & pricing

All marketing copy, navigation links, pricing and process steps live in
**`src/data/site.ts`**. Change a price, add a service feature, or swap a
phone number from one place.

```ts
contact: {
  phone: "07769933787",
  phoneHref: "tel:+447769933787",
  emails: ["oliverbrooks@bknorth.studio", "kevinkrasnichi@bknorth.studio"],
},
services: [
  { tier: "01", name: "Standard", price: "£300", hosting: "£79 / month", ... },
  { tier: "02", name: "Luxury",   price: "£500", hosting: "£129 / month", ... },
],
```

---

## Accessibility

- Skip-to-content link present.
- `prefers-reduced-motion` respected throughout — parallax & reveal
  motion is disabled, opacity remains.
- All interactive elements are focus-visible with a high-contrast ring.
- Form inputs have visible labels and `autoComplete` hints.
- Semantic landmarks: `<header>`, `<main>`, `<footer>`, section IDs.

---

## License

Proprietary — © B&K North.
