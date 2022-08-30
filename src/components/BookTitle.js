import BookSection from "./BookSection";

const BookTitle = ({ heading, sectionStyle, book, authors }) => {
  return (
    <section
      className={`${sectionStyle} pb-6 border-b-4 border-dark-1/10 relative`}>
      <BookSection
        heading={heading}
        title={book?.title}
        subtitle={book?.subtitle}
      />
      {authors && (
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4">
          <h3 className="text-xl sm:text-2xl pb-2 -mb-0.5">Authors</h3>
          {authors}
        </div>
      )}
    </section>
  );
};

export default BookTitle;
