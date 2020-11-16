import React, { useState, useCallback } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/cancel.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVisibility = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <>
      <header className="lg:px-16 px-6 bg-gray-200 flex flex-wrap items-center lg:py-0 py-2 shadow-sm">
        <div className="flex-1 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 tracking-wider cursor-pointer hover:text-orange-600">
            <Link to="/">ELECTRIC FEEL</Link>
          </h1>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer lg:hidden block"
          >
            <MenuIcon className="w-10 h-10 fill-current text-gray-900" />
          </label>
        </div>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-lg md:text-base text-gray-900 pt-4 lg:pt-0">
              <li>
                <Link to="/">
                  <p className=" text-lg lg:p-4 py-3 px-0 block border-b-4 border-transparent hover:border-orange-600 hover:text-orange-600 transition duration-200 ease-in-out">
                    Accueil
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/vehicules">
                  <p className="text-lg lg:p-4 py-3 px-0 block border-b-4 border-transparent hover:border-orange-600  hover:text-orange-600 transition duration-200 ease-in-out">
                    Véhicules
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p className="text-lg lg:p-4 py-3 px-0 block border-b-4 border-transparent hover:border-orange-600  hover:text-orange-600 transition duration-200 ease-in-out">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={handleVisibility}
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer focus:outline-none"
          >
            {isOpen ? <CloseIcon /> : <UserIcon />}
            <CloseIcon className="rounded-full w-10 h-10 p-1 border-2 border-transparent hover:border-orange-600 transition duration-200 ease-in-out" />
            {/* <UserIcon className="rounded-full w-10 h-10 p-1 border-2 border-transparent hover:border-orange-600 transition duration-200 ease-in-out" /> */}
          </button>
        </div>
      </header>
      <div className={`${isOpen ? "block  bg-gray-200 " : "hidden"} `}>
        <Link to="/login">
          <p className=" text-lg lg:p-4 py-3 px-0 block border-b-4 border-transparent hover:border-orange-600  hover:text-orange-600 transition duration-200 ease-in-out">
            Se connecter
          </p>
        </Link>
        <Link to="/register">
          <p className=" text-lg lg:p-4 py-3 px-0 block border-b-4 border-transparent hover:border-orange-600  hover:text-orange-600 transition duration-200 ease-in-out">
            S'inscrire
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
