import BookSection from "./BookSection";

const BookDetails = ({ sectionStyle, book }) => {
  return (
    <div className={`${sectionStyle} flex-col justify-center text-gray-6`}>
      <BookSection heading="Book" title="Details" />
      <div className="grid grid-cols-2 gap-y-4 text-sm font-medium capitalize">
        {book?.categories?.map((category, i) => (
          <div key={i} className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
            <p>Category</p>
            <p className="text-dark-1">{category}</p>
          </div>
        ))}
        {book?.industryIdentifiers?.map((item, i) => (
          <div key={i} className="pt-2 flex border-b border-gray-6/30 justify-between col-span-2 pb-4">
            <p>{item.type}</p>
            <p className="text-dark-1">{item.identifier}</p>
          </div>
        ))}

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Print Type</p>
          <p className="text-dark-1">{book.printType}</p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Rating</p>

          <p className="text-dark-1">
            {book?.maturityRating?.replace("_", " ").toLowerCase() || "Missing"}
          </p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Language</p>
          <p className="text-dark-1">{book?.language?.toUpperCase()}</p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Total Pages</p>

          <p className="text-dark-1">{book?.pageCount || "Missing"}</p>
        </div>
        <div className="flex justify-between col-span-2 pb-4">
          <p className="flex items-center">Publisher</p>
          <p className="text-dark-1">{book.publisher}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
