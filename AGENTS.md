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
- Start each published topic with a full-viewport editorial hero that establishes the human story and topic accent.
- Give every interaction a stated teaching purpose. Default to static exposition when clicking would only reveal content that can be shown clearly.
- Treat fullscreen, keyboard navigation and visible progress as presentation utilities rather than teaching interactions.
- Use illustration and code-native diagrams to create visual rhythm. Do not leave consecutive presentation scenes as unart-directed text-and-card layouts.
- Text may begin at any opacity during an entrance animation. At rest, and whenever reduced motion is requested, all essential text must be fully visible and meet WCAG AA contrast.

## Presentation requirements

- Provide a visible fullscreen button and preserve Escape/browser fullscreen exit behaviour.
- Support Arrow keys, Page Up/Down and Space for previous/next navigation without requiring content clicks.
- At 1440×900, each core scene must fit one stage in both normal and fullscreen modes unless the script explicitly marks it as a scrollable appendix.
- Keep presentation teaching copy at least 18px and metadata at least 14px.
- Keep the complete presentation understandable when animation is disabled.

## Verification

Before handing off a visual change:

1. Run `npm run build`.
2. Open the production build in a browser and inspect the landing page, every changed learning chapter and every presentation scene at 375, 768, 1024 and 1440px.
3. Inspect both the normal presentation and fullscreen presentation; do not limit review to the first viewport.
4. Verify keyboard focus, keyboard scene navigation and reduced-motion behaviour.
5. Check computed font sizes, horizontal overflow, scene height and the number of buttons/details/form controls remaining.
6. Check WCAG AA contrast on every dark surface, callout, metadata label and animation start/end state.
7. Confirm direct nested topic URLs load from the production build.
8. Confirm no placeholder claim is presented as established fact.
9. Report the browser-review evidence in the handoff, including any intentional exceptions.
