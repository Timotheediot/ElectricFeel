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

  // const [optionListByBrand, setOptionListByBrand] = useState([]);
  const getautoList = async () => {
    try {
      const res = await axios.get("http://localhost:4000/auto");
      setAutoList(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    console.log(res.data);
  };

  useEffect(() => {
    getautoList();
    fetchInputValue();
  }, []);

  console.log(autoList);
  // useEffect(() => {
  //   const filterBrand = () => {
  //     const newArrayAuto = autoList.filter((auto) => auto.brand === brand);
  //     setOptionListByBrand(newArrayAuto);
  //   };
  //   filterBrand();
  // }, [brand]);

  return (
    <div className="w-full h-full flex flex-wrap md:flex-no-wrap focus:outline-none">
      <div className="w-full md:w-1/2 lg:w-1/2  flex flex-wrap items-center justify-center">
        <h2 className="uppercase text-center md:text-left text-gray-100 text-3xl font-bold pt-20 md:pl-4">
          Passer à une conduite plus propre.
        </h2>
        <img
          src={Porsche}
          alt="porsche4s"
          className="w-auto md:mb-32 rounded-md"
        />
      </div>
      <form className="w-full md:w-1/2 bg-gray-800 rounded-md p-10 mx-10 mt-10 mb-10">
        <InputBrand
          autoList={autoList}
          brand={brand}
          setBrand={(e) => setBrand(e)}
        />
        <InputSeat />
        <InputType autoList={autoList} />
        <SliderPrice />
        <hr className="border-2 border-gray-900 rounded-full mb-5" />
        <SliderAutonomy />
        <InputTime autoList={autoList} />
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
