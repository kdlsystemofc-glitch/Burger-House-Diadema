# 04 — CLIENT ↔ REFERENCE MAP: BURGER HOUSE DIADEMA

> **Phase 02 Output** | KDL V2 Architecture  
> **Client:** Burger House Diadema  
> **Reference Target:** [Paput Menorca](https://www.paputmenorca.com/)  
> **Date:** August 14, 2026  

---

## 1. EXECUTIVE MAPPING SUMMARY

In strict accordance with **MANIFESTO.md Rule 1** (*Reference DNA controls HOW the experience is constructed; Client DNA controls WHO the experience belongs to*) and **Rule 16** (*Preserve mechanisms; Replace identity*), this document maps every structural scene and signature interaction device of the Paput Menorca reference to the authentic content and imagery of Burger House Diadema.

---

## 2. COMPREHENSIVE ELEMENT MAPPING MATRIX

| REFERENCE SCENE / ELEMENT | REFERENCE FUNCTION | CLIENT CONTENT (BURGER HOUSE DIADEMA) | CLIENT ASSET | ADAPTATION STRATEGY |
| :--- | :--- | :--- | :--- | :--- |
| **Scene 1: Full-Bleed Dark Hero** | High-impact initial visual hook; establishes immediate delivery & ordering proposition. | *"Burger House Diadema — Hambúrgueres artesanais e porções no conforto da sua casa."* | **`imgi_17.jpg`** (1440x979 px chef tray) OR **`imgi_18.jpg`** (1065x1065 px burger macro). | Retain full-bleed dark container (`100vh`), monumental display typography, and floating yellow CTA button ("PEDIR ON-LINE"). |
| **Scene 2: Asymmetrical Manifesto & Location Stack** | Tells brand story; grounds digital experience in physical venue ambiance. | *"O PRAZER DO HAMBÚRGUER ARTESANAL NO ACONCHEGO DE UMA CASA" — Espaço descontraído e inclusivo no Centro de Diadema.* | **`imgi_12.jpg`** (Dining room, brick fireplace & Edison lights) + **`@houseburguer.diadema`** SVG sticker. | 2-Column Asymmetric Grid: Left column features house manifesto; Right column stacks photo of brick fireplace with `border-radius: 20px`. |
| **Scene 3: Center-Focus Scaling Burger Slider** | Interactive product discovery showcasing signature artisanal burgers. | **Burger House Specialties:**<br>1. Brioche Gourmet (Fried cheese disc + bacon)<br>2. Australian Cheddar (Double patty + cheddar)<br>3. Couve Crispy Special (Brioche + pepper jelly)<br>4. Hambúrguer Clássico & Vegano | **`imgi_18.jpg`** (Brioche)<br>**`imgi_22.jpg`** (Australian)<br>**`imgi_21.jpg`** (Double patty)<br>**`imgi_34.jpg`** (Crispy kale) | Retain horizontal scaling track (`scale(0.85) → scale(1.0)`). Isolate transparent PNG cutouts or framed cards showcasing real client ingredients. |
| **Scene 4: Multi-Row Ticker Marquee** | Graphic brand rhythm; reinforces core brand slogans and identity. | *"BURGER HOUSE DIADEMA ★ O PRAZER DO HAMBÚRGUER ARTESANAL ★ FEITO NA CASA ★"* | Custom SVG icons (house chimney logo emblem, burger, heart, bacon). | Replicate 4-row alternating outline/solid display typography marquee running continuously across cream background. |
| **Scene 5: Portions & Specialty Highlight** | Highlights complementary food offerings & house craft specialties. | *"PORÇÕES SEQUINHAS & MAIONESE VERDE DA CASA" — Polenta frita, batatas rústicas com cheddar e bacon, e maionese verde artesanal.* | **`imgi_23.jpg`** (Table spread with loaded fries & green mayo) + **`imgi_31.jpg`** (Passion fruit drink). | Replicate central statement block with overlapping food imagery highlighting polenta, loaded fries, green mayo, and drinks. |
| **Scene 6: Dual Venue Location & Format Cards** | Clear operational breakdown of dining vs delivery services. | **Card 1: REFEIÇÃO NO LOCAL**<br>R. Moacyr Goulart Cunha Caldas, 351 - Centro<br>Abre às 17:00 | Espaço acolhedor.<br>**Card 2: DELIVERY & DRIVE-THROUGH**<br>Delivery sem contato via iFood / EasyDellivery. | **Custom Vector Icons:** House/Dine-In Icon & Delivery Scooter Icon.<br>**Grid:** 2-column equal card layout (`50% / 50%`). |
| **Scene 7: Action Ticker Banner & Recruitment Box** | Direct conversion drive (order CTAs) + community inclusion box. | **Banner:** *"PEDIR ON-LINE ★ FAÇA SEU PEDIDO ★ ENTREGAMOS NA SUA CASA ★"*<br>**Action Box:** *"FAÇA SEU PEDIDO ON-LINE OU PELO WHATSAPP (11) 95051-6464"* | WhatsApp SVG Icon, Order Button, House Chimney Logo Emblem. | Replicate full-bleed Sunny Yellow accent section with horizontal text ticker and prominent WhatsApp/Order action buttons. |
| **Scene 8: Deep Forest Green Utility Footer** | Global navigation, verified contact information, social connectivity. | **Logo:** HOUSE BURGUER DIADEMA badge.<br>**Links:** Cardápio, Lanches, Porções, Delivery, Endereço.<br>**Address:** Centro, Diadema - SP. | **`imgi_2.jpg`** (Circular logo mark SVG re-creation). | Replicate deep forest green/charcoal footer background with yellow branding mark, social media icon hover swap, and address details. |

---

## 3. SIGNATURE DEVICE ADAPTATION SPECIFICATIONS

### 1. Scaling Burger Slider Mechanism
* **Reference Grammar:** `.burger-card { transform: scale(0.85); transition: transform 0.3s ease; }` and `.burger-card.is-active { transform: scale(1); z-index: 2; }`
* **Client Adaptation:** Implement JS IntersectionObserver or scroll position listener on `.burger-track`. As the user scrolls, the active burger centered in viewport scales to `1.0`, while side cards rest at `0.85`. Displays client's real food photos (`imgi_18`, `imgi_22`, `imgi_34`).

### 2. Custom Interactive SVG Cursor
* **Reference Grammar:** Fixed container `.custom-cursor` following mouse coordinates with `cursor-hover.svg` default and `cursor-default.svg` on link hover. Disabled on screens `≤ 768px`.
* **Client Adaptation:** Build pure CSS/JS custom cursor element using client line-art SVG (e.g. house chimney icon or burger outline). Swaps cursor state when hovering over buttons, cards, and links.

### 3. Multi-Row Marquee Ticker
* **Reference Grammar:** Continuous CSS keyframe animation (`translateX(0) → translateX(-50%)`) across 4 stacked horizontal rows with alternating solid green (`#0F3E2E`) and outline text.
* **Client Adaptation:** Maintain 4-row marquee structure using client slogan ("BURGER HOUSE DIADEMA ★ O PRAZER DO HAMBÚRGUER ARTESANAL") and house chimney/heart SVG separators.

### 4. Handwritten Sticker & Mascot Overlays
* **Reference Grammar:** Positioned absolute SVG stickers (`@paputmenorca`, `ojos.svg`) breaking container padding boundaries.
* **Client Adaptation:** Create custom handwritten SVG tag (`@houseburguer.diadema`) overlaying the Scene 2 manifesto section, and house logo emblem details on section corners.

---

*Mapping completed in strict compliance with MANIFESTO.md Rule 1 and Rule 16.*
