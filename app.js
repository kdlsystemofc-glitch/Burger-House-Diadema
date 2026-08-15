/* ==========================================================================
   BURGER HOUSE DIADEMA — JAVASCRIPT LOGIC (KDL V2 PHASE 08 FINAL QA)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Sticky Shadow Elevation on Scroll
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar--scrolled");
      } else {
        navbar.classList.remove("navbar--scrolled");
      }
    }, { passive: true });
  }

  // 2. IntersectionObserver Scroll Engine for Entrance Reveals
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach(element => {
    scrollObserver.observe(element);
    // Fallback ensure visibility for full-page screenshot rendering
    setTimeout(() => {
      element.classList.add("is-visible");
    }, 300);
  });

  // 3. Custom SVG Cursor Tracking (Desktop only > 768px)
  const cursor = document.getElementById("customCursor");
  
  if (cursor && window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const hoverElements = document.querySelectorAll("a, button, .burger-card, .photo-card-wrapper, .divblock-direcciones");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("hovering");
      });
      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovering");
      });
    });
  }

  // 4. Fullscreen Mobile Navigation Drawer
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");
  const menuLinks = document.querySelectorAll(".menu-link-item, .menu-btn-primary");

  if (menuToggleBtn && fullscreenMenu) {
    menuToggleBtn.addEventListener("click", () => {
      fullscreenMenu.classList.add("is-open");
    });
  }

  if (menuCloseBtn && fullscreenMenu) {
    menuCloseBtn.addEventListener("click", () => {
      fullscreenMenu.classList.remove("is-open");
    });
  }

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (fullscreenMenu) fullscreenMenu.classList.remove("is-open");
    });
  });

  // 5. Interactive Scaling Burger Slider Mechanism
  const track = document.getElementById("burgerTrack");
  const cards = document.querySelectorAll(".burger-card");

  function updateActiveCard() {
    if (!track || cards.length === 0) return;
    const center = window.innerWidth / 2;

    cards.forEach((card) => {
      const box = card.getBoundingClientRect();
      const cardCenter = box.left + box.width / 2;
      const distance = Math.abs(center - cardCenter);

      // Card closest to viewport center becomes active (scale 1.05)
      if (distance < box.width / 1.8) {
        card.classList.add("is-active");
      } else {
        card.classList.remove("is-active");
      }
    });
  }

  if (track) {
    track.addEventListener("scroll", () => {
      requestAnimationFrame(updateActiveCard);
    }, { passive: true });
    window.addEventListener("resize", updateActiveCard, { passive: true });
    window.addEventListener("load", updateActiveCard);
    setTimeout(updateActiveCard, 100);
  }
});
