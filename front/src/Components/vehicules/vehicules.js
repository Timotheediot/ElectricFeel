import React, { useState, useEffect, useContext } from "react";
import Card from "../card/card";
import axios from "axios";
import { AutosContext } from "../../App";

const Vehicules = () => {
  const [carData, setCardata] = useState([]);

  const {
    autoList,
    setAutoList,
    brand,
    seat,
    type,
    price,
    autonomy,
    reloadTime,
  } = useContext(AutosContext);

  const fetchInputValue = async () => {
    const res = await axios.post("http://localhost:4000/auto/auto", {
      brand: brand,
      seat: seat,
      type: type,
      price: price,
      autonomy: autonomy,
      reloadTime: reloadTime,
    });
    setCardata(res.data);
  };

  useEffect(async () => {
    fetchInputValue();
  }, []);

  console.log("brand in vehicules", brand);
  console.log("cardata", carData);

  return (
    <div>
      <div className="flex flex-wrap w-fulls justify-around mt-10">
        {carData &&
          carData.map((auto, index) => {
            return <Card key={index} auto={auto} />;
          })}
      </div>
    </div>
  );
};

export default Vehicules;
