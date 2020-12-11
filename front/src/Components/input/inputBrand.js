import React, { useContext } from "react";
import { AutosContext } from "../../App";

const InputBrand = () => {
  const { setBrand, brandList } = useContext(AutosContext);

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 rounded-lg text-sm focus:outline-none mb-10 cursor-pointer"
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">Choisir la marque</option>
        {brandList &&
          brandList.sort().map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputBrand;
