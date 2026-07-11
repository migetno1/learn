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
- Long-form measure: 60–72 characters
- Body line height: 1.6–1.75

## Layout

- Mobile-first, with breakpoint checks at 375, 768, 1024, and 1440px
- 4/8px spacing rhythm
- Wide editorial compositions may break the reading column; prose may not
- Maintain generous section spacing and a clear hierarchy
- Topic pages use numbered chapters and a visible narrative progression

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
- Use no more than one or two prominent animated ideas per viewport
- Always respect `prefers-reduced-motion`

## Illustration

- Contemporary editorial illustration with print, cut-paper, or restrained geometric influence
- Warm ivory, ink, eucalyptus, ochre, and terracotta palette
- Prefer metaphor and human relationships over literal medical procedures
- No embedded text, logos, watermarks, death iconography, or generic clinical props
- Exact clinical diagrams must be code-native SVG/HTML rather than generated imagery

## Accessibility and safety

- Target WCAG 2.2 AA contrast
- Preserve keyboard navigation, semantic headings, skip links, and visible focus
- Touch targets are at least 44×44px
- Pages remain fully understandable without animation
- Clinical and legal claims require authoritative sources and an explicit review date
- Clearly distinguish education from individual medical or legal advice
