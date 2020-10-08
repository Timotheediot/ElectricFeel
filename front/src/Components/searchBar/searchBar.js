import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        className="w-1/2 text-gray-600 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Peugeot 208, Renault Zoé…"
      />
    </>
  );
};

export default SearchBar;
