import { Authors, SelectionBox } from "components";
import { useDrag } from "react-dnd";

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
      className="flex flex-col items-center space-y-1 w-44 relative cursor-pointer">
      <figure className="mb-3 h-64 w-40 relative object-cover">
        <img
          className="h-64 w-40"
          src={book.imageLinks?.thumbnail}
          alt={book?.title}
        />
        <SelectionBox book={book} />
      </figure>
      <h4 className="font-medium text-sm sm:text-base whitespace-pre-wrap">
        {book.title}
      </h4>
      <Authors authors={book?.authors} />
    </div>
  );
};

export default BookCard;
