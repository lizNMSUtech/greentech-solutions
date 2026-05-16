# GreenTech Solutions — Student Project (ICT‑280)

For my ICT-280 final at NMSU (Spring 2026), I built a responsive, accessible, multi-page site for a fictional eco-tech startup called GreenTech Solutions. The project covered product pages, forms, accessibility features, and basic JavaScript interactivity.

**Live site:** https://liznmsutech.github.io/greentech-solutions/

---

## Project overview

GreenTech Solutions is a made‑up company that helps small and mid‑sized businesses reduce their carbon footprint. Building this site gave me a chance to combine everything we learned this semester — semantic HTML, CSS layout systems, responsive design, accessibility, and vanilla JavaScript.

The site includes:

- A homepage with a hero section and company overview  
- An About page with a timeline and team section  
- A Products page with interactive filtering and live search  
- A Resources/Blog page  
- A Contact page with custom form validation  

This was my first time building a multi‑page site from scratch, so I focused a lot on keeping the code organized and making sure everything worked well on mobile.

---

## Pages

| Page | URL |
|------|------|
| Homepage | `/` |
| About | `/about.html` |
| Products | `/products.html` |
| Resources / Blog | `/blog.html` |
| Contact | `/contact.html` |

---

## What I built and what I learned

### HTML5
I tried to use semantic elements correctly — things like `<header>`, `<main>`, `<section>`, and `<article>`. I also added accessibility features such as:

- Skip‑to‑content links  
- `aria-*` attributes for the product filters and form errors  
- Proper labels and alt text  

This was good practice in writing HTML that isn’t just “div soup.”

### CSS3
All pages share one stylesheet (`css/styles.css`). I experimented with:

- CSS custom properties for colors, spacing, and typography  
- Flexbox and Grid for layout  
- `clamp()` for fluid type  
- A reduced‑motion mode using `prefers-reduced-motion`  

I used Bootstrap only for the grid and navbar, but the visual design is my own.

### JavaScript
This was the biggest learning section for me. I wrote three small scripts:

- **Product filtering + live search**  
  The filters and search box work together to show/hide product cards. I also added an empty‑state message and an `aria-live` region so screen readers announce the result count.

- **Contact form validation**  
  I wrote custom validation for name, email, subject, and message. Errors show in real time and clear as the user fixes them.

- **Navigation behavior**  
  The current page link highlights automatically, and the mobile menu closes after clicking a link.

All JS is vanilla ES6 wrapped in IIFEs — no frameworks.

### Responsiveness
I tested the layout at several breakpoints (iPhone 14 Pro Max, Samsung S20 Ultra, iPad Air). The product grid, timeline, and contact form all adapt to smaller screens.

### Accessibility
I followed WCAG guidelines as best as I could for a student project:

- Proper heading hierarchy  
- Visible focus outlines  
- High color contrast  
- `aria-pressed` for filter buttons  
- `role="alert"` for form errors  

### Lighthouse scores
I was happy with the results — most pages scored around:

- **97 Performance**  
- **95–96 Accessibility**  
- **100 Best Practices**  
- **100 SEO**

---

## Running the project locally

No build tools needed — just open `index.html` in a browser.

```bash
git clone https://github.com/lizNMSUtech/greentech-solutions.git
cd greentech-solutions

# macOS
open index.html

# Windows
start index.html
```

Bootstrap and Google Fonts load from CDNs, so the site works offline but with fallback fonts.

---

## Tech stack

| Technology | Purpose |
|-----------|----------|
| HTML5 | Structure and semantics |
| CSS3 | Layout, design system, responsiveness |
| JavaScript (ES6) | Filtering, search, form validation, nav behavior |
| Bootstrap 5.3.3 | Grid + navbar |
| Google Fonts | Fraunces + Manrope |
| GitHub Pages | Hosting |

---

## Project structure

```
greentech-solutions/
├── index.html
├── about.html
├── products.html
├── blog.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── products.js
│   └── contact.js
├── images/
└── README.md
```

---

## Author
**Lisvaldo Liz**  
ICT‑280 — Introduction to Web Development  
New Mexico State University
