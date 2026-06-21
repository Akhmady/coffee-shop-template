# V1 Prototype Master Plan & Refactor Guide

**Objective:** Refactor existing layout components for pixel-perfect alignment and build the remaining sections to complete Prototype V1. 

**Core Rules:** React/Vite, Tailwind v4 (@theme), `lucide-react` for icons, NO external CDNs. Use local `menuData.js`, `reviewsData.js`, and `shopConfig.js`.

---

## PHASE 1: Refactor Hero & Navbar
Before building new sections, please refactor `Hero.jsx` and `Navbar.jsx` with these specific layout tweaks to match the expansive split-layout reference:

**1. Navbar Centering & Spacing:**
* Update the Navbar container to use `flex justify-between items-center`.
* Ensure the logo is completely flush to the left edge.
* Ensure the Shopping Cart icon is completely flush to the right edge.
* The center navigation links (`Menu`, `About Us`, etc.) must be perfectly centered in the remaining middle space. Increase the gap between these links (e.g., `gap-10`) so they don't look cramped.

**2. Hero Text Alignment (Push further left):**
* The text column in the Hero section is too centered. Increase the max-width of the container (e.g., `max-w-screen-xl` or `max-w-screen-2xl`) and ensure horizontal padding is consistent.
* Make sure the left text column genuinely aligns to the left margin, perfectly matching the left alignment of the logo in the Navbar above it.

**3. Floating Image Sizing:**
* Since the text is pushed left, the right column now has more space. Increase the maximum size of the floating placeholder (the circle/coffee cup). Scale it up slightly larger to fill that new space.

---

## PHASE 2: Build Remaining Components
Once Phase 1 is done, create the remaining components based on these specifications:

**1. Hot Deals (`HotDeals.jsx`)**
* Layout: Grid layout (1-col mobile, 2-cols tablet, 3-cols desktop).
* Data: Filter `menuData.js` to only render items where `isHotDeal === true`.
* Card UI: Clean borders, placeholder colored div for the image, item name, price (formatted with `shopConfig`), short description, and a solid 'Order Now' button. Include an absolute positioned Badge ('Best Seller') on the image.

**2. Gallery / Whole Menu (`GalleryMenu.jsx`)**
* Layout: Similar 3-col grid as Hot Deals.
* Features: Interactive Tab filter above the grid ('All', 'Coffee', 'Non-Coffee').
* Pagination Illusion: Slice the array to show only 6 items initially. Place a wide 'Show All Menu' button below the grid that updates the state to show all remaining items.

**3. Interactive Reservation (`Reservation.jsx`)**
* Layout: A clean, centered form card.
* Form Fields: Full Name, Date, Time, Number of Guests, Special Notes.
* Logic: Prevent default reload on submit. Format a string: e.g., 'Hello, I want to reserve a table for [Guests] on [Date] at [Time]...'. Use `encodeURIComponent` to generate a WhatsApp URL targeting `shopConfig.contact.whatsappNumber` and open it in a new tab.

**4. Review Proof (`ReviewProof.jsx`)**
* Layout: 3-column grid mapping over `reviewsData.js`.
* Card UI: Large `Quote` icon (`lucide-react`) at the top center. Show review text, author name, and render 5 `Star` icons.

**5. Seamless Location (`Location.jsx`)**
* Layout: 50/50 split-screen on desktop.
* Left Column: Display `fullAddress` and `openingHours`. Include a 'Copy Address' button (changes text to 'Copied!' temporarily on click). Add a 'Get Directions' link opening `googleMapsSearchUrl`.
* Right Column: A large styled light div to act as a Map placeholder. Center a `MapPin` icon with a CSS `animate-pulse` class.

**6. Footer (`Footer.jsx`)**
* Simple footer containing brand name, copyright, and flex-row links to Instagram and Email from `shopConfig`.

---

## PHASE 3: Global State & Assembly
* Lift the cart state to `App.jsx` (e.g., `const [cartItems, setCartItems] = useState([])`).
* Pass `addToCart` to 'Order Now' buttons in HotDeals and GalleryMenu.
* Update the Shopping Bag icon in the Navbar to show `cartItems.length` inside a notification badge.
* Assemble `App.jsx` sequentially: `<Navbar/>`, `<Hero/>`, `<PartnerBanner/>`, `<HotDeals/>`, `<GalleryMenu/>`, `<Reservation/>`, `<ReviewProof/>`, `<Location/>`, `<Footer/>`.