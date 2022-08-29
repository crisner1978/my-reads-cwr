import { useRef } from "react";
import { useDrop } from "react-dnd";
import { findShelfIndex } from "../utils/shelves";
import BookCard from "./BookCard";

const Shelf = ({ books, slug, heading, moveBook, shelf }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "book",
    drop: (item) => {
      if (!ref.current) return;
      const dragIndex = findShelfIndex(item.book);
      const hoverIndex = shelf;
      if (dragIndex === hoverIndex) return;
      moveBook(item.book, hoverIndex);
    },
  });

  drop(ref);

  return (
    <section
      className={`${
        slug === "read" ? "pb-32" : "pb-16"
      } max-w-5xl px-10 md:px-16 mx-auto`}>
      <h1 className="text-xl sm:text-2xl font-bold tracking-wider w-full border-b pb-2 border-dark-1 mb-5">
        {heading}
      </h1>
      <div ref={ref} className="flex justify-start flex-wrap gap-8 p-3">
        {books
          ?.filter((book) => book.shelf.includes(slug))
          .map((book, index) => (
            <BookCard
              key={book.title}
              book={book}
              index={index}
              moveBook={moveBook}
            />
          ))}
      </div>
    </section>
  );
};

export default Shelf;
