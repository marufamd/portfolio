---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

## Scope

maruf.dev home page (single page). Mode: Read. Audience: recruiters and hiring managers screening quickly.

## Surface strategy

- Job: confirm current role, past roles, education; reach GitHub/LinkedIn in one click.
- Content: LinkedIn experience as supplied (Shopify, RBC, Enercare internships); Education: Toronto Metropolitan University, Computer Science (dates/degree not yet supplied).
- Constraints: minimal; light/dark toggle (dark default); sunset gradient kept; no email link; no Projects or Skills.
- Unresolved: education dates and degree; headline copy beyond role facts.

## Direction contract

THESIS: The developer-portfolio standard, played straight: a profile you already know how to read. It refuses novelty and the old full-bleed gradient header that put white text on orange.
OWN-WORLD: Warm stone neutrals in light and dark; the sunset gradient (orange-400 → red-500 → red-700) used as the profile cover banner and as the current-role marker only; Afacad Flux for name and headings; system sans for reading; labelled outline buttons for links.
STORY: The visitor sees who Maruf is and the current role at once, scans three internships in reverse order with dates and durations, sees school, then clicks GitHub or LinkedIn.
FIRST VIEWPORT: Sticky slim nav (name left; About, Experience, Education, theme toggle right). Centred 720px column: gradient cover banner, round avatar overlapping its lower-left edge, name at display size, one-line role headline, GitHub and LinkedIn buttons; Experience heading begins above the fold on desktop.
FORM: Category standard (canon), chosen by the user over the roll; not on the ordered list. seed:86810f9d1be86f6b
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
