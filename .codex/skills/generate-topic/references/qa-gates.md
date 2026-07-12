# Topic QA gates

## Content

- Every factual claim maps to the research pack or a newly verified authoritative source.
- Product pages describe functionality only and are not presented as evidence of benefit.
- Placeholders, presenter experience, teaching interpretation and possible futures remain labelled.
- Time-sensitive claims show jurisdiction and review date.
- No patient-identifiable information is present or transmitted.

## Browser inspection

Inspect every learning chapter and presentation scene, not only the first viewport.

For each core presentation scene, read only the rendered scene without consulting the speaker script. It must identify its context, explain the relevant workflow, reasoning or decision, and state the takeaway or boundary. Treat a missing element as a failed gate; narration may enrich a scene but must not supply information required to understand it.

At 375, 768, 1024 and 1440px verify no horizontal overflow or clipping; guide teaching copy is at least 17px; presentation teaching copy is at least 18px; presentation metadata is at least 14px; prose remains readable; dark surfaces, callouts and metadata meet WCAG AA in their final state; every entrance animation finishes with text fully visible; and generated art crops intentionally without unwanted text or identifiers.

At 1440×900 verify each core scene has `scrollHeight <= stage height` in both normal and fullscreen modes.

## Interaction and motion

- Count buttons, details, tabs and form controls and justify each teaching interaction.
- Verify fullscreen entry, browser/Escape exit and Arrow/Page/Space navigation.
- Verify keyboard focus for every control.
- Verify every presentation content unit transforms and fades through below, entering, rest, exiting and passed states; reverse scroll and confirm the lifecycle reverses without a jump.
- Confirm each animated property has one owner, entry staggering does not delay exits, and keyboard or snap navigation lands with the active scene fully visible.
- Verify reduced motion removes non-essential animation without hiding meaning.
- Do not require a click to reveal essential presentation content unless the user explicitly requests staged reveals.

## Build and runtime

- `npm run build` passes.
- Static nested guide and presentation entry points exist.
- Browser console contains no errors.
- External links are deliberate and static fallbacks remain available.
