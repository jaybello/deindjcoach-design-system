# Dein DJ Coach — Web UI kit

A pixel-recreation of the Dein DJ Coach marketing surface using the design system's tokens, components, and the Klein typeface.

There's only **one product** in scope: the marketing / coaching website (course catalogue, 1:1 coaching, tips/community). No mobile app exists yet.

## Click-thru flow

Open `index.html`. From there you can:

1. Land on the **home** page — hero, course grid, coaching block, tips, footer.
2. Click any course card → navigate to a **course detail** page.
3. Click "Jetzt starten" / "Kurs buchen" → open a **booking modal** with a contact form.
4. Click the logo or "Zur\u00fcck" to return home.

## Files

| File | What it is |
|------|------------|
| `index.html` | Entry point. Pulls React + components and wires up the click-thru. |
| `Header.jsx` | Sticky top nav with logo, links, login CTA. |
| `Hero.jsx` | Big black-and-yellow hero with the signature Klein headline. |
| `CourseGrid.jsx` | Three-up grid of course cards using the brand's 2px-gap layout. |
| `CoachingBlock.jsx` | 1:1 coaching pitch on yellow with stat strip. |
| `TipsStrip.jsx` | Three social-style tip cards (YouTube thumbnail aesthetic). |
| `Footer.jsx` | Black footer with brand mark, nav, legal. |
| `CourseDetail.jsx` | Inner page — module list, big book-CTA. |
| `BookingModal.jsx` | Contact / booking form on dark background. |
| `App.jsx` | Top-level router/state. |

Everything here is **cosmetic recreation** — no real backend, no analytics, no auth. The goal is high-fidelity visual matching of the brand so designs created from it look right.
