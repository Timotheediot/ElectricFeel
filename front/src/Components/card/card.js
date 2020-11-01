import React from "react";
import "./card.css";

const Card = ({ auto }) => {
  const descriptionCard = auto.description.substring(0, 220);

  return (
    <div className="py-4 mx-5 shadow-sm">
      <div className="max-w-md md:max-w-xs rounded overflow-hidden shadow-lg  bg-gray-800 text-gray-100 hover:bg-gray-900 cursor-pointer transition duration-100 ease-in-out">
        <img
          className="w-full max-h-32"
          src={auto.url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {auto.brand} {auto.auto}
          </div>
          <p className="text-grey-darker text-base">{descriptionCard}…</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #{auto.type}
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #{auto.power}kWh
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            #{auto.autonomy}km
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
