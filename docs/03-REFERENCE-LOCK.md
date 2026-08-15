# 03 — REFERENCE LOCK: PAPUT MENORCA ARCHITECTURE

> **Phase 02 Output** | KDL V2 Architecture  
> **Reference Target:** [Paput Menorca](https://www.paputmenorca.com/)  
> **Reference Full Canvas:** 1513px x 4585px  
> **Date:** August 14, 2026  

---

## 1. EXECUTIVE SUMMARY

This document locks the **Reference Architecture** derived from reverse engineering `paputmenorca.com` (`referencia/reference-full.png.png`). In strict accordance with **MANIFESTO.md Rule 1** (*Reference DNA controls HOW the experience is constructed; Client DNA controls WHO the experience belongs to*), this document defines the immutable structural target for spatial rhythm, scale, interaction, and motion logic.

---

## 2. STATIC DECONSTRUCTION (SCENE-BY-SCENE ANALYSIS)

### Scene 1: Full-Bleed Dark Hero (`0px → 720px` | `~100vh`)
* **Viewport Height:** `100vh` (720px canvas frame).
* **Content Width:** 100% full-bleed background; centered text container (`max-width: 900px`).
* **Grid:** Single-column centered stack.
* **Dominant Visual Mass:** High-impact full-bleed photography of an opened burger delivery box on a clean counter.
* **Typography Scale:**
  * Eyebrow: `1.25rem` (20px), neutral off-white, sans-serif.
  * Headline: Monumental display caps (`~5rem` / `80px`), ultra-bold condensed, white (`#FFFFFF`).
* **Image Scale & Aspect Ratio:** Full width, 16:9 viewport occupation.
* **Alignment:** Center aligned.
* **Whitespace:** Generous top padding (`180px`), breathing room around headline.
* **Overlaps:** Floating yellow CTA button overlaps the bottom edge of the delivery box image; logo & CTA header float stickily over the image top.
* **Background:** Dark image container (`#141414` base).
* **Section Transition:** Hard clean edge transitioning into warm cream background (`#F5F2E9`).
* **Visual Density:** Low text density, maximum visual impact.

### Scene 2: Brand Manifesto & Dual Photo Stack (`720px → 1520px`)
* **Viewport Height:** `~800px`.
* **Content Width:** 1200px container (`~80vw`).
* **Grid:** 2-Column Asymmetrical Grid (Left `60%`, Right `40%`).
* **Dominant Visual Mass:** Stacked vertical location photographs on the right vs. oversized manifesto text on the left.
* **Typography Scale:**
  * Section Headline: Giant low-contrast display text ("AÇÒ ÉS UNA MANERA DE VIURE" | `~4rem` / `64px`) in soft cream-yellow (`#EDE7D3`).
  * Body Text: `1.125rem` (18px) dark green/charcoal sans-serif with bold emphasis.
* **Image Scale & Aspect Ratio:** Vertical location photos (`450px` height, `~3:4` aspect ratio) with smooth rounded corners (`border-radius: 20px`).
* **Alignment:** Left-aligned copy; right-aligned image column.
* **Whitespace:** High breathing space around headline and paragraph.
* **Overlaps:** Handwritten SVG sticker overlay (`@paputmenorca`) overlaps whitespace between copy and images.
* **Background:** Solid Warm Cream (`#F5F2E9`).
* **Section Transition:** Continuous background flow into Scene 3.
* **Visual Density:** Medium density; high editorial feel.

### Scene 3: Interactive Burger Carousel ("Nuestras Burgers") (`1520px → 2380px`)
* **Viewport Height:** `~860px`.
* **Content Width:** 100% viewport width with horizontal overflow mask.
* **Grid:** Horizontal card slider track (`flex`, `gap: 2rem`, center-focused active card).
* **Dominant Visual Mass:** Floating isolated transparent PNG burger cutouts (`scale(1.0)` active center vs `scale(0.85)` inactive side cards).
* **Typography Scale:**
  * Section Header: Playful handwritten SVG title banner ("Nuestras burgers").
  * Card Headline: Heavy display caps (`~1.75rem` / `28px`), dark green (`#0F3E2E`).
  * Ingredients Text: Small centered caption (`~0.95rem` / `15px`).
* **Image Scale & Aspect Ratio:** Square PNG cutouts (`~350px x 350px`) floating above card titles without containers.
* **Alignment:** Centered within each card; horizontally centered in viewport.
* **Whitespace:** Expansive vertical padding (`100px` top/bottom) creating focal isolation around burgers.
* **Overlaps:** Burger bun top slightly breaks card boundary.
* **Background:** Solid Warm Cream (`#F5F2E9`).
* **Section Transition:** Direct progression to Marquee Section.
* **Visual Density:** Focus-driven; high visual product dominance.

### Scene 4: Multi-Row Ticker Marquee ("A Poc a Poc Life") (`2380px → 2920px`)
* **Viewport Height:** `~540px`.
* **Content Width:** 100% full-bleed infinite horizontal loop.
* **Grid:** 4 stacked horizontal marquee rows running in alternating directions or synchronized flow.
* **Dominant Visual Mass:** Repeating monumental typography ("A POC A POC LIFE") interleaved with mascot icon SVGs.
* **Typography Scale:** Massive outline & filled display caps (`~4.5rem` / `72px`).
* **Image Scale & Aspect Ratio:** SVG mascot icons (`~60px` size) repeating between words.
* **Alignment:** Full-bleed horizontal stripe.
* **Whitespace:** Tight vertical row spacing (`0.5rem`).
* **Overlaps:** Centered vertical image card overlaps the multi-row text background in the center foreground.
* **Background:** Solid Warm Cream (`#F5F2E9`).
* **Section Transition:** Seamless flow into Merchandise section.
* **Visual Density:** High rhythmic graphic density.

### Scene 5: Merchandise & Apparel Showcase (`2920px → 3400px`)
* **Viewport Height:** `~480px`.
* **Content Width:** 1000px container.
* **Grid:** Single column centered layout with layered central asset.
* **Dominant Visual Mass:** Stacked apparel bottle/t-shirt embroidery cutout images with overlapping position.
* **Typography Scale:** Manifesto headline in display caps (`~2.25rem` / `36px`), dark green.
* **Alignment:** Center aligned.
* **Whitespace:** Balanced top/bottom margins (`80px`).
* **Background:** Solid Warm Cream (`#F5F2E9`).
* **Section Transition:** Transition to Location Cards.
* **Visual Density:** Medium; focal product highlight.

### Scene 6: Dual Location & Format Cards (`3400px → 3900px`)
* **Viewport Height:** `~500px`.
* **Content Width:** 1100px container (`~85vw`).
* **Grid:** 2-Column Equal Grid (`50% / 50%`).
* **Dominant Visual Mass:** Custom venue format vector illustrations (`chiringuito.svg` vs `pedidos.svg`).
* **Typography Scale:**
  * Card Title: Bold condensed display (`~1.5rem` / `24px`).
  * Address & Hours: Clean medium body text (`~1rem` / `16px`).
* **Alignment:** Centered content per column card.
* **Whitespace:** Equal column gap (`3rem`), generous internal card padding.
* **Background:** Solid Warm Cream (`#F5F2E9`).
* **Section Transition:** Progression into Delivery Callout Banner.
* **Visual Density:** Clean informational density.

### Scene 7: Interactive Delivery Callout Banner & Team Box (`3900px → 4300px`)
* **Viewport Height:** `~400px`.
* **Content Width:** 100% full-bleed marquee banner + high-visibility yellow recruitment block.
* **Grid:** Full-bleed horizontal scroll bar above a split 2-column recruitment section.
* **Dominant Visual Mass:** High-contrast Sunny Yellow (`#FFCC00`) recruitment container featuring mascot cartoon eyes SVG (`ojos.svg`).
* **Typography Scale:** Giant display text ("PIDE AQUÍ O AQUÍ" | `~3.5rem`), bold recruitment headline.
* **Alignment:** Left-to-right continuous horizontal flow.
* **Background:** High-impact Sunny Yellow (`#FFCC00`).
* **Section Transition:** Hard transition into Deep Green Footer.
* **Visual Density:** High energy, action-oriented.

### Scene 8: Deep Green Navigation Footer (`4300px → 4585px`)
* **Viewport Height:** `~285px`.
* **Content Width:** 1200px container.
* **Grid:** 4-Column Navigation & Legal Grid (`25%` per column).
* **Dominant Visual Mass:** Giant Yellow Brand Logo ("PAPUT") on the upper left + social media icon row.
* **Typography Scale:** Small clean navigation links (`0.9rem` / `14px`) in yellow and white text.
* **Alignment:** Left-aligned column lists.
* **Background:** Deep Forest Green (`#0A3B29`).
* **Section Transition:** Terminal page footer.
* **Visual Density:** Organized, high-utility navigation structure.

---

## 3. MACROSCOPIC PAGE SILHOUETTE (PROPORTIONAL ASCII MAP)

```
+-------------------------------------------------------------------+
| [NAVBAR] Logo (Left)                    [HACER PEDIDO] (Right) =  |  (Sticky Header)
+-------------------------------------------------------------------+
|                                                                   |
|                   [FULL-BLEED DARK HERO IMAGE]                    |
|                                                                   |  SCENE 1: HERO
|                Con nuestro servicio a domicilio disfruta de       |  Height: ~100vh
|                         P A P U T  E N  C A S A                   |  Bg: Dark Charcoal
|                             [HACER PEDIDO]                        |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
|  AÇÒ ÉS UNA MANERA DE VIURE           +------------------------+  |
|                                       | [LOCATION PHOTO 1]     |  |  SCENE 2: MANIFESTO
|  Paput es un restaurante chiringuito  | Rounded corners (20px) |  |  2-Column Asymmetric
|  en el Puerto de Mahón...             +------------------------+  |  Bg: Cream (#F5F2E9)
|  @paputmenorca (Sticker)              | [LOCATION PHOTO 2]     |  |
|                                       +------------------------+  |
+-------------------------------------------------------------------+
|                     ~ NUESTRAS BURGERS ~                          |  SCENE 3: CAROUSEL
|                                                                   |  Active Card Scale (1.0)
|  +----------------+   +----------------+   +----------------+     |  Inactive Card Scale (0.85)
|  | (Cutout PNG)   |   | (Cutout PNG)   |   | (Cutout PNG)   |     |  Transparent Burger
|  |  LA CLÁSICA    |   |  BACON CHEESE  |   |    MCATOL      |     |  Cutouts
|  +----------------+   +----------------+   +----------------+     |  Bg: Cream (#F5F2E9)
|                             [HACER PEDIDO]                        |
+-------------------------------------------------------------------+
| A POC A POC LIFE  (S)  A POC A POC LIFE  (S)  A POC A POC LIFE    |  SCENE 4: MARQUEE
| A POC A POC LIFE (Outline) A POC A POC LIFE A POC A POC LIFE      |  Multi-Row Ticker
| A POC A POC LIFE  (S)  A POC A POC LIFE  (S)  A POC A POC LIFE    |  + Overlapping Apparel
|                    +-----------------------+                      |  Card Foreground
|                    | [APPAREL T-SHIRT CARD]|                      |  Bg: Cream (#F5F2E9)
|                    +-----------------------+                      |
+-------------------------------------------------------------------+
|  NOS VESTIMOS COMO HABLAMOS, A POC A POC Y CON SABOR...           |  SCENE 5: SHOP
|                             [NUESTRA TIENDA]                      |  Bg: Cream (#F5F2E9)
+-------------------------------------------------------------------+
| +-------------------------------+   +---------------------------+ |  SCENE 6: LOCATIONS
| | [ILLUSTRATION: CHIRINGUITO]   |   | [ILLUSTRATION: DELIVERY]  | |  2-Column Equal Grid
| | CHIRINGUITO / RESTAURANTE     |   | DELIVERY / TAKE AWAY      | |  Bg: Cream (#F5F2E9)
| | Andén de poniente S/N...      |   | Avinguda de Josep A...    | |
| +-------------------------------+   +---------------------------+ |
+-------------------------------------------------------------------+
| <<< PIDE AQUÍ   [HACER PEDIDO]   O AQUÍ   (WA)   PIDE AQUÍ >>>    |  SCENE 7: BANNER
|-------------------------------------------------------------------|  Horizontal Ticker +
| SI QUIERES UNIRTE AL EQUIPO                       (  O   O  )    |  Yellow Recruitment Box
| Escríbenos a rrhh@paputmenorca.com                Mascot Eyes     |  Bg: Sunny Yellow (#FFCC00)
|                             [CONTÁCTANOS]                         |
+-------------------------------------------------------------------+
| PAPUT (Yellow Logo)      (IG) (WA) (DELIVERY) (TIKTOK)            |  SCENE 8: FOOTER
| [HACER PEDIDO]           CHIRINGUITO          CONTACTO            |  4-Column Utility Grid
| [DELIVERY]               DELIVERY / TAKE AWAY COOKIES             |  Bg: Forest Green (#0A3B29)
+-------------------------------------------------------------------+
```

---

## 4. DESIGN GRAMMAR

* **Composition Grammar:** Asymmetrical balances, strong contrast between monumental headlines and generous whitespace, alternating full-bleed imagery with contained 2-column cards.
* **Spacing Grammar:** Generous vertical section rhythm (`80px - 140px` padding), breathing room around text, strict horizontal container boundaries (`max-width: 1200px`).
* **Typography Geometry:** 
  * Headlines: Compressed heavy display sans-serif caps (`uppercase`, tight line height `0.95 - 1.05`, scale `2.5rem - 5rem`).
  * Body: Legible neutral sans-serif (`16px - 18px`, line height `1.5`).
  * Accents: Playful handwritten SVG scripts for tags, stickers, and section subtitles.
* **Image Geometry:** Floating transparent PNG product cutouts for food; soft-rounded rectangular frames (`border-radius: 20px`) for physical location photography.
* **Color Hierarchy:**
  * Background Neutral: Warm Cream (`#F5F2E9`) — `70%` surface area.
  * Contrast Dark: Deep Charcoal / Dark Green (`#0A3B29` / `#141414`) — `20%` structure & footer.
  * Primary Interactive Accent: Sunny Yellow (`#FFCC00`) — `10%` CTAs, buttons, and callout blocks.
* **Border & Radius Grammar:** Soft, friendly rounded pill buttons (`border-radius: 999px`); rounded photo cards (`border-radius: 20px`); clean un-bordered content cards.
* **Motion Grammar:** 
  * Continuous horizontal marquees for brand slogans and ordering prompts.
  * Scroll-synchronized active card scaling (`scale(0.85) → scale(1.0)` for centered slider card).
  * Fade-in entrance sequences with slight upward displacement (`opacity: 0 → 1`, `translateY(20px → 0)`).
* **Interaction Grammar:**
  * Custom floating SVG cursor (`cursor-hover.svg`) that expands/changes image when hovering clickable elements (`a, button`).
  * Social icon image-swap on hover (`image-normal` hides, `image-hover` fades in).
* **Responsive Grammar:**
  * Mobile drops 2-column grids into single-column vertical stacks.
  * Burger slider converts from multi-card carousel to touch-swipe horizontal track.
  * Custom cursor disables automatically on screens `≤ 768px`.

---

## 5. SIGNATURE CONCRETE DEVICES (MEMORABLE MECHANISMS)

1. **Center-Focus Scaling Burger Slider with Floating PNG Cutouts:**  
   As the user scrolls horizontally through the burger menu, the active burger centered in the viewport scales up to `scale(1.0)` with full opacity, while neighboring burgers scale down to `scale(0.85)` with reduced prominence. The burgers are transparent PNG cutouts that float directly over the background and titles.
2. **Custom Interactive Dual-State SVG Cursor:**  
   Desktop visitors experience a custom floating graphic cursor (`custom-cursor`) that dynamically swaps SVG assets when hovering over links, CTAs, and interactive elements.
3. **Multi-Row Alternating Text & Icon Marquee Ticker:**  
   A full-width decorative band featuring multiple stacked rows of repeating typography ("A POC A POC LIFE"), alternating between filled dark green and outline text, interleaved with custom mascot SVG icons.
4. **Handwritten SVG Sticker & Mascot Overlays:**  
   Informal, playful handwritten SVG stickers (e.g. `@paputmenorca` in red, cartoon eye graphics `ojos.svg`) pinned dynamically onto section gaps and images, breaking rigid layout lines.
5. **Horizontal Action Ticker Banner ("PIDE AQUÍ O AQUÍ"):**  
   A continuous scrolling action strip combining high-contrast typography ("PIDE AQUÍ", "O AQUÍ") with inline CTA buttons and social ordering icons (WhatsApp).

---

## 6. ANTI-GENERIC DIFFERENCE (WHY THIS IS NOT A TEMPLATE)

* **No Generic 3-Card Grid:** Products are presented via an interactive scaling focus slider with floating transparent cutouts rather than rigid rectangular cards with stock frames.
* **No Cold SaaS Palette:** Instead of generic blue/white gradients, the palette pairs a warm, inviting cream base (`#F5F2E9`) with deep forest green (`#0A3B29`) and high-impact sunny yellow (`#FFCC00`), conveying authentic artisanal food identity.
* **Asymmetric Architectural Rhythm:** Section layouts break predictability by alternating full-bleed hero photos, 2-column asymmetric manifesto text, horizontal multi-row marquees, and dual location cards.
* **Playful Micro-Interactions:** Custom SVG cursors, handwritten sticker overlays, and mascot eye graphics give the site an organic, handcrafted brand personality that cannot be replicated by generic frameworks.

---

## 7. REFERENCE LOCK BOUNDARIES

### MUST PRESERVE (Immutable Architectural DNA)
* Full-bleed dark hero scene with monumental display typography and floating yellow CTA button.
* 2-column asymmetric manifesto section (left text, right stacked location photos with rounded corners).
* Interactive center-focus scaling burger slider with floating transparent PNG cutouts.
* Multi-row rhythmic marquee ticker section.
* High-impact yellow recruitment callout box with mascot graphic details.
* Dual-card venue location breakdown layout (Chiringuito vs Delivery/Takeout).
* Deep forest green footer with yellow logo and social icon hover swap.
* Custom SVG cursor desktop interaction.

### SHOULD PRESERVE (High-Fidelity Guidance)
* Warm cream background tone (`#F5F2E9` or client equivalent cream) as primary canvas.
* Pill-shaped CTA button geometry (`border-radius: 999px`) in high-contrast accent color.
* Handwritten SVG sticker overlays for social handles and section subtitles.
* Monumental compressed display typography in uppercase for all major headings.

### MAY ADAPT (Client DNA Adjustments)
* Specific font family selection (adapted to client identity evidence).
* Accent color shades (derived from client cheddar gold `#E8921A` and brick red `#A6452C`).
* Asset framing and aspect ratios (adapted to client photography dimensions).
* Specific SVG icon illustrations (tailored to client's house chimney and food icons).

### MUST NOT COPY (Forbidden Identity Theft)
* Client name "Paput" or brand name text.
* Location strings ("Menorca", "Mahón", "Puerto de Mahón").
* Catalan language copy ("Açò és una manera de viure", "A poc a poc life").
* Proprietary photography or proprietary logo SVGs from Paput Menorca.

---

*Reference lock established in strict compliance with MANIFESTO.md Rule 1 and Rule 2.*
