# Project guidance for coding agents

## Purpose

Build and maintain **Learn**, a static Australian general-practice education website for medical students, GP registrars, and GPs. Every topic must work as both a self-directed scrollytelling lesson and a live presentation.

## Before changing a topic

1. Read `design-system/MASTER.md`.
2. Read the topic's `research.md` and `script.md` in full.
3. Preserve the distinction between researched content, teaching interpretation, and placeholders.
4. Check whether the requested change affects a time-sensitive clinical or legal claim.

## Non-negotiable content rules

- Never invent citations, legislation, clinical guidance, statistics, or jurisdictional rules.
- Prefer current primary and authoritative Australian sources.
- Include jurisdiction and “current as at” dates for VAD and other time-sensitive law or policy.
- Keep educational content clearly separate from individual medical or legal advice.
- Do not add patient-identifiable information.
- Use Australian English.

## Topic convention

Every `topics/<slug>/` directory contains:

- `research.md` for source collection, claim tracking, and research notes;
- `script.md` for learning outcomes, narrative sequence, and spoken presentation notes.

Topic page code belongs in `src/pages/` and reusable UI belongs in `src/components/`. Update both `src/App.tsx` and `scripts/create-static-routes.mjs` when publishing a new route.

## Design and interaction

- Follow `design-system/MASTER.md`; use semantic CSS variables rather than ad hoc colour values.
- Keep motion purposeful and support reduced-motion preferences.
- Maintain WCAG 2.2 AA contrast, visible keyboard focus, semantic HTML, and 44px touch targets.
- Keep prose readable at 60–72 characters per line.
- Use Lucide icons rather than emoji or improvised iconography.
- Generated illustration may support atmosphere; clinical diagrams must remain deterministic and code-native.

## Verification

Before handing off a visual change:

1. Run `npm run build`.
2. Check the landing page and every changed topic at mobile and desktop widths.
3. Verify keyboard focus and reduced-motion behaviour.
4. Confirm direct nested topic URLs load from the production build.
5. Confirm no placeholder claim is presented as established fact.
