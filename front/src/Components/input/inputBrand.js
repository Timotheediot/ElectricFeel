import React, { useContext } from "react";
import { AutosContext } from "../../App";

const InputBrand = () => {
  const { autoList, setBrand, brandList } = useContext(AutosContext);

  // const sortByBrand = (a, b) => {
  //   if (a && b) {
  //     if (a.brand < b.brand) return -1;
  //     if (a.brand > b.brand) return 1;
  //   }
  //   return 0;
  // };
  // console.log(AutosContext);

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 rounded-lg text-sm focus:outline-none mb-10 cursor-pointer"
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">Choisir la marque</option>
        {brandList &&
          brandList.map((value, index) => {
            return (
              <option value={value.brand} key={index}>
                {value}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputBrand;
