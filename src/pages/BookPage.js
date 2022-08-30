import {
  Authors,
  BookDetails,
  BookTitle,
  PageSkeleton,
  SelectionBox,
} from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../utils/booksApi";

const BookPage = ({ isSearch }) => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (mounted && bookId) {
      const fetchBook = async () => {
        const res = await getBook(bookId);
        setBook(res);
        setLoading(false);
      };
      fetchBook();
    }
    return () => (mounted = false);
  }, [bookId]);

  if (isLoading) return <PageSkeleton />;

  return (
    <div className="min-h-screen max-w-5xl px-10 md:px-16 mx-auto mt-16 pb-20">
      <main className="mx-auto max-w-5xl grid grid-cols-1 md:gap-8 md:grid-cols-12 py-12 mb-8">
        <section className="col-span-1 md:col-span-7">
          <div className="md:sticky md:top-[121px] space-y-8">
            {/* Left Side*/}
            <section className="mb-8 ">
              <figure className="flex justify-center min-w-[300px] h-[400px]">
                <img
                  src={book?.imageLinks?.thumbnail}
                  alt={book?.title}
                  className="object-contain rounded-lg min-w-[300px] h-[400px]"
                />
                <SelectionBox book={book} bookPage />
              </figure>
            </section>

            {/* Mobile up to md */}
            <BookTitle
              heading="Book Report"
              book={book}
              sectionStyle="mb-8 md:hidden"
              authors={<Authors authors={book?.authors} />}
            />
            <BookDetails
              sectionStyle="md:hidden mb-16 bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md"
              book={book}
            />
            <div className="bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md">
              {book?.description}
            </div>
          </div>
        </section>
        {/* Book title and details */}
        <section className="col-span-1 md:col-span-5">
          <div className="md:sticky md:top-[121px] space-y-8">
            <BookTitle
              heading="Book Report"
              book={book}
              sectionStyle="mb-8 hidden md:flex md:flex-col"
              authors={<Authors authors={book?.authors} />}
            />
            <BookDetails
              sectionStyle="hidden md:flex bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 md:rounded-md"
              book={book}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookPage;
