# DesignPlayground — Interactive Portfolio

A playful editorial portfolio built with React, Vite, Tailwind CSS, GSAP,
Framer Motion, Lenis, Matter.js, and p5.js.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

## Where to make common changes

| I want to... | Edit this file |
|---|---|
| Add / edit a project | `src/data/projects.js` |
| Change nav links, hero copy, about text, footer | `src/data/siteConfig.js` |
| Change colors | `src/styles/variables.css` (CSS custom properties) |
| Change section width / spacing | `src/config/layoutConfig.js` |
| Change animation speed / easing / stagger | `src/config/animationConfig.js` |
| Change physics (floating shapes on Home) | `src/config/physicsConfig.js` |
| Change breakpoints | `src/config/responsiveConfig.js` |

## Structure

```
src/
  components/   reusable UI + interaction pieces (Navbar, Hero, ProjectCard, ...)
  pages/        Home, About, Projects, ProjectDetail
  layouts/      MainLayout (nav + footer + cursor + scroll progress wrapper)
  animations/   reusable motion presets (fade, slide, scale, parallax, magnetic, ...)
  hooks/        useLenis, useMousePosition, useMediaQuery, useReducedMotion, ...
  data/         siteConfig.js, projects.js — all content lives here, not in components
  config/       centralized layout/animation/physics/breakpoint settings
  styles/       variables.css (design tokens) + globals.css
```

## Notes

- There is intentionally **no Contact page** — a contact email lives quietly
  in the footer.
- Project artwork currently uses generated accent-color gradients as
  placeholders (see `src/utils/images.js`). Swap in real photography by
  dropping files into `src/assets/images/` and pointing `thumbnail` /
  `images` fields in `src/data/projects.js` at them, then update
  `ProjectCard`, `ProjectGallery`, and the `VisualBlock` helper in
  `ProjectDetail.jsx` to use the `Image` component with your real sources.
- Heavy mouse-driven interactions (custom cursor, particle field, physics
  shapes, magnetic elements) are automatically disabled on touch devices and
  for users who prefer reduced motion.
- `Home`, `About`, `Projects`, and `ProjectDetail` are code-split with
  `React.lazy` so visitors don't download Home's p5.js/Matter.js weight when
  landing on another page.
