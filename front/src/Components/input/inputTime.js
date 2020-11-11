import React, { useState, useEffect } from "react";
import axios from "axios";

const InputTime = ({ autoList }) => {
  //   const [autoSeat, setAutoSeat] = useState([]);

  //   const fetchInputValue = async () => {
  //     const res = await axios.get("http://localhost:4000/auto/seat");
  //     setAutoSeat(res.data);
  //   };

  //   useEffect(() => {
  //     fetchInputValue();
  //   }, []);
  console.log("time", autoList);

  return (
    <>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10">
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
