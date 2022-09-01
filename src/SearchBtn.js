import React from "react";

export default function SearchBtn() {
  return (
    <div className="fixed left-0 text-sm top-20 lg:left-16 2xl:left-60 md:left-4 sm:left-1 lg:text-xl">
      <a href="./#Search ">
        <button className="px-2 py-1 text-gray-500 transition border-2 rounded-full shadow shadow-sky-200 border-sky-200 hover:shadow-lg">
          🔍 Search
        </button>
      </a>
    </div>
  );
}
