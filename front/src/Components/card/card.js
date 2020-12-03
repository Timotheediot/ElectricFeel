import React, { useState } from "react";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";

const Card = ({ auto }) => {
  const descriptionCard =
    auto.description !== null && auto.description.substring(0, 220);

  const [likeActive, setLikeActive] = useState(false);

  const addFavoriteCar = () => {
    setLikeActive(!likeActive);
  };

  return (
    <div className="py-4 mx-5 shadow-sm">
      <div className="max-w-md md:max-w-xs rounded overflow-hidden shadow-lg  bg-gray-800 text-gray-100 hover:bg-gray-900 cursor-pointer transition duration-100 ease-in-out">
        <div className="flex justify-center">
          <img className=" w-auto h-48 " src={auto.url} alt={auto.auto} />
        </div>
        <div className="px-6 py-4">
          <span className="flex justify-between font-bold text-xl mb-2">
            {auto.brand} {auto.model_auto}
            <LikeIcon
              onClick={() => addFavoriteCar()}
              className={`${
                likeActive
                  ? "w-6 h-6 fill-current text-orange-600 transition duration-500 ease-in-out"
                  : "w-6 h-6 fill-current text-gray-800 hover:text-gray-700 transition duration-500 ease-in-out"
              }`}
            />
          </span>
          <p className="text-grey-darker text-base">{descriptionCard}…</p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #{auto.type}
          </span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #{auto.power}kWh
          </span>
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            #{auto.autonomy}km
          </span>
        </div>
        <div className=" flex justify-center px-3 py-1 text-xl font-semibold  text-gray-800 hover:text-grey-100 mb-1">
          <p className="text-gray-800 hover:text-gray-700">{auto.price}€</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
