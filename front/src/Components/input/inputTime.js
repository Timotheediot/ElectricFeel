import React, { useState, useContext } from "react";
import { AutosContext } from "../form/form";
const InputTime = () => {
  const autoList = useContext(AutosContext);
  const [reloadTime, setReloadTime] = useState();

  const handleChange = (e) => {
    setReloadTime(e.target.value);
  };

  return (
    <>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10">
        <option value="">Choisir le temps de rechagement</option>
        {autoList &&
          autoList.map((value, index) => {
            return (
              <option value={value.reloadTime} key={index}>
                {value.reloadTime} heures
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputTime;
