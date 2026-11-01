# TwoBrothers — Creative Studio Portfolio

> **Two Brothers. One Vision.** — Syed Luqman (Web Developer) × Fawad Khan (UI/UX Designer)

A cinematic, single-file portfolio website built with pure HTML, CSS and JavaScript, powered by a Three.js WebGL background scene.

---

## ✨ Highlights

- **Cinematic dark theme** — blue (Syed Luqman) × orange (Fawad Khan) dual identity
- **Live 3D background** — floating crystal shards, distant monoliths and drifting embers (Three.js r128)
- **6 pages, hash-routed** — Home · About · Brothers · Projects · Skills · Contact
- **Motion design** — intro sequence, letterbox bars, film grain, page-switch transitions, scroll reveals, 3D tilt cards
- **Interactive projects section** — category filters + grid/list view toggle
- **Mobile ready** — burger navigation, safe-area insets for notched phones, reduced-motion support
- **Zero build step** — one file, no dependencies to install, host it anywhere

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Markup / Styling | HTML5, modern CSS (custom properties, grid, clamp) |
| Logic | Vanilla JavaScript (ES5-safe, no framework) |
| 3D | [Three.js](https://threejs.org) r128 via CDN |
| Type | Montserrat · Outfit · Mr Dafoe (Google Fonts) |
| Images | Embedded as base64 JPEG |

## 🚀 Run Locally

No installation needed — just open the file:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or serve it properly (recommended, so relative paths behave identically to production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploy with GitHub Pages

1. Push this repository to GitHub (see commands below).
2. Go to **Settings → Pages**.
3. Under **Source**, choose `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`.
4. Save. The site goes live within ~1 minute at:
   `https://<your-username>.github.io/<repo-name>/`

Any other static host works too — Netlify, Vercel, Cloudflare Pages — just drag the folder in.

## 📁 Structure

```
.
├── index.html        # Home
├── about.html        # About
├── brothers.html     # The brothers
├── projects.html     # Projects
├── skills.html       # Skills & tools
├── contact.html      # Contact + form
├── assets/
│   ├── style.css     # shared design system (one stylesheet, all pages)
│   └── img/          # logo, wordmark, favicon and photos as real files
├── README.md
├── .nojekyll
└── .gitignore
```

Each page is a real URL — clicking a nav link loads that page, and scrolling
never reveals the next one. Shared CSS/JS lives in `assets/`, so photos and
styles are cached once across the whole site.

## 🗺 Pages

| Page | URL | Content |
|---|---|---|
| Home | `/` | Hero, marquee, "Now Showing" scene cards |
| About | `/about.html` | Origin story, values, CTA |
| Brothers | `/brothers.html` | Full profiles — skills, stats, interests, socials |
| Projects | `/projects.html` | Filterable project grid, featured case study |
| Skills | `/skills.html` | Skill breakdown, tools & technologies, stats |
| Contact | `/contact.html` | Contact details, message form, location |

## 🎬 Motion

GSAP + ScrollTrigger + Lenis drive: smooth scroll, cursor dot & label ring,
mouse spotlight, scroll-progress bar, intro counter, staggered title reveals,
text scramble, magnetic buttons, 3D tilt & glare, batched scroll reveals,
animated skill bars, number counters, velocity-reactive marquee, elastic pops
and hero parallax. Everything degrades gracefully — without the libraries or
with `prefers-reduced-motion` the site still works and stays visible.

## 📬 Contact

- **Email:** twobrothers.dev@gmail.com
- **Based in:** Mardan, Khyber Pakhtunkhwa, Pakistan — working with clients worldwide

---

## 📝 Roadmap (in progress)

Planned improvements before the public launch:

- [x] Add `viewport`, `charset`, Open Graph and favicon meta tags
- [ ] Connect the contact form to a real email endpoint
- [ ] Replace placeholder social links with live profiles
- [ ] Real project screenshots + live demo links
- [x] Move images out of base64 into separate files (now in `assets/img/`)
- [x] Split into separate pages for better SEO

---

© 2026 TwoBrothers. All rights reserved.
