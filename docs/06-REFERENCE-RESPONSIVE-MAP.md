# 06 — REFERENCE RESPONSIVE MAP: PAPUT MENORCA

> **Phase 02 Output** | KDL V2 Architecture  
> **Reference Target:** [Paput Menorca](https://www.paputmenorca.com/)  
> **Date:** August 14, 2026  

---

## 1. EXECUTIVE SUMMARY

In strict accordance with **MANIFESTO.md Rule 14** (*Responsive Design is Not Stacking*), this document details how the Paput Menorca reference site adapts its hierarchy, geometry, visual density, and interaction patterns across Desktop (`1440px`), Tablet (`768px`), and Mobile (`390px`) viewports.

---

## 2. VIEWPORT-SPECIFIC ADAPTATION BREAKDOWN

### A. Navigation & Header Assembly
* **Desktop (`1440px`):** Logo pinned on left (`container-logo`), CTA pill button ("HACER PEDIDO") + hamburger menu icon pinned on right (`container-navbar`).
* **Tablet (`768px - 1024px`):** Navigation CTA remains visible; hamburger icon opens full-screen slide-down drawer (`.fullscreenmenu`).
* **Mobile (`390px`):** Header items collapse into compact bar; full-screen menu overlay expands to `100vw x 100vh` with oversized mobile CTA button and vertical link stack.

### B. Scene 1: Dark Full-Bleed Hero
* **Desktop (`1440px`):** Full-bleed image background (`100vh`), centered display headline (`80px` font size), floating yellow CTA button overlapping lower image boundary.
* **Mobile (`390px`):** Headline font size scales down (`42px - 48px`); line breaks adapt ("BURGER HOUSE / DIADEMA"); CTA button preserves `999px` rounded pill geometry and centered alignment with generous touch target (`min-height: 48px`).

### C. Scene 2: Asymmetric Manifesto & Photo Stack
* **Desktop (`1440px`):** 2-Column Asymmetric Grid (`60%` left copy, `40%` right stacked location photos).
* **Mobile (`390px`):** 
  * Reflows into a single-column narrative sequence: Headline ("AÇÒ ÉS UNA MANERA DE VIURE") → Manifesto Paragraph → Stacked Location Photos (`100%` width container, `max-height: 380px`).
  * Preserves `20px` rounded photo corners and handwritten sticker overlay (`@houseburguer.diadema`) positioned above the image block.

### D. Scene 3: Center-Focus Scaling Burger Slider
* **Desktop (`1440px`):** Multi-card visible horizontal slider track; centered card scales to `1.0`, side cards rest at `0.85`.
* **Mobile (`390px`):** 
  * Touch-swipe horizontal carousel showing 1 primary card centered (`width: 82vw`) with peeking left/right card edges (`~9vw` visible each side) to signify swipeability.
  * Active center card scaling effect (`scale(0.85) → scale(1.0)`) remains active via touch drag and swipe listeners.

### E. Scene 4: Multi-Row Ticker Marquee
* **Desktop (`1440px`):** 4 stacked marquee rows with alternating solid green and outline display typography (`72px`).
* **Mobile (`390px`):** Font size scales down to `42px - 48px`; row count adjusts to 2-3 visible rows to maintain vertical breathing room; infinite marquee speed adjusts for smaller screen travel distance (`~15s` duration).

### F. Scene 6: Dual Location & Format Cards
* **Desktop (`1440px`):** 2-Column Equal Grid (`50% / 50%`) with vector illustrations centered above address text.
* **Mobile (`390px`):** Reflows to single-column vertical card stack (`100%` width per card); illustration precedes address details; vertical gap between cards set to `2rem`.

### G. Scene 7: Action Ticker & Recruitment Section
* **Desktop (`1440px`):** Horizontal scroll ticker above 2-column recruitment section (left text & button, right cartoon mascot eyes SVG).
* **Mobile (`390px`):** Ticker font size adjusts; recruitment section stacks copy above cartoon eyes graphic, with CTA button spanning full width (`width: 100%`, `max-width: 320px`).

### H. Scene 8: Deep Forest Green Footer
* **Desktop (`1440px`):** 4-Column Utility Grid (`25%` per column) with yellow logo, social media hover row, navigation links, and address details.
* **Mobile (`390px`):** Collapses into a single-column vertical stack: Yellow logo top → Social icon row → Navigation links → Address details → Legal links bottom. Centered text alignment.

---

## 3. INTERACTION & ACCESSIBILITY RESPONSIVE MATRIX

| FEATURE | DESKTOP (`> 768px`) | MOBILE (`≤ 768px`) | RATIONALE |
| :--- | :--- | :--- | :--- |
| **Custom SVG Cursor** | Enabled (`.custom-cursor` active, asset swap on hover). | Disabled (`display: none !important`, `cursor: auto !important`). | Custom cursors interfere with native touch gesture UX on mobile devices. |
| **Slider Navigation** | Scroll track + drag. | Touch swipe / gesture drag with peeking card edges. | Ensures intuitive mobile swipe mental model. |
| **Touch Targets** | Standard (`40px+`). | Enhanced (`min-height: 48px`, `padding: 14px 28px`). | Meets WCAG 2.2 touch target compliance. |
| **Typography Scale** | Monumental (`5rem` / `80px` H1). | Proportional (`2.5rem - 3rem` / `40-48px` H1). | Prevents unwanted text wrapping and horizontal overflow. |

---

*Responsive map established in strict compliance with MANIFESTO.md Rule 14.*
