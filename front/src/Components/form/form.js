import React, { useState, useEffect } from "react";
import InputBrand from "../input/inputBrand";
import InputModel from "../input/inputModel";
import InputSeat from "../input/inputSeat";
import Price from "../input/price";
import Porsche from "../../assets/img/porscheModel.png";
import Audi from "../../assets/img/audi-etron-gt.jpg";
import SliderPrice from "../slider/sliderPrice";
import axios from "axios";
import InputAutonomy from "../input/inputAutonomy";

const Form = () => {
  const [autoList, setAutoList] = useState([]);
  const [brand, setBrand] = useState();

  const [optionListByBrand, setOptionListByBrand] = useState([])
  const [optionListByModel, setOptionListByModel] = useState([])

  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto/");
    setAutoList(res.data);
  };

  useEffect(() => {
    fetchInputValue();
  }, []);
  useEffect(() => {
    const filterBrand = () => {
      const newArrayAuto = autoList.filter(auto => auto.brand == brand)
      setOptionListByBrand(newArrayAuto)
    }
    filterBrand()
  }, [brand])
  console.log("brand", brand);
  return (
    <div className="w-full h-full flex flex-wrap md:flex-no-wrap">
      <div className="w-full md:w-1/2 lg:w-1/2 ml-10">
        <img
          src={Porsche}
          alt="porsche4s"
          className="w-auto md:mt-10 rounded-md "
        />
        <h2 className="uppercase text-center md:text-left text-gray-100 text-3xl font-bold">
          Passer à une
          <br />
          conduite plus <br />
          intelligente
        </h2>
      </div>
      <form className="w-full md:w-1/2 bg-gray-800 rounded-md p-10 m-10">
        <InputBrand
          autoList={autoList}
          brand={brand}
          setBrand={(e) => setBrand(e)}
        />
        <InputModel
          optionListByBrand={optionListByBrand}
        />
        <InputSeat
          optionListByModel={optionListByModel}
        />
        <Price />
        <SliderPrice />
        <input
          className="w-full text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="select"
          name="search"
          placeholder="Autonomie en Kilomètres"
        />
        <input
          className="w-full text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="select"
          name="search"
          placeholder="Temps de rechargement"
        />
        <input
          className="w-full text-gray-600  bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Localiser les bornes à proximités Latitude, longitude"
        />
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
