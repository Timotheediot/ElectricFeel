import React from "react";
import Porsche from "../../assets/img/porscheModel.png";

const Form = () => {
  return (
    <div className="bg-gray-800 w-full flex flex-wrap md:flex-no-wrap">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src={Porsche} alt="porsche4s" />
        <h2 className="italic text-orange-700 text-3xl font-light text-center">
          "Trouvez votre nouvelle voiture électrique en toute simplicité"
        </h2>
      </div>
      <div className="w-full md:w-1/2 bg-green-800 rounded-md p-10 m-10">
        <input
          className="w-full text-gray-600 border-2 border-orange-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none  mb-10"
          type="search"
          name="search"
          placeholder="Marque"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Modèle"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Combien de place ?"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Prix"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Autonomie en Kilomètres"
        />
        <input
          className="w-full text-gray-600 border-2 border-gray-400 bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10"
          type="search"
          name="search"
          placeholder="Temps de rechargement"
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
