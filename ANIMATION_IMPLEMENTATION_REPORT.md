# ANIMATION_IMPLEMENTATION_REPORT.md — André Kirsten Attorneys

## Phase 0 — Detection Summary

| Item | Finding |
|---|---|
| GSAP | Not installed — not in `package.json`, no script tags, no imports |
| Animation library in use | **Framer Motion v12** (already installed, used throughout) |
| Decision | All animations implemented with Framer Motion to match existing patterns |
| GSAP note | Could be added later for timeline-driven sequences, but Framer Motion covers all requirements without adding a dependency |

---

## Changes Made

### `src/components/home/Hero.jsx` — Phase 1: Word-Drop-In

**What changed:**
- Added `useReducedMotion` to the Framer Motion import
- Added `const dropEase = [0.34, 1.56, 0.64, 1]` — a cubic-bezier with slight overshoot, approximating GSAP's `back.out(1.2)` for a physical "drop and settle" feel
- Added `const prefersReduced = useReducedMotion()` hook call
- Changed word animation from `y: 24 → 0` (slide up) to `y: -20 → 0` (drop down from above)
- Changed easing from standard `[0.4, 0, 0.2, 1]` to `dropEase` for the bounce-settle
- Adjusted timing: `duration: 0.6 → 0.5s`, `delay: 0.2 + i * 0.07 → 0.15 + i * 0.12`
- Converted the "André Kirsten Attorneys" subtitle `<span>` to a `<motion.span>` with the same drop animation, triggering after the last word

**Final timing (5 words + subtitle = 6 elements):**

| Element | Start | End |
|---|---|---|
| "Criminal" (word 0) | 0.15s | 0.65s |
| "Defence" (word 1) | 0.27s | 0.77s |
| "Lawyer" (word 2) | 0.39s | 0.89s |
| "Cape" (word 3) | 0.51s | 1.01s |
| "Town" (word 4) | 0.63s | 1.13s |
| "André Kirsten Attorneys" | 0.75s | **1.25s** |

Total sequence: **1.25s ≤ 1.5s** ✓

**Reduced motion:** When `prefers-reduced-motion: reduce` is set, `initial` is set to the final state for all word spans and the subtitle — no animation occurs, elements appear at full opacity immediately.

---

### `src/components/home/ValueProp.jsx` — Phase 2: Cards Slide-In + Phase 3: Number Pulse

**What changed:**
- Added `useReducedMotion` to import and called `useReducedMotion()` in component
- Moved `containerVariants` and `itemVariants` inside the component so they can reference `prefersReduced`
- **Animation order (right → left):** Added `staggerDirection: -1` to `containerVariants` — Framer Motion staggers from last child to first, so Card 3 ("Personalized Attention") animates first, Card 2 next, Card 1 last
- **Slide direction:** Changed `itemVariants.hidden` from `{ opacity: 0, y: 30 }` to `{ opacity: 0, x: -60 }` — each card individually slides in from the left
- Adjusted stagger: `staggerChildren: 0.12 → 0.18s`
- Card duration: `0.5 → 0.55s`
- Added index `i` to the `pillars.map()` call
- Converted the decorative number `<span>` to `<motion.span>` with `animate={{ scale: [1, 1.08, 1] }}`, `duration: 2s`, `repeat: Infinity`, `ease: 'easeInOut'`, stagger delay `i * 0.4s` between numbers

**Reduced motion:** In reduced-motion mode, `itemVariants.hidden` is `{ opacity: 1, x: 0 }` (already at final state) and `transition.duration` is `0`. Number pulse `animate` is set to `{}` (no animation).

---

### `src/components/sections/Values.jsx` — Phase 3: Number Pulse (About page)

**What changed:**
- Added `useReducedMotion` to import
- Added `const prefersReduced = useReducedMotion()` in component
- Added index `i` to `pillars.map()`
- Converted decorative number `<span>` to `<motion.span>` with scale pulse: `[1, 1.08, 1]`, 2s loop, stagger `i * 0.4s`

---

### `src/components/home/ServicesPreview.jsx` — Phase 3: Number Pulse (Home Services Preview)

**What changed:**
- Added `useReducedMotion` to import
- Added `const prefersReduced = useReducedMotion()` in component
- Added index `i` to `featured.map()`
- Converted decorative number `<span>` to `<motion.span>` with scale pulse: `[1, 1.08, 1]`, 2s loop, stagger `i * 0.4s`

---

### `src/components/shared/ServiceCard.jsx` — Phase 3: Number Pulse (Services page grid)

**What changed:**
- Added `import { motion, useReducedMotion } from 'framer-motion'`
- Added `const prefersReduced = useReducedMotion()` in component
- Converted decorative number `<span>` to `<motion.span>` with scale pulse: `[1, 1.08, 1]`, 2s loop
- Delay computed as `(parseInt(id, 10) - 1) * 0.3s` so each service card's number (01–06) pulses at a staggered offset, creating a ripple effect across the grid

---

## Technical Decisions

### Why Framer Motion instead of GSAP or CSS keyframes?

The codebase exclusively uses Framer Motion for all animation. Using a second animation library (GSAP) would add ~100KB to the bundle and create two competing animation paradigms. CSS `@keyframes` would work but lacks the `useReducedMotion` hook integration and `whileInView` scroll-trigger that the existing patterns rely on. Framer Motion covers all three phases cleanly.

### Why `transform: scale()` for the number pulse (not `font-size`)?

`font-size` animation causes layout reflow every frame, affecting surrounding text flow and triggering jank. `transform: scale()` is GPU-composited — only the compositing layer changes, not the layout. A scale of `1.08` on a `text-5xl` element (~3rem) approximates a +2–3px visual size increase with zero layout shift.

### Why `cubic-bezier(0.34, 1.56, 0.64, 1)` for the word-drop?

This bezier goes slightly past the target value (overshoots to ~y: +4px equivalent) before settling at y: 0, creating a physical "drop and bounce" feel. It's the CSS equivalent of GSAP's `back.out(1.2)`.

### Why `staggerDirection: -1` for card order?

Framer Motion's `staggerDirection: -1` staggers from the last child index to the first. With three cards (index 0, 1, 2) and `staggerDirection: -1`, the animation fires: index 2 ("Personalized Attention") → index 1 ("Prosecutorial Insight") → index 0 ("24/7 Availability"). Each card still slides in from the left individually.

---

## Phase 5 — Verification

| Check | Result |
|---|---|
| Hero word-drop completes ≤ 1.5s | ✓ Last element settles at 1.25s |
| Cards animate right-to-left (3→2→1) | ✓ `staggerDirection: -1` on container |
| Each card slides in from left | ✓ `x: -60 → 0` on item variants |
| Number pulse uses `transform` not `font-size` | ✓ `scale: [1, 1.08, 1]` via Framer Motion |
| No layout jitter from pulse | ✓ GPU-composited `transform`, no reflow |
| Reduced motion: hero words skip animation | ✓ `initial` set to final state when `prefersReduced` |
| Reduced motion: cards skip animation | ✓ `hidden` variant = final state when `prefersReduced` |
| Reduced motion: pulse disabled | ✓ `animate={}` when `prefersReduced` |
| CSS fallback (`animation-duration: 0.01ms`) | ✓ Already in `globals.css` for CSS animations |
| Files modified | 5 |
| Files created | 1 (this report) |
| Layout restructured | No |
| Existing classes renamed | No |
