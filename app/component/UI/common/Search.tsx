"use client";

import { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "";

  const [category, setCategory] = useState(initialCategory);
  const [openSearch, setOpenSearch] = useState(false);

  const isUpdating = useRef(false);

  function handleSearch(ev: React.ChangeEvent<HTMLInputElement>) {
    setCategory(ev.target.value);
  }

  useEffect(() => {
    // Only run on homepage
    if (pathname !== "/") return;

    // Prevent loop updates
    if (isUpdating.current) return;

    const timer = setTimeout(() => {
      isUpdating.current = true;

      const params = new URLSearchParams(searchParams.toString());

      if (category.trim()) {
        params.set("category", category);
      } else {
        params.delete("category");
      }

      router.replace(`/?${params.toString()}`);

      setTimeout(() => {
        isUpdating.current = false;
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [category,pathname,searchParams,router]);

  return (
    <>
      {/* Desktop Search */}
      <div className="mx-auto hidden sm:flex items-center border rounded-full px-4 py-2 text-sm">
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={handleSearch}
        />
        <IoIosSearch />
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden flex items-center ms-auto relative">
        <button onClick={() => setOpenSearch(true)} className="text-xl">
          <IoIosSearch />
        </button>

        {openSearch && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-md rounded-md p-2 w-72">
            <input
              type="text"
              placeholder="Enter Category"
              className="w-full px-3 py-2 outline-none"
              value={category}
              onChange={handleSearch}
            />

            <button
              className="absolute top-0 right-0 -translate-y-1/2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center"
              onClick={() => setOpenSearch(false)}
            >
              <IoClose size={12} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;