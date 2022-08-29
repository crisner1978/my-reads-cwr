import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import { getAll, update } from "../utils/booksApi";
import { shelves } from "../utils/shelves";

const SelectionBox = ({ book }) => {
  const { mutate } = useMutation(update);
  const { data } = useQuery(["Books"], async () => await getAll());

  const filtered = data?.length && data?.filter((item) => item.id === book.id);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                absolute -bottom-3 -right-4 group rounded-full w-fit p-2 bg-green-500 cursor-pointer hover:brightness-110 transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <ChevronUpIcon
              className={`${open && "rotate-180"} h-5 w-5 text-white`}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute -left-1/12 z-10 mt-3 w-screen max-w-sm -translate-x-1/3 transform px-4 sm:px-0">
              {({ close }) => (
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-white py-4 rounded-md shadow-md z-40 absolute -bottom-14 right-5">
                    <div className="text-sm">
                      <p
                        className={`${
                          filtered[0]?.shelf === undefined
                            ? "bg-blue-500 text-white font-semibold"
                            : "hover:text-blue-500 text-dark-1"
                        }  w-full px-4 py-2 cursor-pointer`}>
                        Move to...
                      </p>
                      {shelves.map((shelf) => (
                        <p
                          onClick={() => {
                            mutate({ book, shelf: shelf.slug });
                            close();
                          }}
                          className={`${
                            filtered[0]?.shelf === shelf.slug ||
                            book.shelf === shelf.slug
                              ? "bg-blue-500 text-white font-semibold"
                              : "hover:text-blue-500 text-dark-1"
                          }  w-full px-4 py-2 cursor-pointer`}
                          key={shelf.id}
                          value={shelf.slug}>
                          {shelf.heading}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default SelectionBox;
