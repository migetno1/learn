# Learn

Learn is a static, visual teaching site for Australian general practice. It is intended for medical students, GP registrars, and practising GPs. Each topic is both a self-directed learning experience and a presentation-ready scrollytelling page.

## Current topics

- **Voluntary Assisted Dying** — placeholder page and research/script scaffolding
- Diabetes — planned
- Hypertension — planned
- Chronic Kidney Disease — planned

## Technology

- React and TypeScript
- Vite for development and static production builds
- Motion for purposeful scroll and interface animation
- Lucide for consistent vector icons
- Plain CSS design tokens for a lightweight, portable visual system

The production output is static and suitable for GitHub Pages. The build creates a real nested `index.html` for each published topic, so direct topic links work without a server. Dokku is only needed if future features require authentication, private content, a database, or server-side processing.

## Local development

```sh
npm install
npm run dev
```

Create and inspect a production build with:

```sh
npm run build
npm run preview
```

## Topic structure

Each topic lives under `topics/<topic-slug>/` and must include:

- `research.md` — sourced research, claim tracking, and working notes
- `script.md` — learning outcomes, narrative, and presentation script

Shared web components live in `src/`. Add the topic's page component there, register its route in `src/App.tsx`, and add its static route to `scripts/create-static-routes.mjs`.

## Content standards

- Prefer primary Australian legislation, government, regulator, and professional sources.
- Date all time-sensitive clinical and legal content.
- Separate national principles from jurisdiction-specific requirements.
- Do not publish clinical or legal claims that have not been sourced and reviewed.
- Avoid patient-identifiable information and realistic vignettes based on identifiable encounters.
- Include an educational-purpose notice on completed topic pages.

## Design

The design source of truth is [`design-system/MASTER.md`](design-system/MASTER.md). The visual direction is modern clinical editorial: calm, clear, human, and intentionally different from a generic medical website.

## Deployment

Run `npm run build` and publish the `dist/` directory with GitHub Pages. A GitHub Actions workflow can be added when the repository and preferred branch are confirmed.
