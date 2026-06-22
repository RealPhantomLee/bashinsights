# BASH Insights — Government Contracting Website

Single-page website for Business Analytics & Strategic Hub Insights (BASH Insights),
a government solutions partner. Built with Next.js (App Router) + TypeScript + Tailwind CSS v4,
configured for static export served via Docker/nginx on a Raspberry Pi 5.

## Stack

- Next.js 16 (App Router, Turbopack), static export (`output: "export"`)
- TypeScript, Tailwind CSS v4
- Fonts: Sora (display) + Inter (body) via `next/font/google`
- Design system: electric cyan `#06B6D4` accent, dual dark/light theme

## Site config

All site-wide values (domain, contact email, tagline, description) live in
`lib/site.ts`. It feeds `metadataBase`, Open Graph tags, the sitemap, robots.txt,
and the contact links.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (Docker)

```bash
docker compose -f docker-compose.bashinsights.yml up --build -d
```

Site is served on port 3005 via nginx:alpine. Cloudflare Tunnel proxies
`bashinsights.com` → `localhost:3005`.

## Static export (manual)

```bash
npm run build
```

Output is written to `out/`.

## Brand intelligence

See `brand-intel/naics-codes.md` for NAICS code reference and SAM.gov
registration guidance.
