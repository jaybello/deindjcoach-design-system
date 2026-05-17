---
name: dein-dj-coach-design
description: Use this skill to generate well-branded interfaces and assets for Dein DJ Coach (a Hamburg-based German DJ coaching business for beginners), either for production or throwaway prototypes/mocks/landing pages/social posts/slides. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit for prototyping. The brand is black + yellow only, Klein display typeface, all-caps German headlines, square-cornered, flat — no gradients, no emoji, no decoration.
user-invocable: true
---

# Dein DJ Coach — Design Skill

Read `README.md` in this skill folder first — it covers brand context, content fundamentals (voice, tone, language, casing), visual foundations (colors, type, layout, motion, shadows, borders), and iconography rules.

## What's here

| File | What it is |
|------|------------|
| `README.md` | Full brand + content + visual guidance. **Read first.** |
| `colors_and_type.css` | Tokens (CSS variables) and semantic type classes. Import this for any HTML output. |
| `components.css` | Buttons, badges, cards, inputs, nav. Import alongside `colors_and_type.css`. |
| `fonts/Klein-Black.ttf` | The display typeface (900 weight only; Bold/Book substituted with Inter). |
| `assets/logos/dein-dj-coach-blk.png` | Black wordmark — use on white/yellow/grey. |
| `assets/logos/dein-dj-coach-wht.png` | White wordmark — use on black/dark. |
| `preview/` | Specimen cards demonstrating every token and component. Useful as visual reference when designing. |
| `ui_kits/web/` | Pixel-fidelity recreation of the marketing site (React + JSX). Lift components or full sections directly from here. |

## How to use this skill

When creating visual artifacts (slides, mocks, landing pages, social posts, thumbnails, throwaway prototypes):

1. Copy `colors_and_type.css`, `components.css`, the `fonts/` folder, and any needed logos from `assets/logos/` into the output project.
2. Read `README.md` for content tone and visual rules — they are strict. Two colors. Klein for headlines. Uppercase. Sharp corners. No emoji.
3. For React layouts, lift JSX from `ui_kits/web/` — `Hero.jsx`, `CourseGrid.jsx`, `CoachingBlock.jsx`, `TipsStrip.jsx`, `Footer.jsx`, `Header.jsx`, `BookingModal.jsx` are all production-shaped.
4. Generate a single self-contained HTML file the user can view.

When working on production code:

- Treat the four color tokens (`--yellow`, `--black`, `--white`, `--grey-light`) as the entire palette. Never introduce a fifth.
- All marketing copy in German, informal "du". DJ scene terms (Beatmatching, EQ, CDJs, Phrasing) stay in English.
- Klein only. No second typeface. Headlines ALL CAPS, tight tracking, line-height ~0.95.

## When invoked without other guidance

Ask the user:
- What are you making? (Landing page / social post / slide / YouTube thumbnail / email / poster)
- Who's it for? (DJ beginner / existing customer / cold audience)
- One headline you want to land?
- Square-corner brand-strict version, or are we exploring directions?

Then act as an expert designer who outputs HTML artifacts or production code based on the need. Do not invent new visual directions — this brand's power is its restraint.
