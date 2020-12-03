import React, { useState, useContext } from "react";
import { AutosContext } from "../../App";
const InputTime = () => {
  const { autoList, setReloadTime } = useContext(AutosContext);

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
        onChange={(e) => setReloadTime(e.target.value)}
      >
        <option>Choisir le temps de rechagement</option>
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
