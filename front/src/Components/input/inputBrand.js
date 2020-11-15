import React, { useState, useEffect } from "react";
import axios from "axios";

const InputBrand = ({ setBrand, brand }) => {
  const [autoList, setAutoList] = useState([]);
  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto/brand");
    setAutoList(res.data);
  };

  const sortByBrand = (a, b) => {
    if (a && b) {
      if (a.brand < b.brand) return -1;
      if (a.brand > b.brand) return 1;
    }
    return 0;
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setBrand(value);
  };

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 rounded-lg text-sm focus:outline-none mb-10"
        onChange={(e) => handleChange(e)}
        value={brand ? brand : ""}
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
