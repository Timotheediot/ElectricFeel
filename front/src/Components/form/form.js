import React, { useState, useEffect, createContext } from "react";
import InputBrand from "../input/inputBrand";
import InputSeat from "../input/inputSeat";
import Porsche from "../../assets/img/porscheModel.png";
import SliderPrice from "../slider/sliderPrice";
import axios from "axios";
import InputType from "../input/inputType";
import SliderAutonomy from "../slider/sliderAutonomy";
import InputTime from "../input/inputTime";

export const AutosContext = createContext();

const Form = () => {
  const [autoList, setAutoList] = useState([]);

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
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

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
        <AutosContext.Provider value={autoList}>
          <InputBrand />
          <InputSeat />
          <InputType />
          <SliderPrice />
          <hr className="border-2 border-gray-900 rounded-full mb-5" />
          <SliderAutonomy />
          <InputTime />
        </AutosContext.Provider>
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
