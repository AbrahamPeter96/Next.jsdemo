"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);

    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5 "
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        type="text"
        placeholder="Search..."
        className="w-full flex-1 h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
      />
      <button type="submit" className="text-amber-500 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
}
