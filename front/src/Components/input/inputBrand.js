import React, { useState, useContext } from "react";
import { AutosContext } from "../form/form";

const InputBrand = () => {
  const autoList = useContext(AutosContext);
  const [brand, setBrand] = useState();

  console.log("autoList in inputBrand : ", autoList);

  const sortByBrand = (a, b) => {
    if (a && b) {
      if (a.brand < b.brand) return -1;
      if (a.brand > b.brand) return 1;
    }
    return 0;
  };

  const handleChange = (e) => {
    setBrand(e.target.value);
  };

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 rounded-lg text-sm focus:outline-none mb-10"
        onChange={(e) => handleChange(e)}
        value={brand ? brand : null}
      >
        <option value="">Choisir la marque</option>
        {autoList &&
          autoList.sort(sortByBrand).map((value, index) => {
            return (
              <option value={value.brand} key={index}>
                {value.brand}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputBrand;
