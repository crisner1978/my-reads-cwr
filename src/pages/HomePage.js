import { SearchLink, Shelf } from "components";
import withScrolling, { createVerticalStrength } from "react-dnd-scrolling";
import { shelves } from "../utils/shelves";

const ScrollingComponent = withScrolling("div");
const vStrength = createVerticalStrength(250);

const HomePage = ({ books, moveBook }) => {
  return (
    <main className="relative">
      <ScrollingComponent
        className="overflow-scroll scrollbar-hide max-h-screen pt-16"
        verticalStrength={vStrength}>
        {shelves.filter((shelf) => shelf.slug !== 'none').map((shelf, index) => (
          <Shelf
            key={index}
            slug={shelf.slug}
            heading={shelf.heading}
            books={books}
            moveBook={moveBook}
            shelf={index}
          />
        ))}
      </ScrollingComponent>
      <SearchLink />
    </main>
  );
};

export default HomePage;
