import React, { useState, useEffect } from "react";
import axios from "axios";

const InputAutonomy = () => {
  const [inputValue, setInputValue] = useState([]);

  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto/autonomy");
    setInputValue(res.data);
  };

  inputValue.sort((a, b) => {
    return a.autonomy - b.autonomy;
  });

  useEffect(() => {
    fetchInputValue();
  }, []);

  return (
    <>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 rounded-lg text-sm focus:outline-none mb-10">
        {inputValue &&
          inputValue.map((value, index) => {
            return (
              <option value={value.autonomy} key={index}>
                {value.autonomy} km
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputAutonomy;
