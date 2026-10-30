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
├── index.html      # the entire website (structure + styles + scripts + images)
├── README.md
├── .nojekyll       # tells GitHub Pages to serve files as-is
└── .gitignore
```

## 🗺 Pages

| Page | Route | Content |
|---|---|---|
| Home | `#home` | Hero, marquee, "Now Showing" scene cards |
| About | `#about` | Origin story, values, CTA |
| Brothers | `#brothers` | Full profiles — skills, stats, interests, socials |
| Projects | `#projects` | Filterable project grid, featured case study |
| Skills | `#skills` | Skill breakdown, tools & technologies, stats |
| Contact | `#contact` | Contact details, message form, location |

## 📬 Contact

- **Email:** twobrothers.dev@gmail.com
- **Based in:** Mardan, Khyber Pakhtunkhwa, Pakistan — working with clients worldwide

---

## 📝 Roadmap (in progress)

Planned improvements before the public launch:

- [ ] Add `viewport`, `charset`, Open Graph and favicon meta tags
- [ ] Connect the contact form to a real email endpoint
- [ ] Replace placeholder social links with live profiles
- [ ] Real project screenshots + live demo links
- [ ] Move images out of base64 into optimised `.webp` files
- [ ] Split into separate pages for better SEO

---

© 2026 TwoBrothers. All rights reserved.
