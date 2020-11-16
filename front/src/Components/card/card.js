import React from "react";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";

const Card = ({ auto }) => {
  const descriptionCard =
    auto.description !== null && auto.description.substring(0, 220);

  return (
    <div className="py-4 mx-5 shadow-sm  max-h-full">
      <div className="max-w-md md:max-w-xs rounded overflow-hidden shadow-lg  bg-gray-800 text-gray-100 hover:bg-gray-900 cursor-pointer transition duration-100 ease-in-out">
        <img
          className="w-full max-h-32"
          src={auto.url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <span className="flex justify-between font-bold text-xl mb-2">
            {auto.brand} {auto.model_auto}
            <LikeIcon className="w-6 h-6 fill-current text-orange-600" />
          </span>
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
