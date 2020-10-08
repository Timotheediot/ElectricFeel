import React from "react";
import SearchBar from "../searchBar/searchBar";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-green-800 text-gray-100 shadow-sm h-16">
      <p className="text-2xl ml-6 font-bold tracking-wider hover:text-orange-400 cursor-pointer">
        ELECTRIC FEEL.
      </p>
      <SearchBar />
      <div className="flex justify-end text-xl mr-10 font-light">
        <p className="mr-10 cursor-pointer hover:text-orange-400">Nouveautés</p>
        <p className="mr-10 cursor-pointer hover:text-orange-400">Véhicules</p>
        <p className="cursor-pointer hover:text-orange-400">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
