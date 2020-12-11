import React, { useContext } from "react";
import { AutosContext } from "../../App";
const InputTime = () => {
  const { timeList, setReloadTime } = useContext(AutosContext);

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10 cursor-pointer"
        onChange={(e) => setReloadTime(e.target.value)}
      >
        <option>Choisir le temps de rechagement</option>
        {timeList &&
          timeList
            .sort((a, b) => {
              return a - b;
            })
            .map((value, index) => {
              if (value != null) {
                return (
                  <option value={value} key={index}>
                    {value} heures
                  </option>
                );
              }
            })}
      </select>
    </>
  );
};

export default InputTime;
