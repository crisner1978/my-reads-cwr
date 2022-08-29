import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, SearchPage } from "./pages";
import { getAll, update } from "./utils/booksApi";
import { shelves } from "./utils/shelves";

const App = () => {
  const location = useLocation();
  let isSearch = location?.pathname === "/search";

  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState(search);

  const { data: books } = useQuery(["Books"], async () => await getAll());

  useEffect(() => {
    let mounted = true;
    if (!isSearch) {
      if (mounted) {
        setSearch("");
        setDebounced("");
      }
    }
    return () => (mounted = false);
  }, [isSearch]);

  const { mutateAsync } = useMutation(update);

  const moveBook = (book, hoverIndex) => {
    const shelf = shelves[hoverIndex].slug;
    mutateAsync({ book, shelf });
  };

  return (
    <div
      className={`${
        isSearch && "overflow-scroll scrollbar-hide max-h-screen"
      } overflow-hidden max-h-screen`}>
      <Navbar
        title="bookShelf"
        setSearch={setSearch}
        debounced={debounced}
        setDebounced={setDebounced}
        isSearch={isSearch}
      />
      <div className=" scrollbar-hide ">
        <Routes>
          <Route
            path="/"
            element={<HomePage books={books} moveBook={moveBook} />}
          />
          <Route path="search" element={<SearchPage search={search} isSearch={isSearch} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
