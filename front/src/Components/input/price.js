import React, { useState, useEffect } from "react";
import axios from "axios";

const Price = () => {
  const [inputValue, setInputValue] = useState("");

  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto/price");
    setInputValue(res.data);
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

  return (
    <div>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10">
        {inputValue &&
          inputValue.map((value, index) => {
            return (
              <option value={value.prix} key={index}>
                {value.prix}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Price;
