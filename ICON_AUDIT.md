# ICON_AUDIT.md — André Kirsten Attorneys

## PHASE 0 — Stack Detection

| Item | Finding |
|---|---|
| Framework | React 18 + Vite |
| Icon library | `lucide-react` (already installed and in use) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Color tokens | CSS vars in `src/styles/globals.css`; Tailwind theme extensions map token names to hex values |

**Relevant color tokens (do not hardcode hex — use `text-navy`, `text-gold`, etc.):**

| Token name | CSS var | Tailwind class |
|---|---|---|
| Navy (primary) | `--color-navy` | `text-navy` / `bg-navy` |
| Gold (accent) | `--color-gold` | `text-gold` / `bg-gold` |
| Text muted | `--color-text-muted` | `text-text-muted` |
| Text body | `--color-text-body` | `text-text-body` |
| White | — | `text-white` |

---

## PHASE 1 — Emoji Audit

**Search patterns applied:**

- Unicode range U+1F300–U+1FAFF (emoji proper)
- Unicode range U+2600–U+27BF (miscellaneous symbols)
- Unicode range U+2190–U+21FF (arrows)
- Unicode range U+2B00–U+2BFF (supplemental arrows/symbols)

**Files searched:** all `.jsx`, `.tsx`, `.js`, `.ts`, `.html`, `.css` files under `src/` and root.

### Result: ZERO emoji characters found anywhere in the codebase.

Every icon position across the site already uses a `lucide-react` component. No Phase 3 implementation changes are required.

---

## PHASE 2 — Existing Icon Inventory & Size Audit

The table below documents every Lucide icon currently in use, its location, UI region, and the size applied. This serves as the definitive mapping + sizing reference.

| File | Line | Icon | UI Region | Size applied | Notes |
|---|---|---|---|---|---|
| `src/components/home/Hero.jsx` | 104 | `Phone` | CTA / button | `size={14}` | Inside GoldButton "Call Now — 24/7 Emergency" |
| `src/components/home/Hero.jsx` | 144 | `ChevronDown` | Scroll indicator | `size={16}` | Decorative scroll arrow, animated bounce |
| `src/components/home/ServicesPreview.jsx` | 3 | `Lock, Car, Scale` | Feature / service card | `size={22}` | Service card icon, `opacity-40` |
| `src/components/home/ServicesPreview.jsx` | 61 | `ArrowRight` | Inline link | `size={16}` | "View All Services" link arrow |
| `src/components/home/CTABanner.jsx` | 58 | `Phone` | CTA / button | `size={16}` | Inside GoldButton "072 604 5324 — Call Now" |
| `src/components/home/CTABanner.jsx` | 66 | `ArrowRight` | Inline link | `size={15}` | "Or send a message" link arrow |
| `src/components/home/Testimonials.jsx` | 55 | `Quote` | Decorative | `size={48}` | Large background quote mark, `opacity-10` |
| `src/components/home/Testimonials.jsx` | 84 | `ChevronLeft` | Carousel control | `size={18}` | Prev button |
| `src/components/home/Testimonials.jsx` | 105 | `ChevronRight` | Carousel control | `size={18}` | Next button |
| `src/components/shared/InnerHero.jsx` | 81 | `ChevronDown` | Scroll indicator | `size={16}` | Animated bounce, inner page heroes |
| `src/components/shared/ServiceCard.jsx` | 12 | `Lock, Car, Scale, Shield, FileText, ClipboardList` | Feature / service card | `size={20}` | `opacity-40`, driven by `iconMap` from `services.js` |
| `src/components/shared/ResourceCard.jsx` | 9 | `BookOpen` | Feature / resource card | `size={14}` | Guide label row |
| `src/components/shared/ResourceCard.jsx` | 16, 21 | `ArrowRight` | Inline link | `size={14}` | "Read Guide" link arrow |
| `src/components/shared/FAQItem.jsx` | 23 | `Plus` | Accordion toggle | `size={20}` | Rotates 45° on open |
| `src/components/shared/ContactForm.jsx` | 62 | `CheckCircle` | Form success state | `size={40}` | Success confirmation icon |
| `src/components/layout/Navbar.jsx` | 4 | `Menu, Phone, Clock` | Nav / header | `size={11}–{24}` | Utility bar (11px), CTA (12px), hamburger (24px) |
| `src/components/layout/MobileMenu.jsx` | 41 | `X` | Nav / header | `size={24}` | Mobile menu close button |
| `src/components/layout/Footer.jsx` | 50 | `Phone` | Footer | `size={16}` | Emergency number link |
| `src/components/layout/Footer.jsx` | 55 | `MapPin` | Footer | `size={14}` | Address row |
| `src/components/sections/ContactSection.jsx` | 44, 54 | `MapPin` | Contact info | `size={16}` | Physical & postal address |
| `src/components/sections/ContactSection.jsx` | 64 | `Mail` | Contact info | `size={16}` | Email row |
| `src/components/sections/ContactSection.jsx` | 73 | `MessageSquare` | Contact info | `size={16}` | WhatsApp row |
| `src/components/sections/ContactSection.jsx` | 80 | `Printer` | Contact info | `size={16}` | Fax row |
| `src/components/sections/ContactSection.jsx` | 87 | `Globe` | Contact info | `size={16}` | Skype/video row |
| `src/components/sections/ContactSection.jsx` | 132 | `MapPin` | CTA / button | `size={15}` | "Get Directions" GoldButton |
| `src/components/sections/OfficeHours.jsx` | 88 | `Phone` | CTA / button | `size={16}` | "Call 072 604 5324" GoldButton |

---

## PHASE 2 — Prescribed Size System (for future additions)

| UI Region | Tailwind size classes | Rationale |
|---|---|---|
| Inline / trust badges | `w-4 h-4 sm:w-5 sm:h-5` | Subordinate to body text |
| Nav / footer icons | `w-4 h-4 sm:w-5 sm:h-5` | Utility — never competes with content |
| CTA / button icons (Call Now, Book Consultation) | `w-5 h-5 sm:w-6 sm:h-6` | Slightly larger to anchor primary actions |
| Feature / service card icons | `w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14` | Primary visual anchors — optionally wrap in a gold-tinted circular container |
| Decorative / background icons (e.g. Quote) | freeform (`size={48}` etc.) | Low opacity, aria-hidden, purely visual |

**All icons must:**
- Use `currentColor` (Lucide default) so they inherit `text-{token}` from the design system
- Include `aria-hidden="true"` when decorative (text already conveys meaning)
- Include `shrink-0` (`flex-shrink-0`) when inside a flex row to prevent squishing

---

## PHASE 3 — Implementation

**No changes required.** The codebase contains no emoji characters. All icon positions already use correctly imported `lucide-react` components with `aria-hidden="true"` on decorative icons and appropriate size values.

---

## PHASE 4 — Verification Summary

| Check | Status |
|---|---|
| Emoji characters remaining in codebase | **None found** |
| Icon library | `lucide-react` — already installed and used throughout |
| `aria-hidden="true"` on decorative icons | Present on all decorative icons reviewed |
| `flex-shrink-0` / `shrink-0` on flex-row icons | Present where needed (Footer, ContactSection) |
| Colors via design tokens (`text-navy`, `text-white`, `opacity-*`) | Consistent throughout — no hardcoded hex colors on icons |
| Build impact | Zero — no files were modified |
