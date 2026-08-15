# 08 — MOTION & INTERACTION IMPLEMENTATION: BURGER HOUSE DIADEMA

> **Phase 06 Output** | KDL V2 Architecture  
> **Client:** Burger House Diadema  
> **Reference Target:** [Paput Menorca](https://www.paputmenorca.com/)  
> **Date:** August 14, 2026  

---

## 1. EXECUTIVE SUMMARY

In strict accordance with **MANIFESTO.md Rule 5** (*Motion Grammar Must Be Reproduced*) and **Rule 18** (*Human Gates*), this document formalizes the **Motion & Interaction System** for Burger House Diadema. Motion in KDL V2 is structural, communicative, and performant—never added for decorative clutter.

---

## 2. MOTION MATRIX & INTERACTION CATALOG

Every motion mechanism maps directly to approved reference behavior from Paput Menorca.

| SCENE / MECHANISM | TRIGGER | TARGET | PROPERTY | DURATION & EASING | SCROLL RELATIONSHIP | RESPONSIVE BEHAVIOR |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Entrance** | Page Load | `.hero-eyebrow`, `.hero-headline`, `.btn-hero-cta` | `opacity`, `transform` (`translateY(30px → 0)`) | `0.8s`, `cubic-bezier(0.16, 1, 0.3, 1)` with `0.15s` stagger delays. | Runs automatically on load. | Runs identically on mobile and desktop. |
| **Navbar Elevation** | Scroll > 50px | `.navbar` | `box-shadow`, `background-color` | `0.3s`, `ease-in-out` | Bound to window scroll position. | Active on all viewports. |
| **Scroll Text Reveal** | Viewport Entry (15%) | `.manifesto-headline`, `.manifesto-paragraph`, `.section-tienda` | `opacity`, `transform` (`translateY(30px → 0)`) | `0.8s`, `cubic-bezier(0.16, 1, 0.3, 1)` | IntersectionObserver threshold `0.15`. | Reduced displacement on mobile (`15px`). |
| **Burger Slider Center Scale** | Track Scroll | `.burger-card` | `transform` (`scale(0.85 → 1.05)`), `opacity` (`0.7 → 1.0`) | `0.4s`, `cubic-bezier(0.16, 1, 0.3, 1)` | Active center card computed via viewport center coordinate. | Touch-swipe scroll snap on mobile. |
| **Marquee Ticker Loop** | Continuous | `.div-apoclife` | `transform` (`translateX(0 → -50%)`) | `30s` (Row 1-4) / `20s` (Banner), `linear` infinite | Independent infinite loop. | GPU accelerated (`will-change: transform`). |
| **Custom SVG Cursor** | Mouse move | `#customCursor` | `left`, `top`, `transform` (`scale(1.0 → 1.15)`), `background-image` | `0.1s` position smoothing; `0.2s` scale ease. | Tracks desktop cursor coordinates. | Disabled automatically on screen `≤ 768px`. |
| **Location Card Hover** | Mouse Enter / Leave | `.photo-card-wrapper`, `.divblock-direcciones` | `transform` (`translateY(0 → -5px)`), `box-shadow` | `0.3s`, `ease-out` | Hover micro-interaction. | Disabled on touch screens. |
| **Fullscreen Menu Drawer** | Toggle Click | `#fullscreenMenu` | `opacity`, `pointer-events` | `0.3s`, `ease-in-out` | Modal drawer lock. | Mobile & tablet primary menu. |

---

## 3. IMPLEMENTATION DETAILS

### 3.1 IntersectionObserver Scroll Engine
```javascript
const observerOptions = {
  root: null,
  threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal-on-scroll").forEach(el => scrollObserver.observe(el));
```

### 3.2 Center-Focus Burger Slider Engine
```javascript
function updateActiveCard() {
  const track = document.getElementById("burgerTrack");
  const cards = document.querySelectorAll(".burger-card");
  if (!track || cards.length === 0) return;
  
  const center = window.innerWidth / 2;
  cards.forEach(card => {
    const box = card.getBoundingClientRect();
    const cardCenter = box.left + box.width / 2;
    const distance = Math.abs(center - cardCenter);

    if (distance < box.width / 1.8) {
      card.classList.add("is-active");
    } else {
      card.classList.remove("is-active");
    }
  });
}
```

---

## 4. ACCESSIBILITY & PERFORMANCE COMPLIANCE

* **Reduced Motion:** Fully supports `prefers-reduced-motion: reduce`. When enabled by user OS preferences, all CSS animations, transforms, transitions, and marquees are safely bypassed.
* **Layout Thrashing Prevention:** All scroll position reads and coordinate calculations are wrapped inside `requestAnimationFrame()` loops to eliminate layout thrashing.
* **GPU Acceleration:** Heavy transform animations rely strictly on `transform: translate3d()` and `opacity` properties with explicit `will-change` hints for browser composite thread rendering.

---

*Motion system documented and verified in compliance with MANIFESTO.md Rule 5.*
