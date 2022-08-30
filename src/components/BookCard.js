import { Authors, SelectionBox } from ".";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

const BookCard = ({ book, isSearch }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "book",
      item: { book },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div
      ref={!isSearch ? drag : null}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: isDragging ? "#61dafb solid 2px" : "0px",
      }}
      className={`${isSearch ? "cursor-default" : "cursor-pointer"} flex flex-col items-center space-y-1 w-44 relative `}>
      <figure className="mb-3 h-64 w-40 relative object-cover">
        <img
          className="h-64 w-40"
          src={book.imageLinks?.thumbnail}
          alt={book?.title}
        />
        <SelectionBox book={book} isSearch={isSearch} />
      </figure>
      <Link to={`/book/${book.id}`}>
        <h4 className="font-medium text-sm sm:text-base whitespace-pre-wrap hover:scale-105 hover:text-blue-500 transition-all transform duration-150 ease-out">
          {book.title}
        </h4>
      </Link>

      <Authors authors={book?.authors} />
    </div>
  );
};

export default BookCard;
