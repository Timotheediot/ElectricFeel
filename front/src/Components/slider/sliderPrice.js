import React, { useState, useEffect } from "react";
import axios from "axios";

const SliderPrice = () => {
  return (
    <>
      <h2 className="text-gray-300 text-lg">Prix</h2>
      <div className="flex w-full m-auto items-center h-32 justify-center">
        <div className="py-1 relative min-w-full">
          <div className="h-2 bg-gray-900 rounded-full">
            <div className="absolute h-2 rounded-full bg-teal-600 w-0"></div>
            <div
              className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
              unselectable="on"
              onselectstart="return false;"
            >
              <div className="relative -mt-2 w-1">
                <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full">
                  <div className="relative shadow-md">
                    <div className="bg-prange-600 -mt-8 text-gray-100 truncate text-xs rounded py-1 px-4">
                      € 15
                    </div>
                    <svg
                      className="absolute text-orange-600 w-full h-2 left-0 top-100"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
              unselectable="on"
              onselectstart="return false;"
            >
              <div className="relative -mt-2 w-1">
                <div className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full">
                  <div className="relative shadow-md">
                    <div className="bg-orange-600 -mt-8 text-gray-100 truncate text-xs rounded py-1 px-4">
                      € 30
                    </div>
                    <svg
                      className="absolute text-orange-600 w-full h-2 left-0 top-100"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute text-gray-100 -ml-1 bottom-0 left-0 -mb-6">
              € 0
            </div>
            <div className="absolute text-gray-100 -mr-1 bottom-0 right-0 -mb-6">
              ∞
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderPrice;
