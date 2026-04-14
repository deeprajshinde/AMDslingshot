```markdown
# Design System: Modern Organic Editorial

## 1. Overview & Creative North Star: "The Curated Earth"
This design system moves away from the sterile, clinical precision of traditional health apps and toward the sensory experience of a high-end culinary magazine. Our Creative North Star is **"The Curated Earth."** 

We reject the "app-as-a-utility" look in favor of an editorial, lifestyle-first approach. By utilizing intentional asymmetry, overlapping "blob" geometries, and a hierarchy driven by tonal layering rather than rigid grids, we create a digital environment that feels tactile, premium, and inherently trustworthy. The goal is to make the user feel like they are browsing a bespoke cookbook rather than tracking data points.

---

## 2. Color & Tonal Architecture
The palette is rooted in nature—deep forests, sun-drenched earth, and fresh citrus. We use these colors not just for branding, but to build a sense of physical space.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. For instance, a section utilizing `surface-container-low` should sit directly against a `surface` background to create a soft transition.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-weight paper.
- **Layer 1 (The Base):** `surface` (#fbf9f5) or `background` (#fbf9f5).
- **Layer 2 (The Section):** `surface-container-low` (#f5f3ef).
- **Layer 3 (The Card/Interaction):** `surface-container-lowest` (#ffffff) for maximum "pop" and cleanliness.
- **Layer 4 (The Accent):** `primary-container` (#1b4332) for deep, immersive focus areas.

### The "Glass & Gradient" Rule
To elevate the experience, use **Glassmorphism** for floating elements (like navigation bars or quick-action overlays). 
- Use semi-transparent `surface` colors with a `backdrop-filter: blur(20px)`.
- Use **Signature Textures**: Apply subtle linear gradients transitioning from `primary` (#012d1d) to `primary-container` (#1b4332) on large CTAs to provide a velvet-like depth that feels premium.

---

## 3. Typography: The Editorial Voice
Our typography pairing balances the authority of a heritage brand with the modern clarity of a tech-forward platform.

*   **Display & Headings (Noto Serif):** This is our "Editorial" voice. Use `display-lg` through `headline-sm` to establish confidence and elegance. The serif reflects the "Trustworthy" aspect of the brand.
*   **Body & UI (Manrope):** Our "Functional" voice. This high-legibility sans-serif is used for data, instructions, and long-form reading.

**Hierarchy Strategy:**
- Use extreme scale contrast. Pair a `display-md` headline with a `body-sm` label to create a sophisticated, spacious layout.
- For dietary advice or "chef's notes," use `title-md` in `tertiary` (#4f0e00) to provide a warm, human touch.

---

## 4. Elevation & Depth
We avoid the "floating on nothing" look of standard Material Design. Depth must feel organic.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. A `surface-container-highest` card placed on a `surface` background provides enough contrast to be felt without needing a harsh stroke.
*   **Ambient Shadows:** If a shadow is required for a floating CTA, use:
    *   `blur`: 40px - 60px
    *   `spread`: -10px
    *   `color`: `on-surface` at 5% opacity. 
    *   *Never use pure black or grey.*
*   **The "Ghost Border" Fallback:** If a container requires further definition for accessibility, use the `outline-variant` (#c1c8c2) at **15% opacity**.
*   **Organic Blobs:** Use `xl` (3rem) or `full` (9999px) roundedness for accent "blobs" that sit behind photography. These shapes should be slightly asymmetrical to mimic natural forms.

---

## 5. Components & UI Elements

### Buttons
*   **Primary:** High-gloss `primary` (#012d1d) with `on-primary` (#ffffff) text. Corner radius: `DEFAULT` (1rem).
*   **Secondary (Tactile):** `secondary-container` (#dfec60) with `on-secondary-container` (#616a00). This lime accent is used for growth-oriented actions (e.g., "Add to Plan").
*   **Tertiary (Warmth):** `tertiary-fixed` (#ffdbd2) for "Delete" or "Warning" actions, softening the blow with terracotta warmth rather than medical red.

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid the use of divider lines. Separate list items using vertical white space (1.5rem+) or by placing items inside individual `surface-container-low` cards with `md` (1.5rem) rounded corners.
*   **Food Photography Cards:** Always use `lg` (2rem) rounded corners. The image should be the hero, often bleeding off one edge of the card to break the "boxed-in" feel.

### Input Fields
*   **Field Style:** Use a "filled" style using `surface-container-high`. 
*   **Active State:** Instead of a thick border, use a 2px bottom-accent in `secondary`.

### Immersive Recipe Chips
*   **Style:** Use `full` roundedness. Background: `primary-fixed-dim` (#a5d0b9). 
*   **Interaction:** On hover/tap, the chip should "grow" slightly (scale: 1.02) to emphasize the tactile nature of the UI.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts where text sits slightly offset from images.
*   **Do** lean into white space. If a screen feels "full," it is no longer premium.
*   **Do** use the `secondary` (Lime) color sparingly—as a "flavor accent" to draw the eye to specific conversion points.
*   **Do** use high-quality, desaturated food photography that emphasizes texture (grains, water droplets, steam).

### Don't:
*   **Don't** use 1px solid borders. Ever.
*   **Don't** use the `error` color (#ba1a1a) for minor warnings; use `tertiary` (Terracotta) to keep the vibe lifestyle-focused.
*   **Don't** use generic icons. Use thin-stroke, custom-drawn icons with rounded caps.
*   **Don't** center-align everything. Use left-aligned editorial columns to maintain the magazine aesthetic.

---

## 7. Spacing & Rhythm
We follow a 8px soft grid, but we encourage **"Negative Space Breathing."** 
- Headers should have a minimum of `xl` (3rem) top padding.
- Card contents should never be cramped; use a minimum internal padding of `md` (1.5rem).
- Use `xl` (3rem) spacing between major sections to let the "Modern Organic" aesthetic breathe.```