---
name: generate-topic
description: Build or substantially revise a Learn topic from its plan, research and presentation script. Use when Codex needs to create the topic's self-directed scrollytelling guide, fullscreen presentation, route and landing-page entry, or when a topic needs a complete visual and browser-QA pass.
---

# Generate Learn Topic

Create a publication-conscious learning guide and live presentation from the topic authoring pack. Treat content provenance, visual direction and browser QA as required gates.

## 1. Load the authoring context

1. Read the repository `AGENTS.md` and `design-system/MASTER.md` completely.
2. Read `topics/<slug>/research.md`, `script.md` and any plan file completely.
3. Inspect the landing page, route setup, shared components and one strong existing topic in both modes.
4. Identify sourced claims, teaching interpretations, placeholders, excluded content, time-sensitive claims and outstanding reviews.
5. Browse only when required by current-information rules or when the source pack does not support a claim needed by the implementation.

Do not convert a placeholder, vendor statement or teaching synthesis into established evidence.

## 2. Make the design brief

Define the narrative question, continuous case, full-viewport hero, topic accent, chapter and scene treatments, motion idea, illustration/diagram plan and purpose of every proposed interaction before coding.

Default to visible content. Add a teaching interaction only when it improves learning more than static exposition. Fullscreen, navigation and source links are utilities rather than teaching interactions.

Use generated illustration for atmosphere, human relationships and metaphor. Keep clinical, legal, evidence and workflow diagrams deterministic and code-native.

## 3. Implement both modes

Build one coherent system rather than two unrelated pages.

### Learning guide

- Start with a full-viewport editorial hero.
- Use numbered chapters, a visible narrative progression and 60–72-character prose measure.
- Keep teaching copy at least 17px and labels at least 13px.
- Expose sources, evidence status, jurisdiction and review dates accessibly.
- Keep all placeholders visibly labelled.

### Presentation

- Provide a visible fullscreen button.
- Support Arrow keys, Page Up/Down and Space without requiring content clicks.
- Make every core scene fit one 1440×900 stage in normal and fullscreen modes.
- Keep teaching copy at least 18px and metadata at least 14px.
- Keep presenter notes in `script.md`, not on the slide.
- Change visual composition across consecutive scenes; avoid a repeated card-grid deck.
- Make every core scene understandable without presenter narration. A standalone scene must identify its context, explain the relevant workflow, reasoning or decision, and state the takeaway or boundary.
- Treat the script as delivery support rather than missing slide content. If a learner cannot explain what the scene means from the rendered scene alone, revise it before browser QA.
- Audit the full deck for narrative continuity: opening question → case context → defined workflow → appraisal or decision process → consequence → closing transfer.

### Motion and accessibility

- Animate transforms and opacity only. Entrance opacity may begin at any value.
- Give every presentation content unit an enter, rest and exit state tied to viewport passage: transform and fade in, become fully visible, then transform and fade out as the user scrolls past. Cover headings, copy, labels, citations, cards, diagrams and meaningful illustration rather than animating only the scene wrapper.
- Group elements only when they form one semantic reading unit. Never animate a wrapper and its text descendants at the same time.
- Make passed content exit in the direction of travel and make the lifecycle reverse coherently when the user scrolls back.
- Stagger entrances only to clarify reading order; remove or substantially shorten stagger on exits so adjacent scenes do not compete.
- Pair every reveal transform or scale change with an opacity transition on the same element; movement-only reveals are a failed motion gate.
- Give each animated property one owner. Do not layer a component animation and a CSS reveal on the same text element, because their timelines can leave residual movement after the fade has finished.
- Browser-QA each lifecycle below the viewport, during entry, at rest, during exit, after it has passed, and while reversing direction. While a transform is changing, opacity must also still be changing; checking declarations alone is insufficient.
- Require all text to finish every animation fully visible and at WCAG 2.2 AA contrast.
- Confirm snap and keyboard navigation land with the active scene in its fully visible rest state.
- When reduced motion is requested, render every essential element immediately in that fully visible, contrast-safe rest state and do not hide passed scenes.
- Implement `prefers-reduced-motion` with no loss of meaning.
- Maintain semantic headings, skip links, visible focus and 44px touch targets.

## 4. Integrate the topic

- Put page code in `src/pages/` and reusable UI in `src/components/`.
- Update `src/App.tsx`, `scripts/create-static-routes.mjs` and the landing-page topic data.
- Preserve unrelated work in a dirty tree.
- Ensure direct guide and presentation URLs load from the production build.

## 5. Run the quality gates

Read and follow [references/qa-gates.md](references/qa-gates.md).

1. Run `npm run build`.
2. Serve the production build.
3. Use the browser skill to inspect the landing page, every learning chapter and every presentation scene at 375, 768, 1024 and 1440px.
4. Inspect the presentation in normal and fullscreen modes.
5. Read each rendered scene without `script.md` and confirm its context, process and takeaway are explicit.
6. Fix failures, rebuild and repeat. Do not hand off known failures.

## 6. Handoff

Report routes and key files, content boundaries, illustration paths and prompts, build result, browser coverage, computed checks and any external review still required.
