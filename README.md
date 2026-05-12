# GreenTech Solutions

A multi-page responsive website built for the **GreenTech Solutions** client profile — the Module 15 Final Project for ICT-280 at NMSU, Spring 2026.

> 🚧 **Status:** in progress. Homepage and About are complete; Products, Resources, and Contact are next.

**Live site:** https://liznmsutech.github.io/greentech-solutions/

---

## About the project

GreenTech Solutions is a fictional eco-tech startup serving small and mid-sized businesses with energy-efficient devices, smart recycling systems, and carbon tracking software. This site introduces the company, walks through their product lineup, and provides educational resources about sustainability — all while meeting WCAG accessibility guidelines and responsive design standards.

## Project structure

```
greentech-solutions/
├── index.html        # Homepage
├── about.html        # About / team / milestones
├── products.html     # Products & services (coming)
├── blog.html         # Resources / articles (coming)
├── contact.html      # Contact form + newsletter (coming)
├── css/
│   └── styles.css    # Design tokens + all component styles
├── js/
│   └── main.js       # Site-wide JS (nav state, mobile menu)
└── images/           # Site imagery
```

## Technologies

- **HTML5** — semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<time>`, `<address>`, lists, headings)
- **CSS3** — custom properties (design tokens), Flexbox, Grid, media queries
- **JavaScript** — vanilla ES6, no framework
- **Bootstrap 5.3.3** — responsive grid + navbar (loaded via CDN)
- **Google Fonts** — Fraunces (display) + Manrope (body)

## Features

- Fully responsive — single layout adapts cleanly from 320px to 1920px+
- WCAG-conscious — skip-to-content link, semantic landmarks, ARIA labeling, visible focus rings, color contrast meeting AA
- Respects `prefers-reduced-motion`
- Single-source design system: change one CSS variable, the whole site updates

## Running locally

No build step. Clone or download the repo and open `index.html` in any modern browser.

```bash
git clone https://github.com/lizNMSUtech/greentech-solutions.git
cd greentech-solutions
open index.html   # macOS
# or just double-click the file
```

## Author

**Lisvaldo Liz** — ICT-280, Introduction to Web Development, Spring 2026
