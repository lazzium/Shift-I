# Subtle Bidirectional Fade-In-Up Card Transitions

Implement refined, subtle `fade-in-up` motion transitions with progressive staggered delays for all services and audience cards, functioning seamlessly during both downward (advancing) and upward (reversing) scrolling navigation.

### User Review & Critical Decisions

> [!IMPORTANT]
> - **Bidirectional Scroll Behavior (`once: false`)**: Cards will trigger their smooth fade-in-up animation both when scrolling forward (down) and when scrolling backward (up), creating a continuous fluid browsing experience without abrupt resets.
> - **Subtle Motion Physics**: Displacements are softened from harsh jumps to an elegant 18px–20px subtle vertical rise (`y: 20` $\to$ `y: 0`) paired with cubic-bezier easing (`[0.16, 1, 0.3, 1]`) and comfortable 500ms–600ms duration.
> - **Progressive Stagger Delays**: Cascade offsets are applied systematically (`delay: index * 0.12s`) so cards enter in a rhythmic sequence rather than all simultaneously.

---

### 1. Overview & Core Concept

- **What It Does**: As the visitor scrolls down or back up through the landing page, the 3 Service cards ("Sites e-commerce Shopify", "Projets clé en main", "Créatives publicitaires"), the Audience list items ("À qui s'adresse SHIFT"), and the 3 Approach cards ("Une approche concrète") gently glide into view with sequential staggered timing.
- **Key Value**: Enhances perceived fluidity and polish of the editorial layout while preventing visual jarring or static pop-ins during rapid scroll navigation.

---

### 2. User Experience & Visual Design

- **Service Cards (`#services`)**:
  - Individual cards receive `motion.div` wrappers with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: false, amount: 0.2 }}`, and transition `{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }`.
- **Audience Section ("À qui s'adresse SHIFT")**:
  - Interactive audience category rows animate with progressive staggered delays (`delay: idx * 0.08`), rising smoothly into position upon entering the viewport from either direction.
  - Left preview card and parent container utilize gentle bidirectional visibility thresholds (`amount: 0.15`).
- **Approach Cards ("Une approche concrète")**:
  - The three structural value cards ("Résultats d'abord", "100% clé en main", "Stratégie sur mesure") transition from `viewport={{ once: true }}` to `viewport={{ once: false, amount: 0.2 }}` with progressive cascading delays (100ms, 220ms, 340ms).

---

### 3. Key Product Decisions & Trade-Offs

- **`viewport={{ once: false, amount: 0.2 }}` vs Scroll Progress Math**:
  - *Chosen Approach*: Declarative Framer Motion `whileInView` with `once: false` and `amount: 0.2`.
  - *Why*: Eliminates manual scroll calculations, prevents GPU thrashing, and ensures clean entry/exit states on both forward and reverse scrolling.
- **Hardware Acceleration (`transform` & `opacity` only)**:
  - *Chosen Approach*: Animate strictly GPU-composited CSS properties (`y` translation and `opacity`).
  - *Why*: Zero layout reflow or jank on mobile or high-refresh rate displays.

---

### 4. Technical Architecture & Animation Strategy

```
┌────────────────────────────────────────────────────────┐
│                   Viewport Intersection                 │
│         (Framer Motion whileInView with once: false)    │
└──────────────────────────┬─────────────────────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
┌─────────────────────────┐ ┌─────────────────────────┐
│     Services Cards      │ │   Audience & Approach   │
│  - Card 1: delay 0.00s  │ │  - Item 1: delay 0.00s  │
│  - Card 2: delay 0.12s  │ │  - Item 2: delay 0.08s  │
│  - Card 3: delay 0.24s  │ │  - Item 3: delay 0.16s  │
│  (y: 20 -> 0, opacity)  │ │  - Item 4: delay 0.24s  │
└─────────────────────────┘ └─────────────────────────┘
```

- **Interactive State & Event Mapping**:
  - Existing hover states (preview card image changes, scale-ups) remain 100% active and unhindered.
  - Zero disruption to link navigation, click handlers, or mobile responsiveness.
