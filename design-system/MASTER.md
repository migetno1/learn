# Learn — Style Guide

## Direction

Learn uses a **modern clinical editorial** style with calm confidence. It should feel authoritative, humane, contemporary, and distinctly designed—never corporate, institutional, or like a generic learning-management system.

The visual system combines:

- editorial typography and generous whitespace;
- abstract diagrams for exact teaching concepts;
- selective custom editorial illustration for atmosphere and reflection;
- purposeful scrollytelling motion that explains hierarchy or progression.

## Identity

- Working name: **Learn**
- Descriptor: **Clinical education for Australian general practice**
- Voice: clear, considered, precise, calm, and conversational at a clinician's level
- Avoid: hype, cuteness, generic medical stock imagery, stethoscope motifs, and unsupported certainty

## Colour tokens

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#102a32` | Primary text and dark surfaces |
| Eucalyptus | `#57756c` | Primary brand accent |
| Deep eucalyptus | `#294d45` | Buttons and high-contrast accents |
| Warm ivory | `#f5f0e5` | Main background |
| Paper | `#fbf8f1` | Raised light surfaces |
| Ochre | `#d39b43` | Topic accent |
| Terracotta | `#bd674e` | Topic accent |
| Mist blue | `#7895a1` | Topic accent |

Each topic may use one accent colour while retaining the global ink-and-ivory foundation. Functional states must never rely on colour alone.

## Typography

- Display and headings: **Manrope**, with system sans fallback
- Body and UI: **Inter**, with system sans fallback
- Editorial emphasis: italic display text, used sparingly
- Body size: minimum 16px; preferred 17–19px for teaching copy
- Learning-guide teaching copy: minimum 17px; preferred 18–19px
- Presentation teaching copy: minimum 18px
- Presentation metadata and labels: minimum 14px
- Learning-guide metadata and labels: minimum 13px
- Long-form measure: 60–72 characters
- Body line height: 1.6–1.75

## Layout

- Mobile-first, with breakpoint checks at 375, 768, 1024, and 1440px
- 4/8px spacing rhythm
- Wide editorial compositions may break the reading column; prose may not
- Maintain generous section spacing and a clear hierarchy
- Topic pages use numbered chapters and a visible narrative progression
- Published topics begin with a full-viewport editorial hero; mobile may stack the composition but should preserve the immersive first-screen experience
- Core presentation scenes fit one 1440×900 stage in normal and fullscreen modes

## Components

- Corners: restrained; use small radii for controls and avoid uniformly rounded “app cards”
- Borders: fine, ink-tinted rules
- Shadows: subtle and warm; never heavy or glossy
- Icons: Lucide outline icons with consistent stroke weight
- Buttons: at least 44px high, visible focus states, one primary action per section

## Motion

- Motion must communicate entry, progression, hierarchy, or continuity
- Micro-interactions: 150–300ms
- Section reveals: 350–500ms
- Animate opacity and transforms; avoid layout-shifting properties
- Prefer transform-led reveals. Text may begin at any opacity during an entrance animation; once the animation finishes, all text must be fully legible and meet WCAG AA contrast
- Use no more than one or two prominent animated ideas per viewport
- Always respect `prefers-reduced-motion`
- Every presentation content unit must have a complete scroll lifecycle: transform and fade in as it enters, remain fully visible at rest, then transform and fade out after the viewport passes it. This applies to headings, body copy, labels, citations, cards, diagrams and meaningful illustration.
- Animate a group only when it reads as one semantic unit. Do not animate both a wrapper and its text descendants; each property must have one animation owner.
- Presentation exits should follow scroll direction, so content passed above the viewport exits upward and content not yet reached waits below. Reversing scroll must reverse that lifecycle coherently.
- Entry staggering may clarify hierarchy, but exit should be prompt enough that the outgoing scene does not compete with the next scene.
- Scene snapping and keyboard navigation must land with the active scene in its fully visible rest state; essential content must never depend on a click or on completing an animation.
- Under `prefers-reduced-motion`, bypass the full lifecycle and render every essential presentation element immediately in its fully visible, contrast-safe rest state.

## Illustration

- Contemporary editorial illustration with print, cut-paper, or restrained geometric influence
- Warm ivory, ink, eucalyptus, ochre, and terracotta palette
- Prefer metaphor and human relationships over literal medical procedures
- No embedded text, logos, watermarks, death iconography, or generic clinical props
- Exact clinical diagrams must be code-native SVG/HTML rather than generated imagery
- Aim for one meaningful illustration, diagram or substantial visual composition every two to three learning chapters and across consecutive presentation scenes
- Generated illustration must carry narrative, atmosphere or a clear conceptual metaphor; it must not be generic decoration
- Avoid consecutive presentation scenes that use the same text-and-card composition without a deliberate visual change

## Interaction

- Default to visible content. Add accordions, tabs, sorting, polls or staged reveals only when they materially improve learning
- A fullscreen control, scene navigation and external/source links are utility controls and may remain available without making teaching content dependent on clicking
- Every interactive teaching component must have a keyboard path, 44px target, reduced-motion-safe behaviour and a static fallback

## Accessibility and safety

- Target WCAG 2.2 AA contrast
- Preserve keyboard navigation, semantic headings, skip links, and visible focus
- Touch targets are at least 44×44px
- Pages remain fully understandable without animation
- Clinical and legal claims require authoritative sources and an explicit review date
- Clearly distinguish education from individual medical or legal advice
