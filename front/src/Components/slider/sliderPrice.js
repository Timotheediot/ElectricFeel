import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import axios from "axios";

const SliderPrice = () => {
  const [state, setState] = useState({ values: [0, 110000] });

  const STEP = 100;
  const MIN = 0;
  const MAX = 110000;

  const fetchInputValue = async () => {
    const res = await axios.get("http://localhost:4000/auto/price");
    setState(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchInputValue();
  }, []);

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
              className="flex w-full h-10"
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
        <output className="text-md text-white mt-2 mb-5 " id="output">
          {state.values[0]}
          {"€"} - {state.values[1]}
          {"€"}
        </output>
      </div>
    </>
  );
};

export default SliderPrice;
