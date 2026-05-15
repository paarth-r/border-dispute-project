# Design Spec: Sino-Indian Border Dispute — CFR-Style Report Site
**Date:** 2026-05-15
**Status:** Approved

---

## Goal

Build a single-page Next.js 14 static site presenting the Sino-Indian border dispute report in a CFR editorial style. Pushed to GitHub, deployed via GitHub Pages.

## Architecture

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS + Google Fonts (Lora for body, Inter for UI)
- **Output:** `next export` static HTML — no server, no API routes
- **Deployment:** GitHub repo `paarth-r/sino-indian-border-report`, `out/` directory pushed to `gh-pages` branch

## Pages & Routing

Single page only: `app/page.tsx`. All five report sections rendered in one scrollable document.

## Layout Structure

```
<Header>         — full-width hero, satellite/mountain image, title overlay
<StickyNav>      — section links, smooth-scroll, highlights active section on scroll
<Article>        — centered prose max-w-3xl, sections:
  § Overview
  § Belligerents
  § Historical Context
  § Relation to Polycrisis
  § Potential Scenarios
<StatCards>      — inline callout row: "3,488 km LAC", "20 killed Galwan", "1962 War"
<Sources>        — linked citations list
<Footer>         — minimal: class name, date
```

## Styling Details

- Background: CFR off-white `#f9f7f4`
- Body font: Lora (serif), 18px, line-height 1.75
- Nav/labels: Inter, uppercase tracking
- Section headers: `text-2xl font-semibold`, dark `#1a1a1a`, bottom border divider
- Stat cards: light border, small label + large number, inline flex row
- Max content width: `max-w-3xl mx-auto px-6`
- Hero: `h-[60vh]` with dark gradient overlay, white title text

## Content Source

All text pulled directly from `~/Documents/modern-conflict-sino-india-final.md`.

## Deployment

1. `next.config.js` sets `output: 'export'` and `basePath: '/sino-indian-border-report'`
2. GitHub repo created at `paarth-r/sino-indian-border-report`
3. `out/` pushed to `gh-pages` branch

## Out of Scope

- No CMS, no dynamic data, no authentication
- No interactive map (static image only)
- No mobile-specific breakpoints beyond Tailwind defaults
