# Imam Fajri — Personal Portfolio

Personal portfolio website of **Imam Fajri**, an Information Systems undergraduate at Universitas Indonesia with hands-on experience as a full stack and backend engineer. Proficient in Python (Django), Golang, and modern JavaScript frameworks (Next.js, Nuxt.js), with experience in PostgreSQL, Supabase, and Docker-based deployments. Twice recipient of P2MW funding, KMI Expo finalist, and hackathon finalist across multiple competitions.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Router | Vue Router 4 |
| Build Tool | Vite 6 |
| Styling | CSS Custom Properties + Tailwind CSS 3 |
| Font | Sofia Sans (Google Fonts) |
| Deployment | Vercel |

## Features

- Warm editorial design with a Mastercard-inspired color palette
- Dark / light mode toggle with no flash-of-wrong-theme on reload
- Custom animated cursor (dot + trailing ring) for pointer devices
- Canvas particle background with depth-based parallax in the hero section
- 3D perspective tilt effect on mouse move
- Scroll-triggered reveal animations via IntersectionObserver
- Fully responsive — mobile-first layout adjustments at 767px
- SPA routing via `vercel.json` rewrite rule

## Project Structure

```
src/
├── assets/styles/      # CSS variables & global styles
├── components/
│   ├── layout/         # NavBar, FooterSection
│   ├── sections/       # Hero, About, Experience, Projects, Skills, Leadership, Contact
│   └── ui/             # CursorGlow, EyebrowLabel, PrimaryButton, SecondaryButton, SkillPill
├── composables/        # useTheme, useScrollReveal
├── data/               # resume.js — single source of truth for all content
├── router/             # Vue Router config
└── views/              # HomeView
```

## Getting Started

```bash
npm install
npm run dev       # development server at localhost:5173
npm run build     # production build → dist/
```

## Deployment

Deployed on Vercel. Push to the connected GitHub repository to trigger an automatic deployment. Build settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`
