# 05 — REFERENCE MOTION MAP: PAPUT MENORCA

> **Phase 02 Output** | KDL V2 Architecture  
> **Reference Target:** [Paput Menorca](https://www.paputmenorca.com/)  
> **Date:** August 14, 2026  

---

## 1. EXECUTIVE SUMMARY

In strict accordance with **MANIFESTO.md Rule 13** (*Motion is Architecture*), this document reverses engineers every animation, transition, scroll behavior, hover state, and interactive cursor mechanism observed on `paputmenorca.com`.

---

## 2. MOTION ARCHITECTURE SPECIFICATIONS

### A. Initial Load & Entrance Sequence
* **Trigger:** DOM Content Loaded / Page Mount.
* **Target Elements:** Hero eyebrow paragraph, main display headline ("PAPUT EN CASA"), primary CTA button ("HACER PEDIDO").
* **Animation Property:** `opacity: 0 → 1` and `transform: translateY(30px) → translateY(0px)`.
* **Timing & Easing:** `duration: 800ms`, `easing: cubic-bezier(0.16, 1, 0.3, 1)`.
* **Staggered Delays:**
  * Eyebrow Text: `0ms`
  * Headline: `150ms`
  * Primary Button: `350ms`

### B. Sticky Header & Navigation Transformation
* **Behavior:** Fixed positioning (`position: fixed; top: 0; width: 100%; z-index: 999;`).
* **Visual Interaction:** Remains transparent over the dark hero image and overlays seamlessly as the user scrolls into the light cream body section.
* **Button Hover:** Navigation CTA button ("HACER PEDIDO") scales slightly (`transform: scale(1.05)`) with a subtle shadow shift on hover.

### C. Center-Focus Scaling Burger Slider
* **Mechanism:** Horizontal scroll track (`overflow-x: auto; scrollbar-width: none;`).
* **Active Card Detection Logic:**
  ```javascript
  function updateActiveCard() {
    const center = window.innerWidth / 2;
    cards.forEach((card) => {
      const box = card.getBoundingClientRect();
      const cardCenter = box.left + box.width / 2;
      const distance = Math.abs(center - cardCenter);
      card.classList.toggle("is-active", distance < box.width / 2);
    });
  }
  ```
* **CSS Scale State:**
  * Inactive Cards (`.burger-card`): `transform: scale(0.85); opacity: 0.75; transition: transform 0.3s ease, opacity 0.3s ease;`
  * Active Card (`.burger-card.is-active`): `transform: scale(1.0); opacity: 1.0; z-index: 2;`

### D. Continuous Multi-Row Marquee Tickers
* **Mechanism:** CSS infinite horizontal translate `@keyframes marquee`.
* **CSS Structure:**
  ```css
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .div-apoclife {
    display: flex;
    white-space: nowrap;
    animation: marquee 25s linear infinite;
  }
  ```
* **Rhythm:** Alternating rows run continuously across the viewport width, creating dynamic text stripes behind static foreground elements.

### E. Custom Interactive SVG Cursor Tracking (Desktop Only)
* **Mechanism:** Fixed pointer container (`.custom-cursor`) tracking mouse coordinates across the viewport.
* **JavaScript Coordinates Listener:**
  ```javascript
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  ```
* **Hover Asset Swap:**
  * Normal State: `background-image: url('cursor-hover.svg')`
  * Hover State (`a, button, .hover-target`): `background-image: url('cursor-default.svg')`
* **Mobile Breakpoint Rule:**
  ```css
  @media (max-width: 768px) {
    .custom-cursor { display: none !important; }
    body, a, button { cursor: auto !important; }
  }
  ```

### F. Social Media Icon Hover State Swap
* **Structure:** Dual image container (`.link-redes`) holding `.image-normal` and `.image-hover`.
* **State Behavior:**
  * Default: `.image-normal` is visible (`opacity: 1`), `.image-hover` is hidden (`opacity: 0`).
  * Hover (`.link-redes:hover`): `.image-normal` fades out (`opacity: 0`), `.image-hover` fades in (`opacity: 1`).
  * Transition: `transition: opacity 0.25s ease-in-out;`.

### G. Scroll Reveal Sequence for Body Sections
* **Trigger:** Viewport scroll intersection (`IntersectionObserver` / Webflow scroll trigger).
* **Target Elements:** Section 2 manifesto copy, photo cards, store headline, location cards, recruitment box.
* **Effect:** Smooth entrance reveal (`opacity: 0 → 1`, `translateY(40px → 0)`).

---

## 3. MOTION IMPLEMENTATION STANDARDS FOR CLIENT RE-CREATION

1. **CSS Hardware Acceleration:** Use `transform: translate3d()` and `will-change: transform` on marquee rows and cursor tracking to ensure 60fps performance without jank.
2. **Reduced Motion Compliance:** Respect user accessibility settings (`@media (prefers-reduced-motion: reduce)`): disable infinite marquees and auto-scrolling triggers.
3. **No Heavy Third-Party Libraries:** Implement the scaling slider and cursor tracking via vanilla JavaScript and CSS transitions to maintain zero-dependency performance.

---

*Motion map established in strict compliance with MANIFESTO.md Rule 13.*
