import React, { useState, useEffect } from "react";
import InputBrand from "../input/inputBrand";
import InputSeat from "../input/inputSeat";
import Porsche from "../../assets/img/porscheModel.png";
import SliderPrice from "../slider/sliderPrice";
import axios from "axios";
import InputType from "../input/inputType";
import SliderAutonomy from "../slider/sliderAutonomy";
import InputTime from "../input/inputTime";

const Form = () => {
  const [autoList, setAutoList] = useState([]);
  const [brand, setBrand] = useState();

  // const getautoList = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/auto/filter");
  //     setAutoList(res.data);
  //     console.log("autoList is :", autoList);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchInputValue = async () => {
    const res = await axios.post("http://localhost:4000/auto/filter/", {
      brand: null,
      seat: null,
      type: null,
      price: null,
      autonomy: null,
      reloadTime: null,
    });
    setAutoList(res.data);
    console.log("Data:", res.data);
  };

  useEffect(() => {
    // getautoList();
    fetchInputValue();
  }, []);

  const sortByBrand = (a, b) => {
    if (a && b) {
      if (a.brand < b.brand) return -1;
      if (a.brand > b.brand) return 1;
    }
    return 0;
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setBrand(value);
  };

  return (
    <div className="w-full h-full flex flex-wrap md:flex-no-wrap focus:outline-none">
      <div className="w-full md:w-1/2 lg:w-1/2  flex flex-wrap items-center justify-center">
        <h2 className="uppercase text-center md:text-left text-gray-100 text-3xl font-bold pt-20 md:pl-4">
          Passer à une conduite plus propre.
        </h2>
        <img
          src={Porsche}
          alt="porsche 4s"
          className="w-auto md:mb-32 rounded-md"
        />
      </div>
      <form className="w-full md:w-1/2 bg-gray-800 rounded-md p-10 mx-10 mt-10 mb-10">
        {/* <InputBrand
          autoList={autoList}
          brand={brand}
          setBrand={(e) => setBrand(e)}
        /> */}

        <select
          className="w-full bg-red-900 text-gray-500 h-10 px-5 rounded-lg text-sm focus:outline-none mb-10"
          onChange={(e) => handleChange(e)}
          value={autoList ? autoList : ""}
        >
          <option value="">Choisir la marque</option>
          {autoList &&
            autoList.sort().map((value, index) => {
              return (
                <option value={value.brand} key={index}>
                  {value.brand}
                </option>
              );
            })}
        </select>

        {/* <InputSeat /> */}
        {/* <InputType autoList={autoList} /> */}
        {/* <SliderPrice /> */}
        <hr className="border-2 border-gray-900 rounded-full mb-5" />
        {/* <SliderAutonomy /> */}
        {/* <InputTime autoList={autoList} /> */}
        <input
          type="button"
          value="CHERCHER"
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-gray-200 tracking-wider cursor-pointer hover:bg-green-500 hover:text-gray-900"
        />
      </form>
    </div>
  );
};

export default Form;
