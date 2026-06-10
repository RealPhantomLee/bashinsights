# Common Sphere — Marketing Site

Single-page marketing site for Common Sphere, a government solutions partner.
Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, configured for
static export so it can be hosted on Cloudflare Pages.

## Stack

- Next.js 16 (App Router, Turbopack), static export (`output: "export"`)
- TypeScript, Tailwind CSS v4
- Fonts: Sora (display) + Inter (body) via `next/font/google`
- Brand palette: navy `#15324d`, sand `#f0ebe2`, teal `#2f7a70`

## Site config

All site-wide values (domain, contact email, tagline, description) live in
`lib/site.ts`. Update that file once the production domain is finalized —
it feeds `metadataBase`, Open Graph tags, the sitemap, robots.txt, and the
contact links.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (static export)

```bash
npm run build
```

Output is written to `out/`. This is the directory to deploy.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select this repo.
3. Build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy. Cloudflare will build and serve the `out/` directory on every push to `main`.
5. Once a domain is registered (Cloudflare Registrar or transferred in), go to
   the Pages project → **Custom domains** → add the domain. Cloudflare will
   create the required DNS records automatically if the domain's nameservers
   are already on Cloudflare.

### Direct upload (no git, alternative)

```bash
npm run build
npx wrangler pages deploy out --project-name=common-sphere-site
```

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create common-sphere-site --source=. --private --push
```
