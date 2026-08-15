# 07 — CLIENT DESIGN SYSTEM: BURGER HOUSE DIADEMA

> **Phase 04 Output** | KDL V2 Architecture  
> **Client:** Burger House Diadema  
> **Segment:** Hamburgueria Artesanal  
> **Date:** August 14, 2026  

---

## 1. EXECUTIVE SUMMARY

In strict accordance with **MANIFESTO.md Rule 4** (*Client Design System is Mandatory*) and **Rule 18** (*Human Gates*), this document formalizes the **Client-Owned Design System** for Burger House Diadema. It translates real client evidence (packaging, physical location, culinary assets, logo mark) into production tokens while strictly preserving the approved **Reference-Led Architecture** of Paput Menorca (`03-REFERENCE-LOCK.md`).

> **KDL V2 LAW:**  
> **REFERENCE DNA = ARCHITECTURE** (Proportions, scale, layout geometry, navbar structure, hero overlap).  
> **CLIENT DNA = IDENTITY** (Brand colors, typography identity, photography, copy, custom graphic icons).

---

## 2. COLOR TOKEN SYSTEM (EVIDENCE-BASED)

Every color token is derived from verified physical or gastronomic assets of Burger House Diadema.

| TOKEN NAME | CSS VARIABLE | HEX / RGB | SOURCE EVIDENCE | ROLE & APPLICATION | RATIONALE |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **Brand Primary** | `--color-green-dark` | `#0A3B29` | Logo badge line art, signature green mayo (`imgi_23`), foliage wall (`imgi_31`). | Dominant brand mark, navbar logo text, primary display titles, footer base. | Establishes a grounded, premium-artisan identity rooted in the house signature green mayo and venue greenery. |
| **Brand Secondary** | `--color-brick-red` | `#A6452C` | Brick fireplace/oven (`imgi_12`), kitchen hood (`imgi_17`). | Secondary brand accent, handwritten SVG stickers, secondary badges. | Reflects the physical warmth and heritage of the venue's brick fireplace ("ambiente de casa"). |
| **Brand Accent** | `--color-yellow-accent` | `#FFCC00` | Melted cheddar cheese (`imgi_18`, `imgi_22`), Edison lamp glow (`imgi_12`). | Primary action CTAs, ordering buttons, active indicators. | High-salience culinary accent representing the client's signature melted cheddar burgers. |
| **Accent Hover** | `--color-yellow-hover` | `#E6B800` | Cheddar melt highlights under warm lighting. | Hover and active interactive states for buttons and CTAs. | Smooth interactive feedback on user engagement. |
| **Background Primary**| `--bg-cream` | `#F5F2E9` | Custom printed wrapping parchment paper (`imgi_17`, `imgi_23`), ceiling beams. | Primary background canvas for navbar, manifesto, sliders, and body sections. | Replaces cold sterile white with warm, organic parchment texture matching client packaging. |
| **Background Dark** | `--bg-dark` | `#141414` | Logo background (`imgi_2`), dark dining room walls (`imgi_12`), chef uniform (`imgi_17`). | Full-bleed Hero container base, dark overlay fields. | Provides maximum visual contrast for food photography and hero lighting. |
| **Surface Card** | `--surface-card` | `#FFFFFF` | White ceramic serving plates (`imgi_17`, `imgi_18`, `imgi_21`). | Content card surfaces, photo card containers. | Clean high-contrast ground for food products. |
| **Text Primary** | `--color-text-dark` | `#0A3B29` | Dark logo mark and high-contrast text on cream background. | Major headlines, navigation links, primary body copy on cream. | High legibility (`WCAG 2.2 AAA`) on warm cream background. |
| **Text Light** | `--color-text-light` | `#FFFFFF` | Hero headline text over dark hero background photo. | Hero display text, photo overlay captions. | Crisp contrast on dark overlay containers. |
| **Text Muted** | `--color-text-muted-cream`| `#E2D9C5` | Subtle wall shadows in venue. | Low-contrast display headings in manifesto section. | Preserves reference design grammar for giant manifesto headings. |
| **Border Subtle** | `--border-subtle` | `rgba(10,59,41,0.1)`| Line art icon strokes on wrapping paper. | Section dividers, card outlines, subtle borders. | Clean structural separation without harsh visual lines. |

---

## 3. TYPOGRAPHY SYSTEM

Typography separates **IDENTITY** (Client font family choice) from **GEOMETRY** (Reference scale, width, line breaks, and visual weight).

### Typography Pairings & Rationale

* **DISPLAY & HEADINGS (`--font-display`):** `Syne` (Google Fonts, weights `700`, `800`, `900`).  
  * *Rationale:* `Syne` is a heavy, compressed display typeface with bold stencil/slab character that directly mirrors the heavy block lettering of the "HOUSE BURGUER DIADEMA" circular logo mark (`imgi_2`). It maintains the monumental uppercase geometry of Paput Menorca (`3.5rem - 6.5rem`) with tight line-height (`0.95`).
* **BODY & UI TEXT (`--font-body`):** `Plus Jakarta Sans` (Google Fonts, weights `400`, `500`, `600`, `700`, `800`).  
  * *Rationale:* A modern, highly legible, warm geometric sans-serif that ensures effortless readability for menu descriptions, paragraphs, address information, and action buttons.

### Typography Scale Matrix

| ROLE | FONT FAMILY | WEIGHT | SCALE (DESKTOP) | SCALE (MOBILE) | LINE HEIGHT | LETTER SPACING |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Hero Display (H1)** | `Syne` | `900` | `clamp(3.5rem, 8vw, 6.5rem)` | `2.8rem` | `0.95` | `-0.02em` |
| **Manifesto Display (H2)**| `Syne` | `900` | `clamp(2.2rem, 4.5vw, 3.8rem)`| `2.0rem` | `1.05` | `-0.01em` |
| **Hero Eyebrow** | `Plus Jakarta Sans` | `600` | `1.25rem` | `1.0rem` | `1.4` | `0.02em` |
| **Body Paragraph** | `Plus Jakarta Sans` | `400 / 600` | `1.125rem` | `1.0rem` | `1.65` | `0.0` |
| **Navbar CTA Button** | `Plus Jakarta Sans` | `800` | `0.85rem` | `0.75rem` | `1.0` | `0.08em` |
| **Hero CTA Button** | `Plus Jakarta Sans` | `800` | `1.125rem` | `1.0rem` | `1.0` | `0.08em` |

---

## 4. IMAGE LANGUAGE & GEOMETRY

* **Hero Aspect Ratio & Fill:** `100vh` viewport height container (`calc(100vh - 76px)` below top navbar). `object-fit: cover` with `object-position: center 35%` to keep the artisan chef hands and burgers centered.
* **Photo Card Radius Logic:**
  * Action CTAs / Buttons: `--radius-pill: 999px` (full pill shape).
  * Location / Ambiance Photo Cards: `--radius-card: 20px` (rounded rectangle matching reference location stack).
  * Hero Container: `0px` (full-bleed sharp rectangular frame).
* **Overlay & Contrast Filter:** 3-stop linear gradient (`linear-gradient(180deg, rgba(20,20,20,0.65) 0%, rgba(20,20,20,0.45) 50%, rgba(20,20,20,0.75) 100%)`) ensuring `WCAG 2.2 AAA` contrast ratio (`> 7:1`) for white hero text over dark kitchen background.
* **Hover Interaction:** Location photo card scales subtly on hover (`transform: scale(1.05)` with `0.5s` ease) inside an overflow-hidden wrapper with soft elevation shadow (`box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12)`).

---

## 5. GRAPHIC LANGUAGE & BRAND MOTIFS

* **Logo Vector Line Art:** Clean SVG vector re-creation of the circular badge logo (`viewBox="0 0 300 60"`), featuring the house chimney smoke icon, burger outline, and dual-color text ("BURGER HOUSE" in `#0A3B29`, "DIADEMA" in `#A6452C`).
* **Handwritten SVG Sticker:** Custom vector handwritten path (`stroke="#A6452C" stroke-dasharray="2 2"`) with tilted text (`@houseburguer.diadema`) positioned dynamically below the manifesto copy in Scene 2.
* **Icon Set:** Clean vector SVG icons rendered in `#0A3B29` (Dark Forest Green) for the hamburger menu toggle, ordering buttons, and location indicators.

---

## 6. UI COMPONENTS & INTERACTION LANGUAGE

* **Primary Hero CTA Button:**
  * Background: `#FFCC00` (Sunny Yellow).
  * Text: `#0A3B29` (Dark Forest Green, `font-weight: 800`, `letter-spacing: 0.08em`, `uppercase`).
  * Shape: Pill geometry (`border-radius: 999px`, `padding: 18px 48px`).
  * Hover: `transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 32px rgba(255, 204, 0, 0.5);`.
* **Top Navigation Bar:**
  * Background: `#F5F2E9` (Warm Cream).
  * Logo: `#0A3B29` (Dark Forest Green).
  * CTA Button: `#FFCC00` (Sunny Yellow pill with `#0A3B29` text).
  * Toggle Icon: 3 horizontal bars in `#0A3B29`.

---

## 7. MOTION PERSONALITY

* **Entrance Animation Timing:** `duration: 0.8s`, `easing: cubic-bezier(0.16, 1, 0.3, 1)`.
* **Stagger Delays:** Eyebrow (`0.1s`) → Headline (`0.25s`) → CTA Button (`0.45s`).
* **Hover Feedback:** `0.2s` ease-in-out transition for button transforms and shadow elevation.
* **Custom Cursor Mechanics:** Desktop cursor tracking pointer coordinates with state toggle (`.custom-cursor.hovering` scales up to `1.15` with yellow checkmark highlight on link hover).

---

## 8. SUMMARY OF CHANGES FROM PHASE 03

1. **Centralized CSS Token System:** Standardized all colors, font families, radiuses, and container widths into `:root` CSS custom variables in `style.css`.
2. **Refined Typography Pairing:** Formally tokenized `Syne` for display headers and `Plus Jakarta Sans` for body/UI copy across all breakpoints.
3. **Formalized Image Language:** Enforced `--radius-card: 20px` for location photo cards, `999px` for pill buttons, and explicit 3-stop gradient overlay for hero legibility.
4. **Verified Color Assignment:** Locked Dark Forest Green (`#0A3B29`), Terracotta (`#A6452C`), Sunny Yellow (`#FFCC00`), and Warm Cream (`#F5F2E9`) to their exact evidence-backed origins.

---

*Design system established in strict compliance with MANIFESTO.md Rule 4.*
