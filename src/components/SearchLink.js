import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const SearchLink = ({ text }) =>
  text ? (
    <NavLink
      to="search"
      className={({ isActive }) =>
        isActive ? "text-react-blue" : "text-white"
      }>
      <h3 className={`font-semibold`}>{text}</h3>
    </NavLink>
  ) : (
    <Link to="search" className="fixed bottom-10 right-0 z-50">
      <PlusCircleIcon className="h-14 w-14 text-green-600 hover:brightness-110 transition-all duration-150 ease-out" />
    </Link>
  );

export default SearchLink;
