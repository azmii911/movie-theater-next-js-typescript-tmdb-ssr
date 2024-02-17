"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${term}`);
    setTerm("")
  };
  return (
    <div className="mx-5 border-b-[1px] focus-within:border-b-[2px] focus-within:border-primary transition-colors">
      <form onSubmit={handleSearch}>
        <div className="flex flex-row justify-between w-fit p-2">
          <input
            type="text"
            value={term}
            placeholder="Search Movies"
            className="outline-none text-sm ml-2 bg-transparent"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <SearchIcon size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
