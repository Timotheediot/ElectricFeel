import React from "react";
import "./card.css";

const Card = ({ auto }) => {
  return (
    <div className="py-4">
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-gray-800 text-gray-100">
        <img className="w-full" src={auto.url} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{auto.auto}</div>
          <p className="text-grey-darker text-base">{auto.description}</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #photography
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #travel
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            #winter
          </span>
        </div>
      </div>
      {/* <div className="shadow-lg group container  rounded-md max-w-sm flex justify-center items-center  mx-auto content-div bg-gray-800">
        <div>
          <div className="w-full image-cover rounded-t-md">
            <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
              <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
                NEW
              </span>
              <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                CAR
              </span>
            </div>
          </div>
          <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">
              {auto.auto}
            </span>
            <span className="block text-gray-600 text-sm">
              {auto.description}
            </span>
          </div>
        </div>
        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
          <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
            Auto Name
          </span>
          <div className="pt-8 text-center">
            <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
              Voir le véhicule
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
