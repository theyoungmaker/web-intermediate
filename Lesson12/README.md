### Lesson 12: Router Components Overview

This lesson’s `component.jsx` wires a small gallery app with client-side routing.

#### `MovieGalleryPage()`
- Displays the horizontal movie gallery with hover-to-preview trailers and click-to-select behavior.
- Uses `useState` to track `selectedMovie` and `hoveredMovie`.
- On card click, navigates to the movie detail route using `useNavigate` with the encoded movie title.

#### `MovieDetailPage()`
- Reads the dynamic `:title` URL segment via `useParams`.
- Decodes the title and renders a simple detail view.
- Includes a back link to the gallery.

#### `FavoritesPage()`
- Placeholder page for user favorites.
- Provides a back link to the gallery; intended as an extension exercise to manage state or persistence.

#### `AppWithRouter()`
- The top-level router wrapper using `BrowserRouter`.
- Declares application routes via `Routes` and `Route`:
  - `/` → `MovieGalleryPage`
  - `/movie/:title` → `MovieDetailPage`
  - `/favorites` → `FavoritesPage`


