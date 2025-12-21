# AI coding guide

## High-level architecture
- The root `App.js` wires a `createBrowserRouter` tree and wraps the router inside `BookingContext.Provider`, so feel free to expand shared booking state later even if no consumer exists today.
- Routes: `/` -> `Home`, `/tours` -> `Tours`, `/bookings` -> `Bookings`, `/contacts` -> `Contacts`, `/tours/:id` -> `TourDetails`. Keep the `Navbar` `activeId` (1-4) in sync with each route so both desktop and mobile menus highlight the correct tab.

## Data & backend patterns
- `src/hooks/useFetch.js` is the standard data hook; it hits `http://127.0.0.1:8000/api/:endPoint`, trims `public/` from uploaded images, and expects `response.data.data` for most endpoints except `images`. Always use the returned `{ data, isLoading, error, refetch }` bucket and call `refetch` from retry buttons (see `Home.js`/`Tours.js`).
- Image URLs all share this rule: `${baseUrl}/storage/${imagePath}` where `imagePath` comes from `item.images[0]?.replace('public/', '')`. Reuse the helper logic in `TourCardData`, `Home`, and `Bookings` so the frontend matches the backend storage scheme.

## Pages & navigation
- `Home.js` cycles through featured tours every 5 seconds, shows stats, and sends each `tour` object to `/tours/:id` via `Link state={tour}`. The hero reuses the same `Card` component, so keep `Card` props in sync with the rotating data shape.
- `Tours.js` groups tours by their `type` (`offer`, `religious`, `external`, `internal`) and renders each group with `TourCardData`, which in turn renders `TourCard` inside horizontal `snap-x` carousels. Preserve the fixed width/heights and `overflow-hidden` setup in `TourCard` so snapping stays smooth.
- `TourDetails.js` never re-fetches the tour; if `location.state` is missing it shows an `ErrorPage`. Always pass full tour data into `state` when linking in case a refresh lands the user on the details page.

## Booking & form flows
- `FormsLogic.js` checks for a `customerId` cookie and, if missing, creates a new customer before posting a booking. It posts both to `http://127.0.0.1:8000/api/customers` and `/api/bookings`, persists `customerId`/`bookingId` cookies, and navigates back to `/tours` once a booking succeeds.
- `Bookings.js` mirrors that cookie-first approach: no cookie -> show a CTA to browse tours; cookie present -> fetch `bookings?customer_id[eq]=` plus each tour via `Promise.all`. The component exposes filter tabs (`all`, `pending`, `active`, `canceled`) and runs `handleCancelBooking` (a `PUT` to `/api/bookings/:id` that flips `status: 'canceled'`).
- `BookingCard` relies on `statusConfig` to style badges, toggles an expandable description, and reuses the same `Link state={tourData}` pattern so cancellations can still link back to the tour.

## UI & styling conventions
- The project leans on Tailwind utility classes plus two imported fonts (`Palanquin`, `Libre Baskerville`) defined in `src/index.css` along with animated `wave` helpers and a custom scrollbar. Keep new sections in the same font stack and prefer the existing gradients/palette (`bg-main`, `text-main`, `font-first`, `font-second`).
- Shared components like `Navbar`, `Button`, `Card`, `Footer`, `Loading`, and `ErrorPage` live under `src/Component`; reuse them instead of reinventing identical markup. `Navbar` toggles a responsive menu with `isOpen`, so ensure new pages pass the correct `activeId` to keep the mobile menu in sync.

## Workflow & reliability notes
- Run `npm install`, then `npm start` during development; `npm test` launches the CRA test runner in watch mode, and `npm run build` outputs the optimized site into `/build` for deployment.
- Favor `Loading`/`ErrorPage` components whenever you reach across backend boundaries so users always see retry buttons instead of empty placeholders.
