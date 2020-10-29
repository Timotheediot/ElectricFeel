import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom";

{
  /* <style>
    #menu-toggle:checked + #menu {
      display: block;
    }
  </style> */
}

const Navbar = () => {
  return (
    <>
      <header className="lg:px-16 px-6 bg-brown-700 flex flex-wrap items-center lg:py-0 py-2 shadow-sm">
        <div className="flex-1 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-100 tracking-wider">
            ELECTRIC FEEL
          </h1>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer lg:hidden block"
          >
            <MenuIcon className="w-10 h-10" />
          </label>
        </div>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-100 pt-4 lg:pt-0">
              <li>
                <Link to="/">
                  <p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-600 hover:text-gray-900">
                    Accueil
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/vehicules">
                  <p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-600 hover:text-gray-900">
                    Véhicules
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-600 hover:text-gray-900">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
          >
            <UserIcon className="rounded-full w-10 h-10 p-1 border-2 border-transparent hover:border-gray-900" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
