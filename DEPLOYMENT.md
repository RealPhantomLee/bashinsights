# Deployment Pipeline — BASH Insights Site

Status: site builds cleanly via Docker/nginx on port 3005. Cloudflare Tunnel
routes `bashinsights.com` → `localhost:3005`.
GitHub: [github.com/RealPhantomLee/bashinsights](https://github.com/RealPhantomLee/bashinsights)

## 0. Interim hosting on Vercel (until domain is chosen)

Easiest path — Vercel's free tier auto-deploys from GitHub:

1. Go to https://vercel.com/new (log in with the `RealPhantomLee` GitHub account).
2. Import the `common-sphere-site` repo.
3. Vercel auto-detects Next.js — default build settings work as-is
   (the `output: "export"` config is also fully supported).
4. Deploy. You'll get a free `*.vercel.app` URL, and every push to `main`
   auto-redeploys.
5. Once the domain is registered, it can be attached in the Vercel project's
   **Settings → Domains** tab, or the project can be migrated to Cloudflare
   Pages later using the steps below.

CLI alternative (run from the project root):

```bash
npx vercel login   # interactive browser auth
npx vercel link    # link to a new or existing Vercel project
npx vercel --prod  # deploy
```

## 1. Register a domain (Cloudflare Registrar)

`commonsphere.com/.org/.net/.io` are already registered by other parties.
Available alternatives (checked 2026-06-10):

- `commonspheregroup.com` (recommended)
- `commonspherepartners.com`
- `commonsphere.us`
- `commonsphere.co`

Steps:
1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com).
2. **Domain Registration → Register Domains**, search for the chosen name.
3. Cloudflare Registrar sells at-cost (no markup) — typically $9–12/yr for
   `.com`, similar for `.us`, slightly more for `.co`.
4. Complete registration. The domain's nameservers will already be on
   Cloudflare, which simplifies step 4 below.

## 2. Create the Cloudflare Pages project

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize Cloudflare's GitHub App for the `RealPhantomLee/common-sphere-site` repo.
3. Build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy. Every push to `main` triggers a new build/deploy automatically.
   Pull requests get preview deployments on a `*.pages.dev` URL.

## 3. Point the domain at Pages

1. In the Pages project → **Custom domains → Set up a custom domain**.
2. Enter the registered domain (e.g. `commonspheregroup.com`) and `www.<domain>`.
3. If the domain's nameservers are already on Cloudflare (true if registered
   via Cloudflare Registrar), the required DNS (CNAME/A + AAAA) records are
   created automatically — no manual DNS edits needed.
4. Wait for SSL certificate provisioning (usually a few minutes).

## 4. Finalize site config

Once the domain is live, update `lib/site.ts`:

```ts
export const SITE_URL = "https://www.<your-domain>";
export const CONTACT_EMAIL = "hello@<your-domain>";
```

Commit and push — Pages will redeploy with the corrected metadata, sitemap,
robots.txt, and contact links.

## 5. Sanity check

After deploy, verify:
- `https://<domain>/` loads, no console errors
- `https://<domain>/robots.txt` and `/sitemap.xml` resolve
- All nav anchors (`#mission`, `#solutions`, `#why-us`, `#contact`) scroll correctly
- A nonexistent path (e.g. `/foo`) shows the custom 404 page
- Fonts (Sora/Inter) and favicon load
- Mobile hamburger menu opens/closes

## Alternative: direct upload (no domain yet, instant preview)

To get a live `*.pages.dev` URL today without waiting on domain registration:

```bash
npm run build
npx wrangler login
npx wrangler pages deploy out --project-name=common-sphere-site
```

This creates the Pages project and deploys immediately to a free
`common-sphere-site.pages.dev` subdomain. The custom domain (step 3) can be
attached to this same project later.
