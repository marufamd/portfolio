# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers who arrive after seeing Maruf's résumé, an application, or Maruf's LinkedIn. They are screening quickly, often between other candidates, and want to confirm who Maruf is, where Maruf has worked, what the work was, and where Maruf studied — then jump to GitHub or LinkedIn.

## Product Purpose

Maruf Ahmed's personal site at maruf.dev. It is a minimal, current record of Maruf's professional background. Success: a recruiter understands the current role, experience, and education within a single scroll, and can reach GitHub or LinkedIn in one click.

## Positioning

The site is Maruf's own canonical record, kept in step with the LinkedIn profile. Its content is real experience, not a showcase of effects.

## Capabilities and Constraints

- Sections: Main (intro), Work Experience, Education. Projects and Skills sections are intentionally dropped for now and may return later; keep the project data in the codebase recoverable via git history.
- Outbound links: GitHub (`https://github.com/marufamd`) and LinkedIn (`https://www.linkedin.com/in/maruf-amd/`). No email link.
- Experience and education details are copied from LinkedIn, supplied by Maruf. Never paraphrase into new claims or invent roles, dates, or achievements.
- Stack: Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages via `gh-pages` with custom domain `maruf.dev` (`public/CNAME`).

## Brand Commitments

- Minimal, by explicit request.
- Visual direction: the familiar developer-portfolio standard (name and avatar intro, icon links, experience entries), chosen deliberately over novel directions on 2026-11-25. Execute convention at full craft; no smuggled quirk.
- Keep the light/dark mode toggle (dark by default, persisted in localStorage).
- Keep the signature sunset gradient: `linear-gradient(158deg, #FB923C 0%, #EF4444 50%, #B91C1C 100%)` (orange-400 → red-500 → red-700), theme colour `#e2232b`.
- Name: Maruf Ahmed. Existing assets: `public/favicon.png`, `src/assets/branding/` (logo, logo-dark, profile photo), GitHub avatar.

## Evidence on Hand

- Work experience and education: from Maruf's LinkedIn, pasted by Maruf.
- No testimonials, metrics, or employer endorsements exist; do not fabricate any.

## Product Principles

1. Facts first: role, organization, dates, place, then detail.
2. Fast to scan: a recruiter should never hunt for the current role or the outbound links.
3. Accuracy over flourish: the page mirrors LinkedIn and is never ahead of it.
4. Minimal surface: every element earns its place; absent sections stay absent rather than stubbed.
