import React from "react";
import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-green-800 text-gray-100 shadow-sm h-16">
      <p className="text-2xl ml-6 font-bold tracking-wider hover:text-orange-400 cursor-pointer">
        ELECTRIC FEEL.
      </p>
      <SearchBar />
      <div className="flex justify-end text-xl mr-10 font-light">
        <Link to="/">
          <p className="mr-10 cursor-pointer hover:text-orange-400">Accueil</p>
        </Link>
        <Link to="/vehicules">
          <p className="mr-10 cursor-pointer hover:text-orange-400">
            Véhicules
          </p>
        </Link>
        <Link to="/contact">
          <p className="cursor-pointer hover:text-orange-400">Contact</p>
        </Link>
        <Link to="/login">
          <p className="cursor-pointer hover:text-orange-400">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
