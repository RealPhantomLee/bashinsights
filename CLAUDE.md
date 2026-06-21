# BASH Insights LLC — Government Contracting Website

**Business:** Business Analytics & Strategic Hub LLC  
**Domain:** bashinsights.com (via Cloudflare)  
**Path:** `/home/kageki/Projects/bashinsights.com/`  

---

## Tech Stack

- **Framework:** Next.js 16 (TypeScript)
- **Styling:** Tailwind CSS v4
- **UI Components:** React 19
- **Build:** TypeScript, PostCSS
- **Hosting:** Docker Compose on cyberdeck, port 3005

---

## Project Status

- ✅ Next.js app fully built (`.next/` directory present)
- ✅ Dependencies installed (`node_modules/`)
- ✅ Ready to deploy: `npm start` runs production server
- ✅ Package name updated to "bashinsights"

---

## Deployment (Cyberdeck)

### Docker Compose Entry

Add to cyberdeck's `docker-compose.yml`:

```yaml
bashinsights:
  build:
    context: /home/kageki/Projects/bashinsights.com
    dockerfile: Dockerfile
  ports:
    - "3005:3000"
  environment:
    NEXT_PUBLIC_DOMAIN: bashinsights.com
    NODE_ENV: production
  restart: always
  networks:
    - default
```

### Environment Configuration

Create `.env.production`:

```
NEXT_PUBLIC_DOMAIN=bashinsights.com
NODE_ENV=production
```

### Domain Setup (Cloudflare)

1. **DNS A Record:** Point `bashinsights.com` A record to cyberdeck's Tailscale IP (100.93.114.10 or use CNAME to `cyberdeck.tail3ab12c.ts.net`)
2. **HTTPS:** Cloudflare auto-provisions SSL for bashinsights.com
3. **Test:** `curl https://bashinsights.com` should return Next.js home page

---

## GitHub Repository

- **Repo:** `https://github.com/realphantomlee/bashinsights.git`
- **Branch:** main
- **.gitignore:** Ignores `node_modules/`, `.next/`, `.env.local`, `.env.production`, `.vercel/`
- **Note:** Common Sphere branding renamed to BASH Insights (Business Analytics & Strategic Hub LLC)

---

## Running Locally

```bash
cd /home/kageki/Projects/bashinsights.com
npm install          # Install dependencies (optional, already done)
npm run build        # Build for production (optional, .next/ exists)
npm start            # Run production server on port 3000 (or docker)
```

---

## Critical Files

- `package.json` — Dependencies, scripts, branding (name: "bashinsights")
- `next.config.ts` — Next.js configuration (TypeScript)
- `app/` — Next.js App Router pages
- `components/` — React components
- `public/` — Static assets (logo, favicon, images)
- `lib/` — Utility functions
- `brand-intel/` — Business intelligence content

---

## Known Notes

- Dockerfile must be created if deploying to Docker Compose (not currently present)
- Contact form currently a stub — wire to SMTP (`contact@phantomcybersolutions.com`) for production
- No authentication/login — public-facing site
