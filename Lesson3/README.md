### Lesson 3: MovieGallery Component

This lesson includes a simple presentational component that renders a list of movies as cards.

#### What this component does
- Renders a section title: "My Movie Picks".
- Iterates over a `movies` collection and shows each movie’s poster and title.
- Uses inline `style` objects referenced by name (e.g., `galleryStyle`, `cardStyle`, `imageStyle`, `titleStyle`).

#### Key elements in the file
- **`MovieGallery`**: A function component returning JSX.
- **Inline styles**: The component expects style objects to be available in scope and used via `style` props.
- **List rendering**: Uses `Array.prototype.map` to render each movie card and assigns a `key` by index for demo purposes.

#### Data expectations
- **`movies`**: An array of objects with at least `{ title: string, posterUrl: string }` per item.
- **Styles**: The following style objects are referenced: `galleryStyle`, `cardStyle`, `imageStyle`, `titleStyle`.

#### Intentional gaps for the exercise
- How you wire up data (`movies`) and how you define or import the style objects is up to you.
- How you set up imports/exports, including entry points, is deliberately left as part of the challenge.

#### Try it in a playground
- Consider trying alternate render strategies in the NextLeap React.js online compiler: [NextLeap React.js compiler](https://nextleap.app/online-compiler/reactjs-programming).
- You might explore: providing mock data inline, passing data via props from a parent, or lifting state.

> Note: Keep the focus on understanding component structure and list rendering. Avoid over-optimizing styles or data modeling here.


