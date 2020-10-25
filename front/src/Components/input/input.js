import React from "react";

const Input = () => {
  return (
    <div>
      <input
        className="w-full text-gray-600 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
        type="select"
        name="search"
        placeholder="Marque"
      />
    </div>
  );
};

export default Input;
