---
name: Maruf Ahmed
description: A plain developer profile in warm stone with one sunset gradient, for recruiters who want the facts fast.
colors:
  sunset-orange: "#fb923c"
  sunset-red: "#ef4444"
  sunset-deep: "#b91c1c"
  signal-red: "#dc2626"
  signal-red-night: "#f87171"
  stone-paper: "#fafaf9"
  stone-chip: "#e7e5e4"
  stone-rule: "#e7e5e4"
  stone-stroke: "#d6d3d1"
  stone-muted: "#57534e"
  stone-secondary: "#44403c"
  stone-ink: "#1c1917"
  stone-night: "#0c0a09"
  stone-night-rule: "#292524"
  stone-night-stroke: "#44403c"
  stone-night-muted: "#a8a29e"
  stone-night-secondary: "#d6d3d1"
  stone-night-ink: "#f5f5f4"
typography:
  display:
    fontFamily: "Afacad Flux Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Afacad Flux Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.556
  lede:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
rounded:
  md: "6px"
  lg: "8px"
  banner: "16px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-wide: "32px"
  stack-sm: "12px"
  stack-md: "24px"
  heading-gap: "32px"
  item-gap: "40px"
  section: "64px"
  section-wide: "80px"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.stone-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
  button-outline-hover:
    textColor: "{colors.signal-red}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.stone-muted}"
    rounded: "{rounded.lg}"
    size: "40px"
  button-icon-hover:
    backgroundColor: "{colors.stone-chip}"
    textColor: "{colors.stone-ink}"
  nav-link:
    textColor: "{colors.stone-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  nav-link-hover:
    textColor: "{colors.stone-ink}"
  nav-bar:
    backgroundColor: "{colors.stone-paper}"
    height: "64px"
  cover-banner:
    rounded: "{rounded.banner}"
    height: "144px"
---

# Design System: Maruf Ahmed

## Overview

**Creative North Star: "The Profile You Already Know How to Read"**

This is the developer-portfolio standard, played straight. A slim sticky nav, a centred reading column, a cover banner with a round avatar overlapping its lower-left edge, a name at display size, two labelled outline buttons, then a vertical timeline of roles and schooling. Nothing asks to be learned. The craft is in exact spacing, honest hierarchy, and restraint rather than in any device the visitor has not seen before.

The world is warm stone in both modes, dark by default, with a single warm signature: the sunset gradient. It appears exactly twice, as the cover banner and as the current-role marker on the timeline, so the eye finds "who" and "now" without searching. A red signal (red-600 in light, red-400 in dark) carries interaction: focus rings, the outline-button hover, text selection, native control accents. Afacad Flux, self-hosted, gives the name and section headings a soft, slightly humanist voice; everything a recruiter actually reads is in the system sans.

Density is low and the page is short. Depth is flat: hairline rules and tonal fills, no shadows. Motion is a single load gesture on the cover and avatar, and it disappears under reduced motion.

**Key Characteristics:**
- Warm stone neutrals in light and dark; class-based dark mode, dark by default, persisted.
- One sunset gradient, two placements: cover banner and current-role dot.
- Red signal reserved for focus, the outline-button hover, and selection.
- Afacad Flux for the name, nav name and section headings only; system sans for reading.
- Flat surfaces: 1px stone rules and tonal chips, no shadows.
- One load motion, 900ms, off under reduced motion.

## Colors

Warm, low-chroma stone in both modes, with one saturated warm gradient and one red signal colour.

### Primary
- **Sunset Gradient** (158deg, Sunset Orange 0% → Sunset Red 50% → Sunset Deep 100%): the brand signature, kept from the previous site. Fills the cover banner and the current-role timeline dot. Never carries text.
- **Signal Red** (light) / **Signal Red Night** (dark): the interaction colour. Focus-visible outlines (2px, 2px offset), the outline link button's hover text and border (border steps one shade brighter: red-500 light, red-400 dark), the root `accent-color`, and the selection tint (red-500 at 25% under current text colour).

### Neutral
- **Stone Paper** / **Stone Night**: page background in light / dark; also the 4-6px ring that seats the avatar and timeline dots onto the page. The nav uses the same colour at 95% opacity.
- **Stone Ink** / **Stone Night Ink**: primary text, headings, and hover text for quiet controls.
- **Stone Secondary** / **Stone Night Secondary**: timeline subtitles (company, programme).
- **Stone Muted** / **Stone Night Muted**: headline lede, dates, location lines, nav links, footer, resting icon buttons.
- **Stone Rule** / **Stone Night Rule**: nav and footer hairlines, timeline spine.
- **Stone Stroke** / **Stone Night Stroke**: outline button borders, hollow timeline-dot borders (dark mode dots use stone-600).
- **Stone Chip**: icon-button hover fill (stone-200 at 70% in light; stone-800 solid in dark).

### Named Rules
**The Two Placements Rule.** The sunset gradient appears on the cover banner and the current-role dot, nowhere else. A third placement dilutes "now".

**The Signal Is Interaction Rule.** Red is the answer to the visitor's hand: focus, hover on the primary links, selection. It never decorates static content.

**The No Text On Sunset Rule.** No text sits on the gradient. The old full-bleed header put white on orange; this world refuses it.

## Typography

**Display Font:** Afacad Flux Variable (self-hosted via @fontsource-variable, weight axis), falling back to the system sans stack.
**Body Font:** system sans (`ui-sans-serif, system-ui, sans-serif` and Tailwind's default stack).

**Character:** Afacad Flux's soft, open geometric forms give the name and headings a personal voice; the system sans keeps every fact native, fast and legible.

### Hierarchy
- **Display** (600, 48px rising to 60px at sm, line-height 1, -0.025em): the name in the header only. Balanced wrapping.
- **Headline** (600, 30px rising to 36px at sm, -0.025em): section h2s ("Experience", "Education"). 32px below to content.
- **Nav name** (Afacad Flux 600, 20px, -0.025em): the name in the sticky nav.
- **Title** (system 600, 18px / 28px): timeline item titles (role, school).
- **Lede** (system 400, 18px, line-height 1.625, max 60ch, muted): the one-line role headline under the name. Pretty wrapping.
- **Body** (system 400, 16px / 1.5): timeline subtitles and running text.
- **Label** (system 500, 14px): buttons, nav links, dates (tabular numerals), location lines (400), footer.

### Named Rules
**The Display Is For Names Rule.** Afacad Flux sets the name, the nav name and section h2s. Titles, facts, dates and controls stay in the system sans.

**The Tabular Dates Rule.** Date ranges use tabular numerals and sit right-aligned on desktop, stacked under the title on mobile.

## Layout

A single centred column, 768px max (`max-w-3xl`), with 20px gutters on mobile and 32px from 640px up; nav and footer share the same column so all left edges align. The header begins 24px (40px at sm) below the 64px nav. Sections open with 64px (80px at sm) of top space and a 32px heading gap; anchored sections offset by 96px for the sticky nav. Footer sits 96px below the last section.

Timeline items step 40px apart, text indented 28px (36px at sm) from a 1px spine. On desktop each item is a row: title block left, dates block right with a 24px gap, aligned on baseline; on mobile the dates fall under the subtitle. Nav section links hide below 640px, leaving the name and theme toggle.

Single breakpoint: `sm` at 640px.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes from tonal layering and hairlines: a 1px stone rule under the nav and above the footer, a 95%-opacity page-colour nav over scrolled content, and page-coloured rings (4px; 6px on the large avatar) that cut the avatar and timeline dots cleanly out of whatever sits behind them.

### Named Rules
**The Flat Stone Rule.** Separation is a 1px stone rule or a tonal fill. If a surface seems to need a shadow, it needs a rule instead.

## Shapes

Gently rounded and consistent. Chips, nav links and the global focus outline use 6px; buttons, icon buttons and the skip link use 8px; the cover banner uses 16px; avatar and timeline dots are full circles. Borders are always 1px stone, except the 2px border on hollow timeline dots.

## Components

### Buttons
Labelled, outlined, quiet until touched.
- **Outline link button (primary):** 1px stone-300 / stone-700 border, transparent fill, 8px radius, 10px × 16px padding, 14px medium label. Leading 18px brand icon, label, trailing 16px up-right arrow in stone-400 / stone-500, plus a visually hidden "(opens in a new tab)".
- **Hover:** border and text turn signal red; the arrow takes the current colour and nudges 2px up and right. Colour transition at the default 150ms.
- **Icon button (theme toggle, footer links):** 40px square, 8px radius, muted icon at 20px; hover fills with stone chip tone and darkens the icon to ink. Always carries `aria-label` and the toggle also a `title`.
- **Focus:** global 2px signal-red outline, 2px offset, 6px radius.

### Navigation
Sticky top bar, 64px tall, page colour at 95% opacity with a 1px bottom rule. Left: name in Afacad Flux 20px semibold, linking to `#about`. Right: About, Experience, Education links (14px medium, muted, 8px × 12px, hover to ink; hidden below 640px) then the sun/moon theme toggle. No active-section state.

### Cover Banner and Avatar (signature)
A 144px (192px at sm) full-column block filled with the sunset gradient at 16px radius, decorative and `aria-hidden`. The round avatar (112px; 160px at sm), always loaded directly from the GitHub profile picture URL, overlaps its lower-left edge by 56px (80px at sm), inset 20px (32px at sm), seated with a page-colour ring.
- **Load motion:** the banner reveals from a clip of `inset(0 0 22% 0 round 1rem)` at 60% saturation to full, and the avatar rises 10px from 96% scale, 120ms later. Both run 900ms on `cubic-bezier(0.16, 1, 0.3, 1)`. Under `prefers-reduced-motion` all animation is removed and transitions collapse to near zero. This is the only entrance motion on the page.

### Timeline Item (signature)
An ordered list with a 1px stone spine. Each item: an 11px dot at the top-left, the current role's dot filled with the sunset gradient and every other dot hollow (2px stone border, page fill); a title (company, or school), a subtitle (role, or programme); the date range on the right (no duration); then a muted location · workplace line. No team lines, descriptions or skill chips. The spine stops at the last item. Experience lists reverse-chronologically; Education reuses the same item.

## Do's and Don'ts

### Do:
- **Do** keep the sunset gradient to the cover banner and the current-role dot (158deg, orange-400 → red-500 → red-700).
- **Do** use red-600 (light) / red-400 (dark) for focus outlines, outline-button hover and selection, and nothing static.
- **Do** set the name and section headings in Afacad Flux at 600 with -0.025em tracking; set everything else in the system sans.
- **Do** separate with 1px stone rules and tonal fills; seat circles on the page with a page-colour ring.
- **Do** label every outbound link with its name, icon and an external-arrow, and announce new-tab behaviour to screen readers.
- **Do** ship every motion behind `prefers-reduced-motion`; the 900ms banner and avatar reveal is the only load motion.
- **Do** design both themes for every addition; dark is the default.

### Don't:
- **Don't** put text on the sunset gradient or run it full-bleed behind the header.
- **Don't** add shadows, glows or glass effects; this world is flat stone.
- **Don't** use Afacad Flux for body copy, dates, labels or controls.
- **Don't** add new entrance or scroll animations beyond the single header reveal.
- **Don't** introduce a second accent hue; warm stone plus sunset plus signal red is the whole palette.
