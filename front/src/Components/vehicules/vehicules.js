import React, { useState, useEffect } from "react";
import Card from "../card/card";
import axios from "axios";

const Vehicules = () => {
  const [listAuto, setListAuto] = useState([]);

  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto");
    setListAuto(res.data);
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap w-fulls justify-around mt-10">
        {listAuto &&
          listAuto.map((auto, index) => {
            return <Card key={index} auto={auto} />;
          })}
      </div>
    </div>
  );
};

export default Vehicules;
