import React, { useState, useContext } from "react";
import { AutosContext } from "../form/form";

const InputSeat = () => {
  const autoList = useContext(AutosContext);
  const [seat, setSeat] = useState();

  const handleChange = (e) => {
    setSeat(e.target.value);
  };
  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
        onChange={(e) => handleChange(e)}
        value={seat ? seat : null}
      >
        <option value="">Choisir le nombre de places</option>
        {autoList &&
          autoList.map((value, index) => {
            return (
              <option value={value.seat} key={index}>
                {value.seat} places
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputSeat;
