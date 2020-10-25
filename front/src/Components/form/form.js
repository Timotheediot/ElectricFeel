import React from "react";
import InputBrand from "../input/inputBrand";
import InputModel from "../input/inputModel";
import InputSeat from "../input/inputSeat";
import Porsche from "../../assets/img/porscheModel.png";

const Form = () => {
  return (
    <div className="bg-gray-800 w-full flex flex-wrap md:flex-no-wrap">
      <div className="w-full md:w-1/2 lg:w-1/2 ml-10">
        <img src={Porsche} alt="porsche4s" />
        <h2 className="uppercase text-center md:text-left text-orange-600 text-3xl font-bold">
          Passer à une
          <br />
          conduite plus <br />
          intelligente
        </h2>
      </div>
      <div className="w-full md:w-1/2 bg-green-800 rounded-md p-10 m-10">
        <InputBrand />
        <InputModel />
        <InputSeat />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="select"
          name="search"
          placeholder="Prix Max"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="select"
          name="search"
          placeholder="Autonomie en Kilomètres"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="select"
          name="search"
          placeholder="Temps de rechargement"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Localiser les Bornes à proximités Latitude, longitude"
        />
        <input
          type="button"
          value="CHERCHER"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200  border-2 tracking-wider"
        />
      </div>
    </div>
  );
};

export default Form;
