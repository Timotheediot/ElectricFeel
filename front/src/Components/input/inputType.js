import React, { useContext } from "react";
import { AutosContext } from "../../App";

const InputType = () => {
  const { setType, typeList } = useContext(AutosContext);

  return (
    <>
      <select
        className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10 cursor-pointer"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Choisir le type</option>
        {typeList &&
          typeList.sort().map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputType;
