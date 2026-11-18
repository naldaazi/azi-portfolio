# Azi Nalda — Portfolio

Executive Assistant & Operations Specialist portfolio. Next.js 15 (App Router) + Tailwind CSS v4, deployed on Vercel.

---

## 1. Run it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Local preview with hot reload |
| `npm run build` | Production build (what Vercel runs) |
| `npm run start` | Serve the production build |

> **Windows note:** if `npm` is blocked by an execution policy, use `npm.cmd` instead.
> If a build fails with `EINVAL ... readlink`, delete the `.next` folder and rebuild —
> this project lives inside OneDrive, which occasionally locks build files.

---

## 2. Edit your content

**Everything you'd want to change is in one file: [`lib/content.ts`](lib/content.ts).**

| What | Where |
| --- | --- |
| Name, handle, email, booking link | `site.name`, `site.handle`, `site.email`, `site.bookingUrl` |
| Headline | `site.headline` (`accent: true` colours that line) |
| Intro paragraph | `site.lede` |
| Hero animation words | `site.introWords` |
| Social links | `site.socials` |
| Stats | `site.stats` |
| Pain points | `site.pain` |
| About copy | `site.about.paragraphs` |
| Method steps | `site.approach` |
| Services | `site.services` |
| Projects (cards + detail pages) | `site.projects` |
| Testimonials | `site.testimonials` |
| Tools | `site.tools` |

Editing a project's `slug` automatically creates/removes its page at `/work/<slug>`.

**Photo:** replace `public/portrait.jpg` with your own (recommended 4:5 portrait, ~1200×1500).

---

## 3. Colours

All colour tokens live at the top of [`app/globals.css`](app/globals.css) under `:root`.

Current palette — **Sage & Bone**:

| Token | Hex | Used for |
| --- | --- | --- |
| `--paper` | `#0B1310` | Page background |
| `--panel-top` / `--panel-bottom` | `#111D18` / `#080F0C` | Content panel |
| `--text` | `#ECEFE7` | Headings & body |
| `--text-dim` | 68% cream | Secondary text |
| `--text-faint` | 56% cream | Labels & meta (WCAG AA) |
| `--accent` | `#8FB89A` | Buttons, highlights |
| `--accent-soft` | `#BBDCC2` | Accent text on dark |
| `--on-accent` | `#08120C` | Text on accent buttons |

Changing `--accent` and `--accent-soft` updates the whole site.

---

## 4. Deploy to Vercel

You need two free accounts: **GitHub** and **Vercel**. Vercel signs you in *with* GitHub, so do GitHub first.

### Step 1 — Create the GitHub repository

1. Go to <https://github.com/new>
2. Repository name: `azi-portfolio` (or anything)
3. **Private** is fine (Vercel can read private repos)
4. Do **not** tick "Add a README" — this project already has one
5. Click **Create repository**

### Step 2 — Push this folder

In a terminal at the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/azi-portfolio.git
git push -u origin main
```

GitHub will ask you to authenticate — a browser window opens the first time.

### Step 3 — Import into Vercel

1. Go to <https://vercel.com/signup> and choose **Continue with GitHub**
2. Click **Add New… → Project**
3. Find `azi-portfolio` in the list and click **Import**
4. Vercel auto-detects Next.js. **Change nothing.** No environment variables needed.
5. Click **Deploy**

The build takes about a minute. You'll get a live URL like
`https://azi-portfolio.vercel.app`.

### Step 4 — Future updates

Every push to `main` redeploys automatically:

```bash
git add .
git commit -m "Update pricing section"
git push
```

Nothing else to do. Vercel rebuilds and swaps the live site in ~60 seconds.

---

## 5. Custom domain (optional)

1. Buy a domain (Namecheap, Cloudflare, Porkbun — roughly $10–15/year)
2. In Vercel: **Project → Settings → Domains → Add**
3. Enter `azinalda.com` and follow the DNS instructions
4. Vercel issues the HTTPS certificate automatically

`.vercel.app` URLs are free forever; a custom domain just looks more credible on a résumé.

---

## 6. Pages

| Route | Contents |
| --- | --- |
| `/` | Bento dashboard — portrait, projects, toolkit, focus, services, testimonials |
| `/projects` | All four case studies |
| `/projects/[slug]` | Individual case study (problem → approach → result → metrics) |
| `/services` | Pain points + six services |
| `/testimonials` | Client quotes |
| `/about` | Bio, stats, method, tools |
| `/contact` | Booking link + email |

Adding a project to `site.projects` in `lib/content.ts` automatically creates its page at `/projects/<slug>`.

## 7. What's built in

- Light cream + lavender dashboard, with a **light/dark toggle** in the sidebar (persisted)
- Left sidebar: photo, verified name, handle, socials, icon nav with active state, theme + accessibility controls
- Bento grid: portrait card, projects, toolkit, focus, services, testimonials
- Auto-scrolling "Daily drivers" marquee with real brand logos (pauses on hover)
- One-time boot animation with an animated workflow diagram (skippable, once per session)
- Staggered card entrance on load, lift-on-hover, all respecting `prefers-reduced-motion`
- Accessibility panel: text size (A / A+ / A++), high contrast, reduce motion, underline links — persisted to `localStorage`
- Skip link, visible focus rings, 44px touch targets on coarse pointers, WCAG AA text contrast
- `next/font` for zero-layout-shift typography, `next/image` for optimised images
- Fully static prerendering — no server needed
