import React, { useState, useEffect } from "react";
import axios from "axios";
import { Range, getTrackBackground } from "react-range";

const SliderPrice = () => {
  const [state, setState] = useState({ values: [0, 110000] });

  const STEP = 100;
  const MIN = 0;
  const MAX = 110000;
  return (
    <>
      <h2 className="text-gray-300 text-lg mb-2">Prix</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setState({ values });
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                className="w-full h-2 rounded-md"
                ref={props.ref}
                style={{
                  background: getTrackBackground({
                    values: state.values,
                    colors: ["#1a202c", "#dd6b20", "#1a202c"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              className="flex justify-center items-center w-8 h-8 rounded-lg bg-gray-900 focus:outline-none"
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#dd6b20" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output className="text-md text-white mt-2 mb-8 " id="output">
          {state.values[0]}
          {"€"} - {state.values[1]}
          {"€"}
        </output>
      </div>
    </>

    // EXEMPLE 1 :
    // <div className="outline-none focus:outline-none">
    //   <h2 className="text-gray-300 text-lg focus:outline-none">Prix</h2>
    //   <Range
    //     step={100}
    //     min={0}
    //     max={"110000"}
    //     values={state.values}
    //     onChange={(values) => setState({ values })}
    //     renderTrack={({ props, children }) => (
    //       <div
    //         {...props}
    //         className="focus:outline-none w-full h-4 bg-gray-900 rounded-full mt-5 mb-2 "
    //       >
    //         {children}
    //       </div>
    //     )}
    //     renderThumb={({ props }) => (
    //       <div
    //         {...props}
    //         className="w-6 h-6 bg-white rounded-full focus:outline-none"
    //       />
    //     )}
    //   />

    //   <div className="flex justify-between text-white mb-10 text-md">
    //     <p>
    //       {state.values}
    //       {"€"}
    //     </p>
    //     <p>
    //       {state.values}
    //       {"€"}
    //     </p>
    //   </div>

    /* EXEMPLE 2 :  */
    /* <div className="flex w-full m-auto items-center h-32 justify-center">
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
                    <div className="bg-orange-600 -mt-8 text-gray-100 truncate text-xs rounded py-1 px-4">
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
      </div> */
  );
};

export default SliderPrice;
