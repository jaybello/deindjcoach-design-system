# Dein DJ Coach — Design System

**Dein DJ Coach** is a Hamburg-based DJ-coaching business for beginners — 1:1 coaching, online courses, and a community. The brand voice is confident, direct, and passionate. Visually it commits hard to two colors (**black + yellow**) and one display typeface (**Klein**). No compromises, no decoration.

This project recreates and extends the original `jaybello/deindjcoach-design-system` repo as a working design system: tokens, type, components, a UI kit and sample slides — ready for an AI design assistant to mock new screens, posters, thumbnails, and landing pages without drifting off-brand.

---

## Sources

- **GitHub:** [jaybello/deindjcoach-design-system](https://github.com/jaybello/deindjcoach-design-system) — colors, type, logos, base CSS, and the original branding guidelines HTML. Open this for the original German-language reference.
- **Audience / market:** Einsteiger-DJs (beginner DJs), DE-speaking.
- **Reference language:** German. English is fine for internal/tool copy; user-facing copy should stay in German.

> **Fonts wired up.** The full Klein family is in `fonts/` — three families:
> - **Klein** (display, weights 100/200/300i/400/450i/500/700/900 + italics) — for headlines, posters, hero
> - **KleinText** (body, weights 300/350/400/500/700/900 + italics) — for paragraph and UI copy
> - **KleinCondensed** (narrow display, 400/700/900) — for stacked or tall headlines
>
> Use `var(--font-display)` for headlines, `var(--font-body)` for body, `var(--font-condensed)` when you need vertical compression.

---

## Index — what's in this folder

| Path                              | What it is                                            |
|-----------------------------------|-------------------------------------------------------|
| `README.md`                       | This file — context, foundations, content rules       |
| `SKILL.md`                        | Skill manifest for Claude Code / agent use            |
| `colors_and_type.css`             | Base + semantic CSS variables, type classes           |
| `components.css`                  | Buttons, cards, badges, inputs — opinionated styling  |
| `fonts/Klein-Black.ttf`           | Display weight (900). Real Klein.                     |
| `assets/logos/`                   | Black + white wordmark PNGs                           |
| `preview/`                        | Small specimen cards used by the Design System tab    |
| `ui_kits/web/`                    | Marketing-site UI kit (hero, course card, footer…)    |
| `ui_kits/web/index.html`          | Click-thru demo of the marketing site                 |
| `ui_kits/web/*.jsx`               | Header, Hero, CourseGrid, CoachingBlock, TipsStrip, Footer, CourseDetail, BookingModal, App |
| `ui_kits/course-player/`          | Video player UI — module list, chapters, notes, transcript |
| `slides/index.html`               | 9-slide deck template (title, section, big idea, quote, comparison, stats, agenda, image, CTA) |
| `templates/thumbnails/index.html` | YouTube thumbnail layouts (16:9) — four variants      |
| `templates/email/index.html`      | Email layouts — welcome + weekly newsletter           |

There is no separate mobile-app surface in the source material. If the business builds one later, add `ui_kits/app/` alongside.

---

## CONTENT FUNDAMENTALS

### Language
- Primary language is **German (informal).** Always use **"du" / "dein"**, never "Sie".
- The brand name itself — *"Dein DJ Coach"* — is a sentence in second-person: *Your DJ Coach.*
- English is fine for technical/UI scaffolding (tool labels, error states) but ALL marketing/course copy stays in German.

### Voice & Tone
- **Confident, direct, no fluff.** Short declarative sentences. The brand sounds like a coach giving you the one piece of advice that matters, not a marketing manager.
- **Action-first.** Verbs lead. "Lern DJing." not "Du kannst DJing lernen."
- **Concrete, not aspirational.** Talk about specific skills (Beatmatching, EQ-Mixing, Phrasing, CDJs) rather than vague feelings ("entdecke deine Leidenschaft" — avoid).
- **Lowercase prose, UPPERCASE headlines.** All marketing headlines are uppercased in the layout; sentence-case body for everything else.

### Casing rules
- **Headlines:** ALL CAPS, no exceptions. "VON 0 AUF CDJS" not "Von 0 auf CDJs".
- **Body / descriptions:** Sentence case, German rules (nouns capitalised). "Lerne Timing, EQ-Mixing und saubere Übergänge."
- **CTAs:** Sentence case OR all caps depending on weight — small buttons use sentence case ("Jetzt starten"), tracked label buttons use ALL CAPS ("KURS BUCHEN").
- **Numbers in headlines:** prefer digits ("VON 0 AUF CDJS", "FEHLER #07"), not "Von null".

### Vocabulary
- DJ-specific terms stay in English where the scene uses English: **CDJs, Beatmatching, EQ, Phrasing, Cueing, Mixing, Drop, BPM, Loops**. Don't translate them.
- Course / business terms in German: **Kurs**, **Coaching**, **Einsteiger**, **Übergänge**, **Grundlagen**.
- Tagline shape: ultra-short, often two beats. "TIMING IST ALLES." / "PHRASE, NICHT BEAT." / "VON 0 AUF CDJS."

### Sample copy patterns
- **Hero headline + sub:**
  - VON 0 AUF CDJS
  - *Der strukturierte Einstieg ins DJ-ing*
- **Tip/social post:**
  - DER HÄUFIGSTE FEHLER BEIM BEATMATCHING
  - *Tipp #07 · Dein DJ Coach*
- **CTA copy:** "Jetzt starten", "Kurs buchen", "Termin sichern", "Mehr erfahren". One verb, one object.

### Emoji & punctuation
- **No emoji.** Not in headlines, not in body, not in CTAs. The brand uses typographic impact instead.
- **No exclamation marks in headlines** — the type weight already shouts. One full stop is enough.
- En-dashes (–) and em-dashes (—) are fine for rhythm in body copy.
- The yellow color is the highlight — never use highlighter colors or emphasis stickers (🔥, ⭐) to do the same job.

---

## VISUAL FOUNDATIONS

### Colors — only four, and the rules are strict
| Token         | Hex       | Where to use it                            |
|---------------|-----------|--------------------------------------------|
| `--yellow`    | `#FFD600` | Primary — headlines, CTAs, accent strips   |
| `--black`     | `#0A0A0A` | Background, text on light                  |
| `--white`     | `#FFFFFF` | Body text on dark; the "clean" surface     |
| `--grey-light`| `#E5E5E5` | Neutral cards, dividers, low-key sections  |

Two extra greys (`--grey-mid #999`, `--grey-dark #333`) exist for chrome (metadata labels, dividers, borders). **They are not brand colors** — do not use them as fills or backgrounds in marketing material.

#### Approved combinations (in priority order)
1. **Yellow on Black** — Impact, hero, thumbnails, posters. The signature look.
2. **Black on Yellow** — Buttons, badges, CTA blocks, attention moments.
3. **White on Black** — Body copy on dark backgrounds.
4. **Black on White** — Long-form, course pages, documentation, email.
5. **Black on Light Grey** — Cards, neutral sections, secondary info.

**Never:** yellow on white (insufficient contrast). Never introduce a fifth color. Never use a gradient between the brand colors.

### Typography
- **Display family:** Klein Black (900), all caps, tight tracking (`-1px` to `-2px` at hero sizes), line-height `0.9–0.95`. This is *the* brand voice.
- **Subheads / UI labels:** Klein Bold (substituted with Inter 700), uppercase, neutral tracking.
- **Body:** Klein Book (substituted with Inter 400), sentence case, generous line-height (1.5–1.6).
- **Eyebrows / overlines:** 11px, 4px letter-spacing, uppercase, often muted grey.
- **Never** mix in a second typeface. No serifs, no scripts, no italics for emphasis (use yellow color instead).

### Layout & rhythm
- **Strong grids, generous padding.** Section padding is typically `--space-2xl` (96px) on desktop, `--space-xl` (64px) on mobile.
- **Full-bleed by default.** The brand uses edge-to-edge color blocks divided by hairline gaps (2px) rather than rounded cards floating in whitespace.
- **Big numbers, eyebrow labels.** A section starts with `01 — Logo` style eyebrow, then a massive Klein title underneath.
- **Single-purpose surfaces.** Each section commits to one of the five approved color themes — don't mix yellow text and white text in the same block.

### Corner radii
- **Default is `0`.** The brand is square-cornered. Sharp edges.
- `--radius-sm: 2px` exists for things like color swatch cards in the spec sheet.
- `--radius-pill` exists only for badge chips when really needed. **Don't reach for rounded corners as decoration.**

### Borders
- 1px hairline borders, usually `rgba(255,255,255,0.08)` on dark or `rgba(0,0,0,0.08)` on light.
- CTA outlines are 2px solid yellow on dark backgrounds.
- No double-borders, no border-radius decoration, no left-accent-border cards.

### Shadows & elevation
- **Mostly flat.** Brand prefers color blocks over floating cards.
- When a shadow is needed: `--shadow-card` for subtle lift on light grey, `--shadow-pop` for modals/menus.
- Yellow CTAs may use `--shadow-cta` (warm yellow glow) on dark backgrounds for hover emphasis — sparingly.

### Backgrounds
- **Solid blocks of the 4 brand colors.** No gradients, no noise textures, no patterns, no illustrations.
- For visual interest: an extreme-radius `border-radius: 50%` yellow circle at 7% opacity behind a hero is the *one* decorative motif used in the guidelines doc. Use it once per page, max.
- Imagery (photos of decks, hands on CDJs, club lighting) when used should be **high-contrast, dark, slightly warm**. Yellow can overlay as text or accent. No light/airy/pastel photography.

### Animation
- **Snappy, minimal.** `--dur-fast (120ms)` for hover, `--dur-base (220ms)` for most state changes.
- **Easing:** `--ease-out` or `--ease-snap`. Never bounce. Never elastic.
- **Hover state:** drop `opacity` to `0.85` is the default. Sometimes shift background between yellow and black for CTA pop.
- **Press state:** brief scale to `0.97` is fine; or temporarily darken yellow to `#E6C200`. Don't ripple, don't bounce.
- **Transitions** between sections / pages should be instant cuts, not crossfades. The brand has a "drop the needle" feel — confident, decisive.

### Transparency, blur, gradients
- **Transparency:** only for hairline borders and the decorative 7%-opacity yellow circle.
- **Backdrop blur:** acceptable on sticky nav over a hero, very lightly. Not as a decorative motif.
- **Gradients:** essentially banned. The brand is two colors. If you need depth, use scale and composition, not gradients.

### Cards & containers
- A "card" in this system is just a padded rectangle of one of the 5 themes. No rounded corners by default, no drop shadows by default, no border by default.
- Card padding is `--space-md` to `--space-lg` (24–40px).
- Cards arranged in a grid are separated by **a 2px gap on the brand-color background** — the gap itself becomes a structural line.

---

## ICONOGRAPHY

The source brand repo ships **no icons** — only logos. The brand's visual impact comes from **type and color**, not from iconography. So this design system follows that lead:

- **Default: no icons.** Most layouts in the brand work using only type, color blocks, and the logo. Reach for icons only when there's a genuine UX need (e.g. navigation, play button on a course video, social link).
- **When icons are needed:** use **[Lucide](https://lucide.dev/)** via CDN — stroke-based, geometric, neutral. Its thin lines match the brand's "no-decoration" feel and don't compete with Klein's heavy display weight. Loaded in our UI kit from `https://unpkg.com/lucide-static@latest/`.
  - This is a **substitution** — the brand has no defined icon library, so we picked the closest match. Flag for review.
- **Stroke weight:** 2px (Lucide default). Never use a heavier stroke that competes with Klein's weight.
- **Sizing:** 16px for inline UI, 20px for buttons, 24px for nav/headers. Always sized in 4px steps.
- **Color:** inherit `currentColor`. Yellow on dark, black on light, never multi-color.
- **No icon fonts.** SVG inline or `<img src>` references only.
- **No emoji as icons.** Not even in chips/badges.
- **No flag icons** — language is German, market is single-region. If a language picker ever appears, use text labels ("DE / EN").
- **Logo is not an icon.** Don't shrink it under 80px wide. Don't crop it. Don't recolor it (use the right variant).

### Logo variants
- `assets/logos/dein-dj-coach-blk.png` — black wordmark. Use on **white, yellow, or light grey** backgrounds.
- `assets/logos/dein-dj-coach-wht.png` — white wordmark. Use on **black or dark** backgrounds.
- Clear space: at least the height of the "D" in "Dein" on all sides.
- Never recolor, distort, rotate, or apply effects. Never place on busy photography without darkening first.

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css" />
<link rel="stylesheet" href="components.css" />

<section class="theme-white-on-black">
  <p class="eyebrow accent">Kurs · 2026</p>
  <h1 class="h-display">Von 0<br>auf CDJs</h1>
  <p class="body body--lg">Lerne Timing, EQ-Mixing und saubere Übergänge.</p>
  <a class="btn btn--primary" href="#">Jetzt starten</a>
</section>
```

See `ui_kits/web/index.html` for a fuller walkthrough.

---

## Caveats / known gaps

- **No icon system in source brand.** Lucide is a substitution; happy to swap if you have a preference.
- **No app surface** — only the marketing/web product is represented. Mobile app conventions are TBD.
- **No photography in source.** Brand could use a small commissioned photo set (dark, warm, high-contrast — CDJs, hands, club lighting) but none exists yet.
