# DESIGN.md — Kushal Choudhary Portfolio

Semantic design system for Stitch and future screen generation. Single source of truth for visual language.

## Atmosphere

- **Page kind:** Developer / AI-ML engineer portfolio
- **Audience:** Recruiters, hiring managers, technical collaborators
- **Vibe:** Dark olive technical precision, calm confidence, production-minded
- **Variance:** 7 (offset asymmetric, editorial split hero)
- **Motion:** 6 (fluid spring physics, scroll reveals, restrained perpetual motion)
- **Density:** 4 (gallery-balanced — breathing room with intentional data moments)

Philosophy: one composition per viewport, brand-first hero, systems language without AI-purple slop. Olive charcoal substrate with a single chartreuse accent.

## Color calibration

| Role | Name | Hex | Notes |
|------|------|-----|-------|
| Canvas | Olive charcoal | `#11130f` | Primary page background — never pure `#000` |
| Canvas deep | Forest ink | `#0c0e0a` | Alternating section depth |
| Surface | Soft panel | `#171a14` / `rgba(23,26,20,0.92)` | Panels and forms |
| Surface hover | Lifted moss | `#1d2119` | Hover fills |
| Ink | Bone | `#f0f2e9` | Primary text |
| Muted | Sage gray | `#b4b9ab` | Body secondary |
| Quiet | Quiet moss | `#7f8879` | Metadata, labels |
| Line | Hairline moss | `#343b2e` | Borders / rules |
| Line strong | Edge moss | `#48513f` | Hover borders |
| Accent | Chartreuse | `#b6d85c` | Single accent — buttons, kickers, focus |
| Accent ink | Olive charcoal | `#11130f` | Text on accent |

**Banned:** Purple/indigo AI gradients, neon glows, warm cream `#F4F1EA` luxury defaults, multi-accent rainbows, pure black backgrounds.

Light mode mirrors the same family with inverted luminance; accent becomes `#6f9a1f`.

## Typography

- **Display / UI:** Manrope (sans) — extrabold headlines, tight tracking `-0.045em` to `-0.07em`
- **Mono / telemetry:** IBM Plex Mono — kickers, metrics, section metadata
- **Scale:** Display `clamp(2.5rem, 5.5vw, 5.25rem)`; section H2 `text-4xl → lg:text-6xl`; body `text-base/lg` with `leading-7/8`
- **Measure:** Body max ~65ch; headlines use `text-balance`
- **Banned:** Inter, Roboto, Arial as brand fonts; Instrument Serif / Fraunces as default; emoji in UI

## Layout principles

- Max content width ~1400–1600px with generous horizontal padding
- Hero: brand name as hero-level signal, one headline, one supporting sentence, CTA group, full-bleed visual plane on the right (editorial split)
- Sections: one job, one headline, one supporting line
- Projects: featured split (media + copy), then asymmetric 2-column grid with intentional offset
- Prefer CSS Grid over percentage flex math
- Full-height sections use `min-h-[100dvh]`, never `h-screen`
- Cards only when interaction or hierarchy requires them; prefer hairline rules and spacing

## Components

### Buttons
- Primary: solid accent, nested trailing icon circle on key CTAs, `active:scale-[0.98]`
- Secondary: transparent + hairline border, hover fill surface-hover
- Timing: `duration-200–700` with `cubic-bezier(0.32, 0.72, 0, 1)`

### Navigation
- Floating glass pill, detached from top edge
- Active section indicator via intersection observer
- Mobile: full-screen blur overlay with staggered link reveal; hamburger morphs to X

### Project media
- Prefer real walkthrough videos over decorative cards
- Video players with poster frames; aspect-video for grid cards; full-bleed for featured
- Walkthrough label in mono uppercase when video exists

### Forms
- Inline validation messages (no `alert()`)
- Focus rings use accent glow
- Control radius tighter than panel radius

## Motion philosophy

- Entry: fade + `translateY(16–22px)`, once-in-view, spring-like cubic bezier
- Hover: transform/opacity only — GPU safe
- Respect `prefers-reduced-motion`
- Grain overlay is fixed, `pointer-events: none`
- No scroll listeners for continuous state — use IntersectionObserver / Motion

## Iconography

- Phosphor Icons (bold weight), stroke consistency across the tree
- No Lucide / Feather defaults
- No emoji as icons

## Anti-patterns (banned)

- Three equal feature cards as the hero story
- Purple mesh AI aesthetic
- Meta labels like "SECTION 01" / "QUESTION 05"
- Stats strips / pill clusters in the first viewport
- Detached badges floating on hero media
- Exclamation marks in success copy
- Lorem Ipsum / Acme Corp placeholders
- Dead `#` links

## Project video mapping

| Project | Asset |
|---------|-------|
| Temporal Motif-Aware Fraud Detection | `/videos/motif.mp4` |
| Xeno Analytics Platform | `/videos/shopify.mp4` |
| Sleep Oracle | `/videos/sleep.mp4` |
| QueryCraft | No video — demo/repo links only |
