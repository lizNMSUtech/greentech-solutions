# GreenTech Solutions

A fully responsive, accessible, multi-page website built for the **GreenTech Solutions** client profile — the Module 15 Final Project for ICT-280, Introduction to Web Development, Spring 2026 at NMSU.

**Live site:** https://liznmsutech.github.io/greentech-solutions/

---

## Project description

GreenTech Solutions is a fictional eco-tech startup that helps small and mid-sized businesses reduce their carbon footprint through energy-efficient hardware, smart recycling systems, and carbon tracking software. This website introduces the company, presents its product lineup with interactive filtering, provides educational sustainability resources, and allows visitors to contact the team — all while meeting WCAG accessibility standards and working seamlessly across devices.

---

## Live site

**https://liznmsutech.github.io/greentech-solutions/**

| Page | URL |
|---|---|
| Homepage | `/` |
| About | `/about.html` |
| Products & Services | `/products.html` |
| Resources / Blog | `/blog.html` |
| Contact | `/contact.html` |

---

## Features

### HTML5
- Semantic landmark elements throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Additional semantic elements: `<address>`, `<time>`, `<ol>`, headings hierarchy (h1–h3)
- `aria-*` attributes for interactive components (filter buttons, live regions, form fields)
- Skip-to-content link on every page for keyboard users
- `novalidate` on forms with custom JS validation so error messages stay under developer control

### CSS3
- Single external stylesheet (`css/styles.css`) shared across all pages
- CSS custom properties (design tokens) for the full color palette, typography, spacing scale, and shadows — change one variable, the whole site updates
- Flexbox and CSS Grid for layout (product grid, contact two-column, newsletter card, timeline)
- `clamp()` for fluid type scaling without breakpoint jumps
- `prefers-reduced-motion` media query respects user accessibility preferences
- Bootstrap 5.3.3 grid and navbar loaded via CDN; all visual design is custom

### JavaScript
- **Products filter + live search** (`js/products.js`): category filter buttons and a real-time search input work together (AND logic) to show/hide product cards dynamically; results count updates with `aria-live="polite"` so screen readers announce changes; empty state with reset button appears when no products match
- **Contact form validation** (`js/contact.js`): real-time inline validation on all four required fields (name, email, subject, message) with specific error messages; errors clear as the user corrects them; focus jumps to the first invalid field on submit; success state replaces the form after submission
- **Newsletter validation**: email format validated before the subscribe button responds
- **Site-wide nav** (`js/main.js`): auto-highlights the current page link based on URL; collapses mobile menu after link click
- All JS is vanilla ES6, no frameworks, wrapped in IIFEs

### Mobile responsiveness
- Fully responsive from 320px to 1920px+
- Tested at iPhone 14 Pro Max (430px), Samsung Galaxy S20 Ultra (412px), and iPad Air (820px)
- Lighthouse mobile scores: **97 Performance / 95–96 Accessibility / 100 Best Practices / 100 SEO** across all pages
- Bootstrap navbar collapses to hamburger at `lg` breakpoint
- Product grid uses `auto-fill` with `minmax(280px, 1fr)` — adapts from 1 to 4 columns
- Timeline collapses from alternating two-column to single left-aligned column on mobile
- Contact form switches from two-column to single-column below 900px

### Web accessibility (WCAG)
- `lang="en"` on every page's `<html>` element
- Skip-to-content link on every page (visible on keyboard focus)
- All images and decorative icons use `alt` text or `aria-hidden="true"` appropriately
- All form inputs have associated `<label>` elements or `aria-label`
- Interactive elements (buttons, links, inputs) have visible focus indicators (`outline: 3px solid`)
- Color contrast meets WCAG AA on all text/background combinations
- Filter buttons use `aria-pressed` to communicate toggle state
- Live search result count uses `aria-live="polite"` for screen reader announcements
- Form error messages use `role="alert"` and are linked to their inputs via `aria-describedby`
- Heading hierarchy is consistent across all pages (no skipped levels)
- `prefers-reduced-motion` disables transitions and animations for users who prefer it

### GitHub Pages
Site is deployed from the `main` branch root at:
**https://liznmsutech.github.io/greentech-solutions/**

---

## How to run locally

No build step required. Clone or download and open `index.html` directly in any modern browser.

```bash
git clone https://github.com/lizNMSUtech/greentech-solutions.git
cd greentech-solutions
# macOS
open index.html
# Windows
start index.html
```

An internet connection is required for Bootstrap 5 and Google Fonts to load from their CDNs. The site is fully functional offline except for font rendering (system fallbacks apply).

---

## Technologies used

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Semantic page structure |
| CSS3 | — | Custom design system, layout, responsiveness |
| JavaScript (ES6) | — | Filter/search, form validation, nav behavior |
| Bootstrap | 5.3.3 | Responsive grid, navbar (CDN) |
| Google Fonts | — | Fraunces (display) + Manrope (body) (CDN) |
| GitHub Pages | — | Static site hosting |

---

## Project structure

```
greentech-solutions/
├── index.html          # Homepage — hero, features, mission, CTA
├── about.html          # About — story, team (4 members), milestones timeline
├── products.html       # Products — 8 cards with category filter + live search
├── blog.html           # Resources — featured article + 6-article grid + topic browse
├── contact.html        # Contact — validated form, company info, newsletter signup
├── css/
│   └── styles.css      # Full design system + all component styles
├── js/
│   ├── main.js         # Site-wide: active nav link, mobile menu collapse
│   ├── products.js     # Products page: filter + search + empty state
│   └── contact.js      # Contact page: form validation + newsletter validation
├── images/             # Image assets folder
├── .gitignore
└── README.md
```

---

## Lighthouse scores (mobile, Incognito)

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Homepage | 97 | 95 | 100 | 100 |
| Products | 97 | 96 | 100 | 100 |
| Resources | 97 | 95 | 100 | 100 |

---

## Author

**Lisvaldo Liz**
ICT-280 — Introduction to Web Development, Spring 2026
New Mexico State University
