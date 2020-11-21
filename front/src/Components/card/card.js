import React, { useState } from "react";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";

const Card = ({ auto }) => {
  const descriptionCard =
    auto.description !== null && auto.description.substring(0, 220);

  const [likeActive, setLikeActive] = useState(false);

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
              className={`${
                likeActive
                  ? "w-6 h-6 fill-current text-orange-600"
                  : "w-6 h-6 fill-current text-gray-900"
              }`}
            />
          </span>
          <p className="text-grey-darker text-base">{descriptionCard}…</p>
        </div>
        <div class="px-6 py-4 flex">
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
