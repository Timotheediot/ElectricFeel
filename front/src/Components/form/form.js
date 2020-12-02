import React, { useState, useEffect, createContext } from "react";
import InputBrand from "../input/inputBrand";
import InputSeat from "../input/inputSeat";
import Porsche from "../../assets/img/porscheModel.png";
import SliderPrice from "../slider/sliderPrice";
import axios from "axios";
import InputType from "../input/inputType";
import SliderAutonomy from "../slider/sliderAutonomy";
import InputTime from "../input/inputTime";
import { useHistory } from "react-router-dom";

export const AutosContext = createContext();

const Form = () => {
  const [autoList, setAutoList] = useState([]);
  const [brand, setBrand] = useState(null);
  const [seat, setSeat] = useState(null);
  const [type, setType] = useState(null);
  const [price, setPrice] = useState(null);
  const [autonomy, setAutonomy] = useState(null);
  const [reloadTime, setReloadTime] = useState(null);
  const history = useHistory();

  const fetchInputValue = async () => {
    const res = await axios.post("http://localhost:4000/auto/filter/", {
      brand: brand,
      seat: seat,
      type: type,
      price: price,
      autonomy: autonomy,
      reloadTime: reloadTime,
    });
    setAutoList(res.data);
    console.log("autoList in post request", autoList);
    // .then(history.push("/vehicules"));
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

  // console.log("brand :", brand);
  // console.log("seat :", seat);
  // console.log("type :", type);
  // console.log("price :", price);
  // console.log("autonomy :", autonomy);
  // console.log("reloadTime :", reloadTime);

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   console.log(auto);
  //   const res = await axios
  //     .get("http://localhost:4000/auto/")
  //     .then((response) => {
  //       setAutoList(response.data);
  //     })
  //     // .then(history.push("/vehicules"))
  //     .catch((error) => console.log(error));
  // };

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
      <form
        className="w-full md:w-1/2 bg-gray-800 rounded-md p-10 mx-10 mt-10 mb-10"
        onSubmit={fetchInputValue}
      >
        <AutosContext.Provider
          value={{
            autoList,
            setBrand,
            setSeat,
            setType,
            setPrice,
            setAutonomy,
            setReloadTime,
          }}
        >
          <InputBrand />
          <InputSeat />
          <InputType />
          <SliderPrice />
          <hr className="border-2 border-gray-900 rounded-full mb-5" />
          <SliderAutonomy />
          <InputTime />
        </AutosContext.Provider>
        <input
          type="submit"
          value="CHERCHER"
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-gray-200 tracking-wider cursor-pointer hover:bg-green-500 hover:text-gray-900"
        />
      </form>
    </div>
  );
};

export default Form;
