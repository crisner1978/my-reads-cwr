import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { BookCard } from "../components";
import { searchBooks } from "../utils/booksApi";

const SearchPage = ({ search, isSearch }) => {
  const { data: books, isSuccess } = useQuery(["Search", search], () => searchBooks(search),
    {
      enabled: search?.length >= 3,
    }
  );

  return (
    <main className="max-w-5xl px-10 md:px-16 mx-auto mt-16 pb-20">
      <h1 className="text-xl sm:text-2xl font-bold tracking-wider w-full border-b pb-2 border-dark-1 mb-5">
        Search Results
      </h1>
      {isSuccess && !books?.length && (
        <p className="text-sColor">Try searching for another book...</p>
      )}
      <section className="flex justify-start flex-wrap gap-8 p-3">
        {books?.length ? (
          books
            ?.filter((book) => book?.imageLinks?.thumbnail !== undefined)
            .map((book) => <BookCard key={book.id} book={book} isSearch={isSearch} />)
        ) : (
          <div className="flex justify-center w-full">
            <div className="mt-20 text-xl sm:text-2xl md:text-3xl font-semibold flex flex-col items-center gap-y-2 sm:gap-y-4">
              <div className="rounded-full p-1.5 bg-dark-1 animate-bounce">
                <div className="rounded-full bg-react-blue p-2">
                  <ArrowLongUpIcon className="h-10 w-10 text-dark-1" />
                </div>
              </div>
              <span className=""> Enter a word or book title</span>you'd like to
              search for.....<span></span>{" "}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default SearchPage;
