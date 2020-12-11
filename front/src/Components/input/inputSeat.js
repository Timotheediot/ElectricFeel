import React, { useContext } from "react";
import { AutosContext } from "../../App";

const InputSeat = () => {
  const { seatList, setSeat } = useContext(AutosContext);

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10 cursor-pointer"
        onChange={(e) => setSeat(e.target.value)}
        // value={seat ? seat : null}
      >
        <option value="">Choisir le nombre de places</option>
        {seatList &&
          seatList.sort().map((value, index) => {
            return (
              <option value={value} key={index}>
                {value} places
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputSeat;
