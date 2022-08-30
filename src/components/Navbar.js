import { ArrowLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SearchLink } from ".";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ title, setSearch, debounced, setDebounced, isSearch }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(debounced);
    }, 1000);
    return () => clearTimeout(timer);
  }, [debounced, setSearch]);

  return (
    <nav className="border-b-dark-1 sticky z-50 bg-dark-1 border-b top-0 shadow-sm shadow-dark-1">
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-16 h-16 max-w-6xl mx-auto">
        {isSearch ? (
          <div className="grid grid-cols-4 sm:grid-cols-3 space-x-4 w-full text-white">
            <NavLink to="/" className="w-fit">
              <ArrowLeftIcon className="h-8 w-8" />
            </NavLink>
            <form className="w-full flex items-center col-span-1">
              <input
                value={debounced}
                onChange={(e) => setDebounced(e.target.value)}
                type="text"
                placeholder="Let's find that book..."
                className="pl-4 bg-transparent outline-none w-fit md:w-full placeholder-react-blue font-medium focus:placeholder-transparent"
              />
              <MagnifyingGlassIcon className="hidden md:flex h-8 w-8 mr-4 md:mr-0" />
            </form>
          </div>
        ) : (
          <>
            <Link to="/">
              <span className="text-2xl font-bold tracking-wide text-react-blue">
                {title}
              </span>
            </Link>

            <SearchLink text="search" />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
