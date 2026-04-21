---
name: Aura Luminaire
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1c'
  surface-container: '#202020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#cecece'
  on-tertiary: '#2f3131'
  tertiary-container: '#b2b3b3'
  on-tertiary-container: '#434546'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  section-padding: 120px
  element-gap: 24px
---

## Brand & Style

The design system is engineered to evoke a sense of "Clinical Prestige." It targets an affluent demographic seeking medical precision wrapped in a luxury hospitality experience. The aesthetic is deeply rooted in **Minimalism** with a **Tactile** edge, utilizing high-contrast lighting to mimic the focused beam of a laser treatment.

The atmosphere is serene, dark, and authoritative. By utilizing a "Dark Mode by Default" philosophy, the design system emphasizes the glowing quality of gold accents and the crispness of high-resolution clinical imagery. Whitespace is used aggressively to provide "room to breathe," ensuring that the technical medical information never feels overwhelming or cluttered.

## Colors

This design system employs a restricted, high-drama palette designed for maximum contrast and elegance.

- **Primary (Gold):** Used sparingly for calls to action, active states, and decorative flourishes. It represents the "light" and the "result."
- **Secondary (Charcoal/Black):** The foundation. We use `#0A0A0A` for the deepest backgrounds and `#121212` for container surfaces to create subtle depth.
- **Tertiary (White):** Reserved for primary body text and high-priority labels to ensure AAA accessibility against dark backgrounds.
- **Accents:** Subtle radial gradients should transition from `#1E1E1E` to `#121212` to create a soft spotlight effect behind key content blocks.

## Typography

The typographic hierarchy relies on the tension between the classic, authoritative **Noto Serif** and the surgical precision of **Manrope**.

- **Serif Usage:** Headlines should feel editorial. Italicize specific "luxury keywords" within a headline (e.g., "The *Gold* Standard") to add a bespoke, calligraphic touch.
- **Sans-Serif Usage:** All technical data, pricing, and functional labels must use the sans-serif face for maximum legibility.
- **Tracking:** Use wide tracking on uppercase labels to reinforce the luxury aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** model centered on a 12-column system. To maintain the "Luxury" feel, the system mandates generous vertical spacing.

- **Vertical Rhythm:** Sections are separated by a minimum of 120px to prevent visual fatigue.
- **Asymmetry:** Occasionally break the grid with large-scale imagery that bleeds off the edge of the screen, contrasted by tightly contained text blocks.
- **Grouping:** Use logical grouping with fine 1px borders to separate treatment zones and pricing tiers without adding heavy visual weight.

## Elevation & Depth

In this design system, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

1.  **Base Layer:** `#0A0A0A` (The deep void).
2.  **Surface Layer:** `#121212` with a 1px border of `#2A2A2A`.
3.  **Interactive Layer:** Surfaces that respond to hover should subtly transition their border color to the primary Gold (`#D4AF37`) at 30% opacity.
4.  **Gradients:** Use extremely subtle radial gradients (50% opacity to 0%) to highlight the center of important cards, creating a "shimmer" effect.

## Shapes

The shape language is disciplined and architectural. 

- **Corners:** A "Soft" radius (0.25rem) is the standard. This is enough to remove the "sharpness" of medical equipment while retaining a professional, structured feel.
- **Buttons:** Primary buttons use a fully pill-shaped radius to stand out as the most "human" and touchable elements on the page.
- **Dividers:** Horizontal rules should be 1px thick, using a linear gradient that fades to transparency at the ends.

## Components

- **Primary Button:** Solid Gold background with black text. On hover, the button should expand slightly (scale 1.02) with a soft gold outer glow.
- **Treatment Cards:** Dark surfaces with a 1px `#2A2A2A` border. The price should be positioned in the top-right corner using the Serif font for a "boutique menu" feel.
- **Iconography:** Use ultra-thin (1pt) stroke icons in Gold. Icons should be encased in a subtle circular gold border.
- **Selection Chips:** Used for selecting treatment areas. These should have a transparent background with a gold border when active, and a grey border when inactive.
- **Inputs:** Underline-style inputs are preferred over boxed inputs to maintain the minimal, sophisticated aesthetic. The label should float above the line in uppercase sans-serif.
- **Imagery:** All medical photography should have a slight desaturation or a warm, dark overlay to ensure it integrates seamlessly with the charcoal background.