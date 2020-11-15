import React, { useState, useEffect } from "react";
import axios from "axios";

const InputType = () => {
  const [autoType, setAutoType] = useState([]);

  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto/type");
    setAutoType(res.data);
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

  return (
    <>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10">
      <option value="">Choisir le type</option>
        {autoType &&
          autoType.map((value, index) => {
            return (
              <option value={value.type} key={index}>
                {value.type}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputType;
