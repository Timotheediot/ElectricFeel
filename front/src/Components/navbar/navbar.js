import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center bg-gray-200 shadow-sm h-16">
      <p className="w-full text-2xl ml-6">Nos Anciennes.</p>
      <div className="flex justify-end text-xl mr-10 font-light">
        <p className="mr-10">Nouveautés</p>
        <p className="mr-10">Véhicules</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
