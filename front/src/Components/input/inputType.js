import React, { useState, useContext } from "react";
import { AutosContext } from "../form/form";

const InputType = () => {
  const autoList = useContext(AutosContext);
  const [type, setType] = useState();

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10">
        <option value="">Choisir le type</option>
        {autoList &&
          autoList.map((value, index) => {
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
