# Product Requirements Document (PRD) & White-Label Architecture Guide

## Project: Multi-Client Modular Coffee Shop Landing Page Template

---

## 1. Executive Summary & Business Objective

This document outlines the software requirements and architectural design for a high-performance, production-ready, single-page White-Label Coffee Shop Landing Page Template.

The core business objective is rapid deployment and easy customization. The system must be engineered so that a developer can onboarding a new coffee shop client and deploy a completely bespoke web presence within minutes. This is achieved by separating the underlying application logic from the presentation layer and brand data, eliminating hardcoding entirely.

### Core Architecture Principles:

- **Zero-Backend / Stateless Frontend:** Maximizes speed, minimizes hosting costs, and eliminates server maintenance. All interactions are handled via frontend state and native web APIs.
- **Strict No-CDN Policy:** All assets (fonts, icons, structural elements) must be bundled locally or compiled via standard package managers (NPM/Yarn) to ensure maximum performance, offline reliability, and modern production compliance.
- **Configuration-Driven Development (CDD):** The layout, content, branding, contact details, and logic references are fed entirely from centralized configuration and data files.

## 2. White-Label Customization Architecture

To enable seamless rebranding across multiple distinct coffee shop clients, the codebase utilizes a decoupled configuration system. To spin up a new website, a developer only needs to modify three files in the `/src/config/` and `/src/data/` directories, and overwrite the image assets folder.

### 2.1 File Directory Structure Blueprint

```text
src/
├── assets/
│ └── images/
│ ├── brand/ # logo.svg, favicon.ico
│ ├── hero/ # hero-product.webp, hero-bg.jpg
│ ├── menu/ # item-1.webp, item-2.webp, etc.
│ └── gallery/ # store-1.webp, store-2.webp, etc.
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── PartnerBanner.jsx
│ ├── HotDeals.jsx
│ ├── GalleryMenu.jsx
│ ├── Reservation.jsx
│ ├── ReviewProof.jsx
│ ├── Location.jsx
│ ├── MiniCart.jsx
│ └── Footer.jsx
├── config/
│ └── shopConfig.js # THE CENTRAL NERVOUS SYSTEM (Brand, Links, Theme)
├── data/
│ ├── menuData.js # Complete structural data of all items
│ └── reviewsData.js # Social proof testimonials
├── styles/
│ └── globals.css # Reads theme parameters from shopConfig
└── App.jsx

```

### 2.2 The Theming Engine (Tailwind CSS Integration)

Instead of hardcoding colors into Tailwind classes, the template uses CSS Variables defined dynamically in the global layout or mapped through a single theme configuration object inside `shopConfig.js.`

```JavaScript
// Example Configuration Mapping for Theme Variables
export const themeColors = {
// Client A: Premium Minimalist (Oat & Espresso)
oatmeal: {
background: '#F5F2EA',
textPrimary: '#2C1E16',
accent: '#D36B46', // Terracotta
accentHover: '#B25432',
surface: '#FFFFFF',
},
// Client B: Modern Botanical (Matcha & Slate)
botanical: {
background: '#F0F4F1',
textPrimary: '#1C2D24',
accent: '#2A4B3C', // Forest Green
accentHover: '#1E352A',
surface: '#FFFFFF',
}
};
```

In `globals.css`, these are bound to root variables, ensuring Tailwind utility classes like `bg-primary`, `text-main`, and `bg-accent` automatically adapt based on the selected theme preset.

## 3. Global Configuration Specification (`shopConfig.js`)

This single file contains all vital parameters for a coffee shop client. Modifying this file immediately changes the business details across the entire application.

```javascript
export const shopConfig = {
  brand: {
    name: "Caffeine & Co.",
    tagline: "Slow Roasted, Professionally Brewed",
    logoPath: "/assets/images/brand/logo.svg",
    currencySymbol: "Rp",
  },
  contact: {
    whatsappNumber: "6281234567890", // International format without '+' or spaces
    instagramUsername: "caffeine.co",
    emailAddress: "hello@caffeineco.com",
  },
  deliveryPartners: {
    goFoodLink:
      "[https://gofood.link/a/dummy-store-link](https://gofood.link/a/dummy-store-link)",
    grabFoodLink:
      "[https://food.grab.com/id/id/restaurant/dummy-link](https://food.grab.com/id/id/restaurant/dummy-link)",
    shopeeFoodLink:
      "[https://shopee.co.id/universal-link/dummy-link](https://shopee.co.id/universal-link/dummy-link)",
    showBanner: true,
  },
  location: {
    fullAddress: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan, 12190",
    openingHours: "Mon - Sun: 07:00 AM - 10:00 PM",
    googleMapsSearchUrl:
      "[https://maps.google.com/?q=Jl.+Senopati+No.+45+Jakarta](https://maps.google.com/?q=Jl.+Senopati+No.+45+Jakarta)",
  },
};
```

### 4. Structural Data Layer Architecture

### 4.1 Menu Dataset (src/data/menuData.js)

Items are categorized dynamically. The layout engine maps through this array to render components instantly.

```JavaScript
export const menuItems = [
{
id: "hot-deal-1",
name: "Signature Caramel Macchiato",
category: "coffee",
price: 38000,
description: "Espresso combined with vanilla syrup, milk, and caramel drizzle.",
image: "/assets/images/menu/caramel-macchiato.webp",
isHotDeal: true,
badge: "Best Seller"
},
{
id: "menu-item-2",
name: "Iced Sea Salt Matcha",
category: "non-coffee",
price: 42000,
description: "Premium ceremonial uji matcha topped with artisanal sea salt cream savory foam.",
image: "/assets/images/menu/sea-salt-matcha.webp",
isHotDeal: false,
badge: "New Release"
}
// Additional items append here smoothly...
];
```

### 4.2 Testimonial Dataset (src/data/reviewsData.js)

```JavaScript
export const clientReviews = [
{
id: 1,
author: "Amanda Putri",
rating: 5,
text: "The Caramel Macchiato here is unmatched. The atmosphere is quiet, perfect for working remote.",
date: "2 weeks ago"
},
{
id: 2,
author: "Rian Wijaya",
rating: 5,
text: "Seamless reservation system! Booked a table for a meeting, got instant confirmation via WA.",
date: "1 month ago"
}
];

```

## 5. Functional Component & Layout Requirements

### 5.1 Hero Section & Navbar (Integrated Concept)
* **Visual Spec:** A seamless, light, and modern interface. No border, line, or color shift separating the navigation header from the hero section. Both share the same light background color (e.g., `themeColors.oatmeal.background`).
* **Layout Strategy (Split Layout):** * **Desktop:** 2-column grid (`grid-cols-2`). 
  * **Mobile:** 1-column stack, text on top, image below.
* **Left Column (Typography & CTA):** Features massive, bold typography for the headline (Brand Tagline), a descriptive paragraph, and two action buttons aligned to the left. Text color uses deep dark tones (e.g., `#2C1E16`).
* **Right Column (Floating Product):** Instead of a full-width background photo, this column displays an ultra-large, isolated product image with a transparent background (e.g., a giant floating coffee cup). It breaks standard grid boundaries slightly to create a dynamic, 3D feeling.
* **Navigation Items:** Menu, Reservation, Gallery.
* **Micro-interaction:** Active menu state displays an animated mini-block/underline directly underneath the menu label using CSS scale transformations (`transition-transform duration-300 transform scale-x-100`).

### 5.2 Delivery Partners Banner

- **Visual Spec:** A slim horizontal ribbon spanning the full width of the screen right below the Hero block.[cite: 2]
- **UX Treatment:** Contains logo SVGs for GoFood, GrabFood, and ShopeeFood. To maintain high-end aesthetic value, logos are rendered in full monochrome grayscale (`filter: grayscale(100%) opacity(60%)`).[cite: 2]
- **Micro-interaction:** Hovering over a specific logo transitions it dynamically into its native brand colors (`filter: grayscale(0%) opacity(100%) transform: translateY(-2px)`) with smooth CSS easing (`transition: all 0.3s ease-in-out`).[cite: 2]

### 5.3 Hot Deals (Curated Product Section)

- **Grid Layout:** Desktop: `grid-cols-3` | Tablet: `grid-cols-2` | Mobile: `grid-cols-1`.[cite: 2]
- **Data Targeting:** Filtered query extracting items where `isHotDeal === true`.[cite: 2]
- **Element Specs:** Renders product cards containing clean borders, item name, price formatted with structural local currency, a truncated descriptive copy, and a high-prominence "Order Now" action button.[cite: 2]

### 5.4 Gallery / Whole Menu Section

- **Grid Layout:** 3-column rows displaying elements dynamically based on category tab filters (`All`, `Coffee`, `Non-Coffee`).[cite: 2]
- **Pagination Trick (No-Backend Limit):** Renders an initial array slice of exactly 6 cards (2 rows of 3). A wide button captioned "Show All Menu" sits at the bottom edge.[cite: 2]
- **Micro-interaction:** Pressing "Show All Menu" overrides the array slicing variable to display the full dataset using smooth height transitions, avoiding hard pagination reloads and keeping the user exploring natively.[cite: 2]

### 5.5 Interactive Reservation Section

- **Objective:** Acts as a data-gathering step that funnels instantly into a client's workflow.[cite: 2]
- **Form Parameters:** Inputs for Full Name, Date of Visit, Time Window, Total Guest Count, and Special Notes.[cite: 2]
- **Frontend Handling:** Submitting the form validates parameters natively on the client-side. Once confirmed, JavaScript processes strings to automatically compile an encoded WhatsApp URL structure redirecting the submission right to the store manager.[cite: 2]

### 5.6 Social Proof / Review Section

- **Grid Layout:** Clean 3-card desktop alignment.[cite: 2]
- **Visual Anchor:** An oversized typographic opening quotation icon (“) positioned prominently at the top-center of each review panel to direct design vocabulary. Includes structured vector star arrays matching the review object rating key.[cite: 2]

### 5.7 Seamless Interactive Location Section

- **Visual Spec:** Split-screen layout (50/50 block on Desktop).[cite: 2]
- **Left Column Content:** Formatted business typography listing hours of operation and geographic text. Contains a prominent "Copy Address" macro button. Clicking this triggers a `navigator.clipboard.writeText` event, popping a micro toast alert component stating "Address copied to clipboard!".[cite: 2]
- **Right Column Content:** A lightweight, custom vectorized map layout or styled map graphics corresponding to the layout theme. Avoids thick iframe overheads. Features a central map pin icon styled with CSS pulse animation loops (`animation: pulse 2s infinite`).[cite: 2]
- **CTA Handling:** Features a "Get Directions" action button that seamlessly maps a clean external target hyperlink to real Google Maps parameters on an isolated browser page.[cite: 2]

---

## 6. Frontend State Management & WhatsApp Order Logic

The core application engine relies on local reactive memory arrays to mimic enterprise-level database architectures, granting a real-app user feel.[cite: 2]

### 6.1 Mini-Cart & Side-Drawer Mechanism

When a visitor interacts with any "Order" button across the layout:[cite: 2]

1. The selected item's structural object ID is appended into a reactive global application array wrapper (`cartState`).[cite: 2]
2. A side-drawer shopping panel slides seamlessly onto the screen viewport area (`transform: translateX(0)` from the right edge).[cite: 2]
3. The interface calculates automated line-item aggregations, tracking unit volumes and presenting combined currency summations clearly.[cite: 2]

### 6.2 Plaintext Message Encoder Logic

When a customer clicks "Checkout via WhatsApp", the application aggregates the current client card array state into a cleanly spaced text template structure. This data string is processed through native runtime text masking (`encodeURIComponent`) to spawn deep hyperlinks routing directly onto customer devices.[cite: 2]

**Generated Message Blueprint (Sample output on client WhatsApp app):**[cite: 2]

```text
Halo [Brand Name], saya ingin memesan menu berikut melalui website:

Detail Pesanan:
- 2x Signature Caramel Macchiato (Rp 76.000)
- 1x Iced Sea Salt Matcha (Rp 420.000)

Total Pembayaran: Rp 118.000
Tipe Pesanan: [Delivery / Dine-In / Takeaway]

Mohon konfirmasi pesanan dan instruksi pembayaran selanjutnya. Terima kasih!
```

### 7. Performance & Quality Assurance Guidelines

Because this landing page serves as a master freelance sales template and engineering portfolio showcase, technical optimization constraints must remain exceptionally rigid.[cite: 2]

SEO and OpenGraph Compliance: Complete integration of native document header metadata fields. Structured social thumbnail specifications must exist in the static project deployment wrapper, guaranteeing rich graphic card preview cards populate when links are transmitted over messenger channels.[cite: 2]

Media Asset Performance Optimization: Structural master background assets and drink photos must go through modern asset format optimization processing (conversion to highly compressed `.webp` format) restricted below strict data bandwidth ceilings (Maximum 350KB file size envelopes per key asset).[cite: 2]

Smooth Animation Profiles: Avoid heavy external JavaScript layout libraries. All structural interface motions—such as button down-clicks, overlay card transformations, text reveal sliding effects, or slide-drawer tracking—must run exclusively over native CSS transition property declarations to maintain continuous high frame-rate rendering cycles.[cite: 2]

## 8. Recommended Technology Stack

To maintain a perfect balance between high performance, rapid customization (white-labeling), and strong engineering portfolio value without over-engineering the application, the following technology stack is strictly recommended:

### 8.1 Core Presentation Layer

- **HTML5:** Emphasizing semantic markup (`<nav>`, `<section>`, `<article>`) to ensure high accessibility (a11y) and local SEO compliance.
  - **Tailwind CSS v4 (CSS-First Configuration):** The agent MUST use Tailwind v4's modern CSS-first configuration. Do not generate a legacy `tailwind.config.js`. All theme colors, fonts, and custom variables must be defined using the `@theme` directive directly inside `src/styles/globals.css`.the configuration-driven theming architecture required for white-labeling.

### 8.2 Logic & UI Framework

- **React.js (via Vite):** Chosen for its modular, component-based architecture. React makes building dynamic interfaces (like the interactive Menu Tabs and Mini-Cart Side Drawer) highly efficient. Vite replaces Webpack as the build tool to guarantee blazing-fast local development and highly optimized, minified production builds.
- **Vanilla JavaScript (ES6+):** For native DOM manipulations, local array state management, and the plaintext message encoder (WhatsApp URL formatting) without relying on heavy, unnecessary state-management libraries like Redux.

### 8.3 Assets & Iconography

- **Local SVG Icons (Lucide / Heroicons):** To strictly enforce the "No-CDN" policy, all iconography relies on lightweight, locally imported SVG components rather than external icon fonts (like FontAwesome). This guarantees zero external HTTP requests for icons and flawless rendering.

### 8.4 Why This Stack Sells:

1.  **Fast Load Times:** No bloated frameworks or external CDNs mean the page load is near-instant, a critical metric for F&B businesses.
2.  **Scalability:** The component-based React structure allows new features (like an actual backend integration later) to be added seamlessly without rewriting the UI.
3.  **Cost-Effective Hosting:** As a stateless static site build, the final compiled output can be hosted for free or at a very low cost on platforms like Vercel, Netlify, or GitHub Pages.

### 9 Others

- **Asset Placeholders:** Since external CDNs are forbidden, the agent must use simple HTML `div` blocks with background colors (e.g., `bg-neutral-200`) or generate inline minimal SVG shapes as temporary placeholders for all images, logos, and icons until the actual local assets are provided.
